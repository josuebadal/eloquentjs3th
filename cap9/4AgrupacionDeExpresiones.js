//Agrupacion De Expresiones
//Pagina 154 del libro 20-Abril-2026

//Este caso podrias usarse para contraseñas
// la /i es para que solo acepte minusculas
let caricaturaLlorando = /boo+(hoo+)+/i;
console.log(caricaturaLlorando.test("Boohoooohoohooo"));


////COINCIDENCIAS Y GRUPOS PAG 155
console.log("INICIA COINCIDENCIAS DE GRUPO");

let coincidencia = /\d+/.exec("uno dos 100");
console.log(coincidencia);


console.log("uno dos 100".match(/\d+/));

let textoCitado = /'([^']*)'/;
console.log(textoCitado.exec("ella dijo 'hola'"));
// → ["'hola'", "hola"]

console.log(/mal(isimo)?/.exec("mal"));
// → ["mal", undefined]
console.log(/(\d)+/.exec("123"));
// → ["123", "3"]

console.log("LA CLASE DATE");
console.log(new Date());

console.log(new Date(2009, 11, 9));
console.log(new Date(2009,11,9,12,59,59,999));

console.log("FUNCION OBTENER FECHA");

function obtenerFecha(string){
    let [_, dia, mes, año] =
/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
return new Date(año, mes - 1, dia);
}
console.log(obtenerFecha("30-1-2003"));
// → Thu Jan 30 2003 00:00:00 GMT+0100 (CET)

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