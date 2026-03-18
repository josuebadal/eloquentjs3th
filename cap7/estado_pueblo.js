class EstadoPueblo{
    constructor(lugar,paquetes){
        this.lugar= lugar;
        this.paquetes = paquetes;
    }
    mover(destino){
        if (!grafoCamino[this.lugar].includes(destino)){
            return this;
        } else {
            let paquetes = this.paquetes.map(p => {
                if (p.lugar != this.lugar) return p;
                return {lugar: destino, direccion: p.direccion};
            }).filter(p => p.lugar != p.direccion);
            return new EstadoPueblo(destino,paquetes);
        }
    }
}

let primero = new EstadoPueblo(
    "Oficina de Correos",
    [{lugar: "Oficina de Correos", direccion: "Casa de Alicia" }]
);

let siguiente = primero.mover("Casa de Alicia");

console.log(siguiente,lugar);
console.log(siguiente.paquetes);
console.log(primero.lugar);