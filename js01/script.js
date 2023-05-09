console.log("Sesion JS01");
// Son 7 datos primitivos:

// String: "Hola"
console.log("Tipo de dato string:","Hola");

// Number: 12, -45,34.23,+infinity,-infinity,Nan
// Los numericos utilizan 64 bits para almacenar ,pero solo se usan 53 bits 
// para representar el numero, los numero restantes para indicar el simbolo del numero
console.log("Tipo de dato number:",12,-45,367.12,45/0,-56/0,56*"hola");
console.log("valor maximo :",Number.MAX_VALUE);
console.log("Valor seguro:",Number.MAX_SAFE_INTEGER)

// Bigint
// Sirven para representar valores numericos enteros de los que 
// el tipo number no puede representar o no es seguro.
console.log("MAX_SAFE_INTEGER + 1:",Number.MAX_SAFE_INTEGER + 1);
console.log("MAX_SAFE_INTEGER + 2:",Number.MAX_SAFE_INTEGER + 2);// no representa el valor
let myBigInt = 9007199254740991n;//se agrega una n al final para saber que es un BigInt
console.log("Tipo de dato Bigint:",myBigInt);
console.log("MAX_SAFE_INTEGER + 1n:",myBigInt + 1n);
console.log("MAX_SAFE_INTEGER + 2n:",myBigInt + 2n);

// Boolean
// Tenemos solo 2 estados: true/false
console.log("Tipo de datos boolean",true);
console.log("Tipo de datos boolean",false);

// Undefined
// Un dato que es declarado,pero no definido en el tipo
let myVar;//solo se declara
console.log("Tipo de dato undefined:",myVar);

// null
// Intensionalmente se borra el tipo de dato
let myVarNull;//solo se declara
console.log("tipo de dato myVarNull",typeof(myVarNull)); // undefined
myVarNull = "Saludos señor.PP";// Se asigna un dato string
console.log("tipo de dato myVarNull",typeof(myVarNull)); // string
myVarNull = null;
console.log("tipo de dato myVarNull",typeof(myVarNull)); // object

// symbol
// crea propiedades privadas en los objetos.
// ----------------------------------------------------------------
// Tipos de datos Object
// Object:
const misDatosDePerfil = {
    // Clave:valor
    nombre:"Abraham",
    apellido:"Castillo",
    edad : 25,
    isBelicoso: false,
    musicaPrefericaPorGenero:{
        electronica : "David Guetta",
        rock : "U2",
    },
    nombreCompleto: function fullName(){
       // return misDatosDePerfil.nombre +" "+ misDatosDePerfil.apellido +",soy el belicon";
        return this.nombre +" "+ this.apellido +",soy el belicon";
    }
};
const misDatosDeInstagram = {
    // Clave:valor
    nombre:"Abraham49",
    apellido:"Cas",
    edad : 25,
    isBelicoso: true,
    musicaPrefericaPorGenero:{
        electronica : "David Guetta",
        rock : "U2",
    },
    nombreCompleto: function fullName(){
       // return misDatosDePerfil.nombre +" "+ misDatosDePerfil.apellido +",soy el belicon";
        return this.nombre +" "+ this.apellido +",soy el belicon";
    }
};

console.log("Datos completos:", misDatosDePerfil);
console.log("Nombre:",misDatosDePerfil.nombre);
console.log("Musica de fin de semana:",misDatosDePerfil.musicaPrefericaPorGenero.electronica);
console.log("Nombre completo",misDatosDePerfil.nombreCompleto());
console.log("Nombre completo",misDatosDeInstagram.nombreCompleto());

// Array
// Almacena diferentes tipos de datos,su primer elemento es el indice 0

const cancionesPP = [
    "Soy el belicon",
    "El azul",
    "El Tsurito",
    "AMG",
    {
        2020:5,
        2021:30,
        2022:53,
        total:91
    }
];

console.log("Cancion de PP",cancionesPP[1]);
console.log("Cancion echas en el año 2021",cancionesPP[4][2021]);
console.log("Cancion echas en el año 2021",cancionesPP[4]["total"]);

// ------------------------------------------------------------------
// Conversión de datos
const myNumber = 420;
console.log("Num minutos en la sesion:"+ myNumber);
// toString
const myNumberTxt = String(myNumber);
console.log("Num minutos en la sesion:"+ myNumberTxt);

// toNumber
const myString = "420";
const sumatoria = 80 + Number(myString);
console.log("Valor de sumatoria:",sumatoria);

// toParseInt
const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria:",sumatoriaEntera);

// toboolean 
const isbelicoso ="false";
console.log(typeof isbelicoso);


if(isbelicoso == false)
    console.log("Denle su belikin");
else
    console.log("Abra paso ala barredora");
// Boolean
// para que sea false,debe ser:"",0,null,undefined
// Number
// [] = 0,[30]=30,[3,1]=NaN,false = 0, true = 1
// String
// []="",[1,2]="1,2",function(){}=function(){},{}=[object,object]

