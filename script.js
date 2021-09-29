const n_discos = document.querySelector('#n_discos');

// VARIAVEL PAI QUE SERA INSERIDO O OBSERVER (BUBBLING)
const box_torres = document.getElementById('box_torres');

const reiniciar = document.querySelector('#reiniciar');

// VARIAVEL QUE ARMAZENARA A QUANTIDADE MINIMA DE MOVIMENTOS PARA VENCER
// O DESAFIO
let min_movimentos = document.getElementById('min_movimentos')
min_movimentos.value = `${(2 ** n_discos.value) - 1}`;

// ESSAS VARIAVEIS GUARDARA APENAS OS DISCOS QUE ESTAO PRESENTES EM CADA TORRE
let arrayAreaTorre = [];

// VARIAVEIS QUE APONTAM PARA A TORRE DE ORIGEM E A TORRE DE DESTINO
// QUE OS BLOCOS IRAO TRANSITAR
let selectTowerOrigin;
let selectTowerDestination;


// FUNCAO QUE IRA EXECUTAR NOSSA APLICACAO
function app() {
    newGame()
}

// FUNCAO QUE ADICIONA UMA QUANTIDADE INFORMANDA DE DISCOS
// NA POSICAO ORIGINAL OU INICIAL 
function addDiskParent(n_discos) {
    const disks = document.querySelectorAll('.disk')

    // EH PRECISO ZERAR O ARRAY DE ARRAYS QUE REPRESENTA AS TORRES 
    // A CADA NOVO JOGO
    arrayAreaTorre = [];

    // INICIA TODOS OS BLOCOS COM A CLASSE hide PARA FICARAEM OCULTOS
    for (i = 0; i < 8; i++) {
        if (disks[i].classList.contains('hide') == false) {
            disks[i].classList.add('hide');
        }
    }

    let arrAux = [];
    switch (n_discos) {
        case 8:
            disks[7].classList.remove('hide');
            arrAux.push(disks[7]);
        case 7:
            disks[1].classList.remove('hide');
            arrAux.push(disks[1]);
        case 6:
            disks[3].classList.remove('hide');
            arrAux.push(disks[3]);
        case 5:
            disks[5].classList.remove('hide');
            arrAux.push(disks[5]);
        case 4:
            disks[0].classList.remove('hide');
            arrAux.push(disks[0]);
        case 3:
            disks[6].classList.remove('hide');
            disks[4].classList.remove('hide');
            disks[2].classList.remove('hide');
            arrAux.push(disks[6]);
            arrAux.push(disks[4]);
            arrAux.push(disks[2]);
            break;
    }

    // ORDENACAO NECESSARIA PARA DISPOR OS ELEMENTOS NO arrAux DE 
    // ACORDO COMO SE APRENSENTA NO DOOM
    arrAux.sort((a, b) => {
        if (a.clientWidth > b.clientWidth) {
            return 1;
        }

        if (a.clientWidth < b.clientWidth) {
            return -1;
        }

        return 0;
    })

    // arrayAreaTorre[[DISCOS NA TORRE INICIAL],[],[]]
    arrayAreaTorre.push(arrAux);
    arrayAreaTorre.push([]);
    arrayAreaTorre.push([]);
    console.log(arrayAreaTorre);
}


// FUNCAO QUE DISPONIBILIZA OS DISCOS NA POSICAO INICIAL
// PARA INICIO DO JOGO
function newGame() {
    addDiskParent(parseInt(n_discos.value))
}

box_torres.addEventListener('click', function (evt) {

    let element = evt.target.closest('.areaTorre');

    if (selectTowerOrigin === undefined) {
        selectTowerOrigin = element;
        selectTowerOrigin.classList.toggle('selecao');
    } else if (selectTowerOrigin !== undefined && selectTowerDestination === undefined) {
        selectTowerDestination = element;
        selectTowerOrigin.classList.toggle('selecao');

        // DUAS VARIAVEIS QUE CONTERAM UM ARRAY DE ARRAY COM TRES ELEMENTOS,
        // CADA ELEMENTO REPRESENTANDO UMA TORRE
        let arrAuxTorreOrigin = arrayAreaTorre[parseInt(selectTowerOrigin.id[9]) - 1];
        let arrAuxTorreDestination = arrayAreaTorre[parseInt(selectTowerDestination.id[9]) - 1];

        // SE POR ACASO EU QUISER TIRAR UM BLOCO DE ONDE NAO TEM MAIS
        if (arrAuxTorreOrigin.length === 0) {
            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
        // QUANDO A TORRE DE DESTINO NAO TEM BLOCO NENHUM
        else if (arrAuxTorreDestination.length === 0) {
            let element = arrAuxTorreOrigin.shift();
            arrAuxTorreDestination.unshift(element);

            selectTowerDestination.appendChild(element);

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
        // QUANDO A TORRE DE DESTINO JA POSSUI BLOCOS 
        else if (arrAuxTorreOrigin[0].clientWidth < arrAuxTorreDestination[0].clientWidth) {
            let element = arrAuxTorreOrigin.shift();
            arrAuxTorreDestination.unshift(element);

            selectTowerDestination.appendChild(element);

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
        // QUANDO NAO POSSO REALIZAR O MOVIMENTO
        else {
            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
    }

    // DEPOIS DAS ALTERACOES NO ARRAY DE ARRAYS MOSTRA COMO SE APRESENTA
    // ATUALMENTE ESSE ARRAY
    console.log(arrayAreaTorre)
});

reiniciar.addEventListener('click', function () {
    min_movimentos.value = `${(2 ** n_discos.value) - 1}`;
    selectTowerOrigin = document.getElementById('areaTorre1');
    
    newGame();

    // FOR PARA PASSAR TODOS OS BLOCOS PARA A TORRE INICIAL DO JOGO
    for(let i = 0;i < arrayAreaTorre.length;i++){
        let arr = arrayAreaTorre[i];
        for(let z = arr.length - 1;z >= 0;z--){
            selectTowerOrigin.appendChild(arr[z]);
        }
    }

    selectTowerOrigin = undefined;
    selectTowerDestination = undefined;

})



app();