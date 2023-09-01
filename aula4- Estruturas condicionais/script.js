//EStruturas condicionais
/*
O QUE É ESTRUTURA CONDICIONAIS?
São intruçoes para realizar determinadas tarefas a partir de uma condiçao, seja de decisão ou de repetição.
*/

var jogador1 = 0;
var jogador2 = 0;
var placar;

/*
//ninho de if
if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('jogador1 marcou ponto');
    } else if (jogador2 > 0) {
        console.log('jogador2 marcou  ponto')
    }
    else {
        console.log('ninguem marcou gol');
    }
}
*/

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('jogadores validos') : console.log('jogadores invalidos');

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador1 marcou ponto');
    placar = jogador1 > jogador2;
}
//usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador2 marcou  ponto');
    placar = jogador1 < jogador2;
}
//usando else
else {
    console.log('ninguem marcou gol');
}


//switch/case

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador2 ganhou');
        break
    default:
        console.log('ninguem ganhou!!');
}


//estrutura de repetiçao
/*
O QUE É ISSO?
São estrutura condicionais que repetem uma instruçao ate atingir determinada condiçao que os faça parar

temos:
For; Executa um instruçao ate que ela seja falsa
For/in;
For/of;
While;
Do/While;

*/


let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

let obeject = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3',
}
//For; Executa um instruçao ate que ela seja falsa
for (let indice = 0; indice.length; indice++) {
    console.log(indice);
}

//for/in executa a repetiçao a partir de uma propriedade

for (let i in array) {
    console.log(i);
}

for (i in Object) {
    console.log(i)
}

//for/of executa uma repetiçao a partir de valor
for (i of array) {
    console.log(i);
}

//com objeto
for (i of obeject.propriedade1) {
    console.log(i);
}

//while
var a = 0

while (a < 10) {
    a++
    console.log(a)
}


//do/while
do {
    a++
    console.log(a);
} while (a < 10);