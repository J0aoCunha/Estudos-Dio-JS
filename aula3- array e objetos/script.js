// oq sao vetores ou arrays e como declarar uma array
let array = ["string", 1, true];
console.log(array)

//pode guardar varios tipos de dados
let array2 = ["string", 1, true, ['array3'], ['array4'], ['array5']];
console.log(array2[0])

/*
MANIPULADORES DE ARRAY

forEach() - itera uma array;
push() - add item no final da array;
pop() - remove item no final da array;
shift() - add item no inicio da array;
unshift() - add item no inicio da array;
indexOf() - retorna o indice de uma valor;
splice() - remove ou substitui um item pelo indice;
slice() - retorna uma parte de uma array existente;

*/

//forEach
array.forEach(function (item, indice) {
    console.log(item, indice);
});

//push
array.push('novo item no final')
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift()
console.log(array);

//unshift
array.unshift('novo item no inicio');
console.log(array);

//indexOf
console.log(array.indexOf(true));

//splice
array.splice(0, 3);
console.log(array);

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);

//Objetos
/*
O QUE É OBEJETO
São dados que possuem *propriedade e valores* que definem suas caracteristicas. Deve ser declardo entre chaves "{}".

*/

let object = {
    string: 'string',
    Number: 1,
    Boolean: true,
    array: ["array"],
    objectInterno: {
        objectInterno: "objeto interno"
    }
}
console.log(object.string);

//desestruturaçao do Objeto
var string = object.string;
console.log(string)

var arrayobject = object.array;
console.log(arrayobject);

// outro metodo de desestruturaçao
var { string, Boolean, objectInterno } = object;
console.log(string, Boolean, objectInterno);
