//Selecionando os elementos do HTML 
const inputTarefa = document.getElementById("tarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaTarefas");

//Evento do botão
btnAdicionar.addEventListener("click", function() { //Quando o botão for clicado, a função será executada
    
    const texto = inputTarefa.value; //Pega o texto escrito

    if(texto === ""){ 
        alert("Digite uma tarefa");
        return;
    }

    const li = document.createElement("li"); //vai criar um novo item da lista
    li.className = "tarefa"; //adiciona a class css

    //Insere no HTML para visualização
    li.innerHTML = ` 
        <span>${texto}</span>
        <button class="btn-excluir">🗑️</button>
    `;

    lista.appendChild(li); //faz aparecer na tela

    inputTarefa.value = ""; //limpa o campo de escrita
    inputTarefa.focus();
});

inputTarefa.addEventListener("keydown", function(event){
        if(event.key === "Enter"){ //O event sabe que é a tecla do enter
            btnAdicionar.click(); //faz o evento acima
        }
});


