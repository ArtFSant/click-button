let pontos = 0;

let cliques = 0;
let porcentagem = 0;
let multi = 1;

let preco_clique = 10;
let preco_porcentagem = 50;
let preco_multi = 100;

setInterval(() => {
    pontos += cliques;
    document.getElementById("pontuacao").innerText = `Pontuação: ${pontos}`;
}, 1000);

function adicionar_ponto() {
    pontos += (1*multi);
    pontos += parseInt(cliques/100 * porcentagem);
    console.log(pontos);
    document.getElementById("pontuacao").innerText = `Pontuação: ${pontos}`;
}

function comprar_clique() {
    if (pontos >= preco_clique) {
        pontos -= preco_clique;
        preco_clique += parseInt(preco_clique/100 * 10);
        cliques ++;
        document.getElementById("pontuacao").innerText = `Pontuação: ${pontos}`;
        document.getElementById("clique_segundo").innerText = `Atual: ${cliques}`;
        document.getElementById("preco_clq").innerText = `Preço: ${preco_clique}`;
    }
}

function comprar_porcentagem() {
    if (pontos >= preco_porcentagem) {
        pontos -= preco_porcentagem;
        preco_porcentagem += parseInt(preco_porcentagem/100 * 10);
        porcentagem ++;
        document.getElementById("pontuacao").innerText = `Pontuação: ${pontos}`;
        document.getElementById("porcentagem_clique").innerText = `Atual: ${porcentagem}`;
        document.getElementById("preco_pc").innerText = `Preço: ${preco_porcentagem}`;
    }
}

function comprar_multi() {
    if (pontos >= preco_multi) {
        pontos -= preco_multi;
        preco_multi += parseInt(preco_multi/100 * 10);
        multi ++;
        document.getElementById("pontuacao").innerText = `Pontuação: ${pontos}`;
        document.getElementById("multiplicador_clique").innerText = `Atual: ${multi}`;
        document.getElementById("preco_mt").innerText = `Preço: ${preco_multi}`;
    }
}