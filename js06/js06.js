console.log("Sesion jS06");


// Funcion definida
function findElementByIdFnc01(/* parametros */){
    /* instrucciones */
    return 3*4;
}

// funcion expresada
const findElementByIdFnc02 = function(/* parametros */){
    return 3*4;
};

// funcion flecha 
const findElementByIdFnc03 = (/*parametros */) => {
    return 3*4;
};

const findElementByIdFnc04 =()=> 3*4;
const findElementByIdFnc05 = variableParametro => 3*4;

const findElementById = ( nameOfDeveloper) => {
    const tituloRef = document.getElementById("titulo");
    tituloRef.innerHTML += nameOfDeveloper;
};
findElementById(", Abraham");

const changeSubtitleById = (newTxt) =>{
    const subtitleRef = document.getElementById("subtitulo");
    subtitleRef.innerHTML = `${subtitleRef.innerText}, <em>${newTxt}</em>`;
};

changeSubtitleById("Viernes de cholos");


// ------------- Encontrar elementos por su tag ---------------
// getElementsByTagName()

const changeEmphasis = (newtxt,url) => {
    const emphasisRef = document.getElementsByTagName("em");
    // console.log(emphasisRef)
    for (element of emphasisRef) {
        console.log(element);
        element.innerHTML = `<a href="${url}" target="_blank">${newtxt}</a>`;
    }
};

changeEmphasis("Viernes friki","https://frikishop.com.mx/");

// -------------------- Selector universal ----------------
// querySelector

const findElementsByQuerySelector = () =>{
    const refElements = document.querySelector("p em");
    refElements.innerHTML = `La ch 26 es bien <strong>chida</strong>`;
}
findElementsByQuerySelector();


// -------- Crear nuevo elemento -------------
//  appendchild para agregar a un hijo 
const newElement = () => {
    const newElementRef = document.createElement("p");
    newElementRef.innerHTML = `La ch26 le gusta:
    <ul>
        <li>EL pan de muerto</li>
        <li>EL chismesito</li>
        <li>EL pozole</li>
        <li>Pizza</li>
        <li>Pulque</li>
    </ul>
    `
    const articleRef = document.querySelector("article");
    articleRef.appendChild(newElementRef);// se agrega el nuevo elemento
    // Clonar el nodo anterios
    //const nodoClonado = articleRef.cloneNode(true);
    //document.getElementById("article-news").appendChild(nodoClonado);

};

newElement();

const changeColor = (color) =>{
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
}

changeColor("blue");

//Agregar a un elemento un border

const changeBorder = (color) =>{
    const refIntro = document.getElementById("noticias");
    refIntro.style.border =`thick solid ${color}`;

};

changeBorder("black");

// ---------------------Propiedades de vizualizacion (desaparecer elementos)-------
// display: none (Quitar el elemento del DOM).
// visibility:hidden (Ocultar el elemento).


const quitarBoton = () =>{
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.display="none"; //Quitar el elemento
}

const ocultarBoton =() =>{
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility="hidden";//Ocultar elemento
}

const restablecerBoton =()=>{
    const buttonRef = document.getElementById("button-B");
    buttonRef.style.visibility="visible";
    buttonRef.style.display="inline"; 
}   

