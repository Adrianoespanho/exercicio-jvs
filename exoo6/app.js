    function Mostrarnome(){
        let nome = document.getElementById("Nome").value
        let altura = document.getElementById("Altura").value
        let idade= document.getElementById("Idade").value
        document.getElementById("N").innerHTML = ":Seu nome é " + nome
        document.getElementById("A").innerHTML = ":Sua Altura " + altura
        document.getElementById("I").innerHTML = ":Sua Idade " + idade
    }

