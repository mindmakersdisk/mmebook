let livro_csx ={

  /* metadados */
  metadados:{
	  i18n:false,
	  formularioRegistro_campos_formatosValidos:['texto','numero','data','url','lista','nome','usuario','senha','usuarioAcessivel','senhaAcessivel'],
	  infografico_estilosValidos:['basicoPaisagem','basicoRetrato','explosaoPaisagem','circuitoPaisagem','cobraPaisagem','cobraPaisagem2', 'cobraRetrato','gPaisagem'] 
  },
  
  versao:'0.1.00',
  nomeFantasia: 'Expresso',
  nomeTecnico:'CSX - Fundamentos em Ciência da Computação',
  isbn:'',
  autores:[],
  editor:'',
  local:'',
  ano:'',
  url:'compsci_csx_0_1',

  // dados de adaptação
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
	  ]
  },
  
  visaogeral:{
	  
	  infografico:{
		  titulo:'Resumo do Módulo CSX',
		  /* idem licoes */
	  }
	  
  },
  
   /* conteudo */
  unidade1:{
	  /* licao sem infografico, deve exibir algo como 'projeto/laboratório sem novo conceito teórico' */
	  
	  licao1:{
		  id:'CSXAULA01CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 01. Algoritmos.',**/
		  infografico:{titulo:'Dispositivos Computacionais',
				tituloSimplificado:'O Computador',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
		  {ordem:1,
		  predecessor:0,
		  texto:'Hoje você vai descobrir como é divertido programar computadores e montar circuitos elétricos. Serão seus primeiros passos na ciência da computação.',
		  urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_1.mp3',
		  textoSimplificado:'Primeiros passos',
		  textoImpresso:1,
		  urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_1.jpg',
		  promptImagem:'A programmer with a computer in a green background, digital art', 
		  textoDescritivoImagem:'Programador em frente ao computador',},
	 
          {ordem:2,
		  predecessor:1,
		  texto:'Você aprenderá a criar videogames, robôs e outras invenções que desejar.',
		  urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_2.mp3',
		  textoSimplificado:'Videogames, robôs e resolução de problemas.',
		  urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_2.jpg',
		  promptImagem:'A videogame and a robot in a green background, digital art', 
		  textoDescritivoImagem:'Robô sentado no sofá em frente a uma televisão e um videogame',},

          {ordem:3,
          predecessor:2,
          texto:'Seja para se divertir com os amigos ou mesmo, quem sabe, para resolver problemas reais e tornar o mundo um lugar melhor para todos.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_3.mp3',
          textoSimplificado:'Resolução de problemas',
		  textoImpresso:1,
		  imagemImpresso:1,
		  textoImpressoRecriado:'Você aprenderá a criar videogames, robôs e outras invenções que desejar. Seja para se divertir com os amigos ou mesmo, quem sabe, para resolver problemas reais e tornar o mundo um lugar melhor para todos.',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_3.jpg',
          promptImagem:'A group of people thinking about a problem in a green background, digital art',
          textoDescritivoImagem:'Grupo de pessoas pensando sobre a solução de um determinado problema',},

          {ordem:4,
          predecessor:3,
          texto:'Mas vamos dar um passo de cada vez: Para começar, o que é mesmo um computador?',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_4.mp3',
          textoSimplificado:'O que é um computador',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_4.jpg',
          promptImagem:'computer with questionmarks', 
          textoDescritivoImagem:'Computador com diversos pontos de interrogação', },

          {ordem:5,
          predecessor:4,
          texto:'Você mal se deu por gente e já tentava tocar o teclado de um computador ou talvez na tela de um celular.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_5.mp3',
          textoSimplificado:'Começo do uso da tecnologia',
		  textoImpresso:1,
		  imagemImpresso:1,
		  textoImpressoRecriado:'Mas vamos dar um passo de cada vez: <p>Para começar, o que é mesmo um computador? <p>Você mal se deu por gente e já tentava tocar o teclado de um computador ou talvez na tela de um celular.',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_5.jpg',
          promptImagem:'baby trying to type in a computer, green background, digital art', 
          textoDescritivoImagem:'Bebê tentando digitar em um computador', },

          {ordem:6,
          predecessor:5,
          texto:'Se você já prestou atenção em um computador desses que ficam em casa, em cima da mesa, deve ter notado que ele tem pelo menos quatro partes:',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_6.mp3',
          textoSimplificado:'Desktop e suas partes',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_6.jpg',
          promptImagem:'Desktop computer highlighting each of its parts in a green bachground, digital art', 
          textoDescritivoImagem:'Computador de mesa com as quatro partes básicas', },

          {ordem:7,
          predecessor:6,
          texto:'A torre, ou CPU, que contém o cérebro do computador, também chamado de unidade de processamento.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_7.mp3',
          textoSimplificado:'CPU',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_7.jpg',
          promptImagem:'Desktop computer highlighting each of its parts in a green bachground, digital art', 
          textoDescritivoImagem:'Computador de mesa com as quatro partes básicas e destacando a CPU com uma seta amarela', },

          {ordem:8,
          predecessor:7,
          texto:'O teclado, no qual digitamos letras, números e símbolos que os programas de computador entendem.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_8.mp3',
          textoSimplificado:'Teclado',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_8.jpg',
          promptImagem:'Desktop computer highlighting each of its parts in a green bachground, digital art', 
          textoDescritivoImagem:'Computador de mesa com as quatro partes básicas e destacando o teclado com uma seta amarela', },

          {ordem:9,
          predecessor:8,
          texto:'O monitor, que é a tela do computador.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_9.mp3',
          textoSimplificado:'Monitor',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_9.jpg',
          promptImagem:'Desktop computer highlighting each of its parts in a green bachground, digital art', 
          textoDescritivoImagem:'Computador de mesa com as quatro partes básicas e destacando a tela com uma seta amarela', },

          {ordem:10,
          predecessor:9,
          texto:'E o mouse, com o qual podemos abrir diferentes programas, clicando nas pequenas imagens e botões que aparecem na tela.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_10.mp3',
          textoSimplificado:'Mouse',
		  textoImpresso:1,
		  imagemImpresso:1,
		  textoImpressoRecriado:'Se você já prestou atenção em um computador desses que ficam em casa, em cima da mesa, deve ter notado que ele tem pelo menos quatro partes: <p>A torre, ou CPU, que contém o cérebro do computador, também chamado de unidade de processamento. <p>O teclado, no qual digitamos letras, números e símbolos que os programas de computador entendem. <p>O monitor, que é a tela do computador. <p>E o mouse, com o qual podemos abrir diferentes programas, clicando nas pequenas imagens e botões que aparecem na tela.',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_10.jpg',
          promptImagem:'Desktop computer highlighting each of its parts in a green bachground, digital art', 
          textoDescritivoImagem:'Computador de mesa com as quatro partes básicas e destacando o mouse com uma seta amarela', },
  
          {ordem:11,
          predecessor:10,
          texto:'Além dessas quatro partes básicas, o computador pode estar ligado a muitos outros tipos de dispositivos, como caixas de som, impressoras, joysticks, simuladores de instrumentos musicais, entre outros. As possibilidades são infinitas.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_11.mp3',
          textoSimplificado:'Outros dispositivos',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_11.jpg',
          promptImagem:'Computer connected to different devices, such as printers and sound system in a green bachground, digital art', 
          textoDescritivoImagem:'Computador conectado a diferentes dispositivos, como impressoras e caixas de som', },
  
          {ordem:12,
          predecessor:11,
          texto:'Nos últimos anos, os criativos fabricantes conseguiram juntar todas as partes do computador de mesa em um só aparelho, pequeno o suficiente para carregarmos conosco: são os celulares e tablets, também conhecidos como computadores móveis.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_12.mp3',
          textoSimplificado:'Tudo em um único aparelho',
		  textoImpresso:1,
		  imagemImpresso:1,
		  textoImpressoRecriado:'Além dessas quatro partes básicas, o computador pode estar ligado a muitos outros tipos de dispositivos como caixas de som, impressoras, joysticks, simuladores de instrumentos musicais, entre outros. <p>As possibilidades são infinitas. <p>Nos últimos anos, os criativos fabricantes conseguiram juntar todas as partes do computador de mesa em um só aparelho, pequeno o suficiente para carregarmos conosco: são os celulares e tablets, também conhecidos como computadores móveis.',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_12.jpg',
          promptImagem:'a cellphone with different media icons coming out of it in a green bachground, digital art', 
          textoDescritivoImagem:'Telefone celular com vários ícones de redes sociais diferentes saindo da tela', },
  
          {ordem:13,
          predecessor:12,
          texto:'Mas já existem hoje computadores ainda menores do que nossos telefones celulares, embutidos dentro de nossos carros, TVs, elevadores, aparelhos de som e eletrodomésticos.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_13.mp3',
          textoSimplificado:'Internet das Coisas',
		  textoImpresso:1,
		  imagemImpresso:1,
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_13.jpg',
          promptImagem:'computer embedded in a car in a green background, digital art', 
          textoDescritivoImagem:'Computador embutido em um carro', },
  
          {ordem:14,
          predecessor:13,
          texto:'Você não os vê, mas esses computadores embutidos tornam estes aparelhos mais inteligentes e capazes de nos ajudar no dia a dia.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_14.mp3',
          textoSimplificado:'Computadores embutidos',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_14.jpg',
          promptImagem:'green soft background showing different tech icons, digital art', 
          textoDescritivoImagem:'Imagem com diferentes ícones relacionados à tecnologia', },
  
          {ordem:15,
          predecessor:14,
          texto:'E prepare-se, em um futuro próximo, também encontraremos computadores em roupas, móveis, sapatos. Enfim, em todas as coisas!',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_15.mp3',
          textoSimplificado:'Futuro',
		  textoImpresso:1,
		  imagemImpresso:1,
		  textoImpressoRecriado:'Você não os vê, mas esses computadores embutidos tornam estes aparelhos mais inteligentes e capazes de nos ajudar no dia a dia. E prepare-se, em um futuro próximo, também encontraremos computadores em roupas, móveis, sapatos. <p>Enfim, em todas as coisas!',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_15.jpg',
          promptImagem:'futuristic shoes, with computers embedded on them, green background, digital art', 
          textoDescritivoImagem:'Sapatos futurísticos, com computadores embutidos', },
  
          {ordem:16,
          predecessor:15,
          texto:'Mas então, o que é realmente um computador?',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_16.mp3',
          textoSimplificado:'O que é um commputador',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_16.jpg',
          promptImagem:'computer with questionmarks', 
          textoDescritivoImagem:'Computador com diversos pontos de interrogação', },
  
          {ordem:17,
          predecessor:16,
          texto:'Um computador é uma máquina eletrônica que pode ser programada para nos divertir com jogos, nos ajudar a criar vídeos, fotos, músicas, livros, e até mesmo controlar carros, robôs ou cidades.',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_17.mp3',
          textoSimplificado:'',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_17.jpg',
          promptImagem:'Desktop computer highlighting each of its parts in a green bachground, digital art', 
          textoDescritivoImagem:'Computador de mesa com as quatro partes básicas', },
  
          {ordem:18,
          predecessor:17,
          texto:'E o mais legal é que vamos aprender a fazer tudo isso neste curso!',
          urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/csx_i1_14.mp3',
          textoSimplificado:'O curso',
		  textoImpresso:1,
		  imagemImpresso:1,
		  textoImpressoRecriado:'Mas então, o que é realmente um computador? <p>Um computador é uma máquina eletrônica que pode ser programada para nos divertir com jogos, nos ajudar a criar vídeos, fotos, músicas, livros, e até mesmo controlar carros, robôs ou cidades. <p>E o mais legal é que vamos aprender a fazer tudo isso neste curso!',
          urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/csx_i1_18.jpg',
          promptImagem:'computer programming, digital art', 
          textoDescritivoImagem:'Laptop com uma mão em segundo plano, dando a entender que a pessoa está programando', },
				]
				
		  }
			
	  },
	  
