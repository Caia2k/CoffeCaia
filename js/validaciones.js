function validar() {

var name,telefono,email,message,expresion;
expresion=/\w+@\w+\.+[a-z]/;

name= document.getElementById("name").value;
telefono=document.getElementById("telefono").value;
email=document.getElementById("email").value;
message=document.getElementById("message").value;

if (name==="") {
    alert("El campo nombre esta vacio");
    return false;
}

if (telefono===""){
    alert("El campo teléfono está vacío");
    return false;
}

if (isNaN(telefono)) {
   alert("El telefono no es un número");
   return false;
}
if (email===""){
    alert("El campo email está vacío");
    return false;
}

if (!expresion.test(email)){
    alert("El campo mail no es válido");
    return false;
}


if (message===""){
    alert("El campo mensaje está vacío");
    return false;
}

}