/**
 * Autor: Mario Alfonso Nuñez
 * GitHub:
 */


//Validar nombre
const validarNombre = name => {
    if(name === '') {
        alert("El nombre no puede estar vacio");
        return false;
    }
    return true;
}

//Validar pass
const validarPass = password => {  
    if(password.length < 8){
        alert("La contraseña es corta");
        return false;
    }
    return true;
}

//Validar formulario
const validarFormulario = () => {   
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const mail = document.getElementById('mail').value;
    const password = document.getElementById('pass').value;
    
    return validarNombre(name) && validarPass(password);
}

//Enlazar/enviar formulario
document.getElementById('form').onsubmit = () =>{
    return validarFormulario();
};

const enviarFormulario = () =>{
    if(validarFormulario()){
        return true;
    } else {
        return false;
    }
}
