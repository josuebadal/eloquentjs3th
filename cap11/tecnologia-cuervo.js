export const granRoble = {
  almacen: {
    "caches de alimentos": ["cache1", "cache2", "cache3"],

    cache1: {
      contenido: "Arroz, frijol, maiz"
    },

    cache2: {
      contenido: "Agua, sal, azucar"
    },

    cache3: {
      contenido: "Conservas y alimentos secos"
    }
  },

  leerAlmacenamiento(nombre, callback) {
    setTimeout(() => {
      callback(this.almacen[nombre]);
    }, 100);
  }
};