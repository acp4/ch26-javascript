console.log("Sesion Js04 Arreglos y ciclos");

// Declarar un array
const nombresCh26 = ["sofi","alejandro","ixchel","said"];

// usando el constructor de arreglos
const apellidosCh26 = new Array("Montellano","Torres","Vazques");
const numCajonesEstacionamiento = new Array(4);
const numCohortesActivas = new Array(26,27,28,29);

console.log("Apellido de Sergio "+ apellidosCh26[1]);

// Matrices arreglos de dos dimensiones
// Arrays anidados
// [ [] , [] , [] ]

const personasEnCohorte = [ 
/*ch26 */    ["Arath"   , "Jose"     , "Karen"    , "Sofi"          ] , 
/*ch27 */    ["Manuel"  , "Maria"    , "Francisco", "Pablo" , "Pepe"] , 
/*ch28 */    ["Doris"   , "Brendan"  , "Lucas"    , "María"                    ]
];


console.log("Persona ch27 : " + personasEnCohorte[1].join(", "));

// Accediendo a Francisco
console.log("Persona ch27 : " + personasEnCohorte[1][2]);// Francisco
console.log("Persona ch27 : " + personasEnCohorte[2][2]);// Lucas
console.log("Persona ch27 : " + personasEnCohorte[0][2]);// Karen


personasEnCohorte [1][3]= "Juan"; 
console.log(" "+personasEnCohorte[1]);


// myArra3D = [ [ [] , [] , [] ] ,[ [] , [] , [] ]]; myArray3D[][][];

// Iterar un arreglo de 2 dimensiones.
for (let fila = 0; fila < personasEnCohorte.length; fila++) {
    console.log(`Indice ${fila} ${personasEnCohorte[fila]}`);
    for (let columna = 0; columna < personasEnCohorte[fila].length; columna++) {
        console.log(`Indice [${fila}] [${columna}] ${personasEnCohorte[fila][columna]}`);
        
    }
    
}

// Usando For each
personasEnCohorte.forEach(fila => fila.forEach(columna => console.log(columna)));

// For of
// Ejecuta sentencias por cada eleemnto de un objeto iterable(arrays,strings y objetos)

const myName = "Abraham";
for(let char of myName){
    console.log(char);
}

for(let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
    }
}

// -------------- Consideraciones para el ciclo for----------
// No es necesario indicar el inicio,la comparacion y la expresion final
/* 
Sintaxis ciclo for:
for(inicio; comparacion;expresionFinal){
    sentencias;
}
*/
let nInteracion =0;
for(/*inicio*/; /*comparacion*/; /*ExpFinal*/){
    console.log(nInteracion);
    if(nInteracion === 5) break;
    nInteracion++;
}
// Iterar y mostrar a las persona en personasEnCohorte y detener cuando enceuntre maria

personas:// se usa un label para indicar en el break hacia que un ciclo rompera
for(let fila of personasEnCohorte){
    for(let columna of fila){
        console.log(columna);
        if(columna === "Maria" )break personas;
    }
}

// Continue 
/*
Termina la ejecucion de la sentencia en la interacion y continua la ejecucion del ciclo
con la proxima iteracion(o en el label que se indique)
 */
console.log("===uso de continue===")
// No imprimir a maria
personas:
for(let fila of personasEnCohorte){
    for(let columna of fila){
        if(columna === "Maria" || columna === "María") continue;
        const concatenacion ="Personas"+columna;
        console.log(concatenacion);

    }
}

// ----------------- Ciclo while -----------------
/*
Crea un bucle que ejecuta una sentencia mientras la condicion sea verdadera

sintaxis:
while(condicion)
    sentencias;

*/
/*
let counter = 0;
while(confirm("Quieres continuar?")){
    console.log(`Has continuado ${++counter} ${counter > 1?"veces":"vez"}`)
}
*/
const number = [9,5,6,7,8];
//number.forEach(number => console.log(number));

let i =0;
while(i<number.length){
    console.log(number[i],)
    i++;
}
// -------------- Practica--------------
/*
 
*/

// -----------------Ciclo While ------------

/*
 Crea un bucle que ejecuta una sentencia hasta que la condicion de comprobacion se
 evalua como falso.la condcionse evalua despues de ejecutar la sentenia por lo que la sentencia
 se ejecuta por lo menos una vez.

 sintaxis:
 do{
    sentencias;
 }while(comprobacion);
*/
/*
let itera = 0;
do{
    itera++;
    console.log("N. iteracion do-while"+ itera);
}while(confirm("¿Deseas continuar?"));
*/

let valor =-2;
while(valor <5){
    console.log("While"+valor);
    valor++;
}

valor = 4;
do{
    console.log("Do-While"+valor);
    valor++;
}
while(valor < 5){
}

/*
FIFO:first input,first output
LIFO:last input,firts output

*/

const alimentos=[];

//Usar FIFO
alimentos.push("Manzanas del lunes");
alimentos.push("Manzanas del miercoles");

// Sacar las manzanas
console.log("Sacando las manzanas antiguas "+ alimentos.shift());
console.log(alimentos);
console.log("Sacando las manzanas antiguas "+alimentos.shift());
console.log(alimentos);

// Usar LIFO
// Temporada Navideña
const prodcutos =[];
prodcutos.push("desarmadores");
prodcutos.push("luces de colores");
console.log("Sacando los productos "+ prodcutos.pop());
console.log(prodcutos);


