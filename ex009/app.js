function maiordeidade(){
    let idade = document.getElementById("idade").value
    if(idade >=18){
    document.getElementById("resposta").innerHTML="voçe ja é maior de idade"
    }else{
        document.getElementById("resposta").innerHTML= "voçe  e menor de idade"
    }
}