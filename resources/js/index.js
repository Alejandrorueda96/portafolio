var mensaje = "";
var mensajeEncriptado = "";
let mensajeUsuario = document.getElementById('msgOriginal');
let buttonEnc = document.getElementById('enc');
let buttonDes = document.getElementById('des');
mensajeUsuario.addEventListener('input', validate);
    
if(mensajeUsuario.value == "") {
        buttonDes.disabled = true;
        buttonEnc.disabled = true;
    }
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
mensaje = "";
mensajeEncriptado = "";
document.getElementById("panelder").style.borderColor = "red";
document.getElementById("candenc").style.display = "block";
document.getElementById("canddes").style.display = "none";
validate();
}

//Desencriptador

var mensajeOriginal = "";
var aux = "";
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

function copyText() {

    let copyText = document.querySelector("#msgEncriptado");
    copyText.select();
    document.execCommand("copy");
}