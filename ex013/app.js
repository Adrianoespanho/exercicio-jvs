function maiordeidade(){
    let idade = document.getElementById("idade").value
    if(idade >=18){
    document.getElementById("resposta").innerHTML="voçe e maoir de idade"
    }else{
        document.getElementById("resposta").innerHTML= "voçe nao e maior de idade"
    }

}

