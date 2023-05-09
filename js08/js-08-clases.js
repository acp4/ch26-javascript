console.log("Js08 Clases");

// ------------Crear una clase ----------
// Para el nombre se usa la notacion Pascal-Case(UpperCamerCase)

class Car{
    // metodo constructor
    constructor(nameCar,brand,price){
        console.log("Has creado un nuevo objeto "+nameCar);
        this.name=nameCar;
        this.brand=brand;
        this.price=price;

    }
    igniteEngine = ( state ) => state? "Engine is on": "Engine is off"
    //Agregar una funcion que describa las caracteristicas del auto
    getDescription(){
        return `${this.name} de ${this.brand} cuesta ${this.price}`
    }
}

// -----------Usar la clae para instanciar(crear)Objetos----
// para instanciar se usa new NombreClase

const elantra = new Car("elantra","Hyundai",450_000);
const aveo = new Car("aveo","chevrolet",250_000);

console.log(elantra);
console.log(aveo);
console.log(elantra.name + " " + elantra.igniteEngine(true));
console.log(elantra.getDescription());
console.log(aveo.getDescription());