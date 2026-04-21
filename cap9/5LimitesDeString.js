//Agrupacion De Expresiones
//Pagina 157 del libro 20-Abril-2026

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

console.log()