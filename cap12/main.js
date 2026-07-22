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

function aplicarAnalisis(expresion,programa){
    programa = saltarEspacio(programa);
    if (programa[0] != "("){
        return { expresion: expresion, resto: programa};
    }
    programa = saltarEspacio(programa.slice(1));
    expresion = {tipo: "aplicar", operador: expresion, argumentos: []};
    while (programa[0] != ")"){
        let argumento = analizarExpresion(programa);
        expresion.argumentos.push(argumento.expresion);
        programa = saltarEspacio(argumento.resto);
        if (programa[0] == ","){
            programa = saltarEspacio(programa.slice(1));
        } else if (programa[0] !== ","){
            throw new SyntaxError("Esperaba ',' o ')'");
        }
    }
    return aplicarAnalisis(expresion,programa.slice(1));
}

function analizar(programa){
    
}