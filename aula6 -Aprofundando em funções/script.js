//Aprofundando em funções
/*
São funções que possuem o uso mais comum, deve ser declarada
usando a palavra reservada “function” seguida do nome da
função, parênteses “()” e chaves “{}”:


Ex.: function nomeDaFuncao() {
${instrucao};
}

o nome da função é obrigatório;
 */

function funcao() {
    console.log('sou uma mensagem de uma funçao declarativa');
}

funcao()


//Expressões de Funções
/*
São funções atribuídas à expressões. A nomeação das funções por
expressão é opcional:

Ex. 1: var funcao = function nomeDaFuncao() {

${instrucao};
}
 
ou

Ex. 2: var funcao = function() {

${instrucao};
};
*/

//Ex 1
var funcao2 = function Exemplo1() {
    console.log('Sou uma mensagem de uma funçao de expressão!!');
}
funcao2();

//Ex2

var funcao2 = function () {
    console.log('Sou uma mensagem de uma funçao de expressão!! Exemplo 2');
}
funcao2();


//Arrow Function
/*
São funções de expressão de sintaxe curta. Arrow functions
sempre serão anônimas, e portanto não podem ser nomeadas.
deve ser declarada com parênteses "()", seguido de "=>" e depois
chaves "{}"

Ex. 1: var funcao = () => {
${instrucao};
}
*/

var funcao3 = () => {
    console.log('Sou uma mensagem de uma arrow funtion')
}
funcao3();
