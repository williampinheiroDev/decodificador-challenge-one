const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncripitado) {
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncripitado = stringEncripitado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncripitado.includes(matrizCodigo[i][0])){
            stringEncripitado = stringEncripitado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncripitado;
}
//
function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencripitado) {
    let matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencripitado = stringDesencripitado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencripitado.includes(matrizCodigo[i][1])){
            stringDesencripitado = stringDesencripitado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencripitado;
}

function btnCopiar(){
    mensagem.select();
    document.execCommand("copy");
    mensagem.value = "";
    alert("Texto copiado com sucesso!");
}
