//Script do trabalho correspondente a nota de AV3//
//Professor: Gilson Filho
//Disciplina: Raciocínio Lógico Algoritmico

//Equipe: Levi Natã e José Carlos
//Matrículas:(coloca tua matrícula aqui levi) / 2210416



//Música e Efeitos Sonoros//

var efeitoSonoro = document.createElement('audio');
efeitoSonoro.setAttribute('src', './bg%20jogo.mp3')

var levelup = document.createElement('audio');
levelup.setAttribute('src', './levelup.mp3')

var efeitoPeca = document.createElement('audio');
efeitoPeca.setAttribute('src', './pecaa.mp3')

var efeitoHarDrop = document.createElement('audio');
efeitoHarDrop.setAttribute('src', './hardrooooop.mp3')

var jumpScare = document.createElement('audio');
jumpScare.setAttribute('src', './perdeeeeeu.mp3')

var colisaoPeca = document.createElement('audio');
colisaoPeca.setAttribute('src', './colisao.mp3')

var linhaPadrao = document.createElement('audio');
linhaPadrao.setAttribute('src', './LinhaBreak.mp3')

var linhaTetri = document.createElement('audio');
linhaTetri.setAttribute('src', './TetriBreak.mp3')

var guardarPeca = document.createElement('audio');
guardarPeca.setAttribute('src', './Guardar Peca.mp3')

//~//



//Comando para setas não mexerem a tela//
window.addEventListener("keydown", function(e) {
    if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

//~//



//Peças//

const I = [
    [
        [0, 0, 0, 0],
        [1, 1, 1, 1], //posição 1 do bloco I
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0], //posição 2 do bloco I
        [0, 0, 1, 0],
        [0, 0, 1, 0],
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0], //posição 3 do bloco I
        [1, 1, 1, 1],
        [0, 0, 0, 0],
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0], //posição 4 do bloco I
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ]
];

const J = [
    [
        [1, 0, 0],
        [1, 1, 1], //posição 1 do bloco J
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0], //posição 2 do bloco J
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1], //posição 3 do bloco J
        [0, 0, 1]
    ],
    [
        [0, 1, 0],
        [0, 1, 0], //posição 4 do bloco J
        [1, 1, 0]
    ]
];

const L = [
    [
        [0, 0, 1],
        [1, 1, 1], //posição 1 do bloco L
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 0], //posição 2 do bloco L
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1], //posição 3 do bloco L
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0], //posição 4 do bloco L
        [0, 1, 0]
    ]
];

const O = [
    [
        [0, 0, 0, 0],
        [0, 1, 1, 0], //posição 1 do bloco O
        [0, 1, 1, 0],
        [0, 0, 0, 0],
    ]
];

const S = [
    [
        [0, 1, 1],
        [1, 1, 0], //posição 1 do bloco S
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1], //posição 2 do bloco S
        [0, 0, 1]
    ],
    [
        [0, 0, 0],
        [0, 1, 1], //posição 3 do bloco S
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0], //posição 4 do bloco S
        [0, 1, 0]
    ]
];

const T = [
    [
        [0, 1, 0],
        [1, 1, 1], //posição 1 do bloco T
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1], //posição 2 do bloco T
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1], //posição 3 do bloco T
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0], //posição 4 do bloco T
        [0, 1, 0]
    ]
];

const Z = [
    [
        [1, 1, 0],
        [0, 1, 1], //posição 1 do bloco Z
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1], //posição 2 do bloco Z
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 0], //posição 3 do bloco Z
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0], //posição 4 do bloco Z
        [1, 0, 0]
    ]
];
const PECAS = [
    [Z, "#680000"],
    [S, "#225F13"],
    [T, "#2E134E"],
    [O, "#988F1E"],
    [L, "#A06C0B"],
    [I, "#006270"],
    [J, "#131B80"]
];

//~//



// Variáveis //

const LINHA = 20;
const COLUNA = 10;
const TAMANHO = 30;
const TAMANHOPROX = 20;
const TAMANHOSTATS = 15;
const VAGO = "black";
let pontos = 0;
let linhasVel = 0;
let velocidade = -1000; //velocidade da peça
let nivel = 1;
let linhasremovidas = 0;
let noDeLinhas = 0;
let AUX;
let nome;
let incrementoY = 1, incrementoY1 = 5;
let controlec = true, controlec1 = true, controlec2 = false, controlec3 = true, controlec4 = true, controlec5 = false, controlec6 = false;

let r;

let rGuardado;

