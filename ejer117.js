class Matriz {
    constructor(ancho, alto, elemento = (x, y) => undefined) {
        this.ancho = ancho;
        this.alto = alto;
        this.contenido = [];

        for (let y = 0; y < alto; y++) {
            for (let x = 0; x < ancho; x++) {
                this.contenido[y * ancho + x] = elemento(x, y);
            }
        }
    }

    get(x, y) {
        return this.contenido[y * this.ancho + x];
    }

    set(x, y, valor) {
        this.contenido[y * this.ancho + x] = valor;
    }
}

class MatrizSimetrica extends Matriz {
    constructor(tamaño, elemento = (x, y) => undefined) {
        super(tamaño, tamaño, (x, y) => {
            if (x < y) return elemento(y, x);
            else return elemento(x, y);
        });
    }

    set(x, y, valor) {
        super.set(x, y, valor);
        if (x !== y) {
            super.set(y, x, valor);
        }
    }
}

let matriz = new MatrizSimetrica(3, (x, y) => `${x},${y}`);

console.log(matriz.get(2, 1));  // debería reflejar
console.log(matriz.get(1, 2));  // mismo valor

console.log(
new MatrizSimetrica(2) instanceof MatrizSimetrica);

console.log(new MatrizSimetrica(2) instanceof Matriz);

console.log(new Matriz(2,2)instanceof MatrizSimetrica);

console.log([1] instanceof Array);