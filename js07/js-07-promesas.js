console.log("Js07 Promesas");
/*
    Una promesa(promise)es un objeto que representa  la terminacion 
    o fracaso de una operacion asincrona.
    Para crear una promesa se usa el constructor new Promise();
*/

//const pinkyPromise = new Promise(/* funcion callback*/);
const pinkyPromise = new Promise( (fncCallBackResolve,fncCallBackReject)=>{
     const menorEdad = false;

    if(menorEdad)
        fncCallBackResolve("hay que estar siempre juntos");
    else 
        fncCallBackReject("No te conozco");
});

// Consumir las promesas
// funcion then,catch y finall.
console.log("Antes de consumir la promesa");
pinkyPromise
    .then((response)=>console.log("Promesa resuelta "+response))
    .catch(( error )=>console.error("Tu promesa fue rechazada "+error));

    // --------------------Una promesa que reciba dos numeros a y b y los divida
    // en caso de que b sea cero,me envie un rechazo diciendome porqu no se
    // puede realizar la division

const promesaDivision = new Promise( (fncCallBackResolve,fncCallBackReject)=>{
    const a =3;
    const  b=2;
   
       if(b != 0)
          fncCallBackResolve(a/b);
       else 
           fncCallBackReject("No se puede dividir entre 0");
   });

   promesaDivision
    .then((response)=>console.log(" "+response))
    .catch(( error )=>console.error(""+error));

    // -----------------Haciendo la division con parametros------------

    const divisionConParametros = (a,b)=>{
            const myPromise = new Promise((resolve,reject)=>{
            if(b === 0)
                reject("No se puede dividir entre 0");
             else 
                 resolve(a/b);
            });
            return myPromise;
    }

    divisionConParametros(3,4)
    .then((response)=>{
        console.log(response);
        return response+10;
    })// 0.75
    .then ((mas10Unidades)=>console.log(mas10Unidades))
    .catch(( error )=>console.error(""+error))
    .finally(()=>console.log("Se termino la division"));


    divisionConParametros(3,0)
    .then((response)=>console.log(" "+response))
    .catch(( error )=>console.error(""+error));// no se puede realizar la division

//  --------------Consumir las promesas con async y await
console.log("--------Reslviendo divsiones--- ");

const realizarDivisionSicrona = async () =>{
    console.log(await divisionConParametros(20,4))
}

realizarDivisionSicrona();

console.log("--------Terminando divsiones--- ");

// ---------------- Manejo de exepciones con try y catch
/*
sintaxis 
try{

}catch(error){

}

*/
const manejoDeExepciones = async () =>{
    console.log("----Resolviendo divisiones usando try y catch---->");  
    try{
    const resultadoErroneo = await divisionConParametros(20,0) ;
    console.log(resultadoErroneo)
    }catch(error){
        console.error("Asyn-Await "+ error);
    }
    console.log("<----Terminando divisiones usando try y catch-----");
};

manejoDeExepciones();


// ----------------------------------------------------
// Promise.resolve();

const promesaRapida = Promise.resolve(123);

// ----------- Resuelver(consumir) con .then
 promesaRapida.then((response)=>console.log("Promesa resuelta con then"+response));
 console.log(456);

//-------------Resolver con Async-Await
const consumirConAwait = async () => {
       console.log("Consumir con Await"+ await promesaRapida);
       console.log(789);
};

consumirConAwait();

// con  then y catch mientras se resuelve se puede ejecutar alguna otra instruccion se comporta de forma asincrona
// con async y await solo se ejecuta hasta que la promesa se hace se comporta de forma sincrona