const price = Symbol();

class Car{
    #brand;
    #price;
    // metodo constructor
    constructor(nameCar,brand,price){
       
        console.log("Has creado un nuevo objeto "+nameCar);
        this.name=nameCar;
        this.#brand=brand;
        this.#price=price;

    }
    igniteEngine = ( state ) => state? "Engine is on": "Engine is off"
    //Agregar una funcion que describa las caracteristicas del auto
    getDescription(){
        return `${this.name} de ${this.#brand} cuesta ${this.#price}`
    }
    set brand (newbrand){
        this.#brand = newbrand
    }
    get brand(){
        return this.#brand;
    }
    get price(){
        return this.#price
    }
}
class ElectricCar extends Car{
    #numberOfBatteries
    constructor(nameCar,brand,price,numerOfBatteries){
        super(nameCar,brand,price);
        this.#numberOfBatteries=numerOfBatteries;

    }
    getDescription(){
        return`${super.getDescription()},tiene ${this.#numberOfBatteries} baterias`
    }
}
export{ Car,ElectricCar };