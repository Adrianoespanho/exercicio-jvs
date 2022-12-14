function numeroreal() {
    let numero = parseFloat (document.getElementById("numero").value)
   
   
   
    if(numero == 0){
       document.getElementById("resultado").innerHTML ="igual a zero"
    }else if(numero<0){
       document.getElementById("resultado").innerHTML = "menor que zero"
    }else if(numero>0){
        document.getElementById("resultado").innerHTML = "maior que zero"
   }
}