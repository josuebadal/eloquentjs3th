//Agrupacion De Expresiones
//Pagina 157 del libro 20-Abril-2026

//NOTAS DE APOYO
/*

\d Cualquier caracter dígito
\w Un caracter alfanumérico
\s Cualquier carácter de espacio en blanco (espacio, tabulación, nueva línea y similar)
\D Un caracter que no es un dígito
\W Un caracter no alfanumérico
\S Un caracter que no es un espacio en blanco
. Cualquier caracter a excepción de una nueva línea

*/

console.log(/cat/.test("concatenar"));
// → true
console.log(/\bcat\b/.test("concatenar"));
// → false

let conteoAnimales = /\b\d+ (cerdo|vaca|pollo)s?\b/;
console.log(conteoAnimales.test("15 cerdo"));
// → true
console.log(conteoAnimales.test("15 cerdopollos"));
// → false

console.log("EL METODO REPLACE");
// PAGINA 161


//Aqui solo remplaza la primera coincidencia
console.log("Borobudur".replace(/[ou]/,"a"));
// → Barobudur

//Aqui hace el cambio de manera global a todas las coincidencias con el /g
console.log("Borobudur".replace(/[ou]/g,"a"));
// → Barabadar

console.log("INTERCAMBIAR NOMBRES Y APELLIDOS");
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
        .replace(/(\w+), (\w+)/g, "$2 $1"));

let s = "la cia y el fbi";
console.log(s.replace(/\b(fbi|cia)\b/g, str => str.toUpperCase()));

console.log("EJERCICIOS DE LIMON, LECHUGA, HUEVOS");
let almacen = "1 limon, 2 lechugas, y 101 huevos";
function menosUno(coincidencia, cantidad, unidad){
    cantidad = Number(cantidad) -1;
    if (cantidad == 1) { //solo queda uno, remover la 's'
        unidad = unidad.slice(0, unidad.length - 1);
    } else if (cantidad == 0){
        cantidad = "sin";
    }
    return cantidad + " " + unidad;
}
console.log(almacen.replace(/(\d+) (\w+)/g, menosUno));

//PAGINA 163 DEL PDF
console.log("INICIA EJERCICIO DE CODICIA");
function removerComentarios(codigo){
    return codigo.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
    //return codigo.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}
console.log(removerComentarios("1 + /* 2 */3"));
// → 1 + 3
console.log(removerComentarios("x = 10; // ten!"));
// → x = 10;
console.log(removerComentarios("1 /* a */+/* b */ 1"));
// → 1 1
console.log(removerComentarios("1 /* a */+/* b */ 1"));
// → 1 + 1


console.log("Ejercicios Finales del cap 5");
//Ejercicios  finales del capitulo 5
/*
Code golf es un término utilizado para el juego de intentar expresar un programa en particular con la menor cantidad de caracteres posible. De manera
similar, regexp golf es la práctica de escribir una expresión regular lo más pequeña posible para que coincida con un patrón dado, y solo ese patrón.
Para cada uno de los siguientes elementos, escribe una expresión regular
para comprobar si el patrón dado ocurre en una cadena. La expresión regular
debe coincidir solo con cadenas que contengan el patrón. Cuando tu expresión
funcione, verifica si puedes hacerla más pequeña.
*/

verify(/car[rt]/,
    ["my car", "bad cats"],
    ["camper", "high art"]);
    
verify(/pr?op/,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/, 
    ["ferret", "ferry", "ferrari"],
    ["ferrun", "transfer A"]);    

verify(/ious($|\P{L})/u,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
    ["bad punctuation ."],
    ["escape the dot"]);

verify(/\p{L}{7}/u,
    ["Siebentausenddreihundertzweiundzwanzig"],
    ["no", "three small words "]);

verify(/(^|\P{L})[^\P{L}e]+($|\P{L})/ui,
    ["read playypus", "wobbling nest"],
    ["earth bed", "bedrøvet abe", "BEET"]); 

function verify(regexp, yes, no){
    if (regexp.source == "...") return;
    for (let str of yes) if (!regexp.test(str)){
        console.log(`Failure to match '${str}'`);
    }
    for (let str of no) if (regexp.test(str)){
        console.log(`Unexpected match for '{str}'`);
    }
}

console.log("EJERCICIO NUMERO 2");
let text = "'I'm the cook , 'he said, 'it's my job.'";
console.log(text.replace(/(^|\P{L})'|'(\P{L}|$)/gu, '$1"$2'));

console.log("EJERCICIO NUMERO 3");
let number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/;
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
    "1.3e2", "1E-4", "1e+12"]){
        if (!number.test(str)){
            console.log(`Failed to match '${str}'`);
        }
    }
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
    ".5.", "1f5", "."]){
        if (number.test(str)){
            console.log(`Incorrectly accepted '{str}'`);
        }
    }