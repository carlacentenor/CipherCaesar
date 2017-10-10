
var num = prompt("Ingrese opción \n 1. Codificar en Cesar \n 2. Decodificar en Cesar");

if(num==="1"){
  function cipher(){

        do{
            var string= prompt("Ingrese texto")
          }
        while (!string || !/^[a-zA-Z\s]*$/.test(string) ); // valida que solo ingrese  texto y espacios entre texto


        var codeCipher ="";


        for(i=0;i<string.length;i++){
          var numberCodeAscii = string.charCodeAt(i); // obtenemos el código ASCII
              if(numberCodeAscii>=65 && numberCodeAscii<=90){ // condición codigo ASCII (Valores Mayusculas)
                  var valueCapitalLetter = (numberCodeAscii-65 +33)%26 + 65; // Obtener el nuevo código ASCII mediante fórmula
                  var capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alfabeto
                  codeCipher+=capitalLetter; // concatenamos para formar la palabra

                }


              else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // condición código ASCII (Valores minúsculas)
                  var valueLetterLower = (numberCodeAscii-97 +33)%26 +97; //Obtener el nuevo código ASCII mediante fórmula
                  var letterLower = String.fromCharCode(valueLetterLower); //convertir el nuevo ASCII en letra del alfabeto
                  codeCipher+=letterLower; // concatenar para formar la nueva palabra

                }
              else if(numberCodeAscii==32){
                    var space = " ";
                    codeCipher+=space;
                }

            }
        return document.write("Texto original: " + string +"  ======= " + "Texto codificado : " + codeCipher );

      }

  cipher(); // llama a la función

}

else if (num === "2"){
    function decipher(){
      do{
          var string= prompt("Ingrese texto")
        }
      while (!string  || !/^[a-zA-Z\s]*$/.test(string)); // valida que solo ingrese  texto

      var codeDecipher ="";


        for(i=0;i<string.length;i++){

        var numberCodeAscii = string.charCodeAt(i); // obtenemos el código ASCII

        if(numberCodeAscii>=65 && numberCodeAscii<=90){ // validando para letras mayúsculas
            var valueCapitalLetter = (numberCodeAscii+65-33)%26+65 ; // código Ascii de la nueva letra
            var capitalLetter= String.fromCharCode(valueCapitalLetter); // convierte el nuevo ASCII en una letra del alafabeto
            codeDecipher+=capitalLetter; // concatenamos

        }
       else if (numberCodeAscii>=97 && numberCodeAscii<=122) { // validando para letras minusculas
            var valueLetterLower =  (numberCodeAscii+97-45)%26+97 ; // código ASCII de la nueva letra
            var letterLower = String.fromCharCode(valueLetterLower); //convierte el nuevo ASCII en una letra del alfabeto
            codeDecipher+=letterLower; // concatenamos la nueva palabra

        }
       else if(numberCodeAscii==32){
              var space = " ";
              codeDecipher+=space;
          }
      }
    return document.write("Texto codificado :" + string  + " ========  "+"Texto original : \n " + codeDecipher ); // muestra la palabra decodificada

  }

decipher(); // llama a la función

}

else {                                  // Si ingresa otra opción no definida
    alert("Ingrese una opción válida");
}
