//PAGINA 140 DEL LIBRO
function numeroAString(n, base = 10){
    let resultado = "", signo = "";
    if (n < 0){
        signo = "-";
        n = -n;
    }
    do {
        resultado = String(n % base) + resultado;
        n = n / base; // produce decimales
    } while (n > 0);
    return signo + resultado;
}

console.log(numeroAString(13,10));