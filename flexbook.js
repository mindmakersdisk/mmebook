let infograficosContainer = document.getElementById('infografico-container');

let audiosQueue = [];
let currentAudioIndex = 0;
let currentSceneIndex = 0;
let tipoNarracao = 'podcast';

let synth = window.speechSynthesis;

let cenaEmFoco = null; // Variável para armazenar a cena atualmente em foco

var unidadeSel=-1;
var licaoSel=-1;

// Cria o contêiner do título e do combo
let headerContainer = document.createElement('div');
headerContainer.style.display = 'flex';
headerContainer.style.flexDirection = 'column';
headerContainer.style.alignItems = 'center';  // Centraliza os elementos no eixo transversal
headerContainer.style.justifyContent = 'center';  // Centraliza os elementos no eixo principal
headerContainer.style.height = '20vh';  // Ocupa a altura total da viewport


function renderizaLivro(livro) {
	// Cria e configura o título
	let titulo = document.createElement('h1');
	titulo.textContent = livro.nomeFantasia;
	titulo.style.textAlign = 'center';

	// Cria e configura o subtítulo
	let subtitulo = document.createElement('h2');
	subtitulo.textContent = livro.nomeTecnico;
	subtitulo.style.textAlign = 'center';

	// Adiciona o título e o subtítulo ao contêiner
	headerContainer.appendChild(titulo);
	headerContainer.appendChild(subtitulo);

	let selectMenu = document.createElement('select');
	selectMenu.style.fontSize = '20px';  // Aumenta o tamanho da fonte
	selectMenu.id = 'infograficoSelectMenu';
	let option = document.createElement('option');
	option.value = '';  // use unit:lesson as value for easy lookup later
	option.textContent = 'Selecione...';
	selectMenu.appendChild(option);
				
	for (let unidade in livro) {
		for (let licao in livro[unidade]) {
			if (livro[unidade][licao].infografico) {
				let option = document.createElement('option');
				option.value = `${unidade}:${licao}`;  // use unit:lesson as value for easy lookup later
				option.textContent = livro[unidade][licao].infografico.titulo;
				selectMenu.appendChild(option);
			}
		}
	}
	
	// Cria um container para centralizar o selectMenu
	let selectMenuContainer = document.createElement('div');
	selectMenuContainer.style.display = 'flex';
	selectMenuContainer.style.justifyContent = 'center';  // Centraliza horizontalmente
	selectMenuContainer.style.alignItems = 'center';  // Centraliza verticalmente
	selectMenuContainer.style.height = '50vh';  // Ocupa a altura total da viewport

	selectMenuContainer.appendChild(selectMenu);


	// Adiciona o contêiner ao corpo do documento
	document.body.appendChild(headerContainer);

	document.body.appendChild(selectMenuContainer); 
	
	selectMenu.addEventListener('change', function() {
		
		// Base da URL (sem parâmetros)
		var baseURL = window.location.origin + window.location.pathname;

		// Criação dos parâmetros
		var params = {};
		params["lv"] = livroParam;
		params["l"] = this.value;
		
		// Constrói a URL com os parâmetros
		var newURL = buildURLWithParams(baseURL, params);

		// Redireciona o navegador para a nova URL
		window.location.href = newURL;
		
		
	});
	
	// Se recebeu livro na URL, já renderiza apropriadamente.
	if (licaoParam) {
		renderizaLicao(licaoParam,livro);
	}

}

// Função para construir a URL com os parâmetros
function buildURLWithParams(baseURL, params) {
    var url = new URL(baseURL);
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            url.searchParams.set(key, params[key]);
        }
    }
    return url.toString();
}


function renderizaLicao(valor,livro) {
	
	infograficosContainer.innerHTML = '';
	let [unidade, licao] = valor.split(':');
	unidadeSel=unidade;
	licaoSel = licao;

	renderizaLivroCorpo(unidade,licao,null,livro);
	
	headerContainer.style.display = 'none';

	if (selectMenuContainer)
		selectMenuContainer.style.display = 'none';

}

