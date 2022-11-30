function maiordeidade(){
    let idade = document.getElementById("idade").value
    if(idade >=18){
    document.getElementById("resposta").innerHTML="voçe ja pode dirigir"
    }else{
        document.getElementById("resposta").innerHTML= "volta mais tarde"
    }

}