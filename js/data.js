// Conteúdo educativo autoral. Questões de quatro alternativas compatíveis com a interface existente.
// Nenhuma questão deste banco é apresentada como reprodução oficial do ENEM.
// IDs de aulas, posições e gabaritos anteriores preservados; distratores selecionados aprimorados.
export const AREAS = {
  "linguagens": {
    "name": "Linguagens",
    "short": "Linguagens",
    "icon": "✎",
    "tone": "accent"
  },
  "humanas": {
    "name": "Ciências Humanas",
    "short": "Humanas",
    "icon": "◈",
    "tone": "gold"
  },
  "natureza": {
    "name": "Ciências da Natureza",
    "short": "Natureza",
    "icon": "✳",
    "tone": "mint"
  },
  "matematica": {
    "name": "Matemática",
    "short": "Matemática",
    "icon": "∑",
    "tone": "rose"
  }
};

export const ESSAY_TOPICS = [
  {
    "id": "tecnologia",
    "title": "Desafios para o uso consciente da tecnologia na educação brasileira",
    "axis": "Educação e cidadania",
    "guide": "Reflita sobre desigualdade de acesso, formação digital e responsabilidades de escolas, famílias e governo."
  },
  {
    "id": "saude",
    "title": "Caminhos para ampliar o acesso à informação confiável sobre saúde no Brasil",
    "axis": "Saúde e comunicação",
    "guide": "Considere alfabetização científica, desinformação e instituições públicas de saúde."
  },
  {
    "id": "ambiente",
    "title": "Desafios da redução de resíduos nas cidades brasileiras",
    "axis": "Meio ambiente",
    "guide": "Explore consumo, logística de coleta, infraestrutura e educação ambiental."
  },
  {
    "id": "educacao-permanencia",
    "title": "Caminhos para enfrentar a evasão escolar no ensino médio brasileiro",
    "axis": "Educação",
    "guide": "Investigue trabalho precoce, transporte e vínculo com a escola. Diferencie matrícula de permanência e aprendizagem. Discuta apoio financeiro, busca ativa e acolhimento com responsabilidades definidas."
  },
  {
    "id": "educacao-inclusiva",
    "title": "Desafios para efetivar a educação inclusiva no Brasil",
    "axis": "Educação",
    "guide": "Relacione barreiras arquitetônicas, comunicação e formação docente. Considere participação dos estudantes e atendimento adequado, sem reduzir inclusão à presença física na sala."
  },
  {
    "id": "leitura-bibliotecas",
    "title": "Democratização do acesso à leitura e às bibliotecas no Brasil",
    "axis": "Educação e cultura",
    "guide": "Analise preço, distribuição territorial e mediação de leitura. Discuta bibliotecas comunitárias e escolares, acessibilidade dos acervos e formação de leitores sem culpar quem teve menos oportunidades."
  },
  {
    "id": "educacao-adultos",
    "title": "Valorização da educação de jovens e adultos na sociedade brasileira",
    "axis": "Educação",
    "guide": "Considere jornadas de trabalho, cuidado familiar e trajetórias interrompidas. Proponha horários viáveis, reconhecimento de saberes e políticas de permanência sem infantilizar estudantes."
  },
  {
    "id": "educacao-cientifica",
    "title": "Desafios da formação científica para a cidadania no Brasil",
    "axis": "Educação e ciência",
    "guide": "Diferencie decorar conceitos de interpretar evidências. Explore infraestrutura escolar, formação de professores e comunicação pública. Relacione ciência a decisões cotidianas sem prometer certeza absoluta."
  },
  {
    "id": "educacao-financeira",
    "title": "Caminhos para promover educação financeira crítica no Brasil",
    "axis": "Educação e consumo",
    "guide": "Aborde leitura de contratos, publicidade e desigualdade de renda. Evite atribuir endividamento apenas à falta de disciplina. Discuta formação para decisões informadas e proteção do consumidor."
  },
  {
    "id": "ensino-rural",
    "title": "Garantia do direito à educação em territórios rurais brasileiros",
    "axis": "Educação e território",
    "guide": "Analise distância, transporte e conexão com a realidade local. Considere formação docente, infraestrutura e respeito às comunidades, sem tratar o espaço rural como homogêneo."
  },
  {
    "id": "mulheres-ciencia",
    "title": "Barreiras à participação e ao reconhecimento de mulheres na ciência brasileira",
    "axis": "Ciência e equidade",
    "guide": "Investigue estereótipos, divisão do cuidado e visibilidade de trajetórias. Diferencie acesso à formação de permanência e liderança. Proponha ações institucionais com acompanhamento."
  },
  {
    "id": "desinformacao",
    "title": "Desafios do enfrentamento da desinformação no espaço digital brasileiro",
    "axis": "Comunicação",
    "guide": "Discuta circulação, incentivos econômicos e letramento midiático. Diferencie opinião de falsificação de fatos. Considere transparência, checagem e direitos sem propor censura indiscriminada."
  },
  {
    "id": "dados-pessoais",
    "title": "Proteção de dados pessoais e formação cidadã no Brasil",
    "axis": "Tecnologia e cidadania",
    "guide": "Relacione consentimento, compreensão de termos e assimetria de informação. Discuta design de serviços, educação digital e responsabilidade institucional sem depender de citar leis não verificadas."
  },
  {
    "id": "exclusao-digital",
    "title": "Caminhos para reduzir a exclusão digital de pessoas idosas no Brasil",
    "axis": "Tecnologia e desigualdade",
    "guide": "Considere acessibilidade, custo e formação acompanhada. Evite retratar todos os idosos como incapazes. Discuta atendimento humano e serviços compreensíveis para diferentes níveis de familiaridade."
  },
  {
    "id": "algoritmos",
    "title": "Transparência e discriminação em decisões mediadas por algoritmos",
    "axis": "Tecnologia e sociedade",
    "guide": "Examine vieses em dados e critérios, possibilidade de contestação e supervisão. Não atribua neutralidade automática à tecnologia nem trate todos os sistemas como idênticos."
  },
  {
    "id": "infancia-digital",
    "title": "Proteção da infância diante da publicidade em ambientes digitais",
    "axis": "Infância e comunicação",
    "guide": "Analise vulnerabilidade, linguagem persuasiva e interesses comerciais. Articule mediação familiar, educação e responsabilidade de plataformas, sem transferir todo o ônus às famílias."
  },
  {
    "id": "acessibilidade-web",
    "title": "Desafios da acessibilidade nos serviços digitais brasileiros",
    "axis": "Tecnologia e inclusão",
    "guide": "Considere leitores de tela, linguagem clara e navegação por teclado. Relacione barreiras digitais ao acesso a direitos e proponha avaliação com participação das pessoas usuárias."
  },
  {
    "id": "trabalho-plataformas",
    "title": "Proteção social de trabalhadores de plataformas digitais no Brasil",
    "axis": "Trabalho",
    "guide": "Examine renda instável, jornadas e gestão por aplicativos. Diferencie flexibilidade declarada de autonomia efetiva. Discuta transparência e proteção sem inventar estatísticas ou regras vigentes."
  },
  {
    "id": "trabalho-cuidado",
    "title": "Reconhecimento social do trabalho de cuidado no Brasil",
    "axis": "Trabalho e equidade",
    "guide": "Analise divisão desigual do cuidado, remuneração e acesso a serviços. Relacione tempo de cuidado a estudo e trabalho. Evite naturalizar a atividade como obrigação feminina."
  },
  {
    "id": "trabalho-juventude",
    "title": "Dificuldades da inserção de jovens no mercado de trabalho brasileiro",
    "axis": "Trabalho e juventude",
    "guide": "Considere exigência de experiência, qualificação e desigualdade territorial. Discuta formação, oportunidades iniciais e proteção de direitos sem tratar os jovens como um grupo único."
  },
  {
    "id": "idadismo",
    "title": "Enfrentamento do preconceito etário na sociedade brasileira",
    "axis": "Direitos e convivência",
    "guide": "Examine estereótipos em trabalho, mídia e atendimento. Diferencie adaptação de serviços de exclusão paternalista. Proponha ações educativas e institucionais com participação dos grupos envolvidos."
  },
  {
    "id": "pessoas-deficiencia",
    "title": "Superação de barreiras à autonomia de pessoas com deficiência no Brasil",
    "axis": "Direitos e inclusão",
    "guide": "Diferencie impedimentos individuais de barreiras sociais. Considere transporte, comunicação e trabalho. Priorize autonomia e escuta em vez de caridade como resposta única."
  },
  {
    "id": "moradia",
    "title": "Desafios para assegurar moradia digna nas cidades brasileiras",
    "axis": "Direitos e território",
    "guide": "Relacione renda, localização, infraestrutura e acesso a serviços. Diferencie abrigo de moradia adequada. Discuta planejamento e participação comunitária sem culpabilizar moradores de áreas vulneráveis."
  },
  {
    "id": "populacao-rua",
    "title": "Invisibilidade e acesso a direitos da população em situação de rua",
    "axis": "Direitos e cidadania",
    "guide": "Evite explicar trajetórias por uma causa única. Aborde documentação, moradia, trabalho e redes de atendimento. Proponha acolhimento e continuidade de políticas sem ações coercitivas indiscriminadas."
  },
  {
    "id": "mobilidade",
    "title": "Caminhos para uma mobilidade urbana inclusiva e sustentável no Brasil",
    "axis": "Cidades",
    "guide": "Compare tempo, custo e acessibilidade dos deslocamentos. Relacione transporte e localização de empregos. Discuta integração de modais e qualidade do transporte coletivo com critérios de avaliação."
  },
  {
    "id": "saneamento",
    "title": "Desigualdade no acesso ao saneamento básico no Brasil",
    "axis": "Cidades e ambiente",
    "guide": "Relacione infraestrutura, território e proteção ambiental. Considere água, esgotamento e continuidade dos serviços. Evite reduzir o problema a hábitos individuais de higiene."
  },
  {
    "id": "enchentes",
    "title": "Prevenção de riscos de enchentes nas cidades brasileiras",
    "axis": "Cidades e ambiente",
    "guide": "Integre impermeabilização, drenagem e vulnerabilidade habitacional. Diferencie resposta emergencial de prevenção. Considere alertas, planejamento e participação sem responsabilizar apenas as pessoas atingidas."
  },
  {
    "id": "calor-urbano",
    "title": "Adaptação das cidades brasileiras aos efeitos do calor intenso",
    "axis": "Cidades e ambiente",
    "guide": "Discuta arborização, materiais urbanos e desigualdade de exposição. Relacione trabalho, transporte e moradia. Proponha ações territoriais e acompanhamento, sem inventar projeções climáticas."
  },
  {
    "id": "justica-ambiental",
    "title": "Desafios da justiça ambiental na sociedade brasileira",
    "axis": "Ambiente e equidade",
    "guide": "Examine a distribuição desigual de riscos e de benefícios ambientais. Considere participação nas decisões, transparência e reparação. Evite apresentar grupos vulnerabilizados como incapazes de mobilização."
  },
  {
    "id": "residuos-eletronicos",
    "title": "Destinação responsável de resíduos eletrônicos no Brasil",
    "axis": "Ambiente e consumo",
    "guide": "Relacione ciclos de consumo, reparabilidade e pontos de coleta. Discuta responsabilidades de consumidores, produtores e poder público. Diferencie descarte adequado de simples substituição de aparelhos."
  },
  {
    "id": "desperdicio-alimentos",
    "title": "Caminhos para reduzir o desperdício de alimentos no Brasil",
    "axis": "Ambiente e alimentação",
    "guide": "Analise produção, transporte, comercialização e consumo. Diferencie perda e desperdício conforme o contexto. Proponha armazenamento, planejamento e articulação institucional sem sugerir doação de alimentos impróprios."
  },
  {
    "id": "agua",
    "title": "Gestão da água e desigualdades de acesso no Brasil",
    "axis": "Ambiente",
    "guide": "Considere distribuição, qualidade, infraestrutura e conflitos entre usos. Diferencie disponibilidade regional e acesso doméstico. Evite propor apenas redução do consumo individual como solução integral."
  },
  {
    "id": "biodiversidade",
    "title": "Valorização da biodiversidade e dos saberes tradicionais no Brasil",
    "axis": "Ambiente e ciência",
    "guide": "Relacione conservação, território e conhecimentos das comunidades. Discuta participação e reconhecimento sem apropriação de saberes ou representação de povos como grupos congelados no passado."
  },
  {
    "id": "seguranca-alimentar",
    "title": "Garantia do acesso regular a uma alimentação adequada no Brasil",
    "axis": "Alimentação e direitos",
    "guide": "Conecte renda, preços, produção e distribuição. Diferencie quantidade de alimentos de qualidade e adequação cultural. Proponha ações articuladas sem reduzir o problema à escolha individual."
  },
  {
    "id": "saude-mental-jovens",
    "title": "Acolhimento e redução do estigma sobre saúde mental entre jovens no Brasil",
    "axis": "Saúde e sociedade",
    "guide": "Discuta pressão social, redes de apoio e acesso a profissionais. Evite diagnósticos e recomendações clínicas. Proponha informação responsável e acolhimento, com privacidade e encaminhamento adequado."
  },
  {
    "id": "doacao-sangue",
    "title": "Desafios para ampliar a cultura da doação de sangue no Brasil",
    "axis": "Saúde e participação",
    "guide": "Analise informação, confiança e acesso aos serviços. Evite afirmar critérios clínicos sem fonte atualizada. Discuta comunicação e organização do atendimento respeitando avaliação profissional."
  },
  {
    "id": "ciencia-comunicacao",
    "title": "Aproximação entre produção científica e sociedade brasileira",
    "axis": "Ciência e comunicação",
    "guide": "Considere linguagem, acesso aberto e circulação da informação. Diferencie simplificação clara de distorção. Discuta diálogo com públicos diversos e valorização da verificação de evidências."
  },
  {
    "id": "envelhecimento",
    "title": "Desafios do cuidado e da participação social no envelhecimento brasileiro",
    "axis": "Direitos e saúde",
    "guide": "Relacione autonomia, serviços, renda e vínculos sociais. Evite homogeneizar pessoas idosas. Discuta políticas integradas e apoio a cuidadores com respeito às escolhas dos sujeitos."
  },
  {
    "id": "cultura-periferia",
    "title": "Reconhecimento e circulação das produções culturais periféricas no Brasil",
    "axis": "Cultura e território",
    "guide": "Investigue acesso a espaços, financiamento e estigmas. Diferencie valorização de apropriação comercial sem retorno às comunidades. Proponha participação dos próprios produtores culturais."
  },
  {
    "id": "patrimonio-memoria",
    "title": "Preservação do patrimônio cultural e participação comunitária no Brasil",
    "axis": "Cultura e memória",
    "guide": "Considere bens materiais e práticas vivas. Discuta memória, investimento e disputas de representação. Evite tratar preservação como simples congelamento de tradições."
  },
  {
    "id": "cinema-nacional",
    "title": "Democratização do acesso e valorização do cinema brasileiro",
    "axis": "Cultura",
    "guide": "Relacione distribuição, salas, plataformas e formação de público. Diferencie produção de circulação. Proponha acesso territorial e pluralidade sem reduzir toda dificuldade à preferência do espectador."
  },
  {
    "id": "povos-indigenas",
    "title": "Combate aos estereótipos sobre povos indígenas no Brasil",
    "axis": "Direitos e cultura",
    "guide": "Reconheça diversidade de povos e presença contemporânea. Discuta mídia, educação e participação direta. Evite imagens de autenticidade baseadas no isolamento ou na ausência de tecnologia."
  },
  {
    "id": "racismo",
    "title": "Enfrentamento do racismo nas instituições e nas relações cotidianas brasileiras",
    "axis": "Direitos e equidade",
    "guide": "Relacione práticas individuais e estruturas de acesso a oportunidades. Discuta formação, canais de resposta e acompanhamento. Não reduza o problema à ausência de convivência ou a um episódio isolado."
  },
  {
    "id": "esporte-inclusao",
    "title": "Ampliação do acesso ao esporte e ao lazer nas cidades brasileiras",
    "axis": "Esporte e cidadania",
    "guide": "Considere equipamentos, segurança, tempo e acessibilidade. Diferencie prática comunitária de alto rendimento. Proponha oferta territorial e escuta da população sem exigir desempenho competitivo."
  },
  {
    "id": "letramento-midiatico",
    "title": "Importância do letramento midiático para a participação cidadã no Brasil",
    "axis": "Educação e comunicação",
    "guide": "Trabalhe autoria, fonte, publicidade e manipulação de contexto. Considere educação ao longo da vida e diferentes suportes. Proponha verificação e leitura crítica sem confundir discordância com falsidade."
  },
  {
    "id": "violencia-escolar",
    "title": "Construção de uma cultura de respeito e prevenção da violência nas escolas brasileiras",
    "axis": "Educação e convivência",
    "guide": "Diferencie conflitos, discriminação e violência. Considere escuta, protocolos e redes de apoio. Evite soluções punitivas isoladas e preserve direitos e privacidade dos estudantes."
  },
  {
    "id": "voluntariado",
    "title": "Participação comunitária e fortalecimento de vínculos sociais no Brasil",
    "axis": "Participação social",
    "guide": "Analise tempo disponível, confiança e espaços de decisão. Diferencie solidariedade de substituição permanente de serviços públicos. Proponha canais de participação acessíveis e avaliação dos resultados."
  },
  {
    "id": "migracao",
    "title": "Acolhimento e integração de migrantes na sociedade brasileira",
    "axis": "Direitos e mobilidade",
    "guide": "Considere língua, documentação, trabalho e redes de apoio. Diferencie migração voluntária de deslocamento forçado quando pertinente. Combata estereótipos sem apagar diferenças de trajetória."
  },
  {
    "id": "invisibilidade-documental",
    "title": "Superação de barreiras ao acesso à documentação civil no Brasil",
    "axis": "Direitos e cidadania",
    "guide": "Relacione distância, informação e continuidade de atendimento. Explique como documentação afeta acesso a serviços. Proponha busca ativa e orientação respeitosa, evitando culpabilizar pessoas sem registro."
  },
  {
    "id": "tempo-cuidado-estudo",
    "title": "Desigualdade na distribuição do tempo como barreira à continuidade dos estudos",
    "axis": "Educação e equidade",
    "guide": "Relacione jornadas de trabalho, deslocamento e cuidado doméstico. Evite tratar falta de tempo como preguiça. Discuta permanência escolar, apoio e organização dos serviços."
  },
  {
    "id": "consumo-publicidade",
    "title": "Formação de consumidores críticos diante da publicidade digital no Brasil",
    "axis": "Consumo e comunicação",
    "guide": "Analise persuasão, identificação de anúncios e consumo por impulso. Relacione informação e responsabilidade comercial. Proponha linguagem clara e educação crítica sem condenar todo consumo."
  },
  {
    "id": "turismo-comunidades",
    "title": "Turismo e proteção dos modos de vida de comunidades locais no Brasil",
    "axis": "Cultura e economia",
    "guide": "Compare geração de renda com pressão sobre moradia, ambiente e patrimônio. Considere participação nos ganhos e nas decisões. Proponha planejamento territorial sem romantizar ou excluir as comunidades."
  },
  {
    "id": "acesso-justica",
    "title": "Desafios para ampliar o acesso à justiça e à informação sobre direitos no Brasil",
    "axis": "Direitos e cidadania",
    "guide": "Considere linguagem, distância, custo e orientação. Diferencie previsão de direitos e condições de reivindicá-los. Discuta atendimento acessível sem inventar procedimentos legais específicos."
  },
  {
    "id": "cultura-surda",
    "title": "Reconhecimento da cultura surda e remoção de barreiras de comunicação no Brasil",
    "axis": "Cultura e inclusão",
    "guide": "Aborde diversidade linguística e acessibilidade em serviços, educação e cultura. Evite reduzir pessoas surdas a uma condição única. Proponha participação direta e formação de equipes."
  },
  {
    "id": "pesquisa-brasil",
    "title": "Valorização da pesquisa e continuidade de projetos científicos no Brasil",
    "axis": "Ciência e desenvolvimento",
    "guide": "Relacione formação, infraestrutura e previsibilidade de apoio. Diferencie resultado imediato e pesquisa de longo prazo. Discuta comunicação pública e avaliação sem prometer descobertas garantidas."
  },
  {
    "id": "alimentacao-escolar",
    "title": "Papel da alimentação escolar na permanência e no desenvolvimento dos estudantes",
    "axis": "Educação e alimentação",
    "guide": "Considere acesso, qualidade, diversidade cultural e participação da comunidade. Diferencie oferta de refeições e educação alimentar. Proponha acompanhamento sem usar dados não verificados."
  },
  {
    "id": "bibliotecas-digitais",
    "title": "Acesso equitativo ao conhecimento em bibliotecas e acervos digitais",
    "axis": "Educação e tecnologia",
    "guide": "Relacione conectividade, formatos acessíveis e organização da informação. Diferencie disponibilização e capacidade de uso. Discuta mediação, direitos autorais e preservação digital sem sugerir cópia irregular."
  },
  {
    "id": "mobilidade-ativa",
    "title": "Segurança e integração da mobilidade a pé e por bicicleta no Brasil",
    "axis": "Cidades e ambiente",
    "guide": "Considere calçadas, travessias, redes cicláveis e integração ao transporte. Não trate preferência individual como suficiente para mudar deslocamentos. Proponha planejamento com prioridades territoriais."
  },
  {
    "id": "memoria-ditadura",
    "title": "Preservação da memória histórica e formação democrática na sociedade brasileira",
    "axis": "Memória e cidadania",
    "guide": "Discuta arquivos, educação e acesso a testemunhos. Diferencie memória pessoal e investigação histórica sem opô-las de forma simplista. Considere pluralidade de fontes e respeito às vítimas."
  },
  {
    "id": "desigualdade-regional",
    "title": "Redução das desigualdades territoriais no acesso a serviços públicos no Brasil",
    "axis": "Território e direitos",
    "guide": "Compare localização, qualidade e continuidade da oferta. Evite hierarquizar culturas regionais. Proponha critérios de investimento e participação com atenção às necessidades locais."
  }
];

export const EXAM_DATES = [
  {
    "date": "2026-11-08",
    "name": "Primeiro dia",
    "subjects": "Linguagens, Ciências Humanas e Redação"
  },
  {
    "date": "2026-11-15",
    "name": "Segundo dia",
    "subjects": "Matemática e Ciências da Natureza"
  }
];

export const FLASHCARDS = [
  {
    "id": "f1",
    "area": "linguagens",
    "front": "O que diferencia informação explícita de inferência?",
    "back": "A explícita está declarada; inferência é uma conclusão sustentada por pistas do texto."
  },
  {
    "id": "f2",
    "area": "linguagens",
    "front": "O que é hipérbole?",
    "back": "Figura de linguagem baseada no exagero intencional para criar um efeito expressivo."
  },
  {
    "id": "f3",
    "area": "linguagens",
    "front": "O que caracteriza um artigo de opinião?",
    "back": "Defesa de um ponto de vista apoiada em argumentos."
  },
  {
    "id": "f4",
    "area": "humanas",
    "front": "Em que ano foi promulgada a Constituição Cidadã?",
    "back": "Em 1988, durante o processo de redemocratização."
  },
  {
    "id": "f5",
    "area": "humanas",
    "front": "O que é impermeabilização do solo?",
    "back": "Cobertura que dificulta infiltração da água, aumentando o escoamento superficial."
  },
  {
    "id": "f6",
    "area": "humanas",
    "front": "Qual a função de uma premissa em um argumento?",
    "back": "Oferecer uma razão ou evidência usada para sustentar a conclusão."
  },
  {
    "id": "f7",
    "area": "natureza",
    "front": "Qual é o papel dos produtores nas cadeias alimentares?",
    "back": "Produzir matéria orgânica a partir de fontes de energia, formando a base de muitas cadeias."
  },
  {
    "id": "f8",
    "area": "natureza",
    "front": "O que fazem os ribossomos?",
    "back": "Participam da síntese de proteínas."
  },
  {
    "id": "f9",
    "area": "natureza",
    "front": "Qual método separa areia de água?",
    "back": "Filtração, quando a areia é insolúvel e pode ser retida pelo filtro."
  },
  {
    "id": "f10",
    "area": "matematica",
    "front": "Como calcular 15% de um valor?",
    "back": "Multiplique o valor por 0,15."
  },
  {
    "id": "f11",
    "area": "matematica",
    "front": "Como aplicar 20% de desconto?",
    "back": "Multiplique o preço original por 0,80."
  },
  {
    "id": "f12",
    "area": "matematica",
    "front": "Como calcular a mediana de quatro valores?",
    "back": "Ordene os quatro e calcule a média dos dois centrais."
  },
  {
    "id": "f13",
    "area": "matematica",
    "front": "Quando duas grandezas são diretamente proporcionais?",
    "back": "Quando a razão entre valores correspondentes se mantém constante."
  },
  {
    "id": "f14",
    "area": "natureza",
    "front": "Energia e matéria são recicladas do mesmo modo no ecossistema?",
    "back": "Não. A energia flui com dissipação; a matéria circula em ciclos."
  },
  {
    "id": "f15",
    "area": "humanas",
    "front": "O que deve ser verificado em uma fonte histórica?",
    "back": "Autor, época, contexto, público e interesses envolvidos."
  },
  {
    "id": "f16",
    "area": "linguagens",
    "front": "O que é função apelativa da linguagem?",
    "back": "É o uso da linguagem voltado a influenciar o comportamento do destinatário."
  },
  {
    "id": "rev-funcoes-modelagem-1",
    "area": "matematica",
    "front": "Em C(x) = 12 + 4x, para x em km e C em reais, o coeficiente 4 significa:",
    "back": "Acréscimo de R$ 4 por km. O coeficiente de x é a taxa de variação. A parcela fixa é 12 e não há limite de distância informado pela fórmula sozinha."
  },
  {
    "id": "rev-funcoes-modelagem-2",
    "area": "matematica",
    "front": "Em que x as funções 8 + 2x e 2 + 3x têm o mesmo valor?",
    "back": "6. Igualando: 8 + 2x = 2 + 3x, então x = 6. Ambas valem 20 nesse ponto."
  },
  {
    "id": "rev-funcoes-modelagem-3",
    "area": "matematica",
    "front": "Qual função representa proporcionalidade direta?",
    "back": "f(x) = 3x. A razão f(x)/x é constante para x não nulo em f(x) = 3x. O termo fixo rompe essa proporcionalidade."
  },
  {
    "id": "rev-funcoes-modelagem-4",
    "area": "matematica",
    "front": "Um reservatório recebe 8 L/min e começa com 20 L. Sem saídas, qual expressão dá o volume após t minutos, antes de encher?",
    "back": "V = 20 + 8t. O volume inicial é o termo constante 20; a taxa de entrada 8 multiplica o tempo. O domínio termina quando a capacidade é atingida."
  },
  {
    "id": "rev-funcoes-modelagem-5",
    "area": "matematica",
    "front": "Uma reta passa por (0, 5) e (3, 11). Sua taxa de variação é:",
    "back": "2. A taxa é Δy/Δx = (11 − 5)/(3 − 0) = 6/3 = 2. O valor 5 é o intercepto."
  },
  {
    "id": "rev-quadratica-otimizacao-1",
    "area": "matematica",
    "front": "O máximo de f(x) = −x² + 8x ocorre em x igual a:",
    "back": "4. xv = −b/(2a) = −8/(−2) = 4. O valor máximo da função é 16, que não é a coordenada x pedida."
  },
  {
    "id": "rev-quadratica-otimizacao-2",
    "area": "matematica",
    "front": "Um retângulo tem perímetro 24 m. Sua maior área possível é:",
    "back": "36 m². Os lados somam 12 m. O produto é máximo com lados iguais a 6 m; a área é 6 × 6 = 36 m²."
  },
  {
    "id": "rev-quadratica-otimizacao-3",
    "area": "matematica",
    "front": "As raízes de x² − 7x + 12 são:",
    "back": "3 e 4. A fatoração é (x − 3)(x − 4). O produto das raízes é 12 e a soma é 7, coerentes com os coeficientes."
  },
  {
    "id": "rev-quadratica-otimizacao-4",
    "area": "matematica",
    "front": "Para f(x) = x² − 4x + 3, o valor mínimo é:",
    "back": "−1. O vértice ocorre em x = 2. Substituindo: 4 − 8 + 3 = −1. O coeficiente positivo indica mínimo."
  },
  {
    "id": "rev-quadratica-otimizacao-5",
    "area": "matematica",
    "front": "Uma parábola tem raízes 2 e 8. A abscissa de seu vértice é:",
    "back": "5. O eixo de simetria fica no ponto médio das raízes: (2 + 8)/2 = 5."
  },
  {
    "id": "rev-exponenciais-logaritmos-1",
    "area": "matematica",
    "front": "Uma quantidade inicial de 50 triplica por período. Após dois períodos vale:",
    "back": "450. 50 × 3² = 450. São duas multiplicações por três, não a soma de dois acréscimos iguais a 100."
  },
  {
    "id": "rev-exponenciais-logaritmos-2",
    "area": "matematica",
    "front": "log₂ 64 é igual a:",
    "back": "6. 2⁶ = 64; portanto o expoente procurado é 6."
  },
  {
    "id": "rev-exponenciais-logaritmos-3",
    "area": "matematica",
    "front": "Uma amostra idealizada de 120 g passa por três meias-vidas. Resta:",
    "back": "15 g. 120 × (1/2)³ = 120/8 = 15 g. Cada etapa reduz pela metade a quantidade então presente."
  },
  {
    "id": "rev-exponenciais-logaritmos-4",
    "area": "matematica",
    "front": "Um valor de 200 sofre redução de 10% em dois períodos sucessivos. Termina em:",
    "back": "162. Aplicam-se dois fatores 0,9: 200 × 0,9² = 162. A segunda redução usa a base já reduzida."
  },
  {
    "id": "rev-exponenciais-logaritmos-5",
    "area": "matematica",
    "front": "Para x real, a expressão log₁₀(x − 2) exige:",
    "back": "x > 2. O argumento do logaritmo precisa ser positivo: x − 2 > 0. Em x = 2, o argumento seria zero e a expressão não estaria definida."
  },
  {
    "id": "rev-geometria-plana-1",
    "area": "matematica",
    "front": "Um triângulo tem base 12 cm e altura correspondente 5 cm. Sua área é:",
    "back": "30 cm². A = 12 × 5/2 = 30 cm². O produto sem divisão por dois daria a área de um paralelogramo com a mesma base e altura."
  },
  {
    "id": "rev-geometria-plana-2",
    "area": "matematica",
    "front": "Uma figura é ampliada por fator linear 3. Sua área é multiplicada por:",
    "back": "9. As duas dimensões lineares são multiplicadas por 3, logo a área varia por 3² = 9."
  },
  {
    "id": "rev-geometria-plana-3",
    "area": "matematica",
    "front": "A hipotenusa de um triângulo retângulo com catetos 5 e 12 mede:",
    "back": "13. Pelo teorema de Pitágoras, h² = 25 + 144 = 169, então h = 13."
  },
  {
    "id": "rev-geometria-plana-4",
    "area": "matematica",
    "front": "Um círculo tem raio 4 cm. Sua área é:",
    "back": "16π cm². A = πr² = π × 4² = 16π cm². A expressão 8π corresponderia ao comprimento da circunferência."
  },
  {
    "id": "rev-geometria-plana-5",
    "area": "matematica",
    "front": "2 m² equivalem a:",
    "back": "20.000 cm². Como 1 m = 100 cm, 1 m² = 100² = 10.000 cm². Portanto 2 m² = 20.000 cm²."
  },
  {
    "id": "rev-geometria-espacial-1",
    "area": "matematica",
    "front": "Um reservatório de 2 m³ comporta:",
    "back": "2.000 L. Cada metro cúbico corresponde a 1.000 litros, portanto 2 m³ = 2.000 L."
  },
  {
    "id": "rev-geometria-espacial-2",
    "area": "matematica",
    "front": "Dobrar apenas o raio de um cilindro, mantendo sua altura, multiplica o volume por:",
    "back": "4. V = πr²h; trocar r por 2r multiplica r² por quatro."
  },
  {
    "id": "rev-geometria-espacial-3",
    "area": "matematica",
    "front": "Um cone de base 30 cm² e altura 9 cm tem volume:",
    "back": "90 cm³. V = Ab × h/3 = 30 × 9/3 = 90 cm³. A fórmula do prisma daria um volume três vezes maior."
  },
  {
    "id": "rev-geometria-espacial-4",
    "area": "matematica",
    "front": "Uma entrada de 18 L/min e uma saída de 6 L/min funcionam simultaneamente. Em 10 min, o ganho de volume é:",
    "back": "120 L. A vazão líquida é 18 − 6 = 12 L/min. Em 10 minutos, acrescentam-se 120 L, supondo capacidade suficiente."
  },
  {
    "id": "rev-geometria-espacial-5",
    "area": "matematica",
    "front": "Um sólido é ampliado em todas as dimensões por fator 2. Seu volume é multiplicado por:",
    "back": "8. Volumes de sólidos semelhantes variam com o cubo do fator linear: 2³ = 8."
  },
  {
    "id": "rev-probabilidade-contagem-1",
    "area": "matematica",
    "front": "Duas moedas honestas e independentes são lançadas. A chance de duas caras é:",
    "back": "1/4. Os resultados equiprováveis são CC, CK, KC e KK. Apenas CC é favorável; ou multiplique 1/2 por 1/2."
  },
  {
    "id": "rev-probabilidade-contagem-2",
    "area": "matematica",
    "front": "Entre 6 pessoas, quantas duplas sem cargos distintos podem ser formadas?",
    "back": "15. 6 × 5 conta cada dupla duas vezes. Dividindo por 2, obtemos 15."
  },
  {
    "id": "rev-probabilidade-contagem-3",
    "area": "matematica",
    "front": "Uma urna contém 4 bolas verdes e 2 amarelas. Sem reposição, a probabilidade de duas verdes é:",
    "back": "2/5. P = 4/6 × 3/5 = 12/30 = 2/5. Após retirar uma verde, restam três verdes entre cinco bolas."
  },
  {
    "id": "rev-probabilidade-contagem-4",
    "area": "matematica",
    "front": "Uma moeda honesta é lançada três vezes de modo independente. A chance de pelo menos uma cara é:",
    "back": "7/8. Use o complemento: nenhuma cara tem probabilidade (1/2)³ = 1/8; logo pelo menos uma tem 1 − 1/8 = 7/8."
  },
  {
    "id": "rev-probabilidade-contagem-5",
    "area": "matematica",
    "front": "Uma senha tem dois algarismos distintos de 0 a 9, e zero pode iniciar. Quantas senhas existem?",
    "back": "90. São 10 opções para a primeira posição e 9 para a segunda, sem repetição: 10 × 9 = 90. A ordem importa."
  },
  {
    "id": "rev-matematica-financeira-1",
    "area": "matematica",
    "front": "R$ 500 a juros simples de 2% ao mês por 3 meses resultam em montante de:",
    "back": "R$ 530. J = 500 × 0,02 × 3 = 30; M = 500 + 30 = R$ 530."
  },
  {
    "id": "rev-matematica-financeira-2",
    "area": "matematica",
    "front": "Após desconto de 25%, um produto custa R$ 90. O preço anterior era:",
    "back": "R$ 120. O preço final representa 75% do inicial. Assim, inicial = 90/0,75 = R$ 120."
  },
  {
    "id": "rev-matematica-financeira-3",
    "area": "matematica",
    "front": "Uma taxa passa de 20% a 25%. O aumento em pontos percentuais é:",
    "back": "5. Pontos percentuais medem a diferença direta entre taxas: 25 − 20 = 5. O aumento relativo seria 5/20 = 25%."
  },
  {
    "id": "rev-matematica-financeira-4",
    "area": "matematica",
    "front": "R$ 1.000 rendem juros compostos de 10% por período durante dois períodos. O montante é:",
    "back": "R$ 1.210. M = 1.000 × 1,1² = 1.210. Os juros do segundo período incidem sobre R$ 1.100."
  },
  {
    "id": "rev-matematica-financeira-5",
    "area": "matematica",
    "front": "Um produto aumenta 20% e depois recebe desconto de 20%. Em relação ao preço inicial, o final é:",
    "back": "4% menor. 1,2 × 0,8 = 0,96. O preço termina em 96% do inicial, uma redução líquida de 4%."
  },
  {
    "id": "rev-estatistica-critica-1",
    "area": "matematica",
    "front": "Notas 6 e 10 com pesos 3 e 1 têm média ponderada:",
    "back": "7. (6 × 3 + 10 × 1)/(3 + 1) = 28/4 = 7. A nota 6 tem maior peso."
  },
  {
    "id": "rev-estatistica-critica-2",
    "area": "matematica",
    "front": "Duas séries têm mesma média. É correto concluir que:",
    "back": "A dispersão ainda pode ser diferente. A média não determina a distribuição. As séries 4, 6 e 0, 10 têm média 5, mas amplitudes diferentes."
  },
  {
    "id": "rev-estatistica-critica-3",
    "area": "matematica",
    "front": "Uma enquete voluntária com milhares de respostas pode:",
    "back": "Apresentar viés de seleção apesar do tamanho. O tamanho não corrige automaticamente exclusões e autoseleção. Representatividade depende do desenho da pesquisa."
  },
  {
    "id": "rev-estatistica-critica-4",
    "area": "matematica",
    "front": "Em um grupo de 20 pessoas, 50% aprovam uma proposta; em outro de 80, 25% aprovam. A aprovação total é:",
    "back": "30%. Há 10 aprovadores no primeiro e 20 no segundo: 30 de 100 = 30%. A média simples das porcentagens ignoraria os tamanhos."
  },
  {
    "id": "rev-estatistica-critica-5",
    "area": "matematica",
    "front": "A amplitude dos valores 3, 5, 5, 11 é:",
    "back": "8. Amplitude = máximo − mínimo = 11 − 3 = 8. Não é a soma nem a média."
  },
  {
    "id": "rev-genetica-heranca-1",
    "area": "natureza",
    "front": "Em Aa × Aa com dominância completa, a probabilidade de descendente aa é:",
    "back": "25%. Cada genitor transmite a com chance 1/2. Multiplicando as probabilidades: 1/2 × 1/2 = 1/4 = 25%."
  },
  {
    "id": "rev-genetica-heranca-2",
    "area": "natureza",
    "front": "Um alelo dominante é necessariamente:",
    "back": "Expresso no heterozigoto sob dominância completa. Dominância descreve a relação de expressão no heterozigoto. Não determina frequência, vantagem adaptativa nem origem parental."
  },
  {
    "id": "rev-genetica-heranca-3",
    "area": "natureza",
    "front": "A meiose distingue-se da mitose por:",
    "back": "Reduzir normalmente a ploidia e contribuir para a variabilidade. A meiose separa homólogos e depois cromátides, reduzindo a ploidia. Segregação e recombinação contribuem para variabilidade."
  },
  {
    "id": "rev-genetica-heranca-4",
    "area": "natureza",
    "front": "No modelo de dominância completa, Aa × aa produz qual probabilidade de fenótipo recessivo?",
    "back": "50%. O primeiro genitor fornece A ou a em igual proporção; o segundo fornece apenas a. Metade será Aa e metade aa."
  },
  {
    "id": "rev-genetica-heranca-5",
    "area": "natureza",
    "front": "Uma célula com 2n = 20 completa uma meiose usual. Cada produto haploide terá:",
    "back": "10 cromossomos. A meiose reduz o número de conjuntos pela metade: de 2n = 20 para n = 10."
  },
  {
    "id": "rev-evolucao-selecao-1",
    "area": "natureza",
    "front": "Após exposição a um antibiótico, aumenta a proporção de bactérias resistentes. A explicação central é:",
    "back": "Houve seleção de variantes resistentes. A pressão seletiva favorece a sobrevivência e a reprodução das resistentes. A mudança observada é populacional, não uma decisão de cada organismo."
  },
  {
    "id": "rev-evolucao-selecao-2",
    "area": "natureza",
    "front": "Deriva genética corresponde a:",
    "back": "Mudança aleatória de frequências alélicas. A amostragem aleatória de alelos entre gerações pode alterar frequências, com efeitos especialmente fortes em populações pequenas."
  },
  {
    "id": "rev-evolucao-selecao-3",
    "area": "natureza",
    "front": "Uma característica vantajosa em uma floresta pode ser desvantajosa em outro ambiente porque:",
    "back": "O sucesso reprodutivo depende das condições ambientais. Vantagens são relativas ao ambiente e às interações ecológicas. Não existe uma escala universal de superioridade biológica."
  },
  {
    "id": "rev-evolucao-selecao-4",
    "area": "natureza",
    "front": "Uma enchente reduz ao acaso uma população, alterando frequências alélicas. O mecanismo destacado é:",
    "back": "Deriva genética. O enunciado destaca amostragem aleatória em uma redução populacional, situação associada à deriva e ao efeito gargalo."
  },
  {
    "id": "rev-evolucao-selecao-5",
    "area": "natureza",
    "front": "A chegada de indivíduos que se reproduzem em outra população pode gerar:",
    "back": "Fluxo gênico. A reprodução dos migrantes pode transferir alelos entre populações, caracterizando fluxo gênico."
  },
  {
    "id": "rev-fisiologia-integrada-1",
    "area": "natureza",
    "front": "A bile auxilia a digestão principalmente ao:",
    "back": "Emulsificar gorduras. A emulsificação divide a gordura em gotículas, ampliando o contato com enzimas. Bile não é enzima."
  },
  {
    "id": "rev-fisiologia-integrada-2",
    "area": "natureza",
    "front": "Uma artéria é definida por:",
    "back": "Levar sangue para fora do coração. A definição depende do sentido do fluxo. A artéria pulmonar é um contraexemplo à ideia de que todas as artérias transportam sangue rico em oxigênio."
  },
  {
    "id": "rev-fisiologia-integrada-3",
    "area": "natureza",
    "front": "A composição da urina difere do filtrado inicial porque ocorre:",
    "back": "Reabsorção e secreção nos túbulos renais. Ao longo dos túbulos, substâncias são reabsorvidas e secretadas. A filtração inicial não determina sozinha a urina final."
  },
  {
    "id": "rev-fisiologia-integrada-4",
    "area": "natureza",
    "front": "As trocas gasosas alveolares ocorrem principalmente por:",
    "back": "Difusão segundo gradientes de pressão parcial. Oxigênio e gás carbônico atravessam a superfície de troca de acordo com gradientes de pressão parcial; ventilação e circulação ajudam a manter os gradientes."
  },
  {
    "id": "rev-fisiologia-integrada-5",
    "area": "natureza",
    "front": "Homeostase significa:",
    "back": "Regulação dinâmica das condições internas. A manutenção ocorre por ajustes e respostas a desvios. Há variações dentro de limites, não imobilidade absoluta."
  },
  {
    "id": "rev-microbiologia-imunidade-1",
    "area": "natureza",
    "front": "Vírus diferem de bactérias por:",
    "back": "Dependerem de células hospedeiras para multiplicação. Vírus são acelulares e dependem de maquinaria celular. Bactérias são células procariontes com organização própria."
  },
  {
    "id": "rev-microbiologia-imunidade-2",
    "area": "natureza",
    "front": "O fornecimento de anticorpos prontos em um modelo de imunização corresponde a:",
    "back": "Imunização passiva. Os anticorpos vêm de outra fonte, caracterizando imunização passiva. Não equivale a estimular o próprio organismo da mesma forma que uma vacina."
  },
  {
    "id": "rev-microbiologia-imunidade-3",
    "area": "natureza",
    "front": "Água tratada e coleta de esgoto contribuem para reduzir:",
    "back": "Transmissão fecal-oral. As medidas reduzem contato com agentes presentes em material fecal. Não eliminam todas as doenças ou microrganismos."
  },
  {
    "id": "rev-microbiologia-imunidade-4",
    "area": "natureza",
    "front": "Qual estrutura é característica de uma bactéria em comparação com um vírus?",
    "back": "Organização celular procarionte. Bactérias são células procariontes, enquanto vírus são acelulares. Procariontes não têm núcleo delimitado por membrana."
  },
  {
    "id": "rev-microbiologia-imunidade-5",
    "area": "natureza",
    "front": "Uma estratégia de prevenção só pode ser associada corretamente a uma doença ao considerar:",
    "back": "O ciclo e a via de transmissão do agente. Prevenção precisa atuar em mecanismos compatíveis com transmissão e exposição. Agentes e ciclos variam."
  },
  {
    "id": "rev-quimica-atomos-ligacoes-1",
    "area": "natureza",
    "front": "Um átomo possui 17 prótons e 18 nêutrons. Seu número de massa é:",
    "back": "35. A = prótons + nêutrons = 17 + 18 = 35. O número atômico é 17."
  },
  {
    "id": "rev-quimica-atomos-ligacoes-2",
    "area": "natureza",
    "front": "Uma solução de sal pode conduzir eletricidade por conter:",
    "back": "Íons móveis. A condução requer portadores de carga móveis; em solução iônica, são os íons. No sólido, a mobilidade é muito menor."
  },
  {
    "id": "rev-quimica-atomos-ligacoes-3",
    "area": "natureza",
    "front": "Na ebulição de água pura ocorre principalmente:",
    "back": "Vencimento de interações entre moléculas. A vaporização é mudança física: moléculas de água permanecem, mas se afastam ao vencer interações intermoleculares."
  },
  {
    "id": "rev-quimica-atomos-ligacoes-4",
    "area": "natureza",
    "front": "Um átomo neutro com 12 prótons perde dois elétrons. O íon formado tem:",
    "back": "10 elétrons e carga +2. A perda de elétrons não altera os 12 prótons. Restam 10 elétrons, com excesso de duas cargas positivas."
  },
  {
    "id": "rev-quimica-atomos-ligacoes-5",
    "area": "natureza",
    "front": "Isótopos de um mesmo elemento possuem:",
    "back": "Mesmo número de prótons e diferentes números de nêutrons. O número de prótons identifica o elemento. A diferença de nêutrons altera o número de massa, caracterizando isótopos."
  },
  {
    "id": "rev-estequiometria-solucoes-1",
    "area": "natureza",
    "front": "Dissolvem-se 12 g de soluto até completar 0,5 L de solução. A concentração é:",
    "back": "24 g/L. C = 12/0,5 = 24 g/L. Dividir por meio litro dobra o valor numérico em relação a 1 L."
  },
  {
    "id": "rev-estequiometria-solucoes-2",
    "area": "natureza",
    "front": "Uma reação tem produção teórica de 50 g e fornece 40 g. O rendimento é:",
    "back": "80%. Rendimento = 40/50 × 100 = 80%. A razão deve ser real sobre teórico, e não invertida."
  },
  {
    "id": "rev-estequiometria-solucoes-3",
    "area": "natureza",
    "front": "200 mL de solução a 10 g/L são diluídos até 500 mL. A nova concentração é:",
    "back": "4 g/L. 10 × 200 = C₂ × 500; C₂ = 4 g/L. A massa de soluto permanece 2 g, enquanto o volume aumenta."
  },
  {
    "id": "rev-estequiometria-solucoes-4",
    "area": "natureza",
    "front": "Na reação 2 H₂ + O₂ → 2 H₂O, 4 mol de H₂ e 1 mol de O₂ podem formar no máximo:",
    "back": "2 mol de água. O O₂ é limitante: 1 mol reage com 2 mol de H₂ e gera 2 mol de H₂O. Sobram 2 mol de H₂."
  },
  {
    "id": "rev-estequiometria-solucoes-5",
    "area": "natureza",
    "front": "Uma amostra de 36 g de água, com massa molar 18 g/mol, contém:",
    "back": "2 mol. n = m/M = 36/18 = 2 mol. A unidade g se cancela com g/mol."
  },
  {
    "id": "rev-acidos-equilibrio-1",
    "area": "natureza",
    "front": "Uma solução de pH 3, comparada a outra de pH 5, tem [H⁺]:",
    "back": "Cem vezes maior. A diferença de duas unidades corresponde a 10² = 100 na concentração de H⁺. Menor pH significa maior [H⁺] nesse modelo."
  },
  {
    "id": "rev-acidos-equilibrio-2",
    "area": "natureza",
    "front": "No equilíbrio químico dinâmico:",
    "back": "As velocidades direta e inversa são iguais. A igualdade de velocidades mantém concentrações constantes, que não precisam ser iguais entre si. Reações continuam ocorrendo."
  },
  {
    "id": "rev-acidos-equilibrio-3",
    "area": "natureza",
    "front": "Um catalisador, nas mesmas condições de temperatura, altera principalmente:",
    "back": "A rapidez para atingir o equilíbrio. Ele oferece caminho com menor barreira energética e acelera os dois sentidos. Não desloca a composição de equilíbrio nem muda sua constante."
  },
  {
    "id": "rev-acidos-equilibrio-4",
    "area": "natureza",
    "front": "No modelo pH = −log[H⁺], [H⁺] = 10⁻⁶ mol/L corresponde a:",
    "back": "pH 6. log₁₀(10⁻⁶) = −6. O sinal negativo na definição produz pH = 6."
  },
  {
    "id": "rev-acidos-equilibrio-5",
    "area": "natureza",
    "front": "Misturar volumes iguais de ácido e base garante pH 7?",
    "back": "Não; concentrações, proporções e espécies precisam ser consideradas. Volumes iguais podem conter quantidades diferentes. Além de excessos, a natureza do sal e a temperatura influenciam o pH final."
  },
  {
    "id": "rev-organica-energia-1",
    "area": "natureza",
    "front": "CH₃CH₂OH apresenta a função:",
    "back": "Álcool. A hidroxila está ligada a carbono saturado, caracterizando álcool. Não há grupo carboxila nem carbonila nessa estrutura."
  },
  {
    "id": "rev-organica-energia-2",
    "area": "natureza",
    "front": "Sobre as ligações químicas em uma reação, é correto afirmar:",
    "back": "Romper exige energia; formar libera, e o saldo depende do conjunto. A energia líquida depende da energia necessária para romper ligações e da liberada ao formar outras. Isso explica reações exo e endotérmicas."
  },
  {
    "id": "rev-organica-energia-3",
    "area": "natureza",
    "front": "Um material ser de origem renovável garante biodegradação rápida em qualquer local?",
    "back": "Não; são propriedades distintas e dependentes das condições. Origem da matéria-prima e capacidade de biodegradação são critérios diferentes. O ambiente e as características do polímero importam."
  },
  {
    "id": "rev-organica-energia-4",
    "area": "natureza",
    "front": "Na combustão completa de 1 mol de CH₄, a equação balanceada exige:",
    "back": "2 mol de O₂. CH₄ + 2 O₂ → CO₂ + 2 H₂O. São necessários quatro átomos de oxigênio, equivalentes a duas moléculas ou dois mols de O₂ por mol de metano."
  },
  {
    "id": "rev-organica-energia-5",
    "area": "natureza",
    "front": "Etanol e dimetil éter possuem fórmula C₂H₆O e estruturas diferentes. Isso exemplifica:",
    "back": "Isomeria. A mesma fórmula molecular com diferentes estruturas caracteriza isomeria; nesse caso, as funções também diferem."
  },
  {
    "id": "rev-cinematica-forcas-1",
    "area": "natureza",
    "front": "72 km/h equivalem a:",
    "back": "20 m/s. Divide-se por 3,6: 72/3,6 = 20 m/s. A conversão combina 1 km = 1.000 m e 1 h = 3.600 s."
  },
  {
    "id": "rev-cinematica-forcas-2",
    "area": "natureza",
    "front": "Uma massa de 4 kg sofre resultante de 12 N. A aceleração tem módulo:",
    "back": "3 m/s². a = F/m = 12/4 = 3 m/s². A equação usa a força resultante, não uma força isolada sem considerar as demais."
  },
  {
    "id": "rev-cinematica-forcas-3",
    "area": "natureza",
    "front": "Força resultante nula permite:",
    "back": "Repouso ou movimento retilíneo uniforme. Pela primeira lei, a velocidade vetorial permanece constante quando a resultante é nula. Essa constante pode ser zero ou diferente de zero."
  },
  {
    "id": "rev-cinematica-forcas-4",
    "area": "natureza",
    "front": "Uma pessoa caminha 30 m para leste e retorna 30 m para oeste. Seu deslocamento final é:",
    "back": "Zero. Ela retorna à posição inicial, então Δx = 0. A distância total percorrida é 60 m."
  },
  {
    "id": "rev-cinematica-forcas-5",
    "area": "natureza",
    "front": "Em um gráfico velocidade × tempo, a área algébrica sob a curva fornece:",
    "back": "Deslocamento. A área integra velocidade ao longo do tempo, resultando em deslocamento. A inclinação, por sua vez, corresponde à aceleração."
  },
  {
    "id": "rev-energia-hidrostatica-1",
    "area": "natureza",
    "front": "Mantida a massa, dobrar a velocidade altera a energia cinética por fator:",
    "back": "4. Ec depende de v²; (2v)² = 4v². O fator dois não se aplica diretamente à energia cinética."
  },
  {
    "id": "rev-energia-hidrostatica-2",
    "area": "natureza",
    "front": "Uma máquina transforma 1.000 J recebidos em 600 J úteis. O rendimento é:",
    "back": "60%. 600/1.000 = 0,60 = 60%. Os 400 J restantes podem ser transferidos em formas não úteis à finalidade da máquina."
  },
  {
    "id": "rev-energia-hidrostatica-3",
    "area": "natureza",
    "front": "Um corpo flutua em repouso sem outras forças verticais além de peso e empuxo. Então:",
    "back": "Empuxo e peso têm módulos iguais. O equilíbrio exige resultante vertical nula. O empuxo para cima equilibra o peso para baixo."
  },
  {
    "id": "rev-energia-hidrostatica-4",
    "area": "natureza",
    "front": "Uma máquina transfere 900 J em 3 s. Sua potência média é:",
    "back": "300 W. P = E/Δt = 900/3 = 300 J/s = 300 W."
  },
  {
    "id": "rev-energia-hidrostatica-5",
    "area": "natureza",
    "front": "Na água com ρ = 1.000 kg/m³ e g = 10 m/s², uma diferença de profundidade de 3 m produz diferença de pressão de:",
    "back": "30.000 Pa. Δp = ρgΔh = 1.000 × 10 × 3 = 30.000 Pa. É diferença de pressão, sem somar pressão atmosférica."
  },
  {
    "id": "rev-eletricidade-consumo-1",
    "area": "natureza",
    "front": "Um aparelho de 2 kW funciona por 3 h. Consome:",
    "back": "6 kWh. E = P × t = 2 × 3 = 6 kWh. kW/h não é a unidade pedida de energia."
  },
  {
    "id": "rev-eletricidade-consumo-2",
    "area": "natureza",
    "front": "Um resistor ôhmico de 5 Ω sob 10 V conduz:",
    "back": "2 A. I = U/R = 10/5 = 2 A, nas condições em que vale o comportamento ôhmico."
  },
  {
    "id": "rev-eletricidade-consumo-3",
    "area": "natureza",
    "front": "Dois resistores de 8 Ω em paralelo têm resistência equivalente de:",
    "back": "4 Ω. 1/Req = 1/8 + 1/8 = 1/4. Em paralelo, a equivalente é menor que cada resistência positiva dos ramos."
  },
  {
    "id": "rev-eletricidade-consumo-4",
    "area": "natureza",
    "front": "Um consumo de 4 kWh custa quanto à tarifa hipotética de R$ 0,80/kWh, sem outras cobranças?",
    "back": "R$ 3,20. Custo = 4 × 0,80 = R$ 3,20 no modelo simplificado indicado."
  },
  {
    "id": "rev-eletricidade-consumo-5",
    "area": "natureza",
    "front": "Dois resistores de 3 Ω e 7 Ω em série têm resistência equivalente:",
    "back": "10 Ω. Em série, as resistências se somam: 3 + 7 = 10 Ω."
  },
  {
    "id": "rev-ondas-calor-optica-1",
    "area": "natureza",
    "front": "Som mais agudo tem maior:",
    "back": "Frequência. A altura sonora se relaciona à frequência. Intensidade e duração são outras propriedades; a velocidade depende do meio e das condições."
  },
  {
    "id": "rev-ondas-calor-optica-2",
    "area": "natureza",
    "front": "Qual mecanismo pode transferir energia térmica através do vácuo?",
    "back": "Radiação. A radiação eletromagnética não exige meio material. Condução e convecção precisam de matéria para seus mecanismos usuais."
  },
  {
    "id": "rev-ondas-calor-optica-3",
    "area": "natureza",
    "front": "Um objeto está a 1,5 m de um espelho plano. A distância entre objeto e imagem é:",
    "back": "3 m. A imagem fica 1,5 m atrás do espelho, enquanto o objeto está 1,5 m à frente; a separação total é 3 m."
  },
  {
    "id": "rev-ondas-calor-optica-4",
    "area": "natureza",
    "front": "Uma onda tem f = 50 Hz e λ = 2 m. Sua velocidade é:",
    "back": "100 m/s. v = λf = 2 × 50 = 100 m/s. Frequência em s⁻¹ e comprimento em m produzem m/s."
  },
  {
    "id": "rev-ondas-calor-optica-5",
    "area": "natureza",
    "front": "Sem perdas, aquecer 200 g de água em 5 °C, com c = 1 cal/(g·°C), exige:",
    "back": "1.000 cal. Q = mcΔT = 200 × 1 × 5 = 1.000 cal. A fórmula vale sem mudança de fase e nas hipóteses indicadas."
  },
  {
    "id": "rev-coesao-argumentacao-1",
    "area": "linguagens",
    "front": "“O ônibus atrasou; por isso, perdi a primeira aula.” O conectivo indica:",
    "back": "Consequência. O atraso é apresentado como motivo para a perda da aula; “por isso” introduz seu resultado. Concessão exigiria uma expectativa contrariada."
  },
  {
    "id": "rev-coesao-argumentacao-2",
    "area": "linguagens",
    "front": "Um artigo afirma: “Devemos ampliar o transporte coletivo porque ele atende mais passageiros por veículo.” Qual trecho funciona como tese?",
    "back": "Devemos ampliar o transporte coletivo. A tese é a posição defendida. A capacidade de transportar pessoas é a razão oferecida para sustentá-la; o texto não fornece um número exato."
  },
  {
    "id": "rev-coesao-argumentacao-3",
    "area": "linguagens",
    "front": "Uma pesquisa encontra associação entre leitura e notas altas. Qual conclusão respeita seu alcance?",
    "back": "Há associação; a causa exige investigação adicional. Uma associação pode envolver outros fatores, como acesso a recursos e hábitos de estudo. Não autoriza exclusividade causal nem afirmações universais."
  },
  {
    "id": "rev-variacao-linguistica-1",
    "area": "linguagens",
    "front": "Uma personagem usa vocabulário regional em um romance. Esse recurso pode:",
    "back": "Construir identidade e situar a voz social. Marcas regionais podem caracterizar pertencimento e identidade. Não permitem inferir capacidade intelectual nem tornam o texto necessariamente incompreensível."
  },
  {
    "id": "rev-variacao-linguistica-2",
    "area": "linguagens",
    "front": "Para um requerimento administrativo, a escolha de registro deve considerar:",
    "back": "O gênero, o destinatário e a finalidade. Adequação relaciona escolhas linguísticas às condições de comunicação. A convenção formal de um requerimento não invalida outras variedades em seus contextos."
  },
  {
    "id": "rev-variacao-linguistica-3",
    "area": "linguagens",
    "front": "Qual atitude expressa preconceito linguístico?",
    "back": "Associar sotaque regional a inferioridade intelectual. Atribuir inferioridade a pessoas por seu sotaque transforma variação em discriminação. As outras ações podem ampliar compreensão sem desvalorizar falantes."
  },
  {
    "id": "rev-literatura-modernismo-1",
    "area": "linguagens",
    "front": "Identificar o eu lírico significa reconhecer:",
    "back": "A voz construída que enuncia o poema. Eu lírico designa a voz textual. Coincidências biográficas podem existir, mas não autorizam identificação automática com a pessoa do autor."
  },
  {
    "id": "rev-literatura-modernismo-2",
    "area": "linguagens",
    "front": "A linguagem coloquial em uma obra modernista pode servir para:",
    "back": "Valorizar experiências e modos de falar cotidianos. A incorporação de usos cotidianos participa da renovação expressiva e da discussão sobre cultura brasileira. Informalidade não significa falta de elaboração."
  },
  {
    "id": "rev-literatura-modernismo-3",
    "area": "linguagens",
    "front": "Um narrador chama de justo quem explora trabalhadores, e os fatos narrados desmentem o elogio. O contraste favorece:",
    "back": "Uma leitura irônica e crítica. A diferença entre elogio e acontecimentos pode convidar o leitor a questionar a avaliação apresentada. Não é necessário aceitar literalmente a voz narrativa."
  },
  {
    "id": "rev-artes-corpo-midia-1",
    "area": "linguagens",
    "front": "Um saber culinário transmitido entre gerações é exemplo possível de:",
    "back": "Patrimônio cultural imaterial. O saber e sua transmissão podem constituir referência cultural imaterial. O alimento pronto não esgota o valor da prática."
  },
  {
    "id": "rev-artes-corpo-midia-2",
    "area": "linguagens",
    "front": "Uma legenda altera a interpretação de uma fotografia porque:",
    "back": "A linguagem verbal pode orientar a leitura do recorte visual. A legenda seleciona informações e propõe um contexto, podendo alterar a leitura da cena. A imagem não é uma janela neutra e completa da realidade."
  },
  {
    "id": "rev-artes-corpo-midia-3",
    "area": "linguagens",
    "front": "Adaptar um jogo para incluir participantes com mobilidade diferente busca:",
    "back": "Ampliar acesso e participação. A adaptação pode conservar objetivos do jogo e tornar sua prática acessível. Inclusão não exige ausência de regras, mas revisão de barreiras."
  },
  {
    "id": "rev-ingles-leitura-1",
    "area": "linguagens",
    "front": "“The park is small. However, it offers many activities.” “However” estabelece:",
    "back": "Contraste. O contraste opõe o tamanho reduzido à variedade de atividades, contrariando uma expectativa possível."
  },
  {
    "id": "rev-ingles-leitura-2",
    "area": "linguagens",
    "front": "“Students may use the library after class.” O modal indica, nesse contexto:",
    "back": "Permissão ou possibilidade. “May use” permite o uso; não exige que todos frequentem a biblioteca nem informa que a ação ocorreu."
  },
  {
    "id": "rev-ingles-leitura-3",
    "area": "linguagens",
    "front": "No cartaz “Save water. Fix leaking taps”, a finalidade principal é:",
    "back": "Incentivar conservação da água. Os imperativos pedem economia de água e reparo de torneiras com vazamento. Não há marca nem narrativa no texto fornecido."
  },
  {
    "id": "rev-espanhol-leitura-1",
    "area": "linguagens",
    "front": "“La oficina abre a las ocho.” Em contexto administrativo, “oficina” designa:",
    "back": "Um escritório. Em espanhol, “oficina” pode indicar escritório. A semelhança com o português não garante o mesmo sentido mais comum."
  },
  {
    "id": "rev-espanhol-leitura-2",
    "area": "linguagens",
    "front": "“Es caro; sin embargo, dura muchos años.” Há relação de:",
    "back": "Contraste entre custo e durabilidade. “Sin embargo” contrapõe ao preço alto uma característica favorável: a durabilidade."
  },
  {
    "id": "rev-espanhol-leitura-3",
    "area": "linguagens",
    "front": "“Todavía no terminé el libro” informa que o falante:",
    "back": "Ainda não concluiu a leitura. “Todavía no” indica que a ação não foi concluída até aquele momento, sem afirmar que nunca será."
  },
  {
    "id": "rev-colonizacao-escravidao-1",
    "area": "humanas",
    "front": "A produção açucareira colonial conectava-se principalmente:",
    "back": "Ao mercado externo e ao trabalho escravizado. O açúcar integrava circuitos atlânticos e sua produção se apoiava fortemente na escravidão. Existiam também atividades internas, por isso não se deve generalizar para toda a economia."
  },
  {
    "id": "rev-colonizacao-escravidao-2",
    "area": "humanas",
    "front": "Quilombos constituem evidência de:",
    "back": "Resistência e construção de formas de vida. A formação de comunidades e a defesa de autonomia revelam agência e resistência. Não significavam fim de todo o sistema escravista."
  },
  {
    "id": "rev-colonizacao-escravidao-3",
    "area": "humanas",
    "front": "A abolição de 1888 e a igualdade social devem ser distinguidas porque:",
    "back": "O fim jurídico da escravidão não garantiu inclusão material. Liberdade jurídica não assegurou terra, renda e educação. A análise histórica considera as lutas pela abolição e as estruturas mantidas após ela."
  },
  {
    "id": "rev-revolucoes-industriais-1",
    "area": "humanas",
    "front": "A industrialização alterou o trabalho ao:",
    "back": "Concentrar trabalhadores e disciplinar ritmos fabris. A concentração nas fábricas e o controle do tempo foram mudanças importantes. A produtividade não garantiu igualdade e o crescimento urbano acompanhou o processo em muitos lugares."
  },
  {
    "id": "rev-revolucoes-industriais-2",
    "area": "humanas",
    "front": "Uma declaração de igualdade convive com voto restrito a proprietários. Isso revela:",
    "back": "Distância entre princípio e exercício dos direitos. A restrição mostra que um princípio universalizante podia ter aplicação limitada. A análise deve identificar os grupos incluídos e excluídos."
  },
  {
    "id": "rev-revolucoes-industriais-3",
    "area": "humanas",
    "front": "Uma greve por redução da jornada expressa:",
    "back": "Reivindicação coletiva sobre condições de trabalho. O objetivo apresentado é transformar a jornada. Não autoriza inferir oposição a toda tecnologia nem encerramento permanente da produção."
  },
  {
    "id": "rev-brasil-era-vargas-1",
    "area": "humanas",
    "front": "O Estado Novo foi:",
    "back": "Uma ditadura entre 1937 e 1945. O Estado Novo corresponde à fase ditatorial de Vargas entre 1937 e 1945. Não se deve confundi-lo com todo o período republicano."
  },
  {
    "id": "rev-brasil-era-vargas-2",
    "area": "humanas",
    "front": "A coexistência de CLT e controle sindical mostra que:",
    "back": "Proteção trabalhista e restrição política podem coexistir. A ampliação de direitos trabalhistas não significa liberdade política plena. A abrangência e a implementação dos direitos também variaram."
  },
  {
    "id": "rev-brasil-era-vargas-3",
    "area": "humanas",
    "front": "Um cartaz que apresenta o líder como único responsável por conquistas trabalhistas deve ser lido como:",
    "back": "Estratégia de legitimação política. A propaganda seleciona e atribui sentidos às conquistas para construir legitimidade. É preciso considerar ações de trabalhadores e outros processos históricos."
  },
  {
    "id": "rev-ditadura-redemocratizacao-1",
    "area": "humanas",
    "front": "O AI-5 é associado a:",
    "back": "Ampliação da censura e de poderes excepcionais. O ato de 1968 intensificou instrumentos autoritários. Não deve ser confundido com os marcos da redemocratização."
  },
  {
    "id": "rev-ditadura-redemocratizacao-2",
    "area": "humanas",
    "front": "A campanha Diretas Já reivindicava:",
    "back": "Eleições diretas para presidente. A mobilização defendia a escolha direta da Presidência. A eleição de 1985 ainda foi indireta, o que exige distinguir reivindicação e resultado imediato."
  },
  {
    "id": "rev-ditadura-redemocratizacao-3",
    "area": "humanas",
    "front": "Qual conclusão sobre democracia é mais adequada?",
    "back": "Envolve direitos, pluralismo e participação além do voto. Eleição é importante, mas democracia também exige liberdades, controle do poder e condições de participação. Mudanças de governo não bastam por si sós."
  },
  {
    "id": "rev-cartografia-clima-1",
    "area": "humanas",
    "front": "Em escala 1:50.000, 4 cm representam:",
    "back": "2 km. 4 × 50.000 = 200.000 cm. Como 100.000 cm equivalem a 1 km, a distância é 2 km."
  },
  {
    "id": "rev-cartografia-clima-2",
    "area": "humanas",
    "front": "Qual frase descreve tempo atmosférico?",
    "back": "Hoje choveu à tarde nesta cidade. A observação de um dia caracteriza tempo. As demais descrevem padrões ou estatísticas de longo prazo associados ao clima."
  },
  {
    "id": "rev-cartografia-clima-3",
    "area": "humanas",
    "front": "Um mapa plano sempre:",
    "back": "Envolve alguma distorção da superfície terrestre. A passagem da superfície curva para o plano implica distorções. A escolha de projeção depende das propriedades e finalidades priorizadas."
  },
  {
    "id": "rev-agro-globalizacao-1",
    "area": "humanas",
    "front": "Uma fazenda produz 600 t em 100 ha; outra, 400 t em 50 ha. Qual tem maior produtividade?",
    "back": "A segunda, com 8 t/ha. Produtividade é produção dividida pela área: 600/100 = 6 e 400/50 = 8 t/ha. A maior produção total não implica maior produtividade."
  },
  {
    "id": "rev-agro-globalizacao-2",
    "area": "humanas",
    "front": "Montagem interrompida pela falta de um componente importado evidencia:",
    "back": "Interdependência de cadeias produtivas. A produção depende de etapas distribuídas e conectadas. Uma interrupção permite observar essa dependência, sem provar o fim de toda indústria."
  },
  {
    "id": "rev-agro-globalizacao-3",
    "area": "humanas",
    "front": "Modernização técnica no campo garante, por si só:",
    "back": "Nenhuma eliminação automática da desigualdade fundiária. Mudanças tecnológicas não determinam distribuição da propriedade e do crédito. Esses resultados dependem de relações sociais e políticas específicas."
  },
  {
    "id": "rev-filosofia-etica-politica-1",
    "area": "humanas",
    "front": "“Essa ideia é falsa porque seu autor é antipático.” O problema é:",
    "back": "Ataque à pessoa em lugar de refutação das razões. A característica pessoal citada não resolve o conteúdo da ideia. A análise deve examinar as premissas e evidências pertinentes."
  },
  {
    "id": "rev-filosofia-etica-politica-2",
    "area": "humanas",
    "front": "Uma decisão é defendida exclusivamente por produzir o melhor resultado coletivo. O critério enfatizado é:",
    "back": "As consequências. O enunciado fundamenta a decisão nos efeitos produzidos. Isso caracteriza um critério consequencialista em contraste com fundamentação apenas no dever."
  },
  {
    "id": "rev-filosofia-etica-politica-3",
    "area": "humanas",
    "front": "O estado de natureza nas teorias contratualistas deve ser tratado como:",
    "back": "Construção teórica que varia conforme o autor. É um recurso teórico para discutir a condição humana e a legitimidade política. Autores atribuem características diferentes a essa condição."
  },
  {
    "id": "rev-sociologia-cultura-1",
    "area": "humanas",
    "front": "Etnocentrismo ocorre quando alguém:",
    "back": "Usa a própria cultura para declarar outra inferior. A própria referência cultural vira padrão supostamente universal de superioridade. Compreensão contextual e comparação não são, por si, etnocêntricas."
  },
  {
    "id": "rev-sociologia-cultura-2",
    "area": "humanas",
    "front": "A socialização pode ser descrita como:",
    "back": "Aprendizagem de normas e práticas nas relações sociais. A aprendizagem ocorre ao longo da vida em diferentes instituições e relações. Não impede crítica ou mudança das normas."
  },
  {
    "id": "rev-sociologia-cultura-3",
    "area": "humanas",
    "front": "Regras públicas e competências definidas se relacionam ao conceito de burocracia como:",
    "back": "Organização baseada em procedimentos e impessoalidade. O tipo ideal descreve uma forma de organização racional-legal. Ineficiência e favorecimento podem ser problemas reais, mas não definem o conceito."
  }
];

export const LESSONS = [
  {
    "id": "interpretacao",
    "area": "linguagens",
    "title": "Interpretação de textos",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Encontre ideias centrais, inferências e a intenção de quem escreve.",
    "objectives": [
      "Diferenciar informação explícita e implícita",
      "Reconhecer tese e propósito comunicativo"
    ],
    "sections": [
      {
        "title": "Ler é construir sentido",
        "paragraphs": [
          "Interpretar um texto não significa apenas reconhecer palavras: é identificar o tema, o ponto de vista, o público e as relações entre as ideias. Antes de ler as alternativas de uma questão, tente explicar em uma frase o que o texto comunica.",
          "Informações explícitas aparecem diretamente no enunciado. Inferências são conclusões justificadas pelas pistas do texto — e não palpites sem evidência."
        ],
        "example": "Se uma notícia afirma que a cidade ampliou ciclovias para reduzir congestionamentos, podemos inferir que a medida busca incentivar outros meios de transporte. Não podemos inferir, sem mais dados, que todos abandonaram os carros."
      },
      {
        "title": "Estratégia para a prova",
        "paragraphs": [
          "Leia o comando da questão com atenção, destaque palavras como “segundo o texto” e “objetivo” e compare cada alternativa com evidências textuais. Desconfie de opções que generalizam, invertem causa e consequência ou acrescentam fatos inexistentes."
        ],
        "bullets": [
          "Identifique gênero e contexto.",
          "Localize a ideia central de cada parágrafo.",
          "Elimine alternativas incompatíveis com o texto."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Tema é o assunto; tese é uma posição defendida sobre ele. Uma evidência pode sustentar uma conclusão limitada sem provar uma regra universal. Expressões como “pode”, “apenas” e “ainda” delimitam o alcance do que se afirma. Correlação temporal não estabelece, sozinha, causalidade. Na inferência, procure a conclusão que exige menos suposições externas."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “Após ampliar o horário, a biblioteca recebeu mais visitas; não foram investigadas outras mudanças”. Há aumento observado e sucessão temporal. Concluir que o horário foi a única causa excede a evidência; dizer que a ampliação pode ter contribuído preserva a cautela."
      }
    ],
    "questions": [
      {
        "prompt": "Um cartaz diz: “Leve sua garrafa reutilizável. Pequenas escolhas reduzem o lixo.” Qual é sua principal finalidade?",
        "options": [
          "Descrever uma paisagem.",
          "Estimular uma mudança de comportamento.",
          "Narrar uma história pessoal.",
          "Definir uma lei ambiental."
        ],
        "answer": 1,
        "explanation": "O cartaz utiliza um apelo direto para incentivar uma prática sustentável."
      },
      {
        "prompt": "Um artigo diz que “algumas escolas ampliaram a biblioteca”. Qual conclusão é sustentada pelo trecho?",
        "options": [
          "Todas as escolas têm bibliotecas novas.",
          "Nenhuma escola possui biblioteca.",
          "Há escolas que expandiram suas bibliotecas.",
          "As bibliotecas deixaram de ser utilizadas."
        ],
        "answer": 2,
        "explanation": "“Algumas” indica uma parte, não a totalidade das escolas."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] “A praça é pública, mas o acesso continua restrito.” O conectivo destaca qual relação?",
        "options": [
          "Causa da condição jurídica.",
          "Conclusão de que a praça é privada.",
          "Contraste entre condição jurídica e uso efetivo.",
          "Repetição da mesma informação."
        ],
        "answer": 2,
        "explanation": "“Mas” contrapõe o caráter público à restrição prática; não altera a propriedade informada."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] “Os empréstimos cresceram; por isso, serão comprados livros.” O segundo fato é apresentado como quê?",
        "options": [
          "Causa anterior ao crescimento.",
          "Condição para os empréstimos passados.",
          "Prova de que todos leem.",
          "Consequência que orienta uma decisão."
        ],
        "answer": 3,
        "explanation": "“Por isso” liga o crescimento observado à decisão de compra, sem universalizar hábitos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “O programa pode melhorar a aprendizagem.” Qual reescrita preserva o grau de certeza?",
        "options": [
          "Há possibilidade de melhora com o programa.",
          "O programa já melhorou todas as notas.",
          "O programa certamente resolverá o problema.",
          "O programa não tem chance de funcionar."
        ],
        "answer": 0,
        "explanation": "O modal “pode” indica possibilidade, não comprovação nem certeza."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Só os inscritos receberam senha.” Qual conclusão é necessária?",
        "options": [
          "Todo inscrito recebeu senha.",
          "Quem recebeu senha estava inscrito.",
          "Nenhum inscrito ficou sem senha.",
          "Receber senha dispensa inscrição."
        ],
        "answer": 1,
        "explanation": "“Só” estabelece inscrição como condição necessária, sem assegurar senha para todos os inscritos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “A rua acordou com o barulho das obras.” Sem outros dados, qual leitura é sustentada?",
        "options": [
          "Todos os moradores concordavam com as obras.",
          "As obras eram ilegais.",
          "O ruído marcou o início da atividade na rua.",
          "O bairro ficou sem moradores."
        ],
        "answer": 2,
        "explanation": "A imagem descreve um efeito sonoro e cotidiano; concordância e legalidade não aparecem."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “A cidade precisa de ônibus frequentes: espera longa afasta usuários.” Qual é a função da segunda oração?",
        "options": [
          "Negar a tese anterior.",
          "Apresentar uma instrução de embarque.",
          "Mudar o tema para turismo.",
          "Justificar a necessidade defendida."
        ],
        "answer": 3,
        "explanation": "A relação entre espera e uso oferece uma razão para a tese sobre frequência."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “Embora mais barata, a proposta foi rejeitada por não atender às exigências.” O preço foi quê?",
        "options": [
          "Uma vantagem insuficiente para garantir aprovação.",
          "A única causa da rejeição.",
          "Uma informação que prova cumprimento das exigências.",
          "Um valor necessariamente maior que o das concorrentes."
        ],
        "answer": 0,
        "explanation": "A concessão admite a vantagem de preço, mas a falta de adequação explica a rejeição."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Dois relatos dizem: I “Entre os leitores que responderam à enquete, 70% preferem livros digitais”. II “Todos os entrevistados foram recrutados em um aplicativo de leitura digital”. Qual conclusão combina corretamente alcance e seleção?",
        "options": [
          "A pesquisa prova preferência de 70% de toda a população.",
          "A preferência vale para os respondentes, e o recrutamento pode limitar a generalização.",
          "O recrutamento prova que as respostas individuais são falsas.",
          "Os dados demonstram que livros impressos perderam todos os leitores."
        ],
        "answer": 1,
        "explanation": "É preciso integrar denominador e recrutamento: a porcentagem descreve a amostra; seu perfil impede generalização automática. Viés possível não torna cada resposta falsa."
      }
    ]
  },
  {
    "id": "figuras-linguagem",
    "area": "linguagens",
    "title": "Figuras de linguagem",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Entenda metáfora, comparação, ironia e outros efeitos de sentido.",
    "objectives": [
      "Identificar linguagem figurada",
      "Reconhecer efeitos expressivos"
    ],
    "sections": [
      {
        "title": "Além do sentido literal",
        "paragraphs": [
          "Na linguagem figurada, as palavras produzem sentidos que ultrapassam suas definições literais. Uma metáfora aproxima ideias sem usar conectivo comparativo: “A vida é uma viagem”. A comparação explicita a relação: “A vida é como uma viagem”."
        ],
        "example": "“Esperei uma eternidade” é hipérbole, porque exagera a duração da espera para reforçar uma sensação."
      },
      {
        "title": "Ironia e personificação",
        "paragraphs": [
          "Ironia aparece quando a intenção comunicativa contrasta com o que é dito, geralmente indicada pelo contexto. Personificação atribui ações ou características humanas a seres não humanos: “O vento sussurrou”.",
          "Nas questões, é importante explicar por que a figura foi usada, não apenas decorá-la."
        ],
        "bullets": [
          "Metáfora: associação implícita.",
          "Hipérbole: exagero expressivo.",
          "Personificação: atribuição de traços humanos.",
          "Ironia: contraste entre dizer e querer comunicar."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Metonímia substitui termos por proximidade de sentido, como autor por obra. Antítese aproxima termos opostos; paradoxo reúne ideias aparentemente incompatíveis. Eufemismo atenua uma expressão. Uma passagem pode combinar figuras: identifique tanto o mecanismo quanto o efeito no contexto, sem tratar toda expressão figurada como metáfora."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “Li Machado na viagem” usa autor pela obra, portanto metonímia. “As páginas me abraçaram” atribui ação humana às páginas, portanto personificação. Ambas constroem uma relação afetiva com a leitura, por mecanismos distintos."
      }
    ],
    "questions": [
      {
        "prompt": "Em “O relógio corria e a tarde escapava”, a expressão destaca principalmente:",
        "options": [
          "Um relato técnico.",
          "A passagem subjetiva do tempo.",
          "Um dado meteorológico.",
          "Uma definição científica."
        ],
        "answer": 1,
        "explanation": "As imagens figuradas reforçam a sensação de que o tempo passa rapidamente."
      },
      {
        "prompt": "A frase “Estou morrendo de fome” exemplifica:",
        "options": [
          "Hipérbole.",
          "Comparação.",
          "Eufemismo.",
          "Metonímia."
        ],
        "answer": 0,
        "explanation": "O exagero enfatiza a intensidade da fome, sem sentido literal."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Em “Seus olhos brilhavam como estrelas”, qual recurso explicita a aproximação?",
        "options": [
          "Metonímia.",
          "Eufemismo.",
          "Ironia.",
          "Comparação."
        ],
        "answer": 3,
        "explanation": "O conectivo “como” torna explícita a comparação entre olhos e estrelas."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] “Li Clarice durante as férias”, referindo-se a livros, apresenta quê?",
        "options": [
          "Metonímia do autor pela obra.",
          "Hipérbole numérica.",
          "Comparação com conectivo.",
          "Antítese entre férias e leitura."
        ],
        "answer": 0,
        "explanation": "O nome da autora substitui suas obras por uma relação de autoria."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Ele partiu desta vida”, em lugar de “morreu”, tem qual efeito?",
        "options": [
          "Exagerar o número de mortes.",
          "Atenuar uma informação dolorosa.",
          "Comparar vida e viagem explicitamente.",
          "Expressar elogio irônico obrigatório."
        ],
        "answer": 1,
        "explanation": "O eufemismo suaviza a referência à morte; não exige ironia."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Ao chegar a uma sala inundada, alguém diz “Que lugar seco!”. O contexto produz quê?",
        "options": [
          "Descrição literal do ambiente.",
          "Comparação entre dois espaços secos.",
          "Ironia pela incompatibilidade com a situação.",
          "Definição técnica de umidade."
        ],
        "answer": 2,
        "explanation": "O sentido pretendido contrasta com o elogio aparente, diante da inundação."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Em “Entre risos e lágrimas, a despedida terminou”, a oposição enfatiza quê?",
        "options": [
          "Ausência de emoção.",
          "Superioridade literal das lágrimas.",
          "Uma relação de autoria.",
          "Convivência de emoções contrastantes."
        ],
        "answer": 3,
        "explanation": "Risos e lágrimas formam uma antítese que reúne afetos opostos na despedida."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “O mar reclamava contra as pedras.” Qual análise liga forma e efeito?",
        "options": [
          "Personificação que torna o mar expressivo e inquieto.",
          "Metonímia que substitui o autor pela obra.",
          "Eufemismo que suaviza a morte.",
          "Comparação explícita entre pessoas."
        ],
        "answer": 0,
        "explanation": "Reclamar é ação humana atribuída ao mar; o recurso intensifica a imagem de agitação."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “A notícia era uma pedra no peito.” Por que se trata de metáfora?",
        "options": [
          "Há descrição de uma pedra realmente engolida.",
          "A notícia é associada a um peso doloroso sem conectivo comparativo.",
          "O nome do jornal substitui o repórter.",
          "O enunciado atenua obrigatoriamente uma alegria."
        ],
        "answer": 1,
        "explanation": "A associação implícita transforma sofrimento em sensação de peso; a leitura literal não é exigida."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] “A cidade sorriu nas vitrines; nos becos, a alegria tinha fome.” Qual leitura articula os recursos e a crítica?",
        "options": [
          "A comparação explícita prova alegria idêntica em toda a cidade.",
          "O eufemismo elimina qualquer tensão entre consumo e privação.",
          "Personificações e contraste espacial expõem a desigualdade por trás da aparência de prosperidade.",
          "A metonímia do autor pela obra descreve apenas decoração comercial."
        ],
        "answer": 2,
        "explanation": "Cidade sorrindo e alegria com fome recebem traços humanos; vitrines e becos contrapõem aparência e privação. O efeito conjunto sustenta a crítica, sem exigir que cada palavra tenha uma única figura possível."
      }
    ]
  },
  {
    "id": "generos-textuais",
    "area": "linguagens",
    "title": "Gêneros e funções da linguagem",
    "minutes": 45,
    "level": "Fundamentos",
    "summary": "Identifique objetivo comunicativo, suporte e interlocutor.",
    "objectives": [
      "Reconhecer diferenças entre notícia e propaganda",
      "Relacionar linguagem ao propósito"
    ],
    "sections": [
      {
        "title": "Cada texto tem uma função",
        "paragraphs": [
          "Textos circulam socialmente com formatos e propósitos: uma notícia informa acontecimentos, um manual orienta procedimentos, uma propaganda tenta persuadir e um artigo de opinião defende uma tese.",
          "Um gênero pode combinar várias funções: um anúncio pode informar características de um produto enquanto procura convencer o público a comprá-lo."
        ],
        "example": "“Desligue o aparelho antes de limpar” é uma instrução típica de manual, com verbos direcionados ao leitor."
      },
      {
        "title": "Contexto e destinatário",
        "paragraphs": [
          "Identifique quem fala, para quem, por qual meio e com qual objetivo. Esses elementos explicam escolhas como linguagem formal ou informal, imagens e marcas de subjetividade."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "As funções da linguagem dizem respeito ao foco da comunicação: referencial no assunto; emotiva no emissor; conativa no destinatário; fática no contato; metalinguística no código; poética na forma da mensagem. Gênero e função não são equivalentes: uma notícia pode citar uma fala emotiva e ainda ter finalidade predominantemente informativa."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um verbete que explica a palavra “sustentável” põe o código em foco: função metalinguística. Uma campanha que diz “Repense seu consumo” usa esse tema para agir sobre o leitor: função conativa. O assunto parecido não determina a mesma função."
      }
    ],
    "questions": [
      {
        "prompt": "Qual característica é mais associada a um artigo de opinião?",
        "options": [
          "Defesa de uma posição com argumentos.",
          "Sequência de comandos operacionais.",
          "Lista de preços sem comentários.",
          "Transcrição integral de um diálogo teatral."
        ],
        "answer": 0,
        "explanation": "O artigo de opinião costuma sustentar um posicionamento sobre assunto de interesse público."
      },
      {
        "prompt": "“Acesse o site e participe da campanha!” enfatiza qual função?",
        "options": [
          "Metalinguística.",
          "Poética.",
          "Apelativa/conativa.",
          "Fática."
        ],
        "answer": 2,
        "explanation": "Há uma tentativa direta de influenciar o comportamento do destinatário."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Um verbete explica o significado de “metáfora”. Qual função se destaca?",
        "options": [
          "Metalinguística.",
          "Fática.",
          "Emotiva.",
          "Conativa."
        ],
        "answer": 0,
        "explanation": "A linguagem é usada para explicar um elemento do próprio código."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] “Alô, você está me ouvindo?” enfatiza quê?",
        "options": [
          "Descrição científica do som.",
          "Verificação do canal de comunicação.",
          "Defesa de uma tese econômica.",
          "Exploração estética da rima."
        ],
        "answer": 1,
        "explanation": "A função fática testa se o contato entre interlocutores está estabelecido."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um relato começa com “Sinto saudade daquele lugar”. Que foco se evidencia?",
        "options": [
          "A definição de uma palavra.",
          "A ordem dada ao destinatário.",
          "A experiência subjetiva do emissor.",
          "O teste de conexão telefônica."
        ],
        "answer": 2,
        "explanation": "O sentimento expresso põe o emissor em primeiro plano, caracterizando função emotiva."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual trecho é mais adequado a um manual de montagem?",
        "options": [
          "Ontem a fábrica anunciou uma expansão.",
          "A beleza desta cadeira supera o tempo.",
          "Sinto alegria ao observar a madeira.",
          "Encaixe a peça A na abertura B antes de apertar os parafusos."
        ],
        "answer": 3,
        "explanation": "O manual organiza procedimentos para orientar uma ação, com sequência e identificação das peças."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma notícia apresenta data, local e participantes de um evento. Qual função tende a predominar?",
        "options": [
          "Referencial.",
          "Fática.",
          "Metalinguística.",
          "Emotiva."
        ],
        "answer": 0,
        "explanation": "O foco nos dados do acontecimento evidencia o contexto ou referente."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um anúncio informa autonomia da bateria e pede “Compre agora”. Qual leitura é adequada?",
        "options": [
          "Deixa de ser anúncio por conter números.",
          "Combina informação com finalidade persuasiva.",
          "É necessariamente um artigo científico.",
          "Tem função apenas metalinguística."
        ],
        "answer": 1,
        "explanation": "Gêneros combinam recursos; dados sobre o produto podem sustentar a persuasão."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Rimas e repetições em uma campanha podem destacar a função poética porque fazem o quê?",
        "options": [
          "Garantem que o conteúdo seja ficcional.",
          "Anulam a intenção persuasiva.",
          "Chamam atenção para a construção da mensagem.",
          "Transformam o texto em verbete."
        ],
        "answer": 2,
        "explanation": "Função poética é atenção à forma e pode coexistir com a conativa em um anúncio."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um cartaz diz “Poupe água: cada gota conta”, apresenta dados sobre consumo e repete sons. Qual análise distingue gênero e funções sem exclusivismo?",
        "options": [
          "É uma notícia porque qualquer dado elimina a persuasão.",
          "É um poema sem propósito social porque há repetição sonora.",
          "É um verbete porque menciona uma unidade de medida.",
          "É uma campanha com finalidade conativa apoiada em informação referencial e elaboração poética."
        ],
        "answer": 3,
        "explanation": "A análise combina propósito de mobilização, dados e forma; a presença de uma função não exclui as demais nem determina sozinha o gênero."
      }
    ]
  },
  {
    "id": "brasil-republica",
    "area": "humanas",
    "title": "Brasil República: cidadania",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Mudanças políticas, participação popular e ampliação de direitos.",
    "objectives": [
      "Relacionar cidadania e direitos",
      "Identificar mudanças históricas sem simplificações"
    ],
    "sections": [
      {
        "title": "A República e suas transformações",
        "paragraphs": [
          "A proclamação da República ocorreu em 1889, mas não produziu imediatamente cidadania plena para toda a população. Participação política e acesso efetivo a direitos variaram muito ao longo do tempo.",
          "O século XX brasileiro incluiu períodos democráticos e autoritários. Ao estudar, observe quem tinha voz política e quais grupos lutaram pela ampliação de direitos."
        ],
        "example": "A Constituição de 1988 consolidou um amplo conjunto de direitos e ficou conhecida como Constituição Cidadã."
      },
      {
        "title": "Trabalhar com fontes",
        "paragraphs": [
          "Charges, discursos, jornais e leis permitem estudar diferentes perspectivas de cada período. Uma fonte histórica deve ser lida considerando autor, data, público e interesses."
        ],
        "bullets": [
          "Não confunda fim de um regime com igualdade social imediata.",
          "Observe permanências e mudanças.",
          "Compare documentos de diferentes grupos sociais."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Cidadania reúne direitos civis, políticos e sociais, que podem avançar em ritmos diferentes. A República de 1889 mudou a forma de governo, mas manteve exclusões. Na Primeira República, coronelismo e controle eleitoral limitaram a participação; mulheres e analfabetos estavam excluídos do eleitorado. A conquista de direitos envolve instituições e mobilização social."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma lei reconhece um direito, mas um grupo não consegue exercê-lo por falta de serviços. Há reconhecimento formal e déficit de efetivação. Não se conclui nem que a lei inexiste nem que a desigualdade acabou: compare norma e experiência social."
      }
    ],
    "questions": [
      {
        "prompt": "A Constituição brasileira promulgada em 1988 é associada:",
        "options": [
          "Ao fim da monarquia, em 1889.",
          "À ampliação de direitos na redemocratização.",
          "À instituição do Estado Novo.",
          "À Independência de 1822."
        ],
        "answer": 1,
        "explanation": "A Constituição de 1988 marcou o processo de redemocratização e ampliou garantias de direitos."
      },
      {
        "prompt": "Ao analisar uma charge histórica, é importante considerar:",
        "options": [
          "Apenas a identificação do personagem, sem relacioná-lo à conjuntura.",
          "A leitura da charge como relato neutro dos acontecimentos.",
          "A autoria, a época e o contexto político.",
          "A intenção humorística como substituta de qualquer contextualização."
        ],
        "answer": 2,
        "explanation": "As charges expressam posições e só fazem sentido quando contextualizadas."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] A mudança de monarquia para república em 1889 garantiu imediatamente igualdade social?",
        "options": [
          "Sim; toda desigualdade foi abolida.",
          "Não; a mudança institucional coexistiu com exclusões.",
          "Sim; todos passaram a votar naquele ano.",
          "Não; a monarquia permaneceu como forma de governo."
        ],
        "answer": 1,
        "explanation": "A alteração da forma de governo não suprimiu estruturas de desigualdade nem universalizou o voto."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual exemplo corresponde mais diretamente a direito social?",
        "options": [
          "Liberdade de expressão.",
          "Participação em uma eleição.",
          "Acesso à educação.",
          "Direito de defesa em processo."
        ],
        "answer": 2,
        "explanation": "Educação integra a dimensão social; expressão e defesa são civis, e voto é político."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um chefe local controla votos por dependência econômica. O mecanismo aproxima-se de quê?",
        "options": [
          "Universalização efetiva da escolha livre.",
          "Separação completa entre economia e política.",
          "Participação igualitária sem coerção.",
          "Coronelismo e limitação da autonomia eleitoral."
        ],
        "answer": 3,
        "explanation": "Relações de dependência e poder local podem restringir a liberdade do voto."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma lei garante acesso à escola, mas faltam vagas. O caso distingue o quê?",
        "options": [
          "Reconhecimento formal e realização efetiva de um direito.",
          "Direito civil e ausência de qualquer questão social.",
          "Promulgação da República e Independência.",
          "Igualdade de acesso já concretizada."
        ],
        "answer": 0,
        "explanation": "A existência da norma não resolve sozinha recursos e condições para o exercício do direito."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma propaganda de governo celebra suas próprias realizações. Como usá-la historicamente?",
        "options": [
          "Como descrição completa e neutra da sociedade.",
          "Como fonte das estratégias de legitimação, comparada com outros registros.",
          "Como documento inútil por ter intenção política.",
          "Como prova de concordância de toda a população."
        ],
        "answer": 1,
        "explanation": "Fontes interessadas são úteis para estudar a construção de imagens, mas precisam de contextualização e confronto."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Greves e associações reivindicando proteção ao trabalho evidenciam quê?",
        "options": [
          "Concessão de todos os direitos sem conflitos.",
          "Ausência de sujeitos sociais na política.",
          "Participação coletiva na construção de direitos.",
          "Identidade obrigatória entre empregadores e empregados."
        ],
        "answer": 2,
        "explanation": "Direitos podem resultar de disputas e organização, e não apenas de decisões isoladas de governantes."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Direitos políticos podem ser restringidos enquanto certos direitos trabalhistas são ampliados. Isso mostra quê?",
        "options": [
          "Proteção trabalhista prova democracia plena.",
          "Cidadania tem apenas dimensão econômica.",
          "Qualquer direito social impede censura.",
          "As dimensões da cidadania não avançam necessariamente juntas."
        ],
        "answer": 3,
        "explanation": "Uma dimensão pode ser ampliada em contexto de restrição de outra; é necessário distinguir os indicadores."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma fonte oficial afirma “somos todos cidadãos”; registros eleitorais excluem parte da população e movimentos exigem inclusão. Qual interpretação integra as três evidências?",
        "options": [
          "A linguagem universal pode coexistir com exclusão prática e ser disputada por movimentos por direitos.",
          "A frase oficial prova participação política universal.",
          "Os registros eleitorais tornam impossível estudar o discurso oficial.",
          "A mobilização demonstra que nunca existiu nenhum direito civil."
        ],
        "answer": 0,
        "explanation": "A comparação identifica tensão entre discurso, regras e ação coletiva. Não reduz cidadania a uma declaração nem transforma exclusão parcial em ausência de todos os direitos."
      }
    ]
  },
  {
    "id": "geografia-ambiente",
    "area": "humanas",
    "title": "Urbanização e meio ambiente",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Espaço urbano, infraestrutura e impactos socioambientais.",
    "objectives": [
      "Reconhecer consequências da urbanização",
      "Interpretar questões ambientais integradas"
    ],
    "sections": [
      {
        "title": "Crescimento urbano e desigualdade",
        "paragraphs": [
          "Urbanização envolve o crescimento proporcional da população que vive em cidades. Quando ocorre sem infraestrutura suficiente, pode ampliar problemas de saneamento, mobilidade e habitação.",
          "Problemas ambientais urbanos raramente têm causa única: ocupação do solo, impermeabilização, gestão pública e desigualdade social podem se combinar."
        ],
        "example": "A impermeabilização do solo reduz a infiltração da água, o que pode agravar enxurradas quando chove intensamente."
      },
      {
        "title": "Soluções e escala",
        "paragraphs": [
          "Transporte coletivo, planejamento territorial, áreas verdes e saneamento são estratégias que exigem articulação entre sociedade e poder público. Uma solução eficiente depende das condições locais."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Risco urbano combina ameaça, exposição e vulnerabilidade. Uma chuva intensa pode causar danos diferentes em bairros com infraestrutura e moradia distintas. Urbanização é aumento da proporção urbana, não apenas aumento absoluto de habitantes. Ilhas de calor associam-se a materiais que retêm calor, pouca vegetação e atividades humanas; soluções precisam considerar bacia hidrográfica e justiça social."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: num território de 1.000 habitantes, a população urbana passa de 600 para 650 enquanto o total sobe para 1.300. A proporção cai de 60% para 50%, apesar do aumento urbano absoluto. Para avaliar urbanização, compare proporções com a mesma base temporal."
      }
    ],
    "questions": [
      {
        "prompt": "Uma consequência frequente da impermeabilização de extensas áreas urbanas é:",
        "options": [
          "Aumento automático da infiltração.",
          "Redução de todo risco de enchente.",
          "Maior escoamento superficial da água.",
          "Fim da necessidade de drenagem."
        ],
        "answer": 2,
        "explanation": "As superfícies impermeáveis dificultam a absorção da água pelo solo."
      },
      {
        "prompt": "O saneamento básico está diretamente ligado:",
        "options": [
          "À proteção da saúde pública e ambiental.",
          "À geração de eletricidade, sem relação direta com resíduos ou água.",
          "À ampliação de vias de tráfego como finalidade exclusiva.",
          "À valorização imobiliária, sem relação com prevenção de doenças."
        ],
        "answer": 0,
        "explanation": "Água tratada, coleta de esgoto e manejo adequado de resíduos reduzem riscos à saúde."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma população urbana cresce de 400 para 500, enquanto a total passa de 800 para 1.250. O percentual urbano faz o quê?",
        "options": [
          "Sobe de 40% para 50%.",
          "Permanece em 50%.",
          "Cai de 50% para 40%.",
          "Sobe para 62,5%."
        ],
        "answer": 2,
        "explanation": "400/800 = 50%; 500/1.250 = 40%. Crescimento absoluto não implica aumento proporcional."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual intervenção favorece infiltração, quando adequada ao terreno?",
        "options": [
          "Asfaltar todas as áreas verdes.",
          "Canalizar qualquer nascente sem estudo.",
          "Cobrir o solo com concreto contínuo.",
          "Jardins de chuva e superfícies permeáveis."
        ],
        "answer": 3,
        "explanation": "Superfícies permeáveis e retenção local podem reduzir escoamento, dependendo do solo e do projeto."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Por que a mesma chuva pode provocar danos maiores em um bairro?",
        "options": [
          "Exposição e vulnerabilidade diferem entre os territórios.",
          "Chuva igual garante perdas idênticas.",
          "O volume de chuva determina sozinho todos os danos.",
          "A infraestrutura nunca altera consequências."
        ],
        "answer": 0,
        "explanation": "O risco depende também de localização, drenagem, condições de moradia e capacidade de resposta."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Pouca vegetação e extensas superfícies que retêm calor favorecem qual fenômeno?",
        "options": [
          "Redução obrigatória da temperatura urbana.",
          "Ilha de calor urbana.",
          "Eliminação do escoamento superficial.",
          "Formação de geleiras."
        ],
        "answer": 1,
        "explanation": "Os materiais e o menor resfriamento associado à vegetação podem elevar temperaturas locais."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma obra acelera a água a montante e agrava cheias a jusante. Qual escala faltou considerar?",
        "options": [
          "Apenas o lote onde começou a obra.",
          "Somente o horário de comércio.",
          "A integração da bacia hidrográfica.",
          "A escala molecular da chuva."
        ],
        "answer": 2,
        "explanation": "Fluxos conectam partes da bacia; uma solução local pode transferir o problema."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual política combina mobilidade e redução de desigualdade de acesso?",
        "options": [
          "Investimento exclusivo em vagas para carros em bairros ricos.",
          "Supressão de linhas periféricas sem alternativa.",
          "Aumento das distâncias entre moradia e emprego como meta.",
          "Transporte coletivo frequente ligado a áreas de emprego e serviços."
        ],
        "answer": 3,
        "explanation": "A acessibilidade depende de conectar pessoas a oportunidades com custo e tempo viáveis."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Retirar moradores de área de risco sem oferecer alternativa habitacional pode fazer o quê?",
        "options": [
          "Transferir a vulnerabilidade para outro lugar.",
          "Garantir inclusão social apenas pela remoção.",
          "Eliminar a necessidade de planejamento.",
          "Impedir definitivamente novas ocupações."
        ],
        "answer": 0,
        "explanation": "Sem moradia adequada e acesso a serviços, a exposição pode reaparecer em outro território."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma cidade impermeabiliza a cabeceira, canaliza um rio e remove famílias para uma periferia sem transporte. As enchentes diminuem no centro e aumentam a jusante. Qual avaliação é mais completa?",
        "options": [
          "A queda central prova redução de risco em toda a bacia.",
          "Houve redistribuição espacial de riscos e custos sociais; o êxito local não basta para avaliar a política.",
          "A remoção garante melhoria de acessibilidade independentemente do destino.",
          "As cheias a jusante provam que impermeabilização não influencia o escoamento."
        ],
        "answer": 1,
        "explanation": "É necessário articular fluxo hídrico, escala territorial e acesso à cidade. O resultado central não resume os efeitos ambientais e sociais do conjunto."
      }
    ]
  },
  {
    "id": "filosofia-etica",
    "area": "humanas",
    "title": "Ética, sociedade e direitos",
    "minutes": 45,
    "level": "Fundamentos",
    "summary": "Como discutir liberdade, justiça e diversidade com argumentos.",
    "objectives": [
      "Diferenciar fatos e juízos de valor",
      "Relacionar direitos e vida coletiva"
    ],
    "sections": [
      {
        "title": "Ética como reflexão",
        "paragraphs": [
          "A ética estuda criticamente os valores e critérios que orientam nossas ações. Em vez de perguntar apenas “o que fazem?”, pergunta também “o que devemos fazer e por quê?”.",
          "Questões filosóficas no ENEM costumam trazer trechos de autores ou situações para analisar conceitos como justiça, liberdade, autonomia e bem comum."
        ],
        "example": "Discutir se uma regra é justa exige examinar suas razões e consequências, e não apenas verificar se ela existe."
      },
      {
        "title": "Direitos e pluralidade",
        "paragraphs": [
          "Uma sociedade democrática reúne perspectivas diferentes. Argumentar envolve sustentar ideias com razões e ouvir objeções, sem confundir discordância com ausência de direitos."
        ],
        "bullets": [
          "Diferencie descrição de avaliação.",
          "Identifique premissas e conclusões.",
          "Considere os direitos de diferentes grupos."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Descrição informa como algo é; avaliação normativa pergunta como deveria ser. Uma regra pode ser legal e ainda ser submetida à crítica ética. Igualdade de direitos não exige ignorar diferenças relevantes: acessibilidade pode pedir apoios distintos para tornar o acesso efetivo. Um argumento deve explicitar premissas e responder às objeções pertinentes."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “todos recebem a mesma escada” expressa tratamento idêntico, mas não assegura acesso a quem usa cadeira de rodas. Uma rampa é um meio de efetivar acesso, não prova de privilégio arbitrário. A análise ética precisa conectar o critério adotado aos efeitos sobre os direitos."
      }
    ],
    "questions": [
      {
        "prompt": "A reflexão ética busca principalmente:",
        "options": [
          "Memorizar normas sem questionamento.",
          "Investigar critérios e fundamentos das ações humanas.",
          "Substituir todas as leis por opiniões individuais.",
          "Negar que existam dilemas sociais."
        ],
        "answer": 1,
        "explanation": "A ética investiga razões e valores implicados em decisões e condutas."
      },
      {
        "prompt": "Uma argumentação racional se fortalece quando:",
        "options": [
          "Ignora qualquer objeção.",
          "Apresenta apenas ataques pessoais.",
          "Oferece justificativas e considera contrapontos.",
          "Trata preferências como provas."
        ],
        "answer": 2,
        "explanation": "Argumentar exige fundamentos e abertura ao exame crítico."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual enunciado é normativo?",
        "options": [
          "A reunião durou duas horas.",
          "O conselho tem doze membros.",
          "A proposta recebeu sete votos.",
          "A distribuição deveria priorizar quem enfrenta maior necessidade."
        ],
        "answer": 3,
        "explanation": "“Deveria” avalia um critério de ação; os outros enunciados descrevem fatos."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma regra é legal. Isso encerra sua avaliação ética?",
        "options": [
          "Não; sua justiça ainda pode ser examinada.",
          "Sim; legalidade e justiça são sempre equivalentes.",
          "Sim; qualquer lei elimina conflitos de valores.",
          "Não; regras legais nunca têm relevância moral."
        ],
        "answer": 0,
        "explanation": "Legalidade identifica conformidade institucional; ética pode examinar fundamentos e consequências da norma."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma escola instala rampa para garantir acesso. Qual justificativa é mais consistente?",
        "options": [
          "Igualdade exige necessariamente obstáculos idênticos.",
          "Recursos diferentes podem realizar igualdade efetiva de acesso.",
          "Acesso é apenas uma preferência privada.",
          "Direitos desaparecem quando há custos."
        ],
        "answer": 1,
        "explanation": "A adequação considera barreiras relevantes para permitir exercício de um direito comum."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “É justo porque sempre foi assim.” Qual fragilidade exige exame?",
        "options": [
          "Toda prática antiga é necessariamente injusta.",
          "A frase apresenta pesquisa experimental completa.",
          "A tradição, sozinha, não demonstra justiça.",
          "Qualquer costume elimina divergência."
        ],
        "answer": 2,
        "explanation": "É preciso justificar por que a permanência histórica seria um critério suficiente, sem condenar automaticamente tudo que é antigo."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual conduta fortalece uma discussão pública?",
        "options": [
          "Desqualificar o interlocutor por sua origem.",
          "Repetir a conclusão sem razões.",
          "Impedir acesso a evidências contrárias.",
          "Explicitar critérios e responder a objeções pertinentes."
        ],
        "answer": 3,
        "explanation": "A troca racional depende de razões que possam ser examinadas por outras pessoas."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma decisão beneficia a maioria e viola um direito de uma minoria. Qual pergunta amplia a avaliação?",
        "options": [
          "Quais limites de direitos precisam ser respeitados na busca do benefício coletivo?",
          "Como impedir que a minoria seja ouvida?",
          "Por que a maioria torna qualquer meio justo?",
          "Como substituir evidências por popularidade?"
        ],
        "answer": 0,
        "explanation": "Benefícios agregados não dispensam a discussão dos direitos envolvidos e dos limites do meio escolhido."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “Se a regra é justa, protege direitos; a regra protege direitos; logo é justa.” Por que a conclusão não é garantida?",
        "options": [
          "Toda regra que protege direitos é injusta.",
          "Proteger direitos pode ser necessário sem ser suficiente para a justiça da regra.",
          "A primeira premissa afirma equivalência completa.",
          "Uma conclusão ética nunca pode usar premissas."
        ],
        "answer": 1,
        "explanation": "A estrutura afirma o consequente: de J implica P e P não se deduz J, pois outros critérios podem ser relevantes."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um conselho defende igualdade, mas destina recursos idênticos a escolas com barreiras muito diferentes. Uma proposta alternativa usa critérios públicos de necessidade e mantém fiscalização. Qual argumento a sustenta sem abandonar igualdade?",
        "options": [
          "Qualquer diferença de recursos viola necessariamente igualdade.",
          "Necessidade dispensa justificativa e fiscalização.",
          "Diferenciar meios por barreiras relevantes pode tornar efetivo um direito igual, com critérios justificáveis e controle público.",
          "A proposta só é justa se reproduzir todos os costumes anteriores."
        ],
        "answer": 2,
        "explanation": "A solução liga direito comum, condições distintas e prestação de contas. Não basta favorecer arbitrariamente um grupo: a diferença precisa responder à barreira e ser publicamente justificável."
      }
    ]
  },
  {
    "id": "ecologia",
    "area": "natureza",
    "title": "Ecologia e cadeias alimentares",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Energia, relações ecológicas e equilíbrio dos ecossistemas.",
    "objectives": [
      "Diferenciar níveis tróficos",
      "Entender fluxo de energia e ciclagem da matéria"
    ],
    "sections": [
      {
        "title": "Quem se alimenta de quem?",
        "paragraphs": [
          "Produtores, como plantas e certas algas, capturam energia e sintetizam matéria orgânica. Consumidores obtêm energia alimentando-se de outros seres. Decompositores atuam na transformação da matéria orgânica.",
          "A energia flui pelas cadeias alimentares, com perdas em cada transferência. Já a matéria participa de ciclos biogeoquímicos."
        ],
        "example": "Capim → gafanhoto → sapo → serpente: o capim é produtor; o gafanhoto é consumidor primário."
      },
      {
        "title": "Ecossistemas são redes",
        "paragraphs": [
          "Em ambientes reais, espécies costumam participar de várias cadeias, formando teias alimentares. A retirada de uma população pode ter consequências para outras."
        ],
        "bullets": [
          "Setas representam transferência de matéria e energia.",
          "A energia disponível tende a diminuir entre níveis tróficos.",
          "A biodiversidade contribui para o funcionamento dos ecossistemas."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Nível trófico depende do alimento consumido: um onívoro pode ocupar mais de um nível em cadeias diferentes. Decompositores transformam matéria orgânica de vários níveis e devolvem nutrientes ao ambiente; não devolvem ao produtor toda a energia dissipada. A eficiência de transferência varia; use 10% apenas quando o exercício a estipular. Substâncias persistentes podem apresentar magnificação trófica, dependendo de suas propriedades."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: produtores incorporam 20.000 kJ e cada transferência tem eficiência de 10%. Consumidores primários recebem 2.000 kJ; secundários, 200 kJ. São duas multiplicações por 0,10; a energia não incorporada ao nível seguinte não se transforma toda em biomassa disponível."
      }
    ],
    "questions": [
      {
        "prompt": "Na cadeia “capim → coelho → raposa”, o coelho é:",
        "options": [
          "Produtor.",
          "Consumidor primário.",
          "Decompositor.",
          "Consumidor terciário."
        ],
        "answer": 1,
        "explanation": "O coelho se alimenta diretamente do produtor, portanto é consumidor primário."
      },
      {
        "prompt": "Nas cadeias alimentares, a energia:",
        "options": [
          "É totalmente reciclada.",
          "Aumenta sempre em cada nível trófico.",
          "Flui e parte é dissipada em cada transferência.",
          "Não depende dos produtores."
        ],
        "answer": 2,
        "explanation": "Parte da energia é utilizada nos processos metabólicos e dissipada como calor."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Fungos transformam restos de plantas e animais. Qual função se destaca?",
        "options": [
          "Decomposição e participação na ciclagem de nutrientes.",
          "Produção obrigatória de energia solar.",
          "Reciclagem integral da energia dissipada.",
          "Consumo exclusivo de seres vivos de um nível."
        ],
        "answer": 0,
        "explanation": "Decompositores atuam na matéria orgânica e permitem retorno de nutrientes, enquanto a energia segue fluxo com dissipação."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma ave come sementes e também insetos herbívoros. Na teia, ela pode ser quê?",
        "options": [
          "Produtora por comer sementes.",
          "Consumidora primária e secundária em cadeias distintas.",
          "Sempre consumidora terciária.",
          "Decompositora obrigatória."
        ],
        "answer": 1,
        "explanation": "Ao comer produtores, ocupa o segundo nível; ao comer herbívoros, o terceiro."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Produtores incorporam 8.000 kJ. Com transferência de 10% por etapa, quanto chega aos consumidores secundários?",
        "options": [
          "800 kJ.",
          "8 kJ.",
          "80 kJ.",
          "7.200 kJ."
        ],
        "answer": 2,
        "explanation": "São duas transferências: 8.000 × 0,1 × 0,1 = 80 kJ."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Se predadores de herbívoros diminuem e não há compensações na rede, qual efeito inicial é plausível?",
        "options": [
          "Aumento necessário de todas as plantas.",
          "Fim imediato da decomposição.",
          "Transformação de herbívoros em produtores.",
          "Aumento de herbívoros e maior pressão sobre plantas."
        ],
        "answer": 3,
        "explanation": "Menor predação pode elevar herbívoros, intensificando consumo de vegetação; é uma previsão condicionada."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Por que a matéria é tratada de modo diferente da energia em um ecossistema?",
        "options": [
          "Elementos podem ser reutilizados em ciclos; a energia útil se dissipa ao longo do fluxo.",
          "Ambas são recicladas integralmente como energia útil.",
          "A matéria desaparece após a alimentação.",
          "Só consumidores contêm elementos químicos."
        ],
        "answer": 0,
        "explanation": "A matéria muda de forma e pode retornar aos produtores, mas a energia dissipada não é integralmente recuperada pela cadeia."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um poluente persistente pouco eliminado concentra-se nos predadores superiores. Qual processo é descrito?",
        "options": [
          "Fixação de carbono.",
          "Magnificação trófica.",
          "Fotossíntese.",
          "Evapotranspiração."
        ],
        "answer": 1,
        "explanation": "O acúmulo ao longo das transferências alimentares pode elevar a concentração nos níveis superiores."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Em uma cadeia, a seta de uma planta para um inseto significa quê?",
        "options": [
          "Movimento obrigatório do inseto até a raiz.",
          "Produção de planta pelo inseto.",
          "Transferência de matéria e energia da planta para quem a consome.",
          "Devolução integral de calor à planta."
        ],
        "answer": 2,
        "explanation": "As setas representam o sentido da transferência alimentar, não apenas localização ou deslocamento."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma ave obtém 60 kJ comendo frutos e 40 kJ comendo insetos herbívoros. Suponha eficiência de 10% em cada transferência e rotas independentes. Quanta energia dos produtores foi necessária para essas parcelas?",
        "options": [
          "1.000 kJ.",
          "10.000 kJ.",
          "460 kJ.",
          "4.600 kJ."
        ],
        "answer": 3,
        "explanation": "A rota dos frutos tem uma transferência: 60/0,1 = 600 kJ. A dos insetos tem duas: 40/0,1² = 4.000 kJ. Soma = 4.600 kJ. A ave ocupa níveis diferentes em cada rota."
      }
    ]
  },
  {
    "id": "citologia",
    "area": "natureza",
    "title": "Células e organelas",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Membrana, núcleo e as principais funções celulares.",
    "objectives": [
      "Diferenciar procariontes e eucariontes",
      "Relacionar organelas e funções"
    ],
    "sections": [
      {
        "title": "Unidades básicas da vida",
        "paragraphs": [
          "A célula é a unidade estrutural e funcional dos seres vivos. Células procarióticas não apresentam núcleo delimitado por membrana; células eucarióticas apresentam núcleo organizado e organelas membranosas.",
          "A membrana plasmática controla a interação entre o interior celular e o meio. O citoplasma abriga estruturas onde ocorrem diversas reações."
        ],
        "example": "Mitocôndrias participam da respiração celular aeróbia e da produção de ATP; ribossomos atuam na síntese de proteínas."
      },
      {
        "title": "Estruturas importantes",
        "paragraphs": [
          "Em células vegetais, cloroplastos realizam fotossíntese; a parede celular de celulose confere sustentação. Nem todas as células possuem todas as organelas."
        ],
        "bullets": [
          "Núcleo: abriga a maior parte do DNA eucariótico.",
          "Ribossomos: síntese de proteínas.",
          "Mitocôndrias: etapas da respiração celular.",
          "Cloroplastos: fotossíntese em plantas e algas."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Membranas têm permeabilidade seletiva. Na osmose, água atravessa membrana em resposta a diferenças de concentração efetiva de solutos; transporte ativo usa energia para manter gradientes. Proteínas destinadas à secreção passam, em geral, por ribossomos associados ao retículo endoplasmático rugoso, processamento no Golgi e vesículas. A sequência funcional ajuda a localizar onde um bloqueio atua."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: se a síntese de uma proteína ocorre, mas ela não é enviada ao exterior, não se deve concluir que faltam ribossomos. Compare etapas: síntese, processamento, transporte e fusão das vesículas. Um bloqueio no Golgi pode afetar processamento e encaminhamento sem impedir toda síntese proteica."
      }
    ],
    "questions": [
      {
        "prompt": "A principal função dos ribossomos é:",
        "options": [
          "Armazenar água em grande compartimento central.",
          "Realizar a síntese de proteínas.",
          "Modificar e encaminhar proteínas em vesículas.",
          "Realizar etapas da respiração celular aeróbia."
        ],
        "answer": 1,
        "explanation": "Ribossomos participam da tradução do RNA mensageiro e formação de proteínas."
      },
      {
        "prompt": "Uma característica típica de células procarióticas é:",
        "options": [
          "Núcleo delimitado por carioteca.",
          "Organelas membranosas organizadas como nas células animais.",
          "Ausência de núcleo envolto por membrana.",
          "DNA localizado exclusivamente no interior de mitocôndrias."
        ],
        "answer": 2,
        "explanation": "O DNA de procariontes não fica isolado por um envoltório nuclear."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual estrutura realiza fotossíntese em células vegetais fotossintetizantes?",
        "options": [
          "Lisossomo.",
          "Cloroplasto.",
          "Complexo de Golgi.",
          "Núcleo."
        ],
        "answer": 1,
        "explanation": "Cloroplastos contêm estruturas e pigmentos ligados à conversão de energia luminosa em energia química."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma célula perde água por osmose para o meio externo. O que isso indica no modelo de solutos não permeantes?",
        "options": [
          "O meio externo não contém solutos.",
          "A água foi convertida em proteína.",
          "O meio externo é mais concentrado em solutos efetivos.",
          "A membrana deixou necessariamente de existir."
        ],
        "answer": 2,
        "explanation": "A água tende a se deslocar para o compartimento mais concentrado em solutos que não atravessam a membrana."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma bomba mantém íons contra seu gradiente, consumindo ATP. Trata-se de quê?",
        "options": [
          "Difusão simples.",
          "Osmose de proteínas.",
          "Passagem sem gasto energético obrigatório.",
          "Transporte ativo."
        ],
        "answer": 3,
        "explanation": "O transporte contra o gradiente requer acoplamento a uma fonte de energia, aqui ATP."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual associação estrutura-função está correta?",
        "options": [
          "Complexo de Golgi: processamento e encaminhamento de moléculas.",
          "Ribossomo: armazenamento de todo o DNA nuclear.",
          "Mitocôndria: fotossíntese obrigatória.",
          "Parede celular: produção de todos os lipídios."
        ],
        "answer": 0,
        "explanation": "O Golgi modifica e direciona produtos celulares; as demais associações trocam funções."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma célula vegetal mantém sustentação externa à membrana principalmente por quê?",
        "options": [
          "Carioteca de queratina.",
          "Parede celular de celulose.",
          "Ribossomos de amido.",
          "Parede de glicogênio."
        ],
        "answer": 1,
        "explanation": "A parede celulósica é uma estrutura característica das células vegetais e fornece suporte."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Por que células vegetais também possuem mitocôndrias?",
        "options": [
          "Fotossíntese elimina toda demanda energética.",
          "Mitocôndrias só armazenam clorofila.",
          "Também realizam etapas da respiração celular para obtenção de ATP.",
          "Respiração acontece apenas em animais."
        ],
        "answer": 2,
        "explanation": "Plantas usam respiração celular, inclusive para aproveitar moléculas orgânicas produzidas ou armazenadas."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual trajetória é típica de uma proteína secretada por uma célula eucariótica?",
        "options": [
          "Cloroplasto → parede → núcleo → exterior.",
          "Golgi → DNA → ribossomo → cromossomo.",
          "Lisossomo → carioteca → parede de celulose.",
          "Ribossomo no retículo rugoso → Golgi → vesículas → exterior."
        ],
        "answer": 3,
        "explanation": "A síntese no retículo é seguida de processamento e tráfego vesicular, até a exocitose."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma célula mantém ATP e síntese de proteínas normais, mas acumula proteínas no retículo rugoso e reduz sua chegada ao Golgi e ao exterior. Qual etapa está mais diretamente comprometida?",
        "options": [
          "Transporte do retículo para o Golgi.",
          "Tradução em todos os ribossomos.",
          "Duplicação de todo o DNA.",
          "Produção primária de ATP mitocondrial."
        ],
        "answer": 0,
        "explanation": "A proteína já foi sintetizada e há ATP; o acúmulo antes do Golgi localiza o gargalo no encaminhamento entre compartimentos, sem exigir falha de tradução ou de energia."
      }
    ]
  },
  {
    "id": "quimica-misturas",
    "area": "natureza",
    "title": "Misturas e separação",
    "minutes": 45,
    "level": "Fundamentos",
    "summary": "Substâncias, fases e processos de separação do cotidiano.",
    "objectives": [
      "Identificar misturas homogêneas e heterogêneas",
      "Selecionar métodos de separação"
    ],
    "sections": [
      {
        "title": "Componentes e fases",
        "paragraphs": [
          "Uma mistura contém duas ou mais substâncias. Ela é homogênea quando apresenta uma única fase observável e heterogênea quando apresenta duas ou mais fases.",
          "A classificação depende das condições e da escala observada: água e óleo geralmente formam duas fases, ao passo que sal totalmente dissolvido em água constitui uma fase."
        ],
        "example": "Água e areia podem ser separadas por filtração. Água e óleo podem ser separados por decantação, devido à diferença de densidade."
      },
      {
        "title": "Escolher o processo adequado",
        "paragraphs": [
          "Filtração, decantação, destilação e evaporação exploram propriedades físicas diferentes. Observe se há sólidos em suspensão, líquidos imiscíveis ou componentes com pontos de ebulição distintos."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Componente é uma substância da mistura; fase é uma região fisicamente homogênea. Dois componentes podem formar uma fase; uma mesma substância pode formar duas fases, como gelo e água líquida. Filtração não retém sal dissolvido. Destilação vaporiza e condensa, permitindo recuperar solvente; evaporação simples prioriza recuperar o soluto não volátil. Na sequência de métodos, preserve os componentes que o problema pede recuperar."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: para recuperar areia, sal e água de uma mistura, filtre primeiro: a areia fica retida. Destile o filtrado: a água vaporiza e é condensada, e o sal não volátil permanece. Evaporar em recipiente aberto recuperaria sal, mas perderia a coleta da água."
      }
    ],
    "questions": [
      {
        "prompt": "Uma mistura de água e óleo, em condições usuais, é:",
        "options": [
          "Homogênea, com uma fase.",
          "Heterogênea, com duas fases.",
          "Uma substância pura.",
          "Um elemento químico."
        ],
        "answer": 1,
        "explanation": "Óleo e água normalmente não são miscíveis, formando duas fases."
      },
      {
        "prompt": "Para separar areia insolúvel misturada em água, pode-se utilizar:",
        "options": [
          "Filtração.",
          "Dissolução completa da areia insolúvel na própria água.",
          "Decantação em funil próprio para dois líquidos imiscíveis.",
          "Peneiração que retenha a água e deixe passar todos os grãos de areia."
        ],
        "answer": 0,
        "explanation": "A filtração retém o sólido insolúvel, permitindo a passagem do líquido."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Sal totalmente dissolvido em água, sem sólido no fundo, apresenta quantos componentes e fases?",
        "options": [
          "Um componente e duas fases.",
          "Dois componentes e duas fases.",
          "Dois componentes e uma fase.",
          "Três componentes e uma fase."
        ],
        "answer": 2,
        "explanation": "Sal e água são componentes distintos; a solução constitui uma única fase."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Água líquida e gelo feitos apenas de H₂O constituem quê?",
        "options": [
          "Duas substâncias em uma fase.",
          "Dois elementos em três fases.",
          "Uma mistura de dois componentes obrigatórios.",
          "Uma substância em duas fases."
        ],
        "answer": 3,
        "explanation": "As duas fases correspondem a estados físicos diferentes da mesma substância."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um filtro comum separa sal dissolvido da água?",
        "options": [
          "Não; o sal dissolvido atravessa com a solução.",
          "Sim; toda substância sólida fica retida mesmo dissolvida.",
          "Sim; o filtro transforma sal em areia.",
          "Não; porque água e sal são o mesmo componente."
        ],
        "answer": 0,
        "explanation": "Filtração comum separa partículas em suspensão, não íons ou moléculas dissolvidos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Para recuperar água de uma solução de sal não volátil, qual método é mais adequado?",
        "options": [
          "Filtração em papel apenas.",
          "Destilação simples com condensação.",
          "Peneiração.",
          "Separação magnética."
        ],
        "answer": 1,
        "explanation": "A água é vaporizada e condensada; o sal permanece no recipiente de aquecimento."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma mistura de limalha de ferro e areia seca pode ser separada com quê?",
        "options": [
          "Um filtro de líquidos, sem adicionar líquido.",
          "Decantação de dois líquidos.",
          "Um ímã, explorando a atração do ferro.",
          "Destilação do ferro em temperatura ambiente."
        ],
        "answer": 2,
        "explanation": "A separação magnética explora a resposta diferente dos componentes ao campo magnético."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Água e óleo são deixados em repouso em funil de separação. Qual propriedade permite drenar uma fase por vez?",
        "options": [
          "Igualdade de pontos de ebulição.",
          "Conversão de óleo em água.",
          "Atração magnética de ambos.",
          "Imiscibilidade e diferença de densidade."
        ],
        "answer": 3,
        "explanation": "As fases se separam por não se misturarem e ficam dispostas conforme suas densidades."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Para recuperar apenas sal de uma solução aquosa, sem interesse em coletar água, pode-se usar quê?",
        "options": [
          "Evaporação do solvente.",
          "Filtração simples da solução límpida.",
          "Peneiração dos íons.",
          "Imantação do sal dissolvido."
        ],
        "answer": 0,
        "explanation": "Remover água por evaporação deixa o soluto não volátil; sem condensação, a água não é coletada."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma mistura contém areia insolúvel, sal dissolvido, água e óleo imiscível. Deseja-se recuperar os quatro separadamente, sem reagir componentes. Qual sequência é adequada no modelo idealizado?",
        "options": [
          "Filtrar e concluir que o papel reteve areia e todo o sal.",
          "Filtrar a areia, separar óleo por decantação e destilar a solução salina.",
          "Evaporar tudo em aberto e coletar a água no fundo.",
          "Usar um ímã e depois peneirar a água."
        ],
        "answer": 1,
        "explanation": "A filtração retém areia; decantação separa as fases óleo e solução; destilação recupera água por condensação e deixa sal. Cada operação explora uma propriedade distinta e preserva o que deve ser coletado."
      }
    ]
  },
  {
    "id": "porcentagem",
    "area": "matematica",
    "title": "Porcentagem sem mistério",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Descontos, aumentos, razões percentuais e aplicações.",
    "objectives": [
      "Converter porcentagens em frações e decimais",
      "Resolver problemas de aumentos e descontos"
    ],
    "sections": [
      {
        "title": "O que é porcentagem?",
        "paragraphs": [
          "Porcentagem significa “a cada cem”. Assim, 25% = 25/100 = 0,25. Para encontrar 25% de 200, multiplicamos 200 por 0,25, obtendo 50.",
          "Em questões, identifique a base percentual: um aumento de 20% sobre R$ 100 resulta em R$ 120, porque o acréscimo é calculado a partir do valor inicial."
        ],
        "example": "Desconto de 15% em R$ 80: 80 × 0,15 = 12. Valor final = 80 − 12 = R$ 68."
      },
      {
        "title": "Aumentos sucessivos",
        "paragraphs": [
          "Um aumento de 10% seguido por uma redução de 10% não devolve ao valor inicial. Se R$ 100 aumenta para R$ 110 e depois cai 10%, termina em R$ 99.",
          "Para aumentos, multiplique por (1 + taxa decimal). Para descontos, multiplique por (1 − taxa decimal)."
        ],
        "bullets": [
          "10% = 0,10.",
          "Aumento de 8%: multiplicar por 1,08.",
          "Desconto de 8%: multiplicar por 0,92."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Para recuperar uma base desconhecida, divida o valor final pelo fator, em vez de aplicar a taxa ao contrário. Taxas sucessivas multiplicam fatores. Uma mudança de 20% para 30% equivale a 10 pontos percentuais ou aumento relativo de 50%. Em problemas com grupos, recupere quantidades antes de combinar percentuais."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: após desconto de 20%, um produto custa R$ 144. Se P é o preço original, 0,80P = 144; logo P = 180. Acrescentar 20% a 144 daria 172,80, porque usaria outra base. Para reverter o desconto, o aumento necessário é 1/0,80 − 1 = 25%."
      }
    ],
    "questions": [
      {
        "prompt": "Um livro custa R$ 120 e recebe desconto de 25%. Qual é o novo preço?",
        "options": [
          "R$ 30.",
          "R$ 90.",
          "R$ 95.",
          "R$ 100."
        ],
        "answer": 1,
        "explanation": "25% de 120 é 30. Portanto, 120 − 30 = R$ 90."
      },
      {
        "prompt": "Um produto de R$ 200 sofre aumento de 10%. Quanto passa a custar?",
        "options": [
          "R$ 210.",
          "R$ 220.",
          "R$ 230.",
          "R$ 240."
        ],
        "answer": 1,
        "explanation": "10% de 200 é 20. Novo preço: 200 + 20 = R$ 220."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Quanto é 15% de 240?",
        "options": [
          "24.",
          "30.",
          "48.",
          "36."
        ],
        "answer": 3,
        "explanation": "15/100 × 240 = 36; a base é 240."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma conta de R$ 80 recebe desconto de 12,5%. O valor final é quanto?",
        "options": [
          "R$ 70.",
          "R$ 67,50.",
          "R$ 72.",
          "R$ 10."
        ],
        "answer": 0,
        "explanation": "12,5% = 1/8; o desconto é 10 e o pagamento é 80 − 10 = 70."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Depois de desconto de 20%, o preço é R$ 160. Qual era o preço anterior?",
        "options": [
          "R$ 192.",
          "R$ 200.",
          "R$ 180.",
          "R$ 128."
        ],
        "answer": 1,
        "explanation": "0,8P = 160, então P = 200; acrescentar 20% ao final não inverte a operação."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma taxa sobe de 20% para 30%. Qual é o aumento relativo da taxa?",
        "options": [
          "10%.",
          "30%.",
          "50%.",
          "150%."
        ],
        "answer": 2,
        "explanation": "A diferença é 10 pontos percentuais; em relação aos 20 iniciais, 10/20 = 50%."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um valor aumenta 20% e depois 25%. Qual é o aumento acumulado?",
        "options": [
          "45%.",
          "5%.",
          "25%.",
          "50%."
        ],
        "answer": 3,
        "explanation": "Os fatores são 1,20 × 1,25 = 1,50, isto é, aumento de 50%."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma turma tem 40 estudantes, e 30% faltaram. Quantos compareceram?",
        "options": [
          "28.",
          "12.",
          "30.",
          "36."
        ],
        "answer": 0,
        "explanation": "Faltaram 0,30 × 40 = 12; compareceram 40 − 12 = 28."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um preço caiu 20%. Qual aumento sobre o preço reduzido devolve o original?",
        "options": [
          "20%.",
          "25%.",
          "80%.",
          "16%."
        ],
        "answer": 1,
        "explanation": "O fator inverso é 1/0,8 = 1,25; o aumento deve ser 25% sobre a nova base."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma loja aumenta um preço em 25%, dá 20% de desconto e depois cobra taxa de 8% sobre o valor descontado. A compra termina em R$ 324. Qual era o preço inicial?",
        "options": [
          "R$ 270.",
          "R$ 324.",
          "R$ 300.",
          "R$ 360."
        ],
        "answer": 2,
        "explanation": "O fator acumulado é 1,25 × 0,80 × 1,08 = 1,08. Assim, P = 324/1,08 = 300. Os dois primeiros fatores se anulam, mas a taxa final permanece."
      }
    ]
  },
  {
    "id": "proporcionalidade",
    "area": "matematica",
    "title": "Razões e proporcionalidade",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Regra de três, escalas e relações diretas e inversas.",
    "objectives": [
      "Identificar grandezas proporcionais",
      "Montar proporções corretamente"
    ],
    "sections": [
      {
        "title": "Relações entre grandezas",
        "paragraphs": [
          "Duas grandezas são diretamente proporcionais quando variam na mesma razão: se o preço por unidade é fixo, dobrar a quantidade dobra o preço. Em uma relação inversamente proporcional, multiplicar uma grandeza por certo fator divide a outra pelo mesmo fator.",
          "Antes de aplicar regra de três, pergunte se as grandezas são realmente proporcionais: nem toda relação do mundo real é linear."
        ],
        "example": "Se 3 cadernos custam R$ 24, 5 custam (24/3) × 5 = R$ 40, mantido o mesmo preço unitário."
      },
      {
        "title": "Aplicações",
        "paragraphs": [
          "Escalas cartográficas representam distâncias reais por proporções. Uma escala de 1:100.000 significa que 1 cm no mapa equivale a 100.000 cm, ou 1 km, no terreno."
        ],
        "bullets": [
          "Converta unidades antes de calcular.",
          "Identifique grandezas diretas ou inversas.",
          "Confira se o resultado faz sentido."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Em proporcionalidade direta, y/x é constante; na inversa, xy é constante. Relações com parcela fixa, como tarifa inicial mais valor por quilômetro, não são diretamente proporcionais. Em trabalho composto, supondo produtividade constante, a produção é proporcional a trabalhadores × horas × dias. Mantenha explícitas as hipóteses de equipe, ritmo e condições iguais."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: quatro máquinas fazem 600 peças em cinco horas. Cada máquina produz 600/(4 × 5) = 30 peças/h. Seis máquinas iguais em três horas produzem 6 × 3 × 30 = 540 peças. A taxa unitária evita inverter fatores sem justificar."
      }
    ],
    "questions": [
      {
        "prompt": "Quatro ingressos iguais custam R$ 80. Se o preço unitário não mudar, seis custam:",
        "options": [
          "R$ 100.",
          "R$ 110.",
          "R$ 120.",
          "R$ 160."
        ],
        "answer": 2,
        "explanation": "Cada ingresso custa R$ 20; seis ingressos custam R$ 120."
      },
      {
        "prompt": "Em um mapa de escala 1:100.000, 2 cm correspondem a:",
        "options": [
          "20 m.",
          "200 m.",
          "2 km.",
          "20 km."
        ],
        "answer": 2,
        "explanation": "2 × 100.000 cm = 200.000 cm = 2 km."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Se 5 kg custam R$ 35 a preço unitário constante, quanto custam 8 kg?",
        "options": [
          "R$ 56.",
          "R$ 43.",
          "R$ 49.",
          "R$ 64."
        ],
        "answer": 0,
        "explanation": "O preço é 35/5 = 7 reais por kg; 8 × 7 = 56."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Seis trabalhadores iguais concluem uma tarefa em 10 dias. Três, no mesmo ritmo, levam quanto tempo?",
        "options": [
          "5 dias.",
          "20 dias.",
          "13 dias.",
          "30 dias."
        ],
        "answer": 1,
        "explanation": "O trabalho é 60 trabalhador-dias; 60/3 = 20 dias, sob produtividade constante."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual relação não é de proporcionalidade direta?",
        "options": [
          "Custo C = 3x.",
          "Massa m = 2V, com densidade fixa.",
          "Custo C = 10 + 3x.",
          "Distância d = 5t, com velocidade fixa."
        ],
        "answer": 2,
        "explanation": "A parcela fixa 10 impede que dobrar x necessariamente dobre o custo."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um carro faz um trajeto a 60 km/h em 3 h. A 90 km/h constantes, levaria quanto?",
        "options": [
          "4,5 h.",
          "1 h.",
          "2,5 h.",
          "2 h."
        ],
        "answer": 3,
        "explanation": "O trajeto mede 180 km; 180/90 = 2 h. Distância fixa dá tempo inversamente proporcional à velocidade."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma receita para 4 pessoas usa 300 g de arroz. Para 10 porções iguais, usa quanto?",
        "options": [
          "750 g.",
          "600 g.",
          "1.200 g.",
          "450 g."
        ],
        "answer": 0,
        "explanation": "Cada porção usa 75 g; 10 × 75 = 750 g."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Num mapa 1:25.000, um segmento mede 8 cm. Qual distância real ele representa?",
        "options": [
          "20 km.",
          "2 km.",
          "200 km.",
          "0,2 km."
        ],
        "answer": 1,
        "explanation": "8 × 25.000 = 200.000 cm = 2 km."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Em uma relação inversa, x passa de 3 para 12. O que acontece com y?",
        "options": [
          "É multiplicado por 4.",
          "Aumenta 9 unidades necessariamente.",
          "É dividido por 4.",
          "Permanece igual."
        ],
        "answer": 2,
        "explanation": "Para manter xy constante, multiplicar x por 4 exige dividir y por 4."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Oito trabalhadores, 6 h/dia por 5 dias, produzem 1.200 peças. Mantendo produtividade individual, quantos dias inteiros de 5 h são necessários para dez trabalhadores produzirem pelo menos 1.750 peças?",
        "options": [
          "5 dias.",
          "6 dias.",
          "8 dias.",
          "7 dias."
        ],
        "answer": 3,
        "explanation": "A taxa é 1.200/(8 × 6 × 5) = 5 peças por trabalhador-hora. A nova produção diária é 10 × 5 × 5 = 250; 1.750/250 = 7 dias."
      }
    ]
  },
  {
    "id": "estatistica",
    "area": "matematica",
    "title": "Gráficos, média e mediana",
    "minutes": 45,
    "level": "Essencial",
    "summary": "Interprete tabelas e gráficos e calcule medidas de tendência central.",
    "objectives": [
      "Calcular média aritmética",
      "Encontrar mediana e ler gráficos com cuidado"
    ],
    "sections": [
      {
        "title": "Como resumir dados",
        "paragraphs": [
          "A média aritmética simples é a soma dos valores dividida pela quantidade. A mediana é o valor central após ordenar os dados; para um conjunto com quantidade par, ela é a média dos dois valores centrais.",
          "A moda é o valor que aparece com maior frequência. Dados muito discrepantes podem afetar mais a média do que a mediana."
        ],
        "example": "Nas notas 4, 6, 6, 8 e 16: média = 40/5 = 8; mediana = 6; moda = 6."
      },
      {
        "title": "Leia as escalas",
        "paragraphs": [
          "Antes de tirar conclusões de um gráfico, observe título, legenda, origem e unidades dos eixos. Gráficos com eixo truncado podem exagerar visualmente pequenas diferenças."
        ],
        "bullets": [
          "Média: soma ÷ quantidade.",
          "Mediana: centro dos dados ordenados.",
          "Moda: valor mais frequente."
        ]
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Dados devem ser ordenados antes de localizar a mediana. A soma pode ser recuperada multiplicando média por quantidade. Ao juntar grupos de tamanhos diferentes, use suas somas, não a média simples das médias. Moda pode não ser única. Em gráficos, distinguir contagem de frequência percentual evita interpretar barras de grupos diferentes como se tivessem a mesma base."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma turma de 10 estudantes tem média 6 e outra de 30 tem média 8. As somas são 60 e 240. Média conjunta = 300/40 = 7,5, e não 7. O segundo grupo pesa mais porque reúne mais observações."
      }
    ],
    "questions": [
      {
        "prompt": "Qual é a média de 5, 7 e 9?",
        "options": [
          "6.",
          "7.",
          "8.",
          "9."
        ],
        "answer": 1,
        "explanation": "(5 + 7 + 9) ÷ 3 = 21 ÷ 3 = 7."
      },
      {
        "prompt": "Qual é a mediana dos números 2, 5, 9, 12?",
        "options": [
          "5.",
          "7.",
          "9.",
          "12."
        ],
        "answer": 1,
        "explanation": "Com quatro valores, a mediana é a média dos centrais: (5 + 9) ÷ 2 = 7."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual é a mediana de 9, 1, 7, 3, 5?",
        "options": [
          "7.",
          "5.",
          "3.",
          "9."
        ],
        "answer": 1,
        "explanation": "Ordenando: 1, 3, 5, 7, 9. O terceiro valor é a mediana."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual é a moda de 2, 4, 4, 5, 8?",
        "options": [
          "5.",
          "2.",
          "4.",
          "8."
        ],
        "answer": 2,
        "explanation": "O valor 4 tem a maior frequência, aparecendo duas vezes."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Quatro notas têm média 7. Qual é a soma delas?",
        "options": [
          "11.",
          "21.",
          "35.",
          "28."
        ],
        "answer": 3,
        "explanation": "Soma = quantidade × média = 4 × 7 = 28."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Três valores têm média 8. Ao acrescentar 12, qual é a nova média?",
        "options": [
          "9.",
          "10.",
          "8.",
          "12."
        ],
        "answer": 0,
        "explanation": "A soma anterior é 24; a nova soma é 36 e há quatro valores: 36/4 = 9."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Em 2, 3, 4, 5, 100, qual medida descreve melhor o centro sem ser tão afetada pelo extremo?",
        "options": [
          "Média 4.",
          "Mediana 4.",
          "Moda 100.",
          "Mediana 22,8."
        ],
        "answer": 1,
        "explanation": "A mediana é 4, enquanto a média 114/5 = 22,8 é elevada pelo 100."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma barra passa de 40 para 50 vendas. Qual crescimento percentual ocorreu?",
        "options": [
          "10%.",
          "20%.",
          "25%.",
          "50%."
        ],
        "answer": 2,
        "explanation": "O aumento é 10 sobre a base 40: 10/40 = 25%."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Dois grupos, de 10 e 30 pessoas, têm médias 6 e 8. Qual é a média conjunta?",
        "options": [
          "7.",
          "8.",
          "6,5.",
          "7,5."
        ],
        "answer": 3,
        "explanation": "As somas são 60 e 240; 300/40 = 7,5. A média precisa considerar os tamanhos."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Cinco notas inteiras de 0 a 10, ordenadas, têm mediana 7 e média 6. Os extremos são 2 e 9. Qual é o maior valor possível para a segunda nota?",
        "options": [
          "5.",
          "6.",
          "7.",
          "4."
        ],
        "answer": 0,
        "explanation": "A soma é 30. Escreva 2 + b + 7 + d + 9 = 30, logo b + d = 12. Como d ≥ 7, b ≤ 5; b = 5 e d = 7 são viáveis. Portanto o máximo é 5."
      }
    ]
  },
  {
    "id": "funcoes-modelagem",
    "area": "matematica",
    "title": "Funções e modelagem: do enunciado ao gráfico",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Reconheça variáveis, taxa de variação, domínio e limites de um modelo.",
    "objectives": [
      "Definir entrada e saída",
      "Ler função afim",
      "Verificar modelos e extrapolações"
    ],
    "sections": [
      {
        "title": "Definir entrada e saída",
        "paragraphs": [
          "Uma função associa a cada entrada do domínio uma única saída. Em um problema, declare o que cada variável representa e em qual unidade. Um preço pode depender de distância, tempo ou quantidade; descobrir essa dependência vem antes de substituir números.",
          "O domínio precisa respeitar o contexto. Uma função algébrica pode aceitar valores negativos, mas quantidade de ingressos vendidos não pode ser negativa nem fracionária. Interseções de gráficos só são soluções do problema se pertencerem ao domínio permitido."
        ],
        "example": "Se C(x) = 8 + 3x descreve custo em reais para x quilômetros, 8 é a parcela fixa e 3 é o custo por quilômetro no modelo."
      },
      {
        "title": "Ler função afim",
        "paragraphs": [
          "Na função f(x) = ax + b, a indica taxa de variação e b é o valor em x = 0. A função cresce quando a > 0 e decresce quando a < 0. Ser afim não significa ser diretamente proporcional: essa proporcionalidade exige b = 0.",
          "A raiz é o valor de x para o qual f(x) = 0. Já o ponto de interseção entre duas funções é encontrado igualando suas expressões. Não confunda o valor de x com o valor de y do ponto."
        ],
        "example": "Para C₁ = 10 + 2x e C₂ = 4 + 3x, a igualdade ocorre em 10 + 2x = 4 + 3x, logo x = 6 e C = 22."
      },
      {
        "title": "Verificar modelos e extrapolações",
        "paragraphs": [
          "Uma relação observada em alguns dados não precisa continuar válida para qualquer valor. Tarifas podem mudar por faixa e capacidades físicas têm limites. Antes de extrapolar uma reta, confira as condições declaradas.",
          "Leia eixos e unidades: uma inclinação expressa variação da saída dividida pela variação da entrada. Faça uma estimativa e teste pontos simples para conferir a expressão escolhida. Se x aumenta uma unidade, qual deve ser a mudança esperada em y?"
        ],
        "example": "Uma caixa tem capacidade de 50 L. O modelo V(t) = 5t só descreve o enchimento até t = 10 min se a vazão for constante e não houver saída."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Para construir uma reta por dois pontos, calcule a = (y₂ − y₁)/(x₂ − x₁) e depois b = y₁ − ax₁. Em tarifas por faixas, cada expressão vale apenas no intervalo declarado. Resolver uma desigualdade encontra uma região de vantagem, não apenas um ponto de empate; se a variável é inteira, teste o primeiro inteiro admissível."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: A(x) = 18 + 2x e B(x) = 6 + 5x. O empate vem de 18 + 2x = 6 + 5x, logo x = 4 e custo 26. Para x > 4, A custa menos porque seu acréscimo por unidade é menor."
      }
    ],
    "questions": [
      {
        "prompt": "Em C(x) = 12 + 4x, para x em km e C em reais, o coeficiente 4 significa:",
        "options": [
          "Custo fixo de R$ 4.",
          "Distância máxima de 4 km.",
          "Acréscimo de R$ 4 por km.",
          "Custo total sempre igual a R$ 4."
        ],
        "answer": 2,
        "explanation": "O coeficiente de x é a taxa de variação. A parcela fixa é 12 e não há limite de distância informado pela fórmula sozinha."
      },
      {
        "prompt": "Em que x as funções 8 + 2x e 2 + 3x têm o mesmo valor?",
        "options": [
          "6.",
          "3.",
          "10.",
          "2."
        ],
        "answer": 0,
        "explanation": "Igualando: 8 + 2x = 2 + 3x, então x = 6. Ambas valem 20 nesse ponto."
      },
      {
        "prompt": "Qual função representa proporcionalidade direta?",
        "options": [
          "f(x) = 3x + 2.",
          "f(x) = 3x.",
          "f(x) = x².",
          "f(x) = 3/x."
        ],
        "answer": 1,
        "explanation": "A razão f(x)/x é constante para x não nulo em f(x) = 3x. O termo fixo rompe essa proporcionalidade."
      },
      {
        "prompt": "Um reservatório recebe 8 L/min e começa com 20 L. Sem saídas, qual expressão dá o volume após t minutos, antes de encher?",
        "options": [
          "V = 20 + 8t.",
          "V = 8 + 20t.",
          "V = 28t.",
          "V = 20 − 8t."
        ],
        "answer": 0,
        "explanation": "O volume inicial é o termo constante 20; a taxa de entrada 8 multiplica o tempo. O domínio termina quando a capacidade é atingida."
      },
      {
        "prompt": "Uma reta passa por (0, 5) e (3, 11). Sua taxa de variação é:",
        "options": [
          "5.",
          "6.",
          "2.",
          "3."
        ],
        "answer": 2,
        "explanation": "A taxa é Δy/Δx = (11 − 5)/(3 − 0) = 6/3 = 2. O valor 5 é o intercepto."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma reta passa por (2, 9) e (5, 18). Qual expressão a representa?",
        "options": [
          "f(x) = 9x + 2.",
          "f(x) = 3x + 3.",
          "f(x) = 3x + 9.",
          "f(x) = 2x + 5."
        ],
        "answer": 1,
        "explanation": "A taxa é (18 − 9)/(5 − 2) = 3. Como 9 = 3 × 2 + b, b = 3."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um tanque tem 90 L e perde 6 L/min sem reposição. Em quanto tempo esvazia no modelo?",
        "options": [
          "96 min.",
          "540 min.",
          "15 min.",
          "6 min."
        ],
        "answer": 2,
        "explanation": "V(t) = 90 − 6t. Fazendo V = 0, t = 90/6 = 15; o modelo físico termina aí."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma fábrica tem custo C(n) = 400 + 12n e receita R(n) = 20n. Qual quantidade inteira mínima gera lucro positivo?",
        "options": [
          "50 unidades.",
          "49 unidades.",
          "34 unidades.",
          "51 unidades."
        ],
        "answer": 3,
        "explanation": "Lucro = 8n − 400. Para ser positivo, n > 50; a primeira quantidade inteira é 51."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma função afim tem f(1) = 7 e f(4) = 1. Qual é sua raiz?",
        "options": [
          "4,5.",
          "−4,5.",
          "3.",
          "9."
        ],
        "answer": 0,
        "explanation": "a = (1 − 7)/3 = −2; b = 9. A raiz resolve −2x + 9 = 0, dando x = 4,5."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma entrega custa A(n) = 60 + 4n. Outra custa B(n) = 8n até 20 itens e B(n) = 160 + 2(n − 20) acima disso. Para quantidades inteiras positivas, quando A é estritamente mais barata?",
        "options": [
          "De 15 a 30 itens.",
          "De 16 a 29 itens.",
          "A partir de 16 itens sem limite.",
          "De 1 a 15 itens."
        ],
        "answer": 1,
        "explanation": "Até 20: 60 + 4n < 8n implica n > 15. Acima de 20: B = 120 + 2n; A < B implica n < 30. Unindo os intervalos, 16 ≤ n ≤ 29. Em 15 e 30 há empate."
      }
    ]
  },
  {
    "id": "quadratica-otimizacao",
    "area": "matematica",
    "title": "Função quadrática e otimização",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Use raízes, concavidade e vértice para interpretar áreas e máximos.",
    "objectives": [
      "Reconhecer a parábola",
      "Calcular e interpretar o vértice",
      "Modelar áreas e sinais"
    ],
    "sections": [
      {
        "title": "Reconhecer a parábola",
        "paragraphs": [
          "Uma função quadrática tem forma f(x) = ax² + bx + c com a diferente de zero. A concavidade fica voltada para cima se a > 0 e para baixo se a < 0. O sinal de a informa se o vértice é mínimo ou máximo, mas não informa sozinho se todos os valores são positivos.",
          "As raízes reais são interseções com o eixo x. O discriminante Δ = b² − 4ac indica duas raízes reais distintas quando positivo, uma raiz dupla quando zero e ausência de raízes reais quando negativo."
        ],
        "example": "Em f(x) = x² − 5x + 6 = (x − 2)(x − 3), as raízes são 2 e 3, e a função é negativa entre elas."
      },
      {
        "title": "Calcular e interpretar o vértice",
        "paragraphs": [
          "A coordenada horizontal do vértice é xv = −b/(2a). Substitua esse valor na função para encontrar yv. Não troque o valor da variável que otimiza com o valor ótimo da grandeza. O eixo de simetria passa por xv.",
          "Em problemas de área, receita ou trajetória, verifique o domínio. Um vértice fora do intervalo permitido não fornece necessariamente a solução do contexto; compare também as extremidades."
        ],
        "example": "Para A(x) = −x² + 10x, xv = 5 e A(5) = 25. Se x mede metros, a área máxima é 25 m² no domínio físico compatível."
      },
      {
        "title": "Modelar áreas e sinais",
        "paragraphs": [
          "Um retângulo com soma fixa dos dois lados adjacentes pode ter área escrita como produto x(s − x). Desenvolver o produto produz uma parábola de concavidade para baixo. As restrições de comprimento exigem 0 < x < s.",
          "Desenhe a situação e verifique unidades antes de aplicar fórmulas. A soma de comprimentos permanece em metros; o produto de dois comprimentos resulta em metros quadrados. A geometria ajuda a detectar respostas numericamente plausíveis com unidade errada."
        ],
        "example": "Com perímetro de 20 m, x + y = 10. Logo A = x(10 − x), e a área máxima ocorre no quadrado de lado 5 m."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "O máximo ou mínimo deve ser procurado no domínio permitido. Uma quantidade inteira pode exigir comparar os inteiros vizinhos ao vértice. A forma fatorada a(x − r₁)(x − r₂) permite estudar sinais; a forma de quadrado completo mostra o extremo. Em receita, preço vezes quantidade deve refletir a mesma variável e as restrições de venda."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: f(x) = −2x² + 12x + 5 = −2(x − 3)² + 23. O máximo real é 23 em x = 3. Se o domínio for 0 ≤ x ≤ 2, o vértice está fora; nessa faixa crescente, o máximo é f(2) = 21."
      }
    ],
    "questions": [
      {
        "prompt": "O máximo de f(x) = −x² + 8x ocorre em x igual a:",
        "options": [
          "8.",
          "4.",
          "16.",
          "−4."
        ],
        "answer": 1,
        "explanation": "xv = −b/(2a) = −8/(−2) = 4. O valor máximo da função é 16, que não é a coordenada x pedida."
      },
      {
        "prompt": "Um retângulo tem perímetro 24 m. Sua maior área possível é:",
        "options": [
          "24 m².",
          "72 m².",
          "36 m².",
          "144 m²."
        ],
        "answer": 2,
        "explanation": "Os lados somam 12 m. O produto é máximo com lados iguais a 6 m; a área é 6 × 6 = 36 m²."
      },
      {
        "prompt": "As raízes de x² − 7x + 12 são:",
        "options": [
          "3 e 4.",
          "2 e 6.",
          "−3 e −4.",
          "0 e 12."
        ],
        "answer": 0,
        "explanation": "A fatoração é (x − 3)(x − 4). O produto das raízes é 12 e a soma é 7, coerentes com os coeficientes."
      },
      {
        "prompt": "Para f(x) = x² − 4x + 3, o valor mínimo é:",
        "options": [
          "2.",
          "−1.",
          "1.",
          "−4."
        ],
        "answer": 1,
        "explanation": "O vértice ocorre em x = 2. Substituindo: 4 − 8 + 3 = −1. O coeficiente positivo indica mínimo."
      },
      {
        "prompt": "Uma parábola tem raízes 2 e 8. A abscissa de seu vértice é:",
        "options": [
          "10.",
          "6.",
          "4.",
          "5."
        ],
        "answer": 3,
        "explanation": "O eixo de simetria fica no ponto médio das raízes: (2 + 8)/2 = 5."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual o valor máximo de f(x) = −2x² + 12x + 5 para x real?",
        "options": [
          "3.",
          "18.",
          "23.",
          "5."
        ],
        "answer": 2,
        "explanation": "O vértice tem x = −12/(−4) = 3; f(3) = −18 + 36 + 5 = 23."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Em que intervalo x² − 6x + 8 é negativo?",
        "options": [
          "x < 2 ou x > 4.",
          "x > 4 apenas.",
          "Em todo x real.",
          "2 < x < 4."
        ],
        "answer": 3,
        "explanation": "A expressão é (x − 2)(x − 4), com concavidade para cima; fica negativa entre as raízes."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma receita é R(x) = x(40 − 2x), com 0 ≤ x ≤ 20. Qual x maximiza a receita?",
        "options": [
          "10.",
          "20.",
          "5.",
          "40."
        ],
        "answer": 0,
        "explanation": "R = −2x² + 40x; o vértice está em x = 10 e pertence ao domínio."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Para 0 ≤ x ≤ 3, qual é o máximo de f(x) = −x² + 10x?",
        "options": [
          "25.",
          "21.",
          "3.",
          "30."
        ],
        "answer": 1,
        "explanation": "O vértice x = 5 está fora do domínio. A função cresce até 3 nessa faixa; f(3) = 21."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Com 40 m de cerca, fecha-se um retângulo e uma divisória interna paralela a um dos lados. Se x é o lado repetido três vezes, quais dimensões maximizam a área?",
        "options": [
          "x = 10 m e outro lado = 5 m.",
          "x = 5 m e outro lado = 12,5 m.",
          "x = 20/3 m e outro lado = 10 m.",
          "x = 20 m e outro lado = 10 m."
        ],
        "answer": 2,
        "explanation": "A restrição é 3x + 2y = 40, logo y = 20 − 1,5x. Área A = 20x − 1,5x² tem vértice x = 20/3 e y = 10. O domínio 0 < x < 40/3 contém o vértice, que fornece 200/3 m²."
      }
    ]
  },
  {
    "id": "exponenciais-logaritmos",
    "area": "matematica",
    "title": "Exponenciais, logaritmos e escalas",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Interprete crescimento multiplicativo, decaimento e medidas logarítmicas.",
    "objectives": [
      "Diferenciar adição e multiplicação",
      "Entender logaritmo como expoente",
      "Aplicar meia-vida e escalas"
    ],
    "sections": [
      {
        "title": "Diferenciar adição e multiplicação",
        "paragraphs": [
          "Em crescimento linear, acrescenta-se a mesma quantidade por intervalo. Em crescimento exponencial, multiplica-se pelo mesmo fator. O modelo N(t) = N₀aᵗ usa a > 1 para crescimento e 0 < a < 1 para decaimento, em intervalos compatíveis com t.",
          "Uma taxa de 20% por período corresponde a fator 1,2. Uma redução de 20% corresponde a 0,8. A taxa deve ser aplicada à base atual em cada período, e não sempre à quantidade inicial, salvo se o problema declarar juros simples."
        ],
        "example": "Uma população idealizada de 100 unidades que dobra por período terá 100, 200, 400 e 800 após zero, um, dois e três períodos."
      },
      {
        "title": "Entender logaritmo como expoente",
        "paragraphs": [
          "logₐ b = x significa aˣ = b, com a > 0, a diferente de 1 e b > 0. Use potências conhecidas e estimativas antes de recorrer a procedimentos mais longos. Logaritmo não é divisão entre o número e a base.",
          "Em bases válidas, log de um produto é a soma dos logaritmos, e log de uma potência traz o expoente como fator. Não existe regra geral que transforme log(a + b) em log a + log b. Essa falsa distribuição é um erro recorrente."
        ],
        "example": "log₁₀ 1.000 = 3 porque 10³ = 1.000; log₂ 32 = 5 porque 2⁵ = 32."
      },
      {
        "title": "Aplicar meia-vida e escalas",
        "paragraphs": [
          "Após cada meia-vida, resta metade da quantidade inicial considerada naquele intervalo. Após n meias-vidas, Q = Q₀(1/2)ⁿ. A redução absoluta diminui em cada etapa, enquanto a proporção é mantida.",
          "Em escalas logarítmicas, diferenças iguais podem corresponder a razões iguais. Leia a definição dada no problema: não transfira automaticamente a relação entre grandezas diferentes. Um índice calculado com coeficiente 10 e outro com coeficiente 20 não terão a mesma conversão direta."
        ],
        "example": "De 80 g, restam 40 g após uma meia-vida, 20 g após duas e 10 g após três."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Para achar o número de períodos em uma exponencial, isole a potência e use potências conhecidas ou logaritmos. Se a pergunta pede o primeiro período inteiro que atinge um limite, verifique o inteiro obtido e seu anterior. Nas escalas, aplique exatamente o coeficiente fornecido à razão, sem confundir diferença de índices e diferença das grandezas."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: N(t) = 80 × 2ᵗ atinge 640 quando 2ᵗ = 8, isto é, t = 3. Se o limite fosse 500, não seria necessário encontrar uma igualdade inteira: em t = 2 há 320 e em t = 3 há 640, portanto 3 é o primeiro período inteiro suficiente."
      }
    ],
    "questions": [
      {
        "prompt": "Uma quantidade inicial de 50 triplica por período. Após dois períodos vale:",
        "options": [
          "150.",
          "300.",
          "450.",
          "100."
        ],
        "answer": 2,
        "explanation": "50 × 3² = 450. São duas multiplicações por três, não a soma de dois acréscimos iguais a 100."
      },
      {
        "prompt": "log₂ 64 é igual a:",
        "options": [
          "6.",
          "32.",
          "8.",
          "4."
        ],
        "answer": 0,
        "explanation": "2⁶ = 64; portanto o expoente procurado é 6."
      },
      {
        "prompt": "Uma amostra idealizada de 120 g passa por três meias-vidas. Resta:",
        "options": [
          "30 g.",
          "15 g.",
          "40 g.",
          "60 g."
        ],
        "answer": 1,
        "explanation": "120 × (1/2)³ = 120/8 = 15 g. Cada etapa reduz pela metade a quantidade então presente."
      },
      {
        "prompt": "Um valor de 200 sofre redução de 10% em dois períodos sucessivos. Termina em:",
        "options": [
          "180.",
          "160.",
          "162.",
          "198."
        ],
        "answer": 2,
        "explanation": "Aplicam-se dois fatores 0,9: 200 × 0,9² = 162. A segunda redução usa a base já reduzida."
      },
      {
        "prompt": "Para x real, a expressão log₁₀(x − 2) exige:",
        "options": [
          "x > 2.",
          "x ≥ 2.",
          "x < 2.",
          "Qualquer x."
        ],
        "answer": 0,
        "explanation": "O argumento do logaritmo precisa ser positivo: x − 2 > 0. Em x = 2, o argumento seria zero e a expressão não estaria definida."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma população idealizada N(t) = 80 × 2ᵗ atinge 640 em quantos períodos?",
        "options": [
          "8.",
          "4.",
          "2.",
          "3."
        ],
        "answer": 3,
        "explanation": "640/80 = 8 = 2³, portanto t = 3."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual é log₁₀(1.000 × 100)?",
        "options": [
          "5.",
          "6.",
          "2.",
          "100."
        ],
        "answer": 0,
        "explanation": "O produto é 100.000 = 10⁵; alternativamente, 3 + 2 = 5."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma amostra tem meia-vida de 4 h. Qual fração resta após 12 h?",
        "options": [
          "1/3.",
          "1/8.",
          "1/4.",
          "3/4."
        ],
        "answer": 1,
        "explanation": "São 12/4 = 3 meias-vidas; resta (1/2)³ = 1/8."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um índice é I = 10 log₁₀(P/P₀). Se P multiplica por 100, quanto I aumenta?",
        "options": [
          "100 unidades.",
          "10 unidades.",
          "20 unidades.",
          "2 unidades."
        ],
        "answer": 2,
        "explanation": "A variação é 10 log₁₀(100) = 10 × 2 = 20."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma reserva começa em 160 unidades, perde metade a cada 3 dias e recebe 10 unidades apenas ao fim do dia 6, imediatamente após a perda desse instante. Sem outras entradas, qual é o primeiro múltiplo positivo de 3 dias em que o total fica abaixo de 20?",
        "options": [
          "Dia 9.",
          "Dia 6.",
          "Dia 15.",
          "Dia 12."
        ],
        "answer": 3,
        "explanation": "Dia 3: 80. Dia 6: 40 + 10 = 50. Dia 9: 25. Dia 12: 12,5. É preciso aplicar a meia-vida à reserva já acrescida e respeitar “abaixo”, não apenas extrapolar a curva inicial."
      }
    ]
  },
  {
    "id": "geometria-plana",
    "area": "matematica",
    "title": "Geometria plana: áreas, semelhança e Pitágoras",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Organize desenhos, unidades e relações métricas antes de calcular.",
    "objectives": [
      "Separar perímetro e área",
      "Aplicar Pitágoras e semelhança",
      "Trabalhar com círculos e escalas"
    ],
    "sections": [
      {
        "title": "Separar perímetro e área",
        "paragraphs": [
          "Perímetro mede o contorno em unidades de comprimento; área mede superfície em unidades quadradas. Um retângulo tem A = bh e P = 2(b + h). Um triângulo tem A = bh/2, usando altura perpendicular à base escolhida.",
          "Figuras com o mesmo perímetro podem ter áreas diferentes. Em composição de áreas, divida a figura em partes ou subtraia regiões sem sobreposição. Uma medida inclinada não é automaticamente altura."
        ],
        "example": "Um retângulo 8 m × 3 m tem área 24 m² e perímetro 22 m; são grandezas distintas."
      },
      {
        "title": "Aplicar Pitágoras e semelhança",
        "paragraphs": [
          "Em triângulo retângulo, a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa. A hipotenusa fica oposta ao ângulo reto e é o maior lado. Não aplique a fórmula a qualquer triângulo sem verificar a condição.",
          "Figuras semelhantes têm comprimentos correspondentes multiplicados pelo mesmo fator k. Áreas variam por k² e volumes por k³ em sólidos semelhantes. A correspondência entre lados deve ser montada com base nos ângulos e na posição, não apenas pela ordem dos números."
        ],
        "example": "Um triângulo retângulo de catetos 6 e 8 tem hipotenusa √(36 + 64) = 10."
      },
      {
        "title": "Trabalhar com círculos e escalas",
        "paragraphs": [
          "O comprimento de uma circunferência é 2πr e a área do círculo é πr². Diâmetro é 2r. Se um enunciado fornece diâmetro, divida por dois antes de aplicar a fórmula da área. Use o valor de π indicado no exercício.",
          "Em mudanças de escala, converter área exige elevar o fator linear ao quadrado. Como 1 m = 100 cm, 1 m² = 10.000 cm². Não use a mesma conversão de comprimento para área."
        ],
        "example": "Um círculo de diâmetro 10 cm tem raio 5 cm e área 25π cm², não 100π cm²."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Em regiões vazadas, subtraia áreas sem subtrair comprimentos incompatíveis. Faixa interna de largura x em um retângulo reduz cada dimensão em 2x. Escala 1:k reduz comprimentos por k e áreas por k². No problema inverso de semelhança, a razão linear é a raiz quadrada da razão das áreas."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um jardim 12 m × 8 m tem uma faixa interna de 1 m em todas as bordas. O centro mede 10 m × 6 m. A faixa ocupa 96 − 60 = 36 m². Subtrair apenas 1 m de cada dimensão deixaria de contar uma das bordas."
      }
    ],
    "questions": [
      {
        "prompt": "Um triângulo tem base 12 cm e altura correspondente 5 cm. Sua área é:",
        "options": [
          "60 cm².",
          "30 cm².",
          "17 cm².",
          "120 cm²."
        ],
        "answer": 1,
        "explanation": "A = 12 × 5/2 = 30 cm². O produto sem divisão por dois daria a área de um paralelogramo com a mesma base e altura."
      },
      {
        "prompt": "Uma figura é ampliada por fator linear 3. Sua área é multiplicada por:",
        "options": [
          "3.",
          "6.",
          "9.",
          "27."
        ],
        "answer": 2,
        "explanation": "As duas dimensões lineares são multiplicadas por 3, logo a área varia por 3² = 9."
      },
      {
        "prompt": "A hipotenusa de um triângulo retângulo com catetos 5 e 12 mede:",
        "options": [
          "13.",
          "17.",
          "7.",
          "60."
        ],
        "answer": 0,
        "explanation": "Pelo teorema de Pitágoras, h² = 25 + 144 = 169, então h = 13."
      },
      {
        "prompt": "Um círculo tem raio 4 cm. Sua área é:",
        "options": [
          "8π cm².",
          "4π cm².",
          "32π cm².",
          "16π cm²."
        ],
        "answer": 3,
        "explanation": "A = πr² = π × 4² = 16π cm². A expressão 8π corresponderia ao comprimento da circunferência."
      },
      {
        "prompt": "2 m² equivalem a:",
        "options": [
          "200 cm².",
          "20.000 cm².",
          "2.000 cm².",
          "20 cm²."
        ],
        "answer": 1,
        "explanation": "Como 1 m = 100 cm, 1 m² = 100² = 10.000 cm². Portanto 2 m² = 20.000 cm²."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um retângulo mede 9 m por 4 m. Qual é seu perímetro?",
        "options": [
          "26 m.",
          "36 m.",
          "13 m.",
          "72 m."
        ],
        "answer": 0,
        "explanation": "P = 2(9 + 4) = 26 m; 36 m² seria a área."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um círculo tem diâmetro 10 cm. Qual é sua área?",
        "options": [
          "100π cm².",
          "25π cm².",
          "10π cm².",
          "50π cm²."
        ],
        "answer": 1,
        "explanation": "O raio é 5 cm; A = π × 5² = 25π cm²."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Dois triângulos semelhantes têm áreas na razão 9:25. Qual é a razão dos lados correspondentes?",
        "options": [
          "9:25.",
          "81:625.",
          "3:5.",
          "5:3."
        ],
        "answer": 2,
        "explanation": "A razão das áreas é o quadrado da linear; √(9/25) = 3/5."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma escada de 10 m apoia-se numa parede; seu pé fica a 6 m dela. Em terreno horizontal e parede vertical, qual altura alcança?",
        "options": [
          "4 m.",
          "16 m.",
          "√136 m.",
          "8 m."
        ],
        "answer": 3,
        "explanation": "A escada é hipotenusa: h² = 10² − 6² = 64, então h = 8."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um retângulo externo de 20 m por 12 m recebe uma faixa interna uniforme, restando um centro com metade da área original. Qual é a largura x da faixa?",
        "options": [
          "8 − √34 m.",
          "4 m.",
          "2 m.",
          "8 + √34 m."
        ],
        "answer": 0,
        "explanation": "O centro mede (20 − 2x) por (12 − 2x), e sua área é 120 m². Assim, 4x² − 64x + 120 = 0, ou x² − 16x + 30 = 0. As raízes são 8 ± √34. Como 0 < x < 6, só 8 − √34 ≈ 2,17 m é admissível."
      }
    ]
  },
  {
    "id": "geometria-espacial",
    "area": "matematica",
    "title": "Geometria espacial: volumes e capacidade",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Modele recipientes, sólidos e conversões entre unidades sem confundir área com volume.",
    "objectives": [
      "Relacionar base, altura e volume",
      "Comparar prismas, pirâmides e cones",
      "Converter capacidade e interpretar nível"
    ],
    "sections": [
      {
        "title": "Relacionar base, altura e volume",
        "paragraphs": [
          "Prismas retos têm volume igual à área da base multiplicada pela altura. Para cilindros, V = πr²h. A altura é medida perpendicularmente aos planos das bases. Identifique as dimensões úteis internas quando a questão tratar de capacidade.",
          "Área superficial mede material de revestimento, enquanto volume mede espaço ocupado. Uma caixa aberta usa menos material que uma fechada de mesmas dimensões. Antes de calcular, pergunte se o problema exige pintura, embalagem ou capacidade."
        ],
        "example": "Uma caixa interna de 2 m × 1 m × 0,5 m tem volume de 1 m³ e capacidade de 1.000 L."
      },
      {
        "title": "Comparar prismas, pirâmides e cones",
        "paragraphs": [
          "Pirâmides e cones têm volume igual a um terço do produto da área da base pela altura. A esfera tem volume 4πr³/3. Fórmulas devem ser associadas ao sólido correto e a medidas com a mesma unidade.",
          "Em sólidos semelhantes, multiplicar todas as dimensões por k multiplica volume por k³. Dobrar apenas a altura de um cilindro dobra volume; dobrar apenas o raio quadruplica volume. Especifique o que foi alterado."
        ],
        "example": "Um cone e um cilindro com mesma base e altura têm volumes na razão 1:3."
      },
      {
        "title": "Converter capacidade e interpretar nível",
        "paragraphs": [
          "1 L equivale a 1 dm³; 1 m³ equivale a 1.000 L; 1 mL equivale a 1 cm³. Em reservatório de seção horizontal constante, o volume varia linearmente com a altura do líquido. Em um cone, essa proporcionalidade simples não vale.",
          "Problemas de vazão combinam volume e tempo. Se houver entrada e saída constantes, use a diferença das vazões. Verifique se as taxas valem durante todo o intervalo e se não há transbordamento antes do tempo calculado."
        ],
        "example": "Uma entrada de 15 L/min e saída de 5 L/min fornecem vazão líquida de 10 L/min; 200 L exigem 20 min nas condições dadas."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Um corpo totalmente submerso desloca seu volume externo, se não houver infiltração em cavidades abertas. Em recipiente de seção horizontal constante, a subida é Δh = volume deslocado/área da base. Quando a forma é cônica, use semelhança: raio varia com altura e volume varia com o cubo da altura medida a partir do vértice."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um bloco de 300 cm³ é submerso num tanque de base 150 cm² sem transbordar. A subida é 300/150 = 2 cm. A fórmula é de variação de nível; não exige saber o volume total já existente."
      }
    ],
    "questions": [
      {
        "prompt": "Um reservatório de 2 m³ comporta:",
        "options": [
          "200 L.",
          "2.000 L.",
          "20 L.",
          "20.000 L."
        ],
        "answer": 1,
        "explanation": "Cada metro cúbico corresponde a 1.000 litros, portanto 2 m³ = 2.000 L."
      },
      {
        "prompt": "Dobrar apenas o raio de um cilindro, mantendo sua altura, multiplica o volume por:",
        "options": [
          "2.",
          "8.",
          "4.",
          "1."
        ],
        "answer": 2,
        "explanation": "V = πr²h; trocar r por 2r multiplica r² por quatro."
      },
      {
        "prompt": "Um cone de base 30 cm² e altura 9 cm tem volume:",
        "options": [
          "90 cm³.",
          "270 cm³.",
          "30 cm³.",
          "810 cm³."
        ],
        "answer": 0,
        "explanation": "V = Ab × h/3 = 30 × 9/3 = 90 cm³. A fórmula do prisma daria um volume três vezes maior."
      },
      {
        "prompt": "Uma entrada de 18 L/min e uma saída de 6 L/min funcionam simultaneamente. Em 10 min, o ganho de volume é:",
        "options": [
          "240 L.",
          "180 L.",
          "120 L.",
          "60 L."
        ],
        "answer": 2,
        "explanation": "A vazão líquida é 18 − 6 = 12 L/min. Em 10 minutos, acrescentam-se 120 L, supondo capacidade suficiente."
      },
      {
        "prompt": "Um sólido é ampliado em todas as dimensões por fator 2. Seu volume é multiplicado por:",
        "options": [
          "8.",
          "4.",
          "2.",
          "6."
        ],
        "answer": 0,
        "explanation": "Volumes de sólidos semelhantes variam com o cubo do fator linear: 2³ = 8."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um cilindro tem raio 3 cm e altura 10 cm. Qual é seu volume?",
        "options": [
          "30π cm³.",
          "90π cm³.",
          "300π cm³.",
          "9π cm³."
        ],
        "answer": 1,
        "explanation": "V = πr²h = π × 9 × 10 = 90π."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma caixa retangular tem dimensões internas 20 cm × 15 cm × 10 cm. Qual é sua capacidade?",
        "options": [
          "30 L.",
          "0,3 L.",
          "3 L.",
          "300 L."
        ],
        "answer": 2,
        "explanation": "O volume é 3.000 cm³; 1.000 cm³ = 1 L, logo são 3 L."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma pirâmide tem base de área 48 m² e altura 6 m. Qual é seu volume?",
        "options": [
          "288 m³.",
          "144 m³.",
          "16 m³.",
          "96 m³."
        ],
        "answer": 3,
        "explanation": "V = A_base × h/3 = 48 × 6/3 = 96."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um bloco impermeável de 600 cm³ é totalmente submerso em tanque de base 200 cm². Sem transbordamento, quanto sobe o nível?",
        "options": [
          "3 cm.",
          "0,3 cm.",
          "30 cm.",
          "120 cm."
        ],
        "answer": 0,
        "explanation": "Δh = volume deslocado/área = 600/200 = 3 cm."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um reservatório cônico tem vértice para baixo, altura 12 m e capacidade 216 m³. A água está a 6 m do vértice. Entram 7 m³/min sem saída. Quanto tempo leva para chegar a 8 m do vértice?",
        "options": [
          "8 min.",
          "37/7 min.",
          "12/7 min.",
          "64/7 min."
        ],
        "answer": 1,
        "explanation": "Por semelhança, V(h) = 216(h/12)³. Em 6 m há 27 m³; em 8 m, 64 m³. Faltam 37 m³; tempo = 37/7 min. Nível e volume não são diretamente proporcionais num cone."
      }
    ]
  },
  {
    "id": "probabilidade-contagem",
    "area": "matematica",
    "title": "Probabilidade e análise combinatória",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Defina o espaço amostral e decida quando somar, multiplicar ou considerar a ordem.",
    "objectives": [
      "Construir o espaço amostral",
      "Distinguir independência e retirada",
      "Contar escolhas com e sem ordem"
    ],
    "sections": [
      {
        "title": "Construir o espaço amostral",
        "paragraphs": [
          "Quando os resultados elementares são equiprováveis, P(A) é a razão entre casos favoráveis e possíveis. A equiprobabilidade precisa ser justificada pelo modelo; não basta contar categorias com tamanhos diferentes como se tivessem chances iguais.",
          "O evento complementar tem probabilidade 1 − P(A). Essa estratégia facilita expressões como “pelo menos um”: calcule o caso de nenhum e subtraia de um. Probabilidade varia entre zero e um."
        ],
        "example": "Em um dado honesto, P(número maior que 4) = 2/6 = 1/3, pois os resultados favoráveis são 5 e 6."
      },
      {
        "title": "Distinguir independência e retirada",
        "paragraphs": [
          "Em eventos independentes, P(A e B) = P(A)P(B). Retirar objetos sem reposição altera as condições para a segunda retirada. Com reposição e mistura adequada, o modelo pode manter as probabilidades.",
          "Probabilidade condicional restringe o universo ao evento já informado. Leia “sabendo que” como mudança do denominador. Eventos mutuamente exclusivos não podem ocorrer juntos; isso não os torna independentes quando têm probabilidade positiva."
        ],
        "example": "Em urna com 3 bolas azuis e 2 vermelhas, a chance de duas azuis sem reposição é 3/5 × 2/4 = 3/10."
      },
      {
        "title": "Contar escolhas com e sem ordem",
        "paragraphs": [
          "O princípio multiplicativo combina etapas: se há m escolhas para uma e n para outra, com as condições especificadas, há mn combinações de etapas. Se não pode repetir, o número de opções pode diminuir.",
          "Quando a ordem importa, escolher presidente e vice difere de escolher uma comissão sem cargos. Para uma dupla sem ordem entre n pessoas, n(n − 1)/2 evita contar cada dupla duas vezes. Não use uma fórmula antes de decidir se a troca de posições cria outro resultado."
        ],
        "example": "Entre 5 pessoas, há 5 × 4 = 20 formas de escolher presidente e vice; para uma dupla sem cargos, há 20/2 = 10."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Ao contar sem ordem, divida pelas permutações que representam a mesma escolha. Condicionar a informação restringe o espaço amostral e pode alterar independência. Para exatamente um sucesso em duas retiradas sem reposição, conte as duas ordens possíveis ou use pares não ordenados, sem misturar os dois métodos."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: numa urna com 3 vermelhas e 2 azuis, a chance de exatamente uma de cada em duas retiradas é (3/5)(2/4) + (2/5)(3/4) = 3/5. Somar as duas ordens evita esquecer metade dos casos."
      }
    ],
    "questions": [
      {
        "prompt": "Duas moedas honestas e independentes são lançadas. A chance de duas caras é:",
        "options": [
          "1/2.",
          "1/4.",
          "3/4.",
          "1."
        ],
        "answer": 1,
        "explanation": "Os resultados equiprováveis são CC, CK, KC e KK. Apenas CC é favorável; ou multiplique 1/2 por 1/2."
      },
      {
        "prompt": "Entre 6 pessoas, quantas duplas sem cargos distintos podem ser formadas?",
        "options": [
          "30.",
          "12.",
          "15.",
          "36."
        ],
        "answer": 2,
        "explanation": "6 × 5 conta cada dupla duas vezes. Dividindo por 2, obtemos 15."
      },
      {
        "prompt": "Uma urna contém 4 bolas verdes e 2 amarelas. Sem reposição, a probabilidade de duas verdes é:",
        "options": [
          "2/5.",
          "4/9.",
          "1/3.",
          "2/3."
        ],
        "answer": 0,
        "explanation": "P = 4/6 × 3/5 = 12/30 = 2/5. Após retirar uma verde, restam três verdes entre cinco bolas."
      },
      {
        "prompt": "Uma moeda honesta é lançada três vezes de modo independente. A chance de pelo menos uma cara é:",
        "options": [
          "1/8.",
          "1/2.",
          "3/8.",
          "7/8."
        ],
        "answer": 3,
        "explanation": "Use o complemento: nenhuma cara tem probabilidade (1/2)³ = 1/8; logo pelo menos uma tem 1 − 1/8 = 7/8."
      },
      {
        "prompt": "Uma senha tem dois algarismos distintos de 0 a 9, e zero pode iniciar. Quantas senhas existem?",
        "options": [
          "100.",
          "90.",
          "45.",
          "20."
        ],
        "answer": 1,
        "explanation": "São 10 opções para a primeira posição e 9 para a segunda, sem repetição: 10 × 9 = 90. A ordem importa."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Três camisas e quatro calças formam quantos conjuntos de uma peça de cada?",
        "options": [
          "7.",
          "24.",
          "12.",
          "16."
        ],
        "answer": 2,
        "explanation": "São 3 escolhas de camisa e 4 de calça para cada uma: 3 × 4 = 12."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um dado honesto é lançado. Sabendo que saiu número par, qual é a chance de sair maior que 3?",
        "options": [
          "1/2.",
          "1/3.",
          "5/6.",
          "2/3."
        ],
        "answer": 3,
        "explanation": "O espaço condicionado é {2, 4, 6}; 4 e 6 são favoráveis, logo 2/3."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma urna contém 3 bolas vermelhas e 2 azuis. Duas são retiradas sem reposição. Qual a chance de uma de cada cor?",
        "options": [
          "3/5.",
          "3/10.",
          "1/5.",
          "2/5."
        ],
        "answer": 0,
        "explanation": "As ordens VA e AV somam (3/5)(2/4) + (2/5)(3/4) = 12/20 = 3/5."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Entre 5 pessoas, quantas escolhas de presidente e vice distintos existem?",
        "options": [
          "10.",
          "20.",
          "25.",
          "5."
        ],
        "answer": 1,
        "explanation": "Os cargos distinguem a ordem: 5 escolhas para presidente e 4 para vice, total 20."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma urna contém 4 bolas vermelhas e 3 azuis. Retiram-se duas sem reposição. Sabendo que pelo menos uma é vermelha, qual a probabilidade de ambas serem vermelhas?",
        "options": [
          "2/7.",
          "1/2.",
          "1/3.",
          "2/3."
        ],
        "answer": 2,
        "explanation": "Há C(7,2) = 21 pares; 3 pares são de duas azuis. Restam 18 pares no universo condicionado. Os pares de vermelhas são C(4,2) = 6; 6/18 = 1/3. O denominador precisa mudar pela informação dada."
      }
    ]
  },
  {
    "id": "matematica-financeira",
    "area": "matematica",
    "title": "Matemática financeira e comparação de propostas",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Compare juros, descontos e parcelamentos a partir de uma mesma base.",
    "objectives": [
      "Diferenciar juros simples e compostos",
      "Comparar descontos e aumentos",
      "Interpretar custo total e condições"
    ],
    "sections": [
      {
        "title": "Diferenciar juros simples e compostos",
        "paragraphs": [
          "Em juros simples, os acréscimos são calculados sobre o capital inicial: M = C(1 + it). Em juros compostos, a taxa incide sobre o saldo acumulado: M = C(1 + i)ᵗ. Taxa e tempo precisam estar no mesmo período.",
          "Um rendimento de 2% ao mês não equivale exatamente a 24% ao ano em capitalização composta. Para converter, iguale fatores no período. Não misture taxa nominal e efetiva quando o enunciado as distinguir."
        ],
        "example": "R$ 1.000 a 10% por período geram R$ 1.200 em dois períodos simples e R$ 1.210 em dois períodos compostos."
      },
      {
        "title": "Comparar descontos e aumentos",
        "paragraphs": [
          "Desconto de p% corresponde a multiplicar por 1 − p/100. Aumentar e depois reduzir a mesma porcentagem não retorna ao início porque as bases diferem. O cálculo inverso exige dividir pelo fator aplicado.",
          "Diferencie porcentagem e ponto percentual: uma taxa de 10% que passa a 15% subiu 5 pontos percentuais e aumentou 50% em relação à taxa inicial. Declare a base de comparação para não confundir os dois indicadores."
        ],
        "example": "Após desconto de 20%, um produto custa R$ 160. O preço inicial era 160/0,8 = R$ 200."
      },
      {
        "title": "Interpretar custo total e condições",
        "paragraphs": [
          "Em uma comparação sem juros ou atualização temporal explicitada, some entrada e parcelas para obter total nominal. Se o problema pede equivalência financeira em datas diferentes, é necessário considerar taxa e tempo. Não invente uma taxa ausente.",
          "Uma proposta de menor parcela pode ter prazo maior e custo total superior. Observe taxas, cobranças e o que está incluído no modelo. Os exemplos aqui são exercícios matemáticos, não recomendações sobre contratação de crédito."
        ],
        "example": "À vista por R$ 900 ou em 10 parcelas de R$ 100: o total nominal parcelado é R$ 1.000, diferença de R$ 100 em relação ao preço à vista."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Exercícios de equivalência em datas distintas exigem uma taxa explicitada. Para trazer um pagamento futuro ao presente em capitalização composta, divida por (1 + i)ᵗ. Uma inflação acumulada também multiplica fatores; ganho real pode ser obtido dividindo fator nominal pelo fator de preços. Essas relações são modelos matemáticos sob hipóteses, não estimativas de custos reais."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: pagar R$ 121 daqui a dois períodos equivale a R$ 100 hoje com taxa de comparação de 10% por período, pois 121/1,1² = 100. Comparar apenas 121 e 100 sem tratar o tempo responderia outra pergunta."
      }
    ],
    "questions": [
      {
        "prompt": "R$ 500 a juros simples de 2% ao mês por 3 meses resultam em montante de:",
        "options": [
          "R$ 506.",
          "R$ 530.",
          "R$ 560.",
          "R$ 600."
        ],
        "answer": 1,
        "explanation": "J = 500 × 0,02 × 3 = 30; M = 500 + 30 = R$ 530."
      },
      {
        "prompt": "Após desconto de 25%, um produto custa R$ 90. O preço anterior era:",
        "options": [
          "R$ 112,50.",
          "R$ 115.",
          "R$ 120.",
          "R$ 360."
        ],
        "answer": 2,
        "explanation": "O preço final representa 75% do inicial. Assim, inicial = 90/0,75 = R$ 120."
      },
      {
        "prompt": "Uma taxa passa de 20% a 25%. O aumento em pontos percentuais é:",
        "options": [
          "5.",
          "25.",
          "1,25.",
          "45."
        ],
        "answer": 0,
        "explanation": "Pontos percentuais medem a diferença direta entre taxas: 25 − 20 = 5. O aumento relativo seria 5/20 = 25%."
      },
      {
        "prompt": "R$ 1.000 rendem juros compostos de 10% por período durante dois períodos. O montante é:",
        "options": [
          "R$ 1.200.",
          "R$ 1.020.",
          "R$ 1.210.",
          "R$ 1.100."
        ],
        "answer": 2,
        "explanation": "M = 1.000 × 1,1² = 1.210. Os juros do segundo período incidem sobre R$ 1.100."
      },
      {
        "prompt": "Um produto aumenta 20% e depois recebe desconto de 20%. Em relação ao preço inicial, o final é:",
        "options": [
          "4% menor.",
          "Igual.",
          "4% maior.",
          "40% menor."
        ],
        "answer": 0,
        "explanation": "1,2 × 0,8 = 0,96. O preço termina em 96% do inicial, uma redução líquida de 4%."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um capital de R$ 800 rende juros simples de 3% ao mês por 5 meses. Quanto rende de juros?",
        "options": [
          "R$ 920.",
          "R$ 24.",
          "R$ 128.",
          "R$ 120."
        ],
        "answer": 3,
        "explanation": "J = Cit = 800 × 0,03 × 5 = 120; 920 é o montante, não os juros."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma taxa composta de 10% por período equivale a quanto em dois períodos?",
        "options": [
          "21%.",
          "20%.",
          "10%.",
          "110%."
        ],
        "answer": 0,
        "explanation": "O fator é 1,1² = 1,21; a taxa acumulada é 21%."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um preço de R$ 250 recebe descontos sucessivos de 10% e 20%. Qual é o preço final?",
        "options": [
          "R$ 175.",
          "R$ 180.",
          "R$ 200.",
          "R$ 150."
        ],
        "answer": 1,
        "explanation": "250 × 0,90 × 0,80 = 180. O desconto acumulado é 28%, não 30%."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um preço cresce 25%, enquanto a renda cresce 10%. O poder de compra dessa renda nesse produto muda como?",
        "options": [
          "Cai 15%.",
          "Sobe 15%.",
          "Cai 12%.",
          "Cai 10%."
        ],
        "answer": 2,
        "explanation": "A quantidade comprável varia pelo fator 1,10/1,25 = 0,88, uma queda de 12%."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um exercício compara R$ 1.000 hoje a duas parcelas de R$ 550, uma no fim de cada um dos próximos dois meses. Com taxa de comparação de 10% ao mês e sem taxas adicionais, qual proposta tem menor valor presente e por quanto?",
        "options": [
          "À vista, por R$ 100.",
          "As parcelas, por R$ 100.",
          "São equivalentes.",
          "As parcelas, por aproximadamente R$ 45,45."
        ],
        "answer": 3,
        "explanation": "O valor presente é 550/1,1 + 550/1,1² = 500 + 454,545… = 954,545…. A diferença para 1.000 é cerca de 45,45. A soma nominal 1.100 não incorpora a taxa temporal estipulada."
      }
    ]
  },
  {
    "id": "estatistica-critica",
    "area": "matematica",
    "title": "Estatística: amostragem, dispersão e leitura crítica",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Vá além da média e avalie representatividade, pesos e conclusões baseadas em dados.",
    "objectives": [
      "Diferenciar população e amostra",
      "Usar medidas com seus limites",
      "Avaliar gráficos e causalidade"
    ],
    "sections": [
      {
        "title": "Diferenciar população e amostra",
        "paragraphs": [
          "População é o conjunto de interesse da pesquisa; amostra é o subconjunto observado. Uma amostra grande pode continuar enviesada se excluir sistematicamente grupos. A forma de seleção importa tanto quanto o número de respondentes.",
          "Uma enquete voluntária na internet não representa automaticamente todos os moradores de uma cidade. Acesso, motivação e perfil dos participantes podem influenciar respostas. Diferencie resultado observado e generalização para a população."
        ],
        "example": "Entrevistar apenas passageiros de um ônibus às 6 h pode não representar hábitos de transporte de toda a população ao longo do dia."
      },
      {
        "title": "Usar medidas com seus limites",
        "paragraphs": [
          "A média ponderada soma produtos dos valores pelos pesos e divide pela soma dos pesos. A mediana localiza o centro da ordenação. Valores extremos podem deslocar bastante a média sem mudar tanto a mediana.",
          "Amplitude é máximo menos mínimo; outras medidas de dispersão descrevem afastamentos em relação ao centro. Duas turmas podem ter a mesma média e distribuições diferentes. A média sozinha não informa se todos tiveram desempenho parecido."
        ],
        "example": "Notas 5 e 9 com pesos 1 e 3 têm média ponderada (5 + 27)/4 = 8."
      },
      {
        "title": "Avaliar gráficos e causalidade",
        "paragraphs": [
          "Observe eixos, base percentual, fonte e intervalo temporal. Percentuais de grupos de tamanhos diferentes não devem ser combinados por média simples sem justificativa. Para agregar, recupere contagens ou use pesos correspondentes.",
          "Associação entre duas variáveis não demonstra causa isolada. Variáveis de confusão e direção inversa podem explicar parte do padrão. Um gráfico descritivo pode revelar uma diferença real e ainda não provar qual mecanismo a produziu."
        ],
        "example": "Se 90% de 10 pessoas e 50% de 90 pessoas aprovam uma medida, o total é 9 + 45 = 54 em 100, isto é, 54%, não 70%."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Comparações agregadas podem mudar quando a composição dos grupos muda. Calcule taxas dentro de estratos relevantes e depois a taxa total com os pesos reais. Não conclua que a associação é causal, mesmo com amostra grande. Mediana resiste melhor a certos extremos, mas não informa sozinha toda a distribuição."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: em 10 pessoas, 80% aprovam; em outras 90, 40% aprovam. Há 8 + 36 = 44 aprovações em 100, portanto 44%. A média simples 60% daria o mesmo peso a grupos de tamanhos muito diferentes."
      }
    ],
    "questions": [
      {
        "prompt": "Notas 6 e 10 com pesos 3 e 1 têm média ponderada:",
        "options": [
          "8.",
          "7.",
          "9.",
          "16."
        ],
        "answer": 1,
        "explanation": "(6 × 3 + 10 × 1)/(3 + 1) = 28/4 = 7. A nota 6 tem maior peso."
      },
      {
        "prompt": "Duas séries têm mesma média. É correto concluir que:",
        "options": [
          "Todos os valores são iguais.",
          "Têm necessariamente a mesma amplitude.",
          "A dispersão ainda pode ser diferente.",
          "Têm necessariamente a mesma mediana."
        ],
        "answer": 2,
        "explanation": "A média não determina a distribuição. As séries 4, 6 e 0, 10 têm média 5, mas amplitudes diferentes."
      },
      {
        "prompt": "Uma enquete voluntária com milhares de respostas pode:",
        "options": [
          "Apresentar viés de seleção apesar do tamanho.",
          "Garantir representação de toda população.",
          "Eliminar qualquer erro automaticamente.",
          "Provar causalidade em qualquer tema."
        ],
        "answer": 0,
        "explanation": "O tamanho não corrige automaticamente exclusões e autoseleção. Representatividade depende do desenho da pesquisa."
      },
      {
        "prompt": "Em um grupo de 20 pessoas, 50% aprovam uma proposta; em outro de 80, 25% aprovam. A aprovação total é:",
        "options": [
          "37,5%.",
          "50%.",
          "25%.",
          "30%."
        ],
        "answer": 3,
        "explanation": "Há 10 aprovadores no primeiro e 20 no segundo: 30 de 100 = 30%. A média simples das porcentagens ignoraria os tamanhos."
      },
      {
        "prompt": "A amplitude dos valores 3, 5, 5, 11 é:",
        "options": [
          "5.",
          "8.",
          "6.",
          "24."
        ],
        "answer": 1,
        "explanation": "Amplitude = máximo − mínimo = 11 − 3 = 8. Não é a soma nem a média."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Em uma pesquisa sobre moradores, entrevistar apenas passageiros de uma linha de ônibus pode causar quê?",
        "options": [
          "Viés de cobertura da população.",
          "Representatividade garantida pela proximidade física.",
          "Eliminação de toda incerteza.",
          "Censo de todos os moradores."
        ],
        "answer": 0,
        "explanation": "Pessoas que não usam a linha podem ficar sistematicamente excluídas."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] As séries 4, 4, 4 e 0, 4, 8 têm mesma média. Qual comparação é correta?",
        "options": [
          "Ambas têm amplitude 4.",
          "A segunda tem maior amplitude.",
          "A primeira tem maior amplitude.",
          "A média da segunda é 8."
        ],
        "answer": 1,
        "explanation": "As médias são 4; amplitudes são 0 e 8, respectivamente."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma turma tem notas 5 com peso 2 e 9 com peso 3. Qual a média ponderada?",
        "options": [
          "7.",
          "6,6.",
          "7,4.",
          "8."
        ],
        "answer": 2,
        "explanation": "(5 × 2 + 9 × 3)/(2 + 3) = 37/5 = 7,4."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um gráfico mostra associação entre consumo de sorvete e afogamentos. Qual cautela é necessária?",
        "options": [
          "A venda de sorvete necessariamente causa afogamentos.",
          "A associação prova ausência de qualquer outra variável.",
          "Um gráfico nunca pode mostrar associação real.",
          "O calor pode influenciar ambos; a associação não prova causa direta."
        ],
        "answer": 3,
        "explanation": "Temperatura e exposição à água podem atuar como variáveis de confusão; é necessário investigar o mecanismo."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Curso A aprova 9 de 10 candidatos na modalidade fácil e 30 de 100 na difícil. Curso B aprova 80 de 100 na fácil e 2 de 10 na difícil. Qual conclusão descreve corretamente os dados?",
        "options": [
          "A tem taxa maior em cada modalidade, mas taxa total menor que B.",
          "B tem taxa maior em cada modalidade e no total.",
          "A tem taxa total maior e menor taxa em cada modalidade.",
          "As taxas totais são iguais porque ambos têm 110 candidatos."
        ],
        "answer": 0,
        "explanation": "A: 90% e 30%; B: 80% e 20%. Nos totais, A = 39/110 e B = 82/110. Os pesos das modalidades diferem, invertendo a comparação agregada; isso não prova efeito causal dos cursos."
      }
    ]
  },
  {
    "id": "genetica-heranca",
    "area": "natureza",
    "title": "Genética: DNA, herança e probabilidades",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Passe do material genético aos cruzamentos, reconhecendo os limites dos modelos mendelianos.",
    "objectives": [
      "Relacionar DNA, genes e expressão",
      "Montar cruzamentos com hipóteses explícitas",
      "Distinguir divisão e variabilidade"
    ],
    "sections": [
      {
        "title": "Relacionar DNA, genes e expressão",
        "paragraphs": [
          "DNA contém informação em sua sequência de nucleotídeos. Um gene é uma região funcional desse material; alelos são versões de um gene. Em células humanas somáticas, cromossomos homólogos carregam genes correspondentes, embora possam conter alelos distintos.",
          "A expressão gênica envolve produção de RNA e, para muitos genes, de proteínas. Ter um alelo não significa que todo efeito apareça de modo independente do ambiente. Fenótipos podem resultar de vários genes e de condições ambientais, como ocorre em muitas características quantitativas."
        ],
        "example": "Uma planta com potencial genético de crescimento pode crescer menos sob falta de água; o ambiente participa da formação do fenótipo."
      },
      {
        "title": "Montar cruzamentos com hipóteses explícitas",
        "paragraphs": [
          "Em um modelo com dominância completa, AA e Aa apresentam o fenótipo dominante, enquanto aa apresenta o recessivo. Dominante não significa mais frequente, melhor ou mais forte. Cada genitor fornece um alelo no cruzamento diploide simples.",
          "No cruzamento Aa × Aa, cada genitor produz gametas A e a com probabilidade de 1/2. As combinações são AA, Aa, Aa e aa: proporção genotípica 1:2:1 e fenotípica 3:1. Isso é uma distribuição probabilística, não obrigação de exatamente um recessivo a cada quatro filhos."
        ],
        "example": "Probabilidade de aa = 1/2 × 1/2 = 1/4. Cada nascimento é um novo evento sob as hipóteses do modelo."
      },
      {
        "title": "Distinguir divisão e variabilidade",
        "paragraphs": [
          "Mitose conserva normalmente o número cromossômico e participa de crescimento e reparo. Meiose reduz a ploidia na formação de células reprodutivas e promove variabilidade por segregação e recombinação. Mutação produz novas variantes, enquanto recombinação reorganiza variantes existentes.",
          "Para herança ligada ao X, registre cromossomos sexuais e alelos antes de calcular. Não aplique automaticamente o quadro autossômico. Em heredogramas, pequenos números de descendentes não garantem proporções exatas."
        ],
        "example": "Uma célula diploide 2n = 46 forma, ao fim da meiose usual, células haploides com n = 23."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Em herança autossômica mendeliana simples, cada genitor fornece um alelo. Condicionar ao fenótipo dominante elimina aa do universo, mas não elimina heterozigotos. Para dois genes, multiplicar probabilidades requer segregação independente, explicitada no problema. Recombinação reorganiza variantes, enquanto mutação pode criar novas variantes."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: em Aa × Aa há AA, Aa, Aa e aa equiprováveis. Sabendo que um descendente tem fenótipo dominante, exclua aa: entre três resultados restantes, dois são Aa. A chance condicional de heterozigose é 2/3, e não 1/2."
      }
    ],
    "questions": [
      {
        "prompt": "Em Aa × Aa com dominância completa, a probabilidade de descendente aa é:",
        "options": [
          "0%.",
          "25%.",
          "50%.",
          "100%."
        ],
        "answer": 1,
        "explanation": "Cada genitor transmite a com chance 1/2. Multiplicando as probabilidades: 1/2 × 1/2 = 1/4 = 25%."
      },
      {
        "prompt": "Um alelo dominante é necessariamente:",
        "options": [
          "O mais frequente na população.",
          "Mais vantajoso em qualquer ambiente.",
          "Expresso no heterozigoto sob dominância completa.",
          "Transmitido apenas pelo pai."
        ],
        "answer": 2,
        "explanation": "Dominância descreve a relação de expressão no heterozigoto. Não determina frequência, vantagem adaptativa nem origem parental."
      },
      {
        "prompt": "A meiose distingue-se da mitose por:",
        "options": [
          "Reduzir normalmente a ploidia e contribuir para a variabilidade.",
          "Duplicar indefinidamente a ploidia.",
          "Ocorrer apenas em bactérias.",
          "Eliminar todo material genético."
        ],
        "answer": 0,
        "explanation": "A meiose separa homólogos e depois cromátides, reduzindo a ploidia. Segregação e recombinação contribuem para variabilidade."
      },
      {
        "prompt": "No modelo de dominância completa, Aa × aa produz qual probabilidade de fenótipo recessivo?",
        "options": [
          "0%.",
          "25%.",
          "50%.",
          "100%."
        ],
        "answer": 2,
        "explanation": "O primeiro genitor fornece A ou a em igual proporção; o segundo fornece apenas a. Metade será Aa e metade aa."
      },
      {
        "prompt": "Uma célula com 2n = 20 completa uma meiose usual. Cada produto haploide terá:",
        "options": [
          "10 cromossomos.",
          "20 cromossomos.",
          "40 cromossomos.",
          "5 cromossomos."
        ],
        "answer": 0,
        "explanation": "A meiose reduz o número de conjuntos pela metade: de 2n = 20 para n = 10."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Em AA × aa, com dominância completa, qual o genótipo de todos os descendentes?",
        "options": [
          "AA.",
          "Aa.",
          "aa.",
          "Metade AA e metade aa."
        ],
        "answer": 1,
        "explanation": "O primeiro genitor só fornece A e o segundo só fornece a, formando Aa em todos os casos do modelo."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um organismo AaBb produz gametas com segregação independente. Qual a chance de gameta ab?",
        "options": [
          "1/2.",
          "3/4.",
          "1/4.",
          "1/8."
        ],
        "answer": 2,
        "explanation": "P(a) = 1/2 e P(b) = 1/2; por independência, 1/2 × 1/2 = 1/4."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual processo produz novas variantes de sequência de DNA?",
        "options": [
          "Apenas redistribuição de alelos na fecundação.",
          "Toda tradução sem alteração do DNA.",
          "Segregação de cromossomos sem mudança de sequência.",
          "Mutação."
        ],
        "answer": 3,
        "explanation": "Mutação altera sequência; recombinação e segregação reorganizam variantes já existentes."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Em Aa × Aa, sabendo que o descendente tem fenótipo dominante, qual a probabilidade de ser Aa?",
        "options": [
          "2/3.",
          "1/2.",
          "1/4.",
          "3/4."
        ],
        "answer": 0,
        "explanation": "No universo AA, Aa, Aa, dois dos três resultados são heterozigotos."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Em AaBb × AaBb, dois loci autossômicos independentes e dominância completa, sabe-se que um descendente tem fenótipo dominante nos dois loci. Qual a chance de ele ser heterozigoto nos dois?",
        "options": [
          "1/4.",
          "4/9.",
          "9/16.",
          "2/3."
        ],
        "answer": 1,
        "explanation": "Em cada locus, P(heterozigoto dado dominante) = 2/3. Com segregação independente e condição separável nos dois loci, a chance conjunta é (2/3)² = 4/9. A probabilidade 1/4 seria a dupla heterozigose antes de condicionar."
      }
    ]
  },
  {
    "id": "evolucao-selecao",
    "area": "natureza",
    "title": "Evolução, seleção natural e resistência",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Explique mudanças populacionais sem atribuir intenção aos organismos.",
    "objectives": [
      "Identificar o que evolui",
      "Distinguir origem e seleção da variação",
      "Aplicar ao caso da resistência"
    ],
    "sections": [
      {
        "title": "Identificar o que evolui",
        "paragraphs": [
          "Evolução biológica envolve mudanças em características hereditárias de populações ao longo das gerações. Indivíduos se desenvolvem e podem se aclimatar, mas não mudam deliberadamente seu patrimônio genético porque precisam de uma característica.",
          "Seleção natural exige variação hereditária e diferenças no sucesso reprodutivo relacionadas ao ambiente. Uma característica vantajosa em um ambiente pode não ser vantajosa em outro. Evolução não é uma marcha obrigatória em direção à perfeição ou ao ser humano."
        ],
        "example": "Em uma população com insetos claros e escuros, a camuflagem pode alterar a predação conforme a cor do ambiente."
      },
      {
        "title": "Distinguir origem e seleção da variação",
        "paragraphs": [
          "Mutações e recombinação participam da variabilidade. A seleção altera a representação de variantes ao longo das gerações. A mutação não surge de forma dirigida para resolver a necessidade momentânea; a vantagem é avaliada pelas condições ambientais.",
          "Deriva genética é mudança aleatória de frequências, especialmente relevante em populações pequenas. Fluxo gênico ocorre com a transferência de alelos entre populações por reprodução. Nem toda diferença entre populações foi produzida por seleção."
        ],
        "example": "Após uma redução populacional casual, alelos podem se tornar raros ou desaparecer sem terem sido desvantajosos."
      },
      {
        "title": "Aplicar ao caso da resistência",
        "paragraphs": [
          "Um antibiótico pode eliminar bactérias sensíveis e favorecer a reprodução das resistentes já presentes ou surgidas por mutação. Genes de resistência também podem circular entre bactérias. O medicamento atua como pressão seletiva; não treina cada bactéria para resistir.",
          "A explicação de uma questão deve separar variação, sobrevivência e reprodução. Evite a ideia de que todas as bactérias se transformam simultaneamente. A resistência é um problema populacional relacionado à seleção e à circulação de variantes."
        ],
        "example": "Antes da exposição, poucas bactérias resistentes coexistem com muitas sensíveis; depois, a proporção de resistentes pode aumentar."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Sucesso evolutivo relaciona-se à contribuição reprodutiva, não só à sobrevivência individual. Seleção pode agir em variantes preexistentes; o ambiente não determina uma mutação útil específica. Em um modelo de uma geração, multiplique a quantidade de cada tipo por sua contribuição de descendentes e recalcule as frequências no novo total."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma população tem 80 sensíveis e 20 resistentes. Se cada sensível deixa 1 descendente e cada resistente deixa 4, a geração seguinte terá 80 e 80: resistentes passam de 20% para 50%. Nenhum sensível precisou se transformar em resistente."
      }
    ],
    "questions": [
      {
        "prompt": "Após exposição a um antibiótico, aumenta a proporção de bactérias resistentes. A explicação central é:",
        "options": [
          "Todas decidiram mudar.",
          "O ambiente criou uma necessidade consciente.",
          "Houve seleção de variantes resistentes.",
          "Não existia reprodução."
        ],
        "answer": 2,
        "explanation": "A pressão seletiva favorece a sobrevivência e a reprodução das resistentes. A mudança observada é populacional, não uma decisão de cada organismo."
      },
      {
        "prompt": "Deriva genética corresponde a:",
        "options": [
          "Mudança aleatória de frequências alélicas.",
          "Adaptação intencional obrigatória.",
          "Produção dirigida de mutações úteis.",
          "Ausência de mudança populacional."
        ],
        "answer": 0,
        "explanation": "A amostragem aleatória de alelos entre gerações pode alterar frequências, com efeitos especialmente fortes em populações pequenas."
      },
      {
        "prompt": "Uma característica vantajosa em uma floresta pode ser desvantajosa em outro ambiente porque:",
        "options": [
          "Toda característica tem valor fixo universal.",
          "O sucesso reprodutivo depende das condições ambientais.",
          "A seleção não envolve reprodução.",
          "A evolução sempre produz perfeição."
        ],
        "answer": 1,
        "explanation": "Vantagens são relativas ao ambiente e às interações ecológicas. Não existe uma escala universal de superioridade biológica."
      },
      {
        "prompt": "Uma enchente reduz ao acaso uma população, alterando frequências alélicas. O mecanismo destacado é:",
        "options": [
          "Seleção dirigida pela vontade.",
          "Uso e desuso obrigatório.",
          "Produção intencional de genes.",
          "Deriva genética."
        ],
        "answer": 3,
        "explanation": "O enunciado destaca amostragem aleatória em uma redução populacional, situação associada à deriva e ao efeito gargalo."
      },
      {
        "prompt": "A chegada de indivíduos que se reproduzem em outra população pode gerar:",
        "options": [
          "Ausência de troca genética.",
          "Fluxo gênico.",
          "Fim de toda variabilidade.",
          "Mutação dirigida obrigatória."
        ],
        "answer": 1,
        "explanation": "A reprodução dos migrantes pode transferir alelos entre populações, caracterizando fluxo gênico."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual condição é necessária para seleção natural alterar características hereditárias ao longo das gerações?",
        "options": [
          "Desejo individual de adquirir uma característica.",
          "Igualdade reprodutiva de todas as variantes em qualquer ambiente.",
          "Variação hereditária associada a sucesso reprodutivo diferente.",
          "Ausência completa de hereditariedade."
        ],
        "answer": 2,
        "explanation": "Seleção depende de diferenças herdáveis que afetem contribuição para gerações seguintes."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Após seca, sementes de certas variantes deixam mais descendentes. O que está sendo comparado?",
        "options": [
          "Perfeição absoluta das espécies.",
          "Intenção consciente de adaptação.",
          "Impossibilidade de mudança populacional.",
          "Sucesso reprodutivo relativo no ambiente."
        ],
        "answer": 3,
        "explanation": "A vantagem é contextual e medida pela contribuição reprodutiva, sem meta de perfeição."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Por que deriva genética tende a ser especialmente importante em populações pequenas?",
        "options": [
          "O acaso pode alterar mais intensamente as frequências relativas.",
          "Todas as mutações se tornam benéficas.",
          "O ambiente deixa de existir.",
          "A reprodução torna-se necessariamente dirigida."
        ],
        "answer": 0,
        "explanation": "Em poucos indivíduos, a perda ou reprodução aleatória de alguns representa grande parcela do conjunto."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma bactéria resistente já presente deixa descendentes após eliminação das sensíveis. Qual explicação deve ser evitada?",
        "options": [
          "Havia variabilidade na população.",
          "O medicamento ensinou cada bactéria a produzir exatamente a mutação necessária.",
          "A resistência aumentou de frequência.",
          "A reprodução contribuiu para a mudança populacional."
        ],
        "answer": 1,
        "explanation": "A variação não surge dirigida pela necessidade; a pressão seletiva favorece variantes que deixam mais descendentes."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Inicialmente há 90 indivíduos de tipo A e 10 de tipo B. Cada A deixa 1 descendente e cada B deixa 9, todos sobreviventes. Sem mutação nem migração, qual frequência de B resulta e qual inferência é válida?",
        "options": [
          "90%; cada A precisou virar B.",
          "10%; sem mutação frequências nunca mudam.",
          "50%; a mudança pode resultar de reprodução diferencial sem transformação de A em B.",
          "100%; o tipo mais fecundo elimina o outro em uma geração."
        ],
        "answer": 2,
        "explanation": "Há 90 descendentes A e 90 B, total 180. A frequência de B é 90/180 = 50%. A alteração decorre da contribuição reprodutiva, sem exigir mutação naquela geração."
      }
    ]
  },
  {
    "id": "fisiologia-integrada",
    "area": "natureza",
    "title": "Fisiologia humana: integração dos sistemas",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Relacione digestão, respiração, circulação e excreção em situações de raciocínio biológico.",
    "objectives": [
      "Distinguir digestão e absorção",
      "Conectar trocas gasosas e circulação",
      "Entender regulação e excreção"
    ],
    "sections": [
      {
        "title": "Distinguir digestão e absorção",
        "paragraphs": [
          "A digestão transforma alimentos em moléculas que podem ser absorvidas. Processos mecânicos fragmentam e misturam; enzimas catalisam reações químicas específicas. A bile emulsifica lipídios, aumentando a superfície de contato, mas não é uma enzima digestiva.",
          "O intestino delgado é o principal local de absorção de muitos nutrientes; suas estruturas ampliam a superfície de troca. A absorção não é sinônimo de produção de energia: depois de atravessar o epitélio, nutrientes seguem rotas metabólicas e de distribuição."
        ],
        "example": "Fragmentar uma gota de gordura em gotículas aumenta sua superfície total e facilita a ação de lipases."
      },
      {
        "title": "Conectar trocas gasosas e circulação",
        "paragraphs": [
          "Nos alvéolos, gases atravessam superfícies finas por difusão segundo gradientes de pressão parcial. O oxigênio é transportado principalmente ligado à hemoglobina. As células usam oxigênio na respiração aeróbia, que não deve ser confundida com a ventilação dos pulmões.",
          "Artérias conduzem sangue para fora do coração; veias o trazem de volta. Essa definição é baseada no sentido do fluxo, não na quantidade de oxigênio. A artéria pulmonar transporta sangue relativamente pobre em oxigênio aos pulmões."
        ],
        "example": "Na circulação pulmonar: ventrículo direito → artérias pulmonares → pulmões → veias pulmonares → átrio esquerdo."
      },
      {
        "title": "Entender regulação e excreção",
        "paragraphs": [
          "Os rins filtram o plasma, reabsorvem substâncias e secretam outras nos túbulos, contribuindo para controle de água, sais e resíduos. Filtrar não significa eliminar integralmente tudo o que atravessou o filtro. A urina final resulta de várias etapas.",
          "Homeostase é manutenção dinâmica de condições internas dentro de limites, por mecanismos regulatórios. Não significa ausência de variação. Em uma questão, procure a variável regulada e a resposta que reduz o desvio."
        ],
        "example": "A reabsorção de água pode mudar conforme mecanismos hormonais e necessidades do organismo, alterando volume e concentração da urina."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Integração fisiológica conecta ventilação, difusão, circulação e uso celular de moléculas. Cada etapa pode limitar o transporte de oxigênio. Homeostase frequentemente envolve retroalimentação negativa: uma resposta reduz o desvio da variável. Nos rins, excreção pode ser modelada como quantidade filtrada menos reabsorvida mais secretada, no mesmo intervalo e unidade."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma substância tem 100 unidades filtradas por minuto, 70 reabsorvidas e 5 secretadas. Excreção = 100 − 70 + 5 = 35 unidades/min. Reabsorver devolve ao sangue; secretar transfere aos túbulos. Não some todas as etapas com o mesmo sinal."
      }
    ],
    "questions": [
      {
        "prompt": "A bile auxilia a digestão principalmente ao:",
        "options": [
          "Emulsificar gorduras.",
          "Hidrolisar proteínas por ação de uma enzima biliar.",
          "Absorver aminoácidos diretamente no fígado.",
          "Converter lipídios em glicose por digestão intestinal."
        ],
        "answer": 0,
        "explanation": "A emulsificação divide a gordura em gotículas, ampliando o contato com enzimas. Bile não é enzima."
      },
      {
        "prompt": "Uma artéria é definida por:",
        "options": [
          "Conter sempre sangue muito oxigenado.",
          "Levar sangue para fora do coração.",
          "Transportar apenas plasma.",
          "Estar sempre fora dos pulmões."
        ],
        "answer": 1,
        "explanation": "A definição depende do sentido do fluxo. A artéria pulmonar é um contraexemplo à ideia de que todas as artérias transportam sangue rico em oxigênio."
      },
      {
        "prompt": "A composição da urina difere do filtrado inicial porque ocorre:",
        "options": [
          "Apenas concentração passiva por armazenamento na bexiga.",
          "Retenção definitiva de todo o filtrado no interior dos rins.",
          "Reabsorção e secreção nos túbulos renais.",
          "Mistura do filtrado com bile antes de chegar à bexiga."
        ],
        "answer": 2,
        "explanation": "Ao longo dos túbulos, substâncias são reabsorvidas e secretadas. A filtração inicial não determina sozinha a urina final."
      },
      {
        "prompt": "As trocas gasosas alveolares ocorrem principalmente por:",
        "options": [
          "Transporte ativo de oxigênio pela parede alveolar como mecanismo principal.",
          "Osmose de oxigênio no mesmo sentido do fluxo de água.",
          "Difusão segundo gradientes de pressão parcial.",
          "Passagem de hemácias através da parede alveolar para captar ar."
        ],
        "answer": 2,
        "explanation": "Oxigênio e gás carbônico atravessam a superfície de troca de acordo com gradientes de pressão parcial; ventilação e circulação ajudam a manter os gradientes."
      },
      {
        "prompt": "Homeostase significa:",
        "options": [
          "Regulação dinâmica das condições internas.",
          "Temperatura absolutamente imutável em toda situação.",
          "Ausência de hormônios.",
          "Interrupção do metabolismo."
        ],
        "answer": 0,
        "explanation": "A manutenção ocorre por ajustes e respostas a desvios. Há variações dentro de limites, não imobilidade absoluta."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual característica do intestino delgado favorece a absorção?",
        "options": [
          "Ausência de contato com nutrientes.",
          "Parede totalmente impermeável.",
          "Produção de oxigênio por fotossíntese.",
          "Grande superfície de contato proporcionada por vilosidades e microvilosidades."
        ],
        "answer": 3,
        "explanation": "A ampliação de área facilita a transferência de nutrientes pelo epitélio."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] O oxigênio que entra no sangue nos pulmões é transportado principalmente como quê?",
        "options": [
          "Ligado à hemoglobina.",
          "Bolhas livres ocupando os vasos.",
          "Glicose armazenada no plasma.",
          "Bile dentro das artérias."
        ],
        "answer": 0,
        "explanation": "A maior parte liga-se à hemoglobina; uma parcela menor fica dissolvida no plasma."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um aumento da temperatura corporal provoca respostas que favorecem perda de calor. Que mecanismo exemplifica?",
        "options": [
          "Amplificação obrigatória do aquecimento.",
          "Retroalimentação negativa.",
          "Ausência de regulação.",
          "Conversão de calor em anticorpos."
        ],
        "answer": 1,
        "explanation": "A resposta se opõe ao desvio térmico, contribuindo para a regulação."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] No rim, reabsorção tubular transfere substâncias em que sentido?",
        "options": [
          "Do sangue para o interior do túbulo apenas.",
          "Do pulmão para o intestino.",
          "Do túbulo renal de volta ao sangue.",
          "Da urina final para o meio externo."
        ],
        "answer": 2,
        "explanation": "Reabsorção recupera substâncias do filtrado; secreção tem sentido oposto no modelo tubular."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Em um modelo renal, entram no filtrado 120 mg/min de uma substância. Reabsorvem-se 75% dessa quantidade, e secretam-se mais 10 mg/min a partir do sangue. Sem outras trocas, qual é a excreção?",
        "options": [
          "30 mg/min.",
          "100 mg/min.",
          "130 mg/min.",
          "40 mg/min."
        ],
        "answer": 3,
        "explanation": "Reabsorção = 0,75 × 120 = 90 mg/min. Restam 30; a secreção acrescenta 10, totalizando 40 mg/min. A porcentagem é aplicada ao filtrado informado, e os sentidos dos transportes definem os sinais."
      }
    ]
  },
  {
    "id": "microbiologia-imunidade",
    "area": "natureza",
    "title": "Microrganismos, imunidade e saneamento",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Diferencie grupos biológicos e conecte prevenção a mecanismos de transmissão.",
    "objectives": [
      "Comparar vírus e células",
      "Relacionar memória e resposta imune",
      "Interpretar saneamento e transmissão"
    ],
    "sections": [
      {
        "title": "Comparar vírus e células",
        "paragraphs": [
          "Bactérias são organismos celulares procariontes; vírus são estruturas acelulares cuja multiplicação depende de células hospedeiras. Fungos são eucariontes, e muitos são importantes decompositores. Não associe automaticamente microrganismo a doença: há participação em ciclos, alimentos e relações ecológicas.",
          "Antibióticos atuam em alvos bacterianos específicos e não tratam diretamente infecções virais. Uma questão pode explorar essa diferença estrutural. Nem toda bactéria responde ao mesmo composto e resistência não significa que a pessoa se tornou resistente ao medicamento."
        ],
        "example": "Uma substância que interfere na parede bacteriana não encontra esse mesmo alvo em um vírus."
      },
      {
        "title": "Relacionar memória e resposta imune",
        "paragraphs": [
          "A imunidade adaptativa envolve reconhecimento específico e pode produzir memória. Vacinação apresenta antígenos ou instruções para sua produção em condições controladas, preparando respostas posteriores. Não confunda ativação do sistema com fornecimento direto de anticorpos prontos.",
          "Soros com anticorpos oferecem imunização passiva, com ação temporária, sem a mesma formação de memória pela exposição vacinal. Essas distinções são conceituais para leitura de questões; decisões clínicas dependem de avaliação profissional e protocolos específicos."
        ],
        "example": "Em um exercício, a transferência de anticorpos já produzidos caracteriza imunização passiva; a produção pelo próprio organismo após estímulo caracteriza ativa."
      },
      {
        "title": "Interpretar saneamento e transmissão",
        "paragraphs": [
          "Para identificar prevenção, reconstrua o ciclo: agente, reservatório, via de saída, transmissão e entrada. Tratamento de água e esgoto interrompe diferentes elos de doenças de transmissão fecal-oral. Controle de vetores exige conhecer locais de reprodução e circulação.",
          "Não atribua toda ocorrência de doença à atitude individual. Infraestrutura, condições de moradia e políticas coletivas influenciam exposição. Uma medida só é pertinente se atuar em uma via compatível com o agente e seu ciclo."
        ],
        "example": "Impedir contaminação da água por esgoto reduz oportunidades de transmissão fecal-oral, enquanto eliminar água parada atua em certos ciclos com mosquitos."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "A distinção entre agente, via de transmissão e resposta imune evita escolher medidas apenas por associação de palavras. Memória adaptativa pode tornar uma resposta posterior mais rápida e intensa. Um experimento pode separar anticorpos recebidos prontos e anticorpos produzidos pelo organismo; a presença transitória dos primeiros não demonstra memória própria."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um grupo recebe antígeno e, depois, reage mais rapidamente a nova exposição; outro recebe apenas anticorpos prontos, que caem com o tempo. O primeiro padrão sustenta memória adaptativa; o segundo mostra proteção passiva transitória. A comparação é conceitual, não uma indicação clínica."
      }
    ],
    "questions": [
      {
        "prompt": "Vírus diferem de bactérias por:",
        "options": [
          "Apresentarem metabolismo celular independente do hospedeiro.",
          "Dependerem de células hospedeiras para multiplicação.",
          "Possuírem ribossomos próprios para produzir todas as proteínas virais.",
          "Possuírem parede de peptidoglicano como estrutura básica."
        ],
        "answer": 1,
        "explanation": "Vírus são acelulares e dependem de maquinaria celular. Bactérias são células procariontes com organização própria."
      },
      {
        "prompt": "O fornecimento de anticorpos prontos em um modelo de imunização corresponde a:",
        "options": [
          "Imunização ativa pela apresentação de antígeno.",
          "Formação de memória após produção própria de anticorpos.",
          "Imunização passiva.",
          "Resposta celular desencadeada apenas por reconhecimento de antígeno vacinal."
        ],
        "answer": 2,
        "explanation": "Os anticorpos vêm de outra fonte, caracterizando imunização passiva. Não equivale a estimular o próprio organismo da mesma forma que uma vacina."
      },
      {
        "prompt": "Água tratada e coleta de esgoto contribuem para reduzir:",
        "options": [
          "Transmissão fecal-oral.",
          "Transmissão hereditária de alterações cromossômicas.",
          "Transmissão por gotículas respiratórias como alvo direto principal.",
          "Transmissão por picada de vetor como mecanismo exclusivo."
        ],
        "answer": 0,
        "explanation": "As medidas reduzem contato com agentes presentes em material fecal. Não eliminam todas as doenças ou microrganismos."
      },
      {
        "prompt": "Qual estrutura é característica de uma bactéria em comparação com um vírus?",
        "options": [
          "Núcleo delimitado por membrana.",
          "Retículo endoplasmático rugoso.",
          "Mitocôndrias para respiração celular.",
          "Organização celular procarionte."
        ],
        "answer": 3,
        "explanation": "Bactérias são células procariontes, enquanto vírus são acelulares. Procariontes não têm núcleo delimitado por membrana."
      },
      {
        "prompt": "Uma estratégia de prevenção só pode ser associada corretamente a uma doença ao considerar:",
        "options": [
          "A semelhança dos sintomas, sem identificar a transmissão.",
          "O ciclo e a via de transmissão do agente.",
          "A eficácia de uma mesma medida contra uma doença de transmissão diferente.",
          "A frequência do nome da doença nos meios de comunicação."
        ],
        "answer": 1,
        "explanation": "Prevenção precisa atuar em mecanismos compatíveis com transmissão e exposição. Agentes e ciclos variam."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual afirmação evita associar microrganismo apenas a doença?",
        "options": [
          "Microrganismos também participam de decomposição e produção de alimentos.",
          "Toda bactéria causa doença humana.",
          "Todo fungo é um vírus.",
          "Nenhum microrganismo atua em ciclos naturais."
        ],
        "answer": 0,
        "explanation": "Há grande diversidade funcional; patogenicidade não define todos os microrganismos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma resposta específica mais rápida após nova exposição ao mesmo antígeno sugere quê?",
        "options": [
          "Ausência de reconhecimento.",
          "Memória imunológica.",
          "Transformação de vírus em bactérias.",
          "Imunidade sempre exclusivamente passiva."
        ],
        "answer": 1,
        "explanation": "A experiência imunológica anterior pode gerar células de memória que aceleram a resposta posterior."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual alvo de um composto explica ação direta sobre certas bactérias, mas não sobre vírus?",
        "options": [
          "Núcleo delimitado obrigatório de toda bactéria.",
          "Cloroplasto de todos os vírus.",
          "Estrutura bacteriana ausente nos vírus, como a parede de peptidoglicano.",
          "Parede de celulose de todo vírus."
        ],
        "answer": 2,
        "explanation": "Vírus não possuem organização celular bacteriana; alvos específicos ajudam a explicar diferenças de ação."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma doença é transmitida pela ingestão de água contaminada por fezes. Qual medida atua diretamente nessa via?",
        "options": [
          "Somente isolamento acústico de ruas.",
          "Aumento de iluminação noturna.",
          "Aplicação exclusiva de inseticida sem relação com o ciclo.",
          "Tratamento da água e manejo adequado do esgoto."
        ],
        "answer": 3,
        "explanation": "A medida interrompe contaminação e ingestão, elos do ciclo fecal-oral descrito."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Em um experimento, grupo A recebe antígeno e produz anticorpos; grupo B recebe anticorpos prontos, sem antígeno. Após desaparecimento dos anticorpos iniciais, ambos recebem o antígeno. A responde mais rápido. Qual interpretação é sustentada?",
        "options": [
          "A desenvolveu memória ativa; a proteção passiva inicial de B não demonstra formação dessa memória.",
          "B necessariamente tinha mais memória por receber anticorpos.",
          "A só tinha proteção passiva porque produziu anticorpos.",
          "A velocidade da resposta não tem relação possível com exposição anterior."
        ],
        "answer": 0,
        "explanation": "A produção própria após apresentação do antígeno e a resposta secundária acelerada são compatíveis com memória. Receber moléculas prontas oferece efeito transitório sem a mesma ativação por antígeno."
      }
    ]
  },
  {
    "id": "quimica-atomos-ligacoes",
    "area": "natureza",
    "title": "Átomos, ligações e propriedades dos materiais",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Use estrutura e interações para explicar condução, solubilidade e mudanças físicas.",
    "objectives": [
      "Ler composição atômica",
      "Relacionar ligação e mobilidade de cargas",
      "Explicar polaridade e interações"
    ],
    "sections": [
      {
        "title": "Ler composição atômica",
        "paragraphs": [
          "O número atômico Z é o número de prótons e identifica o elemento. O número de massa A soma prótons e nêutrons. Isótopos do mesmo elemento diferem em nêutrons. Íons surgem por perda ou ganho de elétrons em processos químicos, sem mudar o núcleo.",
          "Um cátion tem menos elétrons que prótons; um ânion tem mais. Não confunda carga elétrica com número de massa. Em cálculos introdutórios, elétrons têm contribuição desprezível para o número de massa, que conta partículas nucleares."
        ],
        "example": "Um átomo com 11 prótons e 12 nêutrons tem Z = 11 e A = 23. Perdendo um elétron, forma um cátion com 10 elétrons."
      },
      {
        "title": "Relacionar ligação e mobilidade de cargas",
        "paragraphs": [
          "Ligações iônicas se associam à atração entre íons; covalentes envolvem compartilhamento de elétrons; metálicas envolvem organização de cátions e elétrons deslocalizados no modelo introdutório. As propriedades dependem também da estrutura do material, não apenas de uma palavra de classificação.",
          "Um sólido iônico não costuma conduzir bem porque seus íons não estão livres para se deslocar. Fundido ou dissolvido, pode conduzir se houver íons móveis. Metais conduzem pela mobilidade eletrônica. Não conclua que todo líquido é condutor."
        ],
        "example": "Sal de cozinha sólido e solução aquosa de sal têm comportamentos distintos porque a mobilidade dos íons muda."
      },
      {
        "title": "Explicar polaridade e interações",
        "paragraphs": [
          "A polaridade molecular depende das ligações e da geometria. Moléculas com ligações polares podem ser apolares quando os efeitos se cancelam por simetria. Interações intermoleculares ajudam a explicar ebulição e solubilidade.",
          "“Semelhante dissolve semelhante” é uma orientação, não uma lei sem exceções: solubilidade depende das interações e das condições. Ligações de hidrogênio são interações particularmente relevantes em água e moléculas com grupos adequados. Na ebulição de água, não se quebra cada ligação covalente O–H."
        ],
        "example": "CO₂ tem ligações polares, mas sua geometria linear simétrica resulta em molécula apolar no modelo usual."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Carga do íon é a diferença entre prótons e elétrons, em unidades de carga elementar. Número de nêutrons é A − Z. Para comparar propriedades elétricas, identifique o portador móvel: elétrons em metais e íons em eletrólitos. Polaridade molecular depende da geometria e da soma das polaridades das ligações, não apenas de quais elementos aparecem."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um íon tem A = 40, Z = 20 e carga +2. São 20 prótons, 20 nêutrons e 18 elétrons. Tirar dois elétrons altera a carga, mas não muda Z nem A; continua sendo o mesmo elemento."
      }
    ],
    "questions": [
      {
        "prompt": "Um átomo possui 17 prótons e 18 nêutrons. Seu número de massa é:",
        "options": [
          "17.",
          "18.",
          "35.",
          "1."
        ],
        "answer": 2,
        "explanation": "A = prótons + nêutrons = 17 + 18 = 35. O número atômico é 17."
      },
      {
        "prompt": "Uma solução de sal pode conduzir eletricidade por conter:",
        "options": [
          "Íons móveis.",
          "Elétrons deslocalizados como em um fio metálico, sem participação dos íons.",
          "Moléculas neutras que necessariamente transportam carga líquida.",
          "Íons rigidamente fixos numa rede cristalina intacta."
        ],
        "answer": 0,
        "explanation": "A condução requer portadores de carga móveis; em solução iônica, são os íons. No sólido, a mobilidade é muito menor."
      },
      {
        "prompt": "Na ebulição de água pura ocorre principalmente:",
        "options": [
          "Decomposição em hidrogênio e oxigênio.",
          "Vencimento de interações entre moléculas.",
          "Rompimento obrigatório das ligações O–H de todas as moléculas.",
          "Ionização completa da água sem mudança de estado físico."
        ],
        "answer": 1,
        "explanation": "A vaporização é mudança física: moléculas de água permanecem, mas se afastam ao vencer interações intermoleculares."
      },
      {
        "prompt": "Um átomo neutro com 12 prótons perde dois elétrons. O íon formado tem:",
        "options": [
          "14 elétrons e carga −2.",
          "12 elétrons e carga zero.",
          "10 elétrons e carga +2.",
          "10 prótons e carga zero."
        ],
        "answer": 2,
        "explanation": "A perda de elétrons não altera os 12 prótons. Restam 10 elétrons, com excesso de duas cargas positivas."
      },
      {
        "prompt": "Isótopos de um mesmo elemento possuem:",
        "options": [
          "Mesmo número de prótons e diferentes números de nêutrons.",
          "Diferentes números de prótons sempre.",
          "Mesmo número de massa obrigatoriamente.",
          "Ausência de elétrons obrigatoriamente."
        ],
        "answer": 0,
        "explanation": "O número de prótons identifica o elemento. A diferença de nêutrons altera o número de massa, caracterizando isótopos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um íon tem 8 prótons e 10 elétrons. Qual é sua carga?",
        "options": [
          "+2.",
          "−2.",
          "0.",
          "−18."
        ],
        "answer": 1,
        "explanation": "Carga = prótons − elétrons = 8 − 10 = −2."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um núcleo tem A = 23 e Z = 11. Quantos nêutrons possui?",
        "options": [
          "11.",
          "23.",
          "12.",
          "34."
        ],
        "answer": 2,
        "explanation": "A = prótons + nêutrons, portanto n = 23 − 11 = 12."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Por que um metal sólido pode conduzir eletricidade?",
        "options": [
          "Todos os núcleos percorrem o fio livremente.",
          "Só conduz se virar gás.",
          "Não possui cargas elétricas.",
          "Possui elétrons deslocalizados com mobilidade."
        ],
        "answer": 3,
        "explanation": "No modelo metálico, elétrons móveis transportam carga, enquanto a estrutura dos núcleos permanece organizada."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma molécula linear simétrica possui duas ligações polares iguais e opostas. Qual conclusão é coerente?",
        "options": [
          "A molécula pode ser apolar pelo cancelamento das polaridades.",
          "Toda ligação polar torna a molécula obrigatoriamente polar.",
          "A simetria altera o número atômico.",
          "A molécula passa a ser um íon por geometria."
        ],
        "answer": 0,
        "explanation": "A polaridade resultante depende da soma vetorial das contribuições, que nesse caso podem se cancelar."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Dois íons X²⁺ e Y⁻ têm 18 elétrons cada. Seus números de massa são 40 e 37. Quais são, respectivamente, os números de prótons e nêutrons de X e de Y?",
        "options": [
          "X: 16 e 24; Y: 19 e 18.",
          "X: 20 e 20; Y: 17 e 20.",
          "X: 18 e 22; Y: 18 e 19.",
          "X: 20 e 18; Y: 17 e 18."
        ],
        "answer": 1,
        "explanation": "X²⁺ perdeu dois elétrons: Z = 18 + 2 = 20 e n = 40 − 20 = 20. Y⁻ ganhou um: Z = 18 − 1 = 17 e n = 37 − 17 = 20. Igual número de elétrons não implica mesmo elemento."
      }
    ]
  },
  {
    "id": "estequiometria-solucoes",
    "area": "natureza",
    "title": "Estequiometria, soluções e diluição",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Converta massas, quantidades e volumes com equações balanceadas e unidades consistentes.",
    "objectives": [
      "Passar da equação para a quantidade",
      "Identificar limitante e rendimento",
      "Calcular concentração e diluição"
    ],
    "sections": [
      {
        "title": "Passar da equação para a quantidade",
        "paragraphs": [
          "Balancear uma reação ajusta coeficientes para conservar átomos. Não altere índices das fórmulas para obter igualdade, pois isso mudaria as substâncias. Coeficientes fornecem proporções entre quantidades de matéria, medidas em mol.",
          "Use n = m/M, em que m é massa e M é massa molar. Em seguida aplique a razão da equação. Massas iguais de substâncias diferentes não contêm necessariamente a mesma quantidade de matéria, porque as massas molares podem diferir."
        ],
        "example": "Em 2 H₂ + O₂ → 2 H₂O, 2 mol de H₂ reagem com 1 mol de O₂ e podem formar 2 mol de H₂O, se a reação for completa."
      },
      {
        "title": "Identificar limitante e rendimento",
        "paragraphs": [
          "Quando há mais de um reagente com quantidades informadas, compare o que cada um poderia produzir. O reagente que permitir a menor produção é limitante. O outro pode sobrar. Não aplique a proporção a um único reagente ignorando a quantidade insuficiente do outro.",
          "Rendimento é a razão entre quantidade obtida e quantidade teórica, multiplicada por 100%. A previsão teórica parte de hipóteses como reagentes disponíveis, pureza e reação considerada. Se houver impurezas, use primeiro a massa efetiva do reagente."
        ],
        "example": "Uma reação prevê 20 g de produto e fornece 16 g: rendimento = 16/20 × 100 = 80%."
      },
      {
        "title": "Calcular concentração e diluição",
        "paragraphs": [
          "Concentração em massa pode ser calculada por C = m/V, com unidades como g/L. Concentração molar usa quantidade de matéria por volume, em mol/L. Sempre confirme se o volume é da solução final, não apenas do solvente adicionado.",
          "Na diluição sem reação ou perda de soluto, sua quantidade permanece constante: C₁V₁ = C₂V₂ para a mesma forma de concentração. Adicionar solvente reduz concentração; não reduz a massa de soluto. Verifique se os volumes estão na mesma unidade."
        ],
        "example": "100 mL de solução a 20 g/L diluídos até 400 mL resultam em 5 g/L, pois 20 × 100 = C₂ × 400."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Combine pureza, proporção química e rendimento em etapas. A massa ativa é a massa da amostra vezes a fração de pureza. Depois compare reagentes pela quantidade em mol dividida pelo coeficiente; o menor quociente limita a reação. Aplique rendimento à produção teórica obtida, e não diretamente à massa total da amostra impura."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: 50 g de amostra com 80% de reagente contêm 40 g ativos. Se M = 20 g/mol, são 2 mol. Uma reação 1:1 que produz composto de M = 30 g/mol pode gerar 60 g teóricos; a 75% de rendimento, obtêm-se 45 g."
      }
    ],
    "questions": [
      {
        "prompt": "Dissolvem-se 12 g de soluto até completar 0,5 L de solução. A concentração é:",
        "options": [
          "6 g/L.",
          "24 g/L.",
          "12 g/L.",
          "0,5 g/L."
        ],
        "answer": 1,
        "explanation": "C = 12/0,5 = 24 g/L. Dividir por meio litro dobra o valor numérico em relação a 1 L."
      },
      {
        "prompt": "Uma reação tem produção teórica de 50 g e fornece 40 g. O rendimento é:",
        "options": [
          "20%.",
          "40%.",
          "80%.",
          "125%."
        ],
        "answer": 2,
        "explanation": "Rendimento = 40/50 × 100 = 80%. A razão deve ser real sobre teórico, e não invertida."
      },
      {
        "prompt": "200 mL de solução a 10 g/L são diluídos até 500 mL. A nova concentração é:",
        "options": [
          "4 g/L.",
          "25 g/L.",
          "10 g/L.",
          "2 g/L."
        ],
        "answer": 0,
        "explanation": "10 × 200 = C₂ × 500; C₂ = 4 g/L. A massa de soluto permanece 2 g, enquanto o volume aumenta."
      },
      {
        "prompt": "Na reação 2 H₂ + O₂ → 2 H₂O, 4 mol de H₂ e 1 mol de O₂ podem formar no máximo:",
        "options": [
          "4 mol de água.",
          "1 mol de água.",
          "8 mol de água.",
          "2 mol de água."
        ],
        "answer": 3,
        "explanation": "O O₂ é limitante: 1 mol reage com 2 mol de H₂ e gera 2 mol de H₂O. Sobram 2 mol de H₂."
      },
      {
        "prompt": "Uma amostra de 36 g de água, com massa molar 18 g/mol, contém:",
        "options": [
          "0,5 mol.",
          "2 mol.",
          "18 mol.",
          "648 mol."
        ],
        "answer": 1,
        "explanation": "n = m/M = 36/18 = 2 mol. A unidade g se cancela com g/mol."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma solução contém 0,5 mol de soluto em volume final de 2 L. Qual é a concentração molar?",
        "options": [
          "1 mol/L.",
          "4 mol/L.",
          "0,25 mol/L.",
          "2,5 mol/L."
        ],
        "answer": 2,
        "explanation": "c = n/V = 0,5/2 = 0,25 mol/L."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma amostra de 80 g tem pureza de 75%. Qual massa do reagente está presente?",
        "options": [
          "75 g.",
          "20 g.",
          "106,7 g.",
          "60 g."
        ],
        "answer": 3,
        "explanation": "Massa ativa = 80 × 0,75 = 60 g."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Na reação N₂ + 3 H₂ → 2 NH₃, 2 mol de N₂ e 3 mol de H₂ produzem no máximo quanto NH₃?",
        "options": [
          "2 mol.",
          "4 mol.",
          "6 mol.",
          "1 mol."
        ],
        "answer": 0,
        "explanation": "H₂ limita: 3 mol de H₂ reagem com 1 mol de N₂ para produzir 2 mol de NH₃; sobra 1 mol de N₂."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Misturam-se, sem reação, 100 mL a 20 g/L e 300 mL a 4 g/L do mesmo soluto. Volumes aditivos. Qual concentração final?",
        "options": [
          "12 g/L.",
          "8 g/L.",
          "6 g/L.",
          "24 g/L."
        ],
        "answer": 1,
        "explanation": "Massas: 0,1 × 20 = 2 g e 0,3 × 4 = 1,2 g. Total 3,2 g em 0,4 L: 8 g/L."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Na reação CaCO₃ → CaO + CO₂, uma amostra de 125 g tem 80% de CaCO₃. Com massas molares de 100 g/mol para CaCO₃ e 44 g/mol para CO₂, e rendimento de 75%, quanto CO₂ é obtido?",
        "options": [
          "44 g.",
          "41,25 g.",
          "33 g.",
          "75 g."
        ],
        "answer": 2,
        "explanation": "A massa ativa é 125 × 0,8 = 100 g = 1 mol. A razão é 1:1, logo 44 g de CO₂ teóricos. Aplicando 75%: 44 × 0,75 = 33 g. Impureza e rendimento atuam em etapas diferentes."
      }
    ]
  },
  {
    "id": "acidos-equilibrio",
    "area": "natureza",
    "title": "Ácidos, bases e equilíbrio químico",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Interprete pH, neutralização e deslocamentos de equilíbrio com condições bem definidas.",
    "objectives": [
      "Relacionar pH e concentração",
      "Entender neutralização sem atalhos",
      "Interpretar equilíbrio dinâmico"
    ],
    "sections": [
      {
        "title": "Relacionar pH e concentração",
        "paragraphs": [
          "No modelo escolar para soluções aquosas diluídas, pH = −log[H⁺]. Uma diferença de uma unidade corresponde a fator dez na concentração de H⁺, não a uma diferença linear. Solução de pH 3 tem concentração de H⁺ cem vezes maior que uma de pH 5.",
          "A 25 °C, neutralidade corresponde aproximadamente a pH 7; o valor neutro varia com a temperatura. Força ácida e concentração são conceitos distintos: força envolve extensão da ionização, enquanto concentração expressa quantidade por volume."
        ],
        "example": "Se [H⁺] = 10⁻⁴ mol/L, o pH calculado no modelo introdutório é 4."
      },
      {
        "title": "Entender neutralização sem atalhos",
        "paragraphs": [
          "Na neutralização entre ácido e base, as proporções dependem da equação. Para HCl e NaOH, a razão é 1:1 em mol. Volumes iguais não garantem neutralização se as concentrações diferirem. Use quantidade de matéria e coeficientes.",
          "O pH final também depende da natureza das espécies e de eventuais excessos. Não afirme que toda mistura de ácido e base termina em pH 7. Indicadores mudam de cor em faixas de pH e não medem diretamente a quantidade total de ácido."
        ],
        "example": "10 mL de HCl 0,1 mol/L contêm 0,001 mol; exigem 10 mL de NaOH 0,1 mol/L na reação 1:1."
      },
      {
        "title": "Interpretar equilíbrio dinâmico",
        "paragraphs": [
          "Em equilíbrio químico, as velocidades direta e inversa são iguais e as concentrações macroscópicas permanecem constantes nas condições mantidas. Não significa que as reações pararam nem que reagentes e produtos tenham concentrações iguais.",
          "Alterar concentração, pressão ou temperatura pode mudar a composição de equilíbrio. Um catalisador acelera a aproximação do equilíbrio sem alterar sua composição final nas mesmas condições. A temperatura pode alterar a constante; catalisador não altera a constante de equilíbrio."
        ],
        "example": "Em uma reação gasosa idealizada com menos mols gasosos nos produtos, elevar a pressão por redução de volume pode favorecer os produtos a temperatura constante."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Em neutralização de ácido forte monoprótico com base forte monobásica, compare mols de H⁺ e OH⁻ antes de calcular a concentração excedente no volume final. No modelo diluído a 25 °C, pH + pOH = 14. Para perturbações de equilíbrio, raciocine sobre a reação que consome o acréscimo; catalisador não muda a constante nem a composição final nas mesmas condições."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: 10 mL de HCl 0,1 mol/L fornecem 0,001 mol de H⁺. Se a base fornece 0,0005 mol de OH⁻, sobra 0,0005 mol de H⁺. Divida pelo volume final em litros; não calcule pH pela média dos pH iniciais."
      }
    ],
    "questions": [
      {
        "prompt": "Uma solução de pH 3, comparada a outra de pH 5, tem [H⁺]:",
        "options": [
          "Duas vezes maior.",
          "Duas vezes menor.",
          "Cem vezes maior.",
          "Igual."
        ],
        "answer": 2,
        "explanation": "A diferença de duas unidades corresponde a 10² = 100 na concentração de H⁺. Menor pH significa maior [H⁺] nesse modelo."
      },
      {
        "prompt": "No equilíbrio químico dinâmico:",
        "options": [
          "As velocidades direta e inversa são iguais.",
          "Todas as moléculas param.",
          "As concentrações de todas as espécies são iguais.",
          "Nenhum produto está presente."
        ],
        "answer": 0,
        "explanation": "A igualdade de velocidades mantém concentrações constantes, que não precisam ser iguais entre si. Reações continuam ocorrendo."
      },
      {
        "prompt": "Um catalisador, nas mesmas condições de temperatura, altera principalmente:",
        "options": [
          "A constante de equilíbrio.",
          "A rapidez para atingir o equilíbrio.",
          "A massa total do sistema fechado.",
          "A identidade de todos os elementos."
        ],
        "answer": 1,
        "explanation": "Ele oferece caminho com menor barreira energética e acelera os dois sentidos. Não desloca a composição de equilíbrio nem muda sua constante."
      },
      {
        "prompt": "No modelo pH = −log[H⁺], [H⁺] = 10⁻⁶ mol/L corresponde a:",
        "options": [
          "pH −6.",
          "pH 10.",
          "pH 6.",
          "pH 1."
        ],
        "answer": 2,
        "explanation": "log₁₀(10⁻⁶) = −6. O sinal negativo na definição produz pH = 6."
      },
      {
        "prompt": "Misturar volumes iguais de ácido e base garante pH 7?",
        "options": [
          "Não; concentrações, proporções e espécies precisam ser consideradas.",
          "Sim, sempre.",
          "Sim, independentemente das quantidades.",
          "Não, porque neutralização nunca ocorre."
        ],
        "answer": 0,
        "explanation": "Volumes iguais podem conter quantidades diferentes. Além de excessos, a natureza do sal e a temperatura influenciam o pH final."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] No modelo diluído a 25 °C, uma solução tem pOH 3. Qual é seu pH?",
        "options": [
          "3.",
          "7.",
          "17.",
          "11."
        ],
        "answer": 3,
        "explanation": "pH + pOH = 14, então pH = 14 − 3 = 11."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Diluir dez vezes uma solução idealizada de ácido forte, inicialmente com pH 2, resulta aproximadamente em quê, desprezando autoionização da água?",
        "options": [
          "pH 3.",
          "pH 20.",
          "pH 1.",
          "pH 2."
        ],
        "answer": 0,
        "explanation": "A concentração cai de 10⁻² para 10⁻³ mol/L; o pH aumenta uma unidade."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Em A ⇌ B, acrescenta-se A mantendo temperatura. Qual tendência de resposta consome parte do acréscimo?",
        "options": [
          "Parada definitiva das duas reações.",
          "Maior formação de B até novo equilíbrio.",
          "Desaparecimento obrigatório de todo A.",
          "Mudança obrigatória da constante por adição de A."
        ],
        "answer": 1,
        "explanation": "O sistema tende a consumir parte do reagente acrescentado, sem exigir conversão total; a constante depende da temperatura."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Ácido forte diluído e ácido fraco concentrado diferem em que conceitos?",
        "options": [
          "Forte significa sempre mais concentrado.",
          "Fraco significa ausência total de íons.",
          "Força descreve extensão da ionização; concentração descreve quantidade por volume.",
          "Concentração depende só do nome do ácido."
        ],
        "answer": 2,
        "explanation": "São eixos distintos de descrição; não é possível substituir um pelo outro."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Misturam-se 100 mL de HCl 0,10 mol/L e 50 mL de NaOH 0,10 mol/L. Suponha dissociação completa, volumes aditivos e comportamento ideal. Com log₁₀ 3 ≈ 0,477, qual é o pH final?",
        "options": [
          "7.",
          "Aproximadamente 12,523.",
          "2.",
          "Aproximadamente 1,477."
        ],
        "answer": 3,
        "explanation": "H⁺ inicial = 0,010 mol e OH⁻ = 0,005 mol. Sobram 0,005 mol de H⁺ em 0,150 L: [H⁺] = 1/30 mol/L. pH = log₁₀ 30 = 1 + log₁₀ 3 ≈ 1,477. Não há equivalência apesar da mesma concentração inicial."
      }
    ]
  },
  {
    "id": "organica-energia",
    "area": "natureza",
    "title": "Química orgânica, combustíveis e polímeros",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Reconheça grupos funcionais e relacione estruturas, energia e uso de materiais.",
    "objectives": [
      "Identificar funções pela estrutura",
      "Relacionar combustão e transformação energética",
      "Entender polímeros e ciclo de uso"
    ],
    "sections": [
      {
        "title": "Identificar funções pela estrutura",
        "paragraphs": [
          "Compostos orgânicos apresentam estruturas de carbono variadas. Álcool contém hidroxila ligada a carbono saturado; ácido carboxílico apresenta o grupo carboxila; éster combina a estrutura característica R–COO–R′. Uma fórmula molecular sozinha pode não indicar uma única função.",
          "Isomeria ocorre quando a mesma fórmula molecular corresponde a estruturas diferentes. As propriedades dependem das conexões e da organização espacial, não apenas da contagem de átomos. Procure o grupo funcional desenhado antes de decidir o nome."
        ],
        "example": "Etanol, CH₃CH₂OH, e dimetil éter, CH₃OCH₃, têm fórmula C₂H₆O e funções diferentes."
      },
      {
        "title": "Relacionar combustão e transformação energética",
        "paragraphs": [
          "Combustão completa de hidrocarbonetos em condições adequadas produz principalmente CO₂ e água. Com disponibilidade insuficiente de oxigênio, pode ocorrer combustão incompleta com formação de CO e fuligem. Balanceie átomos antes de comparar consumo de combustível.",
          "Reações exotérmicas transferem energia ao entorno; sua variação de entalpia é negativa na convenção usual. Romper ligações exige energia e formar ligações libera energia. O saldo da reação depende de ambos os processos, não da ideia incorreta de que toda quebra libera energia."
        ],
        "example": "Na combustão completa do metano: CH₄ + 2 O₂ → CO₂ + 2 H₂O. O balanço conserva um C, quatro H e quatro O."
      },
      {
        "title": "Entender polímeros e ciclo de uso",
        "paragraphs": [
          "Polímeros são macromoléculas formadas por unidades repetidas. Propriedades dependem do monômero, das ligações, do comprimento e da organização das cadeias. Materiais poliméricos não são todos iguais e sua reciclagem depende de identificação, coleta e processamento.",
          "Biodegradável significa suscetível à degradação biológica em condições específicas, não desaparecimento imediato em qualquer ambiente. Origem renovável e biodegradabilidade são propriedades diferentes. Avaliar impacto requer considerar produção, uso, transporte e destino."
        ],
        "example": "Um plástico de matéria-prima renovável pode não se degradar rapidamente no mar; a origem não determina sozinha o destino ambiental."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Identifique funções por grupos estruturais: álcool tem –OH em carbono saturado, ácido carboxílico tem –COOH, éster tem –COO– entre grupos orgânicos. Em combustão, conte carbono para CO₂ e hidrogênio para água antes de ajustar O₂. Para energia de ligação, ΔH aproximado = energia de ligações rompidas − energia liberada na formação; o sinal indica o saldo."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: C₂H₆ + (7/2)O₂ → 2CO₂ + 3H₂O. Dois carbonos exigem 2CO₂ e seis hidrogênios exigem 3H₂O; os produtos somam sete átomos de oxigênio, daí 3,5O₂. Multiplicar tudo por dois dá coeficientes inteiros."
      }
    ],
    "questions": [
      {
        "prompt": "CH₃CH₂OH apresenta a função:",
        "options": [
          "Ácido carboxílico.",
          "Álcool.",
          "Éster.",
          "Cetona."
        ],
        "answer": 1,
        "explanation": "A hidroxila está ligada a carbono saturado, caracterizando álcool. Não há grupo carboxila nem carbonila nessa estrutura."
      },
      {
        "prompt": "Sobre as ligações químicas em uma reação, é correto afirmar:",
        "options": [
          "Toda quebra libera energia.",
          "Toda formação absorve energia.",
          "Romper exige energia; formar libera, e o saldo depende do conjunto.",
          "Reações não envolvem energia."
        ],
        "answer": 2,
        "explanation": "A energia líquida depende da energia necessária para romper ligações e da liberada ao formar outras. Isso explica reações exo e endotérmicas."
      },
      {
        "prompt": "Um material ser de origem renovável garante biodegradação rápida em qualquer local?",
        "options": [
          "Não; são propriedades distintas e dependentes das condições.",
          "Sim; a origem da matéria-prima determina sozinha a velocidade de degradação.",
          "Sim; todo polímero renovável se dissolve imediatamente na água.",
          "Sim; a origem renovável dispensa microrganismos e condições de degradação."
        ],
        "answer": 0,
        "explanation": "Origem da matéria-prima e capacidade de biodegradação são critérios diferentes. O ambiente e as características do polímero importam."
      },
      {
        "prompt": "Na combustão completa de 1 mol de CH₄, a equação balanceada exige:",
        "options": [
          "1 mol de O₂.",
          "4 mol de O₂.",
          "0,5 mol de O₂.",
          "2 mol de O₂."
        ],
        "answer": 3,
        "explanation": "CH₄ + 2 O₂ → CO₂ + 2 H₂O. São necessários quatro átomos de oxigênio, equivalentes a duas moléculas ou dois mols de O₂ por mol de metano."
      },
      {
        "prompt": "Etanol e dimetil éter possuem fórmula C₂H₆O e estruturas diferentes. Isso exemplifica:",
        "options": [
          "Identidade de todas as propriedades.",
          "Isomeria.",
          "Diferença de fórmula molecular com a mesma estrutura.",
          "Mudança de estado físico sem alteração das conexões atômicas."
        ],
        "answer": 1,
        "explanation": "A mesma fórmula molecular com diferentes estruturas caracteriza isomeria; nesse caso, as funções também diferem."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual grupo identifica um ácido carboxílico?",
        "options": [
          "–COOH.",
          "–OH ligado apenas a carbono saturado.",
          "Ligação C=C isolada.",
          "Apenas ligações C–H."
        ],
        "answer": 0,
        "explanation": "A carboxila reúne C=O e –OH no mesmo carbono; uma hidroxila isolada não basta."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Na combustão completa de 1 mol de C₂H₆, quantos mols de CO₂ são produzidos?",
        "options": [
          "1 mol.",
          "2 mol.",
          "3 mol.",
          "6 mol."
        ],
        "answer": 1,
        "explanation": "Cada molécula tem dois carbonos; conservando átomos, forma 2CO₂ por C₂H₆."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma reação tem ΔH = −150 kJ/mol. Qual interpretação é correta?",
        "options": [
          "Absorve necessariamente 150 kJ/mol do entorno.",
          "Não envolve transformação energética.",
          "Transfere energia ao entorno no processo definido.",
          "Toda ligação rompida liberou energia."
        ],
        "answer": 2,
        "explanation": "Sinal negativo corresponde a reação exotérmica; o saldo inclui gasto para romper e liberação ao formar ligações."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Por que “biodegradável” não garante desaparecimento rápido no oceano?",
        "options": [
          "Toda origem renovável impede degradação.",
          "Biodegradação ocorre sem interação com o ambiente.",
          "Todo polímero tem composição idêntica.",
          "A degradação depende de condições e organismos adequados."
        ],
        "answer": 3,
        "explanation": "Temperatura, umidade, microrganismos e estrutura influenciam a degradação; a designação não elimina essas condições."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Para CH₄ + 2O₂ → CO₂ + 2H₂O, use energias médias: C–H = 410, O=O = 500, C=O no CO₂ = 800 e O–H = 460 kJ/mol de ligações. Qual é o ΔH aproximado por mol de CH₄?",
        "options": [
          "−800 kJ/mol.",
          "+800 kJ/mol.",
          "−1.640 kJ/mol.",
          "−3.440 kJ/mol."
        ],
        "answer": 0,
        "explanation": "Romper: 4 × 410 + 2 × 500 = 2.640. Formar: 2 × 800 + 4 × 460 = 3.440. ΔH ≈ 2.640 − 3.440 = −800 kJ/mol. Conte ligações, não apenas moléculas."
      }
    ]
  },
  {
    "id": "cinematica-forcas",
    "area": "natureza",
    "title": "Movimento, gráficos e leis de Newton",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Traduza situações físicas em grandezas, diagramas e relações quantitativas.",
    "objectives": [
      "Distinguir posição, deslocamento e velocidade",
      "Ler gráficos de movimento",
      "Relacionar forças e aceleração"
    ],
    "sections": [
      {
        "title": "Distinguir posição, deslocamento e velocidade",
        "paragraphs": [
          "Posição depende de um referencial. Deslocamento é diferença entre posições final e inicial; distância percorrida soma o comprimento do trajeto. Em um percurso de ida e volta ao mesmo ponto, o deslocamento é zero, mas a distância pode ser positiva.",
          "Velocidade média vetorial relaciona deslocamento e tempo. Rapidez média usa distância total e tempo. Em questões unidimensionais, observe o sinal da velocidade e a orientação do eixo. Converter km/h para m/s requer dividir por 3,6."
        ],
        "example": "Um carro a 72 km/h tem rapidez de 20 m/s. Em 5 s, com velocidade constante, percorre 100 m."
      },
      {
        "title": "Ler gráficos de movimento",
        "paragraphs": [
          "No gráfico posição × tempo, a inclinação corresponde à velocidade. Uma linha horizontal significa posição constante. No gráfico velocidade × tempo, a inclinação corresponde à aceleração e a área algébrica fornece deslocamento.",
          "Movimento acelerado não significa necessariamente velocidade positiva: aceleração e velocidade podem ter sinais diferentes. Se têm sentidos opostos, o módulo da velocidade pode diminuir até uma eventual inversão. Analise a situação em intervalos."
        ],
        "example": "Velocidade de 10 m/s mantida por 4 s produz área de 40 m no gráfico v × t, correspondente ao deslocamento."
      },
      {
        "title": "Relacionar forças e aceleração",
        "paragraphs": [
          "A força resultante é a soma vetorial das forças. Em massa constante, Fresultante = m a. Resultante nula implica velocidade constante, que pode ser zero ou não. Não é necessário manter força resultante para sustentar movimento uniforme sem resistências.",
          "Ação e reação atuam em corpos diferentes, têm mesma intensidade e sentidos opostos. Portanto não se anulam no diagrama de um único corpo. Peso e normal podem ter mesmo módulo em situações específicas, mas não formam par de ação e reação entre si."
        ],
        "example": "Para acelerar 3 kg a 2 m/s², a resultante deve ser 6 N. Uma força aplicada maior pode ser necessária se houver atrito contrário."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Para aceleração constante em uma dimensão, v = v₀ + at e Δs = v₀t + at²/2. Se a velocidade troca de sinal, a distância percorrida exige separar o trajeto no instante da inversão; o deslocamento continua sendo a soma algébrica. Em forças, escolha um corpo e um sentido positivo antes de somar vetores."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um móvel parte com v₀ = 6 m/s e a = −2 m/s². Para em 3 s. Até 5 s, desloca 6 × 5 − 5² = 5 m, mas percorre 9 m de ida e 4 m de volta, total 13 m. Distância e deslocamento respondem a perguntas distintas."
      }
    ],
    "questions": [
      {
        "prompt": "72 km/h equivalem a:",
        "options": [
          "10 m/s.",
          "15 m/s.",
          "20 m/s.",
          "72 m/s."
        ],
        "answer": 2,
        "explanation": "Divide-se por 3,6: 72/3,6 = 20 m/s. A conversão combina 1 km = 1.000 m e 1 h = 3.600 s."
      },
      {
        "prompt": "Uma massa de 4 kg sofre resultante de 12 N. A aceleração tem módulo:",
        "options": [
          "3 m/s².",
          "48 m/s².",
          "8 m/s².",
          "0,33 m/s²."
        ],
        "answer": 0,
        "explanation": "a = F/m = 12/4 = 3 m/s². A equação usa a força resultante, não uma força isolada sem considerar as demais."
      },
      {
        "prompt": "Força resultante nula permite:",
        "options": [
          "Apenas repouso.",
          "Repouso ou movimento retilíneo uniforme.",
          "Aceleração obrigatoriamente crescente.",
          "Velocidade necessariamente nula."
        ],
        "answer": 1,
        "explanation": "Pela primeira lei, a velocidade vetorial permanece constante quando a resultante é nula. Essa constante pode ser zero ou diferente de zero."
      },
      {
        "prompt": "Uma pessoa caminha 30 m para leste e retorna 30 m para oeste. Seu deslocamento final é:",
        "options": [
          "60 m para leste.",
          "30 m para oeste.",
          "Zero.",
          "60 m para oeste."
        ],
        "answer": 2,
        "explanation": "Ela retorna à posição inicial, então Δx = 0. A distância total percorrida é 60 m."
      },
      {
        "prompt": "Em um gráfico velocidade × tempo, a área algébrica sob a curva fornece:",
        "options": [
          "Deslocamento.",
          "Velocidade média sem considerar o intervalo de tempo.",
          "Variação de velocidade, qualquer que seja a duração.",
          "Aceleração diretamente."
        ],
        "answer": 0,
        "explanation": "A área integra velocidade ao longo do tempo, resultando em deslocamento. A inclinação, por sua vez, corresponde à aceleração."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um móvel passa de 4 para 16 m/s em 6 s com aceleração constante. Qual é a aceleração?",
        "options": [
          "3 m/s².",
          "2 m/s².",
          "12 m/s².",
          "20 m/s²."
        ],
        "answer": 1,
        "explanation": "a = (16 − 4)/6 = 2 m/s²."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um corpo de 5 kg recebe forças horizontais opostas de 30 N e 10 N. Qual o módulo da aceleração?",
        "options": [
          "8 m/s².",
          "6 m/s².",
          "4 m/s².",
          "2 m/s²."
        ],
        "answer": 2,
        "explanation": "Resultante = 30 − 10 = 20 N; a = 20/5 = 4 m/s²."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um gráfico v × t é uma reta de v = 0 a v = 12 m/s entre 0 e 4 s. Qual deslocamento ocorre?",
        "options": [
          "48 m.",
          "3 m.",
          "12 m.",
          "24 m."
        ],
        "answer": 3,
        "explanation": "A área triangular vale base × altura/2 = 4 × 12/2 = 24 m."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um livro pressiona uma mesa para baixo. Qual é a reação dessa interação?",
        "options": [
          "A mesa exerce força para cima sobre o livro.",
          "A Terra atrai o livro para baixo.",
          "O livro exerce seu peso sobre si próprio.",
          "A força da mesa atua apenas na Terra."
        ],
        "answer": 0,
        "explanation": "Ação e reação da interação livro-mesa têm corpos distintos; o peso pertence à interação gravitacional Terra-livro."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um móvel tem v₀ = 12 m/s e aceleração constante de −3 m/s² por 6 s em trajetória retilínea. Quais são o deslocamento e a distância percorrida?",
        "options": [
          "18 m e 18 m.",
          "18 m e 30 m.",
          "30 m e 30 m.",
          "−18 m e 30 m."
        ],
        "answer": 1,
        "explanation": "A inversão ocorre em 4 s. Deslocamento total = 12 × 6 − 1,5 × 36 = 18 m. Até parar percorre 24 m; nos 2 s seguintes volta 6 m. Distância = 24 + 6 = 30 m."
      }
    ]
  },
  {
    "id": "energia-hidrostatica",
    "area": "natureza",
    "title": "Energia mecânica, potência e fluidos",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Resolva problemas de transformação, eficiência, pressão e empuxo.",
    "objectives": [
      "Acompanhar a transformação de energia",
      "Diferenciar potência e rendimento",
      "Relacionar pressão, profundidade e empuxo"
    ],
    "sections": [
      {
        "title": "Acompanhar a transformação de energia",
        "paragraphs": [
          "Energia cinética é Ec = mv²/2 e potencial gravitacional próxima à superfície é Ep = mgh em um modelo com g constante. A altura depende de um nível de referência. Energia mecânica conserva-se quando o trabalho das forças não conservativas é nulo no sistema considerado.",
          "Atrito pode converter energia mecânica em energia interna. A energia total não deixa de existir, mas a parcela disponível como energia mecânica pode diminuir. Dobrar a velocidade quadruplica Ec, mantendo a massa."
        ],
        "example": "Um objeto de 2 kg a 3 m de altura, com g = 10 m/s², tem Ep = 60 J em relação ao nível escolhido."
      },
      {
        "title": "Diferenciar potência e rendimento",
        "paragraphs": [
          "Potência é energia transferida por intervalo de tempo: P = E/Δt. Um aparelho mais potente pode realizar a mesma transferência em menos tempo; não é obrigatório consumir mais energia em toda comparação se o tempo de uso mudar.",
          "Rendimento relaciona energia útil e energia recebida. Em uma máquina com perdas, a diferença pode aparecer como aquecimento, som e deformação. Use grandezas do mesmo tipo na razão e verifique se o resultado faz sentido entre zero e um, ou zero e cem por cento."
        ],
        "example": "Uma máquina recebe 500 J e fornece 350 J úteis: rendimento = 350/500 = 0,70 = 70%."
      },
      {
        "title": "Relacionar pressão, profundidade e empuxo",
        "paragraphs": [
          "Pressão é força normal por área. Em líquido em repouso e densidade constante, a diferença de pressão é Δp = ρgΔh. A pressão cresce com profundidade e não depende diretamente do formato do recipiente.",
          "Empuxo é a força resultante do fluido e tem módulo igual ao peso do fluido deslocado. Um corpo flutuando em equilíbrio tem empuxo igual ao peso; a fração submersa depende de densidades. Não confunda volume do objeto com volume deslocado quando ele está parcialmente submerso."
        ],
        "example": "Com água de 1.000 kg/m³ e g = 10 m/s², descer 2 m aumenta a pressão em 20.000 Pa."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Em uma descida, mgh pode converter-se em energia cinética e energia interna. Se uma fração da energia inicial é dissipada, aplique-a à energia antes de extrair a velocidade pela raiz. Em flutuação, ρ_objeto V_total g = ρ_fluido V_submerso g; a fração submersa é a razão de densidades, para objeto homogêneo e sem outras forças."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um objeto de densidade 600 kg/m³ flutua em água de 1.000 kg/m³. O equilíbrio exige V_sub/V_total = 600/1.000 = 0,60. Sessenta por cento do volume fica submerso; o empuxo não exige submersão total."
      }
    ],
    "questions": [
      {
        "prompt": "Mantida a massa, dobrar a velocidade altera a energia cinética por fator:",
        "options": [
          "2.",
          "4.",
          "1/2.",
          "8."
        ],
        "answer": 1,
        "explanation": "Ec depende de v²; (2v)² = 4v². O fator dois não se aplica diretamente à energia cinética."
      },
      {
        "prompt": "Uma máquina transforma 1.000 J recebidos em 600 J úteis. O rendimento é:",
        "options": [
          "40%.",
          "100%.",
          "60%.",
          "167%."
        ],
        "answer": 2,
        "explanation": "600/1.000 = 0,60 = 60%. Os 400 J restantes podem ser transferidos em formas não úteis à finalidade da máquina."
      },
      {
        "prompt": "Um corpo flutua em repouso sem outras forças verticais além de peso e empuxo. Então:",
        "options": [
          "Empuxo e peso têm módulos iguais.",
          "Empuxo é menor porque parte do objeto está fora da água.",
          "Empuxo é maior porque o objeto não afunda.",
          "Empuxo é igual ao peso do volume total do objeto preenchido pelo fluido, mesmo com submersão parcial."
        ],
        "answer": 0,
        "explanation": "O equilíbrio exige resultante vertical nula. O empuxo para cima equilibra o peso para baixo."
      },
      {
        "prompt": "Uma máquina transfere 900 J em 3 s. Sua potência média é:",
        "options": [
          "2.700 W.",
          "903 W.",
          "30 W.",
          "300 W."
        ],
        "answer": 3,
        "explanation": "P = E/Δt = 900/3 = 300 J/s = 300 W."
      },
      {
        "prompt": "Na água com ρ = 1.000 kg/m³ e g = 10 m/s², uma diferença de profundidade de 3 m produz diferença de pressão de:",
        "options": [
          "3.000 Pa.",
          "30.000 Pa.",
          "300 Pa.",
          "300.000 Pa."
        ],
        "answer": 1,
        "explanation": "Δp = ρgΔh = 1.000 × 10 × 3 = 30.000 Pa. É diferença de pressão, sem somar pressão atmosférica."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um corpo de 2 kg está a 5 m do nível de referência, com g = 10 m/s². Qual a energia potencial gravitacional?",
        "options": [
          "10 J.",
          "25 J.",
          "100 J.",
          "50 J."
        ],
        "answer": 2,
        "explanation": "Ep = mgh = 2 × 10 × 5 = 100 J."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma força normal de 200 N atua sobre 0,5 m². Qual é a pressão média?",
        "options": [
          "100 Pa.",
          "200 Pa.",
          "40 Pa.",
          "400 Pa."
        ],
        "answer": 3,
        "explanation": "p = F/A = 200/0,5 = 400 Pa."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um bloco homogêneo de densidade 800 kg/m³ flutua em água de 1.000 kg/m³, sem outras forças. Qual fração do volume fica submersa?",
        "options": [
          "80%.",
          "20%.",
          "125%.",
          "50%."
        ],
        "answer": 0,
        "explanation": "Equilibrando peso e empuxo, V_sub/V = ρ_bloco/ρ_água = 0,8."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um motor de potência útil constante de 500 W realiza 15.000 J de trabalho. Quanto tempo leva?",
        "options": [
          "7.500 s.",
          "30 s.",
          "3 s.",
          "300 s."
        ],
        "answer": 1,
        "explanation": "Δt = E/P = 15.000/500 = 30 s."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um carrinho parte do repouso a 20 m acima do ponto final. Na descida, dissipam-se 20% da energia potencial inicial. Com g = 10 m/s² e sem outras entradas de energia, qual velocidade final?",
        "options": [
          "20 m/s.",
          "16 m/s.",
          "8√5 m/s.",
          "4√5 m/s."
        ],
        "answer": 2,
        "explanation": "A energia cinética final é 0,8mgh. Logo v²/2 = 0,8 × 10 × 20 = 160; v² = 320 e v = 8√5 ≈ 17,9 m/s. Reduzir energia em 20% não reduz a velocidade pela mesma porcentagem."
      }
    ]
  },
  {
    "id": "eletricidade-consumo",
    "area": "natureza",
    "title": "Circuitos elétricos e consumo de energia",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Distinga corrente, tensão, resistência, potência e energia em exemplos domésticos.",
    "objectives": [
      "Aplicar relações com significado",
      "Comparar associações",
      "Calcular consumo e interpretar unidades"
    ],
    "sections": [
      {
        "title": "Aplicar relações com significado",
        "paragraphs": [
          "Corrente é fluxo de carga por tempo; tensão está associada à energia por carga. Para resistor ôhmico em condições constantes, U = RI. Resistência é medida em ohms e não deve ser confundida com potência.",
          "A potência elétrica pode ser P = UI; em resistores ôhmicos, também P = RI² ou U²/R. A escolha depende do que permanece constante. Dobrar resistência com tensão constante reduz potência pela metade; com corrente constante, dobra potência."
        ],
        "example": "Um resistor de 10 Ω sob 20 V conduz 2 A e dissipa 40 W."
      },
      {
        "title": "Comparar associações",
        "paragraphs": [
          "Em série, a corrente é a mesma nos componentes e as tensões se distribuem; resistências se somam. Em paralelo, os ramos compartilham a tensão e a corrente total é a soma das correntes dos ramos.",
          "Na instalação doméstica idealizada, aparelhos em paralelo podem funcionar de modo independente e receber a mesma tensão nominal. Não confunda isso com ausência de limites: fios e dispositivos de proteção são dimensionados para correntes e condições específicas."
        ],
        "example": "Dois resistores de 6 Ω em paralelo têm resistência equivalente de 3 Ω; em série, 12 Ω."
      },
      {
        "title": "Calcular consumo e interpretar unidades",
        "paragraphs": [
          "Energia elétrica consumida é E = PΔt. Em contas de energia, use potência em kW e tempo em horas para obter kWh. kWh é unidade de energia; kW é potência. Multiplique o consumo por uma tarifa dada para calcular custo em um exercício simplificado.",
          "Compare hábitos usando potência e duração juntos. Um equipamento de alta potência por poucos minutos pode consumir menos que outro de baixa potência ligado muitas horas. Etiquetas e condições reais podem acrescentar fatores não presentes no modelo."
        ],
        "example": "Um aparelho de 1.500 W usado por 2 h consome 1,5 kW × 2 h = 3 kWh."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Em circuitos mistos, calcule primeiro a associação interna e depois a resistência equivalente. A tensão do gerador se divide entre blocos em série; só dentro de um conjunto paralelo a tensão é comum. Para consumo em kWh, converta watts em kW e minutos em horas antes de multiplicar."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: dois resistores de 6 Ω em paralelo equivalem a 3 Ω. Em série com 2 Ω, o circuito tem 5 Ω. Sob 10 V, a corrente total é 2 A; o resistor de 2 Ω recebe 4 V e o paralelo recebe 6 V. Cada ramo de 6 Ω recebe 1 A."
      }
    ],
    "questions": [
      {
        "prompt": "Um aparelho de 2 kW funciona por 3 h. Consome:",
        "options": [
          "0,67 kWh.",
          "5 kWh.",
          "6 kWh.",
          "6 kW/h."
        ],
        "answer": 2,
        "explanation": "E = P × t = 2 × 3 = 6 kWh. kW/h não é a unidade pedida de energia."
      },
      {
        "prompt": "Um resistor ôhmico de 5 Ω sob 10 V conduz:",
        "options": [
          "2 A.",
          "50 A.",
          "0,5 A.",
          "15 A."
        ],
        "answer": 0,
        "explanation": "I = U/R = 10/5 = 2 A, nas condições em que vale o comportamento ôhmico."
      },
      {
        "prompt": "Dois resistores de 8 Ω em paralelo têm resistência equivalente de:",
        "options": [
          "16 Ω.",
          "4 Ω.",
          "8 Ω.",
          "64 Ω."
        ],
        "answer": 1,
        "explanation": "1/Req = 1/8 + 1/8 = 1/4. Em paralelo, a equivalente é menor que cada resistência positiva dos ramos."
      },
      {
        "prompt": "Um consumo de 4 kWh custa quanto à tarifa hipotética de R$ 0,80/kWh, sem outras cobranças?",
        "options": [
          "R$ 4,80.",
          "R$ 5,00.",
          "R$ 3,20.",
          "R$ 0,20."
        ],
        "answer": 2,
        "explanation": "Custo = 4 × 0,80 = R$ 3,20 no modelo simplificado indicado."
      },
      {
        "prompt": "Dois resistores de 3 Ω e 7 Ω em série têm resistência equivalente:",
        "options": [
          "10 Ω.",
          "21 Ω.",
          "2,1 Ω.",
          "4 Ω."
        ],
        "answer": 0,
        "explanation": "Em série, as resistências se somam: 3 + 7 = 10 Ω."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma corrente de 3 A atravessa resistor ôhmico de 4 Ω. Qual é a potência dissipada?",
        "options": [
          "12 W.",
          "48 W.",
          "9 W.",
          "36 W."
        ],
        "answer": 3,
        "explanation": "P = RI² = 4 × 3² = 36 W."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um aparelho de 1.500 W funciona por 20 min. Qual energia consome?",
        "options": [
          "0,5 kWh.",
          "30 kWh.",
          "500 kWh.",
          "0,05 kWh."
        ],
        "answer": 0,
        "explanation": "1.500 W = 1,5 kW e 20 min = 1/3 h; E = 1,5/3 = 0,5 kWh."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Mantida a tensão em resistor ôhmico, duplicar a resistência causa o quê na potência?",
        "options": [
          "Duplicação.",
          "Redução à metade.",
          "Quadruplicação.",
          "Nenhuma alteração."
        ],
        "answer": 1,
        "explanation": "P = U²/R; com U constante, potência é inversamente proporcional a R."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Dois resistores de 6 Ω e 3 Ω são ligados em paralelo sob 12 V. Qual é a corrente total?",
        "options": [
          "2 A.",
          "4 A.",
          "6 A.",
          "1,33 A."
        ],
        "answer": 2,
        "explanation": "As correntes são 12/6 = 2 A e 12/3 = 4 A; somam 6 A."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um resistor de 2 Ω está em série com dois resistores de 6 Ω em paralelo. Fonte ideal de 10 V. Qual energia dissipa um único resistor de 6 Ω em 5 min?",
        "options": [
          "0,003 kWh.",
          "0,001 kWh.",
          "0,005 kWh.",
          "0,0005 kWh."
        ],
        "answer": 3,
        "explanation": "O paralelo equivale a 3 Ω e o total a 5 Ω. Corrente total = 2 A; tensão no paralelo = 6 V. Cada ramo conduz 1 A e dissipa 6 W. Energia = 0,006 kW × (5/60) h = 0,0005 kWh."
      }
    ]
  },
  {
    "id": "ondas-calor-optica",
    "area": "natureza",
    "title": "Ondas, calor e óptica no cotidiano",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Conecte frequência, propagação, transferência térmica e formação de imagens.",
    "objectives": [
      "Relacionar frequência e propagação",
      "Distinguir calor e temperatura",
      "Interpretar reflexão e refração"
    ],
    "sections": [
      {
        "title": "Relacionar frequência e propagação",
        "paragraphs": [
          "Para uma onda periódica, v = λf: velocidade, comprimento de onda e frequência se relacionam. Em uma mudança de meio, a frequência é mantida pela fonte, enquanto velocidade e comprimento podem mudar. Som é onda mecânica e requer meio material; luz pode se propagar no vácuo.",
          "Altura sonora relaciona-se à frequência: som agudo tem frequência maior. Intensidade está associada à energia por área e tempo; não é sinônimo de altura. Timbre permite distinguir fontes com diferentes composições espectrais."
        ],
        "example": "Uma onda de 200 Hz com comprimento de 1,7 m tem velocidade de 340 m/s."
      },
      {
        "title": "Distinguir calor e temperatura",
        "paragraphs": [
          "Temperatura relaciona-se ao estado térmico; calor é transferência de energia devido a diferença de temperatura. Dois corpos na mesma temperatura podem ter energias internas diferentes por diferirem em massa e composição.",
          "Sem mudança de fase e com calor específico aproximadamente constante, Q = mcΔT. Durante uma transição idealizada de substância pura a pressão constante, energia pode ser transferida sem alterar a temperatura. Condução, convecção e radiação são mecanismos diferentes; radiação não precisa de meio material."
        ],
        "example": "Aquecer 100 g de água em 10 °C, usando c = 1 cal/(g·°C), requer 1.000 cal no modelo sem perdas."
      },
      {
        "title": "Interpretar reflexão e refração",
        "paragraphs": [
          "Na reflexão, o ângulo de incidência iguala o de reflexão, ambos medidos em relação à normal. Em espelho plano, a imagem é virtual e aparece à mesma distância atrás do espelho que o objeto está à frente.",
          "Na refração, a luz muda de velocidade ao atravessar meios; pode mudar de direção quando a incidência não é normal. Lentes convergentes não produzem sempre o mesmo tipo de imagem: a posição do objeto em relação ao foco importa. Faça um esquema antes de generalizar."
        ],
        "example": "Um objeto a 2 m de um espelho plano tem imagem a 2 m atrás dele; a separação objeto-imagem é 4 m."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Equilíbrio térmico em recipiente isolado exige soma das trocas de calor igual a zero, considerando massas, calores específicos e eventuais mudanças de fase. Ao atravessar um meio, a frequência de uma onda mantém-se ligada à fonte; mudanças de velocidade alteram o comprimento de onda. Para refração da luz, o índice n = c/v conecta índice e velocidade."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: misturam-se 100 g de água a 80 °C com 300 g a 20 °C, sem perdas nem mudança de fase. 100(T − 80) + 300(T − 20) = 0, pois o calor específico é o mesmo. Assim, T = 35 °C; a média simples das temperaturas seria inadequada para massas diferentes."
      }
    ],
    "questions": [
      {
        "prompt": "Som mais agudo tem maior:",
        "options": [
          "Intensidade, independentemente da frequência.",
          "Frequência.",
          "Amplitude, independentemente da frequência.",
          "Comprimento de onda no mesmo meio."
        ],
        "answer": 1,
        "explanation": "A altura sonora se relaciona à frequência. Intensidade e duração são outras propriedades; a velocidade depende do meio e das condições."
      },
      {
        "prompt": "Qual mecanismo pode transferir energia térmica através do vácuo?",
        "options": [
          "Convecção de ar.",
          "Condução em água.",
          "Radiação.",
          "Circulação de líquido."
        ],
        "answer": 2,
        "explanation": "A radiação eletromagnética não exige meio material. Condução e convecção precisam de matéria para seus mecanismos usuais."
      },
      {
        "prompt": "Um objeto está a 1,5 m de um espelho plano. A distância entre objeto e imagem é:",
        "options": [
          "3 m.",
          "1,5 m.",
          "0,75 m.",
          "6 m."
        ],
        "answer": 0,
        "explanation": "A imagem fica 1,5 m atrás do espelho, enquanto o objeto está 1,5 m à frente; a separação total é 3 m."
      },
      {
        "prompt": "Uma onda tem f = 50 Hz e λ = 2 m. Sua velocidade é:",
        "options": [
          "25 m/s.",
          "52 m/s.",
          "0,04 m/s.",
          "100 m/s."
        ],
        "answer": 3,
        "explanation": "v = λf = 2 × 50 = 100 m/s. Frequência em s⁻¹ e comprimento em m produzem m/s."
      },
      {
        "prompt": "Sem perdas, aquecer 200 g de água em 5 °C, com c = 1 cal/(g·°C), exige:",
        "options": [
          "40 cal.",
          "1.000 cal.",
          "200 cal.",
          "5.000 cal."
        ],
        "answer": 1,
        "explanation": "Q = mcΔT = 200 × 1 × 5 = 1.000 cal. A fórmula vale sem mudança de fase e nas hipóteses indicadas."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma onda passa para um meio onde sua velocidade cai à metade, mantendo frequência. O comprimento de onda faz o quê?",
        "options": [
          "Cai à metade.",
          "Dobra.",
          "Permanece igual.",
          "Quadruplica."
        ],
        "answer": 0,
        "explanation": "Como λ = v/f e f não muda, λ varia no mesmo fator de v."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma incidência faz 30° com a superfície de um espelho plano. Qual é o ângulo de reflexão medido com a normal?",
        "options": [
          "30°.",
          "60°.",
          "15°.",
          "90°."
        ],
        "answer": 1,
        "explanation": "A normal é perpendicular à superfície; incidência = 90° − 30° = 60°, igual à reflexão."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Dois objetos na mesma temperatura têm necessariamente a mesma energia interna?",
        "options": [
          "Sim; temperatura é energia total.",
          "Sim; qualquer objeto tem a mesma quantidade de partículas.",
          "Não; massa e composição também importam.",
          "Não; porque calor é uma substância armazenada."
        ],
        "answer": 2,
        "explanation": "Temperatura caracteriza estado térmico, sem determinar sozinha a energia interna de sistemas distintos."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Misturam-se 100 g de água a 80 °C com 300 g a 20 °C. Sem perdas nem mudança de fase, qual a temperatura final?",
        "options": [
          "50 °C.",
          "40 °C.",
          "65 °C.",
          "35 °C."
        ],
        "answer": 3,
        "explanation": "Com mesmo calor específico, T = (100 × 80 + 300 × 20)/400 = 35 °C."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um bloco de 200 g, calor específico 0,5 cal/(g·°C), a 80 °C é colocado em 100 g de água a 20 °C, com c = 1 cal/(g·°C). O recipiente isolado tem capacidade térmica 50 cal/°C e começa a 20 °C. Sem mudança de fase, qual a temperatura final?",
        "options": [
          "44 °C.",
          "50 °C.",
          "40 °C.",
          "60 °C."
        ],
        "answer": 0,
        "explanation": "Capacidade do bloco = 100 cal/°C; água + recipiente = 150 cal/°C. Equilíbrio: 100(80 − T) = 150(T − 20). Logo 11.000 = 250T e T = 44 °C. O recipiente também absorve energia e não pode ser ignorado."
      }
    ]
  },
  {
    "id": "coesao-argumentacao",
    "area": "linguagens",
    "title": "Coesão, coerência e argumentação",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Leia conectivos, relações lógicas e estratégias persuasivas sem confundir opinião com evidência.",
    "objectives": [
      "Reconhecer relações entre ideias",
      "Separar tese, argumento e exemplo",
      "Resolver retomadas e ambiguidades"
    ],
    "sections": [
      {
        "title": "Reconhecer relações entre ideias",
        "paragraphs": [
          "Coesão é a ligação linguística entre partes de um texto: pronomes retomam referentes, conectivos sinalizam relações e repetições podem manter um tema em foco. Coerência é a possibilidade de construir um sentido compatível com as informações e o contexto. Um texto pode ter muitos conectivos e ainda apresentar contradições.",
          "Conectivos não são etiquetas isoladas. “Como” pode expressar causa, comparação ou conformidade. Descubra a relação perguntando se a oração explica um motivo, aproxima situações ou indica uma referência. A troca de conectivo deve preservar essa relação, além da correção gramatical."
        ],
        "example": "“Embora chovesse, a feira ocorreu”: a chuva cria uma expectativa de cancelamento que não se realiza. Há concessão, não causa."
      },
      {
        "title": "Separar tese, argumento e exemplo",
        "paragraphs": [
          "A tese é a posição que se procura sustentar. Argumentos apresentam razões; exemplos tornam uma razão concreta, mas um caso isolado não comprova uma regra universal. Dados só sustentam a tese quando há vínculo pertinente entre a medida observada e a conclusão.",
          "Uma pesquisa sobre acesso a computadores não demonstra, sozinha, melhora na aprendizagem. É preciso analisar uso pedagógico, formação docente e condições da comparação. Em questões, rejeite alternativas que transformam correlação em causalidade ou extrapolam o alcance do texto."
        ],
        "example": "“A escola deve ampliar a biblioteca, pois a comunidade não dispõe de outro espaço de leitura”: a proposta é a tese; a falta de espaços é uma razão."
      },
      {
        "title": "Resolver retomadas e ambiguidades",
        "paragraphs": [
          "Para localizar o antecedente de um pronome, teste os candidatos próximos e confira número, gênero e sentido. A proximidade ajuda, mas não substitui a interpretação. Uma expressão como “essa medida” pode retomar uma ação inteira.",
          "Na revisão de um texto, substitua pronomes ambíguos por expressões específicas. Ao resolver uma questão, não acrescente informações ausentes para eliminar uma ambiguidade real. Observe também se a voz citada pertence ao autor ou a alguém mencionado."
        ],
        "example": "“A diretora conversou com a professora sobre sua turma” deixa incerta a referência de “sua”; “a turma da professora” elimina a ambiguidade."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Coesão conecta partes do texto por pronomes, elipses e conectivos; coerência depende de relações de sentido compatíveis com o contexto. Concessão admite uma informação que poderia enfraquecer a tese, mas não a impede. Refutar não é apenas discordar: é examinar uma razão ou evidência do argumento contrário. Diferencie condição necessária de suficiente e possibilidade de certeza."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “Embora o projeto tenha custo inicial alto, reduzirá despesas futuras”. O custo é admitido como obstáculo, não negado. A defesa apoia-se na economia posterior. Trocar “embora” por “porque” mudaria a relação argumentativa para causa."
      }
    ],
    "questions": [
      {
        "prompt": "“O ônibus atrasou; por isso, perdi a primeira aula.” O conectivo indica:",
        "options": [
          "Concessão.",
          "Consequência.",
          "Comparação.",
          "Alternância."
        ],
        "answer": 1,
        "explanation": "O atraso é apresentado como motivo para a perda da aula; “por isso” introduz seu resultado. Concessão exigiria uma expectativa contrariada."
      },
      {
        "prompt": "Um artigo afirma: “Devemos ampliar o transporte coletivo porque ele atende mais passageiros por veículo.” Qual trecho funciona como tese?",
        "options": [
          "A capacidade por veículo.",
          "A palavra “porque”.",
          "Devemos ampliar o transporte coletivo.",
          "O número exato de passageiros."
        ],
        "answer": 2,
        "explanation": "A tese é a posição defendida. A capacidade de transportar pessoas é a razão oferecida para sustentá-la; o texto não fornece um número exato."
      },
      {
        "prompt": "Uma pesquisa encontra associação entre leitura e notas altas. Qual conclusão respeita seu alcance?",
        "options": [
          "Ler é a única causa de notas altas.",
          "Toda pessoa que lê tem nota máxima.",
          "Notas altas impedem a leitura.",
          "Há associação; a causa exige investigação adicional."
        ],
        "answer": 3,
        "explanation": "Uma associação pode envolver outros fatores, como acesso a recursos e hábitos de estudo. Não autoriza exclusividade causal nem afirmações universais."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] “Ana entregou o livro a Bia porque ela o havia solicitado.” Sem contexto, qual problema pode ocorrer?",
        "options": [
          "Ausência de qualquer verbo.",
          "Contradição lógica obrigatória.",
          "Uso de uma conclusão numérica.",
          "Ambiguidade na referência de “ela”."
        ],
        "answer": 3,
        "explanation": "“Ela” pode retomar Ana ou Bia; a identificação exige contexto ou reescrita com nome explícito."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Embora chovesse, o evento ocorreu.” Qual relação é expressa?",
        "options": [
          "Concessão.",
          "Finalidade.",
          "Alternativa.",
          "Conclusão necessária."
        ],
        "answer": 0,
        "explanation": "A chuva poderia dificultar o evento, mas não impediu sua realização."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Economizou para comprar um computador.” O segmento iniciado por “para” apresenta quê?",
        "options": [
          "Consequência já comprovada.",
          "Finalidade.",
          "Condição suficiente para qualquer compra.",
          "Oposição entre ações."
        ],
        "answer": 1,
        "explanation": "Comprar o computador é o objetivo da economia; o texto não afirma que a compra já aconteceu."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual informação funciona como evidência mais diretamente pertinente à tese “a espera dos ônibus diminuiu”?",
        "options": [
          "A cor preferida dos passageiros.",
          "O número de lojas de roupas na cidade, sem relação demonstrada.",
          "Medições comparáveis do intervalo entre ônibus antes e depois.",
          "Uma foto isolada da pintura de um veículo."
        ],
        "answer": 2,
        "explanation": "A comparação temporal da variável discutida sustenta a tese com pertinência e método compatível."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um artigo admite uma objeção e mostra seus limites com dados. Isso pode fazer o quê?",
        "options": [
          "Eliminar a necessidade de conclusão.",
          "Provar que toda objeção é falsa por definição.",
          "Transformar argumentos em ordens.",
          "Fortalecer a tese por responder a contrapontos."
        ],
        "answer": 3,
        "explanation": "Considerar objeções relevantes permite qualificar a defesa, sem garantir infalibilidade."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “A medida reduziu custos. Isso permitiu ampliar o atendimento.” O pronome “isso” retoma principalmente o quê?",
        "options": [
          "O fato de a medida ter reduzido custos.",
          "Apenas a palavra “atendimento”.",
          "Um personagem não mencionado.",
          "Uma negação da primeira frase."
        ],
        "answer": 0,
        "explanation": "A retomada resume uma proposição anterior inteira e liga seus efeitos à frase seguinte."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um texto afirma: “Só há redução de filas se houver equipe suficiente. A equipe aumentou; portanto, as filas certamente caíram”. Qual correção preserva a relação lógica inicial?",
        "options": [
          "O aumento prova que as filas caíram, pois condição necessária é sempre suficiente.",
          "Equipe suficiente é condição necessária, mas seu aumento não prova sozinho a redução das filas.",
          "A primeira frase diz que equipes maiores impedem qualquer redução.",
          "A ausência de dados torna impossível até formular hipóteses."
        ],
        "answer": 1,
        "explanation": "“Só se” estabelece que redução implica equipe suficiente, não a implicação inversa. Além disso, aumento não equivale automaticamente a suficiência. A certeza exige evidência do resultado."
      }
    ]
  },
  {
    "id": "variacao-linguistica",
    "area": "linguagens",
    "title": "Variação linguística e adequação",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Compreenda variedades regionais e sociais e avalie escolhas de registro em situações reais.",
    "objectives": [
      "Distinguir variedade de inadequação",
      "Relacionar registro e interlocutor",
      "Interpretar mudança e preconceito"
    ],
    "sections": [
      {
        "title": "Distinguir variedade de inadequação",
        "paragraphs": [
          "Uma língua apresenta variações regionais, sociais, históricas e situacionais. Palavras diferentes para o mesmo alimento não significam que uma comunidade desconheça a língua. Essas diferenças participam de identidades e das condições de circulação dos falantes.",
          "A norma-padrão é uma referência codificada importante em determinadas práticas institucionais. Seu ensino amplia possibilidades de participação; tratar outras variedades como sinais de inferioridade social constitui preconceito linguístico. Não confunda descrição de usos com recomendação de um registro para toda situação."
        ],
        "example": "“Mandioca”, “aipim” e “macaxeira” podem nomear o mesmo alimento em variedades regionais."
      },
      {
        "title": "Relacionar registro e interlocutor",
        "paragraphs": [
          "Adequação depende de gênero, público, propósito e suporte. Uma conversa entre amigos pode usar abreviações que dificultariam um requerimento formal. A escolha informal também pode ser deliberada em publicidade para produzir proximidade.",
          "Observe marcas de oralidade sem reduzir o texto a uma lista de desvios. Pausas, repetições e expressões coloquiais podem construir personagens, ritmo e identidade. Em uma questão, explique o efeito produzido no contexto."
        ],
        "example": "Uma campanha que diz “Bora cuidar da praça?” usa proximidade e convite coletivo; não se torna automaticamente ineficaz por ser informal."
      },
      {
        "title": "Interpretar mudança e preconceito",
        "paragraphs": [
          "Mudanças de vocabulário e pronúncia ocorrem historicamente. A escrita pode conservar convenções enquanto os usos da fala mudam. Uma forma antiga em documento precisa ser interpretada dentro de seu período.",
          "Evite concluir que todo contexto aceita qualquer formulação. É possível reconhecer a legitimidade das variedades e ensinar convenções formais. O problema está em converter diferenças de linguagem em hierarquias de valor humano."
        ],
        "example": "Exigir clareza em um formulário pode ser pertinente; ridicularizar o sotaque de quem o preenche não é uma orientação linguística."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Variação pode ser regional, social, histórica ou relacionada à situação de uso. Norma-padrão é uma referência para certos contextos formais; não mede inteligência nem esgota a língua. Adequação exige observar objetivo e interlocutores. Representar fala em literatura envolve escolhas estilísticas e não permite concluir automaticamente como todos os integrantes de um grupo falam."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma pessoa usa “a gente” numa conversa e “nós” num relatório. A alternância pode revelar ajuste de registro, não falta de identidade ou inteligência. O julgamento considera contexto e finalidade, sem transformar uma variedade em defeito de seus falantes."
      }
    ],
    "questions": [
      {
        "prompt": "Uma personagem usa vocabulário regional em um romance. Esse recurso pode:",
        "options": [
          "Construir identidade e situar a voz social.",
          "Provar incapacidade de raciocínio.",
          "Eliminar qualquer efeito literário.",
          "Impedir toda compreensão."
        ],
        "answer": 0,
        "explanation": "Marcas regionais podem caracterizar pertencimento e identidade. Não permitem inferir capacidade intelectual nem tornam o texto necessariamente incompreensível."
      },
      {
        "prompt": "Para um requerimento administrativo, a escolha de registro deve considerar:",
        "options": [
          "Somente a idade do autor.",
          "O gênero, o destinatário e a finalidade.",
          "A proibição de toda variedade regional na sociedade.",
          "A obrigação de usar gírias."
        ],
        "answer": 1,
        "explanation": "Adequação relaciona escolhas linguísticas às condições de comunicação. A convenção formal de um requerimento não invalida outras variedades em seus contextos."
      },
      {
        "prompt": "Qual atitude expressa preconceito linguístico?",
        "options": [
          "Explicar a convenção de escrita de um edital.",
          "Traduzir um termo técnico ao público.",
          "Associar sotaque regional a inferioridade intelectual.",
          "Comparar palavras usadas em regiões distintas."
        ],
        "answer": 2,
        "explanation": "Atribuir inferioridade a pessoas por seu sotaque transforma variação em discriminação. As outras ações podem ampliar compreensão sem desvalorizar falantes."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Vocabulários diferentes entre regiões exemplificam qual dimensão de variação?",
        "options": [
          "Regional.",
          "Exclusivamente biológica.",
          "Ausência de sistema linguístico.",
          "Erro universal de comunicação."
        ],
        "answer": 0,
        "explanation": "As escolhas podem marcar pertencimento geográfico e cultural, sem definir inferioridade."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma pessoa altera o modo de falar entre conversa e apresentação profissional. Isso pode indicar quê?",
        "options": [
          "Incapacidade de dominar qualquer variedade.",
          "Adequação de registro à situação.",
          "Mudança de idioma obrigatória.",
          "Ausência de interlocutor."
        ],
        "answer": 1,
        "explanation": "O repertório permite ajustar escolhas à finalidade, ao gênero e ao público."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual justificativa para ensinar norma-padrão respeita a diversidade?",
        "options": [
          "Provar que sotaques regionais impedem raciocínio.",
          "Substituir toda fala familiar por linguagem jurídica.",
          "Ampliar repertório para contextos que a exigem, sem inferiorizar outras variedades.",
          "Eliminar qualquer mudança histórica."
        ],
        "answer": 2,
        "explanation": "Ensinar convenções pode ampliar acesso social sem desqualificar identidades linguísticas."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma palavra comum no passado deixa de ser usual. Que variação se destaca?",
        "options": [
          "Exclusivamente espacial.",
          "Ausência de gramática.",
          "Imutabilidade da língua.",
          "Histórica."
        ],
        "answer": 3,
        "explanation": "Usos linguísticos mudam ao longo do tempo, mesmo dentro de uma mesma comunidade."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual afirmação distingue adequação de preconceito?",
        "options": [
          "Um registro pode ser inadequado a um documento específico sem tornar seu falante inferior.",
          "Qualquer uso informal revela menor inteligência.",
          "Toda variedade serve igualmente a qualquer gênero sem ajustes.",
          "A origem regional determina capacidade escolar."
        ],
        "answer": 0,
        "explanation": "A avaliação contextual de escolhas não autoriza hierarquizar pessoas por sua variedade."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um romance representa fala regional com grafias estilizadas. Como interpretar esse recurso?",
        "options": [
          "Como transcrição perfeita de toda pessoa da região.",
          "Como construção de voz social que precisa ser lida no contexto da obra.",
          "Como prova automática de incapacidade do autor.",
          "Como eliminação de qualquer efeito estético."
        ],
        "answer": 1,
        "explanation": "A representação é uma escolha artística seletiva, não um retrato universal da comunidade."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma escola aceita variedades regionais em debates, ensina reescrita formal para requerimentos e critica zombaria de sotaques. Qual análise integra as três ações?",
        "options": [
          "Contradiz-se, pois reconhecer diversidade impede ensinar escrita formal.",
          "Aplica preconceito sempre que ensina convenções de um gênero.",
          "Combina valorização identitária, ampliação de repertório e combate à hierarquização dos falantes.",
          "Deve exigir o mesmo registro em toda interação para respeitar igualdade."
        ],
        "answer": 2,
        "explanation": "Diversidade, adequação contextual e acesso a registros formais são compatíveis. O problema é confundir convenção situada com superioridade humana, não oferecer novos recursos de linguagem."
      }
    ]
  },
  {
    "id": "literatura-modernismo",
    "area": "linguagens",
    "title": "Literatura, modernismo e leitura de poemas",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Relacione forma, contexto e crítica social sem reduzir literatura a datas e rótulos.",
    "objectives": [
      "Ler forma e voz poética",
      "Situar o modernismo brasileiro",
      "Relacionar literatura e sociedade"
    ],
    "sections": [
      {
        "title": "Ler forma e voz poética",
        "paragraphs": [
          "O eu lírico é uma voz construída no poema e não deve ser confundido automaticamente com a biografia do autor. Ritmo, imagens, pausas, repetição e disposição dos versos contribuem para o sentido. Verso livre dispensa um padrão métrico fixo, mas não elimina organização sonora.",
          "Ao interpretar uma imagem, relacione-a ao conjunto. Uma rua pode ser espaço físico e também imagem da vida coletiva. Uma alternativa adequada explica um efeito sustentado por palavras do texto, sem inventar intenções psicológicas do autor."
        ],
        "example": "Se um poema repete “ninguém” no início dos versos, a repetição pode reforçar ausência e isolamento; o efeito depende do restante do poema."
      },
      {
        "title": "Situar o modernismo brasileiro",
        "paragraphs": [
          "O modernismo brasileiro questionou convenções artísticas e buscou elaborar expressões relacionadas à experiência nacional. A Semana de Arte Moderna de 1922 é um marco desse processo, que não começou nem terminou em um único evento.",
          "Linguagem coloquial, experimentação formal, revisão crítica da história e problematização da identidade aparecem em muitas obras modernistas. Isso não significa uniformidade entre autores. A produção de 1930, por exemplo, inclui romances que exploram desigualdades e conflitos regionais."
        ],
        "example": "Um poema que incorpora fala cotidiana e rompe uma métrica regular pode dialogar com propostas modernistas; a classificação deve considerar contexto e conjunto da obra."
      },
      {
        "title": "Relacionar literatura e sociedade",
        "paragraphs": [
          "Narradores podem ser participantes, observadores ou ter acesso amplo a pensamentos. A perspectiva seleciona acontecimentos e influencia a imagem das personagens. Um narrador que se justifica constantemente pode exigir leitura crítica de sua versão.",
          "Representar um problema social não equivale a defender todas as falas de uma personagem. Diferencie voz narrativa, ironia e discurso citado. A literatura pode expor contradições por meio da forma, e não apenas por afirmações diretas."
        ],
        "example": "Um narrador descreve como “generoso” um patrão que retém salários. O contraste entre avaliação e ação pode produzir crítica irônica."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Eu lírico e narrador são vozes construídas; não devem ser automaticamente identificados com a biografia do autor. Verso livre não significa ausência de organização: ritmo, repetições e cortes produzem efeitos. O modernismo brasileiro foi heterogêneo; coloquialidade, experimentação e releitura crítica de tradições podem aparecer em diferentes combinações. A forma sustenta a interpretação do tema."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: no verso autoral “A cidade corre. / Eu espero.”, o contraste entre verbos e o corte de linha opõem ritmo coletivo e experiência individual. É uma leitura apoiada na forma, sem exigir que o autor tenha vivido literalmente a situação."
      }
    ],
    "questions": [
      {
        "prompt": "Identificar o eu lírico significa reconhecer:",
        "options": [
          "O leitor real do livro.",
          "Sempre a profissão do autor.",
          "A voz construída que enuncia o poema.",
          "A editora responsável."
        ],
        "answer": 2,
        "explanation": "Eu lírico designa a voz textual. Coincidências biográficas podem existir, mas não autorizam identificação automática com a pessoa do autor."
      },
      {
        "prompt": "A linguagem coloquial em uma obra modernista pode servir para:",
        "options": [
          "Eliminar o trabalho artístico.",
          "Valorizar experiências e modos de falar cotidianos.",
          "Garantir ausência de crítica social.",
          "Reproduzir obrigatoriamente modelos clássicos."
        ],
        "answer": 1,
        "explanation": "A incorporação de usos cotidianos participa da renovação expressiva e da discussão sobre cultura brasileira. Informalidade não significa falta de elaboração."
      },
      {
        "prompt": "Um narrador chama de justo quem explora trabalhadores, e os fatos narrados desmentem o elogio. O contraste favorece:",
        "options": [
          "Uma leitura irônica e crítica.",
          "A comprovação de justiça sem ressalvas.",
          "A ausência de ponto de vista.",
          "Uma regra de métrica."
        ],
        "answer": 0,
        "explanation": "A diferença entre elogio e acontecimentos pode convidar o leitor a questionar a avaliação apresentada. Não é necessário aceitar literalmente a voz narrativa."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Em um poema, a voz que diz “eu” é necessariamente o autor biográfico?",
        "options": [
          "Sim; todo poema é depoimento literal.",
          "Não; pode ser uma voz ficcional construída.",
          "Sim; o pronome comprova identidade civil.",
          "Não; poemas nunca expressam experiências pessoais."
        ],
        "answer": 1,
        "explanation": "A voz poética é uma instância textual; pode dialogar com experiências sem equivaler automaticamente ao autor."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Versos sem métrica fixa podem apresentar quê?",
        "options": [
          "Ausência obrigatória de elaboração.",
          "Proibição de imagens.",
          "Ritmo organizado por repetições, pausas e escolhas sonoras.",
          "Apenas linguagem técnica."
        ],
        "answer": 2,
        "explanation": "Verso livre dispensa uma regularidade métrica fixa, não todos os procedimentos formais."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] O uso literário de linguagem cotidiana pode produzir qual efeito?",
        "options": [
          "Eliminar toda possibilidade de crítica.",
          "Provar desconhecimento obrigatório da escrita.",
          "Transformar a obra em documento administrativo.",
          "Aproximar a obra de experiências sociais comuns."
        ],
        "answer": 3,
        "explanation": "A coloquialidade pode ser uma opção estética e uma forma de valorização de vozes e experiências."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um narrador elogia um personagem, mas descreve ações que desmentem o elogio. O leitor deve considerar quê?",
        "options": [
          "Ironia e possível distância crítica entre fala e fatos.",
          "Concordância obrigatória do autor com o elogio.",
          "Impossibilidade de interpretar contradições.",
          "Ausência de narrador."
        ],
        "answer": 0,
        "explanation": "O contraste oferece pistas para leitura irônica, sem tomar a voz narrativa como declaração direta do autor."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] No verso autoral “A casa vazia guardava o barulho de ontem”, qual efeito se destaca?",
        "options": [
          "Relatório objetivo sobre isolamento acústico.",
          "Tensão entre ausência presente e memória sonora.",
          "Definição científica de conservação de energia.",
          "Comparação explícita com um estádio."
        ],
        "answer": 1,
        "explanation": "O aparente contraste entre vazio e barulho guardado constrói a persistência afetiva da memória."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Reelaborar uma tradição cultural em linguagem experimental pode significar quê?",
        "options": [
          "Eliminar necessariamente toda referência anterior.",
          "Reproduzir sem mudança cada forma antiga.",
          "Dialogar criticamente com heranças, sem simples cópia nem apagamento.",
          "Impedir a presença de temas nacionais."
        ],
        "answer": 2,
        "explanation": "A inovação pode surgir da transformação de materiais herdados, num diálogo entre continuidade e ruptura."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Leia o poema autoral: “O relógio manda. / A fábrica responde. / Meu nome, no portão, / virou número.” Qual interpretação articula forma, imagem e crítica?",
        "options": [
          "A voz comprova que todo trabalhador escolhe livremente seu horário.",
          "A menção ao relógio torna o texto apenas um manual de manutenção.",
          "O “eu” identifica obrigatoriamente o autor civil como operário daquela fábrica.",
          "Frases breves e a conversão de nome em número sugerem disciplina temporal e despersonalização do trabalho."
        ],
        "answer": 3,
        "explanation": "A sequência de comandos e respostas liga tempo e disciplina; a troca de nome por número sugere redução da individualidade. A leitura nasce das pistas textuais, sem converter a voz em prova biográfica."
      }
    ]
  },
  {
    "id": "artes-corpo-midia",
    "area": "linguagens",
    "title": "Arte, patrimônio, corpo e mídia",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Analise imagens, práticas corporais e manifestações culturais em seus contextos sociais.",
    "objectives": [
      "Interpretar imagens como linguagem",
      "Reconhecer patrimônio e diversidade",
      "Analisar corpo e padrões sociais"
    ],
    "sections": [
      {
        "title": "Interpretar imagens como linguagem",
        "paragraphs": [
          "Uma imagem organiza escolhas: enquadramento, escala, luz, cor e relação entre figuras orientam a leitura. Na publicidade, texto e imagem podem se complementar, repetir ou contradizer. A questão geralmente pede o efeito dessa articulação, não a opinião pessoal sobre a beleza da peça.",
          "Uma fotografia registra um recorte e pode constituir fonte histórica, mas não mostra toda a realidade. Pergunte o que ficou fora do quadro, quem produziu a imagem e como ela circulou. Montagem e legenda também alteram interpretações."
        ],
        "example": "Uma torneira seca ao lado de “cada gota conta” relaciona escassez e responsabilidade de consumo. A mensagem depende da combinação visual e verbal."
      },
      {
        "title": "Reconhecer patrimônio e diversidade",
        "paragraphs": [
          "Patrimônio cultural inclui bens materiais, como construções, e referências imateriais, como saberes e celebrações. Seu reconhecimento envolve memória, pertencimento e disputas sobre o que deve ser preservado. Uma manifestação não perde valor por não estar em um museu.",
          "Preservar uma tradição viva requer considerar as pessoas que a praticam. Transformá-la apenas em produto turístico pode alterar seus sentidos e excluir seus agentes. Evite opor cultura popular e arte como se uma fosse incapaz de criação."
        ],
        "example": "Um modo tradicional de produzir cerâmica envolve técnica, transmissão de saberes e relações comunitárias, além das peças prontas."
      },
      {
        "title": "Analisar corpo e padrões sociais",
        "paragraphs": [
          "Práticas corporais incluem jogos, danças, lutas, ginásticas e esportes. Elas expressam história, cooperação, competição e identidades. Uma dança pode ser atividade física, manifestação cultural e forma de resistência ao mesmo tempo.",
          "Mensagens publicitárias sobre o corpo podem naturalizar um padrão único e ocultar diversidade. Nas questões, observe inclusão, acessibilidade e transformação das regras para ampliar participação. Desempenho esportivo não é a única finalidade da educação corporal."
        ],
        "example": "Adaptar regras e equipamentos de um jogo pode permitir participação de pessoas com diferentes capacidades sem eliminar sua dimensão coletiva."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Imagens são recortes produzidos: enquadramento, ângulo, edição e legenda selecionam sentidos. Patrimônio material envolve bens físicos; imaterial, saberes, celebrações e práticas, que continuam sujeitos a transformação. Acessibilidade em práticas corporais pode exigir mudar regras e recursos para manter participação significativa, não apenas presença física."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma foto mostra só a área vazia de uma praça; outra mostra o mesmo evento num enquadramento amplo. A diferença pode resultar do recorte, sem exigir montagem. Compare campo visível, momento e legenda antes de inferir tamanho ou consenso."
      }
    ],
    "questions": [
      {
        "prompt": "Um saber culinário transmitido entre gerações é exemplo possível de:",
        "options": [
          "Patrimônio apenas geológico.",
          "Patrimônio cultural imaterial.",
          "Objeto sem dimensão cultural.",
          "Bem exclusivamente industrial."
        ],
        "answer": 1,
        "explanation": "O saber e sua transmissão podem constituir referência cultural imaterial. O alimento pronto não esgota o valor da prática."
      },
      {
        "prompt": "Uma legenda altera a interpretação de uma fotografia porque:",
        "options": [
          "Imagens têm sempre sentido único.",
          "Texto e imagem não se relacionam.",
          "A linguagem verbal pode orientar a leitura do recorte visual.",
          "A fotografia deixa de existir."
        ],
        "answer": 2,
        "explanation": "A legenda seleciona informações e propõe um contexto, podendo alterar a leitura da cena. A imagem não é uma janela neutra e completa da realidade."
      },
      {
        "prompt": "Adaptar um jogo para incluir participantes com mobilidade diferente busca:",
        "options": [
          "Ampliar acesso e participação.",
          "Excluir cooperação.",
          "Impor um corpo ideal único.",
          "Eliminar toda regra."
        ],
        "answer": 0,
        "explanation": "A adaptação pode conservar objetivos do jogo e tornar sua prática acessível. Inclusão não exige ausência de regras, mas revisão de barreiras."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma técnica artesanal transmitida oralmente entre gerações pode integrar qual categoria?",
        "options": [
          "Apenas infraestrutura rodoviária.",
          "Um dado sem dimensão cultural.",
          "Patrimônio imaterial.",
          "Patrimônio restrito a prédios monumentais."
        ],
        "answer": 2,
        "explanation": "O saber-fazer é uma prática cultural, embora também produza objetos materiais."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma escultura histórica é exemplo de bem cultural de que natureza?",
        "options": [
          "Exclusivamente imaterial.",
          "Sem suporte físico.",
          "Necessariamente digital.",
          "Material."
        ],
        "answer": 3,
        "explanation": "A escultura possui suporte físico; seu uso e seus significados podem também envolver práticas imateriais."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Duas fotos do mesmo evento parecem mostrar públicos de tamanhos distintos. O que se deve verificar?",
        "options": [
          "Enquadramento, horário e contexto de produção.",
          "Somente o gosto pessoal por uma cor.",
          "A identidade de toda pessoa da cidade.",
          "A impossibilidade de seleção visual."
        ],
        "answer": 0,
        "explanation": "O recorte espacial e temporal pode alterar a impressão sem que se trate necessariamente de falsificação."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual prática amplia acessibilidade em um jogo escolar?",
        "options": [
          "Manter barreiras e oferecer apenas lugar na arquibancada.",
          "Adaptar regras e materiais com participação dos envolvidos.",
          "Excluir participantes para não alterar regras.",
          "Presumir que todos têm as mesmas condições físicas."
        ],
        "answer": 1,
        "explanation": "A inclusão requer condições reais de participação, construídas considerando necessidades e objetivos da atividade."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Publicidade usa imagens corporais muito editadas como modelo universal. Qual leitura crítica é pertinente?",
        "options": [
          "O padrão representa obrigatoriamente todos os corpos reais.",
          "A edição impede qualquer intenção persuasiva.",
          "O padrão é socialmente produzido e pode ocultar diversidade e edição.",
          "A aparência determina valor humano."
        ],
        "answer": 2,
        "explanation": "É necessário reconhecer construção e interesses das imagens, sem naturalizar hierarquias corporais."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Preservar uma manifestação cultural viva exige necessariamente congelá-la no passado?",
        "options": [
          "Sim; qualquer mudança destrói toda identidade.",
          "Sim; participantes não devem decidir sobre a prática.",
          "Não; por isso nenhum registro é relevante.",
          "Não; continuidade pode incluir recriações pelos próprios praticantes."
        ],
        "answer": 3,
        "explanation": "Tradições são transmitidas e recriadas; preservação pode apoiar seus sujeitos e contextos, não apenas fixar uma forma."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um museu grava uma dança, retira seus praticantes das decisões e apresenta a gravação como forma única e imutável. Qual crítica combina patrimônio e representação?",
        "options": [
          "O registro seleciona uma versão e pode apagar a diversidade e a agência da comunidade que mantém a prática.",
          "Gravar prova preservação integral, independentemente dos sujeitos.",
          "Uma dança deixa de ser imaterial quando é filmada.",
          "Toda mudança feita pela comunidade invalida sua tradição."
        ],
        "answer": 0,
        "explanation": "O suporte audiovisual não esgota a manifestação viva. Enquadramento institucional e exclusão dos praticantes podem reduzir uma prática plural a uma versão fixa, mesmo quando o registro é tecnicamente fiel."
      }
    ]
  },
  {
    "id": "ingles-leitura",
    "area": "linguagens",
    "title": "Inglês: estratégias de leitura",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Use contexto, conectivos e pistas lexicais em textos curtos sem depender de tradução integral.",
    "objectives": [
      "Construir sentido global",
      "Usar relações lógicas e modais",
      "Ler campanhas e textos digitais"
    ],
    "sections": [
      {
        "title": "Construir sentido global",
        "paragraphs": [
          "Leia título, fonte, imagens e comando antes de traduzir palavra por palavra. Skimming busca o sentido geral; scanning procura uma informação específica, como data, nome ou valor. As duas estratégias se complementam e não substituem a leitura cuidadosa do trecho decisivo.",
          "Palavras transparentes ajudam, mas falsos cognatos exigem contexto. “Actually” geralmente significa “na verdade”; “pretend” significa “fingir”. Uma alternativa pode explorar exatamente a tradução automática incorreta."
        ],
        "example": "“Actually, the museum is free on Sundays” corrige uma expectativa: na verdade, o museu é gratuito aos domingos."
      },
      {
        "title": "Usar relações lógicas e modais",
        "paragraphs": [
          "“However” costuma marcar contraste, “because” causa e “therefore” consequência. “Although” introduz concessão: algo ocorre apesar de uma condição que poderia dificultá-lo. Localizar essas relações permite reconstruir o argumento mesmo com vocabulário parcial.",
          "“Must”, “may” e “should” podem indicar obrigação, possibilidade e recomendação, respectivamente, em contextos usuais. Não trate uma recomendação como proibição nem uma possibilidade como certeza. A força da afirmação importa na comparação com alternativas."
        ],
        "example": "“Visitors should bring water” recomenda levar água; “Visitors must not enter” proíbe a entrada."
      },
      {
        "title": "Ler campanhas e textos digitais",
        "paragraphs": [
          "Imperativos em cartazes frequentemente convidam a uma ação. Pergunte quem é o público e qual comportamento se procura estimular. Pronomes como “we” podem construir identificação coletiva; perguntas retóricas podem provocar reflexão.",
          "Quando uma palavra é desconhecida, observe sua função, palavras vizinhas e exemplos. Não é necessário descobrir sua tradução exata se a pergunta cobra propósito global. Volte ao texto para confirmar e descarte alternativas que acrescentem afirmações absolutas."
        ],
        "example": "“Bring your own bag. Reduce plastic waste.” incentiva o uso de sacola própria para reduzir resíduos plásticos."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Inferir significado exige combinar contexto, conectivos e modalidade. “Must” costuma marcar obrigação ou dedução conforme o contexto; “may” pode marcar permissão ou possibilidade; “should” frequentemente apresenta recomendação. “Unless” introduz condição equivalente a “if not”. Falsos cognatos como “actually” devem ser conferidos pelo uso: normalmente significa “na verdade”, não “atualmente”."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “You can borrow the tablet unless it is reserved.” A reserva é a exceção à autorização. Se há reserva, a frase não autoriza o empréstimo; se não há, a permissão se mantém. A leitura depende da condição, não de traduzir uma palavra isolada."
      }
    ],
    "questions": [
      {
        "prompt": "“The park is small. However, it offers many activities.” “However” estabelece:",
        "options": [
          "Causa.",
          "Conclusão.",
          "Contraste.",
          "Condição."
        ],
        "answer": 2,
        "explanation": "O contraste opõe o tamanho reduzido à variedade de atividades, contrariando uma expectativa possível."
      },
      {
        "prompt": "“Students may use the library after class.” O modal indica, nesse contexto:",
        "options": [
          "Permissão ou possibilidade.",
          "Proibição absoluta.",
          "Obrigação de comparecimento.",
          "Ação já concluída."
        ],
        "answer": 0,
        "explanation": "“May use” permite o uso; não exige que todos frequentem a biblioteca nem informa que a ação ocorreu."
      },
      {
        "prompt": "No cartaz “Save water. Fix leaking taps”, a finalidade principal é:",
        "options": [
          "Vender necessariamente uma marca.",
          "Incentivar conservação da água.",
          "Narrar uma viagem.",
          "Proibir consertos."
        ],
        "answer": 1,
        "explanation": "Os imperativos pedem economia de água e reparo de torneiras com vazamento. Não há marca nem narrativa no texto fornecido."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] “The museum is free, but booking is required.” Qual informação está correta?",
        "options": [
          "Não é preciso reservar porque é gratuito.",
          "A reserva é proibida.",
          "O museu está fechado.",
          "Não há cobrança de entrada, mas é necessário reservar."
        ],
        "answer": 3,
        "explanation": "“Free” indica gratuidade e “but” introduz a exigência adicional, que não é anulada pelo preço."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Visitors should bring water on hot days.” O termo “should” expressa principalmente o quê?",
        "options": [
          "Recomendação.",
          "Um fato passado concluído.",
          "Impossibilidade absoluta.",
          "Proibição de levar água."
        ],
        "answer": 0,
        "explanation": "A frase aconselha uma conduta; não usa a mesma força de uma obrigação com “must”."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Actually, the library closes at six, not at five.” Qual é a função de “actually”?",
        "options": [
          "Informar que algo ocorre atualmente, sem correção.",
          "Corrigir uma informação: na verdade.",
          "Indicar uma ação futura obrigatória.",
          "Negar que exista biblioteca."
        ],
        "answer": 1,
        "explanation": "A oposição entre seis e cinco mostra a retificação; “actually” funciona como “na verdade”."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Although the route is longer, it is safer.” Qual conclusão respeita o texto?",
        "options": [
          "O trajeto é necessariamente mais curto.",
          "O autor afirma que segurança e distância são iguais.",
          "O trajeto é mais longo, mas tem vantagem de segurança.",
          "O trajeto está interditado."
        ],
        "answer": 2,
        "explanation": "“Although” admite a desvantagem da extensão sem negar a vantagem da segurança."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “Keep the door closed to save energy.” Qual o objetivo indicado por “to save energy”?",
        "options": [
          "Explicar quem fabricou a porta.",
          "Proibir toda circulação de pessoas.",
          "Informar uma economia já medida.",
          "Economizar energia."
        ],
        "answer": 3,
        "explanation": "A expressão introduz a finalidade da instrução, não um resultado quantificado já comprovado."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “The service may be unavailable during maintenance.” Qual interpretação é adequada?",
        "options": [
          "O serviço pode ficar indisponível durante a manutenção.",
          "O serviço certamente nunca será interrompido.",
          "A manutenção é obrigatoriamente cancelada.",
          "O serviço ficou permanentemente indisponível no passado."
        ],
        "answer": 0,
        "explanation": "O modal “may” indica possibilidade; o intervalo é limitado pelo contexto da manutenção."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Leia: “Members may borrow a tablet unless it is reserved. Booking a study room does not reserve a tablet. Tablets must remain inside the library.” Lia é sócia, reservou uma sala e quer levar para casa um tablet já reservado por outra pessoa. Qual interpretação integra as regras?",
        "options": [
          "A reserva da sala dá prioridade e autoriza levar o tablet para casa.",
          "A sala não garante tablet; a reserva impede esse empréstimo e, mesmo sem ela, o aparelho não poderia sair da biblioteca.",
          "Ser sócia elimina todas as restrições do regulamento.",
          "“May” obriga a biblioteca a emprestar qualquer aparelho disponível ou reservado."
        ],
        "answer": 1,
        "explanation": "É preciso combinar exceção com “unless”, negação da equivalência entre reservas e obrigação com “must”. Há dois impedimentos independentes: reserva prévia e permanência obrigatória no local."
      }
    ]
  },
  {
    "id": "espanhol-leitura",
    "area": "linguagens",
    "title": "Espanhol: contexto e interpretação",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Leia campanhas e pequenas narrativas com atenção a conectivos e falsos cognatos.",
    "objectives": [
      "Interpretar sem tradução mecânica",
      "Reconhecer oposição e orientação temporal",
      "Relacionar língua, identidade e ação"
    ],
    "sections": [
      {
        "title": "Interpretar sem tradução mecânica",
        "paragraphs": [
          "A proximidade entre português e espanhol facilita hipóteses, mas também provoca erros. “Embarazada” significa grávida, “apellido” significa sobrenome e “oficina” pode significar escritório. Use o contexto para decidir, sem confiar apenas na aparência.",
          "Leia o comando e identifique o gênero. Uma notícia informa; uma campanha busca mobilizar; um depoimento apresenta uma experiência. O objetivo global pode ser reconhecido mesmo sem conhecer todas as palavras."
        ],
        "example": "“Escriba su nombre y apellido” pede nome e sobrenome em um formulário, não um apelido."
      },
      {
        "title": "Reconhecer oposição e orientação temporal",
        "paragraphs": [
          "“Pero” e “sin embargo” introduzem contraste. “Aunque” pode indicar concessão, e “por eso” apresenta consequência. “Mientras” frequentemente situa ações simultâneas, mas o contexto pode construir comparação entre situações.",
          "“Todavía” corresponde a “ainda”, e “ya” a “já” em muitos usos. A negação com “todavía no” indica algo que não ocorreu até o momento. Marcas temporais ajudam a distinguir previsão, hábito e acontecimento concluído."
        ],
        "example": "“Todavía no llegó el autobús” significa que o ônibus ainda não chegou; não afirma cancelamento definitivo."
      },
      {
        "title": "Relacionar língua, identidade e ação",
        "paragraphs": [
          "Anúncios de campanhas usam verbos no imperativo para convidar o leitor. A presença de “nosotros” pode criar um grupo compartilhado; o destinatário é inferido por vocabulário, suporte e tema.",
          "Ao analisar uma variedade, não considere formas regionais automaticamente erradas. “Vos” é uma forma de tratamento presente em diferentes regiões hispanofalantes. O texto deve ser interpretado em sua situação de uso."
        ],
        "example": "“Cuidemos el barrio: separa tus residuos” articula responsabilidade coletiva e uma ação individual de separar resíduos."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Falsos cognatos exigem contexto: “embarazada” é grávida, “apellido” é sobrenome, “carpeta” pode ser pasta. “Sin embargo” introduz contraste; “aunque”, concessão; “todavía”, continuidade temporal. “Solo si” marca condição necessária e “a menos que”, uma exceção. Interpretar avisos requer combinar autorização e limites."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “Puede entrar a menos que la sala esté cerrada” permite entrada exceto no caso de sala fechada. “Todavía no abrió” informa que a abertura ainda não ocorreu, mas não significa fechamento definitivo. Os marcadores temporais e condicionais delimitam a leitura."
      }
    ],
    "questions": [
      {
        "prompt": "“La oficina abre a las ocho.” Em contexto administrativo, “oficina” designa:",
        "options": [
          "Uma oficina mecânica em todo contexto.",
          "Um escritório.",
          "Uma fábrica, independentemente da atividade descrita.",
          "Uma sala de aula, como equivalente fixo da palavra."
        ],
        "answer": 1,
        "explanation": "Em espanhol, “oficina” pode indicar escritório. A semelhança com o português não garante o mesmo sentido mais comum."
      },
      {
        "prompt": "“Es caro; sin embargo, dura muchos años.” Há relação de:",
        "options": [
          "Adição sem contraste.",
          "Condição impossível.",
          "Contraste entre custo e durabilidade.",
          "Identidade entre preço e idade."
        ],
        "answer": 2,
        "explanation": "“Sin embargo” contrapõe ao preço alto uma característica favorável: a durabilidade."
      },
      {
        "prompt": "“Todavía no terminé el libro” informa que o falante:",
        "options": [
          "Ainda não concluiu a leitura.",
          "Nunca começou a ler qualquer livro.",
          "Terminou ontem.",
          "Proibiu a leitura."
        ],
        "answer": 0,
        "explanation": "“Todavía no” indica que a ação não foi concluída até aquele momento, sem afirmar que nunca será."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Em um formulário, “apellido” pede qual informação?",
        "options": [
          "Sobrenome.",
          "Apelido informal obrigatoriamente.",
          "Endereço.",
          "Profissão."
        ],
        "answer": 0,
        "explanation": "No contexto de identificação, “apellido” corresponde a sobrenome, um falso cognato frequente."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “La tienda está cerrada hoy, pero abrirá mañana.” Qual informação é correta?",
        "options": [
          "A loja fechou definitivamente.",
          "A loja está fechada hoje e abrirá amanhã.",
          "A loja já abriu ontem e não fechará.",
          "A loja abre apenas à noite."
        ],
        "answer": 1,
        "explanation": "“Hoy” e “mañana” situam dias distintos, e “abrirá” apresenta uma ação futura."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] “Aunque llueve, saldremos.” Qual relação aparece?",
        "options": [
          "Causa: sairemos obrigatoriamente por causa da chuva.",
          "Finalidade: sair produz chuva.",
          "Concessão: a chuva não impede a saída anunciada.",
          "Negação de que esteja chovendo."
        ],
        "answer": 2,
        "explanation": "“Aunque” admite um possível obstáculo, mas a ação principal é mantida."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Em um aviso de saúde, “mujeres embarazadas” refere-se a quem?",
        "options": [
          "Mulheres envergonhadas.",
          "Mulheres empregadas.",
          "Mulheres aposentadas.",
          "Mulheres grávidas."
        ],
        "answer": 3,
        "explanation": "“Embarazada” significa grávida; o contexto não autoriza traduzir por “embaraçada”."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “Traiga su propia botella para reducir residuos.” Qual é a finalidade do aviso?",
        "options": [
          "Incentivar uma prática de redução de resíduos.",
          "Vender obrigatoriamente garrafas descartáveis.",
          "Definir a composição química da água.",
          "Relatar uma ação já concluída."
        ],
        "answer": 0,
        "explanation": "O imperativo orienta o leitor, e “para” apresenta o objetivo ambiental."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] “Todavía quedan entradas.” Qual interpretação é mais adequada?",
        "options": [
          "Os ingressos se esgotaram definitivamente.",
          "Ainda há ingressos disponíveis.",
          "A venda só começará no próximo ano.",
          "Nenhum ingresso foi colocado à venda."
        ],
        "answer": 1,
        "explanation": "“Todavía” marca permanência de uma situação: a disponibilidade continua naquele momento."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Leia: “El préstamo se renueva solo si nadie lo ha reservado. La renovación no es automática: debe solicitarse antes del vencimiento. La sala abre los sábados, pero no tramita renovaciones ese día.” O prazo vence sábado e o livro não foi reservado. Qual conclusão é sustentada?",
        "options": [
          "A abertura de sábado garante renovação automática.",
          "Não haver reserva elimina a necessidade de solicitação.",
          "A ausência de reserva é necessária, mas não basta: é preciso solicitar antes do vencimento em dia com atendimento para renovação.",
          "O aviso proíbe toda renovação mesmo nos demais dias."
        ],
        "answer": 2,
        "explanation": "“Solo si” não torna a condição suficiente. O texto acrescenta procedimento, prazo e restrição de atendimento; estar aberto não equivale a prestar todos os serviços."
      }
    ]
  },
  {
    "id": "colonizacao-escravidao",
    "area": "humanas",
    "title": "Colonização, escravidão e resistências",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Relacione economia colonial, trabalho compulsório e formas de resistência sem apagar agentes históricos.",
    "objectives": [
      "Entender economia e poder colonial",
      "Reconhecer sujeitos e resistências",
      "Distinguir abolição e inclusão"
    ],
    "sections": [
      {
        "title": "Entender economia e poder colonial",
        "paragraphs": [
          "A colonização portuguesa da América articulou exploração econômica, ocupação territorial e imposição de instituições. A produção açucareira voltada ao mercado externo combinou grandes propriedades, investimento mercantil e trabalho escravizado. Isso não significa que toda atividade colonial fosse exportadora.",
          "Havia agricultura de abastecimento, comércio interno, artesanato e formas diversas de trabalho. A mineração ampliou fluxos populacionais e redes urbanas no século XVIII. Compare atividades e regiões sem transformar um modelo econômico em retrato uniforme de toda a colônia."
        ],
        "example": "O crescimento de áreas mineradoras criou demanda por alimentos e animais de transporte produzidos em outras regiões."
      },
      {
        "title": "Reconhecer sujeitos e resistências",
        "paragraphs": [
          "A escravidão transformava pessoas em propriedade sob proteção jurídica, sustentando violência e exploração. Africanos e seus descendentes construíram famílias, redes culturais, práticas religiosas e estratégias de liberdade em condições adversas.",
          "Resistências incluíram fugas, quilombos, revoltas, negociações e ações judiciais em contextos específicos. Povos indígenas também resistiram, negociaram alianças e preservaram conhecimentos. Não eram um grupo único, nem agentes passivos da conquista."
        ],
        "example": "Um quilombo podia envolver defesa territorial, produção de alimentos e relações com outros grupos; não deve ser reduzido a um simples esconderijo."
      },
      {
        "title": "Distinguir abolição e inclusão",
        "paragraphs": [
          "A abolição legal de 1888 encerrou a escravidão no Brasil, mas não assegurou automaticamente acesso à terra, escolarização e igualdade de oportunidades. A permanência de desigualdades precisa ser explicada por processos históricos e institucionais, não por supostas características dos grupos.",
          "Fontes produzidas por autoridades ou proprietários podem silenciar a perspectiva dos escravizados. Leia registros com atenção à autoria e procure cruzar documentos. Reconhecer limites de uma fonte não significa que ela seja inútil."
        ],
        "example": "Um anúncio de fuga pode revelar habilidades profissionais e redes de circulação, embora tenha sido produzido pelo escravizador."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "A colonização articulou interesses metropolitanos, produção exportadora, trabalho coercitivo e relações locais variadas. Pessoas escravizadas não foram sujeitos passivos: fugas, quilombos, negociações e ações judiciais integram repertórios de resistência em diferentes contextos. Fonte oficial e experiência vivida não são equivalentes. Abolição jurídica encerra uma instituição legal, sem garantir terra, renda ou igualdade social."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma lei proíbe o tráfico, mas registros apontam continuidade clandestina. A divergência permite investigar fiscalização, interesses e conflitos. Não se deve concluir que a lei nunca existiu nem tomar o texto legal como prova de cumprimento integral."
      }
    ],
    "questions": [
      {
        "prompt": "A produção açucareira colonial conectava-se principalmente:",
        "options": [
          "Ao abastecimento exclusivo do mercado interno por pequenas unidades autônomas.",
          "Ao trabalho assalariado predominante desde o início da colonização.",
          "Ao mercado externo e ao trabalho escravizado.",
          "À organização de toda a produção em propriedades coletivas sem coerção."
        ],
        "answer": 2,
        "explanation": "O açúcar integrava circuitos atlânticos e sua produção se apoiava fortemente na escravidão. Existiam também atividades internas, por isso não se deve generalizar para toda a economia."
      },
      {
        "prompt": "Quilombos constituem evidência de:",
        "options": [
          "Resistência e construção de formas de vida.",
          "Aceitação unânime da escravidão.",
          "Ausência de organização coletiva.",
          "Fim automático da colonização."
        ],
        "answer": 0,
        "explanation": "A formação de comunidades e a defesa de autonomia revelam agência e resistência. Não significavam fim de todo o sistema escravista."
      },
      {
        "prompt": "A abolição de 1888 e a igualdade social devem ser distinguidas porque:",
        "options": [
          "A lei eliminou todas as desigualdades.",
          "O fim jurídico da escravidão não garantiu inclusão material.",
          "A abolição ocorreu em 1922.",
          "Ninguém lutou pela liberdade."
        ],
        "answer": 1,
        "explanation": "Liberdade jurídica não assegurou terra, renda e educação. A análise histórica considera as lutas pela abolição e as estruturas mantidas após ela."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma economia colonial voltada à exportação pode ser analisada considerando quê?",
        "options": [
          "Isolamento completo em relação ao comércio.",
          "Conexões entre produção local, trabalho e mercados externos.",
          "Ausência de interesses metropolitanos.",
          "Igualdade automática entre todos os agentes."
        ],
        "answer": 1,
        "explanation": "Produção e exploração se inseriam em redes econômicas e de poder mais amplas."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Cartas de alforria e processos de liberdade podem revelar quê?",
        "options": [
          "Ausência completa de violência na escravidão.",
          "Igualdade jurídica geral durante o cativeiro.",
          "Ações e disputas de pessoas escravizadas dentro de condições restritivas.",
          "Passividade obrigatória de todos os escravizados."
        ],
        "answer": 2,
        "explanation": "A existência de negociações e ações não apaga coerção; evidencia agência em relações desiguais."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Por que quilombos não devem ser reduzidos a simples “esconderijos”?",
        "options": [
          "Não tinham qualquer relação com resistência.",
          "Eram necessariamente instituições oficiais da metrópole.",
          "Todos eram idênticos e sem relações externas.",
          "Também envolveram organização social, vínculos e construção de formas de vida."
        ],
        "answer": 3,
        "explanation": "Quilombos foram experiências diversas, com dimensões políticas, econômicas e sociais."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma lei colonial descreve regras de trabalho. O que ela demonstra diretamente?",
        "options": [
          "O conteúdo normativo pretendido por quem a produziu.",
          "Cumprimento perfeito em todo o território.",
          "A opinião de todos os trabalhadores.",
          "Ausência de conflito entre norma e prática."
        ],
        "answer": 0,
        "explanation": "O texto legal evidencia prescrições e interesses; sua aplicação exige outras fontes."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual relação entre abolição e desigualdade é historicamente coerente?",
        "options": [
          "A abolição distribuiu automaticamente terra a todos os libertos.",
          "O fim legal do cativeiro não eliminou automaticamente barreiras materiais e discriminação.",
          "A igualdade de renda foi consequência imediata obrigatória.",
          "Nenhum aspecto jurídico mudou em 1888."
        ],
        "answer": 1,
        "explanation": "É preciso distinguir a mudança legal das condições sociais e econômicas posteriores."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Ao usar um anúncio de fuga de pessoa escravizada como fonte, qual cuidado é necessário?",
        "options": [
          "Tomar a linguagem do anunciante como retrato neutro da pessoa.",
          "Ignorar a relação de poder por se tratar de texto breve.",
          "Reconhecer o ponto de vista de quem publicou e procurar pistas da ação do fugitivo.",
          "Concluir que a fuga era aprovada pelo anunciante."
        ],
        "answer": 2,
        "explanation": "A fonte é atravessada por interesses senhoriais, mas também permite investigar ações de resistência."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma lei registra o fim do cativeiro; uma carta de liberto relata dificuldade de acesso à terra; um jornal da época celebra “igualdade completa”. Qual interpretação confronta adequadamente as fontes?",
        "options": [
          "O jornal prova que a dificuldade narrada nunca existiu.",
          "A carta demonstra que a lei não alterou nenhuma condição jurídica.",
          "A lei basta para medir a distribuição real de terra após a abolição.",
          "A ruptura jurídica coexistiu com barreiras materiais, e a celebração jornalística deve ser lida como perspectiva situada."
        ],
        "answer": 3,
        "explanation": "As fontes tratam de dimensões distintas. Articular norma, experiência e discurso permite reconhecer conquista jurídica e limites de inclusão sem reduzir uma à outra."
      }
    ]
  },
  {
    "id": "revolucoes-industriais",
    "area": "humanas",
    "title": "Revoluções, trabalho e industrialização",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Conecte transformações produtivas, direitos políticos e conflitos sociais.",
    "objectives": [
      "Relacionar técnica e relações sociais",
      "Compreender direitos e contradições",
      "Interpretar mobilização trabalhista"
    ],
    "sections": [
      {
        "title": "Relacionar técnica e relações sociais",
        "paragraphs": [
          "A Revolução Industrial envolveu mecanização, uso de novas fontes de energia, concentração fabril e reorganização do trabalho. Na experiência britânica, carvão e máquina a vapor foram importantes. O processo dependeu também de mercados, capital, recursos e condições sociais.",
          "A fábrica impôs ritmos e disciplina temporal diferentes de muitas formas artesanais. Aumento de produtividade não significou distribuição automática dos ganhos. Jornadas extensas, trabalho infantil e acidentes motivaram organização e reivindicações dos trabalhadores."
        ],
        "example": "Produzir mais tecidos por hora pode baratear mercadorias, mas o salário e a jornada dependem de relações de poder e regulação."
      },
      {
        "title": "Compreender direitos e contradições",
        "paragraphs": [
          "A Revolução Francesa questionou privilégios de ordens e formulou princípios de liberdade e igualdade jurídica. Esses princípios coexistiram com exclusões e conflitos sobre quem participaria efetivamente da cidadania. Evite tratar o processo como instantâneo ou homogêneo.",
          "A ascensão de direitos civis e políticos não resolveu sozinha desigualdades de classe, gênero ou condição colonial. A comparação histórica deve observar a distância entre ideias proclamadas e práticas institucionais."
        ],
        "example": "Uma declaração universalizante pode conviver com restrições de voto; a contradição permite investigar disputas sobre cidadania."
      },
      {
        "title": "Interpretar mobilização trabalhista",
        "paragraphs": [
          "Sindicatos, greves e associações pressionaram por redução de jornada, proteção social e melhores condições. O movimento operário reuniu diferentes correntes políticas e formas de ação, sem uma única estratégia válida para todos os períodos.",
          "Automação contemporânea pode eliminar tarefas e criar outras, mas seus efeitos dependem de qualificação, distribuição de renda e organização econômica. Não conclua que toda inovação melhora ou piora igualmente a vida de todos."
        ],
        "example": "Uma máquina pode reduzir esforço repetitivo e simultaneamente exigir formação técnica; políticas de transição influenciam quem se beneficia."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Industrialização envolve mudanças de energia, técnica, organização do trabalho e relações sociais. Produtividade é produção por unidade de recurso; seu aumento não garante melhora salarial ou redução de jornada. Direitos proclamados podem ter alcance restrito por critérios de renda, gênero ou posição social. Compare princípio, regra de acesso e experiência dos grupos."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma fábrica dobra a produção por trabalhador, mas mantém salários e jornada. Houve aumento de produtividade, não prova de distribuição igual dos ganhos. Para estudar condições de trabalho, combine indicadores de produção, tempo, remuneração e poder de negociação."
      }
    ],
    "questions": [
      {
        "prompt": "A industrialização alterou o trabalho ao:",
        "options": [
          "Eliminar toda desigualdade.",
          "Concentrar trabalhadores e disciplinar ritmos fabris.",
          "Encerrar o uso de energia.",
          "Impedir urbanização."
        ],
        "answer": 1,
        "explanation": "A concentração nas fábricas e o controle do tempo foram mudanças importantes. A produtividade não garantiu igualdade e o crescimento urbano acompanhou o processo em muitos lugares."
      },
      {
        "prompt": "Uma declaração de igualdade convive com voto restrito a proprietários. Isso revela:",
        "options": [
          "Ausência de qualquer conflito político.",
          "Igualdade material já completa.",
          "Distância entre princípio e exercício dos direitos.",
          "Fim da cidadania."
        ],
        "answer": 2,
        "explanation": "A restrição mostra que um princípio universalizante podia ter aplicação limitada. A análise deve identificar os grupos incluídos e excluídos."
      },
      {
        "prompt": "Uma greve por redução da jornada expressa:",
        "options": [
          "Reivindicação coletiva sobre condições de trabalho.",
          "Abolição de toda produção.",
          "Rejeição obrigatória a qualquer tecnologia.",
          "Ausência de organização."
        ],
        "answer": 0,
        "explanation": "O objetivo apresentado é transformar a jornada. Não autoriza inferir oposição a toda tecnologia nem encerramento permanente da produção."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] A disciplina do relógio na fábrica evidencia qual mudança?",
        "options": [
          "Desaparecimento de relações hierárquicas.",
          "Garantia de autonomia total dos trabalhadores.",
          "Maior coordenação e controle temporal do trabalho.",
          "Fim de qualquer divisão de tarefas."
        ],
        "answer": 2,
        "explanation": "A organização fabril sincroniza ritmos e pode intensificar controle sobre o tempo de trabalho."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Produção por trabalhador aumenta sem mudar salário. O que se pode concluir diretamente?",
        "options": [
          "Todos receberam aumento na mesma proporção.",
          "A jornada necessariamente caiu pela metade.",
          "A produção total obrigatoriamente diminuiu.",
          "A produtividade cresceu, mas isso não prova repasse salarial."
        ],
        "answer": 3,
        "explanation": "Produtividade e remuneração são variáveis distintas; é preciso evidência para conectar seus movimentos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma declaração universal de direitos convive com exclusão de mulheres do voto. Qual tensão aparece?",
        "options": [
          "Entre universalidade proclamada e acesso político restrito.",
          "Entre duas formas idênticas de inclusão plena.",
          "Entre fim de todo Estado e fim de todo direito.",
          "Entre igualdade já realizada e ausência de conflito."
        ],
        "answer": 0,
        "explanation": "A abrangência discursiva não equivale à participação efetiva de todos."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Associações operárias podem atuar de que forma?",
        "options": [
          "Impedindo necessariamente toda mudança social.",
          "Organizando reivindicações e negociação coletiva.",
          "Garantindo ausência de conflito com empregadores.",
          "Substituindo automaticamente todas as instituições."
        ],
        "answer": 1,
        "explanation": "A organização coletiva amplia possibilidades de ação em disputas sobre condições de trabalho."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma fonte empresarial elogia uma máquina e um relato operário descreve intensificação de ritmo. Como relacioná-los?",
        "options": [
          "Como prova de que uma fonte deve ser descartada sem análise.",
          "Como relatos necessariamente incompatíveis em qualquer aspecto.",
          "Como perspectivas que podem registrar efeitos distintos do mesmo processo.",
          "Como documentos sem interesses sociais."
        ],
        "answer": 2,
        "explanation": "Uma inovação pode elevar produção e intensificar trabalho; a comparação permite analisar interesses e efeitos simultâneos."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual informação ajudaria a avaliar a tese de que mecanização melhorou condições laborais?",
        "options": [
          "A cor de uma máquina sem outros dados.",
          "Apenas um slogan de venda.",
          "O nome do proprietário isoladamente.",
          "Séries de jornada, remuneração e acidentes em contexto comparável."
        ],
        "answer": 3,
        "explanation": "Condições de trabalho exigem indicadores pertinentes, não apenas aumento da capacidade produtiva."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Após mecanização, a produção horária por trabalhador sobe 50%, o salário por hora sobe 10% e a jornada diária não muda. Qual conclusão combina corretamente os indicadores?",
        "options": [
          "A produtividade cresceu mais que a remuneração horária, sem evidência de redução da jornada.",
          "A jornada caiu 40% por diferença entre as taxas.",
          "A remuneração passou a representar 60% de toda a produção, necessariamente.",
          "Todos os ganhos de produtividade foram transferidos aos trabalhadores."
        ],
        "answer": 0,
        "explanation": "As bases medem grandezas diferentes. Pode-se comparar as taxas informadas e constatar jornada estável, mas não deduzir participação salarial total ou redução temporal não observada."
      }
    ]
  },
  {
    "id": "brasil-era-vargas",
    "area": "humanas",
    "title": "Era Vargas, propaganda e relações de trabalho",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Entenda centralização política, industrialização e a tensão entre direitos e autoritarismo.",
    "objectives": [
      "Situar rupturas e permanências",
      "Analisar legislação e controle",
      "Ler propaganda como fonte"
    ],
    "sections": [
      {
        "title": "Situar rupturas e permanências",
        "paragraphs": [
          "Vargas chegou ao poder em 1930, em uma ruptura com a organização política da Primeira República. O período até 1945 teve diferentes fases; não deve ser descrito integralmente como um único regime sem mudanças. O Estado Novo, de 1937 a 1945, foi uma ditadura.",
          "A centralização federal e a promoção de atividades industriais alteraram a relação entre Estado e economia. Isso não eliminou a importância da agricultura nem os conflitos entre grupos regionais e sociais. Uma questão pode cobrar exatamente a coexistência de modernização econômica e restrição política."
        ],
        "example": "A expansão de uma indústria de base não implica, por si só, ampliação da liberdade de imprensa."
      },
      {
        "title": "Analisar legislação e controle",
        "paragraphs": [
          "A legislação trabalhista consolidou direitos e regulou relações de emprego; a CLT foi instituída em 1943. Sua abrangência histórica não contemplou todos os trabalhadores de forma equivalente desde o início. Diferencie reconhecimento normativo e acesso efetivo.",
          "O Estado também buscou controlar a organização sindical. A apresentação do governante como único doador de direitos apaga pressões e lutas anteriores dos trabalhadores. Direitos sociais podem coexistir com repressão a organizações independentes."
        ],
        "example": "Uma propaganda que atribui todos os benefícios à benevolência de um líder constrói uma imagem política e silencia outros agentes históricos."
      },
      {
        "title": "Ler propaganda como fonte",
        "paragraphs": [
          "Rádio, cerimônias e material impresso ajudaram a construir identificação com o governo. Durante o Estado Novo, censura e propaganda foram instrumentos de controle da circulação de ideias. A fonte revela o projeto de representação do poder, não uma fotografia neutra de toda a sociedade.",
          "Ao analisar um discurso, identifique público, veículo e contexto. Expressões de união nacional podem ocultar conflitos. A interpretação deve comparar a mensagem com práticas e com outras fontes disponíveis."
        ],
        "example": "Um pronunciamento transmitido pelo rádio pode alcançar pessoas sem acesso à imprensa escrita e reforçar proximidade simbólica entre líder e público."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "O período de Vargas inclui fases distintas: governo provisório, fase constitucional e Estado Novo. O Estado Novo de 1937 a 1945 combinou centralização, repressão e propaganda. Direitos trabalhistas e controle sobre sindicatos podem coexistir; a cobertura da legislação não foi universal nem idêntica ao longo do tempo. A construção da imagem de um líder não substitui a análise de mobilizações e instituições."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um programa de rádio apresenta o governante como origem exclusiva dos direitos trabalhistas. O documento ajuda a estudar personalização e legitimação. Para investigar a conquista dos direitos, confronte-o com greves, associações e legislação, sem reduzir o processo à propaganda."
      }
    ],
    "questions": [
      {
        "prompt": "O Estado Novo foi:",
        "options": [
          "Uma ditadura entre 1937 e 1945.",
          "A monarquia iniciada em 1822.",
          "Um regime criado em 1988.",
          "Uma democracia sem censura."
        ],
        "answer": 0,
        "explanation": "O Estado Novo corresponde à fase ditatorial de Vargas entre 1937 e 1945. Não se deve confundi-lo com todo o período republicano."
      },
      {
        "prompt": "A coexistência de CLT e controle sindical mostra que:",
        "options": [
          "Direitos sociais impedem autoritarismo.",
          "Proteção trabalhista e restrição política podem coexistir.",
          "Não havia legislação trabalhista.",
          "Todos os trabalhadores tinham idêntico acesso aos direitos."
        ],
        "answer": 1,
        "explanation": "A ampliação de direitos trabalhistas não significa liberdade política plena. A abrangência e a implementação dos direitos também variaram."
      },
      {
        "prompt": "Um cartaz que apresenta o líder como único responsável por conquistas trabalhistas deve ser lido como:",
        "options": [
          "Prova de que trabalhadores nunca se mobilizaram.",
          "Documento sem autoria ou intenção.",
          "Estratégia de legitimação política.",
          "Relato completo de todas as causas históricas."
        ],
        "answer": 2,
        "explanation": "A propaganda seleciona e atribui sentidos às conquistas para construir legitimidade. É preciso considerar ações de trabalhadores e outros processos históricos."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Por que não se deve tratar toda a Era Vargas como um regime único e imutável?",
        "options": [
          "O Estado Novo começou em 1889.",
          "Não houve nenhuma mudança entre 1930 e 1945.",
          "Toda fase do período foi monárquica.",
          "O período teve fases institucionais diferentes."
        ],
        "answer": 3,
        "explanation": "Distinguir governo provisório, fase constitucional e ditadura evita projetar uma característica sobre todo o período."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] O uso do rádio na propaganda governamental ampliava especialmente o quê?",
        "options": [
          "O alcance de mensagens e a proximidade simbólica com públicos diversos.",
          "A necessidade de todos os ouvintes saberem ler.",
          "A pluralidade de todas as opiniões por definição.",
          "A ausência de intervenção política na comunicação."
        ],
        "answer": 0,
        "explanation": "O meio sonoro alcançava também pessoas sem acesso regular à imprensa escrita, favorecendo difusão e personalização."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um sindicato pode ter reconhecimento oficial e autonomia limitada. Isso indica quê?",
        "options": [
          "Liberdade sindical plena obrigatória.",
          "Integração institucional com controle sobre a organização dos trabalhadores.",
          "Ausência completa de relações com o Estado.",
          "Proibição de qualquer direito social."
        ],
        "answer": 1,
        "explanation": "Reconhecimento e controle não são opostos absolutos; podem compor a mesma política."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Que cuidado é necessário ao estudar a CLT de 1943?",
        "options": [
          "Supor abrangência original idêntica para todas as ocupações.",
          "Confundi-la com a Constituição de 1988.",
          "Examinar direitos previstos, cobertura e condições de aplicação.",
          "Concluir que sua existência elimina autoritarismo."
        ],
        "answer": 2,
        "explanation": "Texto normativo, grupos alcançados e efetivação são dimensões distintas."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Propaganda chama o líder de único responsável por um direito já reivindicado em greves. Qual estratégia aparece?",
        "options": [
          "Reconhecimento explícito de todas as ações coletivas.",
          "Neutralidade obrigatória da comunicação.",
          "Ausência de interesse político.",
          "Apropriação simbólica e personalização de conquistas."
        ],
        "answer": 3,
        "explanation": "A mensagem concentra crédito político no governante e pode apagar a participação de outros sujeitos."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Qual conjunto de fontes permite avaliar melhor a relação entre trabalho e Estado?",
        "options": [
          "Leis, registros sindicais e propaganda contextualizados.",
          "Apenas um retrato oficial sem data.",
          "Só a memória atual de um leitor.",
          "Exclusivamente a cor de cartazes."
        ],
        "answer": 0,
        "explanation": "O confronto entre norma, organização e representação permite examinar dimensões complementares."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um arquivo reúne lei trabalhista, decreto que restringe ação sindical e discurso que proclama harmonia sem conflitos. Qual interpretação é mais consistente?",
        "options": [
          "A lei demonstra liberdade sindical ilimitada.",
          "Proteção social, tutela política e discurso de conciliação puderam coexistir; a propaganda não prova ausência de disputas.",
          "O decreto prova inexistência de qualquer proteção trabalhista.",
          "A harmonia anunciada torna irrelevantes as outras fontes."
        ],
        "answer": 1,
        "explanation": "As evidências não se anulam: revelam dimensões articuladas de um projeto de poder. Reconhecer direitos não exige negar controle, e discurso conciliador não é registro neutro de consenso."
      }
    ]
  },
  {
    "id": "ditadura-redemocratizacao",
    "area": "humanas",
    "title": "Ditadura e redemocratização no Brasil",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Analise censura, resistência, participação popular e construção de direitos.",
    "objectives": [
      "Reconhecer características do autoritarismo",
      "Identificar formas de resistência",
      "Entender a democratização como processo"
    ],
    "sections": [
      {
        "title": "Reconhecer características do autoritarismo",
        "paragraphs": [
          "A ditadura militar brasileira iniciou-se em 1964 e terminou em 1985. Restrições a direitos, repressão e censura marcaram o período, com diferentes intensidades e instrumentos. O AI-5, de 1968, ampliou poderes excepcionais e a repressão.",
          "Crescimento econômico em determinados anos não demonstra legitimidade democrática nem distribuição igual dos resultados. Indicadores econômicos e direitos políticos medem dimensões distintas. Relacione desenvolvimento, concentração de renda, endividamento e condições de participação."
        ],
        "example": "Um aumento do produto econômico pode ocorrer ao mesmo tempo que censura a jornais e proibição de manifestações."
      },
      {
        "title": "Identificar formas de resistência",
        "paragraphs": [
          "Movimentos estudantis, trabalhadores, setores religiosos, artistas e organizações políticas participaram de resistências diversas. Não havia uma posição única nem métodos idênticos. Canções e obras culturais puderam recorrer a ambiguidades para contornar a censura.",
          "Uma fonte cultural pode revelar crítica indireta por imagens e metáforas. Para interpretá-la historicamente, conecte linguagem, público e restrições de circulação. A ausência de menção explícita ao governo não impede um sentido político contextualizado."
        ],
        "example": "Uma letra sobre silêncio imposto pode funcionar como crítica à censura, mas essa leitura precisa de pistas textuais e contexto."
      },
      {
        "title": "Entender a democratização como processo",
        "paragraphs": [
          "A abertura envolveu disputas, mobilizações e negociações. As Diretas Já reivindicaram eleições diretas para presidente, mas a escolha presidencial de 1985 ocorreu de forma indireta. A Constituição de 1988 foi outro marco, posterior à mudança de governo.",
          "Democracia envolve eleições, pluralismo, direitos, fiscalização e participação. A existência de garantias constitucionais não assegura implementação imediata. Analise os caminhos institucionais e as lutas por efetivação."
        ],
        "example": "Uma audiência pública e um conselho de políticas públicas são formas de participação que vão além do momento do voto."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "A sequência 1964, AI-5 em 1968, fim da ditadura em 1985 e Constituição de 1988 ajuda a distinguir ruptura, intensificação repressiva, transição de governo e novo marco constitucional. A abertura foi disputada e não tornou cada conquista automática. Fontes sob censura exigem atenção a silêncios, linguagem indireta e condições de circulação, sem atribuir qualquer metáfora a um único sentido obrigatório."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma notícia fala em “abertura” enquanto outro registro aponta continuidade da censura. Isso pode indicar processo parcial, com ritmos e conflitos. A palavra usada pelo governo não demonstra, sozinha, que todas as liberdades já estavam garantidas."
      }
    ],
    "questions": [
      {
        "prompt": "O AI-5 é associado a:",
        "options": [
          "Ampliação da censura e de poderes excepcionais.",
          "Promulgação da Constituição de 1988.",
          "Independência de 1822.",
          "Eleições presidenciais diretas em 1968."
        ],
        "answer": 0,
        "explanation": "O ato de 1968 intensificou instrumentos autoritários. Não deve ser confundido com os marcos da redemocratização."
      },
      {
        "prompt": "A campanha Diretas Já reivindicava:",
        "options": [
          "Retorno à monarquia.",
          "Eleições diretas para presidente.",
          "Proibição do voto.",
          "A extinção de toda participação civil."
        ],
        "answer": 1,
        "explanation": "A mobilização defendia a escolha direta da Presidência. A eleição de 1985 ainda foi indireta, o que exige distinguir reivindicação e resultado imediato."
      },
      {
        "prompt": "Qual conclusão sobre democracia é mais adequada?",
        "options": [
          "Resume-se ao crescimento econômico.",
          "Dispensa oposição política.",
          "Envolve direitos, pluralismo e participação além do voto.",
          "Surge automaticamente após qualquer troca de governante."
        ],
        "answer": 2,
        "explanation": "Eleição é importante, mas democracia também exige liberdades, controle do poder e condições de participação. Mudanças de governo não bastam por si sós."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Qual sequência está cronologicamente correta?",
        "options": [
          "Golpe de 1964 → AI-5 → fim da ditadura em 1985 → Constituição de 1988.",
          "AI-5 → Constituição de 1988 → golpe de 1964 → fim da ditadura.",
          "Constituição de 1988 → AI-5 → golpe de 1964 → fim da ditadura.",
          "Fim da ditadura → golpe de 1964 → Constituição → AI-5."
        ],
        "answer": 0,
        "explanation": "O AI-5 é de 1968; a Constituição é posterior ao encerramento do regime militar em 1985."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Por que crescimento econômico não prova democracia?",
        "options": [
          "Toda economia em crescimento é necessariamente ditatorial.",
          "Indicadores econômicos não medem por si só liberdades e participação política.",
          "Democracias não produzem bens.",
          "Eleições são medidas em produto econômico."
        ],
        "answer": 1,
        "explanation": "Dimensões econômicas e políticas podem variar de modos diferentes e exigem evidências próprias."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma obra usa imagens indiretas para criticar o poder em contexto de censura. Qual cuidado cabe ao leitor?",
        "options": [
          "Supor que toda metáfora critica o mesmo governo.",
          "Ignorar o contexto porque arte não tem dimensão social.",
          "Relacionar pistas da obra às condições históricas de circulação.",
          "Tomar a voz ficcional como documento biográfico literal."
        ],
        "answer": 2,
        "explanation": "A interpretação precisa de suporte textual e contextual, sem transformar qualquer imagem em código fixo."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] A escolha presidencial de 1985 foi direta, como reivindicavam as Diretas Já?",
        "options": [
          "Sim; houve voto direto de toda a população naquele ano.",
          "Não; não houve nenhuma mudança política.",
          "Sim; a Constituição de 1988 já vigorava em 1985.",
          "Não; a eleição foi indireta, embora a campanha tenha ampliado mobilização democrática."
        ],
        "answer": 3,
        "explanation": "É necessário distinguir a reivindicação popular do mecanismo institucional efetivamente usado na transição."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Conselhos e audiências públicas mostram que a participação democrática pode quê?",
        "options": [
          "Continuar além do voto e envolver controle de políticas.",
          "Substituir necessariamente toda eleição.",
          "Dispensar pluralismo.",
          "Existir apenas em anos eleitorais."
        ],
        "answer": 0,
        "explanation": "A democracia compreende canais de acompanhamento e discussão entre eleições."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um jornal censurado deixa de publicar denúncias. A ausência de denúncias prova o quê?",
        "options": [
          "Que nenhum abuso ocorreu.",
          "Sozinha, não prova ausência dos fatos, pois a circulação estava restringida.",
          "Que o jornal tinha acesso irrestrito a todos os dados.",
          "Que a população apoiava unanimemente o governo."
        ],
        "answer": 1,
        "explanation": "O silêncio documental pode refletir coerção e seleção; a análise deve buscar outras fontes."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um discurso anuncia abertura; registros mostram censura persistente; movimentos exigem eleição direta e a eleição seguinte ocorre indiretamente. Qual leitura integra esse conjunto?",
        "options": [
          "O anúncio comprova democracia plena desde sua publicação.",
          "A eleição indireta prova que não houve qualquer mobilização social.",
          "A transição foi um processo disputado e parcial, com diferenças entre anúncio, mobilização e arranjo institucional.",
          "A censura persistente elimina toda mudança posterior por definição."
        ],
        "answer": 2,
        "explanation": "As fontes mostram temporalidades e agentes distintos. A existência de mudanças não apaga continuidades autoritárias, e a reivindicação não equivale ao resultado institucional imediato."
      }
    ]
  },
  {
    "id": "cartografia-clima",
    "area": "humanas",
    "title": "Cartografia, clima e interpretação do espaço",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Trabalhe com escalas, coordenadas e mecanismos climáticos relacionando representação e realidade.",
    "objectives": [
      "Ler escala, orientação e projeção",
      "Distinguir tempo e clima",
      "Relacionar cobertura do solo e água"
    ],
    "sections": [
      {
        "title": "Ler escala, orientação e projeção",
        "paragraphs": [
          "A escala é a razão entre distância no mapa e distância no terreno nas mesmas unidades. Quanto maior o denominador da escala numérica, menor a escala e, em geral, menor o detalhamento de uma área equivalente no papel. Converta centímetros para metros ou quilômetros antes de concluir.",
          "Toda projeção de uma superfície curva no plano introduz distorções. Uma projeção equivalente preserva áreas relativas; uma conforme preserva ângulos localmente. Não existe mapa plano sem distorção de todas as propriedades. Legenda, orientação e fonte completam a leitura."
        ],
        "example": "Em 1:50.000, 1 cm corresponde a 500 m. Uma trilha de 6 cm representa 3 km, se medida de acordo com a escala."
      },
      {
        "title": "Distinguir tempo e clima",
        "paragraphs": [
          "Tempo é o estado atmosférico em um lugar e momento; clima descreve padrões e variabilidade observados em períodos longos. Um dia frio não refuta uma tendência de aquecimento de longo prazo. A escala temporal da evidência precisa corresponder à afirmação.",
          "Latitude, altitude, continentalidade, maritimidade, relevo e circulação atmosférica influenciam temperatura e precipitação. Altitude maior costuma associar-se a temperaturas menores na troposfera, mas condições locais e inversões térmicas exigem cuidado com generalizações absolutas."
        ],
        "example": "Uma cidade pode ter inverno com episódios muito frios e, ainda assim, apresentar aumento de sua temperatura média em séries de décadas."
      },
      {
        "title": "Relacionar cobertura do solo e água",
        "paragraphs": [
          "Vegetação participa da evapotranspiração e da proteção do solo. Retirada de cobertura vegetal e impermeabilização alteram infiltração e escoamento. Chuvas intensas não produzem os mesmos impactos em qualquer território: infraestrutura e ocupação também importam.",
          "Em climogramas, identifique quais barras representam chuva e qual linha representa temperatura. Compare os meses de máxima e mínima precipitação e a amplitude térmica anual. Não confunda quantidade mensal de chuva com probabilidade diária de chover."
        ],
        "example": "Se a média do mês mais quente é 28 °C e a do mais frio é 20 °C, a amplitude térmica anual dessas médias é 8 °C."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Ao ampliar uma impressão de mapa sem atualizar a escala numérica, a escala escrita deixa de corresponder ao tamanho impresso; a escala gráfica, ampliada junto, mantém a relação visual. Em áreas, o fator de escala é quadrático. Médias de longo prazo e episódios diários respondem a escalas temporais diferentes. Toda interpretação de mapa ou climograma exige unidades, legenda e recorte espacial."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um mapa 1:100.000 é ampliado para o dobro das dimensões lineares. A distância real representada por 1 cm impresso cai pela metade: nova escala 1:50.000. Uma área no papel fica quatro vezes maior, não duas."
      }
    ],
    "questions": [
      {
        "prompt": "Em escala 1:50.000, 4 cm representam:",
        "options": [
          "200 m.",
          "2 km.",
          "20 km.",
          "50 km."
        ],
        "answer": 1,
        "explanation": "4 × 50.000 = 200.000 cm. Como 100.000 cm equivalem a 1 km, a distância é 2 km."
      },
      {
        "prompt": "Qual frase descreve tempo atmosférico?",
        "options": [
          "A região apresenta verões habitualmente chuvosos.",
          "A série histórica indica baixa amplitude anual.",
          "Hoje choveu à tarde nesta cidade.",
          "A média de trinta anos é 24 °C."
        ],
        "answer": 2,
        "explanation": "A observação de um dia caracteriza tempo. As demais descrevem padrões ou estatísticas de longo prazo associados ao clima."
      },
      {
        "prompt": "Um mapa plano sempre:",
        "options": [
          "Envolve alguma distorção da superfície terrestre.",
          "Preserva simultaneamente todas as áreas e distâncias.",
          "Dispensa escala.",
          "Representa todos os detalhes do terreno."
        ],
        "answer": 0,
        "explanation": "A passagem da superfície curva para o plano implica distorções. A escolha de projeção depende das propriedades e finalidades priorizadas."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Entre mapas 1:10.000 e 1:100.000, qual tende a mostrar mais detalhe de uma mesma região?",
        "options": [
          "1:100.000.",
          "1:10.000.",
          "Ambos têm necessariamente o mesmo detalhe.",
          "Nenhum pode representar ruas."
        ],
        "answer": 1,
        "explanation": "A fração 1/10.000 é maior; em escala maior, a região ocupa mais espaço no papel."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um mapa 1:100.000 é ampliado ao dobro das dimensões lineares. Qual é a nova escala correta?",
        "options": [
          "1:200.000.",
          "1:100.000.",
          "1:50.000.",
          "1:25.000."
        ],
        "answer": 2,
        "explanation": "Cada centímetro novo representa metade da distância anterior; o denominador cai à metade."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma projeção equivalente prioriza preservar qual propriedade?",
        "options": [
          "Todas as distâncias e ângulos simultaneamente.",
          "A ausência total de distorção.",
          "A altitude de cada árvore.",
          "Áreas relativas."
        ],
        "answer": 3,
        "explanation": "Projetar a superfície curva exige escolhas; equivalência preserva áreas, não todas as propriedades."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] As médias mensais máxima e mínima de temperatura são 29 °C e 17 °C. Qual é a amplitude anual dessas médias?",
        "options": [
          "12 °C.",
          "46 °C.",
          "23 °C.",
          "1,7 °C."
        ],
        "answer": 0,
        "explanation": "Amplitude é máximo menos mínimo: 29 − 17 = 12 °C."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um dia muito frio invalida, sozinho, uma tendência de aquecimento em décadas?",
        "options": [
          "Sim; qualquer dia frio elimina a tendência.",
          "Não; um episódio diário não resume uma série climática longa.",
          "Sim; clima e tempo são a mesma medida.",
          "Não; porque séries climáticas ignoram toda variabilidade."
        ],
        "answer": 1,
        "explanation": "A tendência é avaliada em séries e pode coexistir com episódios frios e variações locais."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Retirar vegetação de uma encosta pode favorecer o quê, nas condições apropriadas?",
        "options": [
          "Proteção obrigatória do solo contra toda chuva.",
          "Fim da necessidade de drenagem.",
          "Maior erosão e alteração da infiltração e do escoamento.",
          "Aumento garantido de estabilidade sem manejo."
        ],
        "answer": 2,
        "explanation": "A cobertura protege o solo; seus efeitos dependem de relevo, chuva e uso posterior."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um mapa 1:50.000 é impresso com ampliação linear de 150%, sem atualizar a escala numérica. Na cópia, um terreno ocupa 9 cm². Qual é a área real, usando a escala efetiva da cópia?",
        "options": [
          "2,25 km².",
          "0,25 km².",
          "1,5 km².",
          "1 km²."
        ],
        "answer": 3,
        "explanation": "O comprimento foi multiplicado por 1,5, então a área foi multiplicada por 2,25. Na versão original, o terreno ocupava 9/2,25 = 4 cm². Cada cm original representa 0,5 km; cada cm² representa 0,25 km². Área real = 4 × 0,25 = 1 km²."
      }
    ]
  },
  {
    "id": "agro-globalizacao",
    "area": "humanas",
    "title": "Espaço agrário, globalização e cadeias produtivas",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Observe tecnologia, concentração territorial, redes e desigualdades nas relações econômicas.",
    "objectives": [
      "Relacionar modernização e estrutura agrária",
      "Compreender cadeias e divisão territorial",
      "Avaliar impactos e alternativas"
    ],
    "sections": [
      {
        "title": "Relacionar modernização e estrutura agrária",
        "paragraphs": [
          "Mecanização, fertilizantes e melhoramento de cultivos podem elevar produtividade. Seus efeitos sociais dependem de acesso a crédito, terra, assistência e mercados. Modernização técnica não elimina automaticamente concentração fundiária nem desigualdades regionais.",
          "Agricultura familiar e produção empresarial são categorias que não se reduzem à oposição entre atraso e tecnologia. Há diversidade de escalas, produtos e práticas. Ao ler uma tabela, diferencie produção total, produtividade por área e valor comercializado."
        ],
        "example": "Uma propriedade pode produzir menos toneladas no total e mais toneladas por hectare que outra maior. São indicadores diferentes."
      },
      {
        "title": "Compreender cadeias e divisão territorial",
        "paragraphs": [
          "Uma mercadoria pode reunir matéria-prima de um país, componentes de outros e montagem em um terceiro. Essa fragmentação depende de transportes, comunicação, acordos e decisões empresariais. Etapas de maior valor agregado não são distribuídas igualmente.",
          "Globalização amplia conexões, mas também pode produzir dependências e vulnerabilidade a interrupções. A localização industrial considera logística, trabalho, energia, mercado e políticas públicas. Não existe um único fator universal para todas as empresas."
        ],
        "example": "Uma crise em um fornecedor de componentes pode interromper a montagem distante, mesmo com trabalhadores e prédios disponíveis."
      },
      {
        "title": "Avaliar impactos e alternativas",
        "paragraphs": [
          "Expansão agrícola pode gerar renda e alimentos, mas também conflitos territoriais e pressão ambiental. A análise exige observar formas de uso da terra e direitos das populações envolvidas. Uma monocultura não tem os mesmos efeitos em todo solo e clima.",
          "Práticas como rotação, conservação do solo e integração de sistemas podem reduzir certos impactos quando adequadas ao contexto. Não confunda uma solução localizada com garantia de sustentabilidade integral. Compare produtividade, biodiversidade e distribuição de benefícios."
        ],
        "example": "Plantio em curvas de nível reduz a velocidade do escoamento em encostas e pode diminuir erosão; não dispensa outras medidas de manejo."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Produção total é produtividade vezes área cultivada; mudanças simultâneas exigem multiplicar fatores. Redes globais distribuem etapas e poder de modo desigual: conexão não implica ganho igual. A tecnologia pode aumentar eficiência sem alterar a concentração da terra. Avaliar alternativas requer integrar produtividade, conservação e condições sociais, com atenção a escalas e grupos afetados."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: uma área cresce 20% e a produtividade cai 10%. Produção nova = área antiga × 1,20 × produtividade antiga × 0,90 = 1,08 da produção anterior. Há crescimento de 8%, apesar da queda de produtividade."
      }
    ],
    "questions": [
      {
        "prompt": "Uma fazenda produz 600 t em 100 ha; outra, 400 t em 50 ha. Qual tem maior produtividade?",
        "options": [
          "A primeira, com 6 t/ha.",
          "A segunda, com 8 t/ha.",
          "As duas, com 10 t/ha.",
          "Não é possível calcular com esses dados."
        ],
        "answer": 1,
        "explanation": "Produtividade é produção dividida pela área: 600/100 = 6 e 400/50 = 8 t/ha. A maior produção total não implica maior produtividade."
      },
      {
        "prompt": "Montagem interrompida pela falta de um componente importado evidencia:",
        "options": [
          "Autossuficiência absoluta.",
          "Ausência de redes econômicas.",
          "Interdependência de cadeias produtivas.",
          "Fim de toda indústria nacional."
        ],
        "answer": 2,
        "explanation": "A produção depende de etapas distribuídas e conectadas. Uma interrupção permite observar essa dependência, sem provar o fim de toda indústria."
      },
      {
        "prompt": "Modernização técnica no campo garante, por si só:",
        "options": [
          "Nenhuma eliminação automática da desigualdade fundiária.",
          "Divisão igual de toda a terra.",
          "Fim de conflitos territoriais.",
          "Acesso universal a crédito."
        ],
        "answer": 0,
        "explanation": "Mudanças tecnológicas não determinam distribuição da propriedade e do crédito. Esses resultados dependem de relações sociais e políticas específicas."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Uma lavoura produz 900 t em 150 ha. Qual é a produtividade?",
        "options": [
          "750 t/ha.",
          "0,167 t/ha.",
          "6 t/ha.",
          "1.050 t/ha."
        ],
        "answer": 2,
        "explanation": "Produtividade = produção/área = 900/150 = 6 t/ha."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma empresa monta em um país componentes de outros e concentra pesquisa em sua sede. O caso mostra quê?",
        "options": [
          "Autossuficiência de cada local em toda a cadeia.",
          "Distribuição necessariamente igual do valor agregado.",
          "Fim das decisões empresariais.",
          "Fragmentação territorial das etapas de produção."
        ],
        "answer": 3,
        "explanation": "Etapas se distribuem espacialmente, mas funções e ganhos não precisam ser equivalentes."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual política pode enfrentar erosão em encostas agrícolas, conforme condições locais?",
        "options": [
          "Plantio em curvas de nível associado a manejo conservacionista.",
          "Remoção completa e permanente da cobertura.",
          "Cultivo sem considerar declividade.",
          "Aumento intencional da velocidade do escoamento."
        ],
        "answer": 0,
        "explanation": "Curvas de nível podem desacelerar água e reduzir erosão, sem dispensar outras práticas."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um aumento da mecanização garante distribuição igual da terra?",
        "options": [
          "Sim; máquinas repartem automaticamente as propriedades.",
          "Não; técnica e estrutura de propriedade são dimensões distintas.",
          "Sim; concentração desaparece com aumento de produção.",
          "Não; pois tecnologia nunca altera relações sociais."
        ],
        "answer": 1,
        "explanation": "A tecnologia pode interagir com relações sociais, mas não determina por si a distribuição fundiária."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma interrupção logística externa paralisa várias fábricas. Qual vulnerabilidade se destaca?",
        "options": [
          "Ausência de qualquer relação internacional.",
          "Inexistência de fluxos de componentes.",
          "Dependência de elos conectados de uma rede produtiva.",
          "Autonomia absoluta de cada unidade."
        ],
        "answer": 2,
        "explanation": "A interdependência permite coordenação e também transmite impactos entre locais."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Uma pequena propriedade apresenta alta produção por hectare. Qual conclusão é válida?",
        "options": [
          "Seu total é necessariamente maior que o de toda grande propriedade.",
          "Seu acesso a crédito é necessariamente igual ao das demais.",
          "Ela não pode usar tecnologia.",
          "Sua produtividade pode superar a de uma maior, mesmo com menor produção total."
        ],
        "answer": 3,
        "explanation": "Tamanho, produção total, produtividade e acesso a recursos são indicadores diferentes."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Uma região aumenta a área cultivada em 25% e reduz a produtividade em 20%. A produção total fica como antes, mas a expansão ocupa vegetação nativa. Qual avaliação é sustentada?",
        "options": [
          "A produção fica estável pelo produto dos fatores, enquanto o indicador produtivo isolado não mostra o custo territorial.",
          "A produção cresce 5%, provando melhora ambiental.",
          "A produção cai 45%, tornando desnecessário examinar uso do solo.",
          "Produção estável prova ausência de qualquer impacto."
        ],
        "answer": 0,
        "explanation": "1,25 × 0,80 = 1,00, portanto o total não muda. A expansão territorial e a perda de cobertura são dimensões adicionais, que não desaparecem por estabilidade do volume produzido."
      }
    ]
  },
  {
    "id": "filosofia-etica-politica",
    "area": "humanas",
    "title": "Ética, conhecimento e contrato social",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Diferencie justificar crenças, avaliar ações e explicar a legitimidade do poder.",
    "objectives": [
      "Construir uma pergunta filosófica",
      "Comparar critérios éticos",
      "Entender legitimidade e contrato"
    ],
    "sections": [
      {
        "title": "Construir uma pergunta filosófica",
        "paragraphs": [
          "A filosofia examina fundamentos: como sabemos, o que torna uma ação justa e por que uma autoridade seria legítima. Argumentar exige explicitar razões e verificar se a conclusão decorre delas. Popularidade de uma crença não constitui prova de sua verdade.",
          "Um argumento válido preserva a conclusão se as premissas forem verdadeiras, mas a validade não garante que suas premissas descrevam o mundo. Diferencie forma lógica e sustentação empírica. Um ataque à pessoa não refuta necessariamente seu argumento."
        ],
        "example": "“Todos os mamíferos são animais; baleias são mamíferos; logo baleias são animais” é uma inferência válida com premissas verdadeiras."
      },
      {
        "title": "Comparar critérios éticos",
        "paragraphs": [
          "Uma avaliação baseada em consequências considera os resultados da ação. Uma avaliação deontológica enfatiza deveres e princípios. A ética das virtudes investiga disposições de caráter e formação de hábitos. São perspectivas diferentes, não sinônimos de gostar ou não gostar de algo.",
          "Dilemas éticos podem opor valores relevantes. Ao resolver uma questão, identifique o critério apresentado no texto e aplique-o sem substituí-lo por sua preferência pessoal. Não transforme uma comparação introdutória em retrato completo de cada tradição."
        ],
        "example": "Avaliar uma decisão pelo respeito a um dever, mesmo quando seria vantajoso violá-lo, aproxima-se de uma justificativa deontológica."
      },
      {
        "title": "Entender legitimidade e contrato",
        "paragraphs": [
          "Teorias contratualistas utilizam a ideia de pacto para explicar ou justificar a organização política. O estado de natureza é uma construção teórica e varia entre autores. Não precisa ser entendido como uma etapa histórica comprovada.",
          "Hobbes destaca segurança diante do conflito; Locke associa governo à proteção de direitos; Rousseau discute soberania e vontade geral. Essas sínteses ajudam a comparar problemas, mas a leitura de um trecho deve prevalecer sobre palavras memorizadas."
        ],
        "example": "Se um trecho justifica poder comum pela necessidade de conter insegurança, sua questão central é a relação entre ordem política e proteção."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Validade lógica trata da relação entre premissas e conclusão, não da comprovação de cada premissa. Em “se P, então Q”, afirmar P permite concluir Q; afirmar Q não permite concluir P. Consequencialismo, deontologia e ética das virtudes enfatizam critérios distintos. No contratualismo, o pacto é um recurso de fundamentação cuja função varia entre autores, e não precisa ser registro de um contrato histórico assinado."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: “Se chove, a rua molha; a rua está molhada; logo choveu” não é uma conclusão necessária, pois outra causa pode molhar a rua. Já negar que a rua esteja molhada, mantida a primeira premissa, permite negar a chuva naquele modelo. A estrutura e a verdade empírica são verificações diferentes."
      }
    ],
    "questions": [
      {
        "prompt": "“Essa ideia é falsa porque seu autor é antipático.” O problema é:",
        "options": [
          "Demonstração matemática.",
          "Ataque à pessoa em lugar de refutação das razões.",
          "Verificação experimental.",
          "Conclusão obrigatoriamente verdadeira."
        ],
        "answer": 1,
        "explanation": "A característica pessoal citada não resolve o conteúdo da ideia. A análise deve examinar as premissas e evidências pertinentes."
      },
      {
        "prompt": "Uma decisão é defendida exclusivamente por produzir o melhor resultado coletivo. O critério enfatizado é:",
        "options": [
          "A aparência do agente.",
          "A tradição familiar apenas.",
          "As consequências.",
          "A impossibilidade de avaliar ações."
        ],
        "answer": 2,
        "explanation": "O enunciado fundamenta a decisão nos efeitos produzidos. Isso caracteriza um critério consequencialista em contraste com fundamentação apenas no dever."
      },
      {
        "prompt": "O estado de natureza nas teorias contratualistas deve ser tratado como:",
        "options": [
          "Construção teórica que varia conforme o autor.",
          "Um país específico.",
          "Um evento de data única comprovada.",
          "Sinônimo obrigatório de democracia."
        ],
        "answer": 0,
        "explanation": "É um recurso teórico para discutir a condição humana e a legitimidade política. Autores atribuem características diferentes a essa condição."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Um argumento válido pode ter premissa falsa?",
        "options": [
          "Não; validade exige pesquisa histórica já concluída.",
          "Sim; e isso torna qualquer conclusão necessariamente verdadeira.",
          "Não; argumentos só existem em matemática.",
          "Sim; validade não comprova por si a verdade das premissas."
        ],
        "answer": 3,
        "explanation": "A validade descreve se a conclusão decorre das premissas; avaliar a verdade delas é outro trabalho."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Um agente mantém uma promessa por dever, mesmo perdendo vantagem pessoal. Qual critério é enfatizado?",
        "options": [
          "Deontológico.",
          "Exclusivamente maximização de lucro.",
          "Popularidade do agente.",
          "Ausência de qualquer razão moral."
        ],
        "answer": 0,
        "explanation": "A justificativa se apoia no dever de cumprir a promessa, não apenas no saldo vantajoso."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma análise pergunta quais hábitos formam uma pessoa justa. Qual perspectiva está mais próxima?",
        "options": [
          "Cálculo de frequência de palavras.",
          "Ética das virtudes.",
          "Teoria de projeções cartográficas.",
          "Negação de qualquer caráter."
        ],
        "answer": 1,
        "explanation": "A atenção à formação de disposições e hábitos aproxima-se da ética das virtudes."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] No contraste introdutório entre contratualistas, a ênfase hobbesiana recai em quê?",
        "options": [
          "Prova de um contrato histórico único assinado por todos.",
          "Fim de toda autoridade política.",
          "Poder comum capaz de enfrentar insegurança e conflito.",
          "Identidade de todas as teorias do pacto."
        ],
        "answer": 2,
        "explanation": "A segurança diante do conflito é um problema central em Hobbes; a síntese não substitui a leitura contextual dos textos."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Em Locke, a legitimidade do governo relaciona-se, em uma síntese introdutória, a quê?",
        "options": [
          "Direito irrestrito de todo governante agir arbitrariamente.",
          "Proibição de qualquer propriedade em todas as situações.",
          "Ausência de consentimento como fundamento único.",
          "Proteção de direitos e limites ao poder."
        ],
        "answer": 3,
        "explanation": "A proteção de direitos e o consentimento são elementos relevantes de sua discussão política."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Por que vontade geral em Rousseau não deve ser igualada automaticamente à soma de interesses privados?",
        "options": [
          "O conceito remete ao interesse comum, não apenas à agregação de vantagens particulares.",
          "Toda decisão popular é necessariamente interesse comum.",
          "Rousseau elimina a questão da soberania.",
          "Vontade geral é um fenômeno meteorológico."
        ],
        "answer": 0,
        "explanation": "É preciso distinguir orientação ao comum de simples reunião de desejos particulares, sem presumir equivalência automática com qualquer votação."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Considere: I “Se um governo é legítimo, protege direitos”. II “Este governo protege direitos”. III “Logo, é legítimo”. Qual avaliação distingue lógica e política?",
        "options": [
          "O argumento é válido porque repete “direitos”.",
          "A conclusão não decorre necessariamente: proteção pode ser necessária sem ser suficiente, e a verdade das premissas exige exame próprio.",
          "A conclusão é necessariamente falsa, qualquer que seja o caso.",
          "A segunda premissa demonstra que nenhum outro critério de legitimidade pode existir."
        ],
        "answer": 1,
        "explanation": "Afirmar o consequente não prova o antecedente. Identificar a falha não determina a legitimidade real do governo: esta precisa de critérios e evidências adicionais."
      }
    ]
  },
  {
    "id": "sociologia-cultura",
    "area": "humanas",
    "title": "Cultura, socialização e desigualdade",
    "minutes": 45,
    "level": "Aprofundamento",
    "summary": "Use conceitos sociológicos para interpretar instituições e diferenças sem naturalizá-las.",
    "objectives": [
      "Relacionar indivíduo e sociedade",
      "Distinguir etnocentrismo e relativização",
      "Comparar clássicos e aplicar conceitos"
    ],
    "sections": [
      {
        "title": "Relacionar indivíduo e sociedade",
        "paragraphs": [
          "Socialização é o processo de aprender práticas, normas e valores em relações sociais. Família, escola, trabalho e meios de comunicação participam desse processo. Aprendizagem social não significa que os indivíduos sejam incapazes de questionar ou transformar normas.",
          "Instituições organizam expectativas e práticas relativamente estáveis. Um fenômeno social precisa ser analisado para além de escolhas individuais isoladas, considerando recursos, regras e trajetórias. A mesma oportunidade formal pode ser vivida de modo desigual."
        ],
        "example": "Duas pessoas podem prestar a mesma prova, mas ter tempos de estudo e acesso a material muito diferentes."
      },
      {
        "title": "Distinguir etnocentrismo e relativização",
        "paragraphs": [
          "Cultura envolve significados, conhecimentos e práticas compartilhadas e disputadas. Etnocentrismo toma a própria cultura como medida universal para hierarquizar outras. Relativizar é compreender uma prática em seu contexto antes de julgá-la por critérios tomados como naturais.",
          "Relativização analítica não exige aceitar toda violência ou abandonar direitos. Seu objetivo é evitar explicações baseadas em inferioridade supostamente inerente. Culturas mudam e comportam conflitos internos; não são blocos homogêneos congelados no tempo."
        ],
        "example": "Chamar uma prática alimentar de “atrasada” apenas por ser diferente da própria dieta exemplifica uma hierarquização etnocêntrica."
      },
      {
        "title": "Comparar clássicos e aplicar conceitos",
        "paragraphs": [
          "Marx enfatiza relações de produção e conflitos de classe; Durkheim examina fatos sociais e formas de solidariedade; Weber analisa sentidos da ação social e tipos de dominação. Essas ênfases não esgotam suas obras, mas permitem reconhecer perguntas distintas.",
          "Burocracia, em um tipo ideal weberiano, envolve competências definidas, regras e impessoalidade. Não equivale simplesmente a demora. Em questões, procure o conceito que explica o mecanismo descrito, em vez de associar qualquer problema administrativo a uma palavra negativa."
        ],
        "example": "Um concurso com critérios públicos e funções definidas exemplifica a busca de impessoalidade, mesmo que sua aplicação real possa apresentar problemas."
      },
      {
        "title": "Aprofundamento: relações e cuidados",
        "paragraphs": [
          "Explicar sociologicamente não exige negar escolhas individuais: situa-as em recursos, instituições, normas e relações de poder. Cultura é aprendida, compartilhada e disputada, com diversidade interna e mudanças. Tipos ideais são instrumentos de análise, não cópias perfeitas de cada caso. Em Weber, organização racional-legal enfatiza regras e competências; favorecimento pessoal pode contradizer esse padrão."
        ]
      },
      {
        "title": "Problema resolvido e estratégia de revisão",
        "paragraphs": [
          "Acompanhe cada etapa, identifique a hipótese usada e explique por que uma alternativa tentadora não resolve o problema. Na prática a seguir, a última questão é um desafio de integração dos conceitos desta aula."
        ],
        "example": "Resolução: um órgão tem regulamento impessoal, mas cargos são distribuídos por parentesco. É possível distinguir a norma burocrática e a prática de favorecimento. A presença do regulamento não prova sua aplicação; o desvio não torna inútil o conceito para comparar o caso."
      }
    ],
    "questions": [
      {
        "prompt": "Etnocentrismo ocorre quando alguém:",
        "options": [
          "Busca compreender o contexto de uma prática.",
          "Usa a própria cultura para declarar outra inferior.",
          "Reconhece diversidade interna.",
          "Compara fontes sem hierarquização prévia."
        ],
        "answer": 1,
        "explanation": "A própria referência cultural vira padrão supostamente universal de superioridade. Compreensão contextual e comparação não são, por si, etnocêntricas."
      },
      {
        "prompt": "A socialização pode ser descrita como:",
        "options": [
          "Processo exclusivamente biológico.",
          "Ato que ocorre apenas no nascimento.",
          "Aprendizagem de normas e práticas nas relações sociais.",
          "Ausência de qualquer transformação individual."
        ],
        "answer": 2,
        "explanation": "A aprendizagem ocorre ao longo da vida em diferentes instituições e relações. Não impede crítica ou mudança das normas."
      },
      {
        "prompt": "Regras públicas e competências definidas se relacionam ao conceito de burocracia como:",
        "options": [
          "Organização baseada em procedimentos e impessoalidade.",
          "Ausência de toda norma.",
          "Preferência obrigatória por parentes.",
          "Sinônimo exclusivo de ineficiência."
        ],
        "answer": 0,
        "explanation": "O tipo ideal descreve uma forma de organização racional-legal. Ineficiência e favorecimento podem ser problemas reais, mas não definem o conceito."
      },
      {
        "prompt": "[Estilo ENEM] [Fundamentos] Duas pessoas fazem a mesma prova, mas têm tempos de estudo muito diferentes. Qual abordagem é sociologicamente pertinente?",
        "options": [
          "Analisar condições de preparação além da igualdade formal do teste.",
          "Concluir que oportunidade formal elimina toda desigualdade.",
          "Atribuir qualquer resultado apenas à origem biológica.",
          "Ignorar instituições por existirem escolhas individuais."
        ],
        "answer": 0,
        "explanation": "Recursos e trajetórias podem produzir condições desiguais mesmo com regras formais idênticas."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Uma pessoa aprende normas de uma profissão ao começar a trabalhar. Isso exemplifica quê?",
        "options": [
          "Um processo exclusivo da infância.",
          "Socialização ao longo da vida.",
          "Transmissão genética de regras profissionais.",
          "Ausência de aprendizagem institucional."
        ],
        "answer": 1,
        "explanation": "Socialização ocorre em diferentes etapas e espaços, não termina na infância."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Compreender uma prática em seu contexto exige aprovar qualquer violência nela presente?",
        "options": [
          "Sim; compreender significa aprovar integralmente.",
          "Sim; nenhuma comparação é possível.",
          "Não; relativização analítica não elimina discussão de direitos e danos.",
          "Não; porque culturas nunca têm contexto."
        ],
        "answer": 2,
        "explanation": "A análise contextual evita hierarquização apressada sem impedir crítica fundamentada."
      },
      {
        "prompt": "[Estilo ENEM] [Intermediária] Qual ênfase se associa à introdução do pensamento de Marx?",
        "options": [
          "Somente previsão meteorológica.",
          "Redução da sociedade a preferências sem relações materiais.",
          "Defesa de que instituições nunca mudam.",
          "Relações de produção e conflitos de classe."
        ],
        "answer": 3,
        "explanation": "Essa é uma ênfase central, embora não esgote a obra nem substitua análise de trechos específicos."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Em Durkheim, estudar normas que pressionam condutas individuais aproxima-se do exame de quê?",
        "options": [
          "Fatos sociais.",
          "Mutações genéticas dirigidas.",
          "Movimento uniforme de corpos.",
          "Preferências sem contexto coletivo."
        ],
        "answer": 0,
        "explanation": "A exterioridade e a força coercitiva de padrões sociais são elementos da abordagem durkheimiana introdutória."
      },
      {
        "prompt": "[Estilo ENEM] [Avançada] Um procedimento público define atribuições e critérios estáveis de seleção. Qual princípio ele procura realizar?",
        "options": [
          "Preferência obrigatória por parentes.",
          "Impessoalidade e organização por regras.",
          "Ausência de competências definidas.",
          "Decisão exclusivamente por afeto pessoal."
        ],
        "answer": 1,
        "explanation": "O procedimento se aproxima do padrão racional-legal; isso não garante aplicação perfeita em todos os casos."
      },
      {
        "prompt": "[Estilo ENEM] [Desafio — integração avançada] Um órgão tem concurso e regras públicas, mas pesquisa documenta favorecimento de parentes na promoção e diferenças de acesso à preparação. Qual interpretação articula norma, prática e desigualdade?",
        "options": [
          "A existência do concurso prova ausência de qualquer favorecimento.",
          "O favorecimento mostra que regras públicas são conceitualmente impossíveis.",
          "O modelo impessoal pode orientar a norma, enquanto relações pessoais e condições sociais limitam sua realização concreta.",
          "Diferenças de preparação provam inferioridade natural de certos grupos."
        ],
        "answer": 2,
        "explanation": "É preciso distinguir o padrão organizacional, seus desvios e as condições de acesso. O conceito ajuda a analisar tensões, sem supor que a instituição real realize perfeitamente o tipo ideal ou que desigualdades sejam naturais."
      }
    ]
  }
];

export const OFFICIAL_LINKS = {
  "matrix": "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem",
  "essay": "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
  "exam": "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-falta-um-mes-para-o-primeiro-dia-de-provas",
  "participant": "https://enem.inep.gov.br/participante/"
};
