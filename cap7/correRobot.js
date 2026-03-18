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

