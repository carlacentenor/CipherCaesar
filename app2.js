
function deCipher(){
    var string = prompt("Ingrese el texto a decodificar")
    var codeDecipher ="";


    for(i=0;i<string.length;i++){

        var numberCodeAscii = string.charCodeAt(i); // obtenemos el código ASCII

        if(numberCodeAscii>=65 && numberCodeAscii<=90){ // validando para letras mayúsculas
            var valueCapitalLetter = (numberCodeAscii+65)-33%26-65 ; // código Ascii de la nueva letra
            var capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alafabeto
            codeDecipher+=capitalLetter; // concatenamos

        }
       else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // validando para letras minusculas
            var valueLetterLower =  (numberCodeAscii+97)-33%26-97 ; // código ASCII de la nueva letra
            var letterLower = String.fromCharCode(valueLetterLower); //convierte el nuevo ASCII en una letra del alfabeto
            codeDecipher+=letterLower; // concatenamos la nueva palabra

          }
        }
    return document.write(codeDecipher); // muestra el nuevo
}
deCipher();
