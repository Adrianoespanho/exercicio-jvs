function aprovado(){
 let n1 = parseFloat (document.getElementById("nota1").value)
 let n2 = parseFloat(document.getElementById("nota2").value)
 let n3 = parseFloat(document.getElementById("nota3").value)

 let media = (n1+n2+n3)/3

 if(media>=5){
    document.getElementById("resultado").innerHTML ="aprovado sua media foi" + media
 }else{
    document.getElementById("resultado").innerHTML = "reprovado sua media foi" + media 
 }
}