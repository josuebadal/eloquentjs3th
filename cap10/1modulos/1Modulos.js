//Modulos Cap 10 
//Pagina 179 del libro 27-Abril-2026


const x = 1;

function evaluarYRetornarX(codigo){
    eval(codigo);
    return x;    
}
console.log(evaluarYRetornarX("var x = 2"));

let masUno = Function("n", "return n+1;");
console.log(masUno(4));