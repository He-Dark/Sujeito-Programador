// Criando as variaveis no scopo global
// com a referência no HTML, div com iD App dentro dela puxando a UL, Input e Button

let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [] // JSON.parse converte para lista 

// let tarefas = []; // variavel tarefas que vai receber um array/lista, está iniciando vazia

function renderTarefas(){ //Essa função está renderizando as tarefas
    listElement.innerHTML = ""; //listElement está acessando a tag UL no HTML, "" está deixando ela vazia
// .map vai percorrer todos os elementos e dentro dele pode ter acesso ao elemento que está passando.
// Ex: Passou na primeira, pega o que tem dentro da primeira e assim sucessivamente.
// isso é uma função anônima
    tarefas.map((todo)=>{ 
        let liElement = document.createElement("li"); // liElement está criando no documento a tag do tipo li
        let tarefaText = document.createTextNode(todo);// tarefaText está criando um texto que está passando no todo (definido no .map)

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        let linkText = document.createTextNode("Excluir");
        linkElement.appendChild(linkText);

        let posicao = tarefas.indexOf(todo);

        linkElement.setAttribute("onclick", `deletarTarefa(${posicao})` );

        liElement.appendChild(tarefaText); //appendChild vai colocar um filho da li;
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);// Coloca a li dentro da ul
    })
}

renderTarefas()

function adicionarTarefas(){
    if(inputElement.value === ''){
        alert("Digite alguma tarefa");
        return false;
    }else{
        // Variavel novaTarefa está armazenando o que foi digitado/escrito dentro do input.
        let novaTarefa = inputElement.value;
        //.push está adicionando o que está dentro do inputElement a lista tarefas
        tarefas.push(novaTarefa);
        inputElement.value = ''; // Limpando o input após a tarefa ser adicionada

        renderTarefas(); // Vai renderizar a lista.

        salvarDados()
    }
}

buttonElement.onclick = adicionarTarefas // onclick significa que após o click a varivavel buttonElement 
// vai receber a função adicionarTarefas. Vai executar a function adicionarTarefas após clicar no botão

function deletarTarefa(posicao){
    tarefas.splice(posicao, 1) //Ele pegar no posição que receber (todo) e deletar o primeiro item (,1)
    renderTarefas();// tem que chamar o render novamente para atualizar a lista visualmente.
    salvarDados()
}

function salvarDados(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)) //JSON.stringify está convertendo a lista para string, pois o local storage só permite salvar texto
}
                                        