//	  licao2:{},
	  /* licao sem infografico, deve exibir algo como 'projeto/laboratório sem novo conceito teórico' */
	  licao2:{
		  id:'CSXAULA02CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 02. Circuitos Elétricos.',**/
		  infografico:{titulo:'Circuito Elétrico',
				tituloSimplificado:'Circuito',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
		  {ordem:1,
		  predecessor:0,
		  texto:'Computadores, robôs e inventos modernos precisam de eletricidade para funcionar. <p>Por isso, vamos falar muito sobre circuitos elétricos neste curso. <p>E o que seria um circuito elétrico?',							
		  urlAudioTexto:'',
		  textoSimplificado:'Eletricidade em nossas vidas e Circuito elétrico',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Apresente lado a lado a imagem de um laptop, um braço robótico, um celuar do tipo smartphone, e abaixo, centralizado, uma imagem de um circuito elétrico simples com uma pilha, fios condutores que acendem uma lâmpada acesa. ', 
		  textoDescritivoImagem:'Laptop, braço robotizado, celular, circuito elétrico simples demonstrando uma pilha acendendo uma lâmpada.', },
					 
          {ordem:2,
          predecessor:1,
          texto:'Primeiramente, se é elétrico tem haver com a eletricidade que existe, por exemplo, nos raios que ocorrem durante as chuvas fortes.',
          urlAudioTexto:'',
          textoSimplificado:'Eletricidade e Raio',
          urlImagem:'',
          promptImagem:'céu com vários raios', 
          textoDescritivoImagem:'Céu com chuva e raios', },

          {ordem:3,
          predecessor:2,
          texto:'Ou ainda, com a eletricidade que usamos em nossa casa quando ligamos algo nas tomadas.',
          urlAudioTexto:'',
          textoSimplificado:'Eletricidade e Tomada',
		  textoImpresso:1,
		  textoImpressoRecriado:'Primeiramente, se é elétrico tem haver com a eletricidade que existe, por exemplo, nos raios que ocorrem durante as chuvas fortes. <p>Ou ainda, com a eletricidade que usamos em nossa casa quando ligamos algo nas tomadas.', 
          urlImagem:'',
          promptImagem:'plugue elétrico sendo ligado à tomada', 
          textoDescritivoImagem:'Um plugue elétrico e uma tomada', },

          {ordem:4,
          predecessor:3,
          texto:'E quando falamos em circuito, dá a entender que é algo que dá uma volta e se fecha, como um círculo ou um circuito de Fórmula 1.',
          urlAudioTexto:'',
          textoSimplificado:'Círculo e Fórmula 1',
          urlImagem:'',
          promptImagem:'circuito de fórmula 1', 
          textoDescritivoImagem:'Pista de asfalto do circuito de Fórmula 1', },

          {ordem:5,
          predecessor:4,
          texto:'Um circuito elétrico é um conjunto formado por um gerador, um condutor e aparelhos que utilizam a energia para funcionar.',
          urlAudioTexto:'',
          textoSimplificado:'Circuito elétrico e suas partes',
		  textoImpresso:1,
		  textoImpressoRecriado:'E quando falamos em circuito, dá a entender que é algo que dá uma volta e se fecha, como um círculo ou um circuito de Fórmula 1. <p>Um circuito elétrico é um conjunto formado por um gerador, um condutor e aparelhos que utilizam a energia para funcionar.', 
          urlImagem:'',
          promptImagem:'Um circuito elétrico com um gerador, um condutor e um aparelho conectado', 
          textoDescritivoImagem:'Circuito elétrico composto por uma pilha, fio condutor, interruptor e lâmpada', },

          {ordem:6,
          predecessor:5,
          texto:'O gerador fornece energia elétrica. Um gerador pode ser de corrente contínua, como pilhas e baterias, ou de corrente alternada, como a energia fornecida pelas instituições de eletricidade.',
		  urlAudioTexto:'',
          textoSimplificado:'Gerador',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Pilha e bateria', 
          textoDescritivoImagem:'Pilha e Bateria', },

          {ordem:7,
          predecessor:6,
          texto:'O condutor transmite a energia em circuito fechado. Os fios são exemplos de condutores frequentemente utilizados.',
          urlAudioTexto:'',
          textoSimplificado:'Condutor',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Fio elétrico com cobre e plástico', 
          textoDescritivoImagem:'Fio elétrico e suas partes, fio de cobre envolto no plástico', },

          {ordem:8,
          predecessor:7,
          texto:'E por fim, os aparelhos que utilizam essa energia para funcionar, como lâmpadas, ventiladores e outros eletrodomésticos.',
          urlAudioTexto:'',
          textoSimplificado:'Aparelhos que utilizam energia',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'luminária com a lâmpada acesa', 
          textoDescritivoImagem:'Uma luminária com a lâmpada acesa', },

          {ordem:9,
          predecessor:8,
          texto:'É também muito comum que circuitos elétricos contenham dispositivos de controle, como os botões de ligar e desligar ou de aumentar e diminuir o som.',
          urlAudioTexto:'',
          textoSimplificado:'Dispositivos de controle',
          urlImagem:'',
          promptImagem:'imagem com um interruptor de luz  e um botão para volume de som', 
          textoDescritivoImagem:'Interruptor de luz e botão para volume de som', },
  
          {ordem:10,
          predecessor:9,
          texto:'Esses dispositivos nos permitem controlar melhor a quantidade de eletricidade que circula em cada parte do circuito para não termos que conectar e desconectar fios condutores para ligar ou desligar uma lâmpada, por exemplo.',
          urlAudioTexto:'',
          textoSimplificado:'Dispositivos de controle',
		  textoImpresso:1,
		  textoImpressoRecriado:'É também muito comum que circuitos elétricos contenham dispositivos de controle, como os botões de ligar e desligar ou de aumentar e diminuir o som. <p>Esses dispositivos nos permitem controlar melhor a quantidade de eletricidade que circula em cada parte do circuito para não termos que conectar e desconectar fios condutores para ligar ou desligar uma lâmpada, por exemplo.', 
          urlImagem:'',
          promptImagem:'um prédio alto céu espelhado visto de cima para baixo',  
			//não sei se seria o caso de adicionar a caixa de texto com a frase, precisaria testar.
          textoDescritivoImagem:'Um prédio alto espelhado com um balão de diálogo expressando a fala de uma pessoa dizendo: Ei! Eu estou aqui dentro usando a Internet. Sem os circuitos elétricos do prédio, não ia rolar... E eu ainda ia ter que subir 50 andares de Escada!', },
  
          {ordem:11,
          predecessor:10,
          texto:'Importante, não? Aprender sobre circuitos elétricos será um grande passo para liberar aquele cientista criativo que existe dentro de você.',
          urlAudioTexto:'',
          textoSimplificado:'Cientista criativo',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'cientista soldando uma placa de circuito elétrico', 
          textoDescritivoImagem:'Cientista soldando uma placa de circuito elétrico ', },
		
		//Não incluí a parte do somosBits no Impresso.
          
		  {ordem:12,
          predecessor:11,
          texto:'E para isso, começaremos usando os somosBits, pequenos componentes eletrônicos usados para montar circuitos de forma rápida e segura.',
          urlAudioTexto:'',
          textoSimplificado:'somosBits',
          urlImagem:'',
          promptImagem:'imagem criada com os somosBits, similar a atual com os littleBits', 
          textoDescritivoImagem:'Tomada de dois pinos igual ao somosBits gerador na cor azul. Interruptor de luz igual ao somosBits controlador na cor rosa. Monte de fios igual ao somosBits condutora na cor laranja. Lâmpada igual ao somosBits aparelho na cor verde', },
  
          {ordem:13,
          predecessor:12,
          texto:'Cada peça do somosBits, chamada de bit, é como um componente dos circuitos elétricos que existem em nossa casa. Lembram-se do gerador, controlador, condutor e aparelho?',
          urlAudioTexto:'',
          textoSimplificado:'somosBits',
          urlImagem:'',
          promptImagem:'imagem criada com os somosBits, similar a atual com os littleBits', 
          textoDescritivoImagem:'Tomada de dois pinos igual ao somosBits gerador na cor azul. Interruptor de luz igual ao somosBits controlador na cor rosa. Monte de fios igual ao somosBits condutora na cor laranja. Lâmpada igual ao somosBits aparelho na cor verde', },
  
          {ordem:14,
          predecessor:13,
          texto:'Cada bit é colorido para difereniciar a sua função em um circuito elétrico. Geradores possuem uma marcação azul, controladores rosa, condutores laranja e aparelhos verde.',
          urlAudioTexto:'',
          textoSimplificado:'somosBits',
          urlImagem:'',
          promptImagem:'imagem criada com os somosBits, similar a atual com os littleBits - tempo 2:23 do vídeo', 
          textoDescritivoImagem:'Tomada de dois pinos igual ao somosBits gerador na cor azul. Interruptor de luz igual ao somosBits controlador na cor rosa. Monte de fios igual ao somosBits condutora na cor laranja. Lâmpada igual ao somosBits aparelho na cor verde', },
  
          {ordem:15,
          predecessor:14,
          texto:'E bits podem ser ligados uns aos outros através de imãs para fazermos circuitos rapidamente.',
          urlAudioTexto:'',
          textoSimplificado:'Bits conectados por imã',
          urlImagem:'',
          promptImagem:'imagem criada com os somosBits conectados, similar a atual com littleBits - tempo 2:41 do vídeo', 
          textoDescritivoImagem:'bit interrupetor ligado ao bit controlador, que por sua vez, está ligado ao bit aparelho', },
  
          {ordem:16,
          predecessor:17,
          texto:'Preparados para os primeiros desafios com circuitos elétricos? Mãos a obra.',
          urlAudioTexto:'',
          textoSimplificado:'Circuito Elétrico',
          urlImagem:'',
          promptImagem:'Um circuito elétrico com um gerador, um condutor e um aparelho conectado', 
          textoDescritivoImagem:'Circuito elétrico composto por uma pilha, fio condutor, interruptor e lâmpada', },
  
				]
				
		  }
			
	  },

      licao3:{
					   
		  id:'CSXAULA03CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 01. Algoritmos.',**/
		  infografico:{titulo:'Algoritmos no dia a dia ',
				tituloSimplificado:'Algoritmos',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
		  {ordem:1,
		  predecessor:0,
		  texto:'Um algoritmo é uma sequência de instruções que visam orientar uma pessoa ou máquina a fazer alguma tarefa de modo perfeito, explicando cada passo.',
		  urlAudioTexto:'',
		  textoSimplificado:'Algoritmos',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Um robô seguindo uma sequência de passos do ponto A até o ponto B', 
		  textoDescritivoImagem:'Robô se locomovendo conforme uma sequência de passos que indicam o caminho a ser percorrido', },

          {ordem:2,
		  predecessor:1,
		  texto:'Os algoritmos as vezes não usam textos, mas ainda assim são algoritmos, apenas usando uma linguagem diferente.',
		  urlAudioTexto:'',
		  textoSimplificado:'Algoritmos e suas linguagens',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Fluxograma de como assar o pão no forno', //enviar ao ilustrador
		  textoDescritivoImagem:'Fluxograma com o passo a passoa para assar um pão no forno',},

          {ordem:3,
          predecessor:2,
          texto:'Por exemplo, algumas pessoas usam imagens como linguagem para um algoritmo.',
          urlAudioTexto:'',
          textoSimplificado:'Algoritmos com imagens',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Imagens do passo a passo de como fazer uma avião de papel com instruções escritas', 
          textoDescritivoImagem:'Uma sequência de imagens demonstranto como fazer um avião de papel', },

          {ordem:4,
          predecessor:3,
          texto:'Outras usam diagramas, que são formados por quadrados, círculos e outras formas geométricas ligadas por linhas e contendo texto.',
          urlAudioTexto:'',
          textoSimplificado:'Algoritmos com diagramas',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Fluxograma de como assar o pão no forno', 
          textoDescritivoImagem:'Fluxograma com o passo a passoa para assar um pão no forno', },

          {ordem:5,
          predecessor:4,
          texto:'Alguns algoritmos podem misturar desenho e texto para ensinar, por exemplo, como fazer exercícios físicos de modo correto.',
          urlAudioTexto:'',
          textoSimplificado:'Algortimo com desenho e texto',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Folder de treino na cadeira em doze passos com instruções', //enviar ao ilustrador
          textoDescritivoImagem:'Imagens com uma sequência de exercícioos físicos enumerados de 1 até 12.', },

          {ordem:6,
          predecessor:5,
          texto:'Para algoritmos mais simples, basta uma lista numerada contendo um texto explicativo para cada passo a ser feito. Um após o outro.',
          urlAudioTexto:'',
          textoSimplificado:'Algoritmo simples',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Passo a passo de como construir um boneco de neve', //enviar ao ilustrador
          textoDescritivoImagem:'Lista com a sequência de ações para construir um boneco de neve', },

          {ordem:7,
          predecessor:6,
          texto:'Os algortimos também podem ser muito grandes e complexos. <p>Por exemplo, para orientar astronautas a resolver certos problemas no espaço.',
          urlAudioTexto:'',
          textoSimplificado:'Algoritmo complexo',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Astronauta mulher dentro de espaçonave consertando um equipamento', 
          textoDescritivoImagem:'Astronauta mulher dentro de espaçonave consertando um equipamento', },

          {ordem:8,
          predecessor:7,
          texto:'E como já vimos na prática, os programas de computador nada mais são do que algoritmos que usam uma linguagem que o computador entende.',
          urlAudioTexto:'',
          textoSimplificado:'Programa de computador',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Tela de laptop mostrando um código de programação', 
          textoDescritivoImagem:'Laptop com a tela apresentando um código de programação, ou seja, um algoritmo', },


				]
		
		  }
		  
		  
	  },
      licao4:{
					   
		  id:'CSXAULA04CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 01. Laço em Algoritmos.',**/
		  infografico:{titulo:'Laço em Algortimos',
				tituloSimplificado:'Laço',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
		  {ordem:1,
		  predecessor:0,
		  texto:'Hoje você vai conhecer um poderoso comando em Algoritmos: os Laços, também chamados de Loops, em inglês.',
		  urlAudioTexto:'',
		  textoSimplificado:'Laço em Algoritmos',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Duas setas curvas formando um círculo.', 
		  textoDescritivoImagem:'Duas setas curvas formando um círculo. A seta localizada na parte superior do cículo  aponta para baixo e a seta localizada na parte inferior do círculo aponta para cima', },

		  {ordem:2,
		  predecessor:1,
		  texto:'Os Laços são comandos que nos permitem instruir o computador a executar repetidamente comandos ou grupo de comandos, sem precisar repeti-los no algortimo.',
		  urlAudioTexto:'',
		  textoSimplificado:'Laço',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Uma criança ensinando uma caneta robô a desenhar um quadrado. Ao lado a lista de comandos em formato de loop para desenhar o quadrado.', //caneta robô ou robô artista //enviar ao ilustrador
		  textoDescritivoImagem:'Criança ensinando uma caneta robô a desenhar um quadrado.', },

          {ordem:3,
		  predecessor:2,
		  texto:'Os laços são poderosos porque evitam a repetição de comandos. Com um pequeno algoritmo ou programa, você faz coisas impressionantes.',
		  urlAudioTexto:'',
		  textoSimplificado:'Laços são poderosos',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Uma caneta robô desenhando uma flor com 30 pétalas.', //enviar ao ilustrador
		  textoDescritivoImagem:'Uma caneta robô desenhando uma flor com 30 pétalas do mesmo tamanho em localizações diferentes.', },

          {ordem:4,
          predecessor:3,
          texto:'Um laço pode envolver vários comandos que são repetidos juntos. Por exemplo: no vídeo do relógio cuco, note quantas coisas se repetem juntas demonstrando que todas elas estão dentro do laço.',
          urlAudioTexto:'',
          textoSimplificado:'Vários comandos',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Relógio cuco marcando 11:59. Relógio cuco marcando meio dia. Relógico cuco marcando meio dia com setas identificando os comandos executados (3). Relógio cuco marcando 12:01.', //enviar ao ilustrador
          textoDescritivoImagem:'Relógio cuco fechado marcando 11:59. Relógio cuco aberto marcando meio dia. Relógio cuco fechado marcando 12:01.', },

          {ordem:5,
          predecessor:4,
          texto:'Em várias atividades, como no esporte e na dança, os laços são muito comuns. Quando queremos que algo se repita por um número específico de vezes, definimos o número de vezes no laço.',
          urlAudioTexto:'',
          textoSimplificado:'Laços pelo Mundo',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Uma bailarina executando 10 piruetas.', 
          textoDescritivoImagem:'Uma bailarina executando dez piruetas.', },

          {ordem:6,
          predecessor:5,
          texto:'Para programar um veículo de fórmula 1 para ganhar uma corrida, o seguinte comando deveria ser executado: <p>Repita 76 vezes (Dê a volta mais rápida que conseguir).',
          urlAudioTexto:'',
          textoSimplificado:'Laços na Fórmula 1',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Veículo de fórmula 1 competindo na pista.', 
          textoDescritivoImagem:'Veículo de fórmula um competindo na pista.', },

          {ordem:7,
          predecessor:6,
          texto:'Quantos aparelhos você conhece que ficam funcionando de modo repetitivo, executando laços o tempo todo?',
          urlAudioTexto:'',
          textoSimplificado:'Aparelhos que funcionam com repetição',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Ventilador de teto e Roda gigante', 
          textoDescritivoImagem:'Imagem de um ventilador de teto e uma roda gigante.', },

          {ordem:8,
          predecessor:7,
          texto:'Prepare-se! Com os laços os nossos programas vão dar um show!',
          urlAudioTexto:'',
          textoSimplificado:'Laços em Programas',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Toca disco de vinil visto por cima', 
          textoDescritivoImagem:'Toca disco de vinil visto por cima, tocando um disco.', },

				]
		
		  }		  
		  
	  },
      licao5:{
		  
		  id:'CSXAULA05CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 01. Expressão Lógica e Condicionais.',**/
		  infografico:{titulo:'Expressão Lógica e Condicionais',
				tituloSimplificado:'Lógica e Condicionais ',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
		  {ordem:1,
		  predecessor:0,
		  texto:'Já percebeu quantas decisões você tem que tomar em um dia comum de sua vida? Usar uma camiseta branca ou preta, estudar primeiro e depois brincar, jogar vôlei ou futebol. Você decide o que fazer verificando condições. Por exemplo, se eu costumo ir a pé para a escola e está chovendo, então eu levarei um guarda-chuva, senão não será necessário levá-lo. Note que as expressões Se, Então e Senão são condicionantes.',
		  urlAudioTexto:'',
		  textoSimplificado:'Expressões Condicionais',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Três imagens: aluno com um guarda-chuva debaixo da chuva, aluno em um dia ensolarado, expressão condicionante', //três imagens 
		  textoDescritivoImagem:'Duas imagens, na primeira um aluno com um guarda-chuva debaixo da chuva e na outra o mesmo aluno sem guarda-chuva em um dia ensoladrado.', },

		  {ordem:2,
		  predecessor:1,
		  texto:'As condições podem se basear em qualquer informação conhecida. Por exemplo, regras para parar ou prosseguir com o carro dependem dos sinais de trânsito.<p><code>Se "o sinal estiver vermelho" então "pare"<br/>Se "o sinal estiver verde" então "prossiga"<br/>Se "o sinal estiver amarelo" então<br/>&nbsp;&nbsp;&nbsp;&nbsp;Se "já estiver passando sob o sinal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;então "prossiga"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;senão "pare".</code>',
		  urlAudioTexto:'',
		  textoSimplificado:'Condições',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Carro parado no sinal vermelho. Carro em movimento no sinal verde. Carro parando no sinal amarelo.', //Três imagens
		  textoDescritivoImagem:'Três imagens, uma ao lado da outra. Veículo parado no sinal vermelho. Veículo andando no sinal verde. Veículo parando no sinal amarelo.', },

          {ordem:3,
		  predecessor:2,
		  texto:'O interessante é que essas condições podem ser utilizadas tanto em algoritmos, para orientar pessoas, como também em programas de computador ou mesmo em circuitos eletrônicos.',
		  urlAudioTexto:'',
		  textoSimplificado:'Condicionais em todo lugar',
		  textoImpresso:1,
		  urlImagem:'',
		  promptImagem:'Três imagens. Uma programadora. Um processador. Um circuito eletrônico.', //três imagens
		  textoDescritivoImagem:'Três imagens. Na primeira uma programadora. Na segunda um processador de computador. Na terceira um circuito eletrônico.', },

          {ordem:4,
          predecessor:3,
          texto:'Um bom exemplo são os sinais de carro e pedestre. Já reparou que conforme um deles fica verde, o outro fica sempre vermelho? Isso funciona sem falhas porque os circuitos eletrônicos de ambos os sinais estão interligados e porque os engenheiros projetaram os circuitos para que seja impossível que ambos tenham a mesma cor.',
          urlAudioTexto:'',
          textoSimplificado:'Sinais de carro e pedestre',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Sinal de carro vermelho. Sinal de pedestre verde', //duas imagens
          textoDescritivoImagem:'Sinal de carro e sinal de pedestre.', },

          {ordem:5,
          predecessor:4,
          texto:'Usamos os termos Se, Então e Senão para definir decisões em algoritmos. E chamamos a essa estrutura de Expressão Condicional. Veja o algortimo a seguir. Ele define as decisões que os motoristas devem tomar conforme as condições dos sinais de trânsito. <p>Se "sinal = verde" então "prossiga" <p>Se "sinal = amarelo" então Se "está muito próximo ao sinal" então "prossiga" senão "pare" <p> Se "sinal = vermelho" então "pare"',
          urlAudioTexto:'',	
          textoSimplificado:'Algoritmo de Trânsito',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Algoritmo de trânsito.', //enviar ilustrador
          textoDescritivoImagem:'Algoritmo de trânsito com suas condicionais.', },

          {ordem:6,
          predecessor:5,
          texto:'Para escrever condições muitas vezes pegamos sinais emprestados da matemática. São os chamaos operadores relacionais. Os sinais de operadores mais comuns são: igual (=), maior que (>) e menor que (<). Veja os exemplos: <p>Se "local atual = centro" então "pare" <p> Se "velocidade do carro > 80 km" então "diminua a velocidade" <p> Se "combustível do carro < 2 litros" então "coloque combustível"',
          urlAudioTexto:'',
          textoSimplificado:'Sinais da Matemática',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Algoritmos com sinais da matemática', //enviar ilustrador
          textoDescritivoImagem:'Algoritmo usando os sinais da matemática igual, maior que e menor que, conforme já descrito.', },

          {ordem:7,
          predecessor:6,
          texto:'Uma expressão pode também usar os termos E/OU quando é composta por várias condições. São os chamados Operadores Lógicos. Além deles, podemos também usar o NÃO para inverter uma decisão. Veja os exemplos:<p>Se "combustível < 2 litros e dinheiro > 5.00" então "abasteça" <p> Se "tempos = chuva ou previsão do tempo = chuva" então "vá de carro" <p> Se "não local atual = centro da cidade" então "prossiga"',
          urlAudioTexto:'',
          textoSimplificado:'Operadores Lógicos',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Algoritmos com operadores lógicos', //enviar ilustrador
          textoDescritivoImagem:'Algoritmo usando os operadores lógicos e, ou e não, conforme já descrito.', },

          {ordem:8,
          predecessor:7,
          texto:'Muita coisa nova, não é? Não se preocupe, você vai praticar muito a programação com condicionais, operadores relacionais e lógicos. E isso vai te levar longe!',
          urlAudioTexto:'',
          textoSimplificado:'Expressão Lógica e Condicionais',
		  textoImpresso:1,
          urlImagem:'',
		  promptImagem:'Três imagens. Uma programadora. Um processador. Um circuito eletrônico.', //três imagens
		  textoDescritivoImagem:'Três imagens. Na primeira uma programadora. Na segunda um processador de computador. Na terceira um circuito eletrônico.', },

				]
		
		  }			  
	  },
      licao6:{},
      licao7:{},
	  
  },
  
  
  unidade2:{
	  
	  licao8:{},
	  licao9:{},
      licao10:{},
      licao11:{},
      licao12:{},
      licao13:{},
      licao14:{},
	  
  },
  
   
  unidade3:{
	  
    licao15:{},
    licao16:{},
    licao17:{},
    licao18:{},
    licao19:{},
    licao20:{},
    licao21:{},
	  
  },
  
   
  unidade4:{
	  
    licao22:{},
    licao23:{},
    licao24:{},
    licao25:{},
    licao26:{},
    licao27:{},
    licao28:{},	 
	  
  },
  
  /*
	glossarioBilingue:{  }
  */

  capaVerso:{
		urlImagemTerceiraCapa:'',
		urlImagemQuartaCapa: '',
		contraCapaVerso:{
			tabela:'TODO' 
		}
  },

}