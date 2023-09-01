//tipos primitivos

//Boolean
var Vouf = false
console.log(typeof (Vouf));

//Number
var numero = 1
console.log(typeof (numero));

//string
var nome = 'joao'
console.log(typeof (nome));

// como declarar

var varialvel = 'joao';
varialvel = 'silva';
console.log(varialvel)

let varialvel2 = 'cunha';
varialvel2 = 'matins';
console.log(varialvel2)

// Nao pode ser mudada.
const constante = ana;
console.log(constante);


// escopo global e local

var escopoGlobal = 'global'

function escopolocal() {
    let escopoGlobalInterno = 'local'
    /* para o let escopoGlobalInterno ser mostrada no console.log, o console.log tem que estar dentro da function, se estiver fora so mostra o escopoGlobal*/
    console.log(escopoGlobalInterno);
}

function escopolocal();

//atribuiçao 
var atribuiçao = 'joao'
/* somente 1 sinal de "=" quer dizer que estamos atribuindo um valor a variavel */

//comparaçao
var comparacao = '0' == 0;
console.log(comparacao);
/* quando temos 2 sinais de "=" significa que esta comparando o valor que demos para a varialvel com algum outro valor. */

//comparaçao identica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica)
/* quando temos 3 sinais de "=" siginifica que estamos comparando nao so o valor da variavel e outro valor qualquer, mas sim seu valor e seu tipo. */


/*
OPERADORES ARITIMETICOS

 soma = + EX: 1+1 = 2
 subtraçao = - EX:1-1 = 0
 multiplicacao = * EX: 2*3 = 6
 divisao  real = / EX: 6/2 = 3
 diuvisao inteira = % EX: 5%2 = 1
 potenciaçao = ** EX: 2 ** 10 = 1024

*/


/*
OPERADORES RELACIONAIS 

maior = >
menor = <
menor ou igual = (<=)
maior ou igual =(>=)

*/


/*
OPERADORES LOGICOS

And = &&
our = ||
not = !-

*/