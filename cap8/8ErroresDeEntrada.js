// Clase ErrorDeEntrada cap 8 pagina 146 del libro

class ErrorDeEntrada extends Error{}

function pedirDireccion(pregunta){
    let resultado = prompt(pregunta);
    if (resultado.toLowerCase() == "izquierda") return "I";
    if (resultado.toLowerCase() == "derecha") return "D";
    throw new ErrorDeEntrada("Direccion invalida: " +resultado);
}
for (;;){
    try {
       let direccion = pedirDireccion("Donde?");
       console.log("Tu eliges ", direccion);
       break;        
    }  catch (e) {
        if (e instanceof ErrorDeEntrada){
            console.log ("No es una direccion valida. Intentalo de nuevo ");
        } else {
            throw e;
        }
    }
}