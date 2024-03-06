let livro_cw2 ={

  /* metadados 2 */
  versao:'0.1.00',
  nomeFantasia: '',
  nomeTecnico:'CW2 - Fundamentos em Ciência da Computação 2',
  resumo:'Charles Babbage foi um cientista, matemático, filósofo, engenheiro mecânico e inventor inglês que é mais conhecido como o inventor que projetou o primeiro computador de uso geral, utilizando apenas partes mecânicas, a máquina analítica.',
  isbn:'',
  autores:[],
  editor:'',
  local:'',
  ano:'',
  url:'compsci_cw2_0_1',

  versaoAdaptacao:'',
  nomeAdaptacaoo: '',
  autoresAdaptacao:[],
  local:'',
  escola:'',
  ano:'',
  url:'',
  codigoCid11:'', /* opc */
  descritivoPerfilAluno:'',
  resumoAdaptacao:'',

  capa:{
		urlImagemCapa:'',
		urlImagemSegundaCapa: '',
  },
  
   formularioRegistro:{
	  titulo:'',
	  urlImagem:'',
	  campos:[
	   {rotulo:'Login Somos:',formato:'usuarioAcessivel'},{rotulo:'Senha:',formato:'senhaAcessivel'}
	  ]},
  
  visaogeral:{
	  infografico:{
		  titulo:'Resumo do Módulo CW2',
		  /* idem licoes */
	  }},

    /* conteudo */
    unidade1:{
      titulo:'Fundamentos de Programação',
      descricao:'Nesta unidade, você será formalmente apresentado ao computador e aos dispositivos eletrônicos, além de dar seus primeiros passos em programação. Você aprenderá a resolver problemas lógicos e a conectar o pensamento computacional às atividades práticas através do algoritmo, como também a programar laços e expressões condicionais e lógicas que exercitam seu pensamento crítico e analítico.',
      licao1:{
        id:'CW2AULA01CODE',
        /** padroesCurriculares: 
        titulo:'Lição 01. Dispositivos Computacionais.',**/
        infografico:{titulo:'Computador e Dispositivos Computacionais',
        tituloSimplificado:'O Computador',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao2:{},


      licao3:{
        id:'CW2AULA03CODE',
        /** padroesCurriculares: 
        titulo:'Lição 03. Eletricidade e Dispositivos Eletrônicos.',**/
        infografico:{titulo:'Eletricidade e Dispositivos Eletrônicos',
        tituloSimplificado:'Eletrecidade e Eletrônica',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao4:{
        id:'CW2AULA04CODE',
        /** padroesCurriculares: 
        titulo:'Lição 04. Algoritmo, Identificação de Padrão e Sequência.',**/
        infografico:{titulo:'Algoritmos do Dia a Dia',
        tituloSimplificado:'Algoritmos',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao5:{
        id:'CW2AULA05CODE',
        /** padroesCurriculares: 
        titulo:'Lição 05. Robótica.',**/
        infografico:{titulo:'Robôs: Sphero',
        tituloSimplificado:'Sphero',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},

      licao6:{
        id:'CW2AULA06CODE',
        /** padroesCurriculares: 
        titulo:'Lição 06. Projeto Taxibot.',**/
        infografico:{titulo:'Taxibot: Taxiamento Robotizado',
        tituloSimplificado:'Taxibot',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao7:{},	

    },


    unidade2:{
      titulo:'Condicionais, Robótica e Eventos Computacionais',
      descricao:'Nesta unidade, você será formalmente apresentado ao computador e aos dispositivos eletrônicos, além de dar seus primeiros passos em programação. Você aprenderá a resolver problemas lógicos e a conectar o pensamento computacional às atividades práticas através do algoritmo, como também a programar laços e expressões condicionais e lógicas que exercitam seu pensamento crítico e analítico.',
      licao8:{
        id:'CW2AULA08CODE',
        /** padroesCurriculares: 
        titulo:'Lição 08. Laços.',**/
        infografico:{titulo:'Laço em Algoritmos',
        tituloSimplificado:'Laço',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao9:{
        id:'CW2AULA09CODE',
        /** padroesCurriculares: 
        titulo:'Lição 09. Expressões Condicionais.',**/
        infografico:{titulo:'Expressão Condicional: Se, Senão, se senão',
        tituloSimplificado:'Expressão Condicional',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao10:{},


      licao11:{
        id:'CW2AULA11CODE',
        /** padroesCurriculares: 
        titulo:'Lição 11. Projeto Biga-Robô.',**/
        infografico:{titulo:'História das Carruagens',
        tituloSimplificado:'Carruagens',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao12:{},


      licao13:{
        id:'CW2AULA13CODE',
        /** padroesCurriculares: 
        titulo:'Lição 13. Eventos.',**/
        infografico:{titulo:'Eventos',
        tituloSimplificado:'Eventos',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao14:{
        d:'CSXAULA14CODE',
        /** padroesCurriculares: 
        titulo:'Lição 14. Materiais Condutores e Não Condutores de Eletricidade.',**/
        infografico:{titulo:'Materiais Condutores e Não Condutores de Eletricidade',
        tituloSimplificado:'Materiais Condutores de Eletricidade',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},

    },

    unidade3:{
      titulo:'Inventos Robotizados e Computação Segura',
      descricao:'Nesta unidade, você será formalmente apresentado ao computador e aos dispositivos eletrônicos, além de dar seus primeiros passos em programação. Você aprenderá a resolver problemas lógicos e a conectar o pensamento computacional às atividades práticas através do algoritmo, como também a programar laços e expressões condicionais e lógicas que exercitam seu pensamento crítico e analítico.',
      licao15:{
        id:'CW2AULA15CODE',
        /** padroesCurriculares: 
        titulo:'Lição 15. Sensores e os Órgãos do Sentido.',**/
        infografico:{titulo:'Sensores e os Sentidos Humanos',
        tituloSimplificado:'Sensores',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao16:{
        id:'CW2AULA16CODE',
        /** padroesCurriculares: 
        titulo:'Lição 16. Projeto Carro Robotizados.',**/
        infografico:{titulo:'O Carro: Passado e Futuro',
        tituloSimplificado:'O Carro',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao17:{},


      licao18:{},


      licao19:{},

      licao20:{},


      licao21:{},	

    },

    unidade4:{
      titulo:'Animação e Computação Criativa',
      descricao:'Nesta unidade, você será formalmente apresentado ao computador e aos dispositivos eletrônicos, além de dar seus primeiros passos em programação. Você aprenderá a resolver problemas lógicos e a conectar o pensamento computacional às atividades práticas através do algoritmo, como também a programar laços e expressões condicionais e lógicas que exercitam seu pensamento crítico e analítico.',
      licao22:{
        id:'CW2AULA22CODE',
        /** padroesCurriculares: 
        titulo:'Lição 22. Os Primórdios da Animação.',**/
        infografico:{titulo:'Animações do Analógico ao Digital',
        tituloSimplificado:'Animações',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao23:{},


      licao24:{},


      licao25:{},


      licao26:{
        id:'CW2AULA26CODE',
        /** padroesCurriculares: 
        titulo:'Lição 26. Introdução ao Laboratório de Histórias.',**/
        infografico:{titulo:'Introdução ao Story Lab',
        tituloSimplificado:'O Story Lab',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
           ]}},

      licao27:{
        id:'CW2AULA26CODE',
        /** padroesCurriculares: 
        titulo:'Lição 27. Projeto Missão Criativa - Minha Primeira Animação Digital',**/
        infografico:{titulo:'Missão Criativa CW2',
        tituloSimplificado:'Missão CW2',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Hoje, você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Estes serão seus primeiros passos na ciência da computação.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
           ]}},


      licao28:{},	

    },

    capaVerso:{
      urlImagemTerceiraCapa:'',
      textoTerceiraCapa: '',
      textoUltimaCapa: 'Charles Babbage foi um cientista, matemático, filósofo, engenheiro mecânico e inventor inglês que é mais conhecido como o inventor que projetou o primeiro computador de uso geral, utilizando apenas partes mecânicas, a máquina analítica.'
    },

}