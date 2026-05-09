import { granRoble } from "./tecnologia-cuervo.js";
import {definirTipoSolicitud} from "./tecnologia-cuervo.js";



granRoble.send(
  "Pastura de Vacas",
  "nota",
  "Vamos a graznar fuerte a las 7PM",
  () => console.log("Nota entregada.")
);


granRoble.leerAlmacenamiento("caches de alimentos", caches => {
let primerCache = caches[0];
granRoble.leerAlmacenamiento(primerCache, informacion => {
console.log(informacion);
});
});


definirTipoSolicitud("nota", (nido, contenido, fuente, listo) =>{
  console.log(`${nido.nombre} recibo nota: ${contenido}`);
  listo();
});

let quince = Promise.resolve(15);
quince.then(valor => console.log(`Obtuve ${valor}`));

function almacenamiento(nido,nombre){
  return new Promise(resolve =>{
    nido.leerAlmacenamiento(nombre,resultado =>(resultado));
  });
}
almacenamiento(granRoble, "enemigos").then(valor => console.log("Obtuve", valor));

class TiempoDeEspera extends Error{}
function request(nido, objetivo, tipo, contenido){
  return new Promise((resolve,reject) =>{
    let listo = false;
    function intentar(n){
      nido.send(objetivo, tipo, contenido, (fallo,value) => {
        listo = true;
        if (fallo) reject(fallo);
        else resolve(value);
      });
      setTimeout(() =>{
        if (listo) return;
        else if (n < 3) intentar(n + 1);
        else reject(new TiempoDeEspera("Tiempo de espera agotado"));
      },250);
    }
    intentar(1);
  });
}

function tipoSolicitud(nombre, manejador){
  definirTipoSolicitud(nombre, (nido, contenido, fuente, devolucionDeLlamada) => {
    try {
      Promise.resolve(manejador(nido, contenido, fuente)).then(response => devolucionDeLlamada(null,response), failure => devolucionDeLlamada(failure));
    } catch (exception){
      devolucionDeLlamada(exception);
    }
  });
}

tipoSolicitud("ping", () => "pong");

function vecinosDisponibles(nido){
  let solicitudes = nido.vecinos.map(vecino => {
    return request(nido, vecino, "ping").then(() => true, () => false);
  });
  return Promise.all(solicitudes).then(resultado => {
    return nido.vecinos.filter((_, i) => resultado[i]);
  });
}



///PAGINA 201 DEL PDF 08-MAYO-2026