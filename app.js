function cipher(){
    var string =prompt("Ingrese un texto")
    var codeCipher ="";
  //  if(!string || typeof string =="number"){
    //    alert("Ingresa solo texto");
    //}

    for(i=0;i<string.length;i++){
        var numberCodeAscii = string.charCodeAt(i); // obtenemos el código ASCII
        if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)
        var valueCapitalLetter = (numberCodeAscii-65 +33)%26 + 65; // Obtener el nuevo código ASCII mediante fórmula
        var capitalLetter= String.fromCharCode(letter); // convierte el nuevo ASCII en una letra del alfabeto
        codeCipher+=capitalLetter; // concatenamos para formar la palabra

        }
        else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // condición código ASCII (Valores minúsculas)
            var valueLetterLower = (numberCodeAscii-97 +33)%26 +97; //Obtener el nuevo código ASCII mediante fórmula
            var letterLower = String.fromCharCode(valueLetterLower); //convertir el nuevo ASCII en letra del alfabeto
            codeCipher+=letterLower; // concatenar para formar la nueva palabra

        }
        }
    return document.write(codeCipher);
}

cipher();
