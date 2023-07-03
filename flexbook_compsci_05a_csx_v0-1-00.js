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
        promptImagem:'Duas imagens: um computador e um robÔs',
        textoDescritivoImagem:'Três imagens, na primeira um robô versátil, na segunda um robô humanóide e na terceira um robô estranho.', },

        {ordem:2,
        predecessor:1,
        texto:'Para entender o sistema interno dos computadores, vamos primeiro lembrar de como nós, humanos, gostamos de lidar com números.',
        urlAudioTexto:'',
        textoSimplificado:'Números',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desenho da cabeça de uma professora e de um quadro negro, com algumas operações matemáticas simples', 
        textoDescritivoImagem:'Robô autômato.', },

        {ordem:3,
        predecessor:2,
        texto:'Nosso sistema preferido é chamado de sistema decimal. Ele utiliza dez símbolos, de zero a nove. Quando colocamos um número ao lado do outro, o da esquerda vale dez vezes mais.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema decimal',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de quadro de valor posicional, mostrando tabela para converter de unidade para dezena e de dezena para centena',
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:4,
        predecessor:3,
        texto:'No entanto, nos computadores, o sistema utilizado é o mais simples: o sistema binário. Nele, são usados apenas dois símbolos, o zero e o um. Ao colocar dois números um ao lado do outro, o da esquerda vale apenas duas vezes mais...',
        urlAudioTexto:'',
        textoSimplificado:'Sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens. Robô Industrial. Robô cirurgião. Robô explorador',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:5,
        predecessor:4,
        texto:'Observe como os números 1, 2 e 3 são representados no sistema binário. Embora possam parecer com os números 1, 10 e 11 do sistema decimal, quem entende o sistema binário sabe que esses números valem 1, 2 e 3.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Industriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô industrial', 
        textoDescritivoImagem:'Robô industrial.', },

        {ordem:6,
        predecessor:5,
        texto:'O sistema binário é como um código secreto. Aqueles que o compreendem podem usá-lo para se comunicar sem que outras pessoas consigam decifrar.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Exploradores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô Explorador', 
        textoDescritivoImagem:'Robô Explorador.', },

        {ordem:7,
        predecessor:6,
        texto:'Para representar quantidades maiores que 3, o sistema binário vai acrescentando mais zeros ou uns à esquerda, sendo que cada posição vale o dobro da anterior.',
        urlAudioTexto:'',
        textoSimplificado:'Controlar robô',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô com controle remoto', 
        textoDescritivoImagem:'Um robô sendo controlado por um controle remoto.', },

        {ordem:8,
        predecessor:7,          
        texto:'Embora os números em binário possam se tornar grandes, é possível representar qualquer quantidade utilizando o sistema binário, assim como os números decimais.',
        urlAudioTexto:'',
        textoSimplificado:'Sphero',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sphero', 
        textoDescritivoImagem:'Robô Sphero.', },

        {ordem:9,
        predecessor:8,
        texto:'Já começamos a desvendar como os computadores trabalham com números, letras e palavras. Mas e quanto aos vídeos, sons e imagens, por exemplo? Eles também são armazenados pelo computador como código binário, ou seja, como zeros e uns.',
        urlAudioTexto:'',
        textoSimplificado:'Mecânica',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Kit robótica com materiais da mecânica do robô', 
        textoDescritivoImagem:'Um kit com peças da mecânica para montar um robô.', },

        {ordem:10,
        predecessor:9,          
        texto:'Se você ainda não entendeu muito bem, não se preocupe! Você vai aprender a contar em código binário, assim como os computadores, com um divertido jogo de cartas!',
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
    licao10:{},
    licao11:{},
    licao12:{},
    licao13:{},
    licao14:{},
	  
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
        texto:'SClock – o coração do computador.<p>O que uma orquestra, uma equipe de remo e um computador possuem em comum. Todos precisam de uma forte marcação de ritmo para que seus componentes funcionem em sincronia perfeita. Em uma orquestra, o ritmo é garantido pelo maestro. Em uma equipe de remo, pelo timoneiro. E nos computadores, por um cristal de quartzo, que oscila próximo ao seu processador.',
        urlAudioTexto:'',
        textoSimplificado:'Sistemas computacionais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Duas imagens: um computador e um robÔs',
        textoDescritivoImagem:'Três imagens, na primeira um robô versátil, na segunda um robô humanóide e na terceira um robô estranho.', },

        {ordem:2,
        predecessor:1,
        texto:'Chamado de System Clock, Internal Clock ou simplesmente Clock, esse minúsculo componente também pode ser comparado com o nosso coração.<p>Seu papel é pulsar, fazendo o processador trabalhar em microciclos organizados. Assim como o coração bombeia o sangue para alimentar nossas células.',
        urlAudioTexto:'',
        textoSimplificado:'Números',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desenho da cabeça de uma professora e de um quadro negro, com algumas operações matemáticas simples', 
        textoDescritivoImagem:'Robô autômato.', },

        {ordem:3,
        predecessor:2,
        texto:'Cada pulso do clock faz o processador executar uma instrução de máquina. Como uma linha de código que escrevemos no Scratch, dependendo do comando, pode gerar dez, cem ou até milhares de instruções de máquina, são necessários vários ciclos de clock para o computador processar uma única linha de código.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema decimal',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de quadro de valor posicional, mostrando tabela para converter de unidade para dezena e de dezena para centena',
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:4,
        predecessor:3,
        texto:'',
        urlAudioTexto:'Mas, felizmente, os clocks são bem rápidos.<p>O primeiro computador eletrônico, o ENIAC, usava um clock de 100 kHz, o que significa que executava instruções a uma taxa de 100 mil ciclos por segundo. Já o primeiro computador pessoal, algumas décadas depois, usava um processador Intel 8080, que vinha com um clock de 2 MHz, capaz de executar 2 milhões de instruções de máquina por segundo. A velocidade dos computadores continuou evoluindo.',
        textoSimplificado:'Sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens. Robô Industrial. Robô cirurgião. Robô explorador',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:5,
        predecessor:4,
        texto:'Os atuais clocks conseguem trabalhar com taxas de Gigahertz, ou seja, processam bilhões de instruções de máquina por segundo.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Industriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô industrial', 
        textoDescritivoImagem:'Robô industrial.', },

        {ordem:6,
        predecessor:5,
        texto:'Mas todo esse avanço vem a um custo.<p>Como continuar aumentando a capacidade dos computadores e evitar problemas de superaquecimento.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Exploradores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô Explorador', 
        textoDescritivoImagem:'Robô Explorador.', },

        {ordem:7,
        predecessor:6,
        texto:'A solução foi acrescentar mais núcleos de processamento a uma única CPU, evitando aumentar o clock ainda mais. Isso permitiu ganhos de velocidade no processamento graças ao paralelismo. Surgiram, então, computadores com sistemas dual-core, dois núcleos, e o quad-core, quatro núcleos, por exemplo.',
        urlAudioTexto:'',
        textoSimplificado:'Controlar robô',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô com controle remoto', 
        textoDescritivoImagem:'Um robô sendo controlado por um controle remoto.', },

        {ordem:8,
        predecessor:7,          
        texto:'Mas, para entender de verdade a importância dos clocks e o mecanismo interno dos computadores, é preciso vestir a camisa. Ou melhor, os processadores.<p>Qual sistema será o mais eficiente? Um dual-core com clock de 1 GHz ou um single-core com 2 GHz?',
        urlAudioTexto:'',
        textoSimplificado:'Sphero',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sphero', 
        textoDescritivoImagem:'Robô Sphero.', },

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
        texto:'Muitas vezes é útil agrupar informações em uma lista. Seja para lembrar as tarefas de um projeto. Sela para guardar os prêmios de um jogador em um programa de videogame, por exemplo. Ou ainda, listar as suas músicas prediletas no Spotify.',
        urlAudioTexto:'',
        textoSimplificado:'Listas',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Listas de atividades de um projeto e lista de músicas preferidas no Spotify', //enviar ao ilustrador
        textoDescritivoImagem:'Lista de atividades de um projeto e lista de músicas preferidas no Spotify.', },

        {ordem:2,
        predecessor:1,
        texto:'Em programação há dois tipos de listas, as estáticas e as dinâmicas. Uma lista é estática quando programador define os valores antecipadamente e eles não mudam durante a execução do programa. Por exemplo, no caso de uma lista contendo todas as fases possíveis de um videogame.',
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
        texto:'Linguagens de progamação com o Scratch e o AppInventor trazem blocos de comando que facilitam a criação e utilização de listas, sejam estáticas ou dinâmicas. Vamos ver alguns exemplos. Começaremos pelo Scratch. O primeiro passo é clicar no botão Criar uma lista dentro da seção Variáveis dos Scripts. E dar um nome a lista como fases. O Scratch então irá gerar uma série de comandos para manipular a lista criada.',
        urlAudioTexto:'',	
        textoSimplificado:'Listas no Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação no Scratch.', //enviar ao ilustrador, vídeo 01:36
        textoDescritivoImagem:'Programação no Scratch.', },

        {ordem:5,
        predecessor:4,
        texto:'No Scratch, se for uma lista estática podemos definir seus valores e exibí-los ou não no palco. Uma vez criadas as listas, temos várias maneiras de recuparar o valor de seus elementos. Se em algum ponto de nosso programa temos a posição na lista, por exemplo, 2 (dois) e queremos recuperar o nome da fase correspondente, podemos usar o comando item-de do Scratch.',
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
        texto:'Para listas dinâmicas, que são modificadas durante o programa, existem comandos para adicionar e remover os itens da lista.',
        urlAudioTexto:'',
        textoSimplificado:'Lista Dinâmica Scratch',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Programação de Lista Dinâmica no Scratch', //enviar ao ilustrador vídeo 5:10 apenas códio Scratch
        textoDescritivoImagem:'Programação de Lista Dinâmica no Scratch.', },

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
	
    licao19:{},
    licao20:{},
    licao21:{		  
      id:'CSXAULA21CODE',
      /** padroesCurriculares: 
      titulo:'Lição 21. Mídias Digitais Compactação de Arquivos',**/
      infografico:{titulo:'Compressão de Arquivos Digitais',
      tituloSimplificado:'Compressão de Arquivos',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Compressão de arquivos digitais.<p>Já vimos que computadores armazenam textos, números, imagens, fotos, sons e vídeos em códigos binários, o que chamamos de sistema digital. Como o sistema binário só usa dois dígitos, ou bits, zero e um, ele é facilmente representado por transistores eletrônicos em estado desligado e ligado, respectivamente. Mas manter tudo em sistema binário ocupa muito espaço, facilmente bilhões ou trilhões de bits.',
        urlAudioTexto:'',
        textoSimplificado:'Sistemas computacionais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Duas imagens: um computador e um robÔs',
        textoDescritivoImagem:'Três imagens, na primeira um robô versátil, na segunda um robô humanóide e na terceira um robô estranho.', },

        {ordem:2,
        predecessor:1,
        texto:'Por exemplo, uma música em qualidade 16 bits de 3 minutos em formato digital ocupa 30 MB e um vídeo HD de alta definição de 1 hora 800 GB. Por isso, na vida real, esses arquivos digitais são comprimidos. Um arquivo de música de 30 MB pode ser comprimido usando o formato MP3 para 3 MB. E um arquivo de vídeo de 800 GB pode ser comprimido usando o formato MP4 para 1 GB.',
        urlAudioTexto:'',
        textoSimplificado:'Números',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Desenho da cabeça de uma professora e de um quadro negro, com algumas operações matemáticas simples', 
        textoDescritivoImagem:'Robô autômato.', },

        {ordem:3,
        predecessor:2,
        texto:'Chamamos uma técnica de compressão de compressão com perda quando, para economizar espaço, ela descarta parte da informação. Por exemplo, quando reduzimos a qualidade de uma imagem, música ou vídeo. Ainda assim, é uma compressão útil, pois mesmo perdendo algumas informações, o olho ou o ouvido humano às vezes nem percebem a diferença entre o arquivo original e o comprimido.',
        urlAudioTexto:'',
        textoSimplificado:'Sistema decimal',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Quadro negro com escrita de quadro de valor posicional, mostrando tabela para converter de unidade para dezena e de dezena para centena',
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:4,
        predecessor:3,
        texto:'Você consegue distinguir qual dessas imagens tem menor tamanho?', //TODO precisa ser editado
        urlAudioTexto:'',
        textoSimplificado:'Sistema binário',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Três imagens. Robô Industrial. Robô cirurgião. Robô explorador',  //três imagens (serão usadas a seguir)
        textoDescritivoImagem:'Três imagens. Na primeira um robô industrial. Na segunda um robô cirurgião. Na terceira um robô explorador.', },

        {ordem:5,
        predecessor:4,
        texto:'Manfred Schröder, físico alemão, propôs na década de 1970 técnicas de compressão de áudio que descartam do arquivo digital as frequências de som que o ouvido humano não distingue bem. Hoje, suas técnicas são largamente usadas nos arquivos de áudio digitais mais comuns como o MP3. Quando uma técnica de compressão não descarta nenhuma parte da informação, ela é chamada de compressão sem perda.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Industriais',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô industrial', 
        textoDescritivoImagem:'Robô industrial.', },

        {ordem:6,
        predecessor:5,
        texto:'Para conseguir realizar compressão sem perda, um algoritmo de compressão precisa identificar padrões repetitivos e representá-los de modo mais eficiente. Por exemplo, imagine um arquivo que traga somente os resultados verdadeiro e falso para 30 questões de uma prova. Em um formato sem compressão, ele poderia ser lido assim.',
        urlAudioTexto:'',
        textoSimplificado:'Robôs Exploradores',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô Explorador', 
        textoDescritivoImagem:'Robô Explorador.', },

        {ordem:7,
        predecessor:6,
        texto:'Mas um algoritmo de compressão poderia trocar as repetições por números, como em um laço, para diminuir o tamanho do arquivo sem perda.<p>O primeiro desafio de um bom algoritmo de compressão sem perda é, portanto, identificar os padrões repetitivos que ocupam mais espaço para então substituí-los até reduzir o tamanho do arquivo ao menor número possível de bytes.',
        urlAudioTexto:'',
        textoSimplificado:'Controlar robô',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Robô com controle remoto', 
        textoDescritivoImagem:'Um robô sendo controlado por um controle remoto.', },

        {ordem:8,
        predecessor:7,          
        texto:'Você está preparado para criar uma técnica de compressão?<p>Vejamos quem consegue a melhor técnica de compressão!',
        urlAudioTexto:'',
        textoSimplificado:'Sphero',
        textoImpresso:1,
        imagemImpresso:1,
        urlImagem:'',
        promptImagem:'Sphero', 
        textoDescritivoImagem:'Robô Sphero.', },

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
      titulo:'Lição 26. Trilha de Impressão em Jogos Digitais',**/
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