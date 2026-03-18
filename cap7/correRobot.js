function correrRobot(estado, robot, memoria){
    for (let turno = 0;; turno ++){
        if (estado.paquetes.length ==0){
            console.log(`Listo en ${turno} turno`);
            break;
        }
        let accion = robot(estado, memoria);
        estado = estado.mover(accion.direccion);
        memoria = accion.memoria;
        console.log(`Moverse a ${accion.direccion}`);
    }
}

function eleccionAleatoria(array){
    let eleccion = Math.floor(Math.random() * array.length);
    return array[eleccion];
}

function robotAleatorio(estado){
    return {direccion: eleccionAleatoria(grafoCamino[estado.lugar])};
}

EstadoPueblo.aleatorio = function(numeroDePaquetes = 5){
    let paquetes = [];
    for (let i = 0; i < numeroDePaquetes; i++){
        let direccion = eleccionAleatoria(Object.keys(grafoCamino));
        let lugar;
        do {
            lugar = eleccionAleatoria(Object.keys(grafoCamino));
        } while (lugar == direccion);
        paquetes.push({lugar, direccion});
    }
    return new EstadoPueblo("Oficina de Correos", paquetes);
};