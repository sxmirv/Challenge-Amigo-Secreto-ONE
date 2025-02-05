//Criando lista para armazenar os nomes
let nomes = [];

//Função para adicionar amigos à lista
function addAmigo(){
    let amigo = document.getElementById('amigo').value.trim(); //trim() para remover espaços extras

    if (amigo === ""){
        alert("Insira um nome válido!");
    }
    else{
        nomes.push(amigo);
        console.log(nomes);
        limpaCampo();
    }
}

//Função para limpar o campo quando um nome for adicionado
function limpaCampo(){
    amigo = document.getElementById('amigo');
    amigo.value = "";
}

