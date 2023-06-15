let livro ={

  /* metadados */
  metadados:{
	  i18n:false,
	  formularioRegistro_campos_formatosValidos:['texto','numero','data','url','lista','nome','usuario','senha','usuarioAcessivel','senhaAcessivel'],
	  infografico_estilosValidos:['basicoPaisagem','basicoRetrato','explosaoPaisagem','circuitoPaisagem','cobraPaisagem','cobraPaisagem2', 'cobraRetrato','gPaisagem'] 
  },
  
  versao:'0.1.00',
  nomeFantasia: 'Expresso',
  nomeTecnico:'CS1 - Fundamentos em Ciência da Computação',
  isbn:'',
  autores:[],
  editor:'',
  local:'',
  ano:'',
  url:'compsci_cs1_0_1',

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
		  titulo:'Resumo do Módulo CS1',
		  /* idem licoes */
	  }
	  
  },
  
   /* conteudo */
  unidade1:{
	  /* licao sem infografico, deve exibir algo como 'projeto/laboratório sem novo conceito teórico' */
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
          promptImagem:'Arte digital de três imagens lado a lado que mostram no quadro à esquerda um prato de macarrão, no quadro do meio um chuveiro e no quadro da direita um livro', /*opc*/
          textoDescritivoImagem:'', /*opc*/},

          {ordem:6,
          predecessor:5,
          texto:'Para saber como ordenar as coisas em uma sequência, você também precisa de um critério. Repita comigo: Critério.',
          urlAudioTexto:'',
          textoSimplificado:'',
          urlImagem:'',
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
          promptImagem:'Arte digital de uma placa de trânsito triangular, com a borda vermelha e o fundo branco e um ponto de exclamação preto bem no meio da placa', /*opc*/
          textoDescritivoImagem:'', /*opc*/},

          {ordem:9,
          predecessor:8,
          texto:'Por exemplo: Para colocar os alunos em sequência, do menor para o maior, o critério será a altura de cada um.',
          urlAudioTexto:'',
          textoSimplificado:'',
          urlImagem:'',
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
          texto:'Vamos tentar mais uma vez? Qual a sequência das figuras? O que aconteceu primeiro?',
          urlAudioTexto:'',
          textoSimplificado:'',
          urlImagem:'',
          promptImagem:'Arte digital com três imagens. Na imagem da esquerda, há um miolo de maçã, totalmente comido. Na imagem do meio, há uma maçã inteira e na imagem da direita, há uma maçã com uma mordida apenas', /*opc*/
          textoDescritivoImagem:'', /*opc*/},
  
          {ordem:12,
          predecessor:11,
          texto:'Está preparado para o mundo das sequências? Vamos lá!',
          urlAudioTexto:'',
          textoSimplificado:'',
          urlImagem:'',
          promptImagem:'Arte digital com uma maçã, um quebra cabeças, uma prancheta vermelha com um papel e no papel tem um símbolo verde de checagem, um urso de pelúcia roxo e uma borboleta', /*opc*/
          textoDescritivoImagem:'', /*opc*/},
				]
		  }
	  },
	  
	  licao2:{},
    licao3:{},
    licao4:{id:'CS1AULA01CODE',
		  /** padroesCurriculares: 
		  titulo:'Lição 04. Algoritmos.',**/
		  infografico:{titulo:'Algoritmos',
				tituloSimplificado:'Os Algoritmos',
				estiloPadrao:'gPaisagem',
				/** urlVideo:'',
				urlPodcast:'', **/
				cenas:[				
					{ordem:1,
					predecessor:0,
					texto:'Você sabe o que é um algoritmo? Já ouviu essa palavra antes?',
					urlAudioTexto:'',
					textoSimplificado:'Algoritmos',
					urlImagem:'',
					promptImagem:'Arte digial de uma pessoa pensando, com vários pontos de interrogação em volta dela', /*opc*/
					textoDescritivoImagem:'Pessoa pensando para tentar resolver um problema', /*opc*/},
					 
					{ordem:2,
					predecessor:1,
					texto:'Os algoritmos estão em tudo o que nos rodeia, são aplicados em tudo e são usados em toda a tecnologia e em todas as decisões que tomamos diariamente.',
					urlAudioTexto:'',
					textoSimplificado:'Algoritmos em todos os lugares',
					urlImagem:'',
					promptImagem:'Arte digital de uma cidade vista de cima, com componentes computacionais sendo mostrados em diferentes locais.', /*opc*/
					textoDescritivoImagem:'Cidade super conectada, com componentes computacionais nos mais diversos locais', /*opc*/},

          {ordem:3,
          predecessor:2,
          texto:' Um algoritmo é uma instrução detalhada, com diferentes passos, ou a uma fórmula de resolver um problema ou completar uma tarefa.',
          urlAudioTexto:'',
          textoSimplificado:'O que é um algoritmo?',
          urlImagem:'',
          promptImagem:'Arte digital de uma lista com diferentes itens marcados como feitos.', /*opc*/
          textoDescritivoImagem:'Lista com marcações de que tarefas foram executadas', /*opc*/},

          {ordem:4,
          predecessor:3,
          texto:'Na programação, os programadores escrevem algoritmos que dão ordens ao computador para que este realize uma determinada tarefa.',
          urlAudioTexto:'',
          textoSimplificado:'Os algoritmos e os computadores',
          urlImagem:'',
          promptImagem:'Arte digital de um computador de mesa mostrando alguns caracteres na tela e uma mão no teclado, como se a pessoa estivesse programando.', /*opc*/
          textoDescritivoImagem:'Programador em seu computador', /*opc*/},

          {ordem:5,
          predecessor:4,
          texto:'Mas os algoritmos não servem somente para os programadores e computadores.',
          urlAudioTexto:'',
          textoSimplificado:'Os algoritmos e as pessoas',
          urlImagem:'',
          promptImagem:'Arte digital de um computador com alguns caracteres na tela e ao lado uma mão segurando uma folha de papel com algumas instruções', /*opc*/
          textoDescritivoImagem:'Computador mostrando um algoritmo e papel também mostrando um algoritmo', /*opc*/},

          {ordem:6,
          predecessor:5,
          texto:'Uma receita de culinária é um algoritmo, o processo de dobrar uma camisa ou um par de calças também é um algoritmo.',
          urlAudioTexto:'',
          textoSimplificado:'Uma receita é um algoritmo',
          urlImagem:'',
          promptImagem:'Arte digital de uma bancada de cozinha com um pote de maionese, uma faca, um pires com um pedaço de pão em cima e no canto superior direito uma folha de papel com várias instruções da receita', /*opc*/
          textoDescritivoImagem:'Preparo de uma receita com algoritmos', /*opc*/},

          {ordem:7,
          predecessor:6,
          texto:'Até mesmo a rotina matinal pode ser considerada um algoritmo!',
          urlAudioTexto:'',
          textoSimplificado:'Rotina matinal também é um algoritmo',
          urlImagem:'',
          promptImagem:'Arte digital de uma pessoa em frente ao espelho de um banheiro com uma escovade dentes vermelha na mão', /*opc*/
          textoDescritivoImagem:'Pessoa seguindo os passos para escovar os dentes', /*opc*/},

          {ordem:8,
          predecessor:7,
          texto:'E você pode criar algoritmos para as mais diversas tarefas do seu dia. Seja para você ou outra pessoa executar.',
          urlAudioTexto:'',
          textoSimplificado:'Diferentes tarefas podem ser algoritmos',
          urlImagem:'',
          promptImagem:'Arte digital de uma camisa dobrada em cima de uma cama num quarto e no canto superior direito uma folha de papel com diferentes instruções e algumas marcações verdes de conslusão de tarefas', /*opc*/
          textoDescritivoImagem:'Camisa dobrada seguindo algoritmos', /*opc*/},

          {ordem:9,
          predecessor:8,
          texto:'Mas fique atento: se você está criando um algoritmo para que outra pessoa execute, você precisa deixar suas instruções o mais específicas possível.',
          urlAudioTexto:'',
          textoSimplificado:'Especificar as instruções',
          urlImagem:'',
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
          promptImagem:'Arte digital de uma cozinha com uma poça de leite no chão', /*opc*/
          textoDescritivoImagem:'Poça de leite no chão', /*opc*/},
  
          {ordem:17,
          predecessor:16,
          texto:'Então, os algoritmos nos ajudam a partir problemas grandes e complexos em problemas menores e mais fáceis de resolver.',
          urlAudioTexto:'',
          textoSimplificado:'Algoritmos e resolução de problemas',
          urlImagem:'',
          promptImagem:'Arte digital de uma caixa de papelão grande aberta com várias pequenas caixas fechadas saltando de dentro dela', /*opc*/
          textoDescritivoImagem:'Caixa grande de problemas com vários problemas menores saindo dela', /*opc*/},
  
          {ordem:18,
          predecessor:17,
          texto:'Com os algoritmos, podemos tranformar soluções de problemas em passos claros e bem definidos, que podem ser seguidos por qualquer máquina ou pessoa.',
          urlAudioTexto:'',
          textoSimplificado:'Instruções claras',
          urlImagem:'',
          promptImagem:'Arte digital de uma pessoa com uma folha de papel na mão, mostrando satisfação com o que está escrito nela', /*opc*/
          textoDescritivoImagem:'Pessoa lendo um algoritmo e entendendo o que precisa ser feito', /*opc*/},
				]
		  }
    },
    licao5:{},
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