let p;

let r1;

let r2;

let proximasPecas = [];

let pecaStatsList = [];

let npessoa = 0;

let string;

let pessoas;

let registro;

let listaPessoas = [];

let ranking = [];

let pecaStats = [
    ["Z", 0], 
    ["S", 0], 
    ["T", 0], 
    ["O", 0], 
    ["L", 0], 
    ["I", 0],
    ["J", 0]
];

let linhas1 = 100,
    linhas2 = 300,
    linhas3 = 500,
    linhas4 = 800;

let peca;
let tabuleiro = [];

let inicioDescida;
let fimDeJogo = false;

let botao = document.getElementById("botao");
let removidas = document.getElementById("linhas")
let pontuação = document.getElementById("pontos");
let niveis = document.getElementById("nivel");
let linhas = document.getElementById("linhas");
let peca0 = document.getElementById("peca0"), 
peca1 = document.getElementById("peca1"), 
peca2 = document.getElementById("peca2"), 
peca3 = document.getElementById("peca3"), 
peca4 = document.getElementById("peca4"), 
peca5 = document.getElementById("peca5"), 
peca6 = document.getElementById("peca6");

let pessoaHtml1 = document.getElementById("pontPrimeiro"),
pessoaHtml2 = document.getElementById("pontSegundo"),
pessoaHtml3 = document.getElementById("pontTerceiro"),
pessoaHtml4 = document.getElementById("pontQuarto"),
pessoaHtml5 = document.getElementById("pontQuinto");

let listaPessoasHtml = [pessoaHtml1, pessoaHtml2, pessoaHtml3, pessoaHtml4, pessoaHtml5];

let listaPecasHtml = [peca0, peca1, peca2, peca3, peca4, peca5, peca6];

let tela = document.getElementById("tela");
let c = tela.getContext("2d");
let retangulo = document.getElementById("retangulo");
let b = retangulo.getContext("2d");
let guardado = document.getElementById("guardado");
let a = guardado.getContext("2d")
let statisticPecas = document.getElementById("pecas");
let d = statisticPecas.getContext("2d");

onkeydown = controlarPeca;
//~//



// Sub-rotinas (funções) //

function iniciarTabuleiro() {
    for (let i = 0; i < LINHA; i++) {
        tabuleiro[i] = [];

        for (let j = 0; j < COLUNA; j++) {
            tabuleiro[i][j] = VAGO;
        }

    }
}

function desenharTabuleiro() {
    for (let i = 0; i < LINHA; i++) {
        for (let j = 0; j < COLUNA; j++) {
            desenharQuadrado(j, i, tabuleiro[i][j]);
        }
    }
}

function desenharQuadrado(x, y, cor) {
    c.fillStyle = cor;
    c.fillRect(x * TAMANHO, y * TAMANHO, TAMANHO, TAMANHO);

    c.strokeStyle = "black";
    c.strokeRect(x * TAMANHO, y * TAMANHO, TAMANHO, TAMANHO);
}

function proximaPeca(p, cor){

    b.clearRect(0,0,180,400);
    b.fillStyle = "black";
    b.fillRect(0,0,180,400);

    function desenharQuadrado1(x, y, cor) {
        b.fillStyle = cor;
        b.fillRect(x * TAMANHOPROX, y * TAMANHOPROX, TAMANHOPROX, TAMANHOPROX);
    
        b.strokeStyle = "black";
        b.strokeRect(x * TAMANHOPROX, y * TAMANHOPROX, TAMANHOPROX, TAMANHOPROX);
    }

    function preencherPeca1(p, cor) {
        for (let i = 0; i < p.tetraminoAtivo.length; i++) {
            for (let j = 0; j < p.tetraminoAtivo.length; j++) {
                if (p.tetraminoAtivo[i][j]) {
                    desenharQuadrado1(p.x + j, p.y + i, cor);
                }
            }
        }
    }
        
    if(!fimDeJogo){
        
        while(proximasPecas.length < 5){

            let proxPeca = Math.floor(Math.random() * PECAS.length);
            proximasPecas.push(proxPeca);  

        }
        
        for(let i = 0; i < proximasPecas.length; i++){
            
            r1 = proximasPecas[i];

            p = {
                tetramino: PECAS[r1][0],
                cor: PECAS[r1][1],
                tetraminoN: 0,
                tetraminoAtivo: [
                    []
                ],
                x: 1.5,
                y: incrementoY
            };

            p.tetraminoAtivo = p.tetramino[p.tetraminoN];

            preencherPeca1(p, p.cor);

            if(r1 == 3){

                incrementoY += 4;

            }

            else incrementoY += 3.5;

        }

        incrementoY = 1;

    }

}

