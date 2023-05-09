console.log("Sesion Js03");

// --------------- Declaracion de bloque -----------------
{
  /*
  Las variables declaradas con let y const 
  solo tendran alcance dentro del bloque 
  o bloques anidados.
  */
  let nombre = "Abraham";
  const apellido = "Castillo";
  let edadAbraham = 25, edadLuis = 25;
  let abrahamcor = luiscor = 26;

  {
    /*
    Bloque anidado
    Si una variable local tiene el mismo nombre de
    una variabñe global o de bloque superiro,la variable
    local oculta las otras variables,para que la vatiable
    locas sea usada.
    */
    let nombre = "ACP";
    const apellido = "Cas";
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Abraham: ${edadAbraham} años`);
    console.log(`luis: ${edadLuis} años`);
    console.log(`Abraham cohorte: ${abrahamcor}`);
    console.log(`luis cohorte: ${luiscor}`);
  }
  console.log(`Me llamo ${nombre} ${apellido}`);
  console.log(`Abraham: ${edadAbraham} años`);
  console.log(`luis: ${edadLuis} años`);
  console.log(`Abraham cohorte:: ${abrahamcor}`);
  console.log(`luis cohorte: ${luiscor}`);
}
// console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estan definidas
// console.log(`Abraham: ${edadAbraham} años`);
// console.log(`luis: ${edadLuis} años`);
//console.log(`Abraham cohorte:: ${abrahamcor}`);
console.log(`luis cohorte: ${luiscor}`);


// -------------- Condicional if-else-----------------
/* La condicional if ejecuta una sentencia si una condicion especifica
    es evaluada como verdadera.

    sintaxis:
    if(condición)sentencia

    if(condicion){
      sentencias;
    }

    if(condicion)sentencia;
    else sentencia;

    if(condicion){
      sentencia;
    }
    else{
      sentencia;
    }

    if(condicion){
      sentencia;
    }else if(condicion2){
      senetencia;
    }
    else if(condicion3){
      senetencia;
    }
    else if(condicion n){
      senetencia;
    }
    else{
      sentencia;
    }

*/

const temperatura = 100;
let mensaje;

//if (temperatura === 21) mensaje = `temperatura ideal ${mensaje}`;
//else mensaje =`${temperatura} grados no es ideal`; 

if (temperatura === 21)
  mensaje = `Temperatura ideal ${temperatura}`;
else if (temperatura > 21 && temperatura < 40)
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if (temperatura > 40)
  mensaje = `Temperatura de ${temperatura} grados es super caliente bendiciones`;
else if (temperatura < 21)
  mensaje = `Temperatura de ${temperatura} grados es fría`;

else
  mensaje = `Temperatura de ${temperatura} grados no existe`;


console.log(mensaje);


// --------------------- Ejercicio -----------------------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.

 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño

 Usar if-else
*/
/*
const getEstacion = () => {
  const mes = parseInt(document.getElementById("mes").value);
  const estacion = document.getElementById("estacion");
  if(mes === 12 || mes === 1 || mes === 2 ) estacion.innerHTML = `La estacion es Invierno`; 
  else if(mes === 3 || mes === 4 || mes === 5 ) estacion.innerText = `La estacion es Primavera`; 
  else if(mes === 6 || mes === 7 || mes === 8 ) estacion.innerText = ` La estacion es Verano`; 
  else if(mes === 9 || mes === 10 || mes === 11 ) estacion.innerText = `La estacion es Otoño`; 
  else estacion.innerText = `No ingresaste alguna fecha`;
}
*/
// ----------------- Switch ----------
/* 
 La instruccion switch evalua una expresion y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta que se encuentre la sentencia 
 'break'
   
   sintaxis:
        switch(expresion){
          case valor1:
            setencias;
            break;
          case valor 2:
            setencias;
            break;
          case valor n:
            setencias;
            break;
          default:
            setencias;
            break;

        }

 */


const setvelocidadVentilador = (velocidad) => {
  let msj;
  switch (velocidad) {
    case 0:
      msj = "Apagado";
      break;
    case 1:
      msj = "Velocidad baja";
      break;
    case 2:
      msj = "Velocidad media";
      break;
    case 3:
      msj = "velocidad alta";
      break;
    case 4:
    case 5:
      msj = "velocidad super alta";
      break;
    default:
      msj = "El nivel no existe";
      break;
  }
  return msj;
}

console.log(`El ventilador esta en ${setvelocidadVentilador("4")}`);

// nuevo ejercicio

const getEstacion = () => {
  const mes = parseInt(document.getElementById("mes").value);
  const estacion = document.getElementById("estacion");
  switch (mes) {
    case 1: case 2: case 12:
      estacion.innerHTML = `La estacion es Invierno`;
      break;
    case 3: case 4: case 5:
      estacion.innerText = `La estacion es Primavera`; 
      break;
    case 6: case 7: case 8:
      estacion.innerText = ` La estacion es Verano`; 
      break;
    case 9: case 10: case 11:
      estacion.innerText = `La estacion es Otoño`;
      break;
    default:
      estacion.innerText = `No ingresaste alguna fecha`;
      break;
  }
}

// ------------Operador condicioal ternario--------
/*
Es el unico operador de JavaScript que tiene 3 operandos,Generalmente se usa
como opcion a la sentencia if-else.

sintaxis:

  condicion ? expresionSiCondicionEsVerdadera : expresionSiCondicionEsFalsa;
*/
const subtotal = 1_000;
const pagoTarjetaCredito = true;

console.log(`La cuenta es de ${pagoTarjetaCredito ? subtotal*1.025 : subtotal * 1 } pesos`);

const edad = 18;
console.log(`Acceso ${edad >= 18 ? "Permitido":"Denegado"}`);


// -------------- Practica------------
// Refactorizar con un operador ternario

const printGreetings = number => {
  let result = (number > 1) ? printGreetings(number-1) : number;
  console.log("Greeting", result);
  return number + 1;
};
printGreetings(10);




