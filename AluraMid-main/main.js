function tocaSom(){
    document.querySelector (idElementoAudio) .play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');
    for (contador = 0; contador < listaDeTeclas.lenght; contador++); {
    const instrumento = listaDeTeclas[contador];
    const tecla = listaDeTeclas[contador];
    const idAudio = `#som_${instrumento}`;
    listaDeTeclas[contador].classList [1];

    tecla.onclick = tocaSomPom;
    tocaSom ('#som_tecla_Pom');
    
listaDeTeclas[1].onclick = tocaSomPom;
}