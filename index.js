

function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let computadora = document.getElementById("computadora");

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if  (texto.length != 0)  {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        computadora.src = "./img/Encriptado.png";
    } else{
    computadora.src = "./img/errorsito.jpg";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    tituloMensaje.textContent ="Ningun mensaje encontrado"
    swal("Oooooops", "Debes ingresar un texto", "Warning");
    
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let computadora = document.getElementById("computadora");
    
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        if  (texto.length != 0){
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto deesencriptado con exito";
            parrafo.textContent = "";
            computadora.src = "./img/desencriptado.jpg";

        } else{
            computadora.src = "./img/computer.png";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
            tituloMensaje.textContent ="Ningun mensaje encontrado"
            swal("Oooooops", "Debes ingresar un texto", "Warning");
            
    }
}