function gerarPeca() {

    proximaPeca();
    
    r = proximasPecas[0];
    proximasPecas.shift(0)
    proximaPeca();

    
    pecaStats[r][1]++;
    listaPecasHtml[r].innerHTML = pecaStats[r][1];

    if(!fimDeJogo){

        peca = {
            tetramino: PECAS[r][0],
            cor: PECAS[r][1],
            tetraminoN: 0,
            tetraminoAtivo: [
                []
            ],
            x: 3,
            y: -2
        };

        peca.tetraminoAtivo = peca.tetramino[peca.tetraminoN];

    }

}

    function desenharQuadrado2(x, y, cor) {
        a.fillStyle = cor;
        a.fillRect(x * TAMANHOPROX, y * TAMANHOPROX, TAMANHOPROX, TAMANHOPROX);
        
        a.strokeStyle = "black";
        a.strokeRect(x * TAMANHOPROX, y * TAMANHOPROX, TAMANHOPROX, TAMANHOPROX);
    }
    
    function preencherPeca2(p, cor) {
        for (let i = 0; i < p.tetraminoAtivo.length; i++) {
            for (let j = 0; j < p.tetraminoAtivo.length; j++) {
                if (p.tetraminoAtivo[i][j]) {
                    desenharQuadrado2(p.x + j, p.y + i, cor);
                }
            }
        }
    }

    function desenharQuadrado3(x, y, cor) {
        d.fillStyle = cor;
        d.fillRect(x * TAMANHOSTATS, y * TAMANHOSTATS, TAMANHOSTATS, TAMANHOSTATS);
        
        d.strokeStyle = "black";
        d.strokeRect(x * TAMANHOSTATS, y * TAMANHOSTATS, TAMANHOSTATS, TAMANHOSTATS);
    }
    
    function preencherPeca3(p, cor) {
        for (let i = 0; i < p.tetraminoAtivo.length; i++) {
            for (let j = 0; j < p.tetraminoAtivo.length; j++) {
                if (p.tetraminoAtivo[i][j]) {
                    desenharQuadrado3(p.x + j, p.y + i, cor);
                }
            }
        }
    }
    
    function gerarPeca1(){

    if(controlec || !controlec2){
        a.clearRect(0,0,180,400);
        a.fillStyle = "black";
        a.fillRect(0,0,180,400);  

        rGuardado = r;
        
        if(!fimDeJogo){

            let r2 = rGuardado;

            for(let i = 0; i < proximasPecas.length; i++){

                p = {
                    tetramino: PECAS[r2][0],
                    cor: PECAS[r2][1],
                    tetraminoN: 0,
                    tetraminoAtivo: [
                        []
                    ],
                    x: 1.5,
                    y: incrementoY
                };

                p.tetraminoAtivo = p.tetramino[p.tetraminoN];

                preencherPeca2(p, p.cor);
            }
        
        }
    
    }    
}

function gerarPeca2(pecaGuardada){

    let r = pecaGuardada;

    if(!fimDeJogo){

        peca = {
            tetramino: PECAS[r][0],
            cor: PECAS[r][1],
            tetraminoN: 0,
            tetraminoAtivo: [
                []
            ],
            x: 3,
            y: -2
        };

        peca.tetraminoAtivo = peca.tetramino[peca.tetraminoN];

    }

}

function gerarPecaStats(p, cor){

    d.clearRect(0,0,180,400);
    d.fillStyle = "black";
    d.fillRect(0,0,180,400);
        
    if(!fimDeJogo){
        
        for(let i = 0;pecaStatsList.length < 7; i++){

            let proxPeca = i;
            pecaStatsList.push(proxPeca);  

        }
        
        for(let i = 0; i < pecaStatsList.length; i++){
            
            r2 = pecaStatsList[i];

            p = {
                tetramino: PECAS[r2][0],
                cor: PECAS[r2][1],
                tetraminoN: 0,
                tetraminoAtivo: [
                    []
                ],
                x: 1.5,
                y: incrementoY
            };

            p.tetraminoAtivo = p.tetramino[p.tetraminoN];

            preencherPeca3(p, p.cor);

            if(r2 == 2){

                incrementoY += 3;

            }

            else if(r2 == 3){

                incrementoY += 5

            }

            else if(r2 == 4){

                incrementoY +=3.3

            }


            else incrementoY += 4;

        }

        incrementoY = 1;

    }

}

