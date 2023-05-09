console.log("Js08 Objetos");

// ---------Crear objetos ------
const frutasColores = {
    //clave:valor
    fresa :["roja"],
    pepino :["verde"],
    mango:["amarillo"],
    naranja:["anaranjado"],
    mandarina:["naranja"],
    mora:["morado"],
    pitaya:["rosa","rojo","blanco","amarillo"]
};
// Formas de leer un objeto
//leer el clor del pepino

// -------------Iterando los objetos ----------------------------------
// Iterar los valores con for-in
// iterar sobre todas las propiedades (keys) de un objeto

for(let fruta in frutasColores){
    console.log( `${fruta}  tiene colores ${frutasColores [fruta]} ` )
}

// -------------Uso de symbol----------
/*
    Se utiliza para añadir claves de propiedades unicas y que esten ocultas
    a otros mecanismos como la iteacion y stringify
    Esto nos sirve para realizar el concepto de encapsulacion 
 */

const sueldoOculto = Symbol();
const datosEmpleado = {
    nombre:"El kesas",
    apellido:"Britas",
    [sueldoOculto]:50_000
}

for(let datos in datosEmpleado){
    console.log(`${datos}:${datosEmpleado[datos]}`);
}

console.log(datosEmpleado[sueldoOculto])
//localStorage.setItem("datos empleados",JSON.stringify(datosEmpleado));
sessionStorage.setItem("datos empleados",JSON.stringify(datosEmpleado));

// Bote de lunetas
const boteLunetas = {
    gramaje :20,
    sabor:"chocolate",
    costo:35,

    abrir:()=>{
        return "Despachar producto";
    },
    comer:function(gramoscomidos){
        return this.gramaje -= gramoscomidos;
    }
}
console.log("mi bote de lunetas tiene(g)"+boteLunetas.comer(5));

const car = {
    color: "black",
    type: "sedan",
    brand: "Hyundai",
    price: 250_000,
    igniteEngine: ( state ) => state? "Engine is on": "Engine is off"
  };

console.log(car.igniteEngine(true));
  
  