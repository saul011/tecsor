var contador = 0;
var botao = document.getElementById("botao");
var contadorElemento = document.getElementById("contador");

botao.addEventListener("click", function () {
    contador++;
    contadorElemento.textContent = contador + " clique(s)";
});