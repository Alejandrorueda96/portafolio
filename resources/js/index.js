//Declaracion de variables
var mensaje = "";
var mensajeEncriptado = "";
let mensajeUsuario = document.getElementById('msgOriginal');
let buttonEnc = document.getElementById('enc');
let buttonDes = document.getElementById('des');
mensajeUsuario.addEventListener('input', validate);
  
//Deshabilitar los botones de encriptar y desencriptar si el input del mensaje esta vacio
if(mensajeUsuario.value == "") {
        buttonDes.disabled = true;
        buttonEnc.disabled = true;
    }
//Funcion para copiar el mensaje encriptado/desencriptado en el portapapeles
function copyText() {

    let copyText = document.querySelector("#msgEncriptado");
    copyText.select();
    document.execCommand("copy");
    
}

//Funcion que valida si el usuario ingresa caracteres no permitidos (Mayusculas,acentos,caracteres especiales)
//bloqueando los botones de encriptar y desencriptar hasta que elimine dichos caracteres.
function validate(){

    var validarMensaje = mensajeUsuario.value;
    var restriccion = /[A-Z\u00C0-\u00FF]/;

    if(validarMensaje.match(restriccion)) {
        buttonEnc.disabled = true;
        buttonDes.disabled = true;
        document.getElementById("msgError").style.visibility = "visible";
    } 
    
    else if(validarMensaje == "") {
        buttonDes.disabled = true;
        buttonEnc.disabled = true;
    }
    else {
        buttonEnc.disabled = false;
        buttonDes.disabled = false;
        document.getElementById("msgError").style.visibility = "hidden";
    }
}

//Funcion que encripta el mensaje ingresado por el usuario usando la guia de encriptacion por el equipo de Alura
function encriptar(){
    
    mensaje = document.getElementById("msgOriginal").value;
    for(i = 0; i < mensaje.length; i++){
    switch(mensaje[i]){
        case "a":
            mensajeEncriptado += "ai";
            break;
        case "e":
            mensajeEncriptado += "enter";
            break;
        case "i":
            mensajeEncriptado += "imes";
            break;
        case "o":
            mensajeEncriptado += "ober";
            break;
        case "u":
            mensajeEncriptado += "ufat";
            break;
        default:
            mensajeEncriptado += mensaje[i];
            
    }
}
console.log(mensajeEncriptado);
document.getElementById("msgOriginal").value = "";
document.getElementById("msgEncriptado").value = mensajeEncriptado;
document.getElementById("msgEncriptado").classList.add("show");
mensaje = "";
mensajeEncriptado = "";
document.getElementById("panelder").style.borderColor = "red";
document.getElementById("candenc").style.display = "block";
document.getElementById("canddes").style.display = "none";
validate();
}

//Desencriptar
var mensajeOriginal = "";
var aux = "";

//Funcion que desencripta el mensaje ingresado por el usuario segun las indicaciones realizadas por el equipo Alura
function desencriptar(){
mensajeEncriptado = document.getElementById("msgOriginal").value;
for(i = 0; i < mensajeEncriptado.length; i++){
    aux = mensajeEncriptado[i];
    switch(mensajeEncriptado[i]){    
        case "a":           
            for(j = 1; j<2; j++){
                aux += mensajeEncriptado[i+j];
            }
            if(aux == "ai"){
                mensajeOriginal += "a";
                i += 1;
            }
            else{
                mensajeOriginal += "a";
            }
            break;
        case "e":
            for(j = 1; j<5; j++){
                    aux += mensajeEncriptado[i+j];
                }
            if(aux == "enter"){
                mensajeOriginal += "e";
                i += 4;
            }
            else{
                mensajeOriginal += "e";
                
            }
            break;
        case "i":
            for(j = 1; j<4; j++){
                    aux += mensajeEncriptado[i+j];
                }
            if(aux == "imes"){
                mensajeOriginal += "i";
                i += 3;
            }
            else{
                mensajeOriginal += "i";
                
            }
            break;
        case "o":
            for(j = 1; j<4; j++){
                    aux += mensajeEncriptado[i+j];
                }
            if(aux == "ober"){
                mensajeOriginal += "o";
                i += 3;
            }
            else{
                mensajeOriginal += "o";
                
            }
            break;
        case "u":
            for(j = 1; j<4; j++){
                    aux += mensajeEncriptado[i+j];
                }
            if(aux == "ufat"){
                mensajeOriginal += "u";
                i += 3;
            }
            else{
                mensajeOriginal += "u";
                
            }
            break;
        default:
            mensajeOriginal += mensajeEncriptado[i];
            
    }
    aux = "";
}
document.getElementById("msgOriginal").value = "";
document.getElementById("msgEncriptado").value = mensajeOriginal;
mensajeOriginal = "";
mensajeEncriptado = "";
document.getElementById("panelder").style.borderColor = "green";
document.getElementById("candenc").style.display = "none";
document.getElementById("canddes").style.display = "block";
validate();
}
