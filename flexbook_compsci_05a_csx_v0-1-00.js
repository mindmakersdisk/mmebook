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
		  titulo:'Lição 03. Algoritmos.',**/
		  infografico:{titulo:'Algoritmos no Dia a Dia ',
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
          textoSimplificado:'Algoritmos com Diagramas',
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
		  titulo:'Lição 04. Laço em Algoritmos.',**/
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
		  titulo:'Lição 05. Expressão Lógica e Condicionais.',**/
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
		  //texto:'As condições podem se basear em qualquer informação conhecida. Por exemplo, regras para parar ou prosseguir com o carro dependem dos sinais de trânsito.<p><code>Se "o sinal estiver vermelho" então "pare".<br/>Se "o sinal estiver verde" então "prossiga" <br/>Se "o sinal estiver amarelo" então <br/>&nbsp;&nbsp; Se "já estiver passando sob o sinal" então "prossiga" senão "pare"</code>', //TODO Verificar qual é a versão correta
		  texto:'As condições podem se basear em qualquer informação conhecida. Por exemplo, regras para parar ou prosseguir com o carro dependem dos sinais de trânsito.<p><code>Se "o sinal estiver vermelho" então "pare"<br/>Se "o sinal estiver verde" então "prossiga"<br/>Se "o sinal estiver amarelo" então<br/>&nbsp;&nbsp;&nbsp;&nbsp;Se "já estiver passando sob o sinal"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;então "prossiga"<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;senão "pare"</code>',
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
          texto:'Usamos os termos Se, Então e Senão para definir decisões em algoritmos. E chamamos a essa estrutura de Expressão Condicional. Veja o algortimo a seguir. Ele define as decisões que os motoristas devem tomar conforme as condições dos sinais de trânsito. <p><code>Se "sinal = verde" então "prossiga" <br/>Se "sinal = amarelo" então <br/>&nbsp;&nbsp;Se "está muito próximo ao sinal" então "prossiga" senão "pare" <br/> Se "sinal = vermelho" então "pare"</code>',
          urlAudioTexto:'',	
          textoSimplificado:'Algoritmo de Trânsito',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Algoritmo de trânsito.', //enviar ilustrador
          textoDescritivoImagem:'Algoritmo de trânsito com suas condicionais.', },

          {ordem:6,
          predecessor:5,
          texto:'Para escrever condições muitas vezes pegamos sinais emprestados da matemática. São os chamaos operadores relacionais. Os sinais de operadores mais comuns são: igual (=), maior que (>) e menor que (<). Veja os exemplos: <p><code>Se "local atual = centro" então "pare" <br/> Se "velocidade do carro > 80 km" então "diminua a velocidade" <br/> Se "combustível do carro < 2 litros" então "coloque combustível"</code>',
          urlAudioTexto:'',
          textoSimplificado:'Sinais da Matemática',
		  textoImpresso:1,
          urlImagem:'',
          promptImagem:'Algoritmos com sinais da matemática', //enviar ilustrador
          textoDescritivoImagem:'Algoritmo usando os sinais da matemática igual, maior que e menor que, conforme já descrito.', },

          {ordem:7,
          predecessor:6,
          texto:'Uma expressão pode também usar os termos E/OU quando é composta por várias condições. São os chamados Operadores Lógicos. Além deles, podemos também usar o NÃO para inverter uma decisão. Veja os exemplos:<p><code>Se "combustível < 2 litros e dinheiro > 5.00" então "abasteça" <br/> Se "tempos = chuva ou previsão do tempo = chuva" então "vá de carro" <br/> Se "não local atual = centro da cidade" então "prossiga"</code>',
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

      licao6:{
		  
		  id:'CSXAULA06CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 06. Expressão Lógica e Condicionais.',**/
		  infografico:{titulo:'Robôs',
				tituloSimplificado:'Robôs',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Bem-vindo ao mundo dos Robôs. Todos conhecemos os robôs dos cinemas e dos jogos. Alguns são versáteis, não possuem pernas e se movem rolando com rodas ou esteiras. Outros são parecidos conosco, têm dois braços, duas pernas, esses são chamados de humanóides. E alguns são bem estranhos, misturando diversas formas.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens: robô versátil, robô humanóide, robô estranho', //três imagens 
        textoDescritivoImagem:'Três imagens, na primeira um robô versátil, na segunda um robô humanóide e na terceira um robô estranho.', },

        {ordem:2,
        predecessor:1,
        texto:'Mas como surgiram os robôs? Tudo começou com os Autômatos, há alguns séculos atrás. Um autômato é um boneco que tem mecanismos que geram movimentos feitos para parecer como se agissem por sua própria vontade. Autômatos são considerados um tipo primitivo de robô. Para alterar o movimento de um autômato, o seu inventor precisa reconstruir grande parte do boneco.',
        urlAudioTexto:'',
        textoSimplificado:'Autômatos',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô autômato', 
        textoDescritivoImagem:'Robô autômato.', },

        {ordem:3,
        predecessor:2,
        texto:'Nos robôs de hoje, que usam os computadores como cérebro, é possível modificar seus movimentos bastando alterar programas sem reconstruir seus mecanismos. Mas como são os robôs de hoje comparados com os robôs de filmes e do passado?',
        urlAudioTexto:'',
        textoSimplificado:'Robôs de hoje',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens. Robô Industrial. Robô cirurgião. Robô explorador',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:4,
        predecessor:3,
        texto:'Alguns robôs, chamados industriais, conseguem pegar objetos, cortar, compactar, separar, furar tudo com alta precisão e velocidade incomparável. Por isso são usados para montar carros, empacotar produtos, engarrafar bebidas, cortar chocolates e muito mais.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Industriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô industrial', 
        textoDescritivoImagem:'Robô industrial.', },

        {ordem:5,
        predecessor:4,
        texto:'Alguns robôs ajudam médicos a realizar cirurgias complicadas. As vezes, até sozinhos. Tudo isso graças a uma programação muito inteligente.',
        urlAudioTexto:'',	
        textoSimplificado:'Robôs Cirurgiões',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô cirurgião.', 
        textoDescritivoImagem:'Robô cirurgião.', },

        {ordem:6,
        predecessor:5,
        texto:'E tem aquele robôs que vão até onde os humanos não conseguem ir. Eles são construídos e programados para explorar planetas, luas, asteróides, e cometas, coletando informações e nos enviando por mensagens sem que precisemos arriscar a nossa vida.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Exploradores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô Explorador', 
        textoDescritivoImagem:'Robô Explorador.', },

        {ordem:7,
        predecessor:6,
        texto:'Gostou? Pois você vai programar e criar seus primeiros robôs neste curso. <p> Quer começaçar? <p> O primeiro passo é aprender programação de computador para poder controlar um robô.',
        urlAudioTexto:'',
        textoSimplificado:'Controlar robô',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô com controle remoto', 
        textoDescritivoImagem:'Um robô sendo controlado por um controle remoto.', },

        {ordem:8,
        predecessor:7,
        texto:'Conheça o primeiro robô que você irá programar. O Sphero! Ele se locomove como o BB-8 do Star Wars. O Sphero atua como um motor que se locomove conforme você programar. Além disso, ele pode mudar de cor, saltar, puxar objetos e até nadar.',
        urlAudioTexto:'',
        textoSimplificado:'Sphero',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sphero', 
        textoDescritivoImagem:'Robô Sphero.', },

        {ordem:9,
        predecessor:8,
        texto:'Depois de aprender a programar, você vai aprender a montar seus próprios robôs. Eles poderão se mover por rodas, rolar como o Sphero ou até andar. Para isso, você aprenderá um pouco de mecânica e eletrônica. Com a mecânica, você aprenderá a construir os mecanismos dos robôs, ou seja, seus braços, rodas, carrocerias e outras partes que sua imaginação conceber.',
        urlAudioTexto:'',
        textoSimplificado:'Mecânica',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Kit robótica com materiais da mecânica do robô', 
        textoDescritivoImagem:'Um kit com peças da mecânica para montar um robô.', },

        {ordem:10,
        predecessor:9,
        texto:'Com um pouco de eletrônica, você vai conseguir dar ao seu robô alguns sentidos. Por exemplo, vai fazer ele ouvir algum som e reagir, ver obstáculos e desviar, e muito mais. A eletrônica exige seus conhecimentos sobre eletricidade e circuitos elétricos.<p>Então, você já está no caminho certo.',
        urlAudioTexto:'',
        textoSimplificado:'Eletrônica',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Kit robótica com materiais de eletrônica', 
        textoDescritivoImagem:'Um kit com peças de eletrônica para montar um robô.', },

				]
		
		  }			  
		  
	  },
      licao7:{
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 07. Os Primórdios da Animação.',**/
		  infografico:{titulo:'Os Primórdios da Animação',
				tituloSimplificado:'Animação',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
          {ordem:1,
          predecessor:0,
          texto:'Os Primórdios da Animação.<p>As primeiras tentativas de se criar uma ilusão de movimento a partir de desenhos são da época em que os humanos viviam em cavernas, ou seja, na Pré-história',
          urlAudioTexto:'',
          textoSimplificado:'Primórdios das Animações',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Arte na pré-história', 
          textoDescritivoImagem:'Arte na pré-história.', },

          {ordem:2,
          predecessor:1,
          texto:'Eles desenhavam animais com patas duplicadas, que pareciam se movimentar quando o inspirado apresentador passava a tocha sobre o desenho feito na parede da rocha.',
          urlAudioTexto:'',
          textoSimplificado:'Animação na pré-história',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Arte em movimento na pré-história', 
          textoDescritivoImagem:'Arte na pré-história simulando movimento.', },

          {ordem:3,
          predecessor:2,
          texto:'Milhões de anos depois, no Egito Antigo, alguns desenhos feitos em paredes representavam pessoas em posições muito próximas uma da outra, dando a impressão de movimento. Similar às atuais histórias em quadrinhos, diversas ilustrações eram postas lado a lado para simular movimentos.',
          urlAudioTexto:'',
          textoSimplificado:'Pintura Egípcia',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Arte egípcia pintura',  
          textoDescritivoImagem:'Pintura egípcia na parece.', },

          {ordem:4,
          predecessor:3,
          texto:'Por volta da mesma época, há mais de 5.000 anos, antes mesmo que o papel fosse inventado, um artesão desconhecido criou um vaso com desenhos ao seu redor. Os desenhos eram feitos de tal modo que quando o vaso era girado passava a impressão de um alce pulando para comer folhas de uma árvore.',
          urlAudioTexto:'',
          textoSimplificado:'Arte XXX',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Vaso antigo com imagem em movimento', //melhorar!
          textoDescritivoImagem:'Vaso antigo com imagem em movimento.', },

          {ordem:5,
          predecessor:4,
          texto:'Só por volta de 150 anos atrás surgiram os primeiros inventos de animação utilizando papel, como o Folioscópio. Também conhecido como Flip-book, trata-se de um pequeno bloquinho de papel com desenhos em sequência que, ao serem folheados, causam a ilusão de movimento. Em sua versão mais simples, funciona com apenas dois desenhos e um lápis.',
          urlAudioTexto:'',	
          textoSimplificado:'Folioscópio',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Folheando um flipbook.', 
          textoDescritivoImagem:'Um flipbook ou folioscópio sendo folheado.', },

          {ordem:6,
          predecessor:5,
          texto:'O Taumatrópio também foi um brinquedo de animação muito popular no século XIX. Criava a ilusão de misturar duas imagens distintas, como colocar um pássaro na gaiola ou fazer uma princesa beijar um príncipe.',
          urlAudioTexto:'',
          textoSimplificado:'Traumatrópio',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Traumatrópio', 
          textoDescritivoImagem:'Traumatrópio da gaiola vazia e com o passarinho dentro.', },//ao definir a imagem, a descrição deverá ser alterada

          {ordem:7,
          predecessor:6,
          texto:'O Traumatrópio inspirou outro invento de animação um pouco mais sofisticado, o Fenaquistoscópio ou Fenacistoscópio. Ele usa um círculo para criar a ilusão de um movimento contínuo, de maior duração. Consiste em vários desenhos de um mesmo objeto, em posições ligeiramente diferentes, distribuídos por uma placa circular lisa. Quando a placa gira em frente a um espelho, cria-se a ilusão de uma imagem em movimento.',
          urlAudioTexto:'',
          textoSimplificado:'Fenaquistiscópio',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Fenaquistiscópio', 
          textoDescritivoImagem:'Fenaquistiscópio.', },//ao definir a imagem, a descrição deverá ser alterada

          {ordem:8,
          predecessor:7,
          texto:'Esses primeiros inventos de animação continuaram evoluindo. O Zootrópio inovou ao facilitar que desenhos fossem feitos em tiras e permitir a troca da animação através da substituição dessas tiras. Ele é composto por um tambor circular com pequenas janelas recortadas, através das quais o espectador olha para desenhos dispostos em tiras.',
          urlAudioTexto:'',
          textoSimplificado:'Zootrópio',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Zootrópio', 
          textoDescritivoImagem:'Zootrópio.', },//ao definir a imagem, a descrição deverá ser alterada

          {ordem:9,
          predecessor:8,
          texto:'A arquitetura do Zootrópio também permitiu o surgimento das primeiras animações em terceira dimensão (3D), usando bonecos em vez de desenhos.',
          urlAudioTexto:'',
          textoSimplificado:'Zootrópio 3D',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Zootrópio 3D', 
          textoDescritivoImagem:'Zootrópio 3D.', },//ao definir a imagem, a descrição deverá ser alterada

          {ordem:10,
          predecessor:9,
          texto:'O Praxinoscópio, inventado em 1877, aprimorou o Zootrópio usando espelhos e lâmpadas para permitir que animações fossem projetadas em telas ou paredes.',
          urlAudioTexto:'',
          textoSimplificado:'Praxinoscópio',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Praxinoscópio', 
          textoDescritivoImagem:'Praxinoscópio.', },//ao definir a imagem, a descrição deverá ser alterada

          {ordem:11,
          predecessor:10,
          texto:'Com isso, dezenas de pessoas podem assisti-las ao mesmo tempo como em um cinema moderno. Aliás, esse invento acabou inspirando os inventores do cinema. Mas isso é assunto para outra aula.',
          urlAudioTexto:'',
          textoSimplificado:'Cinema',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Sala de cinema', 
          textoDescritivoImagem:'Sala de cinema.', },

          {ordem:12,
          predecessor:11,
          texto:'Relembrando as invenções dos primórdios da animação. Nessa lição, conhecemos o Folioscópio, Taumatrópio, Fenaquistoscópio, Zootrópio, Zootrópio 3D e o Praxinoscópio.',
          urlAudioTexto:'',
          textoSimplificado:'Revisão',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Resumo Imagem minuto 11:58',  //enviar ao ilustrador
          textoDescritivoImagem:'Resumo Imagem minuto 11:58.', },


				]
		
		  }			  
		  
	  },
	  
      licao11:{
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 11. Imagens Digitais: Pixel e Cores.',**/
		  infografico:{titulo:'Imagens Digitais: Pixel e Cores',
				tituloSimplificado:'Imagens Digitais',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
          {ordem:1,
          predecessor:0,
          texto:'Imagens Digitais: Pixel e Cores.<p>Especialistas em computação gráfica sabem que toda imagem exibida na tela de um computador é composta por milhares de pixels coloridos. Por isso, eles conseguem criar e programar mundos virtuais inteiros em movimento nos mínimos detalhes.<p>Chegou a sua vez de aprender sobre pixel e cores, e soltar a criatividade!',
          urlAudioTexto:'',
          textoSimplificado:'Imagens Digitais',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Personagens star wars em pixels', 
          textoDescritivoImagem:'Imagem dos personagens de Star Wars desenhados com pixels.', },

          {ordem:2,
          predecessor:1,
          texto:'O pixel é o menor ponto de uma imagem digital. Como eles são muitos e ficam coladinhos um no outro, fica difícil enxergar um único pixel isoladamente. Mas não é impossível.',
          urlAudioTexto:'',
          textoSimplificado:'Pixel',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Imagem com pouco e muito pixels', 
          textoDescritivoImagem:'Imagem de uma torinha de morango com pouco e muito pixels.', },

          {ordem:3,
          predecessor:2,
          texto:'As telas de videogames e computadores antigos tinham menos pixels, por isso era mais fácil ver cada pixel separadamente. Dava para ver claramente que cada pixel tinha apenas uma cor.',
          urlAudioTexto:'',
          textoSimplificado:'Telas antigas',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Imagem jogo mario bros com pixels',  
          textoDescritivoImagem:'Imagem do jogo Mario Bros com pixels.', },//ao definir a imagem, a descrição deverá ser melhorada

          {ordem:4,
          predecessor:3,
          texto:'Para programar imagens e gráficos digitais, entender as cores é tão importante quanto entender os pixels. James Clerk Maxwell foi o criador da fotografia colorida. Ele viveu no século XIX, antes mesmo da criação da TV e do cinema.',
          urlAudioTexto:'',
          textoSimplificado:'Cores',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Foto Maxwell 1:41 e ao lado seu experimento 1:54', //enviar ilustrador
          textoDescritivoImagem:'Foto de Maxwell e seu experimento com as cores.', },

          {ordem:5,
          predecessor:4,
          texto:'Ele descobriu que a partir da mistura de diferentes quantidades das três cores primárias, é possível criar todas as outras cores que nossa visão consegue distinguir. Você lembra quais são as cores primárias? Vermelho, verde e azul. Maxwell ainda descobriu que para tintas, as três cores primárias são diferentes; em vez do verde, você usa o amarelo.',
          urlAudioTexto:'',	
          textoSimplificado:'Cores Primárias',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Cores primárias em tinta.', 
          textoDescritivoImagem:'Três tubos de tinta, sendo o primeiro tubo com tinta vermelha, o segundo com tinta verde e o último tubo com tinta amarela.', },

          {ordem:6,
          predecessor:5,
          texto:'Para luzes, como é o caso da tela do computador, as cores são mesmo vermelho, verde e azul. Elas batizaram o sistema descoberto por Maxwell, chamado de RGB, das cores em inglês: red, green e blue.',
          urlAudioTexto:'',
          textoSimplificado:'Sistema RGB',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Sistema RGB', 
          textoDescritivoImagem:'Sistema RGB de cores.', },

          {ordem:7,
          predecessor:6,
          texto:'Maxwell também conseguiu explicar cientificamente por que algumas pessoas chamadas daltônicas não enxergam certas cores.',
          urlAudioTexto:'',
          textoSimplificado:'Daltonismo',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Teste daltonismo', 
          textoDescritivoImagem:'Imagem para testar daltonismo.', },//ao definir a imagem, a descrição deverá ser melhorada

          {ordem:8,
          predecessor:7,
          texto:'Você sabia que pessoas sem daltonismo podem enxergar as cores de um modo um pouco diferente das outras? Duvida? Faça esse teste. Você vê esse vestido em branco e dourado ou azul e preto?',
          urlAudioTexto:'',
          textoSimplificado:'Curiosidade',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Vestido azul e preto ou branco e dourado', 
          textoDescritivoImagem:'Vestido azul e preto ou branco e dourado, a depender de quem está olhando a imagem.', },

				]
		
		  }			  
	  },
  
      licao12:{
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 12. Laços Aninhados.',**/
		  infografico:{titulo:'Laços Aninhados',
				tituloSimplificado:'Imagens Digitais',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
          {ordem:1,
          predecessor:0,
          texto:'Você já aprendeu a usar laços em algoritmos e programar usando o programa repita. Basta colocar o número de repetições desejadas no comando repita e em volta do grupo de comandos que deseja repetir. Está pronto o seu laço!',
          urlAudioTexto:'',
          textoSimplificado:'Laços',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Comando repita em linguagem de bloco', 
          textoDescritivoImagem:'Comando repita no blockly.', }, //enviar ao ilustrador imagem 00:14

          {ordem:2,
          predecessor:1,
          texto:'Agora você vai aprender algumas variações mais avançadas no uso de laços, como os laços aninhados. Para tanto, veja com atenção esse exemplo que usa laços simples para desenhar cada triângulo.',
          urlAudioTexto:'',
          textoSimplificado:'Laços Alinhados',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Comando repita em linguagem de bloco com três execuções', 
          textoDescritivoImagem:'Comando repita em linguagem de bloco com três execuções.', },//enviar ao ilustrador imagem 00:35

          {ordem:3,
          predecessor:2,
          texto:'Além do laço aninhado, outro tipo de laço é muito útil. O laço enquanto. Você usa esse laço quando não sabe exatamente o número de repetições e quer que os comandos se repitam enquanto uma condição for verdadeira. Veja o exemplo a seguir. Algoritmo Dj para pista de dança.<p><code>Enquanto "a música tocar" <br/> Faça "Dance"</code>',
          urlAudioTexto:'',
          textoSimplificado:'Laço Enquanto',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Dj tocando música',  
          textoDescritivoImagem:'Dj tocando música.', },

          {ordem:4,
          predecessor:3,
          texto:'Outro exemplo. Algoritmo do jogador de futebol.<p><code>Enquanto "Jogo não acabar" <br/> Faça "Jogue futebol"</code>',
          urlAudioTexto:'',
          textoSimplificado:'Exemplo Laço Enquanto',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Jogador de futebol chutando a bola', 
          textoDescritivoImagem:'Jogador de futebol chutando a bola.', },

          {ordem:5,
          predecessor:4,
          texto:'Se estiver programando, você precisa saber quais condições a sua linguagem de programação suporta. Veja o exemplo da linguagem Blockly usando o CODE.ORG ou SCRATCH. Para saber quando um personagem atinge o final do caminho, use o seguinte comando:<p><code>Enquanto "houver caminho em frente" <br/> Faça "Avance"</code>',
          urlAudioTexto:'',	
          textoSimplificado:'Programa Laço Enquanto',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Imagem personagem andando no SCRATCH.', 
          textoDescritivoImagem:'Personagem andando em um cenário SCRATCH.', },

          {ordem:6,
          predecessor:5,
          texto:'Você pode combinar laços "repita", laços aninhados e laços "enquanto" para criar programas bem poderosos. Veja o exemplo a seguir: <p><code>Enquanto "houver caminho em frente" <br/> Faça "Avance" <br/> &nbsp;&nbsp;&nbsp;&nbsp;Repita "3" vezes<br/>&nbsp;&nbsp;&nbsp;&nbsp;Faça "Remova"</code><p>Vamos praticar?',
          urlAudioTexto:'',
          textoSimplificado:'Programas Poderosos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Comando enquanto e repita em linguagem de bloco', 
          textoDescritivoImagem:'Comando Enquanto e Repita usados simultaneamente.', },//enviar ao ilustrador imagem 01:55

				]
		  }			  
	  },

      licao13:{
		  id:'CSXAULA13CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 13. Eventos e Reações.',**/
		  infografico:{titulo:'Eventos e Reações',
				tituloSimplificado:'Imagens Digitais',
				estiloPadrao:'basicoPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
          {ordem:1,
          predecessor:0,
          texto:'Eventos.<p>Você sabe o que é um evento? Damos esse nome a acontecimentos inesperados ou que ocorrem eventualmente. Um evento não é algo que acontece repetidamente todos os dias em determinado horário, por exemplo.',
          urlAudioTexto:'',
          textoSimplificado:'Eventos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Notícia do jornal sobre o lançamento de um foguete', //https://g1.globo.com/globonews/conexao-globonews/video/veja-imagens-do-lancamento-da-starship-foguete-mais-poderoso-da-historia-11550834.ghtml
          textoDescritivoImagem:'Lançamento de um foguete.', }, 

          {ordem:2,
          predecessor:1,
          texto:'Um evento é um acontecimento ou ação eventual que pode mudar uma rotina, ao provocar reações em resposta. Você está estudando concentrado quando, de repente, o seu celular toca. Qual é a sua reação a esse evento?',
          urlAudioTexto:'',
          textoSimplificado:'Eventos e Reações',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Estudante estudando e celular tocando', //enviar ao ilustrador 
          textoDescritivoImagem:'Um estudante lendo um livro e o celular começa a tocar.', },

          {ordem:3,
          predecessor:2,
          texto:'Em computação, muitos eventos são provocados por usuários, que são as pessoas que usam o computador. Um evento do usuário pode ser, por exemplo, clicar com o mouse ou apertar a tecla "Enter". Um programador pode criar trechos de programa para reagir a esses eventos. Por exemplo, para abrir uma nova janela ou mover um personagem em um jogo.',
          urlAudioTexto:'',
          textoSimplificado:'Reação', 
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Digitando no teclado e clicando no mouse',  //enviar ao ilustrador imagem 1:00
          textoDescritivoImagem:'À esquerda, uma pessoa digitando no teclado, e à direita outra pessoa clicando no mouse.', },

          {ordem:4,
          predecessor:3,
          texto:'Os smartphones (celulares inteligentes), tablets e até smartwatches (relógios inteligentes) são computadores móveis que permitem novos eventos do usuário, como toques em sua tela ou movimento do dispositivo.',
          urlAudioTexto:'',	
          textoSimplificado:'Exemplos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Smartphone, tablet, smartwatch.', 
          textoDescritivoImagem:'Imagem de um smartphone (celular inteligente), um tablet e um smartwatch (relógio inteligente)', },

          {ordem:5,
          predecessor:4,
          texto:'Você pode criar um programa que roda sem interferência de eventos de qualquer tipo, mas esses programas são raros. A maior parte dos programas são dirigidos por eventos, como os jogos ou aplicativos de redes sociais.',
          urlAudioTexto:'',
          textoSimplificado:'Sem Eventos',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Frase: Um programa é dirigido por eventos quando ele reage a ações do usuário como apertar uma tecla, clicar com o mouse ou girar uma alavanca do joystick', //enviar ao ilustrador imagem 1:08	
          textoDescritivoImagem:'Um programa é dirigido por eventos quando ele reage a ações do usuário como apertar uma tecla, clicar com o mouse ou girar uma alavanca do joystick.', },

          {ordem:6,
          predecessor:5,
          texto:'Os dispositivos móveis (smartphone, tablet, smartwatch) também possuem muitos sensores capazes de gerar eventos que não dependem do usuário, mas podem ser usados por programadores experientes. <br/> Note que os smartphones já são programados para medir a temperatura do aparelho e enviar alerta ao usuário quando é necessário resfriá-los. <br/> Agora é a sua vez. Vamos programar?',
          urlAudioTexto:'',
          textoSimplificado:'Sensores',
          textoImpresso:1,
          imagemImpresso:1,
          urlImagem:'',
          promptImagem:'Celular ao sol esquentando com alerta da temperatura alta', //enviar ao ilustrador 
          textoDescritivoImagem:'Um celular inteligente ao sol apresentando na tela uma alerta de temperatura alta e informando ao usuário a necessidade de esfriá-lo.', },

				]
		  }			  
	  },
  
       licao15:{
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 15. Sensores os Sentidos Humanos.',**/
		  infografico:{titulo:'Sentidos Humanos e Sensores Eletrônicos',
      tituloSimplificado:'Animação',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Sentidos Humanos e Sensores Eletrônicos.<p>Através de nossos olhos, ouvidos, boca, nariz e pele, conseguimos perceber o meio ambiente e interagir com o mundo: são nossos órgãos sensoriais.',
        urlAudioTexto:'',
        textoSimplificado:'Órgãos sensoriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Órgãos sensoriais', 
        textoDescritivoImagem:'Imagem dos órgãos sensoriais: olhos, ouvidos, boca, nariz e pele.', },

        {ordem:2,
        predecessor:1,
        texto:'Mas outro órgão tem papel fundamental para o funcionamento dos nossos sentidos: o cérebro. Os órgãos sensoriais nada mais fazem do que captar os sinais do mundo externo e enviar para o nosso cérebro, que é, de fato, o órgão que interpreta o que chega e reage ao que ocorre ao nosso redor.',
        urlAudioTexto:'',
        textoSimplificado:'Cérebro',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Órgãos sensoriais e cérebro', 
        textoDescritivoImagem:'Imagem do cérebro e ao redor os órgãos sensoriais, olhos, ouvidos, boca, nariz e pele.', },

        {ordem:3,
        predecessor:2,
        texto:'Tal como os seres humanos, os robôs e dispositivos eletrônicos também podem ser equipados com órgãos sensoriais, chamados sensores.<br/>Os sensores são componentes eletrônicos que, assim como os órgãos sensoriais humanos, captam sinais do meio ambiente. Esses sinais podem ser recebidos por um dispositivo computacional como um computador ou celular, ou ainda por um processador embutido em um robô.',
        urlAudioTexto:'',
        textoSimplificado:'Sensores Eletrônicos',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sensores eletrônicos',  //enviar ao ilustrador, incluindo as descrições de cada sensor
        textoDescritivoImagem:'Imagens de sensores eletrônicos.', },

        {ordem:4,
        predecessor:3,
        texto:'Os sensores de som são parecidos com o nosso sistema auditivo. Eles captam o som e transformam em sinais elétricos. O microfone pode ser usado como um sensor de som.',
        urlAudioTexto:'',	
        textoSimplificado:'Sensores de Som',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadrinho ouvido recebendo som do rádio e enviando informação ao cérebro que responde como música.', //enviar ao ilustrador vídeo 1:27
        textoDescritivoImagem:'Quadrinho de um ouvido recebendo um som do rádio e enviando informação ao cérebro que processa o som, e responde informando que uma música bacana está tocando.', },

        {ordem:5,
        predecessor:4,
        texto:'As câmeras ou filmadoras possuem sensores de luz tão poderosos que podem captar imagens de forma parecida com os olhos humanos. Os sensores de luz são parecidos com o nosso sistema ocular. Eles captam a luminosidade e a transformam em sinais elétricos.',
        urlAudioTexto:'',
        textoSimplificado:'Sensor de Luz',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Vaso antigo com imagem em movimento', //enviar ao ilustrador vídeo 1:33
        textoDescritivoImagem:'Quadrinho de um olho recebendo a luz do sol e enviando informação ao cérebro que processa a luz, e responde informando que é a luz do sol, indicando que é hora de acordar.', },

        {ordem:6,
        predecessor:5,
        texto:'Quando alguém cutuca o seu braço, você sente esse toque e o seu cérebro logo decide se virar para ver quem é. Esse é o sentido do tato em ação. Do mesmo modo funciona a tela de um celular: você toca e ela transmite o toque para o processador do celular, que é o seu computador interno. Um programa decide como reagir, abrindo um aplicativo, por exemplo.',
        urlAudioTexto:'',
        textoSimplificado:'Sensores de Tato',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Tela do smartphone sendo tocada e um aplicativo abrindo', //enviar ao ilustrador vídeo 1:48
        textoDescritivoImagem:'Uma pessoa tocando no ícone de um aplicativo na tela de um celular e o aplicativo sendo aberto respondendo ao toque.', },

        {ordem:7,
        predecessor:6,
        texto:'Nossa pele também é responsável por informar ao nosso cérebro sobre a temperatura externa, se faz calor ou frio.<p>No mundo eletrônico, sensores de temperatura ou calor podem evitar incêndios, enviando sinais elétricos para outro dispositivo tocar um alarme ou jogar água. Esses sensores também ajudam a manter uma mesma temperatura em uma sala, transmitindo sinais ao ar-condicionado.',
        urlAudioTexto:'',
        textoSimplificado:'Sensore de Temperatura',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sensor de incêncio', 
        textoDescritivoImagem:'Sensor de incêndio.', },

        {ordem:8,
        predecessor:7,
        texto:'Vimos alguns exemplos de sensores eletrônicos que se aproximam da nossa visão, audição e tato. E quanto ao olfato e paladar? Será que já existem sensores para perceber um cheiro ou um gosto de alimento? Sim, eles já existem, mas são muito caros e de pouca utilidade por enquanto.',
        urlAudioTexto:'',
        textoSimplificado:'Sensor Olfato e Paladar',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Cheiro chegando ao nariz de uma pessoa', //enviar ao ilustrador https://cienciahoje.org.br/artigo/as-mil-e-uma-aplicacoes-do-nariz-eletronico/
        textoDescritivoImagem:'Cheiro chegando ao nariz de uma pessoa.', },

        {ordem:9,
        predecessor:8,
        texto:'Mas não pensem que os robôs ou dispositivos eletrônicos ficam para trás. Eles também possuem sensores eletrônicos que superam os nossos sentidos humanos. Sensores de infravermelho, por exemplo, conseguem captar um tipo de luz que os nossos olhos não veem. Do mesmo modo, sensores de ultrassom são capazes de captar sons que não conseguimos ouvir.',
        urlAudioTexto:'',
        textoSimplificado:'Outros Sensores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Luz infravermelha', 
        textoDescritivoImagem:'Imagem com luz infravermelha', },

        {ordem:10,
        predecessor:9,
        texto:'Existem centenas de sensores e com eles você pode criar aparelhos e robôs incríveis. Vamos experimentar?',
        urlAudioTexto:'',
        textoSimplificado:'Sensores Diversos',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Todos os tipos de sensores eletrônicos', 
        textoDescritivoImagem:'Imagem com diversos tipos de sensonres eletrônicos.', },

				]
		
		  }			  
		  
	  },
 },
  

  
  
  unidade2:{
	  
	  licao8:{},

	  licao9:{		  
      id:'CSXAULA09CODE',
      /** padroesCurriculares: 
      titulo:'Lição 09. Sistema Binário',**/
      infografico:{titulo:'Sistema Binário - Letras e Números',
      tituloSimplificado:'Sistema Binário',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Sistema Binário: o código secreto dos computadores.<p>Você sabia que os computadores e robôs são considerados máquinas "burras"? Sim, é verdade! Na realidade, são os programas que os fazem executar ações que os tornam aparentemente inteligentes.',
        urlAudioTexto:'',
        textoSimplificado:'Sistemas computacionais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagem de um computador<p>Imagem de um robô',
        textoDescritivoImagem:'Duas imagens, na primeira um computador e na segunda um robô humanóide.', },

        {ordem:2,
        predecessor:1,
        texto:'Para entender o sistema interno dos computadores, vamos primeiro lembrar de como nós, humanos, gostamos de lidar com números.',
        urlAudioTexto:'',
        textoSimplificado:'Números',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desenho da cabeça de uma professora<p>Desenho de um quadro negro, com algumas operações matemáticas simples', 
        textoDescritivoImagem:'Duas imagens, na primeira uma professora e na segunda um quadro negro, em que foram escritas algumas operações matemáticas simples, de somas, subtrações, multiplicações e divisões.', },

        {ordem:3,
        predecessor:2,
        texto:'Nosso sistema preferido é chamado de sistema decimal. Ele utiliza dez símbolos, de zero a nove. Quando colocamos um número ao lado do outro, o da esquerda vale dez vezes mais.',
        urlAudioTexto:'',
        textoSimplificado:'tabela de valores posicionais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de quadro de valor posicional, mostrando tabela para converter unidades em dezenas e dezenas em centenas',
        textoDescritivoImagem:'Imagem de quadro negro, em que foi escrito uma tabela de valor posicional para ensinar como se converter 10 unidades em uma dezena e 10 dezenas em uma centena.', },

        {ordem:4,
        predecessor:3,
        texto:'No entanto, nos computadores, o sistema utilizado é o mais simples: o sistema binário. Nele, são usados apenas dois símbolos, o zero e o um. Ao colocar dois números um ao lado do outro, o da esquerda vale apenas duas vezes mais...',
        urlAudioTexto:'',
        textoSimplificado:'Número 4 em sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de operações matemáticas para converter o número 4 do sistema binário para o sistema decimal',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Imagem de quadro negro, em que foram escritas as operações matemáticas para converter o número 4 do sistema decimal para o sistema binário.', },

        {ordem:5,
        predecessor:4,
        texto:'Observe como os números 1, 2 e 3 são representados no sistema binário. Embora possam parecer com os números 1, 10 e 11 do sistema decimal, quem entende o sistema binário sabe que esses números valem 1, 2 e 3.',
        urlAudioTexto:'',
        textoSimplificado:'Números 1, 2 e 3 em sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escritas dos números 1, 2 e 3 em sistema binário', 
        textoDescritivoImagem:'Imagem de quadro negro, em que foi escrito os números 1, 2 e 3 em sistema decimal e em sistema binário.', },

        {ordem:6,
        predecessor:5,
        texto:'O sistema binário é como um código secreto. Aqueles que o compreendem podem usá-lo para se comunicar sem que outras pessoas consigam decifrar.',
        urlAudioTexto:'',
        textoSimplificado:'Código secreto',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Envelope de carta com selo de conteúdo secreto', 
        textoDescritivoImagem:'Imagem de envelope de carta com selo de conteúdo secreto, escrito, de fora a fora, com codigos binários, com "zeros" e "uns".', },

        {ordem:7,
        predecessor:6,
        texto:'Para representar quantidades maiores que 3, o sistema binário vai acrescentando mais zeros ou uns à esquerda, sendo que cada posição vale o dobro da anterior.',
        urlAudioTexto:'',
        textoSimplificado:'Representação de sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de um byte e de números abaixo de cada algaritimo do byte, indicando o valor, em sistema decimal, de cada uma das casas do sistema binário', 
        textoDescritivoImagem:'Imagem de um quadro negtro, em que foi escrito um dado em código binário do tamanho de um byte _ ou seja, um código binário composto por oito casas de valores binários. Abaixo do código binário, há os números 0, 1, 2, 4 e 8, escritos da direita para a esquerda, para indicar o valor, em sistema decimal, de cada uma das casas do byte.', },

        {ordem:8,
        predecessor:7,          
        texto:'Embora os números em binário possam se tornar grandes, é possível representar qualquer quantidade utilizando o sistema binário, assim como os números decimais.',
        urlAudioTexto:'',
        textoSimplificado:'Exemplos de números em binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de diversos valores em binário, como 16, 42, 120 e 1024.', 
        textoDescritivoImagem:'Imagem de um quadro negtro, em que foi escrito diversos números em sistema binário, como 16, 42, 120 e 1024.', },

        {ordem:9,
        predecessor:8,
        texto:'Já começamos a desvendar como os computadores trabalham com números, letras e palavras. Mas e quanto aos vídeos, sons e imagens, por exemplo? Eles também são armazenados pelo computador como código binário, ou seja, como zeros e uns.',
        urlAudioTexto:'',
        textoSimplificado:'Mecânica',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagem de uma televisão, reproduzindo um vídeo<p>Imagem de um tablet, exibindo a curva de um som musical<p>Imagem de um monitor, exibindo uma imagem em 3d digital', 
        textoDescritivoImagem:'Imagem de uma televisão, reproduzindo um vídeo.Imagem de um tablet, exibindo a curva de um som musical.E imagem um monitor, exibindo uma imagem em 3d digital.', },

        {ordem:10,
        predecessor:9,          
        texto:'Se você ainda não entendeu muito bem, não se preocupe! Você vai aprender a contar em código binário, assim como os computadores, com um divertido jogo de cartas!',
        urlAudioTexto:'',
        textoSimplificado:'Baralho binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagens de cartas do jogo chamado baralho binário', 
        textoDescritivoImagem:'Imagens de cartas do jogo chamado baralho binário. Algumas cartas contém pontinhos pretos, em quantidade diversas, como um ponto, dois pontos, quatro pontos ou oito pontos. Outras cartas contém os numerais 0 ou 1.', },

        ]
      }
    },
    licao10:{},
    licao11:{},
    licao12:{},
    licao13:{},
    licao14:{
      id:'CSXAULA14CODE',
      /** padroesCurriculares: 
      titulo:'Lição 14. Linguagens Midiáticas e Tecnologias Digitais',**/
      infografico:{titulo:'Editando Imagens Digitais',
      tituloSimplificado:'Imagens Digitais',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Editando imagens digitais.<p>Uma imagem é chamada de digital quando está em um formato que pode ser usado por um programa de computador. Quando tiramos fotos usando um computador, tablet ou celular, elas já são criadas como arquivos em formato digital.',
        urlAudioTexto:'',
        textoSimplificado:'Imagens digitais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Fotos de um computador e um smartphone, em uma videocall<p>Foto de um tablet, tirando foto um objeto inanimado<p>Foto de um smartphone, tirando foto de uma bela passagem',
        textoDescritivoImagem:'TrÊS imagens. A primeira imagem exibe um computador e um smartphone, em que seus usuários estão em uma chamada de vídeo. A segunda imagem mostra um tablet, que está sendo utilizado para tirar uma foto um objeto inanimado. A terceira imagem mostra um smartphone, que está sendo utilizado para tirar uma foto de uma linda passagem.', },

        {ordem:2,
        predecessor:1,
        texto:'Também é possível utilizar equipamentos chamados de digitalizadores ou scanners para transformar desenhos em papel, que chamamos de analógicos, em arquivos digitais.',
        urlAudioTexto:'',
        textoSimplificado:'Scanner',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de um scanner portátil, imprimindo um documento scaneado<p>Foto de um scanner, imprimindo uma foto scaneada<p>Foto de um scanner de mesa, fechado', 
        textoDescritivoImagem:'Três imagens. Na primeira um scanner portátil, que está imprimindo um documento scaneado. Na segunda um scanner, que está imprimindo uma foto scaneada. E na terceira um scanner de mesa, fechado.', },

        {ordem:3,
        predecessor:2,
        texto:'E é claro, as imagens ilustradas diretamente no computador também nascem em formato digital.',
        urlAudioTexto:'',
        textoSimplificado:'Ilustraçãos digitais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de um ilustrador fazendo um pintura digital com uma mesa digitalizadora',
        textoDescritivoImagem:'Imagem de um ilustrador, utilizando uma mesa digitalizadora para desenhar uma pintura digital na monitor de um computador.', },

        {ordem:4,
        predecessor:3,
        texto:'Quando tiramos uma foto com o celular e queremos usá-la em uma animação ou videogame, precisamos primeiro importar essa foto para o computador, ou seja, copiar o arquivo da foto do celular para o computador.',
        urlAudioTexto:'',
        textoSimplificado:'Importando uma foto no computador',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de um fotográfo, transferindo um foto de uma câmera digital para a memória de um notebook',
        textoDescritivoImagem:'Imagem de um fotográfo, que conectou uma câmera digital a um notebook atráves de um cabo USB C para transferir uma foto que está na memória da câmera para a memória do notebook.', },

        {ordem:5,
        predecessor:4,
        texto:'Após copiar para o seu computador, você pode modificar detalhes da foto para que ela funcione bem em seus projetos de programação.',
        urlAudioTexto:'',
        textoSimplificado:'Fotos modificadas digitalmente',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de perfil de uma bela atriz, não maquiada, ao lado da imagem editada dessa foto, em que foram aplicados efeitos digitais para clarear a imagem, remover sardas e marcas de expressões faciais e aplicar maquiagem em seus olhos e boca<p>Foto de um jovem, se equilibrando com os dois pés sobre o tronco de uma árvore, ao lado da imagem editada a partir dessa foto, em que o jovem de dimensões gigantescas que está sobre um arranha-céu em Nova Iorque.', 
        textoDescritivoImagem:'Duas imagens. A primeira exibe a foto de perfil de uma bela atriz, que não está maquiada. Ao lado dessa foto, há uma imagem editada a partir da foto, em que foram aplicados efeitos digitais para clarear a fato, para remover sardas e marcas de expressões faciais e para aplicar maquiagem ao redor de seus olhos e em sua boca. A segunda imagem exibe a foto de um jovem, se equilibrando com os dois pés sobre o tronco de uma árvore. Ao lado dessa foto, há imagem editada a partir dessa foto, em que o jovem aparenta possuir dimensões gigantescas e está se equilibrando com os dois pés sobre um dos arranha-céus de Nova Iorque.', },

        {ordem:6,
        predecessor:5,
        texto:'Para isso, existem os programas de edição de imagens. Eles permitem, por exemplo, alterar fotos de familiares e amigos para que possam ser usadas como personagens em suas animações ou videogames.',
        urlAudioTexto:'',
        textoSimplificado:'Fotos editadas de um pai, uma mãe e o filho deles',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de um pai, uma mãe e o filho deles, ao lado de uma imagem editada digitalmente, em que as cabeças do pai, da maãe e do filho foram inseridas no corpo de três personagem 3D', 
        textoDescritivoImagem:'Imagem de uma foto digital de uma família, composta pelo pai, pela  mãe e pelo filho deles. Ao lado da foto, há uma imagem editada digitalmente, que está sendo exibida no monitor de um computador, em que as cabeças do pai, da maãe e do filho foram inseridas no corpo de três personagem 3D de um jogo de computador.', },

        {ordem:7,
        predecessor:6,
        texto:'Para isso, planeje bem as poses das fotos de que você precisa. Tire as fotos com a pessoa em frente a uma parede que, de preferência, tenha uma cor bem viva.<p> E atenção! A pessoa que vai sair na foto não pode estar usando roupas com a mesma cor da parede de fundo. Tire as fotos que você precisa e, em seguida, importe-as para o computador.',
        urlAudioTexto:'',
        textoSimplificado:'Foto de uma pessoa em um fundo amarelo vivo',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de duas pessoa em um fundo amarelo vivo. A primeira está sorrindo e está vestindo uma camisa roxa. A segunda está com uma leve expressão de tristeza e está vestindo uma camisa amarela, com tom muito semelhando à cor da parede de fundo.', 
        textoDescritivoImagem:'Imagem da foto de duas pessoa, da altura do cintura até a cabeça, com uma parede amarelo vivo ao fundo. A primeira pessoa está sorrindo e está vestindo uma camisa roxa. A segunda pessoa está com uma leve expressão de tristeza e está vestindo uma camisa amarela, com tom muito semelhando à cor da parede de fundo.', },

        {ordem:8,
        predecessor:7,          
        texto:'O próximo passo é editar suas fotos para remover o fundo da imagem. Você vai aprender essa técnica nesta aula utilizando uma aplicação online gratuita para edição de fotos.<p>Programas de edição de imagens possuem diversos recursos, como a "varinha mágica", que são úteis para remover o fundo das suas fotos como num passe de mágica. Vamos praticar?',
        urlAudioTexto:'',
        textoSimplificado:'Programa de edição de imagens',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Captura de tela de um programa de edição de imagens, em que o fundo amarelo de uma fotografia está sendo removido através do uso de uma ferramenta chamada "varinha mágica"', 
        textoDescritivoImagem:'Imagem de uma captura de tela, que está exibindo a tela de um programa de edição de imagens em que o fundo amarelo de uma fotografia está sendo removido através do uso da ferramenta chamada "varinha mágica".', },

       ]
     },
    },
	  
  },
  
   
  unidade3:{
	  
    licao15:{},
    licao16:{		  
      id:'CSXAULA16CODE',
      /** padroesCurriculares: 
      titulo:'Lição 16. Arquitetura de Computadores - Relógio',**/
      infografico:{titulo:'Clock, o Relógio Interno do Computador',
      tituloSimplificado:'Clock',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Clock - O coração do computador.<p>O que uma orquestra, uma equipe de remo e um computador possuem em comum? Todos precisam de uma marcação de ritmo forte para que seus componentes funcionem em perfeita sincronia. Em uma orquestra, o ritmo é garantido pelo maestro. Em uma equipe de remo, pelo timoneiro. E nos computadores, por um cristal de quartzo que oscila próximo ao processador.',
        urlAudioTexto:'',
        textoSimplificado:'Uma Orquesta, uma equipe de remo e a placa mãe de um computador',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de uma orquesta, destacando um maestro, marcando o ritmo da música<p>Foto de uma equipe de remo<p>Foto da placa mãe de um computador, com um seta apontando para o local em que fica o cristal de quarzto',
        textoDescritivoImagem:'Três imagens. Na primeira uma uma orquesta, com destaque no maestro, que está marcando o ritmo da música. Na segunda uma equipe de remo, em que os atletas estão remando de modo sincronizado. Na terceira a placa mãe de um computador, com uma seta apontando para o local em que se encontra o cristal de quartzo.', },

        {ordem:2,
        predecessor:1,
        texto:'Chamado de System Clock, Internal Clock ou simplesmente Clock, esse minúsculo componente também pode ser comparado ao nosso coração. Seu papel é pulsar, fazendo o processador trabalhar em microciclos organizados, assim como o coração bombeia o sangue para alimentar nossas células.',
        urlAudioTexto:'',
        textoSimplificado:'O system clock',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagem esquemática do sistema circulátório humano, com destque sobre o coração<p>Foto de um cristal de quartzo fixado na placa mãe de um computador', 
        textoDescritivoImagem:'Duas imagens. Na primeira, a ilustração do sistema circulátório humano, com um círculo de destaque ao redor do coração. Na segunda, a foto de cristal de quartzo que está fixado na placa mãe de um computador.', },

        {ordem:3,
        predecessor:2,
        texto:'Cada pulso do clock faz o processador executar uma instrução de máquina. Assim como uma linha de código que escrevemos no Scratch, dependendo do comando, pode gerar dez, cem ou até milhares de instruções de máquina, são necessários vários ciclos de clock para o computador processar uma única linha de código.',
        urlAudioTexto:'',
        textoSimplificado:'Diagrama com o processamento de uma linha de código',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagem de um script de um programa na linguagem Scratch, contendo dois blocos, para que o programa aguarde 2 segundos e então registre em uma variavel o valor da soma de 2 mais 2<p>Imagem das instruções de máquinas escritas em Assembly que corresponde ao script do programa em linguagem Scratch<p>Imagem de diagrama, indicando que foram necessários 5 ciclos de clock para processar uma das linhas do programa escrito em linguagem Assembly.',
        textoDescritivoImagem:'Três imagens. Na primeira um script de um programa codificado em linguagem Scratch, que contém dois blocos de programação para que o computador aguarde 2 segundos e então registre em uma variavel o valor da soma de 2 mais 2. Na segunda um programa em linguagem Assembly, que correspondem ao as instruções de máquinas necessárias para que o computador execute o programa codificado em linguagem Scratch. Na terceira um diagrama esquemático, que indica que são necessários 5 ciclos de clock para processar uma das linhas do programa escrito em linguagem Assembly.', },

        {ordem:4,
        predecessor:3,
        texto:'Felizmente, os clocks são bem rápidos. O primeiro computador eletrônico, o ENIAC, usava um clock de 100 kHz, o que significa que executava instruções a uma taxa de 100 mil ciclos por segundo. Já o primeiro computador pessoal, algumas décadas depois, usava um processador Intel 8080, que vinha com um clock de 2 MHz, capaz de executar 2 milhões de instruções de máquina por segundo.',
        urlAudioTexto:'',
        textoSimplificado:'Clock do primeiro computador e do primeiro computador pessoal da história',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto do computador ENIAC<p>Foto do computador ALTAIR',
        textoDescritivoImagem:'Duas imagens. Na primeira uma foto do primeiro computador, chamado ENIAC, com um texto indicando que seu clock tinha operava na frequência de 100kHz. Na segunda uma foto do primeiro computador pessoal da história, chamado ALTAIR, com um texto indicando que seu processador, o 8080, operava com um clock de 2MHz.  tinha operava na frequência de 100kHz.', },

        {ordem:5,
        predecessor:4,
        texto:'A velocidade dos computadores continuou evoluindo. Os atuais clocks conseguem trabalhar com taxas de Gigahertz, ou seja, processam bilhões de instruções de máquina por segundo.',
        urlAudioTexto:'',
        textoSimplificado:'Crescimento da velocidade dos processadores ao longo do anos',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Gráfico da curva exponencial do crescimento da frequência do clock dos processadores ao longo dos anos', 
        textoDescritivoImagem:'Imagem de um gráfico que exibe a curva exponencial do crescimento da frequência do clock dos processadores ao longo dos anos.', },

        {ordem:6,
        predecessor:5,
        texto:'Mas todo esse avanço vem com um custo. Com o aumento da frequência do clock, a temperatura do sytem clock foi aumentando.<p>Os engenheiros de computadores passam a enfrentar um novo problema: como continuar aumentando a capacidade dos computadores e evitar problemas de superaquecimento?',
        urlAudioTexto:'',
        textoSimplificado:'Aquecimento do system clock',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto do system clock de uma placa mãe, com componentes e trilhas avermelhados para indicar seu superaquecimento', 
        textoDescritivoImagem:'Imagem da foto do system clock de uma placa mãe, em que o cristal de quatzo e os componentes eletrônicos e as trilhas do circuito estão avermelhados, indicando o superaquecimento do system clock.', },

        {ordem:7,
        predecessor:6,
        texto:'A solução foi acrescentar mais núcleos de processamento a uma única CPU, evitando aumentar ainda mais o clock. Isso permitiu ganhos de velocidade no processamento graças ao paralelismo. Surgiram, então, computadores com sistemas dual-core, dois núcleos, e quad-core, quatro núcleos, por exemplo.',
        urlAudioTexto:'',
        textoSimplificado:'Processadores multinúcleo',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Ilustração de um processador, exibindo seus dois núcleos<p>Foto de um computador Dual-core<p>Foto de um computador Quad-core', 
        textoDescritivoImagem:'Ilustração de um processador, exibindo seus dois núcleos<p>Foto de um computador Dual-core<p>Foto de um computador Quad-core', },

        {ordem:8,
        predecessor:7,          
        texto:'Mas, para entender verdadeiramente a importância dos clocks e o mecanismo interno dos computadores, é preciso vestir a camisa. Ou melhor, os processadores. Qual sistema será o mais eficiente? Um dual-core com clock de 1 GHz ou um single-core com 2 GHz?',
        urlAudioTexto:'',
        textoSimplificado:'Ilustração de uma placa mãe',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Ilustração 3D digital de uma placa mãe,com o System Clock centralizado na imagem.', 
        textoDescritivoImagem:'Imagem em 3D digital de uma placa-mãe, com o System Clock centralizado na imagem.', },

        ]
      }
    },
    licao17:{},
    licao18:{
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 18. Listas.',**/
		  infografico:{titulo:'Listas',
      tituloSimplificado:'Animação',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Muitas vezes é útil agrupar informações em uma lista. Seja para lembrar as tarefas do dia-a-dia, como arrumar o seu quarto, levar o lixo para fora e estudar. Seja para guardar os prêmios de um jogador em um programa de videogame, por exemplo. ',
        urlAudioTexto:'',
        textoSimplificado:'Listas',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Listas de atividades para arrumar o quarto.', //enviar ao ilustrador
        textoDescritivoImagem:'Lista de atividades para arrumar o quarto.', },

        {ordem:2,
        predecessor:1,
        texto:'Em programação há dois tipos de listas, as estáticas e as dinâmicas. <p>Uma lista é estática quando o programador define os valores antecipadamente e eles não mudam durante a execução do programa. Por exemplo, no caso de uma lista contendo todas as fases possíveis de um videogame.',
        urlAudioTexto:'',
        textoSimplificado:'Lista Estática',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Lista com as fases do jogo de videogame Sonic The Hedgegog 2', //enviar ao ilustrador, vídeo 00:40
        textoDescritivoImagem:'Lista contendo as fases do jogo de videogame Sonic The Hedgegog 2.', },

        {ordem:3,
        predecessor:2,
        texto:'Já nas listas dinâmicas, seus valores vão sendo preenchidos durante a execução do programa. Por exemplo, no caso de uma lista de fases já vencidas pelo jogador corrente.',
        urlAudioTexto:'',
        textoSimplificado:'Lista Dinâmicas',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Lista com as fases vencidas do jogo de videogame Sonic The Hedgegog 2', //enviar ao ilustrador, vídeo 00:57
        textoDescritivoImagem:'Lista contendo as fases vencidas do jogo de videogame Sonic The Hedgegog 2.', },

        {ordem:4,
        predecessor:3,
        texto:'Linguagens de progamação como o Scratch e o App Inventor trazem blocos de comando que facilitam a criação e utilização de listas, sejam estáticas ou dinâmicas. <p>Vamos ver alguns exemplos. Começaremos pelo Scratch. O primeiro passo é clicar no botão "criar uma lista" dentro da seção Variáveis dos Scripts. E dar um nome a lista como "fases". O Scratch então irá gerar uma série de comandos para manipular a lista criada.',
        urlAudioTexto:'',	
        textoSimplificado:'Listas no Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação de Listas no Scratch.', //enviar ao ilustrador, vídeo 01:36
        textoDescritivoImagem:'Programação de Listas no Scratch.', },

        {ordem:5,
        predecessor:4,
        texto:'No Scratch, se for uma lista estática podemos definir seus valores e exibí-los ou não no palco. Uma vez criadas as listas, temos várias maneiras de recuparar o valor de seus elementos. <p>Se em algum ponto de nosso programa temos a posição na lista, por exemplo, 2 (dois) e queremos recuperar o nome da fase correspondente, podemos usar o comando "item de" no Scratch.',
        urlAudioTexto:'',
        textoSimplificado:'Lista Estática Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação de Lista Estática no Scratch', //enviar ao ilustrador vídeo 2:10 + 2:15 + 3:15
        textoDescritivoImagem:'Programação de Lista Estática no Scratch.', },

        {ordem:6,
        predecessor:5,
        texto:'Podemos também percorrer todos os itens da lista que criamos usando laços. No exemplo a seguir, o gato Scratch lê todas as fases do jogo uma a uma, logo que ele é iniciado.',
        urlAudioTexto:'',
        textoSimplificado:'Lista e Laço Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação de Lista e Laço no Scratch', //enviar ao ilustrador vídeo 4:05
        textoDescritivoImagem:'Programação de Lista e Laço no Scratch.', },

        {ordem:7,
        predecessor:6,
        texto:'Agora vamos ver alguns exemplos de uso de listas com o App Inventor. O primeiro passo é inicializar uma variável global definindo o nome da lista no comando "inicializar global para". E então, mover o comando "criar lista vazia" para a declaração, a partir da seção de blocos internos chamada de Listas.',
        urlAudioTexto:'',
        textoSimplificado:'Listas no App Inventor',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação no App Inventor', //enviar ao ilustrador vídeo 1:57 e/ou 2:05
        textoDescritivoImagem:'Programação no App Inventor.', },

        {ordem:8,
        predecessor:7,
        texto:'Para criar listas estáticas usamos o bloco "criar lista" logo na declaração da variável para informar todos os elementos. <p>Para criar uma lista com mais de dois elementos usamos a engrenagem que vem no comando arrastando tantos itens quanto forem precisos para a lista. ',
        urlAudioTexto:'',
        textoSimplificado:'Lista App Inventor',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação de Lista Estática no App Inventor', //enviar ao ilustrador vídeo 2:52
        textoDescritivoImagem:'Programação de Lista Estática no App Inventor', },

        {ordem:9,
        predecessor:8,
        texto:'Uma vez criada as listas, temos várias maneiras de recuperar seus elementos, como por exemplo usar o comando "selecionar item da lista". <p>Se ocorrer o inverso, e em algum ponto de nosso programa soubermos o nome da fase e quisermos saber qual é sua posição, podemos usar o comando "índice na lista". Se o valor não for encontrado em um item da lista, este comando retorna zero.',
        urlAudioTexto:'',
        textoSimplificado:'Recuperar elemento App Inventor',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação para recuperar elemento da lista no App Inventor', //enviar ao ilustrador vídeo 3:24 + 3:40
        textoDescritivoImagem:'Programação para recuperar elemento da lista no App Inventor.', },

        {ordem:10,
        predecessor:9,
        texto:'O App Inventor traz uma série de elementos que podem ser populados a partir de listas com um único comando. Como o "VisualizadorDeListas". <p>Primeiro arrastamos o componente para a tela, depois programamos para mover os elementos de nossa lista para os elementos do visualizador com um único comando. Somente com este código, todas as fases do nosso exemplo aparecem na tela do aplicativo.',
        urlAudioTexto:'',
        textoSimplificado:'Popular Listas',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação para popular listas no App Inventor', //enviar ao ilustrador vídeo 4:46
        textoDescritivoImagem:'Programação para popular listas no App Inventor.', },

        {ordem:11,
        predecessor:10,
        texto:'Para listas dinâmicas, que são modificadas durante o programa, existem comandos no Scratch e App Inventod para adicionar e remover itens da lista. .',
        urlAudioTexto:'',
        textoSimplificado:'Lista Dinâmicas',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação de lista dinâmicas no Scrtch e App Inventor', //enviar ao ilustrador vídeo 5:14
        textoDescritivoImagem:'Programação de lista dinâmicas no Scrtch e App Inventor.', },

        {ordem:12,
        predecessor:11,
        texto:'Listas são recursos de programação muito úteis e poderosos que precisamos dominar.',
        urlAudioTexto:'',
        textoSimplificado:'Listas',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Listas', //enviar ao ilustrador vídeo 5:14
        textoDescritivoImagem:'Listas.', },

				]
		
		  }			  
		  
	  },
	
    licao19:{},
    licao20:{
	
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 20. A Linguagem de Programação Scratch.',**/
		  infografico:{titulo:'A Linguagem de Programação Scratch',
      tituloSimplificado:'Scratch',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'O Scratch é uma linguagem de programação completa, voltada para a criação de jogos e histórias animadas. <p>Seu uso é gratuito e permite o compartilhamento de programas com Scratchers de todo o mundo! ',
        urlAudioTexto:'',
        textoSimplificado:'Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Gatinho do Scratch', 
        textoDescritivoImagem:'Gatinho do Scratch.', },

        {ordem:2,
        predecessor:1,
        texto:'No Scratch, os personagens são chamados de atores. Um ator pode ter várias fantasias, que são posições ou roupas diferentes que ele pode assumir em determinado momento de um jogo ou história.',
        urlAudioTexto:'',
        textoSimplificado:'Personagens e Fantasias',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Personagem e suas fantasias no ambiente Scratch', 
        textoDescritivoImagem:'Personagem e suas fantasias no ambiente Scratch.', },

        {ordem:3,
        predecessor:2,
        texto:'Você poderá incluir efeitos especiais em seu jogo ou história acrescentando músicas e sons diversos (barulhos diversos, como porta fechando, buzina etc.).',
        urlAudioTexto:'',
        textoSimplificado:'Música e Som',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Gato DJ', 
        textoDescritivoImagem:'Gato DJ', },

        {ordem:4,
        predecessor:3,
        texto:'O palco é onde tudo acontece. É no palco, uma espécie de retângulo, que todos os personagens se movimentam.<p> O palco pode ter um pano de fundo. E você irá encontrar vários deles já prontos, que vão transportar seus atores para o espaço, estádios de futebol, para neve ou casas, por exemplo.',
        urlAudioTexto:'',	
        textoSimplificado:'Palco',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Possibilidades de placos do Scratch', 
        textoDescritivoImagem:'Possibilidades de placos do Scratch.', },

        {ordem:5,
        predecessor:4,
        texto:'Você também poderá tirar uma foto e usar a sua própria casa ou escola para usar como pano de fundo de um jogo.<p>Para ficar ainda mais interessante, você pode trocar o pano de fundo do palco quantas vezes quiser durante um jogo. Em uma mudança de fase, por exemplo.',
        urlAudioTexto:'',
        textoSimplificado:'Mudança de Palco',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Mundaça de palco no Scratch', 
        textoDescritivoImagem:'Mundaça de palco no Scratch.', },

        {ordem:6,
        predecessor:5,
        texto:'E finalmente só falta você dar vida ao seu show, reunindo todos os elementos do Scratch com muita programação! <p>Afinal, é com a programação que você move os atores, troca panos de fundo, emite sons, enfim faz acontecer. <p>Então chega de teoria, pois é hora de ação!',
        urlAudioTexto:'',
        textoSimplificado:'Programação no Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Show no Scratch', 
        textoDescritivoImagem:'Show no Scratch.', },

				]
		
		  }			  
		
	},
    licao21:{		  
      id:'CSXAULA21CODE',
      /** padroesCurriculares: 
      titulo:'Lição 21. Mídias Digitais - Compactação de Arquivos',**/
      infografico:{titulo:'Compressão de Arquivos Digitais',
      tituloSimplificado:'Compressão de Arquivos',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Compressão de arquivos digitais.<p>Já vimos que os computadores armazenam textos, números, imagens, fotos, sons e vídeos em códigos binários, o que chamamos de sistema digital.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Diagrama ilustrativo do armazenamento de um computador, em que ilustrações de um documento impresso, uma câmera digital, notas musicais e uma filmadora estão apontando para um computador e o computador está apontando para números binários',
        textoDescritivoImagem:'Imagem de um diagrama ilustrativo, que representa o armazenamento de dados de um computador. No diagrama, há figuras de um documento impresso, de uma câmera digital, de notas musicais e de uma filmadora, que estão apontando, por meio de setas, para um computador. Por sua vez, o computador está apontando para alguns números binários.', },

        {ordem:2,
        predecessor:1,
        texto:'Como o sistema binário usa apenas dois dígitos, ou bits - zero e um - ele pode ser facilmente representado por transistores eletrônicos em estado desligado e ligado, respectivamente.',
        urlAudioTexto:'',
        textoSimplificado:'Transistores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de um transistor, com um brilho amarelo ao redor, indicando que está energinzado<p>Foto do mesmo transistor, sem brilho ou qualquer cor de fundo, indicando que está desenergizado', 
        textoDescritivoImagem:'Duas imagens. Na primeira, a foto de um transistor, com um brilho amarelo ao redor, para indicar que esté energinzado. Ao lado da foto, há um texto, em que está escrito que o valor lógico o transistor ligado é igual a "1". Na segunda, a foto de um transistor, sem brilho ao redor, para indicar que não está energinzado. Ao lado da foto, há um texto, em que está escrito que o valor lógico o transistor desligado é igual a "0".', },

        {ordem:3,
        predecessor:2,
        texto:'No entanto, manter todos esses dados utilizando o sistema binário ocupa muito espaço de memória, chegando facilmente a bilhões ou trilhões de bits. Por exemplo, uma música em qualidade de 16 bits, com duração de 3 minutos e em formato digital, ocupa 30 MB.',
        urlAudioTexto:'',
        textoSimplificado:'Tamanho em formato digital de uma música de 3 minutos duração',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Diagrama ilustrativo do armazenamento de uma música em formato digital na memória de um computador, em que ilustrações de notas musicais estão apontando para textos, em que está escrito "16 bits" e "3 minutos", e esses textos estão apontando para outro texto, em que está escrito "30 MB"',
        textoDescritivoImagem:'Imagem de um diagrama ilustrativo, que representa o armazenamento de uma música em formato digital na memória de um computador. No diagrama, há ilustrações de notas musicais, que estão apontando, por meio de setas, para dois textos, que indicam que a música possui qualidade de 16 bits e uma duração de 3 minutos. Por sua vez, esses textos estão apontando para outro texto, que indica que música ocupa 30 MB na espaço da memória do computador.', },

        {ordem:4,
        predecessor:3,
        texto:'Um vídeo de alta definição em HD, com duração de 1 hora, ocupa 800 GB.',
        urlAudioTexto:'',
        textoSimplificado:'Tamanho em formato digital de uma vídeo de 60 minutos duração',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Diagrama ilustrativo do armazenamento de uma vídeo em formato digital na memória de um computador, em que uma ilustração de uma filmadora de está apontando para textos, em que está escrito "HD" e "60 minutos", e esses textos estão apontando para outro texto, em que está escrito "800 GB"',
        textoDescritivoImagem:'Imagem de um diagrama ilustrativo, que representa o armazenamento de um vídeo em formato digital na memória de um computador. No diagrama, há uma ilustrações de uma filmadora, que está apontando, por meio de setas, para dois textos, que indicam que a vídeo filmado possui qualidade HD e uma duração de 60 minutos. Por sua vez, esses textos estão apontando para outro texto, que indica que vídeo ocupa 800 GB na espaço da memória do computador.', },

        {ordem:5,
        predecessor:4,
        texto:'Por isso, na prática, esses arquivos digitais são comprimidos. Um arquivo de música de 30 MB pode ser comprimido usando o formato MP3, reduzindo seu tamanho para 3 MB.',
        urlAudioTexto:'',
        textoSimplificado:'Tamanho de um arquivo de música MP3.',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Diagrama ilustrativo do armazenamento de um arquivo MP3 na memória de um computador, em que uma pasta com o tamanho de 30 MB está apontando para um ícone de música MP3 e o ícone de música MP3 está apontando para outro texto, em que está escrito "3 MB"',
        textoDescritivoImagem:'Imagem de um diagrama ilustrativo que representa o armazenamento de um arquivo MP3 na memória de um computador. No diagrama, há uma ilustração de uma pasta que indica que ela ocupa 30 MB da memória do computador. Essa pasta está apontando, por meio de uma seta, para uma imagem que indica que um arquivo de música de 30 MB foi comprimido para o formato MP3. Por sua vez, essa imagem está apontando para outro texto que indica que após ser comprimido para o formato MP3, o arquivo de música que ocupava 30 MB do espaço da memória do computador passou a ocupar 3 MB.', },

        {ordem:6,
        predecessor:5,          
        texto:'Por sua vez, um arquivo de vídeo de 800 GB pode ser comprimido usando o formato MP4, ocupando apenas 1 GB.',
        urlAudioTexto:'',
        textoSimplificado:'Tamanho de um arquivo de vídeo MP4.',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Diagrama ilustrativo do armazenamento de um arquivo MP4 na memória de um computador, em que uma pasta com o tamanho de 800 GB está apontando para um ícone de vídeo MP4 e o ícone de vídeo MP4 está apontando para outro texto, em que está escrito "1 GB"',
        textoDescritivoImagem:'Imagem de um diagrama ilustrativo que representa o armazenamento de um arquivo MP4 na memória de um computador. No diagrama, há uma ilustração de uma pasta que indica que ela ocupa 800 GB da memória do computador. Essa pasta está apontando, por meio de uma seta, para uma imagem que indica que um arquivo de vídeo de 800 GB foi comprimido para o formato MP4. Por sua vez, essa imagem está apontando para outro texto que indica que após ser comprimido para o formato MP4, o arquivo de vídeo que ocupava 800 GB do espaço da memória do computador passou a ocupar 1 GB.', },

        {ordem:7,
        predecessor:6,
        texto:'Chamamos de compressão com perda aquela técnica de compressão que descarta parte das informações para economizar espaço. Por exemplo, quando reduzimos a qualidade de uma imagem, música ou vídeo. Apesar disso, essa compressão ainda é útil, pois mesmo com a perda de algumas informações, muitas vezes o olho ou o ouvido humano não percebem a diferença entre o arquivo original e o comprimido.<p>Você consegue distinguir quais destas imagens tem menor tamanho?',
        urlAudioTexto:'',
        textoSimplificado:'Compressão com perda',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagem de uma foto, em formato bitmap, não comprida.<p>Imagem da mesma foto, após ser comprimida no formato PNG',
        textoDescritivoImagem:'Duas imagens. Na primeira, uma foto não comprida, armazenda em formato bitmap. Na segunda, a mesma foto, após ser comprimida para um novo arquivo, em formato PNG.', },

        {ordem:8,
        predecessor:7,
        texto:'Manfred Schröder, físico alemão, propôs técnicas de compressão de áudio na década de 1970, nas quais as frequências de som que o ouvido humano não distingue bem são descartadas do arquivo digital. Atualmente, suas técnicas são amplamente utilizadas nos formatos de áudio digital mais comuns, como o MP3. ',
        urlAudioTexto:'',
        textoSimplificado:'Manfred Schröder, físico alemão, e arquivos MP3',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Foto de Manfred Schröder, físico alemão<p>Ilustração de arquivo de áudio MP3', 
        textoDescritivoImagem:'Duas imagens. Na primeira, uma foto de Manfred Schröder, físico alemão, que concebeu fotos de comproessão de áudio na década de 1970. Na segunda, a ilustração de um ícone de um arquivo de áudio MP3', },

        {ordem:9,
        predecessor:8,
        texto:'Quando uma técnica de compressão não descarta nenhuma informação, ela é chamada de compressão sem perda. Para realizar a compressão sem perda, um algoritmo de compressão precisa identificar padrões repetitivos e representá-los de forma mais eficiente. Por exemplo, imagine um arquivo que contenha apenas os resultados "verdadeiro" e "falso" para 30 questões de uma prova. Em um formato sem compressão, ele seria representado com 30 palavras, algumas sendo a palavra "falso" e outras sendo a palavra "verdadeiro".', 
        urlAudioTexto:'',
        textoSimplificado:'Resultado para 30 questões de uma prova de múltipla escolha',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Ilustração 2D de uma folha em que foram escritas as palavras "verdadeiro" e "falso".<p>Ilustração 2D de uma folha com 30 palavras escritas, alternando aleatoriamente entre as palavras "verdadeiro" e "falso".', 
        textoDescritivoImagem:'Duas imagens. Na primeira, uma ilustração 2D de uma folha em que foram escritas as palavras "verdadeiro" e "falso". Na segunda, uma ilustração 2D de uma folha com 30 palavras escritas, alternando aleatoriamente entre as palavras "verdadeiro" e "falso".' },

        {ordem:10,
        predecessor:9,
        texto:'Um algoritmo de compressão poderia substituir as repetições por números, como em um laço, para diminuir o tamanho do arquivo sem perda.<p>O primeiro desafio de um bom algoritmo de compressão sem perda é, portanto, identificar os padrões repetitivos que ocupam mais espaço e substituí-los até reduzir o tamanho do arquivo ao menor número possível de bytes.<p>Você está preparado para criar uma técnica de compressão?Vamos ver quem consegue desenvolver a melhor técnica de compressão',
        urlAudioTexto:'',
        textoSimplificado:'Sumário do resultado para 30 questões de uma prova de múltipla escolha',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Ilustração 2D de uma folha em que foi escrito o sumário do resultado para 30 questões de uma prova de múltipla escolha.', 
        textoDescritivoImagem:'Ilustração 2D de uma folha em que foi escrito o resumo dos resultados para 30 questões de uma prova de múltipla escolha. Na primeira linha estão escritas as palavras "verdadeiro falso" e o número 8, indicando que essas duas palavras se repetiram 8 vezes nessa sequência. Na segunda linha está escrita a palavra "verdadeiro" e o número 10, indicando que essa palavra se repetiu 10 vezes antes da ocorrência da palavra "falso". Na terceira linha estão escritas as palavras "falso verdadeiro falso" e o número 22, indicando que essas três palavras se repetiram 22 vezes nessa sequência.', },

        ]
      }
    },
	  
  },
  
   
  unidade4:{
	  
    licao22:{},
    licao23:{},
    licao24:{},
    licao25:{},
    licao26:{		  
      id:'CSXAULA26CODE',
      /** padroesCurriculares: 
      titulo:'Lição 25. Trilha de Impressão em Jogos Digitais',**/
      infografico:{titulo:'Rastro Digital',
      tituloSimplificado:'Rastro Digital',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Imagine que você é um detetive tentando solucionar um roubo.<p>Você persegue o rastro deixado pelo ladrão começando por pegadas que ele deixou no local. Como você é experiente, só com isso já consegue dizer em que direção ele foi, com que velocidade, seu tamanho e peso estimados, o tipo de sapato que ele estava usando e muito mais. Essas informações são decisivas para você resolver o caso, mas o ladrão nem imaginava que estava deixando tantas pistas para trás. Algo parecido acontece conosco quando usamos a internet.',
        urlAudioTexto:'',
        textoSimplificado:'Sistemas computacionais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Duas imagens: um computador e um robÔs',
        textoDescritivoImagem:'Três imagens, na primeira um robô versátil, na segunda um robô humanóide e na terceira um robô estranho.', },

        {ordem:2,
        predecessor:1,
        texto:'Sempre que visitamos sites, fazemos pesquisas por informações, deixamos comentários, carregamos vídeos ou damos like, deixamos uma pegada digital, um tipo de rastro que permite a empresas e pessoas habilitadas, via programação, desvendarem muito sobre nós.',
        urlAudioTexto:'',
        textoSimplificado:'Números',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desenho da cabeça de uma professora e de um quadro negro, com algumas operações matemáticas simples', 
        textoDescritivoImagem:'Robô autômato.', },

        {ordem:3,
        predecessor:2,
        texto:'As empresas investem nesses programas porque assim conseguem apresentar ofertas, anúncios, produtos e conteúdos personalizados, que variam para cada usuário conforme suas pegadas digitais. Algumas organizações, inclusive, vendem suas pegadas digitais para anunciantes. No fim das contas, a sua pegada digital é salva, investigada e comercializada porque é muito valiosa.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema decimal',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de quadro de valor posicional, mostrando tabela para converter de unidade para dezena e de dezena para centena',
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:4,
        predecessor:3,
        texto:'Deixar essas pegadas enquanto navega na maioria das vezes é inevitável e também inofensivo. Mas, suas pegadas digitais também podem lhe trazer problemas. Diferente de uma pegada deixada na rua, que some com a chuva, uma pegada digital é copiada, compartilhada e pode existir por muito mais tempo do que você imagina. Com o tempo, suas pegadas digitais acumuladas acabam sendo usadas por algoritmos para formar uma imagem de quem você é.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens. Robô Industrial. Robô cirurgião. Robô explorador',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:5,
        predecessor:4,
        texto:'.',
        urlAudioTexto:'O problema começa quando elas são usadas para tomar decisões importantes que te afetam. Por exemplo, quando você se candidata a entrar em uma escola ou empresa. O que parecia apenas um vídeo engraçado de compartilhar há alguns anos, hoje pode ser altamente inapropriado e te atrapalhar a conseguir um emprego. Mas se as pegadas digitais são inevitáveis, o que você pode fazer?',
        textoSimplificado:'Robôs Industriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô industrial', 
        textoDescritivoImagem:'Robô industrial.', },

        {ordem:6,
        predecessor:5,
        texto:'Mantenha uma boa imagem online, escolhendo respeitar e ser responsável em cada ação. Antes de postar alguma coisa em um site ou aplicativo, imagine como isso pode parecer para um futuro empregador ou se aparecesse na primeira página de um jornal. Segundo, proteja sua privacidade.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Exploradores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô Explorador', 
        textoDescritivoImagem:'Robô Explorador.', },

        {ordem:7,
        predecessor:6,
        texto:'Para isso, entenda como os sites coletam e usam suas pegadas digitais, entenda o que são cookies e autorize um nível de uso deles que funcione para você. Terceiro, considere ter mais de uma conta ou persona online. Você pode ter uma conta de usuário profissional e outra pessoal separadas em uma rede social, por exemplo. Usando cada conta com consciência, você consegue manter suas informações privadas enquanto tem outra presença online para ser encontrada facilmente.',
        urlAudioTexto:'',
        textoSimplificado:'Controlar robô',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô com controle remoto', 
        textoDescritivoImagem:'Um robô sendo controlado por um controle remoto.', },

        {ordem:8,
        predecessor:7,          
        texto:'Lembre-se, sempre que usa internet, suas ações estão sendo acompanhadas. É sua responsabilidade prevenir agora para evitar problemas futuros.',
        urlAudioTexto:'',
        textoSimplificado:'Sphero',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sphero', 
        textoDescritivoImagem:'Robô Sphero.', },

        ]
      
      /*cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Cookies HTTP<p>Imagine viver sem memória.<p>Para cada pessoa que reencontrar, você teria que perguntar quem ela é, seu nome, tudo o que já fizeram juntos. Seria exatamente assim com os sites da internet se não fossem os cookies HTTP. Ah, claro, cookies em inglês são biscoitinhos.',
        urlAudioTexto:'',
        textoSimplificado:'Sistemas computacionais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Duas imagens: um computador e um robÔs',
        textoDescritivoImagem:'Três imagens, na primeira um robô versátil, na segunda um robô humanóide e na terceira um robô estranho.', },

        {ordem:2,
        predecessor:1,
        texto:'Mas os cookies HTTP não são comestíveis. São pequenos arquivos de dados que vivem na memória de seu computador. Enquanto navega pela internet, os dados dos cookies são enviados para os sites juntamente com as mensagens que você envia ou links que acessa. Basicamente, os cookies HTTP servem para relembrar aos sites quem você é.',
        urlAudioTexto:'',
        textoSimplificado:'Números',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desenho da cabeça de uma professora e de um quadro negro, com algumas operações matemáticas simples', 
        textoDescritivoImagem:'Robô autômato.', },

        {ordem:3,
        predecessor:2,
        texto:'Se não fossem eles, um serviço de jogo online multi-usuário, por exemplo, não saberia qual dos usuários está fazendo uma jogada. Seria impossível comprar produtos na internet, marcar favoritos ou usar sites que exijam login. Falando assim de sua importância, os cookies HTTP podem parecer algo tecnicamente complicado. Mas, na verdade, são apenas pequenos arquivos de texto contendo um nome e um valor.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema decimal',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de quadro de valor posicional, mostrando tabela para converter de unidade para dezena e de dezena para centena',
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:4,
        predecessor:3,
        texto:'O texto do cookie em si varia conforme cada site.<p>Um site pode gerar um cookie para saber quem você é. E outros para se lembrar de cada página que você acessou. Deste modo, quando você retorna ao site dias depois, ele pode te apresentar informações ou anúncios de seu interesse logo de cara em destaque. Um site que você visita pode repassar seus cookies para outros sites que você nem conhece. Se você costuma ouvir sua banda preferida em um site de música, por exemplo.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens. Robô Industrial. Robô cirurgião. Robô explorador',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:5,
        predecessor:4,
        texto:'.',
        urlAudioTexto:'Não será coincidência ao visitar um site de ingressos online pela primeira vez ver em destaque o próximo show de sua banda. Por tudo isso, para melhorar seus serviços, os sites estão constantemente gerando, armazenando e compartilhando seus cookies. Com o uso crescente da internet, a capacidade de descobrir o perfil de uma pessoa somente com base nos seus cookies, mesmo sem saber seu nome, se tornou incrível.',
        textoSimplificado:'Robôs Industriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô industrial', 
        textoDescritivoImagem:'Robô industrial.', },

        {ordem:6,
        predecessor:5,
        texto:'Por isso, embora necessários, os cookies passaram a ser cobiçados e usados para interesses maliciosos. Os cookies HTTP são um dos principais tipos de pegada digital que você deixa, mesmo sem notar, enquanto navega pela internet.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Exploradores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô Explorador', 
        textoDescritivoImagem:'Robô Explorador.', },

        {ordem:7,
        predecessor:6,
        texto:'Uma navegação por curiosidade ou equívoco em sites simpatizantes de extremistas, do nazismo ou de práticas preconceituosas, pode se tornar um transtorno real e duradouro. Embora leis venham sendo criadas para tentar impedir o uso abusivo dos cookies, sua melhor proteção é seu conhecimento sobre eles. Aprender a analisar e programar cookies te tornará um navegador online mais consciente e capaz de se proteger.',
        urlAudioTexto:'',
        textoSimplificado:'Controlar robô',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô com controle remoto', 
        textoDescritivoImagem:'Um robô sendo controlado por um controle remoto.', },

        {ordem:8,
        predecessor:7,          
        texto:'Então, mãos à obra! Quem gosta de biscoitinhos?',
        urlAudioTexto:'',
        textoSimplificado:'Sphero',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sphero', 
        textoDescritivoImagem:'Robô Sphero.', },

        ]*/
      }
    },

    licao27:{
		  id:'CSXAULA07CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 26. Comunicação e Ética Digital.',**/
		  infografico:{titulo:'Comunicação e Ética Digital',
      tituloSimplificado:'Comunicação e Ética Digital',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Olá! Já vivemos que saber se comunicar bem é essencial para vivermos em sociedade. Nos módulos anteriores descobrimos como se comunicar bem por diversos meios, como conversa falada, escrita e a comunicação visual é importante. ',
        urlAudioTexto:'',
        textoSimplificado:'Comunicação',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Imagem com pessoas falando, uma carta e um outdoor.', //enviar ao ilustrador vídeo 00:18
        textoDescritivoImagem:'Imagem com pessoas falando, uma carta e um outdoor .', },

        {ordem:2,
        predecessor:1,
        texto:'Uma das formas de comunicação mais utilizadas hoje em dia é a digital. Usamos smartphones, computadores e redes sociais para nos comunicar com uma ou várias pessoas ao mesmo tempo sobre os mais diversos assuntos.',
        urlAudioTexto:'',
        textoSimplificado:'Comunicação Digital',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Computador e Smartphone lado a lado com diversos ícones de aplicativos', 	
        textoDescritivoImagem:'Computador e Smartphone lado a lado com diversos ícones de aplicativos.', },

        {ordem:3,
        predecessor:2,
        texto:'Mas esse poder de comunicação vem com um preço: a ética digital. Você sabe o que é isso?<P>A ética digital estabelece formas corretas de tratarmos outras pessoas e de nos mostrarmos para elas em sites e redes sociais. E também a maneira que devemos reagir quando nos deparamos com confitos em conversações.',
        urlAudioTexto:'',
        textoSimplificado:'Ética Digital',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Ética Digital', //Uma ilustração complexa que simboliza a ética digital. Inclui uma mão humana estendida segurando um globo de luz digital que contém vários ícones de pessoas, computadores, smartphones e símbolos de privacidade. Em torno do globo, existem palavras como 'Responsabilidade', 'Respeito', 'Privacidade' e 'Integridade' flutuando em nuvens de código binário. #PROMPT CHATGPT Proponha um prompt para o dall-e apresentar uma ilustração sobre ética digital.
        textoDescritivoImagem:'Ética Digital.', },

        {ordem:4,
        predecessor:3,
        texto:'Vamos conhecer agora dicas importantes para a ética digital.<p>1. Respeito: respeite a si mesmo e as outras pessoas. Tenha cuidado com o que você posta nas redes sociais e o que fala de si mesmo e dos outros. Evite fazer comentários desnecessários ou desagradáveis.',
        urlAudioTexto:'',	
        textoSimplificado:'Respeito',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Respeito.', //Uma ilustração vibrante mostrando um cenário digital onde avatares de pessoas de diversas idades, etnias e habilidades estão interagindo em harmonia dentro de uma rede de conexões online. Cada avatar está envolto em um escudo transparente representando privacidade e respeito. No fundo, grandes palavras 'Respeito' e 'Ética Digital' são visíveis, conectadas por linhas de luz aos avatares, simbolizando a importância do respeito no universo digital. #PROMPT CHATGPT Proponha um prompt para o dall-e apresentar uma ilustração sobre respeito no contexto da ética digital.
        textoDescritivoImagem:'Respeito.', },

        {ordem:5,
        predecessor:4,
        texto:'2. Segurança: mantenha-se protegido. Não digite dados pessoais em sites desconhecidos ou que não confie. Não mande fotos ou dados pessoais para pessoas com quem você não se relaciona pessoalmente.',
        urlAudioTexto:'',
        textoSimplificado:'Segurança',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Segurança', //Uma ilustração vívida e simbólica da segurança na ética digital. No centro, um castelo digital sólido e brilhante é protegido por um escudo transparente, simbolizando a segurança de dados. O castelo é cercado por diversos ícones, como um cadeado, uma chave, um firewall e uma nuvem de computador, representando diferentes aspectos da segurança digital. Acima do castelo, a palavra 'Segurança' é visível, conectada a todos esses elementos através de linhas de luz, demonstrando a importância da segurança no contexto da ética digital. #PROMPT CHATGPT Proponha um prompt para o dall-e apresentar uma ilustração sobre segurança no contexto da ética digital.
        textoDescritivoImagem:'Segurança.', },

        {ordem:6,
        predecessor:5,
        texto:'3. Não acredite em tudo que está na internet: nem tudo que lemos ou vemos na internet é verdade. Não seja enganado! Antes de acreditar em uma informação, pesquise de onde veio e outros pontos de vista sobre o assunto.',
        urlAudioTexto:'',
        textoSimplificado:'Desconfie',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desconfie', //Uma ilustração impactante representando o desafio das fake news e deepfakes na ética digital. No centro, uma tela de computador exibe uma notícia claramente falsa ao lado de uma imagem deepfake, ambas sendo desmascaradas por uma grande lupa que simboliza o escrutínio e a busca pela verdade. Ao redor da tela, símbolos de alerta, interrogações e ícones de fact-checking reforçam a necessidade de questionar e verificar as informações recebidas. No topo, a frase 'Ética Digital contra Fake News e Deepfakes' é escrita em letras destacadas. #PROMPT CHATGPT Proponha um prompt para o dall-e apresentar uma ilustração sobre fake news e/ou deep fake no contexto da ética digital.
        textoDescritivoImagem:'Desconfie.', },

        {ordem:7,
        predecessor:6,
        texto:'4. Não julgue o livro pela capa: você nem sempre vai ter muitos likes e comentários em um projeto ou jogo que publicou, o que não quer dizer que ele seja ruim! Persista, continue programando e se divertindo.',
        urlAudioTexto:'',
        textoSimplificado:'Likes',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Não julgue o livro pela capa', //Uma ilustração criativa que representa a frase 'não julgue o livro pela capa' no contexto da ética digital. Mostra uma pessoa segurando um tablet que exibe a imagem de um avatar digital. Dentro do avatar, há uma série de camadas que revelam atributos e qualidades variadas, simbolizando a complexidade e profundidade do indivíduo por trás do avatar digital. Através das camadas, palavras como 'Empatia', 'Respeito', 'Integridade' e 'Verdade' são visíveis, reforçando a ideia de que não devemos fazer julgamentos precipitados na esfera digital. #PROMPT CHATGPT Proponha um prompt para o dall-e apresentar uma ilustração sobre "não julgue o livro pela capa" no contexto da ética digital.
        textoDescritivoImagem:'Não julgue o livro pela capa.', },

        {ordem:8,
        predecessor:7,
        texto:'Uma comunicação bem feita acompanhada de uma forte ética digital é a chave para o seu sucesso na rede mundial.',
        urlAudioTexto:'',
        textoSimplificado:'Sucesso na rede',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sucesso na rede mundial', //Uma ilustração inspiradora que representa a frase 'Uma comunicação bem feita acompanhada de uma forte ética digital é a chave para o seu sucesso na rede mundial'. No centro, um indivíduo segura uma grande chave brilhante, cujo topo é formado por ícones de um balão de diálogo e um escudo representando comunicação e ética, respectivamente. Esta chave está sendo inserida em uma fechadura em forma de globo terrestre com linhas de conexão representando a rede mundial. Em torno do indivíduo, palavras como 'Respeito', 'Honestidade', 'Transparência' e 'Integridade' reforçam a mensagem de ética digital. #PROMPT CHATGPT Proponha um prompt para o dall-e para expressar "Uma comunicação bem feita acompanhada de uma forte ética digital é a chave para o seu sucesso na rede mundial".
        textoDescritivoImagem:'Imagem de sucesso na comunicação na rede mundial.', },

				]
		
		  }			  
		  
	  },

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