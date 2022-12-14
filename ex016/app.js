function imprima(){
    let periodo =  (document.getElementById("periodo").value)
   
   
   
    if(periodo==m){
       document.getElementById("resultado").innerHTML ="m"
    }else{
       document.getElementById("resultado").innerHTML = "valor inválido"
    }
   }

   if(periodo==v){
    document.getElementById("resultado").innerHTML ="v"
 }else{
    document.getElementById("resultado").innerHTML = "valor inválido"
 }
 if(periodo==n){
    document.getElementById("resultado").innerHTML ="n"
 }else{
    document.getElementById("resultado").innerHTML = "valor inválido"
 }
