const n_discos = document.querySelector('#n_discos');

let min_movimentos = document.getElementById('min_movimentos').value = `${(2 ** n_discos.value) - 1}`;

const torre1 = document.getElementById('torre1');
const torre2 = document.getElementById('torre2');
const torre3 = document.getElementById('torre3');

const reiniciar = document.querySelector('#reiniciar');


n_discos.addEventListener('click', () => {
    /** SE NO MEIO DO JOGO ELE ESCOLHER OUTRO NUMERO
     *  DE DISCOS DEVEMOS VALIDAR SE ELE ESCOLHEU OUTRO 
     *  NUMERO. CASO SIM, INICIA NOVO JOGO.
     * */ 

    console.log(n_discos.value);
    min_movimentos = document.getElementById('min_movimentos').value = `${(2 ** n_discos.value) - 1}`;
    
});

// FUNCAO QUE IRA EXECUTAR NOSSA APLICACAO
function app(){
    newGame()
}

// FUNCAO QUE ADICIONA UMA QUANTIDADE INFORMANDA DE DISCOS
// NA POSICAO ORIGINAL
function addDiskParent(n_discos){
    const disks = document.querySelectorAll('.disk')

    switch(n_discos){
        case 8:
            disks[0].classList.remove('hide');
        case 7:
            disks[6].classList.remove('hide');
        case 6:
            disks[4].classList.remove('hide');
        case 5:
            disks[2].classList.remove('hide');
        case 4:
            disks[7].classList.remove('hide');
        case 3:
            disks[1].classList.remove('hide');
            disks[3].classList.remove('hide');
            disks[5].classList.remove('hide');
            break;
    }
    
}


// FUNCAO QUE DISPONIBILIZA OS DISCOS NA POSICAO INICIAL
// PARA INICIO DO JOGO
function newGame(){
    // criar o elemento
    // estilizar o elemento
    // apendar o filho
    addDiskParent(parseInt(n_discos.value))

}

reiniciar.addEventListener('click', function(){
    newGame();
})

// FUNCAO QUE REMOVERA UM ELEMENTO FILHO DE UM PARENTE
// ESSA FIUNCAO FUNCIONARA EM CONJUNTO COM A addDiskParent()
function removeDiskParent(parent){}


app();