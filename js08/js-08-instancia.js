import{Car,ElectricCar} from "./js-08-clase-auto.js";

console.log("Importar y exportar clase");

const elantra = new Car("Elantra","Hyundai",410_000);

console.log(elantra.getDescription());
console.log(elantra);
const electricElantra = new ElectricCar("Electric Elantra" , "Hyndei", 810_000, 5);
console.log(electricElantra.getDescription() );
