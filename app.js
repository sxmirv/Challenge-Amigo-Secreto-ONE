//Criando lista para armazenar os nomes
let nomes = [];

//Função para adicionar amigos à lista
function addAmigo(){
    let amigo = document.getElementById('amigo').value.trim(); //trim() para remover espaços extras

    if (amigo === ""){
        alert("Por favor, insira um nome!");
    }
    else{
        nomes.push(amigo);
        //console.log(nomes);
        limpaCampo();
        atualizaLista();
    }

}

//Função para limpar o campo quando um nome for adicionado
function limpaCampo(){
    amigo = document.getElementById('amigo');
    amigo.value = "";
}

//Função para atualizar a lista de amigos
function atualizaLista(){
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = ''; //limpando o conteúdo da lista para evitar duplicações

    //Loop para percorrer toda a lista e criar um novo elemento de lista para cada nome
    for (let item of nomes) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    }
}

//Função para sortear o amigo secreto
function sortearAmigo(){

    if (nomes.length === 0){
        console.log("Lista vazia!");
    }
    else{
        let indiceSorteado = Math.floor(Math.random() * nomes.length);
        let nomeSorteado = nomes[indiceSorteado];

        const ul = document.getElementById('listaAmigos');
        ul.innerHTML = '';
        
        let li = document.createElement('li');
        li.textContent = nomeSorteado;
        ul.appendChild(li);
    }
}