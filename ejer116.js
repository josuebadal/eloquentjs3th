class Temperatura {
    constructor(celsius){
        this.celsius = celsius;
    }
    get fahrenheit(){
        return this.celsius * 1.8 + 32;
    }
    set fahrenheit(valor){
        this.celsius = ((valor - 32) /1.8);
    }
}

let temp = new Temperatura(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);