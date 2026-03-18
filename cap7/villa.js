function construirGrafo(bordes){
    let grafo = Object.create(null);
    function anadirBorde(desde, hasta){
        if (grafo[desde] == null){
            grafo[desde] = [hasta];
        } else {
            grafo[desde].push(hasta);
        }
    }
    for (let [desde, hasta,] of bordes.map(c => c.split("-"))){
        anadirBorde(desde,hasta);
        anadirBorde(hasta,desde);
    }
    return grafo;
}

const grafoCamino = construirGrafo(roads);