function descerPeca() {
    let agora = Date.now();
    let delta = agora - inicioDescida + velocidade;

    if (delta > 100) {
        moverAbaixo();
        inicioDescida = Date.now();
    }

    if (!fimDeJogo) {
        requestAnimationFrame(descerPeca);
    }
}

function moverAbaixo(seta, hardrop) {
    if (!colisao(0, 1, peca.tetraminoAtivo)) {
        apagarPeca();
        peca.y++
        let multiplicador = 0;
        if(seta) multiplicador = 1;
        if(hardrop) multiplicador = 2;
        pontos += multiplicador*nivel;
        pontuação.innerHTML = pontos;
        desenharPeca();
    } else {
    
        colisaoPeca.play();
        travarPeca();
        gerarPeca();
        if(!controlec1) controlec = false;
        if(controlec2) controlec2 = false;
        if(!controlec3) controlec6 = true;
        if(controlec5){ 
            controlec4 = true;
            controlec5 = false;
        }
    
    }
}

function moverDireita() {
    if (!colisao(1, 0, peca.tetraminoAtivo)) {
        apagarPeca();
        peca.x++;
        desenharPeca();
    }
}

function moverEsquerda() {
    if (!colisao(-1, 0, peca.tetraminoAtivo)) {
        apagarPeca();
        peca.x--;
        desenharPeca();
    }
}

function colisao(x, y, p) {
    for (let i = 0; i < p.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (!p[i][j]) {
                continue;

            }

            let novoX = peca.x + j + x;
            let novoY = peca.y + i + y;

            if (novoX < 0 || novoX >= COLUNA || novoY >= LINHA) {
                return true;

            }

            if (novoY < 0) {
                continue;

            }

            if (tabuleiro[novoY][novoX] != VAGO) {
                return true;

            }
        }
    }

    return false;
}

function apagarPeca() {
    preencherPeca(VAGO);
}

function desenharPeca() {
    preencherPeca(peca.cor);
}

function preencherPeca(cor) {
    for (let i = 0; i < peca.tetraminoAtivo.length; i++) {
        for (let j = 0; j < peca.tetraminoAtivo.length; j++) {
            if (peca.tetraminoAtivo[i][j]) {
                desenharQuadrado(peca.x + j, peca.y + i, cor);
            }
        }
    }
}

function travarPeca() {
    for (let i = 0; i < peca.tetraminoAtivo.length; i++) {
        for (let j = 0; j < peca.tetraminoAtivo.length; j++) {
            if (!peca.tetraminoAtivo[i][j]) {
                continue;
            }
            if (peca.y + i < 0) {

                listaPessoas[npessoa] = {

                    Nome : nome,
                    Score : pontos

                };

                ranking[npessoa] = listaPessoas[npessoa]

                let troca;

                for (let i = 0; i < ranking.length - 1; i++) {
                    for (let j = 0; j < ranking.length - 1- i; j++) {
                        if (ranking[j].Score < ranking[j + 1].Score) {
                            troca = ranking[j];
                            ranking[j] = ranking[j + 1];
                            ranking[j + 1] = troca;
                        }
                    }
                }

                    if(ranking.length <= 5){
                        for(let i = 0; i < ranking.length; i++){
                        
                            listaPessoasHtml[i].innerHTML = ranking[i].Nome + " | " + ranking[i].Score

                        }
                    }

                    else {

                        for(let i = 0; i < 5; i++){

                            listaPessoasHtml[i].innerHTML = ranking[i].Nome + " | " + ranking[i].Score

                        }


                    }

                npessoa++;
                fimDeJogo = true;
                
                myVideo.style.visibility = "hidden";
                tela.style.visibility = "hidden";
                jumpScare.play();
                efeitoSonoro.pause();
                botao.innerHTML = "Reiniciar";
                preencherPeca2(p,VAGO);           
                break;
            }

            tabuleiro[peca.y + i][peca.x + j] = peca.cor;
        }
    }


// Representa a quantidade de linhas quebradas nesse momento //
    let linhasRemovidasInstantaneo = 0;

    for (let i = 0; i < LINHA; i++) {
        let linhaCheia = true;


        for (let j = 0; j < COLUNA; j++) {
            linhaCheia = linhaCheia && (tabuleiro[i][j] != VAGO);
        }

        if (linhaCheia) {

            linhasRemovidasInstantaneo += 1;

            linhasremovidas += 1;

            linhas.innerHTML = linhasremovidas;

            if (linhasremovidas >= 10) {

                levelup.play();
                velocidade += 120;
                nivel += 1;
                niveis.innerHTML = nivel;
                linhasremovidas = 0;
                linhas.innerHTML = linhasremovidas;

// console.log(`pontosVel = ${pontosVel}`)
// console.log(`velocidade = ${velocidade}`)

            }

            for (let y = i; y > 1; y--) {
                for (let j = 0; j < COLUNA; j++) {
                    tabuleiro[y][j] = tabuleiro[y - 1][j];
                }
            }

            for (let j = 0; j < COLUNA; j++) {
                tabuleiro[0][j] = VAGO;
            }
        }
    }

// Distribui os pontos de forma adequada baseada na quantidade linhas //
// destruidas no momento atual //
    if (linhasRemovidasInstantaneo == 1){
        
        linhaPadrao.play();
        pontos += linhas1 * nivel;
    }
    else if (linhasRemovidasInstantaneo == 2){
        
        linhaPadrao.play();
        pontos += linhas2 * nivel;
    }
    else if (linhasRemovidasInstantaneo == 3){
        
        linhaPadrao.play();
        pontos += linhas3 * nivel;
    }
    else if (linhasRemovidasInstantaneo == 4){
        
        linhaTetri.play();
        pontos += linhas4 * nivel;
    }

    pontuação.innerHTML = pontos;

    desenharTabuleiro();
}

