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
function app(){
    newGame()
}

// FUNCAO QUE ADICIONA UMA QUANTIDADE INFORMANDA DE DISCOS
// NA POSICAO ORIGINAL OU INICIAL 
function addDiskParent(n_discos){
    const disks = document.querySelectorAll('.disk')
    
    // EH PRECISO ZERA-LAS A CADA NOVO JOGO
    arrayAreaTorre = [];
    

    for(i=0; i<8; i++ ){
        if(disks[i].classList.contains('hide') == false){
            disks[i].classList.add('hide');
        }
    }
           
    let arrAux = [];
    switch(n_discos){
        case 8:
            disks[0].classList.remove('hide');
            arrAux.push(disks[0]);
        case 7:
            disks[6].classList.remove('hide');
            arrAux.push(disks[6]);
        case 6:
            disks[4].classList.remove('hide');
            arrAux.push(disks[4]);
        case 5:
            disks[2].classList.remove('hide');
            arrAux.push(disks[2]);
        case 4:
            disks[7].classList.remove('hide');
            arrAux.push(disks[7]);
        case 3:
            disks[1].classList.remove('hide');
            disks[3].classList.remove('hide');
            disks[5].classList.remove('hide');
            arrAux.push(disks[1]);
            arrAux.push(disks[3]);
            arrAux.push(disks[5]);
            break;
    }
    arrayAreaTorre.push(arrAux);
    arrayAreaTorre.push([]);
    arrayAreaTorre.push([]);
    console.log(arrayAreaTorre);
}


// FUNCAO QUE DISPONIBILIZA OS DISCOS NA POSICAO INICIAL
// PARA INICIO DO JOGO
function newGame(){
    addDiskParent(parseInt(n_discos.value))
}


box_torres.addEventListener('click', function(evt){
    
    let element = evt.target.closest('div');
    console.log(element);

    if(selectTowerOrigin === undefined){
        selectTowerOrigin = element;
    }else if(selectTowerOrigin !== undefined && selectTowerDestination === undefined){
        selectTowerDestination = element;
        let arrAuxTorreOrigin = arrayAreaTorre[parseInt(selectTowerOrigin.id[9]) - 1];
        let arrAuxTorreDestination = arrayAreaTorre[parseInt(selectTowerDestination.id[9]) - 1];
        // console.log(arrAuxTorreOrigin)

        // QUANDO A TORRE DE DESTINO NAO TEM BLOCO NENHUM
        if(selectTowerDestination.childElementCount === 0){
            let element = arrAuxTorreOrigin.shift();
            arrAuxTorreDestination.push(element);

            console.log(arrayAreaTorre)
            selectTowerDestination.appendChild(element);

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
        // QUANDO A TORRE DE DESTINO JA POSSUI BLOCOS 
        else if(arrAuxTorreOrigin[0].clientWidth < arrAuxTorreDestination[0].clientWidth){
            let element = arrAuxTorreOrigin.shift();
            arrAuxTorreDestination.push(element);

            console.log(arrayAreaTorre)
            selectTowerDestination.appendChild(element);

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }else{
            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
    }
});

reiniciar.addEventListener('click', function(){
    min_movimentos.value = `${(2 ** n_discos.value) - 1}`;
    newGame();
})



app();