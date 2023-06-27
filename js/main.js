function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//usando a template string pra poder referenciar as classes que são variaveis

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //Função para caso o usuário interaja via teclado
    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}