console.log("Sesion Jso6-formulario");

const refForm = document.forms["registro"];

refForm.addEventListener('submit',(event)=>{
    event.preventDefault();//omitan las acciones por default
    //console.log(event);
    const email1 = refForm.elements["inputEmail4"].value;
    const pass = refForm.elements["inputPassword4"].value;
    const addre = refForm.elements["inputAddress"].value;
    const cityy= refForm.elements["inputCity"].value;
    const state1= refForm.elements["inputState"].value;
    const zipp = refForm.elements["inputZip"].value;
    const check1 = refForm.elements["gridCheck"].checked;
    // crear los objetos con datos del usuario
    User={
        email:email1,
        password:pass,
        address:addre,
        city:cityy,
        state:state1,
        zip:zipp,
        check:check1
    }

    console.log(User);

});