//------------------Desarrollo sincronico ----------------

const primerPaso = () => {
    console.log(" 01 - Inicio de mi programa Js07 ");
}
const segundoPaso = () => {
    console.log(" 02 - Inicio de mi programa Js07 ");
}
const tercerPaso = () => {
    console.log(" 03 - Inicio de mi programa Js07 ");
}
primerPaso();
segundoPaso();
tercerPaso();

// --------------Programación Asincrona ------------
// setTimeout()
// Establece un temporizador que ejecuta una funcion
// una vez que expire el temporizador

const desarrolloAsincrono = (saludo) => {
    console.log("Hola " + saludo);
}
const segundoPasoAsincrono = (saludo) => {
    //setTimeout(desarrolloAsincrono,4000,saludo);
    //setTimeout((saludoRef) => console.log("Hola " + saludoRef), 4000, saludo);
    setTimeout(() => console.log("Hola " + saludo), 4000);

}
console.log("----------------");
primerPaso();
//setTimeout(desarrolloAsincrono,3000,"ch26");
segundoPasoAsincrono("ch26 con 4s. de retardo");
tercerPaso();

// ----------------------- SetInterval --------------
// Ejecuta una funcion de manera reiterada con un tiempo de
// retardo fiijo entre cada llamada.

const segundoPasoConIntervalo = (saludo)=>{
   setInterval(()=>console.log("La banda malandra es "+saludo),2000);
}
console.log("-------setInterval---------");
primerPaso();
//segundoPasoConIntervalo("ch26  wu,wu");
tercerPaso();

// ----------------- Iniciar y detener setInterval---------
const refStartInterval = document.getElementById("iniciar");
const refStopInterval = document.getElementById("detener");
const refDateH2 = document.getElementById("fecha");
let idInterval;


const enableStar=()=>{
    refStartInterval.disabled= false;
    refStopInterval.disabled = true;

}
const disabledStart=()=>{
    refStartInterval.disabled=true;
    refStopInterval.disabled=false;
}

enableStar();

refStartInterval.addEventListener("click",(event)=>{
    //console.log("Se pulso inicicar");
    idInterval = setInterval(() => {
        refDateH2.innerHTML= new Date().toLocaleString();
    }, 1000);
    disabledStart();
});
refStopInterval.addEventListener("click",(event)=>{
    //console.log("Se pulso detener");
    // Detener mi intevalo
    refDateH2.innerHTML= " ";
    clearInterval( idInterval );  
    enableStar();
});