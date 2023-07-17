let livro_cs1 ={

  /* metadados 2 */
  metadados:{
	  i18n:false,
	  formularioRegistro_campos_formatosValidos:['texto','numero','data','url','lista','nome','usuario','senha','usuarioAcessivel','senhaAcessivel'],
	  infografico_estilosValidos:['basicoPaisagem','basicoRetrato','explosaoPaisagem','circuitoPaisagem','cobraPaisagem','cobraPaisagem2', 'cobraRetrato','gPaisagem']},
  
  versao:'0.1.00',
  nomeFantasia: 'Introdução - Alunos em Alfabetização',
  nomeTecnico:'CS1 - Fundamentos em Ciência da Computação',
  isbn:'',
  autores:[],
  editor:'',
  local:'',
  ano:'',
  url:'compsci_cs1_0_1',

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
		urlImagemSegundaCapa: '',},
  
  formularioRegistro:{
	  titulo:'',
	  urlImagem:'',
	  campos:[
	    {rotulo:'Login Somos:',formato:'usuarioAcessivel'},{rotulo:'Senha:',formato:'senhaAcessivel'}]},
  
  visaogeral:{
	  infografico:{
		  titulo:'Resumo do Módulo CS1',
		  /* idem licoes */}},
  
/* conteudo */
  unidade1:{/* licao sem infografico, deve exibir algo como 'projeto/laboratório sem novo conceito teórico' */
	  licao1:{
		  id:'CS1AULA01CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 01. Sequências.',**/
		  infografico:{titulo:'Sequências',
			tituloSimplificado:'Sequências',
			estiloPadrao:'basicoPaisagem',
			/** urlVideo:'',
			urlPodcast:'', **/
			cenas:[				
				{ordem:1,
				predecessor:0,
				texto:'Você sabe o que é uma sequência? Já ouviu essa palavra antes?',
				urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/1.mp3',
				textoSimplificado:'Sequências',
				urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_1.jpg',
				promptImagem:'uma imagem fofa de personagem feminina, negra, com semblante pensativo', /*opc*/
				textoDescritivoImagem:'Pessoa pensando para tentar resolver um problema', /*opc*/},
					 
				{ordem:2,
				predecessor:1,
				texto:'Sequência é a ordem em que os objetos estão, ou a ordem em que aconteceu alguma coisa.',
				urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/2.mp3',
				textoSimplificado:'Sequência é ordem',
				urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_2.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEQUÊNCIA É A ORDEM EM QUE OS OBJETOS ESTÃO, OU A ORDEM EM QUE ACONTECEU ALGUMA COISA.',
				promptImagem:'uma imagem fofa de três ursos de pelúcia, todos com tamanhos diferentes', /*opc*/
				textoDescritivoImagem:'', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:'Essa ordem é saber o que é primeiro, o que vem depois do primeiro, e assim por diante.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/3.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_3.jpg',
        promptImagem:'uma imagem fofa de uma fila com cinco bolas coloridas sobre uma mesa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:4,
        predecessor:3,
        texto:'Com as sequências, você pode colocar tudo em ordem: palavras, bihos de pelúcia, acontecimentos do dia...',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/4.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_4.png',
        promptImagem:'uma imagem fofa de uma larva em cima de uma folha; uma imagem fofa de uma pupa pendurada numa folha; uma imagem fofa de uma borboleta pousada em uma folha', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'Por exemplo: qual é sequência de acontecimentos no seu dia?',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/5.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_5.png',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'QUAL É SEQUÊNCIA DE ACONTECIMENTOS NO SEU DIA?',
        promptImagem:'uma imagem fofa de um personagem sentado à mesa, almoçando; uma imagem fofa de dois personagens saindo de um prédio, vestidos com uniformes escolares; uma imagem fofa de um personagem humano se espreguiçando na cama de manhã; uma imagem fofa de uma personagem humana em uma banheira cheia de espuma', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:6,
        predecessor:5,
        texto:'Para saber como ordenar as coisas em uma sequência, você também precisa de um critério. Repita comigo: Critério.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/6.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_6.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'VOCÊ PRECISA DE UM CRITÉRIO.',
        promptImagem:'Imagem digital de uma prancheta vermelha com um papel e no papel tem um símbolo verde de checagem', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'Mas o que é um critério?',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/7.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_7.jpg',
        promptImagem:'imagem fofa de personagem masculino, com semblante pensativo', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'Um critério é a regra que vai definir como as coisas vão ser organizadas dentro da sequência.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/8.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_8.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'CRITÉRIO = REGRA QUE VAI DEFINIR COMO AS COISAS VÃO SER ORGANIZADAS.',
        promptImagem:'uma imagem fofa de uma placa de de trânsito triangular, com a borda vermelha e o fundo branco e um ponto de exclamação preto bem no meio da placa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'Por exemplo: Para colocar os alunos em sequência, do menor para o maior, o critério será a altura de cada um.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/9.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_9.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEQUÊNCIA: ALUNOS <p>CRITÉRIO: ALTURA - DO MENOR PARA O MAIOR.',
        promptImagem:'imagem fofa de três personagens humanos de alturas diferentes em fila, olhando para frente', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'Aprender sobre sequências é muito importante, pois com elas você vai poder organizar tudo e entender o mundo ao seu redor.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/10.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_10.jpg',
        promptImagem:'imagem fofa de peças de um quebra cabeças espalhadas sobre uma mesa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:11,
        predecessor:10,
        texto:'Vamos tentar mais uma vez? Qual a sequência das figuras? <p>O que aconteceu primeiro?',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/11.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_11.png',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'QUAL A SEQUÊNCIA DAS FIGURAS? O QUE ACONTECEU PRIMEIRO?',
        promptImagem:'uma imagem fofa de uma larva em cima de uma folha; uma imagem fofa de uma pupa pendurada numa folha; uma imagem fofa de uma borboleta pousada em uma folha; uma imagem fofa de uma pupa marrom e seca pendurada numa folha; uma imagem fofa de uma folha cheia de ovos de borboleta', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:12,
        predecessor:11,
        texto:'Está preparado para o mundo das sequências? Vamos lá!',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/12.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_12.jpg',
        promptImagem:'uma imagem fofa de cubos empilhados em cima de uma mesa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
			]}},
	  
	  licao2:{id:'CS1AULA02CODE',
    /** padroesCurriculares: 
    titulo:'Lição 02. Identificação de Padrões.',**/
    infografico:{titulo:'Identificação de Padrões',
    tituloSimplificado:'Padrões',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Você sabe o que é um padrão? Já ouviu essa palavra antes?',
        urlAudioTexto:'',
        textoSimplificado:'Padrões',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'O QUE É UM PADRÃO?',
        promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*opc*/
        textoDescritivoImagem:'Pessoa pensando', /*opc*/},
         
        {ordem:2,
        predecessor:1,
        texto:'Padrões são coisas que se repetem de maneira lógica. Por exemplo, o padrão que pode ser visto aqui é que existe uma maçã vermelha, ao lado de uma verde, e de novo, e de novo.',
        urlAudioTexto:'',
        textoSimplificado:'Padrões se repetem de forma lógica',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'PADRÕES SÃO COISAS QUE SE REPETEM DE FORMA LÓGICA.',
        promptImagem:'Arte digital de dezoito quadrados enfileirados de forma a formar um retângulo de 4 por 7 quadrados. O primeiro quadrado da esquerda, o oitavo quadrado à direita, abaixo do sétimo quadrado, e o décimo terceiro quadrado, abaixo do quarto quadrado são somente uma borda preta, o segundo quadrado à direita do primeiro, quinto à direita, décimo segundo, décimo quinto e décimo sexto são verdes com um cícrculo vermelho no centro. O terceiro quadrado à direita, sexto, nono e décimo sétimo quadrados são amarelos com uma estrela vermelha no centro. o quarto quadrado à direita, sétimo, décimo, décimo primeiro, décimo quarto e décimo sétimo são vermelhos com um triângulo verde no centro.', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:'O que você vê? Quais são as coisas que se repetem aqui?',
        urlAudioTexto:'',
        textoSimplificado:'Observe o que se repete',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'QUAIS SÃO AS COISAS QUE SE REPETEM AQUI?',
        promptImagem:'Arte digital de uma fileira de cinco objetos, sendo: o primeiro, o segundo e o quinto um chapéu roxo e o terceiro e o quarto um balde verde de plástico com colheres de jardinagem dentro.', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:4,
        predecessor:3,
        texto:'Os padrões estão em muitas coisas a nosso redor, como cores, formas, desenhos e objetos.',
        urlAudioTexto:'',
        textoSimplificado:'Observe o que se repete',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'OS PADRÕES ESTÃO EM MUITAS COISAS A NOSSO REDOR',
        promptImagem:'Arte digital de um personagem escovando os dentes e três círculos acima da cabeça, com uma escova no primeiro círculo, uma escova com pasta de dente debaixo de uma torneira correndo água no segundo e uma escova e um tubo de pasta de dente no terceiro', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'Os padrões nos ajudam a fazer previsões, porque eles nos ajudam a começar a entender o que vem a seguir. É assim, por exemplo, que os profissionais sabem quando vai chover. eles observam os padrões e fazem uma previsão.',
        urlAudioTexto:'',
        textoSimplificado:'Previsões com padrões',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'OS PADRÕES NOS AJUDAM A SABER O QUE VEM A SEGUIR.',
        promptImagem:'Arte digital de um mapa do Brasil em verde, com uma núvem e um raio sobre a região sudeste, um sol sobre a região nordeste e uma nuvem com gotas de chuva na região sul', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
          
        {ordem:6,
        predecessor:5,
        texto:'Reconhecer padrões também nos ajuda a resolver problemas, afinal, reconhecer um padrão é o primeiro passo para a solução.',
        urlAudioTexto:'',
        textoSimplificado:'Padrões resolvem problemas',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'IDENTIFICAR PADRÕES NOS AJUDAM A RESOLVER PROBLEMAS',
        promptImagem:'Arte digital de um cubo mágico com as cores misturadas e um outro cubo mágico ao lado, já resolvido', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'Um exemplo de padrão no nosso dia a dia é o nascer e por do sol e da lua. O sol nasce para começar o dia. No fim do dia ele se põe e a lua nasce. Quando a lua se põe, o sol volta para mais um dia.',
        urlAudioTexto:'',
        textoSimplificado:'O padrão do dia e da noite',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'O PADRÃO DO SOL E DA LUA',
        promptImagem:'Arte digital do sol e da lua', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'Quando você aprende os passos de uma dança, pode perceber também os padrões existentes.',
        urlAudioTexto:'',
        textoSimplificado:'Padrões na dança',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'PADRÕES EM COREOGRAFIAS DE DANÇAS',
        promptImagem:'Arte digital de dois bailarinos dançando em uma rua', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'E quando você percebe os padrões, colocar tudo numa sequência fica muito mais fácil, você não acha?',
        urlAudioTexto:'',
        textoSimplificado:'Padrões e sequências',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'PADRÕES E SEQUÊNCIAS ANDAM JUNTOS',
        promptImagem:'Arte digital de 6 figuras enfileiradas, sendo a primeira, a terceira e a quinta um triângulo amarelo e a segunda e a quarta um círculo azul. Onde deve ficar a sexta figura tem um ponto de interrogação', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'Quando reconhecemos padrões, podemos ver ordem no caos. Os padrões podem ser encontrados em palavras, números, símbolos, horários, comportamentos e muito mais.',
        urlAudioTexto:'',
        textoSimplificado:'Ordem no caos',
        urlImagem:'',
        promptImagem:'Arte digital com vários cubos espalhados, de diferentes tamanhos e diferentes tons do mesmo azul', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
      ]}},
    
    licao3:{},
  
    licao4:{id:'CS1AULA01CODE',
		/** padroesCurriculares: 
		titulo:'Lição 04. Algoritmos.',**/
		infografico:{titulo:'Algoritmos',
		tituloSimplificado:'Os Algoritmos',
		estiloPadrao:'basicoPaisagem',
		/** urlVideo:'',
		urlPodcast:'', **/
			cenas:[				
				{ordem:1,
				predecessor:0,
				texto:'Você sabe o que é um algoritmo? Já ouviu essa palavra antes?',
				urlAudioTexto:'',
				textoSimplificado:'Algoritmos',
				urlImagem:'',
				promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*opc*/
				textoDescritivoImagem:'Pessoa pensando para tentar resolver um problema', /*opc*/},
					 
				{ordem:2,
				predecessor:1,
				texto:'Os algoritmos estão em tudo o que nos rodeia, são aplicados em tudo e são usados em toda a tecnologia e em todas as decisões que tomamos diariamente.',
				urlAudioTexto:'',
				textoSimplificado:'Algoritmos em todos os lugares',
				urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'OS ALGORITMOS ESTÃO EM TODO LUGAR!',
				promptImagem:'Arte digital de uma cidade vista de cima, com componentes computacionais sendo mostrados em diferentes locais.', /*opc*/
				textoDescritivoImagem:'Cidade super conectada, com componentes computacionais nos mais diversos locais', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:' Um algoritmo é uma instrução detalhada, com diferentes passos, ou a uma fórmula de resolver um problema ou completar uma tarefa.',
        urlAudioTexto:'',
        textoSimplificado:'O que é um algoritmo?',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ALGORITMOS = INSTRUÇÕES',
        promptImagem:'Arte digital de uma lista com diferentes itens marcados como feitos.', /*opc*/
        textoDescritivoImagem:'Lista com marcações de que tarefas foram executadas', /*opc*/},

        {ordem:4,
        predecessor:3,
        texto:'Na programação, os programadores escrevem algoritmos que dão ordens ao computador para que este realize uma determinada tarefa.',
        urlAudioTexto:'',
        textoSimplificado:'Os algoritmos e os computadores',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ALGORITMOS SERVEM PARA PROGRAMAR COMPUTADORES',
        promptImagem:'Arte digital de uma pessoa sentada de costas, com um computador à sua frente, com vários balões de linguagens de programação saindo da tela do computador', /*opc*/
        textoDescritivoImagem:'Programador em seu computador', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'Mas os algoritmos não servem somente para os programadores e computadores.',
        urlAudioTexto:'',
        textoSimplificado:'Os algoritmos e as pessoas',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ALGORITMO PARA FAZER UM CORAÇÃO DE PAPEL',
        promptImagem:'Arte digital dos passos para se fazer um coração de origami', /*opc*/
        textoDescritivoImagem:'Computador mostrando um algoritmo e papel também mostrando um algoritmo', /*opc*/},

        {ordem:6,
        predecessor:5,
        texto:'Uma receita de culinária é um algoritmo, o processo de dobrar uma camisa ou um par de calças também é um algoritmo.',
        urlAudioTexto:'',
        textoSimplificado:'Uma receita é um algoritmo',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'RECEITAS TAMBÉM SÃO ALGORITMOS',
        promptImagem:'Arte digital com seis imagens, uma ao lado da outra, sendo a primeira um prato com 2 fatias de pão. A segunda imagem mostra um pote de maionese ao fundo e uma faca passando maionese em uma fatia de pão. A terceira mostra um pedaço de quijo ao fundo e uma mão colocando uma fatia de queijo no pão que tem maionese. A quarta mostra duas mãos cortando fatias de um tomate. A quinta mostra a fatia de pão em cima do prata, com maionese embaixo, queijo e rodelas de tomate em cima. A última imagem mostra um sanduíche em cima de um prato, feito com pão, maionese, queijo, tomate e outra fatia de pão em cima.', /*opc*/
        textoDescritivoImagem:'Preparo de uma receita com algoritmos', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'Até mesmo a rotina matinal pode ser considerada um algoritmo!',
        urlAudioTexto:'',
        textoSimplificado:'Rotina matinal também é um algoritmo',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ALGORITMO PARA ESCOVAR OS DENTES',
        promptImagem:'Arte digital com quatro imagens dos passos para escovação dos dentes', /*opc*/
        textoDescritivoImagem:'Pessoa seguindo os passos para escovar os dentes', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'E você pode criar algoritmos para as mais diversas tarefas do seu dia. Seja para você ou outra pessoa executar.',
        urlAudioTexto:'',
        textoSimplificado:'Diferentes tarefas podem ser algoritmos',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ALGORITMO PARA DOBRAR CAMISAS',
        promptImagem:'Arte digital de uma pilha de camisas coloridas dobradas', /*opc*/
        textoDescritivoImagem:'Camisa dobrada seguindo algoritmos', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'Mas fique atento: se você está criando um algoritmo para que outra pessoa execute, você precisa deixar suas instruções o mais específicas possível.',
        urlAudioTexto:'',
        textoSimplificado:'Especificar as instruções',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'AS INSTRUÇÕES PRECISAM SER CLARAS',
        promptImagem:'Arte digital mostrando uma pessoa confusa com uma folha de papel na mão, sem saber o que fazer e vários pontos de interrogação oando acima de sua cabeça', /*opc*/
        textoDescritivoImagem:'Pessoa confusa com o algoritmo que está tentando seguir', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'Os computadores e as outras pessoas não sabem quais as suas intenções e pensamentos, veja o exemplo do algoritmo para beber um copo de leite:',
        urlAudioTexto:'',
        textoSimplificado:'Algoritmo para beber leite',
        urlImagem:'',
        promptImagem:'Arte digital mostrando uma bancada em uma cozinha e um copo cheio de leite em cima da bancada', /*opc*/
        textoDescritivoImagem:'Copo de leite em cima de uma bancada', /*opc*/},
  
        {ordem:11,
        predecessor:10,
        texto:'Passo 1: pegar um copo do armário',
        urlAudioTexto:'',
        textoSimplificado:'Passo 1',
        urlImagem:'',
        promptImagem:'Arte digital de um armário e uma mão pegando um copo de vidro', /*opc*/
        textoDescritivoImagem:'Mão pegando um copo', /*opc*/},
  
        {ordem:12,
        predecessor:11,
        texto:'Passo 2: colocar o copo em cima da mesa',
        urlAudioTexto:'',
        textoSimplificado:'Passo 2',
        urlImagem:'',
        promptImagem:'Arte digital de uma mão colocando um copo de vidro em cima de uma bancada em uma cozinha', /*opc*/
        textoDescritivoImagem:'Mão colocando um copo na bancada', /*opc*/},
  
        {ordem:13,
        predecessor:12,
        texto:'Passo 3: pegar o leite da geladeira',
        urlAudioTexto:'',
        textoSimplificado:'Passo 3',
        urlImagem:'',
        promptImagem:'Arte digital de uma geladeira aberta, mostrando uma mão retirando uma caixa de leite de dentro dela', /*opc*/
        textoDescritivoImagem:'Mão pegando o leite da geladeira', /*opc*/},
  
        {ordem:14,
        predecessor:13,
        texto:'Passo 4: colocar o leite dentro do copo que está em cima da mesa',
        urlAudioTexto:'',
        textoSimplificado:'Passo 4',
        urlImagem:'',
        promptImagem:'Arte digital de uma mão despejando leite de uma caixa dentro de um copo de vidro que está em cima de uma bancada em uma cozinha', /*opc*/
        textoDescritivoImagem:'Mão colocando o leite dentro do copo', /*opc*/},
  
        {ordem:15,
        predecessor:14,
        texto:'Passo 5: beber o leite que está no copo',
        urlAudioTexto:'',
        textoSimplificado:'Passo 5',
        urlImagem:'',
        promptImagem:'Arte digital de uma crinça bbendo leite de dentro de um copo de vidro', /*opc*/
        textoDescritivoImagem:'Criança bebendo o leite', /*opc*/},
  
        {ordem:16,
        predecessor:15,
        texto:'Imagine se não estivesse especificado que o leite precisa ir dentro do copo? Certamente ele iria parar no chão!',
        urlAudioTexto:'',
        textoSimplificado:'Instruções não especificadas geram erros',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEM INTRUÇÕES CLARAS:',
        promptImagem:'Arte digital de uma cozinha com uma poça de leite no chão', /*opc*/
        textoDescritivoImagem:'Poça de leite no chão', /*opc*/},
  
        {ordem:17,
        predecessor:16,
        texto:'Então, os algoritmos nos ajudam a partir problemas grandes e complexos em problemas menores e mais fáceis de resolver.',
        urlAudioTexto:'',
        textoSimplificado:'Algoritmos e resolução de problemas',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'PARTIR PROBLEMAS GRANDES EM VÁRIOS MENORES',
        promptImagem:'Arte digital de uma caixa de papelão grande aberta com várias pequenas caixas fechadas saltando de dentro dela', /*opc*/
        textoDescritivoImagem:'Caixa grande de problemas com vários problemas menores saindo dela', /*opc*/},
  
        {ordem:18,
        predecessor:17,
        texto:'Com os algoritmos, podemos tranformar soluções de problemas em passos claros e bem definidos, que podem ser seguidos por qualquer máquina ou pessoa.',
        urlAudioTexto:'',
        textoSimplificado:'Instruções claras',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ALGORITMOS PARA TUDO!',
        promptImagem:'Arte digital dcom os quatro passos básicos do crescimento de uma planta, com a primeira imagem mostrando um buraco na terra, a segunda, mostrando a semente dentro do buraco, a terceira mostrando o broto e a quarta mostrando uma flor', /*opc*/
        textoDescritivoImagem:'Pessoa lendo um algoritmo e entendendo o que precisa ser feito', /*opc*/},
			]}},
    
      licao5:{},
    
    licao6:{/** padroesCurriculares: 
    titulo:'Lição 06. Robôs.',**/
    infografico:{titulo:'Robôs',
    tituloSimplificado:'Robôs',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Hoje vamos conhecer o mundo dos robôs, que são máquinas incríveis e fascinantes.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de diferentes robôs', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:2,
        predecessor:1,
        texto:'Os robôs são criados pelos seres humanos para nos ajudar em diversas tarefas e tornar nossas vidas mais fáceis e até mesmo mais divertidas.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de um robô sendo construído', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:'Mas o que é um robô?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'O QUE SÃO ROBÔS?',
        promptImagem:'Arte digital de diferentes robôs', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
        
        {ordem:4,
        predecessor:3,
        texto:'Um robô é uma máquina especial que pode fazer coisas diferentes sem a ajuda direta de uma pessoa.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de um robô', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'Os robôs podem ter corpos feitos de metal, plástico ou outros materiais e geralmente possuem sensores para ajudá-los a "entender" o mundo ao seu redor.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'DIFERENTES ROBÔS PARA DIFERENTES TAREFAS',
        promptImagem:'Arte digital mostrando 4 imagens: um robô em uma linha de produção, um robô cirurgião, um robô desenhista e um robô explorando outro planeta', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:6,
        predecessor:5,
        texto:'Existem muitos tipos diferentes de robôs. Alguns têm braços e pernas como os humanos, enquanto outros têm rodas ou até mesmo asas!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'TIPOS DE ROBÔS',
        promptImagem:'Arte digital mostrando robôs humanoides, robôs com rodas e robôs esféricos', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'Alguns robôs são usados em fábricas para ajudar a construir carros, brinquedos e outras coisas que usamos todos os dias.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de robôs em uma linha de produção de carros', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'Outros robôs são usados em hospitais para ajudar os médicos a fazer cirurgias com precisão ou para cuidar das pessoas quando estão doentes.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de robô cirurgião em uma sala de cirurgia', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'Além disso, existem robôs que podemos programar para fazer tarefas específicas. Isso significa que podemos dar instruções a eles e eles as seguirão.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de um robô com um papel na mão que possui vários símbolos de check', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'É como se eles tivessem um cérebro que podemos controlar!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ROBÔS TEM CÉREBRO?',
        promptImagem:'Arte digital de um robô pensando, com um semblante confuso', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:11,
        predecessor:10,
        texto:'Os robôs são programados usando códigos e comandos especiais. É como ensinar um robô a fazer algo.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ROBÔS PRECISAM SER PROGRAMADOS',
        promptImagem:'Arte digital de um menino sentado em frente a um computador, com um robô ao seu lado no chão, como se o menino estivesse programando o robô', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:12,
        predecessor:11,
        texto:'Por exemplo, podemos programar um robô para desenhar figuras ou jogar um jogo conosco. É muito divertido!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de um robô fazendo um desenho', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:13,
        predecessor:12,
        texto:'É importante lembrar que os robôs são apenas máquinas e não têm sentimentos como os seres humanos. Eles seguem nossas instruções, mas não podem pensar ou sentir como nós.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ROBÔS SÃO MÁQUINAS, ELES NÃO PENSAM, APENAS SEGUEM AS ORDENS QUE DAMOS',
        promptImagem:'Arte digital de um robô com uma lupa na mão, como se procurasse algo pelo chão', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:14,
        predecessor:13,
        texto:'A tecnologia dos robôs está sempre evoluindo, e no futuro, eles poderão fazer coisas ainda mais incríveis.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital mostrando um mundo futurístico com vários robôs andando pelas ruas com sacolas nas mãos', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:15,
        predecessor:14,
        texto:'Agora, que tal explorarmos mais sobre os robôs e suas incríveis capacidades?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de diferentes robôs', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
        ]}},
    
      licao7:{/** padroesCurriculares: 
      titulo:'Lição 07. Robópolis.',**/
      infografico:{titulo:'Robópolis',
      tituloSimplificado:'Robópolis',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
        cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'Olá! Hoje vamos conhecer um país muito especial',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'NO MUNDO DOS ROBÔS EXISTE UM LUGAR...',
        promptImagem:'Arte digital de um planeta visto de longe', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:2,
        predecessor:1,
        texto:'A Robolândia! Nesse país incrível só vivem robôs!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'CHAMADO “ROBOLÂNDIA”, O PÁIS DOS ROBÔS',
        promptImagem:'Arte digital de um país visto de cima, com pelo menos quatro cidades distintas', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:3,
        predecessor:2,
        texto:'O primeiro lugar da Robolândia que vamos conhecer é a sua capital, a principal cidade do país.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de uma cidade futurística', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
          
        {ordem:4,
        predecessor:3,
        texto:'Chamada Robópolis! Em Robópolis, os robôs habitantes são muito empenhados em trabalhar para manter a cidade funcionando.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'E HOJE VAMOS CONHECER A CIDADE DE ROBÓPOLIS, CAPITAL DA ROBOLÂNDIA',
        promptImagem:'Arte digital de uma cidade futurística, habitada por robôs', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:5,
        predecessor:4,
        texto:'Em Robópolis, os robôs habitantes podem trabalhar no que quiser! E nós vamos ajudá-los a ir e voltar do trabalho, para fazer todas as suas tarefas!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ONDE OS ROBÔS MORAM E TRABALHAM.',
        promptImagem:'Arte digital de diferentes robôs passando por uma rua, a caminho do trabalho, e um robô gari varrendo a calçada', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:6,
        predecessor:5,
        texto:'Ah! E não podemos nos esquecer de manter a energia da cidade sempre lá no alto! Para isso, todos devemos participar e ajudar uns aos outros!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'E COM A SUA AJUDA, ELES VÃO FAZER TODAS AS TAREFAS E MANTER A ENERGIA LÁ NO ALTO!',
        promptImagem:'Arte digital de uma pilha sendo energizada', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:7,
        predecessor:6,
        texto:'Prontos para o desafio? Mãos à obra!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de uma cidade futurística', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
      ]}},
  },
  
  
  unidade2:{
	  
	  licao8:{},
	  
    licao9:{/** padroesCurriculares: 
    titulo:'Lição 09. Numerópolis.',**/
    infografico:{titulo:'Numerópolis',
    tituloSimplificado:'Numerópolis',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Olá, vocês já foram apresentados ao mundo dos robôs e já conheceram Robópolis, não é?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'HOJE VAMOS CONHECER MAIS UMA CIDADE DA ROBOLÂNDIA',
      promptImagem:'Arte digital de um planeta futurístico, mostrando diferentes cidades.', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'Ótimo, porque hoje temos mais uma cidade para visitar.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma cidade futurística vista de cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Hoje vamos conhecer Numerópolis.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ESTA É NUMERÓPOLIS.',
      promptImagem:'Arte digital de uma cidade futurística habitada por robôs que não possuem braços', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Os robôs de Numerópolis não possuem braços, mas fazem de tudo, são guardas, motoristas, fazendeiros. Eles dão um jeito em tudo! Só não conseguem ainda escrever, desenhar e pintar.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'EM NUMERÓPOLIS, OS ROBÔS FAZEM DE TUDO PARA MANTER A ENERGIA LÁ NO ALTO...',
      promptImagem:'Arte digital de uma rua em uma cidade futurística com robôs que não possuem braços circulando, vestidos em roupas de diferentes profissões', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'E por aqui, como o nome da cidade já sugere, os robôs amam os números.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'E COMO O NOME SUGERE, OS ROBÔS DE NUMERÓPOLIS AMAM NÚMEROS!',
      promptImagem:'Arte digital de dois robôs sem braços conversando', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Mas tem um problema: está uma baita confusão em Numerópolis!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'MAS OS ROBÔS DE NUMERÓPOLIS ESTÃO COM UM BAITA PROBLEMA PARA TRANSITAR NA CIDADE.',
      promptImagem:'Arte digital de uma rua d euma cidade futurística com diversos robôs sem braços circulando, com expressões de confusão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'As ruas da cidade não têm placas, os robôs não sabem ao certo para onde estão indo.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'AS RUAS DA CIDADE NÃO TEM PLACAS, ENTÃO OS ROBÔS FICAM PERDIDOS!',
      promptImagem:'Arte digital e uma rua em uma cidade futurística e uma placa de trânsito com um sinal de interrogação', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'Mas olha que ideia genial: que tal pintar números nas ruas, já que em Numerópolis todos adoram números?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'QUE TAL AJUDAR OS ROBÔS DE NUMERÓPOLIS, PROGRAMANDO A PINTURA DOS NÚMEROS NAS RUAS?',
      promptImagem:'Arte digital de uma rua em uma cidade futurística com o número dois pintado na rua', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'Com isso, os robôs vão poder dizer para qual rua querem ir somente falando o número da rua.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com diversos robôs sem braços circulando, com expressões de felicidade', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'Será o fim da confusão em Numerópolis.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma cidade futurística vista de cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
      
      {ordem:11,
      predecessor:10,
      texto:'O que vocês acham? Será que conseguimos ajudar os robôs dessa cidade usando programação?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um computador com vários códigos aparecendo na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'O robô também vai ter que ser capaz de segurar uma caneta para essa tarefa, não é mesmo?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um robô desenhista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'Vamos ver que ideias vocês têm para fazer isso acontecer!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma lâmpada acesa', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'Vamos ajudar os robôs de Numerópolis? Mãos à obra!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um planeta futurístico, mostrando diferentes cidades.', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
    
    licao10:{/** padroesCurriculares: 
    titulo:'Lição 10. Robociclagem.',**/
    infografico:{titulo:'Robociclagem',
    tituloSimplificado:'Robociclagem',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Olá, de novo! Estamos de volta a Robópolis, nessa cidade ultra robotizada.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ESTAMOS DE VOLTA A ROBÓPOLIS, ONDE TODOS OS ROBÔS AJUDAM A MANTER A CIDADE LIMPA!',
      promptImagem:'Arte digital de um planeta futurístico, mostrando diferentes cidades.', /*pode ser o mesmo dos outros infográficos*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'Robópolis depende da colaboração de todos os moradores para manter a energia sempre lá no alto. E isso também tem a ver com a limpeza da cidade.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com diversos robôs sem braços circulando, com expressões de felicidade', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Aqui em Robópolis, todos colaboram para reciclar o lixo e conservar a natureza.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com diversos robôs sem braços circulando, com expressões de felicidade', /*pode ser uma derivação da mesma imagem da ordem 2*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Mas algo de ruim está acontecendo, o lixo está se acumulando! Por que será?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'MAS O LIXO ESTÁ SE ACUMULANDO. POR QUÊ?',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com lixo se acumulando pela rua', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'Opa, acho que encontramos o motivo! O robô-reciclador está estragado! E agora?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'AH, NÃO! O ROBÔ-RECICLADOR ESTÁ QUEBRADO... E AGORA?',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com um robô que parece uma escavadeira, com uma roupa de gari quebrado em um canto da rua.', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Como os outros robôs não sabem reciclar lixo, eles precisam ser programados para fazer todas as etapas, enquanto o robô-reciclador está sendo consertado.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'COMO OS OUTROS ROBÔS NÃO SABEM RECICLAR O LIXO, VOCÊ TERÁ QUE CRIAR UM PROGRAMA PARA AJUDAR A CIDADE.',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com robôs circulando, com expressão de confusão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'A primeira etapa é a chamada “coleta seletiva”, que é separar diferentes tipos de lixo em diferentes lixeiras.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A PRIMEIRA ETAPA É SEPARAR DIFERENTES TIPOS DE LIXO EM LIXEIRAS DIFERENTES.',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com as quatro lixeiras de reciclagem enfileiradas', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'A segunda etapa é transportar os lixos devidamente separados em casa, para um local que tenha máquinas de reciclagem.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A SEGUNDA ETAPA É LEVAR TUDO PARA O CENTRO DE RECICLAGEM.',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com uma grande fábrica de reciclagem', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'E, finalmente, na terceira etapa essas máquinas transformam cada tipo de lixo em um novo produto que pode ser usado novamente.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NA TERCEIRA ETAPA, O QUE ANTES ERA LIXO VIRA UM PRODUTO NOVO!',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com dois robôs circulando com produtos reciclados', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'Está feita a reciclagem! O lixo agora não fica acumulando por aí, prejudicando a natureza...',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com um grande símbolo de reciclagem em verde', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'Nossa, como o robô-reciclador faz falta não?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O ROBÔ-RECICLADOR FAZ MUITA FALTA, NÃO É?',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com um robô com expressão de que está sentindo falta de alguma coisa', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'Mas enquanto ele está fora de operação, não tem outro jeito: Robópolis precisa contar com vocês e com sua habilidade de programação! Vamos socorrer os robôs novamente?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma rua de uma cidade futurística bem limpa', /*pode ser alguma variação de outras do mesmo infográfico*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
    
    licao11:{},
    
    licao12:{},
   
    licao13:{},
   
    licao14:{/** padroesCurriculares: 
    titulo:'Lição 14. Eventos.',**/
    infografico:{titulo:'Eventos',
    tituloSimplificado:'Eventos',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Vocês sabiam que muitas coisas que acontecem à nossa volta podem ser consideradas eventos?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*pode ser a mesma já utilizada antes*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'Um evento é algo que acontece em um determinado momento e lugar.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'UM EVENTO É ALGO QUE ACONTECE EM UM DETERMINADO MOMENTO E LUGAR.',
      promptImagem:'Arte digital de uma nuvem de chuva', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Por exemplo, acordar de manhã, escovar os dentes, tomar o café da manhã e ir para a escola são eventos que ocorrem todos os dias em nossas vidas.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS PODEM SER COISAS QUE ACONTECEM TODOS OS DIAS...',
      promptImagem:'Arte digital de um personagem em frente a um espelho, escovando os dentes', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Até mesmo celebrar um aniversário ou assistir a um filme são eventos especiais!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OU COISAS ESPECIAIS.',
      promptImagem:'Arte digital de uma festa de aniversário', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'E vocês sabiam que os programas de computadores também entendem eventos?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS ESTÃO ATÉ NOS COMPUTADORES!',
      promptImagem:'Arte digital de um computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Eles são programados para realizar ações quando certos eventos acontecem.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS PODEM SER PROGRAMADOS.',
      promptImagem:'Arte digital de um computador com vários códigos aparecendo na tela', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'Por exemplo, quando você clica em um botão em um jogo, isso é um evento para o computador e ele pode responder mostrando uma animação ou fazendo um som.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma manete de videogame com uma mão segurando', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'Os eventos na computação podem ser muitos.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um computador com vários códigos aparecendo na tela', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'Por exemplo, quando você toca a tela de um tablet, isso é um evento de toque.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'TOCAR NA TELA DO TABLET É UM EVENTO.',
      promptImagem:'Arte digital de uma mão segurando um tablet e a outra mão tocando a tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'Quando você aperta uma tecla em um teclado, isso é um evento de teclado.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'APERTAR UMA TECLA NO TECLADO É UM EVENTO.',
      promptImagem:'Arte digital de um teclado de computador e um dedo pressionando alguma tecla', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'Os computadores estão sempre prontos para detectar esses eventos e tomar ações com base neles.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'TODO EVENTO DE COMPUTADOR TERÁ UMA REAÇÃO.',
      promptImagem:'Arte digital de um computador com vários códigos aparecendo na tela', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'Quando você pressiona um botão para pular em um jogo, o personagem pula!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NOS JOGOS TAMBÉM PODEMOS PERCEBER OS EVENTOS.',
      promptImagem:'Arte digial de uma criança jogando videogame', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'Isso acontece porque o computador entendeu o evento do botão sendo pressionado e tomou a ação de fazer o personagem pular.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NO JOGO, CADA EVENTO TERÁ UMA REAÇÃO TAMBÉM.',
      promptImagem:'Arte digital de um computador com vários códigos aparecendo na tela', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'Os eventos estão por toda parte, desde as coisas que fazemos quando acordamos até as ações que tomamos com a ajuda de dispositivos eletrônicos. ',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS ESTÃO EM TODA PARTE!',
      promptImagem:'Arte digital de diferentes dispositivos eletrônicos', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
	  
  },
  
   
  unidade3:{
	  
    licao15:{},
   
    licao16:{/** padroesCurriculares: 
    titulo:'Lição 16. Senhas e Segurança',**/
    infografico:{titulo:'Senhas e Segurança',
    tituloSimplificado:'Senhas',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Hoje vamos falar sobre algo muito importante: senhas e segurança.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um cadeado fechado e vários asteriscos voando em torno dele', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'Vocês sabiam que existem maneiras de proteger nossas informações e manter nossos dispositivos seguros?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'PODEMOS PROTEGER NOSSOS DISPOSITIVOS.',
      promptImagem:'Arte digital de um cadeado em forma de escudo medieval com um notebook logo atrás, algumas nuvens e ícones de correspondência', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Podemos fazer isso com senhas!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma tela de programa com um cadeado bem em cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Uma senha é uma sequência de letras, números ou símbolos que usamos para acessar coisas importantes, como nossos dispositivos eletrônicos, contas de e-mail, jogos e muito mais.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O QUE É UMA SENHA?',
      promptImagem:'Arte digital de uma box para digitar com vários asteriscos e um cadeado atrás', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'A senha é como uma chave secreta que apenas nós devemos saber.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A SNHA É COMO UMA CHAVE SECRETA.',
      promptImagem:'Arte digital de um cadeado e uma chave', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Agora, por que é importante ter uma senha forte?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A SENHA PRECISA SER FORTE.',
      promptImagem:'Arte digital de um laptop aberto e um cadeado na tela, com uma chave nele', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'É porque queremos manter nossas coisas seguras e protegidas.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um laptop com correntes passando por sua tela e um cadeado trancando essas correntes', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'Assim como usamos uma chave para trancar uma porta, usamos uma senha para "trancar" nossos dispositivos e contas para que apenas nós possamos acessá-los.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de uma tranca de uma porta com uma chave', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'Por isso, as senhas sempre devem ser “fortes”, ou seja, sua senha deve ser única e você não deve usar a mesma senha para tudo.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'UMA SENHA FORTE É ÚNICA...',
      promptImagem:'Arte digital de um cadeado dourado com uma chave e vários outros cadeados prateados em volta', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'Se alguém descobrir sua senha, não queremos que ela tenha acesso a todas as suas coisas!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'... E DÍFICIL DE ADIVINHAR.',
      promptImagem:'Arte digital de uma caixa de papelão aberta na parte de cima, com vários ícones de envelopes, chaves, balões de conversa saltando de dentro dela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'Quanto mais complexa a senha, mais difícil será para alguém descobri-la.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'QUANTO MAIS FORTE A SENHA, MAIS PROTEGIDO VOCÊ ESTÁ.',
      promptImagem:'Arte digital de personagem hackeando um computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'Assim como você não empresta a chave da sua casa, você não deve compartilhar a sua senha com ninguém, exceto com seus pais ou responsáveis.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NÃO COMPARTILHE SUAS SENHAS!',
      promptImagem:'Arte digital de uma mão entregando uma chave para outra mão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'Manter a senha em segredo é uma maneira importante de proteger suas informações pessoais.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'SUA SENHA É SECRETA.',
      promptImagem:'Arte digital de um rosto com um dedo em frente à boca, fazendo sinal de segredo', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'Além das senhas, é importante manter seus dispositivos protegidos. Isso significa não os deixar desbloqueados ou sem supervisão para que outras pessoas não possam acessá-los sem sua permissão.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NÃO DEIXE SEUS DISPOSITIVOS DESBLOQUEADOS.',
      promptImagem:'Arte digital de um laptop com correntes passando por sua tela e um cadeado trancando essas correntes', /*pode ser uma variação do que já foi usado anteriormente*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:15,
      predecessor:14,
      texto:'E se você receber uma mensagem estranha pedindo sua senha ou informações pessoais, nunca responda. Sempre peça ajuda a um adulto responsável.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'CUIDADO COM MENSAGENS ESTRANHAS.',
      promptImagem:'Arte digital de um laptop com um envelope bem na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:16,
      predecessor:15,
      texto:'A segurança é muito importante quando se trata de senhas e dispositivos eletrônicos.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um cadeado e uma chave', /*pode ser uma variação da já usada anteriormente*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:17,
      predecessor:16,
      texto:'Queremos proteger nossas informações pessoais e manter tudo seguro.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'VAMOS NOS PROTEGER!',
      promptImagem:'Arte digital de um cadeado dourado com uma chave e vários outros cadeados prateados em volta', /*pode ser uma variação da já usada anteriormente*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:18,
      predecessor:17,
      texto:'Vamos aprender e manter nossos dispositivos e informações protegidos juntos!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'Arte digital de um smatphone com um cadeado dourado na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
    licao17:{/** padroesCurriculares: 
    titulo:'Lição 17. Condicionais.',**/
    infografico:{titulo:'Condicionais',
    tituloSimplificado:'Condicionais',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Você já ouviu a palavra “condição”? E “condicionais”? Vamos aprender um pouco sobre isso.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O QUE É UMA CONDICIONAL?',
      promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*pode ser usada alguma variação de outra imagem já pronta*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'As condicionais nos ajudam a entender como as coisas podem ser diferentes dependendo de certas condições.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'CONDICIONAIS NOS AJUDAM A ENTENDER COMO AS COISAS FUNCIONAM.',
      promptImagem:'Arte digital de uma nuvem de chuva e um sol do outro lado', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Vamos imaginar que vocês querem ir brincar no parque.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'IMAGINE QUE VOCÊ QUER IR BRINCAR NO PARQUE.',
      promptImagem:'Arte digital de um parque com sol', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Mas antes de sair de casa, vocês precisam verificar se está chovendo lá fora.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ANTES DE SAIR, PRECISA VERIFICAR SE ESTÁ CHOVENDO.',
      promptImagem:'Arte digital de uma nuvem de chuva', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'Então a condicional seria: <code>Se estiver chovendo <br/>&nbsp;&nbsp;&nbsp;&nbsp;então vamos brincar dentro de casa <br/>Se não estiver chovendo <br/>&nbsp;&nbsp;&nbsp;&nbsp;então podemos ir brincar no parque</code>',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'SE CHUVA = VERDADEIRO, ENTÃO BRINCAR DENTRO DE CASA. SENÃO, BRINCAR NO PARQUE.',
      promptImagem:'Arte digital de uma nuvem de chuva e um sol do outro lado', /*pode ser uma variação da outra*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Vejam como essa condicional nos ajuda a tomar uma decisão com base na condição do tempo. É como uma regra que nos guia!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A DECISÃO É TOMADA COM BASE NA CONDIÇÃO.',
      promptImagem:'Arte digital com duas setas saindo do mesmo lugar e indo para lados diferentes', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'Viram como as condicionais nos ajudam a entender o que vai acontecer com base em certas condições?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'CONDICIONAIS NOS AJUDAM A ENTENDER O QUE VAI ACONTECER.',
      promptImagem:'Arte digital com ', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'Elas nos ajudam a tomar decisões e a entender as consequências de nossas ações.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'E sabem o que mais é legal? As condicionais também são usadas na programação de computadores!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'Os computadores podem seguir instruções com base em condições que programamos para eles. É como se eles tivessem regras próprias!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'Por exemplo, se vocês estiverem jogando um jogo e o personagem chegar a uma parede, vocês podem programar o jogo para que o personagem mude de direção e continue se movendo.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'A condicional seria: <code>Se o personagem encontrar uma parede <br/>&nbsp;&nbsp;&nbsp;&nbsp;então ele deve mudar de direção e continuar se movendo</code>',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'As condicionais podem ser usadas de maneiras divertidas e interessantes, não é mesmo? Elas nos ajudam a tomar decisões e a entender como as coisas funcionam.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'Vamos continuar explorando e aprendendo juntos sobre esse conceito interessante!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
    licao18:{},
  
    licao19:{/** padroesCurriculares: 
    titulo:'Lição 19. Depuração.',**/
    infografico:{titulo:'Depuração',
    tituloSimplificado:'Depuração',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Hoje vamos aprender sobre algo muito importante chamado "depuração".',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'A depuração, ou debugging é um processo em que identificamos e corrigimos problemas.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Quando algo não está funcionando como esperado, precisamos encontrar a causa do problema e resolvê-lo. É como ser um detetive que soluciona mistérios!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Imagine um quebra-cabeça.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'Arte digital de um quebra cabeças em cima de uma mesa ainda não montado', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'Se vocês estiverem montando um quebra-cabeça e perceberem que uma peça não se encaixa corretamente, vocês precisam descobrir onde a peça errada está e encontrar a peça correta para colocar no lugar.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'Arte digital de um quebra cabeças iniciado, que mostra a imagem de um robô, mas ainda faltando algumas peças para terminar', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Essa peça incorreta é um bug, um problema e é preciso depurar a situação, encontrar o bug e corrigi-lo.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'A depuração nos ajuda a solucionar problemas e encontrar soluções. É um processo de investigação para descobrir o que está errado e corrigir o problema.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'A depuração também é usada na programação de computadores.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'Quando os programadores escrevem códigos para criar jogos ou aplicativos, às vezes surgem erros ou bugs. É como um quebra-cabeça que precisa ser resolvido!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'Os programadores usam a depuração para encontrar e corrigir esses erros.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'Eles examinam o código cuidadosamente, testam diferentes partes e fazem alterações até que tudo funcione corretamente.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'A depuração é uma habilidade importante que nos ajuda a resolver problemas e encontrar soluções.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'Vamos continuar aprendendo e vocês se tornarão verdadeiros detetives da solução de problemas!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
    licao20:{},
   
    licao21:{},
	  
  },
  
   
  unidade4:{
	  
    licao22:{},
   
    licao23:{},
   
    licao24:{/** padroesCurriculares: 
    titulo:'Lição 24. O Trânsito em Robópolis.',**/
    infografico:{titulo:'O Trânsito em Robópolis',
    tituloSimplificado:'Trânsito',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Olá! Estamos de volta a Robópolis...',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'Arte digital de uma cidade futurística', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'Nossa missão de hoje é ajudar os nossos amigos da cidade.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Como os robôs de Robópolis não andam muito rápido, ele quer comprar um carro. Mas não conhece as regras de trânsito.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Para dirigir com segurança, eles precisam conhecer o que significa cada cor que aparece nos semáforos, aqueles sinais que controlam o trânsito.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'Vocês podem ajudar?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Além de ensinar o que cada cor significa, vocês devem criar programas para que os robôs sejam capazes de atravessar Robópolis, sempre respeitando as cores do semáforos que aparecem pelo caminho.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'Vai ser um desafio e tanto... Pé na tábua!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
    licao25:{},
   
    licao26:{},
   
    licao27:{/** padroesCurriculares: 
    titulo:'Lição 27. Binarópolis.',**/
    infografico:{titulo:'Binarópolis',
    tituloSimplificado:'Binarópolis',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'Vamos hoje continuar em nossa divertida jornada, conhecendo a cidade mais estranha da terra dos robôs: Binarópolis!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'Binarópolis fica no continente, assim como Letrópolis. Porém, fica longe do mar, no interior do continente. Veja no mapa.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'Em Binarópolis os robôs também gostam de números, mas só conhecem os números “zero” e “um”. Estranho não?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'Pois é... Como Binarópolis é uma cidade muito antiga, eles até hoje só conversam através do código primitivo dos computadores, conhecido como “sistema binário”.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'E o “sistema binário” só utiliza os dois símbolos, zero e um.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'Ok, mas se Binarópolis tem cinco ruas... como vamos conseguir dar nomes diferentes para cada rua?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'Bom, os computadores usam o “sistema binário” para representar de tudo: letras, números, imagens, sons... então deve ter um jeito.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'Lá no processador, o cérebro do computador, minúsculos componentes elétricos são ligados para representar o “um”, que desenhamos como uma caixinha branca. Veja.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'E são desligados para representar o “zero”, que desenhamos como uma caixinha preta.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'O computador então usa vários “zeros” e “uns”, um ao lado do outro, para representar diferentes números e letras.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'É um pouco confuso a princípio, mas como você já é reconhecido como um grande ajudante de robôs, vai aprender um pouco sobre esse código misterioso para ajudar Binarópolis.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:0,
      texto:'Preparados?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
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
		}},}