function renderizaLivroCorpo(unidade,licao,modoArg,livro) {
	
	infograficosContainer.innerHTML="";
	let modo='ebook';
	if (modoArg) modo=modoArg;
	
	for (let unidadeKey  in livro) {
		
	  if (unidadeKey === unidade)
		for (let licaoKey in livro[unidadeKey ]) {
			if (licaoKey === licao && livro[unidadeKey ][licaoKey].infografico) {
				
				let titleContainer = document.createElement('div');
				titleContainer.className = 'title-container';

				let titulo = document.createElement('h1');
				titulo.textContent = livro[unidadeKey][licaoKey].infografico.titulo;

				let spacer = document.createElement('div');
				spacer.className = 'spacer';

				titleContainer.appendChild(titulo);
				titleContainer.appendChild(spacer);
				
				let falarButton = document.createElement('button');
				falarButton.className="proximo";
				falarButton.textContent = '\u2192';
				titleContainer.appendChild(falarButton);
				
				let podcastButton = document.createElement('button');
				podcastButton.textContent = 'Podcast';
				podcastButton.className="podcast";
				titleContainer.appendChild(podcastButton);
				
				let narrarOtimizadoButton = document.createElement('button');
				narrarOtimizadoButton.textContent = 'Narrar Essenciais';
				narrarOtimizadoButton.title = 'Narrar com áudio descrição de imagens essenciais';
				narrarOtimizadoButton.className="narrarOtimizado";
				titleContainer.appendChild(narrarOtimizadoButton);


				narrarOtimizadoButton.addEventListener('click', function() {
					// Inicie a reprodução da primeira faixa
					let currentCena = document.getElementById('cena-1');
					if (currentCena) {
						currentCena.classList.add('cena-em-foco');
						currentCena.scrollIntoView({ behavior: 'smooth' });
					}
					tipoNarracao='narrarOtimizado';
					currentAudioIndex = 0;
					playNextTrack();
				});
				
					
				let narrarTudoButton = document.createElement('button');
				narrarTudoButton.textContent = 'Narrar Tudo';
				narrarTudoButton.title = 'Narrar com áudio descrição de todas as imagens';
				narrarTudoButton.className="narrarTudo";
				titleContainer.appendChild(narrarTudoButton);

				narrarTudoButton.addEventListener('click', function() {
					// Inicie a reprodução da primeira faixa
					tipoNarracao='narrarTudo';
					currentAudioIndex = 0;
					playNextTrack();
				});
				
				let homeButton = document.createElement('button');
				let i = document.createElement("i");
				i.className="fas fa-home";
				homeButton.appendChild(i);
				homeButton.className="home";
				homeButton.setAttribute("onclick",
				"window.location.href = window.location.origin + window.location.pathname+'?lv='+livroParam;");
				titleContainer.appendChild(homeButton);
				
				// impressao
				let printVersionButton = document.createElement('button');
			//	printVersionButton.textContent = 'Vers.Impressão';
				let i2 = document.createElement("i");
				if (modo=='ebook') {
					printVersionButton.setAttribute('data-versao','print');
					printVersionButton.title = 'Gera uma versão somente com as imagens e textos concebidos para aparecer no infográfico impresso.';
					i2.className="fas fa-print";
					falarButton.style.visibility="visible";
					narrarTudoButton.style.visibility="visible";
					narrarOtimizadoButton.style.visibility="visible";
					podcastButton.style.visibility="visible";
				} else {
					printVersionButton.setAttribute('data-versao','ebook');
					printVersionButton.title = 'Retorna ao e-Book acessível.';
					i2.className="fas fa-book";
					falarButton.style.visibility="hidden";
					narrarTudoButton.style.visibility="hidden";
					narrarOtimizadoButton.style.visibility="hidden";
					podcastButton.style.visibility="hidden";
				}
				printVersionButton.appendChild(i2);

				printVersionButton.className="printVersion";
				titleContainer.appendChild(printVersionButton);
				
				printVersionButton.addEventListener('click', function() {
					
					if (printVersionButton.getAttribute('data-versao')=='print') {
						// gera a versão impressao
						renderizaLivroCorpo(unidadeSel,licaoSel,'print',livro);
						
					} else {
						renderizaLivroCorpo(unidadeSel,licaoSel,'ebook',livro);
						
					}
				});

				infograficosContainer.appendChild(titleContainer);
				
				let contaCena=0;
				let cenas = livro[unidadeKey][licaoKey].infografico.cenas;
				for (let i = 0; i < cenas.length; i++) {
					
					if (modo=='print' && !cenas[i].imagemImpresso && !cenas[i].textoImpresso) continue;	
					
					let cena = document.createElement('div');
					cena.className = 'cena';
					contaCena++
					cena.id = 'cena-' + (contaCena+1);

					let ordemDiv = document.createElement('div');
					ordemDiv.className = 'ordem';
					if (contaCena % 2 === 0) {
						ordemDiv.classList.add('verde');
					}
					ordemDiv.textContent = contaCena;

					cena.appendChild(ordemDiv);

					if (cenas[i].urlImagem && cenas[i].urlImagem!='' && 
						(modo=='ebook' || (modo=='print' && cenas[i].imagemImpresso))) {
						let img = document.createElement('img');
						img.src = cenas[i].urlImagem;
						img.alt = cenas[i].promptImagem;
						img.className="imagem-cena";
						cena.appendChild(img);
					} else {
						let div = document.createElement('div');
						div.style.backgroundImage = "url('resources/blank.png')";
						div.style.backgroundSize = 'contain';
						div.style.backgroundRepeat = 'no-repeat';
						div.style.backgroundPosition = 'center';
						div.style.backgroundWidth = '100%';
						div.alt = 'sem imagem';
						if (modo=='ebook') {
							let divContent =document.createElement('div');
							divContent.style.margin="20%";
							divContent.innerHTML=cenas[i].promptImagem;
							div.appendChild(divContent);
						}
						cena.appendChild(div);
					}

					  if (modo=='ebook' || (modo=='print' && cenas[i].textoImpresso)) {
							let texto = document.createElement('p');
							texto.innerHTML = cenas[i].texto;
							if (modo=='print' && cenas[i].textoImpressoRecriado)
								texto.textContent =cenas[i].textoImpressoRecriado;
							cena.appendChild(texto);
							
							if (cenas[i].urlAudioTexto && modo=='ebook') {
								let audioTexto = document.createElement('audio');
								audioTexto.controls = true;
								audioTexto.src = cenas[i].urlAudioTexto;
								cena.appendChild(audioTexto);

								audiosQueue.push(audioTexto);
							}
					  }

					if (cenas[i].textoDescritivoImagem && (modo=='ebook' || (modo=='print' && cenas[i].imagemImpresso))) {
						audiosQueue.push(new SpeechSynthesisUtterance(cenas[i].textoDescritivoImagem));
					}

					infograficosContainer.appendChild(cena);
				}

				falarButton.addEventListener('click', function() {
				  
					if (cenaEmFoco) {
						// Remova o destaque da cena anterior
						cenaEmFoco.classList.remove('cena-em-foco');
					}

					if (currentAudioIndex >= audiosQueue.length) {
						currentAudioIndex = 0;
					}

					let currentAudio = audiosQueue[currentAudioIndex];
					currentAudio.play();

					// Obter a cena que corresponde ao audio atual
					let currentScene = currentAudio.parentElement;
					// Rolar para a cena
					currentScene.scrollIntoView({behavior: 'smooth'});
					
					// Destacar a cena atual
					currentScene.classList.add('cena-em-foco');
					cenaEmFoco = currentScene;

					currentAudio.onended = function() {
						currentAudioIndex++;
					}
				});

				podcastButton.addEventListener('click', function() {
					tipoNarracao='podcast';
					currentAudioIndex = 0;
					playNextTrack();
				});
				
				
			}
		}
	}
}

