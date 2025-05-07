let nomeUsuário = "";
let elemento = document.querySelector("#nome-usuário");


while(nomeUsuário == ""){
    nomeUsuário = prompet (qual o seu nome?); 
}
if(nomeUsuário == null){
    elemento.textContent = "seja muito bem-vindo"; 
}else{
    elemento.textContent = nomeUsuário; 
}

elemento.textContent = nomeUsuário;