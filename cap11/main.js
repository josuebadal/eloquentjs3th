import { granRoble } from "./tecnologia-cuervo.js";

granRoble.leerAlmacenamiento("caches de alimentos", caches => {
  let primerCache = caches[2];

  granRoble.leerAlmacenamiento(primerCache, informacion => {
    console.log(informacion);
  });
});