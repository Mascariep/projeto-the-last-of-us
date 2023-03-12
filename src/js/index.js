//alert('The Last Of Us')

/*
OBJETIVO
Quando clicar no botão, temos que mostrar a imagem de fundo correspondente
*/
// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
//console.log(document.querySelectorAll('.botao'));
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//console.log(botoesCarrossel);

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
/*
const botao1 = document.getElementById('botao1');
botao1.addEventListener('click', () => {
    console.log("clicou no botao1")
})
*/

botoesCarrossel.forEach((botao, indice) => {
    //console.log(botao)
    botao.addEventListener('click', () => {
        //console.log(indice);
        //console.log("clicou no botao")
    // - passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();
    // - passo 4 - marcar o botão clicando como se estivesse selecionado
        selecionarBotaoCarrossel(botao);
    // - passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();
    // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        //console.log(imagens);
        //console.log(imagens[1]);
        mostrarImagemDeFundo(indice);
    })
})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

