const n_discos = document.getElementById('n_discos');
const min_movimentos = document.getElementById('min_movimentos').value = `${(2 ** n_discos.value) - 1}`;

n_discos.addEventListener('click', () => {
    /** SE NO MEIO DO JOGO ELE ESCOLHER OUTRO NUMERO
     *  DE DISCOS DEVEMOS VALIDAR SE ELE ESCOLHEU OUTRO 
     *  NUMERO. CASO SIM, INICIA NOVO JOGO.
     * */ 

    console.log(n_discos.value);
    min_movimentos = document.getElementById('min_movimentos').value = `${(2 ** n_discos.value) - 1}`;
});

// FUNCAO QUE IRA EXECUTAR NOSSA APLICACAO
const app = () => {}

// FUNCAO QUE ADICIONA UMA QUANTIDADE INFORMANDA DE DISCOS
// NA POSICAO ORIGINAL
const addDiskParent = (numberDisks, parent) => {}

// FUNCAO QUE DISPONIBILIZA OS DISCOS NA POSICAO INICIAL
// PARA INICIO DO JOGO
const newGame = () => {}

// FUNCAO QUE REMOVERA UM ELEMENTO FILHO DE UM PARENTE
// ESSA FIUNCAO FUNCIONARA EM CONJUNTO COM A addDiskParent()
const removeDiskParent = (parent) => {}
