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
		  infografico:{titulo:'SEQUÊNCIAS',
			tituloSimplificado:'SEQUÊNCIAS',
			estiloPadrao:'basicoPaisagem',
			/** urlVideo:'',
			urlPodcast:'', **/
			cenas:[				
				{ordem:1,
				predecessor:0,
				texto:'VOCÊ SABE O QUE É UMA SEQUÊNCIA? JÁ OUVIU ESSA PALAVRA ANTES?',
				urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/1.mp3',
				textoSimplificado:'SEQUÊNCIAS',
				urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-1.jpg',
				//promptImagem:'uma imagem fofa de personagem feminina, negra, com semblante pensativo', /*opc*/
				promptImagem:'Imagem colorida e suave de uma jovem personagem feminina negra, com olhos grandes e expressivos, segurando o queixo com uma mão e olhando para cima, em um fundo pastel e desfocado. Ela exibe um semblante pensativo e curioso, com nuances de luz e sombra semelhantes a uma fotografia macro de natureza.',
				textoDescritivoImagem:'Pessoa pensando para tentar resolver um problema', /*opc*/},
					 
				{ordem:2,
				predecessor:1,
				texto:'SEQUÊNCIA É A ORDEM EM QUE OS OBJETOS ESTÃO, OU A ORDEM EM QUE ACONTECEU ALGUMA COISA.',
				urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/2.mp3',
				textoSimplificado:'Sequência é ordem',
				urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-2-2.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEQUÊNCIA É A ORDEM EM QUE OS OBJETOS ESTÃO, OU A ORDEM EM QUE ACONTECEU ALGUMA COISA.',
				//promptImagem:'Imagem vívida e delicada de três ursos de pelúcia, cada um de um tamanho diferente, arranjados um ao lado do outro de maneira harmoniosa em um cenário tranquilo e colorido',
				//promptImagem:'uma imagem fofa de três ursos de pelúcia, todos com tamanhos diferentes', /*opc*/
				//Imagem vívida e delicada de duas prateleiras com brinquedos, dispostos em sequência crescente de tamanho, em um cenário tranquilo e colorido
				textoDescritivoImagem:'', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:'ESSA ORDEM É SABER O QUE É PRIMEIRO, O QUE VEM DEPOIS DO PRIMEIRO, E ASSIM POR DIANTE.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/3.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-3.gif',
		promptImagem:'Imagem delicada e colorida de cinco bolas vibrantes alinhadas em sequência sobre uma mesa, em um ambiente sereno, cada bola com uma cor distinta e tons suaves. Acima de cada bola, números sequenciais flutuam, começando com 1 e terminando em 5',
        //promptImagem:'uma imagem fofa de uma fila com cinco bolas coloridas sobre uma mesa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:4,
        predecessor:3,
        texto:'COM AS SEQUÊNCIAS, VOCÊ PODE COLOCAR TUDO EM ORDEM: PALAVRAS, BICHOS DE PELÚCIA, ACONTECIMENTOS DO DIA...',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/4.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq_4.png',
        promptImagem:'uma imagem fofa de uma larva em cima de uma folha; uma imagem fofa de uma pupa pendurada numa folha; uma imagem fofa de uma borboleta pousada em uma folha', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'POR EXEMPLO: QUAL É A SEQUÊNCIA DE ACONTECIMENTOS DO SEU DIA?',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/5.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-5-4-imgs.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'QUAL É SEQUÊNCIA DE ACONTECIMENTOS NO SEU DIA?',
		promptImagem:'Imagem colorida e suave de um jovem personagem masculino, com olhos grandes e expressivos, se acordando na sua cama em um fundo pastel e desfocado. Ele exibe um semblante tranquilo, sonolento e feliz, com nuances de luz e sombra semelhantes a uma fotografia macro de natureza. Mostrar o quarto;Imagem colorida e suave de um jovem personagem masculino, com olhos grandes e expressivos, tomando o café da manhã na mesa da cozinha com nuances de luz e sombra semelhantes a uma fotografia macro de natureza; Imagem colorida e suave de dois personagens fofos saindo de um prédio, vestidos com uniformes escolares, com olhos grandes e expressivos, com nuances de luz e sombra semelhantes a uma fotografia macro de natureza. Mostrar a escola; Imagem colorida e suave e fofa de um banheiro com uma banheira cheia de espuma com nuances de luz e sombra semelhantes a uma fotografia macro de natureza. O objetivo da imagem é mostrar que devemos tomar banho todos os dias.',
        //promptImagem:'uma imagem fofa de um personagem sentado à mesa, almoçando; uma imagem fofa de dois personagens saindo de um prédio, vestidos com uniformes escolares; uma imagem fofa de um personagem humano se espreguiçando na cama de manhã; uma imagem fofa de uma personagem humana em uma banheira cheia de espuma', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:6,
        predecessor:5,
        texto:'PARA SABER COMO ORDENAR AS COISAS EM UMA SEQUÊNCIA, VOCÊ TAMBÉM PRECISA DE UM CRITÉRIO. REPITA COMIGO: CRITÉRIO.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/6.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-6.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'VOCÊ PRECISA DE UM CRITÉRIO.',
		promptImagem:'Imagem colorida e suave e fofa, no centro, uma prancheta vermelha com um papel anexado a ela. No papel, destaca-se um grande símbolo de checagem na cor verde. O fundo é desfocado com nuances suaves, lembrando uma fotografia macro da natureza.',
        //promptImagem:'Imagem digital de uma prancheta vermelha com um papel e no papel tem um símbolo verde de checagem', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'MAS O QUE É UM CRITÉRIO?',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/7.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-7.jpg',
		promptImagem:'Imagem colorida e suave de um jovem personagem asiático, com olhos grandes e expressivos, segurando o queixo com uma mão e olhando para cima, em um fundo pastel e desfocado. Ela exibe um semblante pensativo e curioso, com nuances de luz e sombra semelhantes a uma fotografia macro de natureza.',
        //promptImagem:'imagem fofa de personagem masculino, com semblante pensativo', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'UM CRITÉRIO É A REGRA QUE VAI DEFINIR COMO AS COISAS VÃO SER ORGANIZADAS DENTRO DA SEQUÊNCIA.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/8.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-8.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'CRITÉRIO = REGRA QUE VAI DEFINIR COMO AS COISAS VÃO SER ORGANIZADAS.',
        promptImagem:'Imagem colorida e suave de uma imagem fofa de uma placa de de trânsito triangular, com a borda vermelha e o fundo branco e um ponto de exclamação preto bem no meio da placa. O cenário tem com nuances de luz e sombra semelhantes a uma fotografia macro de natureza.',
		//promptImagem:'uma imagem fofa de uma placa de de trânsito triangular, com a borda vermelha e o fundo branco e um ponto de exclamação preto bem no meio da placa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'POR EXEMPLO: PARA COLOCAR OS ALUNOS EM SEQUÊNCIA, DO MENOR PARA O MAIOR, O CRITÉRIO SERÁ A ALTURA DE CADA UM.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/9.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-9.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'SEQUÊNCIA: ALUNOS <p>CRITÉRIO: ALTURA - DO MENOR PARA O MAIOR.',
		promptImagem:'Imagem colorida e suave de três carrinhos fofos com tamanhos bem diferentes em fila com nuances de luz e sombra semelhantes a uma fotografia macro de natureza.',
        //promptImagem:'imagem fofa de três personagens humanos de alturas diferentes em fila, olhando para frente', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'APRENDER SOBRE SEQUÊNCIAS É MUITO IMPORTANTE, POIS COM ELAS VOCÊ VAI PODER ORGANIZAR TUDO E ENTENDER O MUNDO AO SEU REDOR.',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/10.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-10.jpg',
        promptImagem:'Imagem colorida e suave de peças de um quebra cabeças espalhadas e bagunçadas sobre uma mesa com nuances de luz e sombra semelhantes a uma fotografia macro de natureza.',
		//promptImagem:'imagem fofa de peças de um quebra cabeças espalhadas sobre uma mesa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:11,
        predecessor:10,
        texto:'VAMOS TENTAR MAIS UMA VEZ? QUAL A SEQUÊNCIA DAS FIGURAS? <P>O QUE ACONTECEU PRIMEIRO?',
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
        texto:'ESTÁ PREPARADO PARA O MUNDO DAS SEQUÊNCIAS? VAMOS LÁ!',
        urlAudioTexto:'https://storage.googleapis.com/mindmakers/cpsciaudioinf/CS1/i1/12.mp3',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Inf_Sequencias/Seq-12.jpg',
        promptImagem:'Imagem colorida e suave de três cubos empilhados em cima de uma mesa com nuances de luz e sombra semelhantes a uma fotografia macro de natureza. Cada cubo tem um número apenas, sendo um com o número 1, outro 2, e outro 3.',
		//promptImagem:'uma imagem fofa de cubos empilhados em cima de uma mesa', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
			]}},
	  
	  licao2:{id:'CS1AULA02CODE',
    /** padroesCurriculares: 
    titulo:'Lição 02. Identificação de Padrões.',**/
    infografico:{titulo:'IDENTIFICAÇÃO DE PADRÕES',
    tituloSimplificado:'PADRÕES',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'VOCÊ SABE O QUE É UM PADRÃO? JÁ OUVIU ESSA PALAVRA ANTES?',
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
        texto:'PADRÕES SÃO COISAS QUE SE REPETEM DE MANEIRA LÓGICA. POR EXEMPLO, O PADRÃO QUE PODE SER VISTO AQUI É QUE EXISTE UMA MAÇÃ VERMELHA, AO LADO DE UMA VERDE, E DE NOVO, E DE NOVO.',
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
        texto:'O QUE VOCÊ VÊ? QUAIS SÃO AS COISAS QUE SE REPETEM AQUI?',
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
        texto:'OS PADRÕES ESTÃO EM MUITAS COISAS A NOSSO REDOR, COMO CORES, FORMAS, DESENHOS E OBJETOS.',
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
        texto:'OS PADRÕES NOS AJUDAM A FAZER PREVISÕES, PORQUE ELES NOS AJUDAM A COMEÇAR A ENTENDER O QUE VEM A SEGUIR. É ASSIM, POR EXEMPLO, QUE OS PROFISSIONAIS SABEM QUANDO VAI CHOVER. ELES OBSERVAM OS PADRÕES E FAZEM UMA PREVISÃO.',
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
        texto:'RECONHECER PADRÕES TAMBÉM NOS AJUDA A RESOLVER PROBLEMAS, AFINAL, RECONHECER UM PADRÃO É O PRIMEIRO PASSO PARA A SOLUÇÃO.',
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
        texto:'UM EXEMPLO DE PADRÃO NO NOSSO DIA A DIA É O NASCER E POR DO SOL E DA LUA. O SOL NASCE PARA COMEÇAR O DIA. NO FIM DO DIA ELE SE PÕE E A LUA NASCE. QUANDO A LUA SE PÕE, O SOL VOLTA PARA MAIS UM DIA.',
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
        texto:'QUANDO VOCÊ APRENDE OS PASSOS DE UMA DANÇA, PODE PERCEBER TAMBÉM OS PADRÕES EXISTENTES.',
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
        texto:'E QUANDO VOCÊ PERCEBE OS PADRÕES, COLOCAR TUDO NUMA SEQUÊNCIA FICA MUITO MAIS FÁCIL, VOCÊ NÃO ACHA?',
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
        texto:'QUANDO RECONHECEMOS PADRÕES, PODEMOS VER ORDEM NO CAOS. OS PADRÕES PODEM SER ENCONTRADOS EM PALAVRAS, NÚMEROS, SÍMBOLOS, HORÁRIOS, COMPORTAMENTOS E MUITO MAIS.',
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
		infografico:{titulo:'ALGORITMOS',
		tituloSimplificado:'OS ALGORITMOS',
		estiloPadrao:'basicoPaisagem',
		/** urlVideo:'',
		urlPodcast:'', **/
			cenas:[				
				{ordem:1,
				predecessor:0,
				texto:'VOCÊ SABE O QUE É UM ALGORITMO? JÁ OUVIU ESSA PALAVRA ANTES?',
				urlAudioTexto:'',
				textoSimplificado:'Algoritmos',
				urlImagem:'',
				promptImagem:'Arte digital de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*opc*/
				textoDescritivoImagem:'Pessoa pensando para tentar resolver um problema', /*opc*/},
					 
				{ordem:2,
				predecessor:1,
				texto:'OS ALGORITMOS ESTÃO EM TUDO O QUE NOS RODEIA, SÃO APLICADOS EM TUDO E SÃO USADOS EM TODA A TECNOLOGIA E EM TODAS AS DECISÕES QUE TOMAMOS DIARIAMENTE.',
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
        texto:'UM ALGORITMO É UMA INSTRUÇÃO DETALHADA, COM DIFERENTES PASSOS, OU A UMA FÓRMULA DE RESOLVER UM PROBLEMA OU COMPLETAR UMA TAREFA.',
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
        texto:'NA PROGRAMAÇÃO, OS PROGRAMADORES ESCREVEM ALGORITMOS QUE DÃO ORDENS AO COMPUTADOR PARA QUE ESTE REALIZE UMA DETERMINADA TAREFA.',
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
        texto:'MAS OS ALGORITMOS NÃO SERVEM SOMENTE PARA OS PROGRAMADORES E COMPUTADORES.',
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
        texto:'UMA RECEITA DE CULINÁRIA É UM ALGORITMO, O PROCESSO DE DOBRAR UMA CAMISA OU UM PAR DE CALÇAS TAMBÉM É UM ALGORITMO.',
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
        texto:'ATÉ MESMO A ROTINA MATINAL PODE SER CONSIDERADA UM ALGORITMO!',
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
        texto:'E VOCÊ PODE CRIAR ALGORITMOS PARA AS MAIS DIVERSAS TAREFAS DO SEU DIA. SEJA PARA VOCÊ OU OUTRA PESSOA EXECUTAR.',
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
        texto:'MAS FIQUE ATENTO: SE VOCÊ ESTÁ CRIANDO UM ALGORITMO PARA QUE OUTRA PESSOA EXECUTE, VOCÊ PRECISA DEIXAR SUAS INSTRUÇÕES O MAIS ESPECÍFICAS POSSÍVEL.',
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
        texto:'OS COMPUTADORES E AS OUTRAS PESSOAS NÃO SABEM QUAIS AS SUAS INTENÇÕES E PENSAMENTOS, VEJA O EXEMPLO DO ALGORITMO PARA BEBER UM COPO DE LEITE:',
        urlAudioTexto:'',
        textoSimplificado:'Algoritmo para beber leite',
        urlImagem:'',
        promptImagem:'Arte digital mostrando uma bancada em uma cozinha e um copo cheio de leite em cima da bancada', /*opc*/
        textoDescritivoImagem:'Copo de leite em cima de uma bancada', /*opc*/},
  
        {ordem:11,
        predecessor:10,
        texto:'PASSO 1: PEGAR UM COPO DO ARMÁRIO;',
        urlAudioTexto:'',
        textoSimplificado:'Passo 1',
        urlImagem:'',
        promptImagem:'Arte digital de um armário e uma mão pegando um copo de vidro', /*opc*/
        textoDescritivoImagem:'Mão pegando um copo', /*opc*/},
  
        {ordem:12,
        predecessor:11,
        texto:'PASSO 2: COLOCAR O COPO EM CIMA DA MESA;',
        urlAudioTexto:'',
        textoSimplificado:'Passo 2',
        urlImagem:'',
        promptImagem:'Arte digital de uma mão colocando um copo de vidro em cima de uma bancada em uma cozinha', /*opc*/
        textoDescritivoImagem:'Mão colocando um copo na bancada', /*opc*/},
  
        {ordem:13,
        predecessor:12,
        texto:'PASSO 3: PEGAR O LEITE DA GELADEIRA;',
        urlAudioTexto:'',
        textoSimplificado:'Passo 3',
        urlImagem:'',
        promptImagem:'Arte digital de uma geladeira aberta, mostrando uma mão retirando uma caixa de leite de dentro dela', /*opc*/
        textoDescritivoImagem:'Mão pegando o leite da geladeira', /*opc*/},
  
        {ordem:14,
        predecessor:13,
        texto:'PASSO 4: COLOCAR O LEITE DENTRO DO COPO QUE ESTÁ EM CIMA DA MESA;',
        urlAudioTexto:'',
        textoSimplificado:'Passo 4',
        urlImagem:'',
        promptImagem:'Arte digital de uma mão despejando leite de uma caixa dentro de um copo de vidro que está em cima de uma bancada em uma cozinha', /*opc*/
        textoDescritivoImagem:'Mão colocando o leite dentro do copo', /*opc*/},
  
        {ordem:15,
        predecessor:14,
        texto:'PASSO 5: BEBER O LEITE QUE ESTÁ NO COPO.',
        urlAudioTexto:'',
        textoSimplificado:'Passo 5',
        urlImagem:'',
        promptImagem:'Arte digital de uma crinça bbendo leite de dentro de um copo de vidro', /*opc*/
        textoDescritivoImagem:'Criança bebendo o leite', /*opc*/},
  
        {ordem:16,
        predecessor:15,
        texto:'IMAGINE SE NÃO ESTIVESSE ESPECIFICADO QUE O LEITE PRECISA IR DENTRO DO COPO? CERTAMENTE ELE IRIA PARAR NO CHÃO!',
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
        texto:'ENTÃO, OS ALGORITMOS NOS AJUDAM A PARTIR PROBLEMAS GRANDES E COMPLEXOS EM PROBLEMAS MENORES E MAIS FÁCEIS DE RESOLVER.',
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
        texto:'COM OS ALGORITMOS, PODEMOS TRANFORMAR SOLUÇÕES DE PROBLEMAS EM PASSOS CLAROS E BEM DEFINIDOS, QUE PODEM SER SEGUIDOS POR QUALQUER MÁQUINA OU PESSOA.',
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
    infografico:{titulo:'ROBÔS',
    tituloSimplificado:'ROBÔS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'HOJE VAMOS CONHECER O MUNDO DOS ROBÔS, QUE SÃO MÁQUINAS INCRÍVEIS E FASCINANTES.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_1.jpeg',
        promptImagem:'Robôs engraçados em 3d', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:2,
        predecessor:1,
        texto:'OS ROBÔS SÃO CRIADOS PELOS SERES HUMANOS PARA NOS AJUDAR EM DIVERSAS TAREFAS E TORNAR NOSSAS VIDAS MAIS FÁCEIS E ATÉ MESMO MAIS DIVERTIDAS.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_2.jpeg',
        promptImagem:'Robô engraçado 3D construindo outro robô', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:3,
        predecessor:2,
        texto:'MAS O QUE É UM ROBÔ?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_3.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'O QUE SÃO ROBÔS?',
        promptImagem:'Robô engraçado 3D confuso com pontos de interrogação flutuando ao seu redor', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
        
        {ordem:4,
        predecessor:3,
        texto:'UM ROBÔ É UMA MÁQUINA ESPECIAL QUE PODE FAZER COISAS DIFERENTES SEM A AJUDA DIRETA DE UMA PESSOA.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_4.jpeg',
        promptImagem:'Robô engraçado 3D acenando com a mão', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:5,
        predecessor:4,
        texto:'OS ROBÔS PODEM TER CORPOS FEITOS DE METAL, PLÁSTICO OU OUTROS MATERIAIS E GERALMENTE POSSUEM SENSORES PARA AJUDÁ-LOS A "ENTENDER" O MUNDO AO SEU REDOR.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_5.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'OS ROBÔS SÃO MÁQUINAS QUE PODEM EXECUTAR DIFERENTES TAREFAS.',
        promptImagem:'Robô engraçado 3D explorando outros planetas', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:6,
        predecessor:5,
        texto:'EXISTEM MUITOS TIPOS DIFERENTES DE ROBÔS. ALGUNS TÊM BRAÇOS E PERNAS COMO OS HUMANOS, ENQUANTO OUTROS TÊM RODAS OU ATÉ MESMO ASAS!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_6.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'EXISTEM ROBÔS PARECIDOS COM OS HUMANOS E ROBÔS BEM DIFERENTES.',
        promptImagem:'Robô humanóide 3D engraçado andando na rua', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:7,
        predecessor:6,
        texto:'ALGUNS ROBÔS SÃO USADOS EM FÁBRICAS PARA AJUDAR A CONSTRUIR CARROS, BRINQUEDOS E OUTRAS COISAS QUE USAMOS TODOS OS DIAS.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_7.jpeg',
        promptImagem:'Robôs engraçados 3D construindo um carro', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:8,
        predecessor:7,
        texto:'OUTROS ROBÔS SÃO USADOS EM HOSPITAIS PARA AJUDAR OS MÉDICOS A FAZEREM CIRURGIAS COM PRECISÃO OU PARA CUIDAR DAS PESSOAS QUANDO ESTÃO DOENTES.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_8.jpeg',
        promptImagem:'Robô cirurgião 3d engraçado andando em um hospital', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:9,
        predecessor:8,
        texto:'ALÉM DISSO, EXISTEM ROBÔS QUE PODEMOS PROGRAMAR PARA FAZER TAREFAS ESPECÍFICAS. ISSO SIGNIFICA QUE PODEMOS DAR INSTRUÇÕES A ELES E ELES AS SEGUIRÃO.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_9.jpeg',
        promptImagem:'Robô engraçado 3D empurrando um carrinho cheio de compras', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:10,
        predecessor:9,
        texto:'É COMO SE ELES TIVESSEM UM CÉREBRO QUE PODEMOS CONTROLAR!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_10.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ROBÔS TEM CÉREBRO?',
        promptImagem:'robô engraçado 3d pensando', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:11,
        predecessor:10,
        texto:'OS ROBÔS SÃO PROGRAMADOS USANDO CÓDIGOS E COMANDOS ESPECIAIS. É COMO ENSINAR UM ROBÔ A FAZER ALGO.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_11.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'OS ROBÔS SÃO MÁQUINAS, ENTÃO PRECISAM SER PROGRAMADOS.',
        promptImagem:'Robô engraçado 3D ao lado de um computador, ouvindo o que o computador tem a dizer', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:12,
        predecessor:11,
        texto:'POR EXEMPLO, PODEMOS PROGRAMAR UM ROBÔ PARA DESENHAR FIGURAS OU JOGAR UM JOGO CONOSCO. É MUITO DIVERTIDO!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_12.jpeg',
        promptImagem:'Desenho engraçado de robô 3D com um lápis', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:13,
        predecessor:12,
        texto:'É IMPORTANTE LEMBRAR QUE OS ROBÔS SÃO APENAS MÁQUINAS E NÃO TÊM SENTIMENTOS COMO OS SERES HUMANOS. ELES SEGUEM NOSSAS INSTRUÇÕES, MAS NÃO PODEM PENSAR OU SENTIR COMO NÓS.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_13.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'OS ROBÔS NÃO PENSAM, APENAS SEGUEM AS ORDENS QUE DAMOS.',
        promptImagem:'Robô engraçado 3D olhando para um computador, como se estivesse esperando que ele dissesse algo', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:14,
        predecessor:13,
        texto:'A TECNOLOGIA DOS ROBÔS ESTÁ SEMPRE EVOLUINDO, E NO FUTURO, ELES PODERÃO FAZER COISAS AINDA MAIS INCRÍVEIS.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_14.jpeg',
        promptImagem:'Robô engraçado 3D dirigindo um carro', /*opc*/
        textoDescritivoImagem:'', /*opc*/},

        {ordem:15,
        predecessor:14,
        texto:'AGORA, QUE TAL EXPLORARMOS MAIS SOBRE OS ROBÔS E SUAS INCRÍVEIS CAPACIDADES?',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robos/robos_15.jpeg',
        promptImagem:'robôs engraçados 3d', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
        ]}},
    
      licao7:{/** padroesCurriculares: 
      titulo:'Lição 07. Robópolis.',**/
      infografico:{titulo:'ROBÓPOLIS',
      tituloSimplificado:'ROBÓPOLIS',
      estiloPadrao:'basicoPaisagem',
      /** urlVideo:'',
      urlPodcast:'', **/
        cenas:[				
        {ordem:1,
        predecessor:0,
        texto:'OLÁ! HOJE VAMOS CONHECER UM PAÍS MUITO ESPECIAL.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_1.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'NO MUNDO DOS ROBÔS EXISTE UM LUGAR...',
        promptImagem:'Arte 3d de um planeta visto de longe', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:2,
        predecessor:1,
        texto:'A ROBOLÂNDIA! NESSE PAÍS INCRÍVEL SÓ VIVEM ROBÔS!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_2.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'CHAMADO “ROBOLÂNDIA”, O PÁIS DOS ROBÔS',
        promptImagem:'Arte 3d de um país visto de cima, com pelo menos quatro cidades distintas', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:3,
        predecessor:2,
        texto:'O PRIMEIRO LUGAR DA ROBOLÂNDIA QUE VAMOS CONHECER É A SUA CAPITAL, A PRINCIPAL CIDADE DO PAÍS.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_3.jpg',
        promptImagem:'Arte 3d de uma cidade futurística', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
          
        {ordem:4,
        predecessor:3,
        texto:'CHAMADA ROBÓPOLIS! EM ROBÓPOLIS, OS ROBÔS HABITANTES SÃO MUITO EMPENHADOS EM TRABALHAR PARA MANTER A CIDADE FUNCIONANDO.',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_4.jpg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'E HOJE VAMOS CONHECER A CIDADE DE ROBÓPOLIS, CAPITAL DA ROBOLÂNDIA',
        promptImagem:'Arte 3d de uma rua numa cidade futurística, habitada por robôs', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:5,
        predecessor:4,
        texto:'EM ROBÓPOLIS, OS ROBÔS HABITANTES PODEM TRABALHAR NO QUE QUISER! E NÓS VAMOS AJUDÁ-LOS A IR E VOLTAR DO TRABALHO, PARA FAZER TODAS AS SUAS TAREFAS!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_5.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'ONDE OS ROBÔS MORAM E TRABALHAM.',
        promptImagem:'Arte de diferentes robôs passando por uma rua, a caminho do trabalho, e um robô gari varrendo a calçada', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:6,
        predecessor:5,
        texto:'AH! E NÃO PODEMOS NOS ESQUECER DE MANTER A ENERGIA DA CIDADE SEMPRE LÁ NO ALTO! PARA ISSO, TODOS DEVEMOS PARTICIPAR E AJUDAR UNS AOS OUTROS!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_6.jpeg',
        textoImpresso:1,
        imagemImpresso:1,
        textoImpressoRecriado:'E COM A SUA AJUDA, ELES VÃO FAZER TODAS AS TAREFAS E MANTER A ENERGIA LÁ NO ALTO!',
        promptImagem:'Arte digital de uma pilha sendo energizada', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
  
        {ordem:7,
        predecessor:6,
        texto:'PRONTOS PARA O DESAFIO? MÃOS À OBRA!',
        urlAudioTexto:'',
        textoSimplificado:'',
        urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_7.jpg',
        promptImagem:'Arte digital de uma cidade futurística', /*opc*/
        textoDescritivoImagem:'', /*opc*/},
      ]}},
  },
  
  
  unidade2:{
	  
	  licao8:{/** padroesCurriculares: 
    titulo:'Lição 08. Laços.',**/
    infografico:{titulo:'LAÇOS',
    tituloSimplificado:'LAÇOS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'SABE QUANDO VOCÊS FAZEM ALGO VÁRIAS VEZES, COMO PULAR OU BATER PALMAS? OS COMPUTADORES TAMBÉM PODEM FAZER ISSO, E PARA ISSO ELES USAM OS LAÇOS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_1.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS LAÇOS SERVEM PARA O COMPUTADOR FAZER COISAS DE MODO REPETIDO.',
      promptImagem:'criança pulando corda, desenho animado', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'OS COMPUTADORES TÊM UMA ESPÉCIE DE "SUPER MEMÓRIA" E CONSEGUEM LEMBRAR DE COISAS MUITO BEM. QUANDO QUEREMOS QUE UM COMPUTADOR FAÇA ALGO VÁRIAS VEZES, EM VEZ DE DIZER PARA ELE FAZER A MESMA COISA DE NOVO E DE NOVO, PODEMOS USAR OS LAÇOS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'É SÓ DAR A ORDEM PARA O COMPUTADOR: FAÇA DE NOVO, E DE NOVO...',
      promptImagem:'computador desktop com o símbolo do infinito na tela, desenho animado', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'NÓS DIZEMOS AO COMPUTADOR QUANTAS VEZES ELE DEVE FAZER ALGO, E ELE CONTA AS VEZES QUE FEZ. QUANDO ATINGE O NÚMERO QUE DISSEMOS, ELE PARA DE FAZER A AÇÃO E CONTINUA COM OUTRAS COISAS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_3.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O COMPUTADOR CONTA QUANTAS VEZES PEDIMOS PARA ELE FAZER UMA AÇÃO E A REPETE NA QUANTIDADE CERTA.',
      promptImagem:'desenho animado de uma criança usando o computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'VAMOS IMAGINAR QUE VOCÊ QUER DESENHAR MUITAS CARINHAS SORRIDENTES NA TELA DO COMPUTADOR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'SE VOCÊ QUER FAZER A MESMA COISA VÁRIAS VEZES.',
      promptImagem:'desenho animado de uma tela de computador com um emoji sorridente na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'EM VEZ DE DIZER "DESENHE UMA CARINHA SORRIDENTE" DE NOVO E DE NOVO, VOCÊ PODE USAR UM LAÇO E DIZER: "DESENHE UMA CARINHA SORRIDENTE 5 VEZES!" O COMPUTADOR VAI FAZER ISSO RAPIDINHO PARA VOCÊ.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O COMPUTADOR SABE CONTAR E ENTENDE QUANDO TEM QUE FAZER A MESMA COISA VÁRIAS VEZES.',
      promptImagem:'desenho animado de um computador com cinco emojis de carinha sorridente na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'OS LAÇOS SÃO COMO TRUQUES DE REPETIÇÃO QUE AJUDAM O COMPUTADOR A SER MAIS RÁPIDO E EFICIENTE. ELES DIZEM AO COMPUTADOR: "FAÇA ISSO VÁRIAS VEZES ATÉ EU DIZER PARA PARAR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS LAÇOS FAZEM OS SEUS ALGORITMOS MAIS RÁPIDOS E PODEROSOS.',
      promptImagem:'desenho animado de um computador com um balão de fala vazio em cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'OS LAÇOS AJUDAM O COMPUTADOR A FAZER COISAS REPETITIVAS DE UM JEITO MUITO INTELIGENTE. NO FUTURO, QUANDO VOCÊ APRENDER MAIS SOBRE COMPUTAÇÃO, OS LAÇOS VÃO TE AJUDAR A FAZER COISAS INCRÍVEIS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/La%C3%A7os/loop_7.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS LAÇOS VÃO TE AJUDAR A TORNAR SEUS ALGORITMOS AINDA MAIS INCRÍVEIS!',
      promptImagem:'desenho animado que demonstre o que é internet das coisas', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
	  
    licao9:{/** padroesCurriculares: 
    titulo:'Lição 09. Numerópolis.',**/
    infografico:{titulo:'NUMERÓPOLIS',
    tituloSimplificado:'NUMERÓPOLIS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'OLÁ, VOCÊS JÁ FORAM APRESENTADOS AO MUNDO DOS ROBÔS E JÁ CONHECERAM ROBÓPOLIS, NÃO É?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_1.jpg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'HOJE VAMOS CONHECER MAIS UMA CIDADE DA ROBOLÂNDIA',
      promptImagem:'Arte digital de um planeta futurístico, mostrando diferentes cidades.', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'ÓTIMO, PORQUE HOJE TEMOS MAIS UMA CIDADE PARA VISITAR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_7.jpg',
      promptImagem:'Arte digital de uma cidade futurística vista de cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'HOJE VAMOS CONHECER NUMERÓPOLIS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_3.jpg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ESTA É NUMERÓPOLIS.',
      promptImagem:'Arte digital de uma cidade futurística', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'OS ROBÔS DE NUMERÓPOLIS FAZEM DE TUDO, SÃO GUARDAS, MOTORISTAS, FAZENDEIROS. ELES DÃO UM JEITO EM TUDO! SÓ NÃO CONSEGUEM AINDA ESCREVER, DESENHAR E PINTAR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'EM NUMERÓPOLIS, OS ROBÔS FAZEM DE TUDO PARA MANTER A ENERGIA LÁ NO ALTO...',
      promptImagem:'Arte digital de uma rua em uma cidade futurística com robôscirculando, vestidos em roupas de diferentes profissões', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'E POR AQUI, COMO O NOME DA CIDADE JÁ SUGERE, OS ROBÔS AMAM OS NÚMEROS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'E COMO O NOME SUGERE, OS ROBÔS DE NUMERÓPOLIS AMAM NÚMEROS!',
      promptImagem:'Arte digital de dois robôs sem braços conversando', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'MAS TEM UM PROBLEMA: ESTÁ UMA BAITA CONFUSÃO EM NUMERÓPOLIS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'MAS OS ROBÔS DE NUMERÓPOLIS ESTÃO COM UM BAITA PROBLEMA PARA TRANSITAR NA CIDADE.',
      promptImagem:'Arte digital de uma rua d euma cidade futurística com diversos robôs sem braços circulando, com expressões de confusão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'AS RUAS DA CIDADE NÃO TÊM PLACAS, OS ROBÔS NÃO SABEM AO CERTO PARA ONDE ESTÃO INDO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_7.jpg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'AS RUAS DA CIDADE NÃO TEM PLACAS, ENTÃO OS ROBÔS FICAM PERDIDOS!',
      promptImagem:'Arte digital e uma rua em uma cidade futurística e uma placa de trânsito com um sinal de interrogação', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'MAS OLHA QUE IDEIA GENIAL: QUE TAL PINTAR NÚMEROS NAS RUAS, JÁ QUE EM NUMERÓPOLIS TODOS ADORAM NÚMEROS?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_8.png',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'QUE TAL AJUDAR OS ROBÔS DE NUMERÓPOLIS, PROGRAMANDO A PINTURA DOS NÚMEROS NAS RUAS?',
      promptImagem:'Arte digital de uma rua em uma cidade futurística com o número dois pintado na rua', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'COM ISSO, OS ROBÔS VÃO PODER DIZER PARA QUAL RUA QUEREM IR SOMENTE FALANDO O NÚMERO DA RUA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_9.jpeg',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com diversos robôs sem braços circulando, com expressões de felicidade', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'SERÁ O FIM DA CONFUSÃO EM NUMERÓPOLIS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_3.jpg',
      promptImagem:'Arte digital de uma cidade futurística vista de cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
      
      {ordem:11,
      predecessor:10,
      texto:'O QUE VOCÊS ACHAM? SERÁ QUE CONSEGUIMOS AJUDAR OS ROBÔS DESSA CIDADE USANDO PROGRAMAÇÃO?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_11.jpg',
      promptImagem:'Arte digital de um computador com vários códigos aparecendo na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'O ROBÔ TAMBÉM VAI TER QUE SER CAPAZ DE SEGURAR UMA CANETA PARA ESSA TAREFA, NÃO É MESMO?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_12.jpeg',
      promptImagem:'Arte digital de um robô desenhista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'VAMOS VER QUE IDEIAS VOCÊS TÊM PARA FAZER ISSO ACONTECER!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Numeropolis/num_13.jpeg',
      promptImagem:'Arte digital de uma lâmpada acesa', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'VAMOS AJUDAR OS ROBÔS DE NUMERÓPOLIS? MÃOS À OBRA!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_1.jpg',
      promptImagem:'Arte digital de um planeta futurístico, mostrando diferentes cidades.', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
    
    licao10:{/** padroesCurriculares: 
    titulo:'Lição 10. Robociclagem.',**/
    infografico:{titulo:'ROBOCICLAGEM',
    tituloSimplificado:'ROBOCICLAGEM',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'OLÁ, DE NOVO! ESTAMOS DE VOLTA A ROBÓPOLIS, NESSA CIDADE ULTRA ROBOTIZADA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_3.jpg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ESTAMOS DE VOLTA A ROBÓPOLIS, ONDE TODOS OS ROBÔS AJUDAM A MANTER A CIDADE LIMPA!',
      promptImagem:'Arte digital de um planeta futurístico, mostrando diferentes cidades.', /*pode ser o mesmo dos outros infográficos*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'ROBÓPOLIS DEPENDE DA COLABORAÇÃO DE TODOS OS MORADORES PARA MANTER A ENERGIA SEMPRE LÁ NO ALTO. E ISSO TAMBÉM TEM A VER COM A LIMPEZA DA CIDADE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_2.jpeg',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com diversos robôs sem braços circulando, com expressões de felicidade', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'AQUI EM ROBÓPOLIS, TODOS COLABORAM PARA RECICLAR O LIXO E CONSERVAR A NATUREZA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_3.jpeg',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com diversos robôs sem braços circulando, com expressões de felicidade', /*pode ser uma derivação da mesma imagem da ordem 2*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'MAS ALGO DE RUIM ESTÁ ACONTECENDO, O LIXO ESTÁ SE ACUMULANDO! POR QUE SERÁ?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'MAS O LIXO ESTÁ SE ACUMULANDO. POR QUÊ?',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com lixo se acumulando pela rua', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'OPA, ACHO QUE ENCONTRAMOS O MOTIVO! O ROBÔ-RECICLADOR ESTÁ ESTRAGADO! E AGORA?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'AH, NÃO! O ROBÔ-RECICLADOR ESTÁ QUEBRADO... E AGORA?',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com um robô que parece uma escavadeira, com uma roupa de gari quebrado em um canto da rua.', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'COMO OS OUTROS ROBÔS NÃO SABEM RECICLAR LIXO, ELES PRECISAM SER PROGRAMADOS PARA FAZER TODAS AS ETAPAS, ENQUANTO O ROBÔ-RECICLADOR ESTÁ SENDO CONSERTADO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'COMO OS OUTROS ROBÔS NÃO SABEM RECICLAR O LIXO, VOCÊ TERÁ QUE CRIAR UM PROGRAMA PARA AJUDAR A CIDADE.',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com robôs circulando, com expressão de confusão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'A PRIMEIRA ETAPA É A CHAMADA “COLETA SELETIVA”, QUE É SEPARAR DIFERENTES TIPOS DE LIXO EM DIFERENTES LIXEIRAS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_7.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A PRIMEIRA ETAPA É SEPARAR DIFERENTES TIPOS DE LIXO EM LIXEIRAS DIFERENTES.',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com as quatro lixeiras de reciclagem enfileiradas', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'A SEGUNDA ETAPA É TRANSPORTAR OS LIXOS DEVIDAMENTE SEPARADOS EM CASA, PARA UM LOCAL QUE TENHA MÁQUINAS DE RECICLAGEM.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_8.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A SEGUNDA ETAPA É LEVAR TUDO PARA O CENTRO DE RECICLAGEM.',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com uma grande fábrica de reciclagem', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'E, FINALMENTE, NA TERCEIRA ETAPA ESSAS MÁQUINAS TRANSFORMAM CADA TIPO DE LIXO EM UM NOVO PRODUTO QUE PODE SER USADO NOVAMENTE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_9.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NA TERCEIRA ETAPA, O QUE ANTES ERA LIXO VIRA UM PRODUTO NOVO!',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com dois robôs circulando com produtos reciclados', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'ESTÁ FEITA A RECICLAGEM! O LIXO AGORA NÃO FICA ACUMULANDO POR AÍ, PREJUDICANDO A NATUREZA...',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_10.jpeg',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com um grande símbolo de reciclagem em verde', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'NOSSA, COMO O ROBÔ-RECICLADOR FAZ FALTA NÃO?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_11.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O ROBÔ-RECICLADOR FAZ MUITA FALTA, NÃO É?',
      promptImagem:'Arte digital de uma rua de uma cidade futurística com um robô com expressão de que está sentindo falta de alguma coisa', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'MAS ENQUANTO ELE ESTÁ FORA DE OPERAÇÃO, NÃO TEM OUTRO JEITO: ROBÓPOLIS PRECISA CONTAR COM VOCÊS E COM SUA HABILIDADE DE PROGRAMAÇÃO! VAMOS SOCORRER OS ROBÔS NOVAMENTE?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robociclagem/robocicl_12.jpeg',
      promptImagem:'Arte digital de uma rua de uma cidade futurística bem limpa', /*pode ser alguma variação de outras do mesmo infográfico*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
    
    licao11:{},
    
    licao12:{},
   
    licao13:{},
   
    licao14:{/** padroesCurriculares: 
    titulo:'Lição 14. Eventos.',**/
    infografico:{titulo:'EVENTOS',
    tituloSimplificado:'EVENTOS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'VOCÊ SABIA QUE MUITAS COISAS QUE ACONTECEM À NOSSA VOLTA PODEM SER CONSIDERADAS EVENTOS?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_1.jpeg',
      promptImagem:'Quadrinhos de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*pode ser a mesma já utilizada antes*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'UM EVENTO É ALGO QUE ACONTECE EM UM DETERMINADO MOMENTO E LUGAR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'UM EVENTO É ALGO QUE ACONTECE EM UM DETERMINADO MOMENTO E LUGAR.',
      promptImagem:'Quadrinhos de uma nuvem de chuva', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'POR EXEMPLO, ACORDAR DE MANHÃ, ESCOVAR OS DENTES, TOMAR O CAFÉ DA MANHÃ E IR PARA A ESCOLA SÃO EVENTOS QUE OCORREM TODOS OS DIAS EM NOSSAS VIDAS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_3.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS PODEM SER COISAS QUE ACONTECEM TODOS OS DIAS...',
      promptImagem:'Quadrinhos de um personagem em frente a um espelho, escovando os dentes', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'ATÉ MESMO CELEBRAR UM ANIVERSÁRIO OU ASSISTIR A UM FILME SÃO EVENTOS ESPECIAIS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OU COISAS ESPECIAIS.',
      promptImagem:'uma criança soprando velas de um bolo de aniversário, quadrinhos', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'E VOCÊS SABIAM QUE OS PROGRAMAS DE COMPUTADORES TAMBÉM ENTENDEM EVENTOS?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS ESTÃO ATÉ NOS COMPUTADORES!',
      promptImagem:'quadrinhos de um computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'ELES SÃO PROGRAMADOS PARA REALIZAR AÇÕES QUANDO CERTOS EVENTOS ACONTECEM.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS PODEM SER PROGRAMADOS.',
      promptImagem:'quadrinhos de um computador com vários códigos saindo da tela', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'POR EXEMPLO, QUANDO VOCÊ CLICA EM UM BOTÃO EM UM JOGO, ISSO É UM EVENTO PARA O COMPUTADOR E ELE PODE RESPONDER MOSTRANDO UMA ANIMAÇÃO OU FAZENDO UM SOM.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_7.jpeg',
      promptImagem:'quadrinhos de uma criança jogando videogame', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'OS EVENTOS NA COMPUTAÇÃO PODEM SER MUITOS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_8.jpeg',
      promptImagem:'um computador desktop com código flutuando, quadrinhos', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'POR EXEMPLO, QUANDO VOCÊ TOCA A TELA DE UM TABLET, ISSO É UM EVENTO DE TOQUE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_9.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'TOCAR NA TELA DO TABLET É UM EVENTO.',
      promptImagem:'uma pessoa usando um tablet, quadrinhos', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'QUANDO VOCÊ APERTA UMA TECLA EM UM TECLADO, ISSO É UM EVENTO DE TECLADO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_10.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'APERTAR UMA TECLA NO TECLADO É UM EVENTO.',
      promptImagem:'uma pessoa apertando uma tecla em um teclado de computador, quadrinhos', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'OS COMPUTADORES ESTÃO SEMPRE PRONTOS PARA DETECTAR ESSES EVENTOS E TOMAR AÇÕES COM BASE NELES.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_11.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'TODO EVENTO DE COMPUTADOR TERÁ UMA REAÇÃO.',
      promptImagem:'um computador desktop com código flutuando, quadrinhos', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'QUANDO VOCÊ PRESSIONA UM BOTÃO PARA PULAR EM UM JOGO, O PERSONAGEM PULA!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_12.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NOS JOGOS TAMBÉM PODEMOS PERCEBER OS EVENTOS.',
      promptImagem:'quadrinhos de uma criança jogando videogame', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'ISSO ACONTECE PORQUE O COMPUTADOR ENTENDEU O EVENTO DO BOTÃO SENDO PRESSIONADO E TOMOU A AÇÃO DE FAZER O PERSONAGEM PULAR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_13.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NO JOGO, CADA EVENTO TERÁ UMA REAÇÃO TAMBÉM.',
      promptImagem:'um computador desktop com código flutuando, quadrinhos', /*pode ser alguma já utilizada*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'OS EVENTOS ESTÃO POR TODA PARTE, DESDE AS COISAS QUE FAZEMOS QUANDO ACORDAMOS ATÉ AS AÇÕES QUE TOMAMOS COM A AJUDA DE DISPOSITIVOS ELETRÔNICOS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Eventos/ev_14.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS EVENTOS ESTÃO EM TODA PARTE!',
      promptImagem:'um computador desktop, um tablet, um celular, um videogame e uma TV, quadrinhos', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
	  
  },
  
   
  unidade3:{
	  
    licao15:{},
   
    licao16:{/** padroesCurriculares: 
    titulo:'Lição 16. Senhas e Segurança',**/
    infografico:{titulo:'SENHAS E SEGURANÇA',
    tituloSimplificado:'SENHAS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'HOJE VAMOS FALAR SOBRE ALGO MUITO IMPORTANTE: SENHAS E SEGURANÇA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_1.jpeg',
      promptImagem:'Arte digital de um cadeado fechado e vários asteriscos voando em torno dele', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'VOCÊS SABIAM QUE EXISTEM MANEIRAS DE PROTEGER NOSSAS INFORMAÇÕES E MANTER NOSSOS DISPOSITIVOS SEGUROS?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'PODEMOS PROTEGER NOSSOS DISPOSITIVOS.',
      promptImagem:'Arte digital de um cadeado em forma de escudo medieval com um notebook logo atrás, algumas nuvens e ícones de correspondência', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'PODEMOS FAZER ISSO COM SENHAS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_3.png',
      promptImagem:'Arte digital de uma tela de programa com um cadeado bem em cima', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'UMA SENHA É UMA SEQUÊNCIA DE LETRAS, NÚMEROS OU SÍMBOLOS QUE USAMOS PARA ACESSAR COISAS IMPORTANTES, COMO NOSSOS DISPOSITIVOS ELETRÔNICOS, CONTAS DE E-MAIL, JOGOS E MUITO MAIS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O QUE É UMA SENHA?',
      promptImagem:'Arte digital de uma box para digitar com vários asteriscos e um cadeado atrás', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'A SENHA É COMO UMA CHAVE SECRETA QUE APENAS NÓS DEVEMOS SABER.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A SENHA É COMO UMA CHAVE SECRETA.',
      promptImagem:'Arte digital colorida de um código secreto', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'AGORA, POR QUE É IMPORTANTE TER UMA SENHA FORTE?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A SENHA PRECISA SER FORTE.',
      promptImagem:'Arte digital colorida de um braço forte segurando um cadeado', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'É PORQUE QUEREMOS MANTER NOSSAS COISAS SEGURAS E PROTEGIDAS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_7.jpeg',
      promptImagem:'Arte digital de um laptop com correntes passando por sua tela e um cadeado trancando essas correntes', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'ASSIM COMO USAMOS UMA CHAVE PARA TRANCAR UMA PORTA, USAMOS UMA SENHA PARA "TRANCAR" NOSSOS DISPOSITIVOS E CONTAS PARA QUE APENAS NÓS POSSAMOS ACESSÁ-LOS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_8.jpeg',
      promptImagem:'Arte digital de uma tranca de uma porta com uma chave', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'POR ISSO, AS SENHAS SEMPRE DEVEM SER “FORTES”, OU SEJA, SUA SENHA DEVE SER ÚNICA E VOCÊ NÃO DEVE USAR A MESMA SENHA PARA TUDO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_9.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'UMA SENHA FORTE É ÚNICA...',
      promptImagem:'Arte digital colorida de um cadeado dourado com uma chave e vários outros cadeados prateados em volta', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'SE ALGUÉM DESCOBRIR SUA SENHA, NÃO QUEREMOS QUE ELA TENHA ACESSO A TODAS AS SUAS COISAS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_10.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'... E DÍFICIL DE ADIVINHAR.',
      promptImagem:'Arte digital de uma caixa de papelão aberta na parte de cima, com vários ícones de envelopes, chaves, balões de conversa saltando de dentro dela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'QUANTO MAIS COMPLEXA A SENHA, MAIS DIFÍCIL SERÁ PARA ALGUÉM DESCOBRI-LA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_11.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'QUANTO MAIS FORTE A SENHA, MAIS PROTEGIDO VOCÊ ESTÁ.',
      promptImagem:'Arte digital de personagem hackeando um computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'ASSIM COMO VOCÊ NÃO EMPRESTA A CHAVE DA SUA CASA, VOCÊ NÃO DEVE COMPARTILHAR A SUA SENHA COM NINGUÉM, EXCETO COM SEUS PAIS OU RESPONSÁVEIS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_12.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NÃO COMPARTILHE SUAS SENHAS!',
      promptImagem:'Arte digital de uma mão entregando uma chave para outra mão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'MANTER A SENHA EM SEGREDO É UMA MANEIRA IMPORTANTE DE PROTEGER SUAS INFORMAÇÕES PESSOAIS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_13.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'SUA SENHA É SECRETA.',
      promptImagem:'Arte digital de um rosto com um dedo em frente à boca, fazendo sinal de segredo', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:14,
      predecessor:13,
      texto:'ALÉM DAS SENHAS, É IMPORTANTE MANTER SEUS DISPOSITIVOS PROTEGIDOS. ISSO SIGNIFICA NÃO OS DEIXAR DESBLOQUEADOS OU SEM SUPERVISÃO PARA QUE OUTRAS PESSOAS NÃO POSSAM ACESSÁ-LOS SEM SUA PERMISSÃO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_14.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NÃO DEIXE SEUS DISPOSITIVOS DESBLOQUEADOS.',
      promptImagem:'Arte digital colorida de um ladrão carregando um laptop', /*pode ser uma variação do que já foi usado anteriormente*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:15,
      predecessor:14,
      texto:'E SE VOCÊ RECEBER UMA MENSAGEM ESTRANHA PEDINDO SUA SENHA OU INFORMAÇÕES PESSOAIS, NUNCA RESPONDA. SEMPRE PEÇA AJUDA A UM ADULTO RESPONSÁVEL.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_15.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'CUIDADO COM MENSAGENS ESTRANHAS.',
      promptImagem:'Arte digital de um laptop com um envelope bem na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:16,
      predecessor:15,
      texto:'A SEGURANÇA É MUITO IMPORTANTE QUANDO SE TRATA DE SENHAS E DISPOSITIVOS ELETRÔNICOS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_16.jpeg',
      promptImagem:'Arte digital colorida de um smatphone com um cadeado dourado na tela', /*pode ser uma variação da já usada anteriormente*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:17,
      predecessor:16,
      texto:'QUEREMOS PROTEGER NOSSAS INFORMAÇÕES PESSOAIS E MANTER TUDO SEGURO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_17.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'VAMOS NOS PROTEGER!',
      promptImagem:'arte digital colorida que retrata a segurança cibernética', /*pode ser uma variação da já usada anteriormente*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:18,
      predecessor:17,
      texto:'VAMOS APRENDER E MANTER NOSSOS DISPOSITIVOS E INFORMAÇÕES PROTEGIDOS JUNTOS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Senhas_seg/seg_18.jpeg',
      promptImagem:'Arte digital de um smatphone com um cadeado dourado na tela', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
    licao17:{/** padroesCurriculares: 
    titulo:'Lição 17. Condicionais.',**/
    infografico:{titulo:'CONDICIONAIS',
    tituloSimplificado:'CONDICIONAIS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'VOCÊ JÁ OUVIU A PALAVRA “CONDIÇÃO”? E “CONDICIONAIS”? VAMOS APRENDER UM POUCO SOBRE ISSO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_1.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'O QUE É UMA CONDICIONAL?',
      promptImagem:'pintura de uma pessoa pensando, com vários pontos de interrogação ao seu redor', /*pode ser usada alguma variação de outra imagem já pronta*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'AS CONDICIONAIS NOS AJUDAM A ENTENDER COMO AS COISAS PODEM SER DIFERENTES DEPENDENDO DE CERTAS CONDIÇÕES.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_2.jpeg',
      promptImagem:'pintura de uma pessoa pensando no que comer, com um prato de macarrão e um hambúrguer na mesa em frente', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'VAMOS IMAGINAR QUE VOCÊS QUEREM IR BRINCAR NO PARQUE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_3.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'IMAGINE QUE VOCÊ QUER IR BRINCAR NO PARQUE.',
      promptImagem:'pintura de um parque com sol', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'MAS ANTES DE SAIR DE CASA, VOCÊS PRECISAM VERIFICAR SE ESTÁ CHOVENDO LÁ FORA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ANTES DE SAIR, PRECISA VERIFICAR SE ESTÁ CHOVENDO.',
      promptImagem:'pintura de uma nuvem chovendo', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'ENTÃO A CONDICIONAL SERIA: <code><b>SE</b> ESTIVER CHOVENDO <br/>&nbsp;&nbsp;<b>ENTÃO</b> VAMOS BRINCAR DENTRO DE CASA <br/><b>SE</b> NÃO ESTIVER CHOVENDO <br/>&nbsp;&nbsp;<b>ENTÃO</b> PODEMOS IR BRINCAR NO PARQUE</code>',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'SE CHUVA = VERDADEIRO, ENTÃO BRINCAR DENTRO DE CASA. SENÃO, BRINCAR NO PARQUE.',
      promptImagem:'pintura de uma nuvem de chuva e um sol do outro lado', /*pode ser uma variação da outra*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'VEJAM COMO ESSA CONDICIONAL NOS AJUDA A TOMAR UMA DECISÃO COM BASE NA CONDIÇÃO DO TEMPO. É COMO UMA REGRA QUE NOS GUIA!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A DECISÃO É TOMADA COM BASE NA CONDIÇÃO.',
      promptImagem:'pintura de uma pessoa parada em frente a dois caminhos diferentes na floresta', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'VIRAM COMO AS CONDICIONAIS NOS AJUDAM A ENTENDER O QUE VAI ACONTECER COM BASE EM CERTAS CONDIÇÕES?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_7.jpeg',
      promptImagem:'pintura de uma pessoa pensando com o dedo na testa', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'ELAS NOS AJUDAM A TOMAR DECISÕES E A ENTENDER AS CONSEQUÊNCIAS DE NOSSAS AÇÕES.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_8-2.jpeg',
      promptImagem:'pintura de uma criança do sexo feminino pensando em qual brinquedo vai brincar, com um ursinho de pelúcia e um trem de madeira na sua frente', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'E SABEM O QUE MAIS É LEGAL? AS CONDICIONAIS TAMBÉM SÃO USADAS NA PROGRAMAÇÃO DE COMPUTADORES!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_9.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'AS CONDICIONAIS TAMBÉM SÃO USADAS NA PROGRAMAÇÃO DE COMPUTADORES.',
      promptImagem:'pintura de programação de computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'OS COMPUTADORES PODEM SEGUIR INSTRUÇÕES COM BASE EM CONDIÇÕES QUE PROGRAMAMOS PARA ELES. É COMO SE ELES TIVESSEM REGRAS PRÓPRIAS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_10.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS COMPUTADORES PODEM SEGUIR INSTRUÇÕES COM BASE EM CONDIÇÕES QUE PROGRAMAMOS PARA ELES.',
      promptImagem:'pintura de um computador com diferentes símbolos de cheque e proibido flutuando', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'POR EXEMPLO, SE VOCÊS ESTIVEREM JOGANDO UM JOGO E O PERSONAGEM CHEGAR A UMA PAREDE, VOCÊS PODEM PROGRAMAR O JOGO PARA QUE O PERSONAGEM MUDE DE DIREÇÃO E CONTINUE SE MOVENDO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_11.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'SE VOCÊ ESTIVER JOGANDO UM JOGO E O PERSONAGEM CHEGAR A UMA PAREDE, VOCÊ PODE PROGRAMAR O JOGO PARA QUE O PERSONAGEM MUDE DE DIREÇÃO E CONTINUE SE MOVENDO.',
      promptImagem:'pintura de um jovem tocando uma parede com a mão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'A CONDICIONAL SERIA: <code><b>SE</b> O PERSONAGEM ENCONTRAR UMA PAREDE <br/>&nbsp;&nbsp;<b>ENTÃO</b> ELE DEVE MUDAR DE DIREÇÃO E CONTINUAR SE MOVENDO</code>',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_12.jpeg',
      promptImagem:'pintura de um jovem tocando uma parede com a mão', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'AS CONDICIONAIS PODEM SER USADAS DE MANEIRAS DIVERTIDAS E INTERESSANTES, NÃO É MESMO? ELAS NOS AJUDAM A TOMAR DECISÕES E A ENTENDER COMO AS COISAS FUNCIONAM.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Condicionais/cond_13.jpeg',
      promptImagem:'pintura de um jovem pensando em um parque', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

    ]}},
   
    licao18:{},
  
    licao19:{/** padroesCurriculares: 
    titulo:'Lição 19. Depuração.',**/
    infografico:{titulo:'DEPURAÇÃO',
    tituloSimplificado:'DEPURAÇÃO',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'HOJE VAMOS APRENDER SOBRE ALGO MUITO IMPORTANTE CHAMADO "DEPURAÇÃO", OU "DEBUGGING".',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_1.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'HOJE VAMOS APRENDER SOBRE "DEPURAÇÃO", OU "DEBUGGING".',
      promptImagem:'lupa de arte digital sobre um laptop', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'UM BUG, DO INGLÊS "BICHO", É UM PROBLEMA QUE ACONTECE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'UM BUG, DO INGLÊS "BICHO", É UM PROBLEMA QUE ACONTECE.',
      promptImagem:'um bug robótico 3D andando sobre um laptop em um fundo futurista e colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'QUANDO ALGO NÃO ESTÁ FUNCIONANDO COMO ESPERADO, PRECISAMOS ENCONTRAR A CAUSA DO PROBLEMA E RESOLVÊ-LO. É COMO SER UM DETETIVE QUE SOLUCIONA MISTÉRIOS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_3-2.jpeg',
      promptImagem:'investigador em um fundo colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'IMAGINE UM QUEBRA-CABEÇA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_4-2.jpeg',
      promptImagem:'peças de um quebra-cabeça espalhadas por uma mesa em um fundo colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'SE VOCÊS ESTIVEREM MONTANDO UM QUEBRA-CABEÇA E PERCEBEREM QUE UMA PEÇA NÃO SE ENCAIXA CORRETAMENTE, VOCÊS PRECISAM DESCOBRIR ONDE A PEÇA ERRADA ESTÁ E ENCONTRAR A PEÇA CORRETA PARA COLOCAR NO LUGAR.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_5.jpeg',
      promptImagem:'Arte digital de um quebra cabeças iniciado, que mostra a imagem de um robô engraçado, mas ainda faltando algumas peças para terminar', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'ESSA PEÇA INCORRETA É UM BUG E É PRECISO DEPURAR A SITUAÇÃO, ENCONTRAR O BUG E CORRIGI-LO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_6.jpeg',
      promptImagem:'uma lupa 3D sobre um laptop em um fundo futurista e colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'A DEPURAÇÃO NOS AJUDA A SOLUCIONAR PROBLEMAS E ENCONTRAR SOLUÇÕES. É UM PROCESSO DE INVESTIGAÇÃO PARA DESCOBRIR O QUE ESTÁ ERRADO E CORRIGIR O PROBLEMA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_7.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A DEPURAÇÃO É UM PROCESSO DE INVESTIGAÇÃO PARA DESCOBRIR O QUE ESTÁ ERRADO E CORRIGIR O PROBLEMA.',
      promptImagem:'arte digital de um investigador robótico procurando bugs na tela de um computador em um fundo colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'A DEPURAÇÃO TAMBÉM É USADA NA PROGRAMAÇÃO DE COMPUTADORES.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_8.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'E TAMBÉM É USADA NA PROGRAMAÇÃO DE COMPUTADORES.',
      promptImagem:'arte digital de um computador com código flutuando em um fundo colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'QUANDO OS PROGRAMADORES ESCREVEM CÓDIGOS PARA CRIAR JOGOS OU APLICATIVOS, ÀS VEZES SURGEM ERROS OU BUGS. É COMO UM QUEBRA-CABEÇA QUE PRECISA SER RESOLVIDO!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_9.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'QUANDO OS PROGRAMADORES ESCREVEM CÓDIGOS PARA CRIAR JOGOS OU APLICATIVOS, ÀS VEZES SURGEM ERROS OU BUGS.',
      promptImagem:'Arte digital de programação de computadores', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'OS PROGRAMADORES USAM A DEPURAÇÃO PARA ENCONTRAR E CORRIGIR ESSES ERROS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_10-2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS PROGRAMADORES USAM A DEPURAÇÃO PARA ENCONTRAR E CORRIGIR ESSES ERROS.',
      promptImagem:'arte digital de depuração de computador', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'ELES EXAMINAM O CÓDIGO CUIDADOSAMENTE, TESTAM DIFERENTES PARTES E FAZEM ALTERAÇÕES ATÉ QUE TUDO FUNCIONE CORRETAMENTE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_11.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ELES EXAMINAM O CÓDIGO CUIDADOSAMENTE, TESTAM DIFERENTES PARTES E FAZEM ALTERAÇÕES ATÉ QUE TUDO FUNCIONE CORRETAMENTE.',
      promptImagem:'digital art of pair programming in a colorful background', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:11,
      texto:'A DEPURAÇÃO É UMA HABILIDADE IMPORTANTE QUE NOS AJUDA A RESOLVER PROBLEMAS E ENCONTRAR SOLUÇÕES.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_12.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'A DEPURAÇÃO É UMA HABILIDADE IMPORTANTE QUE NOS AJUDA A RESOLVER PROBLEMAS E ENCONTRAR SOLUÇÕES.',
      promptImagem:'arte digital de resolução de problemas em um fundo colorido', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:13,
      predecessor:12,
      texto:'VAMOS CONTINUAR APRENDENDO E VOCÊS SE TORNARÃO VERDADEIROS DETETIVES DA SOLUÇÃO DE PROBLEMAS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Depura%C3%A7%C3%A3o/dep_13-2.jpeg',
      promptImagem:'arte digital de um investigador robótico procurando bugs na tela de um computador em um fundo colorido', /*opc*/
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
    infografico:{titulo:'O TRÂNSITO EM ROBÓPOLIS',
    tituloSimplificado:'TRÂNSITO',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'OLÁ! ESTAMOS DE VOLTA A ROBÓPOLIS...',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Robopolis/rob_3.jpg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ESTAMOS DE VOLTA A ROBÓPOLIS.',
      promptImagem:'Arte digital de uma cidade futurística', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'NOSSA MISSÃO DE HOJE É AJUDAR OS NOSSOS AMIGOS DA CIDADE.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Transito_rob/transit_2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'E HOJE VAMOS AJUDAR OS ROBÔS DA CIDADE NOVAMENTE.',
      promptImagem:'rua colorida e futurística com robôs engraçados andando por ela com expressão feliz', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'COMO OS ROBÔS DE ROBÓPOLIS NÃO ANDAM MUITO RÁPIDO, ELES QUEREM ANDAR DE CARRO. MAS NÃO CONHECEM AS REGRAS DE TRÂNSITO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Transito_rob/transit_3.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'OS ROBÔS QUEREM ANDAR DE CARRO PELA CIDADE, MAS NÃO CONHECEM AS REGRAS DE TRÂNSITO.',
      promptImagem:'um robô 3D engraçado dirigindo um carro em uma rua colorida e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'PARA DIRIGIR COM SEGURANÇA, ELES PRECISAM CONHECER O QUE SIGNIFICA CADA COR QUE APARECE NOS SEMÁFOROS, AQUELES SINAIS QUE CONTROLAM O TRÂNSITO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Transito_rob/transit_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'PARA DIRIGIR COM SEGURANÇA, ELES PRECISAM CONHECER O QUE SIGNIFICA CADA COR QUE APARECE NOS SEMÁFOROS.',
      promptImagem:'uma rua colorida e futurista mostrando um grande semáforo', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'VOCÊS PODEM AJUDAR?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Transito_rob/transit_5.jpeg',
      promptImagem:'dois robôs engraçados batendo os punhos em uma rua colorida e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'ALÉM DE ENSINAR O QUE CADA COR SIGNIFICA, VOCÊS DEVEM CRIAR PROGRAMAS PARA QUE OS ROBÔS SEJAM CAPAZES DE ATRAVESSAR ROBÓPOLIS, SEMPRE RESPEITANDO AS CORES DO SEMÁFOROS QUE APARECEM PELO CAMINHO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Transito_rob/transit_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ALÉM DE ENSINAR O QUE CADA COR SIGNIFICA, VOCÊ DEVE CRIAR PROGRAMAS PARA OS ROBÔS ATRAVESSAREM ROBÓPOLIS SEMPRE RESPEITANDO OS SINAIS DE TRÂNSITO.',
      promptImagem:'dois robôs engraçados dirigindo carros em uma rua colorida e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'VAI SER UM DESAFIO E TANTO... PÉ NA TÁBUA!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Transito_rob/transit_7.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'',
      promptImagem:'o retrovisor de um carro engraçado super rápido em uma rua colorida e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},
    ]}},
   
    licao25:{},
   
    licao26:{},
   
    licao27:{/** padroesCurriculares: 
    titulo:'Lição 27. Binarópolis.',**/
    infografico:{titulo:'BINARÓPOLIS',
    tituloSimplificado:'BINARÓPOLIS',
    estiloPadrao:'basicoPaisagem',
    /** urlVideo:'',
    urlPodcast:'', **/
      cenas:[				
      {ordem:1,
      predecessor:0,
      texto:'VAMOS HOJE CONTINUAR EM NOSSA DIVERTIDA JORNADA, CONHECENDO A CIDADE MAIS ESTRANHA DA TERRA DOS ROBÔS: BINARÓPOLIS!',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_1.jpg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'HOJE VAMOS CONHECER BINARÓPOLIS.',
      promptImagem:'um país colorido e futurista, visto de cima, mostrando diferentes cidades', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:2,
      predecessor:1,
      texto:'BINARÓPOLIS FICA PRÓXIMO A ROBÓPOLIS, ASSIM COMO NUMERÓPOLIS. E LÁ TAMBÉM VIVEM APENAS ROBÔS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_2.jpeg',
      promptImagem:'dois robôs 3D engraçados andando em um parque colorido e futurista, com muitas árvores', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:3,
      predecessor:2,
      texto:'EM BINARÓPOLIS OS ROBÔS TAMBÉM GOSTAM DE NÚMEROS, MAS SÓ CONHECEM OS NÚMEROS “ZERO” E “UM”. ESTRANHO NÃO?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_3-2.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'POR AQUI , OS ROBÔS TAMBÉM AMAM OS NÚMEROS, MAS SÓ CONHECEM O UM E O ZERO.',
      promptImagem:'dois robôs engraçados conversando entre si com balões de fala em uma rua colorida e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:4,
      predecessor:3,
      texto:'POIS É... COMO BINARÓPOLIS É UMA CIDADE MUITO ANTIGA, ELES ATÉ HOJE SÓ CONVERSAM ATRAVÉS DO CÓDIGO PRIMITIVO DOS COMPUTADORES, CONHECIDO COMO “SISTEMA BINÁRIO”.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_4.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'ESSE É O CÓDIGO PRIMITIVO DOS COMPUTADORES, TAMBÉM CONHECIDO COMO SISTEMA BINÁRIO.',
      promptImagem:'um robô 3D engraçado estudando um livro antigo em um ambiente colorido e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:5,
      predecessor:4,
      texto:'E O “SISTEMA BINÁRIO” SÓ UTILIZA OS DOIS SÍMBOLOS, ZERO E UM.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_5.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'E ESSE SISTEMA UTILIZA SOMENTE DOIS SÍMBOLOS: 0 E 1.',
      promptImagem:'zeros e uns flutuando sobre um balão de fala em um cenário colorido e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:6,
      predecessor:5,
      texto:'OK, MAS SE BINARÓPOLIS TEM CINCO RUAS... COMO VAMOS CONSEGUIR DAR NOMES DIFERENTES PARA CADA RUA?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_6.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'COMO VAMOS CONSEGUIR NOMEAR CINCO RUAS COM DOIS SÍMBOLOS?',
      promptImagem:'uma rua colorida, futurista e muito limpa', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:7,
      predecessor:6,
      texto:'BOM, OS COMPUTADORES USAM O “SISTEMA BINÁRIO” PARA REPRESENTAR DE TUDO: LETRAS, NÚMEROS, IMAGENS, SONS... ENTÃO DEVE TER UM JEITO.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_7.jpeg',
      promptImagem:'um computador com código binário na tela, em um fundo colorido e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:8,
      predecessor:7,
      texto:'LÁ NO PROCESSADOR, O CÉREBRO DO COMPUTADOR, MINÚSCULOS COMPONENTES ELÉTRICOS SÃO LIGADOS PARA REPRESENTAR O “UM”, QUE DESENHAMOS COMO UMA CAIXINHA BRANCA. VEJA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_8.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'NO SISTEMA BINÁRIO, O UM É REPRESENTADO POR UMA CAIXINHA BRANCA, QUE QUER DIZER: LIGADO.',
      promptImagem:'um processador de computador com um quadrado branco flutuando acima dele em um fundo colorido e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:9,
      predecessor:8,
      texto:'E SÃO DESLIGADOS PARA REPRESENTAR O “ZERO”, QUE DESENHAMOS COMO UMA CAIXINHA PRETA.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_9.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'E O ZERO É REPRESENTADO POR UMA CAIXINHA PRETA, QUE QUER DIZER: DESLIGADO.',
      promptImagem:'um processador de computador com um quadrado preto flutuando acima dele em um fundo colorido e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:10,
      predecessor:9,
      texto:'O COMPUTADOR ENTÃO USA VÁRIOS “ZEROS” E “UNS”, UM AO LADO DO OUTRO, PARA REPRESENTAR DIFERENTES NÚMEROS E LETRAS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_10.png',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'PARA REPRESENTAR OS OUTROS NÚMEROS, USAMOS UMA SEQUÊNCIA DE CAIXINHAS BRANCAS E PRETAS.',
      promptImagem:'', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:11,
      predecessor:10,
      texto:'É UM POUCO CONFUSO A PRINCÍPIO, MAS COMO VOCÊ JÁ É RECONHECIDO COMO UM GRANDE AJUDANTE DE ROBÔS, VAI APRENDER UM POUCO SOBRE ESSE CÓDIGO MISTERIOSO PARA AJUDAR BINARÓPOLIS.',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_11.jpeg',
      textoImpresso:1,
      imagemImpresso:1,
      textoImpressoRecriado:'AGORA VOCÊ CONHECE O SISTEMA BINÁRIO E VAI CONSEGUIR NUMERAR AS RUAS DE BINARÓPOLIS.',
      promptImagem:'dois robôs engraçados batendo os punhos em uma rua colorida e futurista', /*opc*/
      textoDescritivoImagem:'', /*opc*/},

      {ordem:12,
      predecessor:0,
      texto:'PREPARADOS?',
      urlAudioTexto:'',
      textoSimplificado:'',
      urlImagem:'https://storage.googleapis.com/mindmakers/cpsciimageinf/CS1/Binaropolis/bin_12.jpeg',
      promptImagem:'uma rua colorida, futurista e muito limpa', /*opc*/
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