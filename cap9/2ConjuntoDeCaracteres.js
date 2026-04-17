//COnjunto de Caracteres
//Pagina 151 del libro 17-Abril-2026
/*
\d Cualquier caracter dígito
\w Un caracter alfanumérico
\s Cualquier carácter de espacio en blanco (espacio, tabulación, nueva línea y similar)
\D Un caracter que no es un dígito
\W Un caracter no alfanumérico
\S Un caracter que no es un espacio en blanco*/

console.log("Busca 1992 en un un listado y en un rango");
console.log(/[0123456789]/.test("en 1992"));
console.log(/[0-9]/.test("en 1992"));

console.log("Dada una fecha busca solo numeros");
let fechaHora = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(fechaHora.test("30-01-2003 15:20"));
console.log(fechaHora.test("30-jan-2003 15:20"));
//"jan" marca false porque no es un numero

console.log("Busca cualquier numero que sea diferente de 0 y 1");
let noBinario = /[^01]/;
console.log(noBinario.test("1100100010100110"));
console.log(noBinario.test("1100100010200110"));
//Test no binario el segundo arroja true porque
//hay un numero que no esta entre ceros y unos "2"

