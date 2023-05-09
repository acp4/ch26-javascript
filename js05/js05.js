console.log("Sesion Js05");

// --------------- Operadores aritmeticos ----------
// Adicion +
// Multiplicacion *
// Subtraccion -
// Division /
// Exponencial **
// Resto %


// Ejemplo 
let dinero = 20 + 10;//30

// --------------- Operadores de asignacion ----

// Asigna un valor a su operando izquierdo basandose en el valor de
// Su operando derecho
// asignacion =

// Asignacion de adicion +=
dinero += 15;// dinero = dinero + 15;
// Multiplicacion *=
// Subtraccion -=
// Division /=
// Exponencial **=
// Resto %=

12 + 7 + 12 + 4 + 1;

console.log(2**3**2);

// ------------ Operadores Unirios ------------

// Un operador unario realiza una operacion en un solo operando.
// Negacion - 
dinero = -3; // -3 
console.log(dinero);

// Conversion a Numerico +
dinero = +dinero ;// Sigue siendo -3
dinero = +"200";// 200 numerico
console.log(dinero);

// typeof
// Operador logico no !
let valorBooleano = !true;
console.log(valorBooleano);

// Operadores de incremento y decremento en una unidad
// Operadpr de pre-incremento y pre-decremento
// preincremento ++valor
// predecremento --valor

// Operador de post-incremento y post-decremento
// post-inremento valor++
// postdecremento valor--

let numero =10;
numero ++; //11
++numero;// 12
console.log(numero);//12

let nuevoValor = numero++;
/*
    let nuevoValor = numero;
    numero = numero + 1;
*/
console.log("nuevo valor",nuevoValor);//12
console.log("numero",numero);//13

let nuevoDato = ++ numero;
/*
    numero = numero +1;
    nuevoDato = numero;
 */
console.log("nuevoDato",nuevoDato); //14
console.log("numero",numero);// 14

let x= 3;
let y = ++x;
console.log(`x: ${x++} y y: ${++y}`);// 4,5
console.log(`x: ${x} y y: ${y}`);// 5,5

// --------------------Operadores logivos AND && y OR ||

const a = true;
const b = false;
const c = true;
console.log(a || b && c);// true

// Operadores de corto circuito
// Cuando los operadores logicos AND Y OR actuan sobre operadores diferentes a booleanos

// OP1 && OP2 si si OP1 es verdadero ,se realiza el resultado de OP2
console.log(a && "Holi Crayoli")// true
console.log(b && "Holi Crayoli")// Holi Crayoli
console.log( NaN && "El valor de numero que se puede expresar")//Nan
console.log("false" && "El valor es false")// El valor es false
console.log("" && "No hay dato")// ""

// OP1 || OP2 si OP1 es verdadero, se realiza el resultado OP1
console.log(a || "Holi Crayoli")// true
console.log(b || "Holi Crayoli")// Holi crayoli
console.log( NaN || "El valor de numero que se puede expresar")//Nan
console.log("false" || "El valor es false")// El valor es "false"
console.log("" || "No hay dato")// no hay dato

const noDefinido = true;
console.log(noDefinido || theBigBang)

// Quiero imprimir "Estas Autorizado si la variable es isOnline y  isActive son true"

const isOnline = true;
const isActive = true;
if(isOnline)
    if(isActive)
        console.log("Estas Autorizado");

if (isOnline && isActive)
        console.log('estas autorizado')


console.log(""+isOnline && isActive ? 'Estas Autorizado' : 'No estas autorizado');        

console.log(isOnline && isActive && 'estas autorizado');


// --------------- Operadores relacionales ----------
/*
Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la 
comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, 
lógicos u objetos. Las cadenas se comparan según el orden lexicográfico estándar, utilizando valores Unicode.
 En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos 
 a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en comparar los operandos numéricamente.

 <  menor que
 >  mayor que
 <= menor o igual que
 >= mayor o igual que
 == igual que
*/

console.log(true == "true"); // false
console.log(20 < "40");// true

console.log( "b" < "A"); // false
console.log( "Hola" < "HOLA"); // false
        // H:72        1:49  posicion tabla unicode
console.log( "Hola" < "123"); // false

console.log("Hola" < "KeHace" + 1000)// true
          // "Hola" < "KeHace1000"

console.log("23" == 23)// true

// --------------- Comparacion estricta ---------
/*
=== estricamente igua,debe ser igual en el valor y tipo
!== estrictamente diferente, debe ser diferente en el valor y tipo.

*/

console.log("23"=== 23);// false
console.log("true" === true);// false
console.log("45"=== 45);// true

// Operador de asignacion

const myNumber=34;

// Destructuracion (Destructuring)
/*
Es una expresion en JS que hace posible extraer datos de arreglos y objetos y nos
ayuda a realizar asignaciones mas complejas.
*/

let dataA = 10;
let dataB = 20;
console.log(`a:${dataA}, b:${dataB}`);
// Quiero intercambiar los datos
/*let temporal;

temporal = dataA;
dataA = dataB;
dataB = temporal;
*/
[dataA,dataB]=[dataB,dataA];
console.log(`a:${dataA}, b:${dataB}`);

const calificaciones = [50, 80, 100, 30,60,90 ];
// dataA = calificaciones[0]; // 50
// dataB = calificaciones[1]; // 80
[ dataA,,,dataB,...resto  ] = calificaciones; 
console.log(`a: ${dataA} , b:${dataB} `);
console.log(resto);

const primerAnio={
    dataA:"43 alumnos",
    dataB:"50 alumnos",
    dataC:"20 alumnos"
};
({dataA,dataB} = primerAnio);
console.log(`a: ${dataA} , b:${dataB} `);

const auto = {
    modelo:"Chevrolet",
    year:2023,
    color:"red",
    motor:"2.0"
}
console.log("Modelo "+ auto.modelo);//auto["modelo"]

// Asignando el valor modelo del objeto auto a la constante modelo
      // Inicializar con un valor por default
// const {modelo,colorAuto="Pistache"} = auto;
      // Asignar un nuevo nombre al atributo
const {modelo,color:colorAuto} = auto;
console.log("Modelo: "+ modelo +" Color: "+ colorAuto);//auto["modelo"]

// -------------- ejercicio ----------------

/*
    Hacer una funcion que realice la division de 2 numeros
    y me entregue(return) en entero el cociente y residuo
*/

const divison= (a, b) =>{
    const cociente = parseInt(a / b);
    const residuo = a % b;
    return {cociente,residuo};
}
const {cociente,residuo}=divison(9,5);
console.log(`El resultado de 9/5, cociente: ${ cociente}, residuo ${ residuo } `);


