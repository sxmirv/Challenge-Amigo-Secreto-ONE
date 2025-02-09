//Criando lista para armazenar os nomes
let nomes = [];

//Função para adicionar amigos à lista
function addAmigo(){
    let amigo = document.getElementById('amigo').value.trim(); //trim() para remover espaços extras

    if (amigo === ""){
        alert("Por favor, insira um nome!");
    }
    else if(nomes.includes(amigo)){
        alert(`O nome ${amigo} já foi inserido!`); //verifica se um nome já foi inserido
    }
    else{
        nomes.push(amigo); //adiciona o nome à lista
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
    let ul = document.getElementById('listaAmigos'); 
    ul.innerHTML = ''; //limpando o conteúdo da lista para evitar duplicações

    //Loop para percorrer toda a lista e criar um novo elemento de lista para cada nome
    for (let item of nomes) {
        let li = document.createElement('li'); //cria um elemento de lista
        li.textContent = item; //adiciona a este elemento o valor de "item"
        ul.appendChild(li);
    }
}

//Função para sortear o amigo secreto
function sortearAmigo(){

    if (nomes.length === 0){
        let ul = document.getElementById('listaAmigos');
        ul.innerHTML = "<li>Atenção, lista vazia! Adicione amigos para sortear.</li>"; //cria um elemento de lista 
        return;
    }
    else{
        let indiceSorteado = Math.floor(Math.random() * nomes.length); //gera um número inteiro aleatório dentro do intervalo específico (tamanho da lsita de nomes)
        let nomeSorteado = nomes[indiceSorteado]; //pega o valor do índice sorteado

        //limpa a lista para mostrar o nome sorteado
        document.getElementById('listaAmigos').style.display = 'none';
        
        let ul = document.getElementById('resultado');
        
        //cria um novo elemento de lista para mostrar o nome sorteado
        let li = document.createElement('li');
        li.textContent = `O amigo(a) secreto(a) sorteado é: ${nomeSorteado}`;
        ul.appendChild(li);

        nomes.splice(indiceSorteado, 1); //remove o nome sorteado da lista para que ele não se repita em caso de um novo sorteio
    }
}