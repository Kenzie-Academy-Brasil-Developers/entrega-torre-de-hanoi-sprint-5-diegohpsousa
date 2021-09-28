const n_discos = document.getElementById('n_discos');
let min_movimentos = document.getElementById('min_movimentos').value = `${(2 ** n_discos.value) - 1}`;

const torre1 = document.getElementById('torre1');
const torre2 = document.getElementById('torre2');
const torre3 = document.getElementById('torre3');


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
}

// FUNCAO QUE ADICIONA UMA QUANTIDADE INFORMANDA DE DISCOS
// NA POSICAO ORIGINAL
function addDiskParent(element, parent){}

// FUNCAO QUE DISPONIBILIZA OS DISCOS NA POSICAO INICIAL
// PARA INICIO DO JOGO
function newGame(){
    // criar o elemento
    // estilizar o elemento
    // apendar o filho
}

// FUNCAO QUE REMOVERA UM ELEMENTO FILHO DE UM PARENTE
// ESSA FIUNCAO FUNCIONARA EM CONJUNTO COM A addDiskParent()
function removeDiskParent(parent){}

console.log(typeof parseInt('2'))