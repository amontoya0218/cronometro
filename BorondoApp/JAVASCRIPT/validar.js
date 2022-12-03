
function ir() {

   
    let correo = document.getElementById("correo").value;
    let clave1 = document.getElementById("clave1").value;
    let clave2 = document.getElementById("clave2").value;

    //const boton = document.getElementById("boton");
     //const formulario = document.getElementById("formulario"); 
     const parrafo = document.getElementById("mensaje");

    
    let mensaje = ""
    let regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = regexEmail.test(correo)
     
    parrafo.innerHTML="";


    if(correo=="" || clave1=="" || clave2=="" )
    {
        mensaje = "¡hay campos vacios!"
        entrada=true;
        parrafo.innerHTML = mensaje
        return false; 
    }

    if(clave1 != clave2 )
    {
        mensaje = "¡Las contraseñas no coinciden!"
        
        parrafo.innerHTML = mensaje
        return false; 
    }   
    
    if (clave1.length<=9) {
        mensaje = "¡Tamaño de la contraseña muy corto!"
        parrafo.innerHTML = mensaje
        return false;         
        
    }
    
   


    if(esValido==true){}
        else{
        mensaje = "¡Correo invalido!"
        parrafo.innerHTML = mensaje
        return false;         
         }    


    function datos(){

        let vercorreo=correo;
        let verclave1=correo;
        let verclave2=correo; 
    }

}
    
    //  if (clave1 != clave2) {
         
    //      mensaje += "Las contraseñas no coinciden <br>"
    //      entrada = true
    //     if (clave1.value.lenght < 9) {
    //          mensaje += "Tamaño de la contraseña muy corto <br>"
    //          entrada = true
    //      }
    //      if (clave2.value.lenght < 9) {
    //          mensaje += "Tamaño de la contraseña muy corto <br>"
    //         
    //      }

    //  }
    // if (regexEmail.test(email.value)) {
    //      mensaje += "El correo no es valido <br>"
    //      entrada = true
    //  }



    // if (entrar) {
    //      parrafo.innerHTML = mensaje
    //      alert("entron")
    //  }










