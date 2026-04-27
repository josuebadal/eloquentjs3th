//Expresiones Regulares Dinamicas 
//Pagina 164 del libro 23-Abril-2026

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

/*let nombre = "harry";
let texto = "Harry es un personaje sospechoso.";
let regexp = new RegExp("\\b("+ nombre +")\\b", "gi");
console.log(texto.replace(regexp, "_$1_"));


let nombre = "dea+hl[]rd";
let texto = "Este sujeto dea+hl[]rd es super fastidioso.";
let escapados = nombre.replace(/[\\[.+*?(){|^$]/g, "\\$&");
let regexp = new RegExp("\\b" + escapados +"\\b","gi");
console.log(texto.replace(regexp, "_$&_"));

console.log("METODO SEARCH");
console.log("  palabra".search(/\S/));
console.log("   ".search(/\S/));

console.log("PROPIEDAD LASTINDEX");

//NO CUENTA PATRONES BUSCA "y" APARTIR DE LA POSICION 3 DE LA CADENA
let patron = /y/g;
patron.lastIndex = 3;
let coincidencia = patron.exec("xyzasdzy");
console.log(coincidencia.index);
// → 7
console.log(patron.lastIndex);
// → 8   AQUI BUSCA DE DERECHA A IZQUIERDA

let global = /abc/g;
console.log(global.exec("xyz abc"));

console.log("Indice de llamada anterior");
let adhesivo = /abc/y;
console.log(adhesivo.exec("xyz abc"));

let digito = /\d/g;
console.log(digito.exec("aqui esta: 1"));
console.log(digito.exec("y ahora: 1"));

console.log("METODO MATCH STRING");
console.log("Banana".match(/an/g));
*/
console.log("CICLOS SOBRE COINCIDENCIAS");
let entrada = "Un string con 3 numeros en el... 42 y 88.";
let numero = /\b\d+\b/g;
let coincidencia;
while (coincidencia = numero.exec(entrada)){
    console.log("Se encontro", coincidencia[0], "en", coincidencia.index);
}


/*
/abc/ Una secuencia de caracteres
/[abc]/ Cualquier caracter de un conjunto de caracteres
/[^abc]/ Cualquier carácter que no este en un conjunto de caracteres
/[0-9]/ Cualquier caracter en un rango de caracteres
/x+/ Una o más ocurrencias del patrón x
/x+?/ Una o más ocurrencias, no codiciosas
/x"*"/ Cero o más ocurrencias

/x?/ Cero o una ocurrencia
/x{2,4}/ De dos a cuatro ocurrencias
/(abc)/ Un grupo
/a|b|c/ Cualquiera de varios patrones
/\d/ Cualquier caracter de digito
/\w/ Un caracter alfanumérico (“carácter de palabra”)
/\s/ Cualquier caracter de espacio en blanco
/./ Cualquier caracter excepto líneas nuevas
/\b/ Un límite de palabra
/^/ Inicio de entrada
/$/ Fin de la entrada*/

PAGINA 183