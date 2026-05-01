//EJERCICIOS DEL LIBRO DE LOGICA DE PROGRAMACION USANDO JAVASCRIPT
"use strict";
/*
console.log("Ejer cuenta cuantos numeros lo conforman: ");

let num = 1579, cd= 0;
console.log ("Numero: ",num,"Contador: ",cd);

while (num > 0){
    num = Math.floor(num/10);
    cd++;
    
}
    //console.log("Numero:",num);
console.log("Cantidad De Digitos:",cd);
*/

//PEDIR UN NUMERO Y VALIDAR CUANTOS DIGITOS TIENE 

let num = -957;
if (num < 0){
    num = num * (-1);
    console.log("El numero era negativo", num);
    }

if (num.length = 1){
    console.log("1 digito");
} else if (num.length = 2){
    console.log("2 digitos")
} else if (num.length = 3){
    console.log ("3 digitos")
} else if (num.length = 4){
    console.log("fuera de rango")
}

    