function playNextTrack() {
    if (cenaEmFoco) {
        cenaEmFoco.classList.remove('cena-em-foco');
    }
    
    if (currentAudioIndex >= audiosQueue.length) {
        currentAudioIndex = 0;
        currentSceneIndex = 0;
    }

    let currentAudio = audiosQueue[currentAudioIndex];
    let currentCena = document.getElementById('cena-' + (currentSceneIndex+1));
    if (currentCena) {
        currentCena.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (currentAudio instanceof SpeechSynthesisUtterance) {
        currentAudio.onend = function() {
            handleAudioEnd();
        };
        synth.speak(currentAudio);
    } else {
        currentAudio.play();
        currentAudio.onended = function() {
            handleAudioEnd();
        };
    }
}

function handleAudioEnd() {
    let currentCena = document.getElementById('cena-' + (currentSceneIndex+1));
    if (currentCena) {
        currentCena.classList.remove('cena-em-foco');
    }
    currentAudioIndex++;
    if (!(audiosQueue[currentAudioIndex] instanceof SpeechSynthesisUtterance)) {
        currentSceneIndex++;
    }
    
    // Mova o destaque para a próxima cena aqui
    currentCena = document.getElementById('cena-' + (currentSceneIndex+1));
    if (currentCena) {
        currentCena.classList.add('cena-em-foco');
    }

    playNextTrack();
}

// Obtém a URL atual
var url = window.location.href;

// Função para extrair os parâmetros da URL
function getURLParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
//Verifica se o parâmetro "livro" está presente e obtém seu valor
var livroParam = getURLParameter("lv");
if (livroParam !== null) {
    console.log("Parâmetro 'livro' presente. Valor: " + livroParam);
} else
	livroParam="csx";

// Verifica se o parâmetro "l" (lição) está presente e obtém seu valor
var licaoParam = getURLParameter("l");
if (licaoParam !== null) {
    console.log("Parâmetro 'l' presente. Valor: " + licaoParam);
}

renderizaLivro(eval('livro_'+livroParam));
