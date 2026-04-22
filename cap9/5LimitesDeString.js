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