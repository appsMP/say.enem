const PREFIX = 'aurora_study_v1_';
const DEBOUNCE_MS = 850;
const allowedTheme = ['dark', 'light'];
export function createDefaults() {return {version: 1, _updatedAt: 0, theme: 'dark', profile: {name: 'Estudante', course: 'Biomedicina', goalMinutes: 60}, lessonDone: [], answers: {}, planChecked: {}, flashcards: {}, essayDrafts: {}, essaySubmitted: {}, quizAttempts: [], favorites: []};}
export function normalizeState(value) {
  const defaults = createDefaults();
  if (!value || typeof value !== 'object' || Array.isArray(value)) return defaults;
  const obj = {...defaults, ...value};
  obj.theme = allowedTheme.includes(obj.theme) ? obj.theme : 'dark';
  obj.profile = {...defaults.profile, ...(value.profile && typeof value.profile === 'object' ? value.profile : {})};
  obj.profile.name = String(obj.profile.name || 'Estudante').slice(0, 48);
  obj.profile.course = String(obj.profile.course || 'Biomedicina').slice(0, 65);
  obj.profile.goalMinutes = Math.max(15, Math.min(360, Number(obj.profile.goalMinutes) || 60));
  for (const key of ['lessonDone', 'quizAttempts', 'favorites']) if (!Array.isArray(obj[key])) obj[key] = [];
  for (const key of ['answers', 'planChecked', 'flashcards', 'essayDrafts', 'essaySubmitted']) if (!obj[key] || typeof obj[key] !== 'object' || Array.isArray(obj[key])) obj[key] = {};
  obj._updatedAt = Number(obj._updatedAt) || 0;
  return obj;
}
function readLocal(key) {try {return normalizeState(JSON.parse(localStorage.getItem(key)))} catch {return createDefaults()} }
function writeLocal(key, data) {try {localStorage.setItem(key, JSON.stringify(data)); return true} catch {return false} }
export const store = {
  client: null, user: null, state: createDefaults(), ready: false, syncStatus: 'local', error: '', onUpdate: () => {}, writeTimer: null, saving: false, pending: false, authEpoch: 0, authEvent: '',
  get configured() {const c = window.SAY_CONFIG || window.AURORA_CONFIG || {}; return Boolean(c.supabaseUrl?.startsWith('https://') && c.supabaseAnonKey)},
  get localKey() {return PREFIX + (this.user?.id || 'guest')},
  notify() {this.onUpdate()},
  async init() {
    this.state = readLocal(this.localKey);
    const c = window.SAY_CONFIG || window.AURORA_CONFIG || {};
    if (this.configured) {
      if (!window.supabase?.createClient) {this.syncStatus = 'error'; this.error = 'Não foi possível carregar a biblioteca de autenticação. Verifique a conexão.';}
      else {
        try {
          this.client = window.supabase.createClient(c.supabaseUrl, c.supabaseAnonKey, {auth: {persistSession: true, autoRefreshToken: true, detectSessionInUrl: true}});
          this.client.auth.onAuthStateChange((event, session) => {
            if (event === 'INITIAL_SESSION') return;
            this.authEvent = event;
            // Não chamar métodos do cliente Supabase sincronicamente dentro deste callback.
            setTimeout(() => {void this.applySession(session)}, 0);
          });
          const {data, error} = await this.client.auth.getSession();
          if (error) throw error;
          await this.applySession(data.session);
        } catch (err) {this.syncStatus = 'error'; this.error = err.message || 'Falha na autenticação.';}
      }
    }
    this.ready = true; this.notify();
  },
  async applySession(session) {
    const nextUser = session?.user || null;
    if (this.user?.id === nextUser?.id) {this.notify(); return;}
    if (this.writeTimer) {clearTimeout(this.writeTimer); this.writeTimer = null;}
    const epoch = ++this.authEpoch;
    this.user = nextUser; this.state = readLocal(this.localKey);
    if (!nextUser) {this.syncStatus = 'local'; this.error = ''; this.notify(); return;}
    this.syncStatus = 'syncing'; this.error = ''; this.notify();
    const {data, error} = await this.client.from('study_profiles').select('data').eq('user_id', nextUser.id).maybeSingle();
    if (epoch !== this.authEpoch) return;
    if (error) {this.syncStatus = 'error'; this.error = 'Não foi possível buscar seus dados. Verifique se executou o SQL e configurou o RLS.'; this.notify(); return;}
    const remote = data?.data ? normalizeState(data.data) : null;
    const local = this.state;
    this.state = remote && remote._updatedAt >= local._updatedAt ? remote : local;
    writeLocal(this.localKey, this.state);
    this.syncStatus = 'synced'; this.notify();
    if (!remote || local._updatedAt > remote._updatedAt) this.scheduleCloudSave();
  },
  update(mutator) {
    // A aplicação altera somente seu próprio estado normalizado.
    mutator(this.state);
    this.state._updatedAt = Date.now();
    if (!writeLocal(this.localKey, this.state)) {this.syncStatus = 'error'; this.error = 'Armazenamento local indisponível.';}
    if (this.client && this.user) {this.syncStatus = 'syncing'; this.scheduleCloudSave();}
    this.notify();
  },
  scheduleCloudSave() {
    if (this.writeTimer) clearTimeout(this.writeTimer);
    this.writeTimer = setTimeout(() => {this.writeTimer = null; void this.saveCloud()}, DEBOUNCE_MS);
  },
  async saveCloud() {
    if (!this.client || !this.user) return;
    if (this.saving) {this.pending = true; return;}
    this.saving = true;
    const userId = this.user.id, epoch = this.authEpoch, snapshot = structuredClone(this.state);
    try {
      const {error} = await this.client.from('study_profiles').upsert({user_id: userId, data: snapshot}, {onConflict: 'user_id'});
      if (error) throw error;
      if (epoch === this.authEpoch) {this.syncStatus = 'synced'; this.error = ''; this.notify();}
    } catch (err) {if (epoch === this.authEpoch) {this.syncStatus = 'error'; this.error = err.message || 'Erro ao sincronizar'; this.notify();} }
    finally {
      this.saving = false;
      if ((this.pending || this.state._updatedAt !== snapshot._updatedAt) && epoch === this.authEpoch) {this.pending = false; this.scheduleCloudSave();}
    }
  },
  async signIn(email, password) {if (!this.client) throw Error('Configure o Supabase em js/config.js antes de entrar.'); const {error} = await this.client.auth.signInWithPassword({email, password}); if (error) throw error;},
  async signUp(email, password) {if (!this.client) throw Error('Configure o Supabase em js/config.js antes de criar uma conta.'); const redirect = location.origin + location.pathname; const {data, error} = await this.client.auth.signUp({email, password, options: {emailRedirectTo: redirect}}); if (error) throw error; return data;},
  async resetPassword(email) {if (!this.client) throw Error('Configure o Supabase primeiro.'); const redirect = location.origin + location.pathname; const {error} = await this.client.auth.resetPasswordForEmail(email, {redirectTo: redirect}); if (error) throw error;},
  async updatePassword(password) {if (!this.client) throw Error('Configure o Supabase primeiro.'); const {error} = await this.client.auth.updateUser({password}); if (error) throw error;},
  async signOut() {if (!this.client) return; const {error} = await this.client.auth.signOut(); if (error) throw error;},
  exportProgress() {return JSON.stringify({exportedAt: new Date().toISOString(), app: 'Say ENEM', state: this.state}, null, 2)},
  importProgress(raw) {let parsed; try {parsed = JSON.parse(raw)} catch {throw Error('Este arquivo não contém JSON válido.')}; if (!['Say ENEM', 'Aurora ENEM'].includes(parsed?.app) || !parsed.state || parsed.state.version !== 1) throw Error('Arquivo incompatível com esta versão.'); const next = normalizeState(parsed.state); this.update(current => {for (const key of Object.keys(current)) delete current[key]; Object.assign(current, next);});}
};
