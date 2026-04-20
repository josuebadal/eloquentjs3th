//Repitiendo partes de un patron
//Pagina 153 del libro 20-Abril-2026

//'+' indica que los siguientes deben ser \d digitos
console.log(/'\d+'/.test("'123'"));
// → true

// Vacio no es un \d digito
console.log(/'\d+'/.test("''"));
// → false

// * Coincidencias de 0 o mas veces
console.log(/'\d*'/.test("'123'"));
// → true

// No es un digito \d pero coincide 0 veces por eso es TRUE
console.log(/'\d*'/.test("''"));
// → true

// El ? sirve para hacer opcional el elemento
let reusar = /reh?usar/;
console.log(reusar.test("rehusar"));
// → true
console.log(reusar.test("reusar"));
// → true



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