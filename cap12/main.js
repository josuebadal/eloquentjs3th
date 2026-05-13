function analizarExpresion(programa){
    programa = saltarEspacio(programa);
    let emparejamiento, expresion;
    if (emparejamiento = /^"([^"]*)"/.exec(programa)){
        expresion = {tipo : "valor", valor: emparejamiento[1]};
    } else if (emparejamiento = /^\d+\b/.exec(programa)){
        expresion = {tipo: "valor", valor: Number(emparejamiento[0])};
    } else if (emparejamiento = /^[^\s(),]+/.exec(programa)){
        expresion = {tipo: "palabra", nombre: emparejamiento[0]};
    } else {
        throw new SyntaxError("Sintaxis inesperada: "+ programa);
    }
    return aplicarAnalisis(expresion,programa.slice(emparejamiento[0].length));
}

function saltarEspacio(string){
    let primero = string.search(/\S/);
    if (primero == -1) return "";
    return string.slice(primero);
}