console.log("Js09 uso de Axios");

const url = "https://reqres.in/api/users?page=2";

const getUsersFetch = () => {

    fetch( url )
        .then( response=> response.json()  )
        .then( users => {
            console.log(users.data)
        } )
        .catch( error => console.log(error) );

}

const getUsersAxios = () => {
    axios.get(url)
        .then(users=>{
            console.log(users.data.data);
        })
        .catch(error=>console.log(error));
}

// -------------Usar Axio con async-Await---
const getUsersAxiosWithAw = async() => {
    try {
        const users = await axios.get(url);
        console.log(users.data.data);
    } catch (error) {
        console.log(error);
    }     
}

//------- Solicitud POST con axios-------
const getUsersAxiosPost = async() => {
    try {
        const users = await axios.post(url,{
            first_Name: 'Abraham',
            last_Name: 'Castillo'
        });
        console.log(users.data);
    } catch (error) {
        console.log(error);
    }
}