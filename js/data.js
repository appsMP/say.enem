// Conteúdo educativo autoral. Questões de quatro alternativas compatíveis com a interface existente.
// Não são itens oficiais, previsões de prova ou estimativas TRI. Identificadores anteriores preservados.
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

export const LESSONS = [
  {
    "id": "interpretacao",
    "area": "linguagens",
    "title": "Interpretação de textos",
    "minutes": 25,
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
      }
    ]
  },
  {
    "id": "figuras-linguagem",
    "area": "linguagens",
    "title": "Figuras de linguagem",
    "minutes": 20,
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
      }
    ]
  },
  {
    "id": "generos-textuais",
    "area": "linguagens",
    "title": "Gêneros e funções da linguagem",
    "minutes": 25,
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
      }
    ]
  },
  {
    "id": "brasil-republica",
    "area": "humanas",
    "title": "Brasil República: cidadania",
    "minutes": 30,
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
          "Só a cor da imagem.",
          "A opinião do leitor atual como fato.",
          "A autoria, a época e o contexto político.",
          "A ausência de humor em toda charge."
        ],
        "answer": 2,
        "explanation": "As charges expressam posições e só fazem sentido quando contextualizadas."
      }
    ]
  },
  {
    "id": "geografia-ambiente",
    "area": "humanas",
    "title": "Urbanização e meio ambiente",
    "minutes": 25,
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
          "Apenas ao turismo internacional.",
          "Somente à iluminação de ruas.",
          "Exclusivamente à telefonia."
        ],
        "answer": 0,
        "explanation": "Água tratada, coleta de esgoto e manejo adequado de resíduos reduzem riscos à saúde."
      }
    ]
  },
  {
    "id": "filosofia-etica",
    "area": "humanas",
    "title": "Ética, sociedade e direitos",
    "minutes": 25,
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
      }
    ]
  },
  {
    "id": "ecologia",
    "area": "natureza",
    "title": "Ecologia e cadeias alimentares",
    "minutes": 30,
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
      }
    ]
  },
  {
    "id": "citologia",
    "area": "natureza",
    "title": "Células e organelas",
    "minutes": 30,
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
      }
    ],
    "questions": [
      {
        "prompt": "A principal função dos ribossomos é:",
        "options": [
          "Armazenar água.",
          "Realizar a síntese de proteínas.",
          "Produzir luz.",
          "Controlar a gravidade."
        ],
        "answer": 1,
        "explanation": "Ribossomos participam da tradução do RNA mensageiro e formação de proteínas."
      },
      {
        "prompt": "Uma característica típica de células procarióticas é:",
        "options": [
          "Núcleo delimitado por carioteca.",
          "Ausência total de material genético.",
          "Ausência de núcleo envolto por membrana.",
          "Presença obrigatória de cloroplastos."
        ],
        "answer": 2,
        "explanation": "O DNA de procariontes não fica isolado por um envoltório nuclear."
      }
    ]
  },
  {
    "id": "quimica-misturas",
    "area": "natureza",
    "title": "Misturas e separação",
    "minutes": 25,
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
          "Fusão nuclear.",
          "Eletrólise obrigatória.",
          "Radioatividade."
        ],
        "answer": 0,
        "explanation": "A filtração retém o sólido insolúvel, permitindo a passagem do líquido."
      }
    ]
  },
  {
    "id": "porcentagem",
    "area": "matematica",
    "title": "Porcentagem sem mistério",
    "minutes": 30,
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
      }
    ]
  },
  {
    "id": "proporcionalidade",
    "area": "matematica",
    "title": "Razões e proporcionalidade",
    "minutes": 30,
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
      }
    ]
  },
  {
    "id": "estatistica",
    "area": "matematica",
    "title": "Gráficos, média e mediana",
    "minutes": 30,
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
      }
    ],
    "questions": [
      {
        "prompt": "A bile auxilia a digestão principalmente ao:",
        "options": [
          "Emulsificar gorduras.",
          "Produzir hemoglobina.",
          "Transportar oxigênio.",
          "Atuar como enzima que quebra proteínas."
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
          "Apenas armazenamento.",
          "Conversão de todos os sais em proteínas.",
          "Reabsorção e secreção nos túbulos renais.",
          "Interrupção de toda troca."
        ],
        "answer": 2,
        "explanation": "Ao longo dos túbulos, substâncias são reabsorvidas e secretadas. A filtração inicial não determina sozinha a urina final."
      },
      {
        "prompt": "As trocas gasosas alveolares ocorrem principalmente por:",
        "options": [
          "Contração da hemoglobina.",
          "Osmose de glóbulos inteiros.",
          "Difusão segundo gradientes de pressão parcial.",
          "Produção de ar pelo sangue."
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
      }
    ],
    "questions": [
      {
        "prompt": "Vírus diferem de bactérias por:",
        "options": [
          "Terem sempre núcleo celular.",
          "Dependerem de células hospedeiras para multiplicação.",
          "Serem todos fungos.",
          "Possuírem a mesma parede bacteriana."
        ],
        "answer": 1,
        "explanation": "Vírus são acelulares e dependem de maquinaria celular. Bactérias são células procariontes com organização própria."
      },
      {
        "prompt": "O fornecimento de anticorpos prontos em um modelo de imunização corresponde a:",
        "options": [
          "Imunização ativa com memória obrigatória.",
          "Reprodução bacteriana.",
          "Imunização passiva.",
          "Produção de antígenos pelo rim."
        ],
        "answer": 2,
        "explanation": "Os anticorpos vêm de outra fonte, caracterizando imunização passiva. Não equivale a estimular o próprio organismo da mesma forma que uma vacina."
      },
      {
        "prompt": "Água tratada e coleta de esgoto contribuem para reduzir:",
        "options": [
          "Transmissão fecal-oral.",
          "A rotação da Terra.",
          "Toda doença genética.",
          "A existência de qualquer microrganismo no planeta."
        ],
        "answer": 0,
        "explanation": "As medidas reduzem contato com agentes presentes em material fecal. Não eliminam todas as doenças ou microrganismos."
      },
      {
        "prompt": "Qual estrutura é característica de uma bactéria em comparação com um vírus?",
        "options": [
          "Núcleo delimitado por membrana.",
          "Cloroplasto obrigatório.",
          "Sistema nervoso.",
          "Organização celular procarionte."
        ],
        "answer": 3,
        "explanation": "Bactérias são células procariontes, enquanto vírus são acelulares. Procariontes não têm núcleo delimitado por membrana."
      },
      {
        "prompt": "Uma estratégia de prevenção só pode ser associada corretamente a uma doença ao considerar:",
        "options": [
          "A cor da embalagem.",
          "O ciclo e a via de transmissão do agente.",
          "O nome mais curto da doença.",
          "A ideia de que toda doença tem o mesmo vetor."
        ],
        "answer": 1,
        "explanation": "Prevenção precisa atuar em mecanismos compatíveis com transmissão e exposição. Agentes e ciclos variam."
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
          "Somente moléculas apolares imóveis.",
          "Nêutrons livres obrigatoriamente.",
          "Ausência de cargas."
        ],
        "answer": 0,
        "explanation": "A condução requer portadores de carga móveis; em solução iônica, são os íons. No sólido, a mobilidade é muito menor."
      },
      {
        "prompt": "Na ebulição de água pura ocorre principalmente:",
        "options": [
          "Decomposição em hidrogênio e oxigênio.",
          "Vencimento de interações entre moléculas.",
          "Conversão de prótons em elétrons.",
          "Criação de um novo elemento."
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
          "Sim, sem exceção.",
          "Sim, se tiver qualquer cor clara.",
          "Apenas quando for sólido, sempre."
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
          "Mudança de número atômico.",
          "Ausência de carbono."
        ],
        "answer": 1,
        "explanation": "A mesma fórmula molecular com diferentes estruturas caracteriza isomeria; nesse caso, as funções também diferem."
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
          "Massa.",
          "Força sempre.",
          "Aceleração diretamente."
        ],
        "answer": 0,
        "explanation": "A área integra velocidade ao longo do tempo, resultando em deslocamento. A inclinação, por sua vez, corresponde à aceleração."
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
          "Empuxo é sempre zero.",
          "Peso é menor e o corpo acelera para cima.",
          "A massa é nula."
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
      }
    ],
    "questions": [
      {
        "prompt": "Som mais agudo tem maior:",
        "options": [
          "Velocidade necessariamente em qualquer meio.",
          "Frequência.",
          "Massa.",
          "Duração obrigatória."
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
      }
    ],
    "questions": [
      {
        "prompt": "“La oficina abre a las ocho.” Em contexto administrativo, “oficina” designa:",
        "options": [
          "Uma sobremesa.",
          "Um escritório.",
          "Um apelido.",
          "Uma oficina mecânica obrigatoriamente."
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
      }
    ],
    "questions": [
      {
        "prompt": "A produção açucareira colonial conectava-se principalmente:",
        "options": [
          "Ao isolamento completo do comércio.",
          "À industrialização automobilística.",
          "Ao mercado externo e ao trabalho escravizado.",
          "À ausência de propriedade da terra."
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
      }
    ]
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

export const OFFICIAL_LINKS = {
  "matrix": "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/matrizes-de-referencia-enem",
  "essay": "https://www.gov.br/inep/pt-br/centrais-de-conteudo/acervo-linha-editorial/publicacoes-institucionais/avaliacoes-e-exames-da-educacao-basica/a-redacao-do-enem-2026-cartilha-do-a-participante",
  "exam": "https://www.gov.br/inep/pt-br/centrais-de-conteudo/noticias/enem/enem-2026-falta-um-mes-para-o-primeiro-dia-de-provas",
  "participant": "https://enem.inep.gov.br/participante/"
};
