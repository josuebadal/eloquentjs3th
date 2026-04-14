//Ejercicio del libro cap 8 pagina 140

function pedirEntero(pregunta){
    let resultado = Number(prompt(pregunta));
    if (Number.isNaN(resultado)) return null;
    else return resultado
}

console.log(pedirEntero("Cuantos arboles ves?"));