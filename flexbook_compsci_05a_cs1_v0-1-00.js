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
				urlAudioTexto:'',
				textoSimplificado:'Sequências',
				urlImagem:'',
				promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*opc*/
				textoDescritivoImagem:'Pessoa pensando para tentar resolver um problema', /*opc*/},
					 
				{ordem:2,
				predecessor:1,
				texto:'Sequência é a ordem em que os objetos estão, ou a ordem em que aconteceu alguma coisa.',
				urlAudioTexto:'',
				textoSimplificado:'Sequência é ordem',
				urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEQUÊNCIA É A ORDEM EM QUE OS OBJETOS ESTÃO, OU A ORDEM EM QUE ACONTECEU ALGUMA COISA.',
				promptImagem:'Arte digital de três ursos de pelúcia. Um grande à esquerda, roxo, um médio no meio, amarelo e um pequeno à direita, azul', /*opc*/
				textoDescritivoImagem:'', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:'Essa ordem é saber o que é primeiro, o que vem depois do primeiro, e assim por diante.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de três ursos de pelúcia. Um grande à esquerda, roxo e com o símbolo 1 logo abaixo, um médio no meio, amarelo e com o símbolo 2 logo abaixo e um pequeno à direita, azul e com o símbolo 3 logo abaixo', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:4,
        predecessor:3,
        texto:'Com as sequências, você pode colocar tudo em ordem: palavras, bihos de pelúcia, acontecimentos do dia...',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de três imagens lado a lado que mostram no quadro à esquerda uma larva, no quadro do meio uma pupa e no quadro à direita uma borboleta', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'Por exemplo: qual é sequência de acontecimentos no seu dia?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'QUAL É SEQUÊNCIA DE ACONTECIMENTOS NO SEU DIA?',
        promptImagem:'Arte digital de quatro imagens que mostram no quadro acima e à esquerda um personagem sentado almoçando, no quadro acima e à direita, dois personagens, um menino e uma menia saindo da escola, no quadro abaixo à esquerda um perspnagem se espreguiçando na cama ao acordar e no quadro abaixo e à direita um personagem tomando uma banho de espuma numa banheira', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:6,
        predecessor:5,
        texto:'Para saber como ordenar as coisas em uma sequência, você também precisa de um critério. Repita comigo: Critério.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'VOCÊ PRECISA DE UM CRITÉRIO.',
        promptImagem:'Imagem digital de uma prancheta vermelha com um papel e no papel tem um símbolo verde de checagem', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'Mas o que é um critério?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'Um critério é a regra que vai definir como as coisas vão ser organizadas dentro da sequência.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'CRITÉRIO = REGRA QUE VAI DEFINIR COMO AS COISAS VÃO SER ORGANIZADAS.',
        promptImagem:'Arte digital de uma placa de trânsito triangular, com a borda vermelha e o fundo branco e um ponto de exclamação preto bem no meio da placa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'Por exemplo: Para colocar os alunos em sequência, do menor para o maior, o critério será a altura de cada um.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEQUÊNCIA: ALUNOS <p>CRITÉRIO: ALTURA - DO MENOR PARA O MAIOR.',
        promptImagem:'Arte digital de três crianças em fila, olhando para frente, com alturas diferentes. A da esquerda deve ser a maior, a do meio deve ser menor que a da esquerda e a da direita deve ser menor que a do meio', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'Aprender sobre sequências é muito importante, pois com elas você vai poder organizar tudo e entender o mundo ao seu redor.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Imagem digital de um quebra cabeças coma  figura do planeta terra e que está faltando algumas peças para completar, que se encontram espalhadas ao redor da imagem principal', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:11,
        predecessor:10,
        texto:'Vamos tentar mais uma vez? Qual a sequência das figuras? <p>O que aconteceu primeiro?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'QUAL A SEQUÊNCIA DAS FIGURAS? O QUE ACONTECEU PRIMEIRO?',
        promptImagem:'Arte digital com cinco imagens. Na imagem da esquerda, há um casulo marrom de borboleta num galho, na imagem seguinte, uma borboleta pousada numa flor, na imagem seguinte, um casulo verde de borboleta pendurado num galho, na imagem seguinte, uma folha com ovos de borboleta e na última imagem uma folha com uma lagarta', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:12,
        predecessor:11,
        texto:'Está preparado para o mundo das sequências? Vamos lá!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'',
        promptImagem:'Arte digital com uma maçã, um quebra cabeças, uma prancheta vermelha com um papel e no papel tem um símbolo verde de checagem, um urso de pelúcia roxo e uma borboleta', /*opc*/
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
        texto:'Os robôs podem ter corpos feito de metal, plástico ou outros materiais e geralmente possuem sensores para ajudá-los a "entender" o mundo ao seu redor.',
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
        texto:'Por exemplo, podemos programar um robô para desenhar figuras ou jogar um jogo com a gente. É muito divertido!',
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
	  
	  licao8:{/** padroesCurriculares: 
    titulo:'Lição 07. Robópolis.',**/
    infografico:{titulo:'Robópolis',
    tituloSimplificado:'Robópolis',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
	  
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
		}},}