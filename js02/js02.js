console.log("Js02");

// ---------------Funcion declarada -------
// function declaration, function statement
// una caracteristicas es que las funciones declaradas tiene hoisting
// osea no importa si se declara antes o despues de mandarla a llamar
//console.log("El resultado de 5*10 = " + multiplicas(5,10));// Invocando la funcion

/* function nombreFuncionCamelCase(parametros){
    instrucciones;
}
*/

multiplica(5, 10);// Invocando la funcion
multiplica(8, 8);
multiplica(-4, 2);


function multiplica(a, b) {
    const resultado = a * b;
    console.log(resultado);
};
function divide(a, b) {
    return a / b;
};
console.log(divide(5, 2)); // 2.5
console.log(divide(5, "2")); // 2.5
console.log(divide("5", "2"));// 2.5
console.log(divide("5 0", "2"));// NaN

// ----------------------------Funciones expresadas-----------------
// Function expressions
// Son declaradas dentro de la asignacion de una variable
// estas funciones pueden ser anonimas(no tienen nombre)
// las funciones expresadas no tienen hoisting porque no se
// cargan en memoria hasta que se utilice

/* Sintaxis

const nombreVaruable = function nombreFuncion(parametros){
   instrucciones;
}
*/


const sum = function sumatoria(a, b) {
    return a + b;
};

const res = function (a, b) {
    return a - b;
};
const pontencia = function (a, b) {
    return a ** b;
};

console.log(sum(9, 9));// 20
console.log(res(90, 20));// 70
console.log(pontencia(5, 4));//625

// ----------------- Funciones autoinvocadas-------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anonimas.

(function () {
    console.log("Me autoinvoco en la funcion");
})();


//  --------------Funciones Flecha --------
// Arrow Functions
// Son funciones similares  las funciones declardas,per:
// No requieren la palabra function
// Si tiene una sola instruccion no require las {}
// si la innstruccion es el mismo retorno,no requiere la palabra return

/* const areaRectangulo = function(base,altura){
    return base*altura;
}

console.log("Area de rectangulo 5x3: "+ areaRectangulo(5,3)); */

const areaRectangulo = (base, altura) => base * altura;
console.log("Area de rectangulo 5x3: " + areaRectangulo(5, 3));

// ----------------- Parametros default ----------------
/**
 * Este comentario es la documentacion de la funcion
 * @param {number} base esto es la descripcion de base
 * @param {number} altura esto es la descripcion de la altura
 * @returns area del rectangulo.
 */
const areaTriangulo = (base = 1, altura = 1) => base * altura / 2;
console.log("Area del triangulo b:5 a:10 = " + areaTriangulo(5, 10));
console.log("Area del triangulo b:8 = " + areaTriangulo(8));


//------------------Parametros rest-----------------
// Rest Parameters $intaxis: ....nombreParametro
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se representan en un array
// Debe estar al final de la lista de parametros

function sumatoriaVariosNumeros(a, b, ...restoDatos) {
    let suma;
    suma = a + b;
    for (let index = 0; index < restoDatos.length; index++) {
        suma += restoDatos[index];

    }

    return suma;
}

console.log("Sumatoria de varios numeros = " + sumatoriaVariosNumeros(5, 6));
console.log("Sumatoria de varios numeros = " + sumatoriaVariosNumeros(5, 6, 10, 9));
console.log("Sumatoria de varios numeros = " + sumatoriaVariosNumeros(5, 6, 10, 9, 20, 50));

// -------------- Funciones de Callback-------------
// Funcion que se pasa a otra funcion como argumento,para luego invocarse
// para completar algun tipo de rutina o accion.

// 3 funciones una que imprima en consola,alert,DOM h1

// Consola
function mensaje(men) {
    console.log("" + men);
}
mensaje("Hola");

// Alert
function mensaje2(men) {
    alert("hola " + men);
}
mensaje2("Abraham");

// Doom
function h1DOOM(mensaje) {
    document.body.innerHTML = `<h1>${mensaje}</h1>`;
}

h1DOOM("Holi");

