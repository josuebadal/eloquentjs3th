"use strict";
//Ejercicio de la pagina 142 Manejo de Excepciones
//se requiere del index para hacer las pruebas


function pedirDireccion(pregunta){
    let resultado = prompt(pregunta);
    if (resultado.toLowerCase() == "izquierda") return "I";
    if (resultado.toLowerCase() == "derecha") return "D";
    throw new Error("Direccion Invalida: " + resultado);
}

function mirar(){
    if (pedirDireccion("Hacia que direccion quieres ir ?") == "I"){
        return "una casa";
    } else {
        return "dos osos furiosos";
    }
}

try {
    console.log("Tu vez", mirar());
}   catch (error){
    console.log("Algo incorrecto sucedio: " + error);
};