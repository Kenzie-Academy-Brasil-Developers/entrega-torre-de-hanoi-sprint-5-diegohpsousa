const n_blocos = document.querySelector('#n_blocos');

// VARIAVEL PAI QUE SERA INSERIDO O OBSERVER (BUBBLING)
const box_torres = document.getElementById('box_torres');

// VARIAVEIS QUE REPRESENTAM CADA TORRE 
const areaTorre1 = document.getElementById('areaTorre1');
const areaTorre2 = document.getElementById('areaTorre2');
const areaTorre3 = document.getElementById('areaTorre3');

// VARIAVEL QUE REPRESENTARA O BOTAO DO HTML PARA REINICIAR O GAME
const reiniciar = document.querySelector('#reiniciar');

// VARIAVEL QUE ARMAZENARA A QUANTIDADE MINIMA DE MOVIMENTOS PARA VENCER
// O DESAFIO
let min_movimentos = document.getElementById('min_movimentos')
min_movimentos.value = `${(2 ** n_blocos.value) - 1}`;

let num_movimentos = document.getElementById('n_movimentos');
num_movimentos.value = '0'

// VARIAVEIS QUE APONTAM PARA A TORRE DE ORIGEM E A TORRE DE DESTINO
// QUE OS BLOCOS IRAO TRANSITAR
let selectTowerOrigin;
let selectTowerDestination;

// CODIGOS DA MENSAGEM DE CONCLUSÃO
const containMsg = document.querySelector('#container_msg_conclusao'); //sombra do fundo da janela
const msgConclusao = document.querySelector('#msg_conclusao'); // janela da msg
const btnNovoJogo = document.querySelector('#novoJogo');// botão de novo jogo dentro da msg


// FUNCAO QUE IRA EXECUTAR NOSSA APLICACAO
function app() {
    newGame(n_blocos.value);
}

// FUNCAO QUE ADICIONA UM BLOCO A UM INFORMANDO PAI
function addBlockParent(element,parentElement) {
        parentElement.appendChild(element);
}


// FUNCAO QUE DISPONIBILIZA OS DISCOS NA POSICAO INICIAL
// PARA INICIO DO JOGO
function newGame(n_blocos) {

    // CRIAR A QUANTIDADE DE BLOCOS
    for (let i = 1; i <= parseInt(n_blocos); i++){
        const div = document.createElement('div');
        div.classList.add(`disk`);
        div.classList.add(`disk${i}`);
        addBlockParent(div,areaTorre1);
    }
}

box_torres.addEventListener('click', function (evt) {

    let element = evt.target.closest('.areaTorre');
    if(element === null){
        ;
    }
    else if (selectTowerOrigin === undefined) {
        
        selectTowerOrigin = element;
        selectTowerOrigin.classList.toggle('selecao');
        selectTowerOrigin.lastElementChild.classList.toggle('flutuar');

    } 
    else if (selectTowerOrigin !== undefined && selectTowerDestination === undefined) {
        selectTowerDestination = element;
        selectTowerOrigin.classList.toggle('selecao');
        selectTowerOrigin.lastElementChild.classList.toggle('flutuar');

        console.log(selectTowerOrigin,selectTowerDestination)

        // SE POR ACASO EU QUISER TIRAR UM BLOCO DE ONDE NAO TEM MAIS
        if (selectTowerOrigin.childElementCount === 0) {

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
        // QUANDO A TORRE DE DESTINO NAO TEM BLOCO NENHUM
        else if (selectTowerDestination.childElementCount === 0) {
            selectTowerDestination.appendChild(selectTowerOrigin.lastElementChild)

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;

            // CONTA MAIS UM MOVIMENTO QUE USER EFETUOU
            let value = (Number.parseInt(num_movimentos.value)) + 1;
            num_movimentos.value = `${value}`;
            console.log('moveu' + value)
        }
        // QUANDO A TORRE DE DESTINO JA POSSUI BLOCOS 
        else if (selectTowerOrigin.lastElementChild.clientWidth < selectTowerDestination.lastElementChild.clientWidth) {
            selectTowerDestination.appendChild(selectTowerOrigin.lastElementChild)

            let value = (Number.parseInt(num_movimentos.value)) + 1;
            num_movimentos.value = `${value}`;

            // AQUI VAI O CASO DE VITORIA
            if(selectTowerDestination.id === 'areaTorre3' && selectTowerDestination.childElementCount === parseInt(n_blocos.value)){
                containMsg.style.display = "block";
                const areaMsg = document.querySelector('.areaMsg');
                if(num_movimentos.value > min_movimentos.value){
                    areaMsg.innerText = "Muito bom! Agora tente fazer com o minimo de movimentos!";
                }else{
                    areaMsg.innerText = "Brabo!"
                }
                console.log('ganhouu'+ num_movimentos.value +'/'+ min_movimentos.value);
            }

            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
            
            
        }
        // QUANDO NAO POSSO REALIZAR O MOVIMENTO
        else {
            selectTowerOrigin = undefined;
            selectTowerDestination = undefined;
        }
    }

});

reiniciar.addEventListener('click', function () {
    min_movimentos.value = `${(2 ** n_blocos.value) - 1}`;
    num_movimentos.value = 0;

    areaTorre1.innerHTML = '';
    areaTorre2.innerHTML = '';
    areaTorre3.innerHTML = '';
    newGame(n_blocos.value);

    selectTowerOrigin = undefined;
    selectTowerDestination = undefined;

})

btnNovoJogo.addEventListener('click', function () {
    min_movimentos.value = `${(2 ** n_blocos.value) - 1}`;
    num_movimentos.value = 0;

    areaTorre1.innerHTML = '';
    areaTorre2.innerHTML = '';
    areaTorre3.innerHTML = '';
    newGame(n_blocos.value);

    selectTowerOrigin = undefined;
    selectTowerDestination = undefined;

    containMsg.style.display = "none";

})


app();