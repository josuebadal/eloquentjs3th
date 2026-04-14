//Ejercicio del libro pagina 141
function ultimoElemento(array){
    if (array.length == 0){
        return {fallo: true};
    } else {
        return {elemento: array[array.length - 1]};
    }
}

let resultado = ultimoElemento([10,30,20]);
console.log(resultado);
console.log(ultimoElemento([5, 10, 15]));
console.log(ultimoElemento([]));
console.log(ultimoElemento(["a", "b", "c"]));