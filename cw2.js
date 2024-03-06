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
      descricao:'Nesta unidade, você será apresentado ao computador, aos dispositivos eletrônicos e aos robôs, além de dar os primeiros passos em programação.<br/>Você começará a utilizar o pensamento computacional na resolução de desafios lógicos por meio de algoritmos.',
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
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:2,
          predecessor:1,
          texto:'Você já brincou com um computador ou celular? Eles são aparelhos eletrônicos e possuem diversas partes.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:3,
          predecessor:2,
          texto:'O computador, por exemplo, tem quatro partes: a torre, o teclado, o monitor e o mouse.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:4,
          predecessor:3,
          texto:`Na torre existem muitos componentes, como as memórias, em que o computador armanezada dados, e o processor, que funciona como o "cérebro do computador".`,
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:5,
          predecessor:4,
          texto:'Com o teclado e o mouse, você consegue digitar, mover e cliar em objetos virtuais que são exibidos no monitor.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:6,
          predecessor:5,
          texto:'Além disso, podemos conectar muitas outras coisas ao computador, como caixas de som ou impressoras.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:7,
          predecessor:6,
          texto:'Hoje em dia, também temos celulares e tablets, que são como computadores pequenos, que cabém na palma das nossas mãos.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:8,
          predecessor:7,
          texto:'Mas existem computadores ainda menores dentro de carros, TVs e até mesmo em alguns brinquedos. Esses computadores nos ajudam a fazer coisas diversas todos os dias.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:9,
          predecessor:8,
          texto:'Mas o que é um computador? É uma máquina que pode ser ensinada por meio dos programas para nos auxiliar em tarefas do dia a dia e até mesmo para fazermos coisas da nossa preferência, como jogos e músicas.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:10,
          predecessor:9,
          texto:'Neste curso, vamos aprender a criar jogos, inventos eletrônicos, programar robôs e muitas outras coisas legais com a ciência da computação!',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CSX/DispComp/img_1_new.jpg',
          promptImagem:'', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao2:{},


      licao3:{
        id:'CW2AULA03CODE',
        /** padroesCurriculares: 
        titulo:'Lição 03. Eletricidade e Dispositivos Eletrônicos.',**/
        infografico:{titulo:'Explorando a Eletricidade e Seus Segredos!',
        tituloSimplificado:'Eletricidade',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'A luz e o calor do Sol dão vida à Terra, nosso planeta, graças à energia que carregam.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'r',},

          {ordem:2,
          predecessor:1,
          texto:'Descobrimos que a energia está em muitos lugares, como nas plantas, minerais como o carvão e até mesmo nos minúsculos partículas que compõe os corpos dos animais.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:3,
          predecessor:2,
          texto:'Através da tecnologia, aprendemos a criar usinas hidroelétricas, que transformam a energia da água em eletricidade.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:4,
          predecessor:3,
          texto:'A eletricidade chega até nossas casas por meio de redes elétricas, como se fossem cabos mágicos que ligam os aparelhos elétricos de nossas casas.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:5,
          predecessor:4,
          texto:'Os computadores e os robôs são compostos por circuitos elétricos, que precisam de eletricidade para funcionar. Mas você sabe o que é um circuito elétrico?',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:6,
          predecessor:5,
          texto:'Um circuito elétrico é como um caminho para a eletricidade viajar, é como uma estrada que conecta diferentes partes, levando energia a cada parte.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:7,
          predecessor:6,
          texto:'Em nosso curso, usaremos componentes que se conectam magneticamente, chamados littleBits.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:8,
          predecessor:7,
          texto:'Cada tipo de componente littleBit tem sua função específica, como o gerador que fornece energia, os atuadores que controlam o circuito e os aparelhos que converter a energia elétrica em luz ou movimento.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:9,
          predecessor:8,
          texto:'Com esses componentes, poderemos criar nossos próprios circuitos e explorar os mistérios da eletricidade.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpressoRecriado:'Com esses componentes, poderemos criar nossos próprios circuitos e explorar os mistérios da eletricidade. A diversão e o aprendizado estão prestes a começar!',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:10,
          predecessor:9,
          texto:'A diversão e o aprendizado estão prestes a começar!',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:0,
          imagemImpresso:0,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},
        
         ]}},


      licao4:{
        id:'CW2AULA04CODE',
        /** padroesCurriculares: 
        titulo:'Lição 04. Algoritmo, Identificação de Padrão e Sequência.',**/
        infografico:{titulo:'Algoritmos no Nosso Dia a Dia',
        tituloSimplificado:'Algoritmos',
        estiloPadrao:'basicoPaisagem',
        /** urlVideo:'',
        urlPodcast:'', **/
        cenas:[
          {ordem:1,
          predecessor:0,
          texto:'Um algoritmo é como uma receita, mostrando passo a passo como fazer algo certinho, seja para instruir pessoas ou máquinas.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'r',},

          {ordem:2,
          predecessor:1,
          texto:'Às vezes, os algoritmos são representados por figuras ou até mesmo símbolos, sem nenhuma palavra.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:3,
          predecessor:2,
          texto:'Outras vezes, eles podem ser escritos em uma linguagem diferente, usando desenhos ou formas geométricas conectadas por linhas.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:4,
          predecessor:3,
          texto:'Alguns algoritmos até misturam desenhos com palavras para ensinar a fazer exercícios físicos, por exemplo.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:5,
          predecessor:4,
          texto:'Algoritmos simples são escritos como uma lista de tarefas, numerada, explicando cada passo, um depois do outro.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:6,
          predecessor:5,
          texto:'Alguns algoritmos são muito grandes e difíceis, como aqueles que ajudam astronautas a resolver problemas no espaço.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:7,
          predecessor:6,
          texto:'Na prática, os programas de computador são algoritmos escritos em uma linguagem especial para o computador entender.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:8,
          predecessor:7,
          texto:'Assim, algoritmos estão em todos os lugares. E agora, você vai escrever seus próprios algoritmos para instruir como o computador deve realizar o que você desejar!',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

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
          urlAudioTexto:'',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Digital art illustration of a teenager with wide, excited eyes, sitting at her desk in front of her laptop. On one side, she is coding with bright, vibrant colors emanating from the screen, and on the other, she is tinkering with basic electrical circuits. This scene captures the joy and excitement of taking the first steps in computer science and discovering the fun in programming and electrical assembly', 
          imagemFonte:'bing',
          textoDescritivoImagem:'Programador em frente ao computador',},
        
         ]}},


      licao7:{},	

    },


    unidade2:{
      titulo:'Condicionais, Robótica e Eventos Computacionais',
      descricao:'Nesta unidade, você aprenderá os conceitos de laços e expressões condicionais, utilizando-os para resolver desafios lógicos de programação e programar robôs.<br/>Você também aprenderá o conceito de programação orientada a eventos e usará um dispositivo eletrônico para criar seu próprio controle criativo de videogame, utilizando materiais diversos, como massinha ou lápis!',
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
          texto:'Hoje, você vai aprender sobre um comando poderoso nos algoritmos: os <b>laços</b>, também conhecidos como loops, em inglês.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:2,
          predecessor:1,
          texto:'Os laços permitem que o computador repita comandos várias vezes, sem precisar escrevê-los repetidamente no algoritmo.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:3,
          predecessor:2,
          texto:'Eles evitam que tenhamos que repetir as mesmas instruções. Usando laços, podemos fazer coisas impressionantes com poucos comandos.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:4,
          predecessor:3,
          texto:'Por exemplo, ao criar um algoritmo para um atleta, poderíamos usar laços para instruir a repetição de atividades, como pular e girar várias vezes.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:5,
          predecessor:4,
          texto:'Um algoritmo para um piloto poderia usar laços para orientá-lo a dar 76 voltas na pista de corrida.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:6,
          predecessor:5,
          texto:'Já imaginou criar um programa para um jogo onde um personagem caminha enquanto dá várias piruetas? Os laços facilitam isso!',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:7,
          predecessor:6,
          texto:'Os laços podem ser usados dentro de outros laços, e isso é chamado de <b>laços aninhados</b>.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:8,
          predecessor:7,
          texto:'Ao usar os laços, seus programas ficarão mais poderosos, e você poderá criar coisas divertidas com pouco esforço! Pronto para começar?',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},
        
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
          texto:'Você conhece o que é um evento? São coisas que acontecem de surpresa ou de vez em quando. Não são coisas que acontecem todos os dias na mesma hora.',
          urlAudioTexto:'',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:2,
          predecessor:1,
          texto:'Um evento é quando algo diferente acontece e pode mudar o que estamos fazendo, nos fazendo reagir de uma maneira diferente. Por exemplo, imagine que você está estudando quietinho e, de repente, seu gato pula na mesa. O que você faria?',
          urlAudioTexto:'',
          textoSimplificado:'Primeiros passos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:3,
          predecessor:2,
          texto:'Na computação, as pessoas fazem coisas no computador, como clicar com o mouse ou apertar o botão Enter. Os programadores escrevem códigos para fazer o computador responder a essas ações, como abrir janelas ou mover personagens em jogos.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:4,
          predecessor:3,
          texto:'Telefones, tablets e até relógios inteligentes são computadores que podemos levar com a gente e nos ajudam a fazer muitas coisas divertidas. Podemos tocá-los na tela ou movê-los para fazer coisas diferentes.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:5,
          predecessor:4,
          texto:'Alguns programas podem funcionar sozinhos, mas são raros. A maioria dos programas precisa de eventos para funcionar, como jogos ou aplicativos de redes sociais. Eles respondem quando a gente faz alguma coisa, como apertar uma tecla, clicar no mouse ou mexer num joystick.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'', 
          imagemFonte:'',
          textoDescritivoImagem:'',},

          {ordem:6,
          predecessor:5,
          texto:'Os celulares e tablets têm sensores que podem fazer coisas sozinhos, sem a gente tocar neles. Os programadores podem usar esses sensores de jeitos legais. Por exemplo, se o aparelho ficar muito quente, um programa pode mandar um aviso para a gente esfriá-lo.',
          urlAudioTexto:'',
          textoSimplificado:'',
          textoImpresso:1,imagemImpresso:1,
          urlImagem:'',
          promptImagem:'',
          imagemFonte:'',
          textoDescritivoImagem:'',},
          
        
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
      descricao:'Nesta unidade, você aprenderá sobre sensores, compreendendo suas correspondências com os órgãos do sentido humano e programando inventos eletrônicos que utilizam sensores e outros dispositivos eletrônicos.<br/>Você também compreenderá o conceito de informação, aprendendo sobre a importância de adotar cuidados para navegar na internet com segurança e escolher senhas seguras para suas contas digitais.',
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


         licao15:{
          id:'CW2AULA15CODE',
          infografico:{titulo:'Sensores e os Órgãos do Sentido',
          tituloSimplificado:'Sensores',
          estiloPadrao:'basicoPaisagem',
          /** urlVideo:'',
          urlPodcast:'', **/
          cenas:[
            {ordem:1,
            predecessor:0,
            texto:'Nós usamos nossos olhos, ouvidos, boca, nariz e pele para entender e brincar com o mundo à nossa volta. Essas são nossas partes do corpo que nos ajudam a sentir e descobrir coisas!',
            urlAudioTexto:'',
            textoSimplificado:'',
            textoImpresso:1,
            imagemImpresso:1,
            urlImagem:'',
            promptImagem:'', 
            imagemFonte:'',
            textoDescritivoImagem:'',},
          
            {ordem:2,
             predecessor:1,
            texto:'Além dos nossos órgãos sensoriais, o cérebro também é muito importante. Ele recebe as informações dos nossos sentidos e nos ajuda a entender o que está acontecendo à nossa volta.',
            urlAudioTexto:'',
            textoSimplificado:'',
            textoImpresso:1,
            imagemImpresso:1,
            urlImagem:'',
            promptImagem:'', 
            imagemFonte:'',
            textoDescritivoImagem:'',},

            {ordem:3,
              predecessor:2,
              texto:'Assim como nós, robôs e coisas eletrônicas também podem ter "olhos" e "ouvidos"! Esses "sensores" são como seus órgãos, eles pegam informações do mundo ao redor e as enviam para os computadores, celulares ou robôs.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:4,
              predecessor:3,
              texto:'Os sensores de som são como orelhas eletrônicas! Eles pegam os sons do ambiente e os transformam em sinais que os computadores entendem. Um exemplo disso é o microfone, como aquele que usamos para gravar voz ou som.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:5,
              predecessor:4,
              texto:'Sabe as câmeras e filmadoras? Elas têm olhos mágicos que capturam fotos e vídeos! Esses "sensores de luz" são como os olhos humanos, transformando a luz em sinais que os aparelhos entendem.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:6,
              predecessor:5,
              texto:'Quando alguém toca em nosso braço, nosso cérebro sabe e responde. Da mesma forma, quando tocamos a tela do celular, o cérebro dele, o processador, decide o que fazer, como abrir um jogo ou um aplicativo.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:7,
              predecessor:6,
              texto:'Assim como nossa pele sente calor ou frio, sensores especiais em prédios podem evitar incêndios e controlar a temperatura, ligando o ar-condicionado quando precisamos.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:8,
              predecessor:7,
              texto:'Existem até sensores que podem sentir cheiros ou gostos! Mas são bem caros e não são usados tanto assim.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:9,
              predecessor:8,
              texto:'Os robôs e eletrônicos têm sensores incríveis! Alguns podem ver luzes que não podemos e ouvir sons que estão longe demais para nós.',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},

            {ordem:10,
              predecessor:9,
              texto:'Existem muitos tipos diferentes de sensores legais por aí! Podemos usá-los para criar robôs e dispositivos super legais. Que tal começarmos a experimentar com eles?',
              urlAudioTexto:'',
              textoSimplificado:'',
              textoImpresso:1,
              imagemImpresso:1,
              urlImagem:'',
              promptImagem:'', 
              imagemFonte:'',
              textoDescritivoImagem:'',},
                
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
      descricao:'Nesta unidade, você será introduzido ao universo da animação, explorando desde os primórdios das animações manuais até o desenvolvimento das animações digitais.<br/>Você aprenderá a programar suas próprias animações digitais, utilizando um laboratório para criar histórias e soltar sua criatividade, aplicando os fundamentos de programação aprendidos neste módulo.',
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