console.log("Js07 Api Fetch ");

/*
    La Api Fetch nos ayuda a acceder a acceder y manupular peticiones http.Porpociona
    una forma logica y facil de obtener recursos de la red de manera
    ASINCRONA.

    Sintaxis:
    Solicitud get

    fetch (url)
    .then()
    .cath();

*/

const url ="https://fakestoreapi.com/products";
const getProducts =(httpUrl)=>{
    fetch( httpUrl )
        .then(result=>{
            console.log("Respuesta"+result.status)
            return result.json();// conversion de JSON a objeto
        })
        .then((productsObj)=>{
            console.log(productsObj)
            // productsObj.forEach(element => console.log(element.title));
            // Quiero imprimir solo  el titulo de cada producto
            for (let i = 0; i < productsObj.length; i++) {
                const productot = productsObj[i];
                console.log(`${i}:${productot.title}`);
            }
        })
        .catch(error=>console.log(error));
}

//getProducts(url);


// ------------------Consmir el fetch usando async-await------
const url1 ="https://fakestoreapi.com/products";
const getProductsWithAwait = async (httpUrl)=>{
    const productsJson = await fetch(url1)
    const products = await productsJson.json();
    console.log(products);
    for (let product of products) {
        console.log(product.title);
    }
}

//getProductsWithAwait(url);

const url2 ="https://fakestoreapi.com/products";
const getProductsWithAwaitc = async (httpUrl)=>{
    try{
    const productsJson = await fetch(url2)
    const products = await productsJson.json();
    console.log(products);
    localStorage.setItem("mis-productos",JSON.stringify(products))// Key ,value
                                //convertir a json
    for (let product of products.data) {
        console.log(product.title);
    }}catch(error){
        console.log(error);
    } 
}

//getProductsWithAwaitc(url2);

//localStorage.clear();
//localStorage.removeItem('miGato');



// ---------Realizar un asolicitud POST -----------

const postUser=(url,userData)=>{

    fetch( url,{
        method:'POST', // PUT O DELETE
        body: JSON.stringify(userData),// Los datos del usuario,Conversion de obj ->JSON
        headers:{ 'Content-Type':'application/json'}
    })
    .then((response)=>response.json())
    .then((register)=>console.log(register.createdAt))
    .catch((error)=>console.log(error));
}

user = {
    name:"El ivan",
    job:"leader"

}

const urlPOST ="https://reqres.in/api/users";

postUser(urlPOST,user);