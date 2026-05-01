export const granRoble = {
  almacen: {
    "Pastura de Vacas": []
  },
  leerAlmacenamiento(nombre,callback){
    setTimeout(() => {
      callback(this.almacen[nombre]);
    },100)
  },
  send(destino,tipo,mensaje,callback){
    setTimeout(() =>{
      if (!this.almacen[destino]) {
        this.almacen[destino] = [];
      }
      this.almacen[destino].push({
        tipo,mensaje
      });
      callback();
    },100);
  }
};

//PAGINA 205 PDF