// console.log(`no de linhas ${noDeLinhas}`);

gerarPecaStats();

// Movimentações das peças //
function rodarPeca(estilo) {
    let proximoPadrao = peca.tetramino[(peca.tetraminoN + 1) % peca.tetramino.length];
    let recuo = 0;

    if (colisao(0, 0, proximoPadrao)) {
        if (peca.x > COLUNA / 2) {
            recuo = -1;
        } else {
            recuo = 1;
        }
    }

    if (!colisao(recuo, 0, proximoPadrao)) {
        apagarPeca();
        peca.x += recuo;
        peca.tetraminoN = (peca.tetraminoN + estilo) % peca.tetramino.length;
        peca.tetraminoAtivo = peca.tetramino[peca.tetraminoN];
        desenharPeca();
    }
}

function controlarPeca(evento) {
    let tecla = evento.keyCode;

    if (tecla == 37) { //seta pra esquerda
        efeitoHarDrop.pause();
        efeitoPeca.play();
        moverEsquerda();
        inicioDescida = Date.now();
    } else if (tecla == 38) { //seta pra cima
        efeitoHarDrop.pause();
        efeitoPeca.play();
        rodarPeca(1);
        inicioDescida = Date.now();
    } else if (tecla == 39) { //seta pra direita
        efeitoHarDrop.pause();
        efeitoPeca.play();
        moverDireita();
        inicioDescida = Date.now();
    } else if (tecla == 40) { //seta pra baixo
        efeitoHarDrop.pause();
        efeitoPeca.play();
        moverAbaixo(true, false);
    } else if (tecla == 90) { //z
        efeitoHarDrop.pause();
        efeitoPeca.play();
        rodarPeca(3);
        inicioDescida = Date.now();
    } else if (tecla == 32) { //espaço
        if (efeitoHarDrop.paused) {efeitoHarDrop.currentTime = 0; efeitoHarDrop.play();}else{efeitoHarDrop.play();};
        while(!colisao(0, 1, peca.tetraminoAtivo)){
        moverAbaixo(false, true);
        }
        moverAbaixo();
    } else if (tecla == 67) { //c
        

        if(controlec3){

            if(controlec && controlec1 && !controlec2){
                guardarPeca.play();
                apagarPeca();
                gerarPeca1(r);
                gerarPeca();
                controlec1 = false
            }

            else if(!controlec && !controlec1 && !controlec2){
                
                guardarPeca.play();
                AUX = rGuardado

                apagarPeca();
                gerarPeca1(r);
                gerarPeca2(AUX);

                r = AUX;
            
                controlec = true;
                controlec1 = true;
                controlec2 = false;
                controlec3 = false;  
             
            }
        }

        else if(controlec3 == false){

            if(controlec4 && controlec6){
                guardarPeca.play();
                AUX = rGuardado

            apagarPeca();
            gerarPeca1(r);
            gerarPeca2(AUX);

            r = AUX;
            
            controlec4 = false;
            controlec5 = true;       
            }
        }

    }

}
