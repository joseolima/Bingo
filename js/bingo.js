
// Esta variável armazena todos os número (01 até 75).
var numeros = document.querySelectorAll(".numeros li");

// Está função é executada ao clicar com o mouse em qualquer uma das bolas.
// Caso a pessoa tenha selecionado uma bolinha de forma errada, ao clicar nela com o mouse a mesma volta à sua cor original (branco).
numeros.forEach(function (numeros) {
    numeros.addEventListener("click", function () {
        numeros.style.backgroundColor = "#FFF";
        input.focus();
    })
});

// Esta variável é responsável por pegar todas as bolas no HTML e guarda-las para serem usadas na função Valida().
var bolas = document.querySelectorAll(".numeros li");

// Esta variável vai armazenar na viariável "input" o número digitado no input da página e posicionar o cursor dentro do input.
var input = document.querySelector(".entrada-numeros");
input.focus();

// Esta funcão é responsável por pegar o número digitado no input e verificar se o número digitado é igual a uma das bolas. Se for igual, a bola muda de cor ao pressionar o botão OK.
function valida() {
    var achou = false;

    for (let i = 0; i < bolas.length; i++) {

        if (input.value == bolas[i].textContent) {
            console.log("Você acertou!");
            bolas[i].style.backgroundColor = "#00E640";
            achou = true;
            break;
        }
    }

    if (achou == false) {
        alert("Número inválido! Favor digitar novamente");
    }
    // Limpa o input depois de executar a função valida();
    input.value = "";
    // Mantém o foco no input após a execução da função valida();
    input.focus();
}
// Aqui o botão OK é selecionado no HTML e armazenado na variavel: button.
var button = document.querySelector(".botao");
// Aqui a função valida() é executada ao clicar no botão: OK.
button.onclick = valida;


// Esta função recarrega a página ao cliclar no botão: Novo Jogo.
function AtualizaPagina() {
    location.reload();
}

// Esta função é reponsável por mudar o foco automaticamente para o botão: OK, evitando de usuário ter que usar mouse para apertar o botão ou usar o tab do teclado, bastando apenas digiar os dois números e apertar a tecla enter.
$(".entrada-numeros").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).nextAll('.botao:enabled:first').focus();
    }
});

// Esta função desabilita o F5 do teclado para evitar que por engano a tecla seja pressionada assim perdendo o progresso do jogo.
function desabilitaF5(e) {
    if ((e.which || e.keyCode) == 116) e.preventDefault();
};
$(document).on("keydown", desabilitaF5);

//  Esta função pergunta ao usuário se ele realmente quer encerrar a aplicação evitando o encerramento inesperado ou acidente clicando no X, e ou atualização da página.
window.onbeforeunload = function(e) {
    return 'Tem certeza que quer fechar a janela?';
 };