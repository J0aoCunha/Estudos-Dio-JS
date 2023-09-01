//FUNÇÕES
/*
Funções sao blocos de comandos e instruçoes para a execuçao de determinada tarefa.


Ex: function nomeDaFunction(){
    ${instrução};
}
*/

//Ex:
function funcao() {
    console.log('Mensagem que veio da funçao!!');
}

funcao();

/*
FUNÇAO COM PARAMETROS

As funções podem receber em sua declaração, parametros, que servem como variaveis, onde sua atribuição pode ser feita durante a chamada da função:

Ex: function nomeDaFunction(parametro){
    ${instrução};
}

nomeDaFuncao(valorDoParametro);
*/

function mensagem(primeiro, segundo) {
    console.log(primeiro, segundo);
}

mensagem('tudo certo', 'jovem');