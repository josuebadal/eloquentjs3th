import { granRoble } from "./tecnologia-cuervo.js";
import {definirTipoSolicitud} from "./tecnologia-cuervo.js";
import {todosLados} from "./tecnologia-cuervo.js";


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
    return request(nido, vecino, "ping")
    .then(() => true, () => false);
  });
  return Promise.all(solicitudes).then(resultado => {
    return nido.vecinos.filter((_, i) => resultado[i]);
  });
}

todosLados(nido => {
  nido.estado.chismorreo = [];
});


function enviarChismorreo(nido, mensaje, exceptoPor = null){
  nido.estado.chismorreo.push(mensaje);
  for (let vecino of nido.vecinos){
    if (vecino == exceptoPor) continue;
    request(nido, vecino, "chismorreo", mensaje);
  }
}


requestType("chismorreo", (nido, mensaje, fuente) => {
  if (nido.estado.chismorreo.includes(mensaje)) return;
  console.log(`${nido.nombre} recibo chismorreo '${mensaje}' de ${fuente}`);
  enviarChismorreo(nido, mensaje, fuente);
});

tipoSolicitud("conexiones", (nido, {nombre, vecinos}, 
  fuente) => {
    let conexiones = nido.estado.conexiones;
    if (JSON.stringify(conexiones.get(nombre)) == 
        JSON.stringify(vecinos)) return;
        conexiones.set(nombre, vecinos);
        difundirConexiones(nido, nombre, fuente);
  });

  function difundirConexiones(nido, nombre, exceptoPor = null){
    for (let vecino of nido.vecinos){
      if (vecino == exceptoPor) continue;
      solicitud(nido, vecino, "conexiones", {
        nombre,
        vecinos: nido.estado.conexiones.get(nombre)
      });
    }
  }


  todosLados(nido => {
    nido.estado.conexiones = new Map;
    nido.estado.conexiones.set(nido.nombre, nido.vecinos);
    difundirConexiones(nido, nido.nombre);
  });


  function encontrarRuta(desde, hasta, conexiones){
    let trabajo = [{donde: desde, via: null}];
    for (let i = 0; i < trabajo.length; i++){
      let {donde, via} = trabajo[i];
      for (let siguiente of conexiones.get(donde) || []){
        if (siguiente == hasta) return via;
        if (!trabajo.some(w => w.donde == siguiente)){
          trabajo.push({donde: siguiente, via: via || siguiente});
        }
      }
    }
    return null;
  }


function solicitudRuta(nido, objetivo, tipo, contenido){
  if (nido.vecinos.includes(objetivo)){
    return  solicitud(nido, objetivo, tipo, contenido);
  } else {
    let via = encontrarRuta(nido.nombre, objetivo,
      nido.estado.conexiones);
      if (!via) throw new Error(`No hay rutas disponibles hacia ${objetivo}`);
      return solicitud(nido,via, "ruta",
        {objetivo,tipo, contenido});
  }
}

tipoSolicitud ("ruta", (nido, {objetivo, tipo, contenido}) => {
  return solicitudRuta (nido, objetivo, tipo, contenido);
});

tipoSolicitud("almacenamiento", (nido,nombre) => almacenamiento(
  nido,nombre));

  function encontrarAlmacenamiento(nido, nombre){
    return almacenamiento(nido, nombre).then(encontrado => {
      if (encontrado != null) return encontrado;
      else return encontrarAlmacenamientoRemoto(nido, nombre);
    });
  }


  function red(nido){
    return Array.from(nido.estado.conexiones.keys());
  }

  function encontrarAlmacenamientoRemoto(nido, nombre){
    let fuentes = red(nido).filter(n => n != nido.nombre);
    function siguiente(){
      if (fuentes.length == 0){
        return Promise.reject(new Error("No encontrado"));
      } else {
        let fuente = fuentes[Math.floor(Math.random() * 
        fuentes.length)];
        fuentes = fuentes.filter(n => n != fuente);
        return solicitudRuta(nido, fuente, "almacenamiento", nombre)
        .then(valor  => valor != null ? valor : siguiente(), 
        siguiente);
      }
    }
    return siguiente();
  }

  async function encontrarAlmacenamiento(nido, nombre){
    let local = await   almacenamiento(nido, nombre);
    if (local != null) return local;

    let fuentes = red(nido).filter(n => n != nido.nombre);
    while (fuentes.length > 0){
      let fuente = fuentes[Math.floor(Math.random() * 
       fuentes.length)];
       fuentes = fuentes.filter(n => n != fuente);
       try {
        let encontrado = await solicitudRuta(nido, fuente, "almacenamiento",
          nombre);
          if (encontrado != null) return encontrado;
       } catch (_) {}
    }
    throw new Error("No encontrado");
  }


  function* potenciacion(n){
    for (let actual = n;; actual *= n){
      yield actual;
    }
  }

  for (let potencia of potenciacion(3)){
    if (potencia > 50) break;
    console.log(potencia);
  }


  Conjunto.prototype[Symbol.iterator] = function*(){
    for (let i = 0; i < this.miembros.length; i++ ){
      yield this.miembros[i];
    }
  };

  let comienzo = Date.now();
  setTimeout(() => {
    console.log("Tiempo de espera corrio al ", Date.now() - comienzo);
  }, 20);
  while (Date.now() < comienzo + 50){}
  console.log("Se desperdicio tiempo hasta el ", Date.now() - comienzo);

  Promise.resolve("Listo").then(console.log);
  console.log("Yo primero!");

  function cualquierAlmacenamiento(nido, fuente, nombre){
    if (fuente == nido.nombre) return almacenamiento(nido,nombre);
    else return solicitudRuta(nido, fuente, "almacenamiento", nombre);
  }

  async function polluelos(nido,años){
    let lista = "";
    await Promise.all(red(nido).map(async nombre => {
      lista += `${nombre}: ${await cualquierAlmacenamiento(nido, nombre, `polluelos en ${años}`)
    }\n`;
    }));
    return lista;
  }

  async function polluelos(nido,año){
    let linea = red(nido).map(async nombre =>{
      return nombre + ": " +
      await cualquierAlmacenamiento(nido, nombre, `polluelos en ${año}`);
    });
    return (await Promise.all(lineas)).join("\n");
  }

  


///PAGINA 210 DEL PDF 11-MAYO-2026