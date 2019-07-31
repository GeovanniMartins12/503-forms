let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmaEmail = document.querySelector("#confirmaEmail");
let senha = document.querySelector("#senha");
let botao = document.querySelector("button");
let sexo = document.querySelector("select");

function cadastro(){
    if(email.value == confirmaEmail.value){
        localStorage.setItem(`nome`, nome.value);
        localStorage.setItem(`email`, email.value);
        localStorage.setItem(`senha`, senha.value);
        localStorage.setItem(`sexo`, sexo.value);
    }

    else{
        alert("Seu email está incorreto!");
    }
}

botao.onclick = cadastro;