function getNamePrintToConsole() {
    const name = prompt("Dime tu nombre");
    const text = `hola ${name},espero tengas un gran dia`;
    mensaje(text);
}
function getNamePrintToDOOM() {
    const name = prompt("Dime tu nombre");
    const text = `hola ${name},espero tengas un gran dia`;
    h1DOOM(text);
}
function getNamePrint(funcionImprimir) {
    const name = prompt("Dime tu nombre");
    const text = `hola ${name},espero tengas un gran dia`;
    funcionImprimir(text);
}
// getNamePrint(mensaje);
// getNamePrint(mensaje2);
// getNamePrint(h1DOOM);

/*
  Ejercicio 2
  Escribe una funcio que tome un arreglo de numero
  deplique el valor de cada numero del arreglo,
  e imprima el nueevo arreglo actualizado.
  [5,10,15,20,25] -> [10,20,30,40,50]
  */

function double(arr) {
    const doubleNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        const duplicate = arr[i] * 2;
        doubleNumbers.push(duplicate);
    }
    return doubleNumbers;
}

// Funcion que nos sirve de callback
// const duplicate =(number)=>number*2;

/*
function doubleWithMap(array){
    const duplicateNumber = array.map(function(number){
        return number*2;
    });
    return duplicateNumber;
}
*/
function doubleWithMap(array) {
    return duplicateNumber = array.map(a => a * 2);
}


const numbers = [5, 10, 15, 20, 25];
//console.log(double(numbers));
console.log(doubleWithMap(numbers));
console.log([5, 10, 15, 20, 25].map(numbers => numbers * 2));


/*
  Ejercicio 4
  Crear un programa que itere sobre dos arreglos;
  si hay cursos en común, imprimirlos en la consola.
*/


const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
const student3Courses = ["Music"];

const courses = [];
function cursosEnComun(student1Courses, student2Courses) {
    for (let i = 0; i < student1Courses.length; i++) {
        for (let j = 0; j < student2Courses.length; j++) {
            if (student1Courses[i] == student2Courses[j]) {
                courses.push(student1Courses[i]);
            }
        }
    }
    return `Cursos en comun :  ${courses}`;
}
console.log(cursosEnComun(student1Courses, student2Courses));

// Usar fllter y usar includes
    function getCommonCoursesWithFilter(student1Courses, student2Courses) {
        return student1Courses.filter(course => student2Courses.includes(course));
    }

const commonCourses = getCommonCoursesWithFilter(student1Courses, student2Courses);
const commonCourses3 = getCommonCoursesWithFilter(commonCourses, student3Courses);
console.log("Common courses:", commonCourses3.join(", "));


// ------------------- Contar la cantidad de caracteres de una frase -----------
// pepe pecas pica papas con un pico y una pala
// la cantidad de letras 'p': 8
// resolverlo usando arrow function

// // Otra forma de bucar una letra especifica
const fra ="pepe pecas pica papas con un pico y una pala";

const contador= (frase, letra) => {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra.toLowerCase() || frase[i] === letra.toUpperCase()) {
            contador++;
        };
    };
    return contador;
};

console.log(contador(fra,"p"));

// Otra forma de bucar una letra especifica
phrase = 'pepe pecas pica papas con un pico y una pala'

const countChar = (p, phrase) => phrase.toLowerCase().split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase));

// --------------- Funciones recursivas --------
// es una tecnica de programacion en donde la funcion se llama asi misma.
// Se debe tener precausion de no entrar a un bulce infinito

/*
    function funcionRecursiva(valor){
        if(condicionDeParo){

        }
        else{
            // Llamada reursiva.
        }
    }
*/

const factorialConCicloFor = (numero)=>{
    let total = 1;
	for (i=1; i<=numero; i++) {
		 total *= i; 
	}
    return total;
}

function factorialRecursivo(numero){
    if(numero == 1 ){
        return 1;
    }
    else{
        return numero * factorialRecursivo(numero-1);
    }
}

console.log("Factorial de 5: "+ factorialConCicloFor(5));
console.log("Factorial de 5: "+ factorialRecursivo(5));

// ------------ Ejercicio ---------------------------------
// Una función recursiva que muestre en consola
/*
Saludo 1
Saludo 2
Saludo 3
 ...
Saludo 10

saludo(10);
*/

const saludar = ( numero ) => {
    if( numero === 1){
        console.log("Saludo " + numero);
    }else{
        saludar(numero - 1)
        console.log("Saludo " + numero);
    };
};

saludar(10);
