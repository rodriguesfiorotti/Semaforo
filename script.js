var intervalo = 0;
var imagens = ["Imagens/vermelho.png", "Imagens/amarelo.png", "Imagens/verde.png"];
var indiceAtual = 0;

function vermelho (){
    if (intervalo != 0){
        clearInterval(intervalo);
        }
    imagem.src="Imagens/vermelho.png";
    indiceAtual = 0;
}

function amarelo (){
    if (intervalo != 0){
    clearInterval(intervalo);
    }
    imagem.src="Imagens/amarelo.png";
    indiceAtual = 1;
}

function verde (){
    if (intervalo != 0){
        clearInterval(intervalo);
        }
    imagem.src="Imagens/verde.png";
    indiceAtual = 2;
}


/*Essa parte é mais complexa para mim, então tive que pegar esse código com o ChatGPT*/

        function mudarImagem() {
            document.getElementById('imagem').src = imagens[indiceAtual];
            indiceAtual = (indiceAtual + 1) % imagens.length;
        }

        function comecarContagem() {
            var segundos = document.getElementById('numero').value;
            if (segundos > 60) {
                segundos = 60;
                alert('O tempo foi definido como 60 segundos')

            }

            if (intervalo) {
                clearInterval(intervalo);  // Limpar o intervalo existente se houver um.
            }

            if (segundos && !isNaN(segundos) && segundos > 0) {
                intervalo = setInterval(mudarImagem, segundos * 1000);
            } else {
                alert('Por favor, insira um número válido de segundos.');
            }
        }

        function pararContagem() {
            clearInterval(intervalo);
        }

        function desligar() {
            if (intervalo != 0){
                clearInterval(intervalo);
                }
            imagem.src="Imagens/desligado.png";
            indiceAtual = 0;
        }