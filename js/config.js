// Copie a URL do projeto e a chave "publishable" (ou "anon") em Supabase > Project Settings > API.
// Esta chave é PÚBLICA e pode aparecer no GitHub. NUNCA coloque service_role ou secret key aqui.
window.SAY_CONFIG = window.SAY_CONFIG || window.AURORA_CONFIG || {
  supabaseUrl: 'https://uzijnngxhfhfamcdcgsh.supabase.co',
  supabaseAnonKey: 'sb_publishable_bFQGUBH6dTr94Nh2nR3CQA_R4qM3FIb'
};
window.AURORA_CONFIG = window.AURORA_CONFIG || window.SAY_CONFIG;
