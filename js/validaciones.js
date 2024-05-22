function validar() {

var name,telefono,email,message,expresion;
expresion=/\w+@\w+\.+[a-z]/;

name= document.getElementById("name").value;
telefono=document.getElementById("telefono").value;
email=document.getElementById("email").value;
message=document.getElementById("message").value;

if (name==="") {
    swal("El campo nombre esta vacio");
    return false;
}

if (telefono===""){
    swal("El campo teléfono está vacío");
    return false;
}

if (isNaN(telefono)) {
    swal("El telefono no es un número");
   return false;
}
if (email===""){
    swal("El campo email está vacío");
    return false;
}

if (!expresion.test(email)){
    swal("El campo mail no es válido");
    return false;
}


if (message===""){
    swal("El campo mensaje está vacío");
    return false;
}

}