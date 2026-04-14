//Limpiando despues de excepciones pag 143 

const cuentas = {
    a: 100,
    b: 0,
    c: 20
};

function obtenerCuenta(){
    let nombreCuenta = prompt("ingrese el nombre de la cuenta");
    if (!cuentas.hasOwnProperty(nombreCuenta)){
        throw new Error(`La cuenta "${nombreCuenta}" no existe`);
    }
    return nombreCuenta;
}

function transferir(desde, cantidad){
    if (cuentas[desde] < cantidad) return;
    cuentas[desde] -= cantidad;
    cuentas[obtenerCuenta()] += cantidad;
    return cuentas;
}

console.log(cuentas);