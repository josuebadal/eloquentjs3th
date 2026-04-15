class MultiplicadorUnitFailure extends Error {}

function primitiveMultiply(a,b){
    if (Math.random() < 0.2){
        return a * b;
    } else {
        throw new MultiplicadorUnitFailure("Klunk");
    }
}

function reliableMultiply(a,b) {
    for (;;){
        try {
            return primitiveMultiply(a,b);
        } catch (e){
            if (!(e instanceof MultiplicadorUnitFailure))
                throw e;
        }
    }
}

console.log(reliableMultiply(8,8));