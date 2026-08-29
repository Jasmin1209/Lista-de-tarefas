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
        <div class="acoes">
            <button class="btn-excluir">🗑️</button>
            <button class="btn-concluir">✔️</button>
        </div>
    `;

    const botaoExcluir = li.querySelector(".btn-excluir"); //Seleciona o botão de excluir
    adicionarEventoExcluir(botaoExcluir); //Adiciona o evento de excluir

    const botaoConcluir = li.querySelector(".btn-concluir");
    adicionarEventoExcluir(botaoConcluir);

    lista.appendChild(li); //faz aparecer na tela

    inputTarefa.value = ""; //limpa o campo de escrita
    inputTarefa.focus();
});

inputTarefa.addEventListener("keydown", function(event){
        if(event.key === "Enter"){ //O event sabe que é a tecla do enter
            btnAdicionar.click(); //faz o evento acima
        }
});

function adicionarEventoExcluir(botao){
    botao.addEventListener("click", function(){
        // parentElement vai pegar o "pai" de botao que é o item "li                   "
        const li = botao.parentElement; 
        li.remove();
    });
}

const botoesExcluir = document.querySelectorAll(".btn-excluir"); //Seleciona todos os botões de excluir
botoesExcluir.forEach(function(botao){
    adicionarEventoExcluir(botao); //Adiciona o evento de excluir para cada botão
});

function adicionarEventoConcluir(botao){
    botao.addEventListener("click", function(){
        // A div é um "pai" e li é outro
        const li = botao.parentElement.parentElement;
        // Toggle adiciona uma classe quando não existe, e remove quando existe
        li.classList.toggle("concluida");

        // Colocar outro icone 
        if(li.classList.contains("concluida")){ 
            botao.textContent="↩";
        }else{
            botao.textContent="✔️";
        }
    });
}

const botoesConcluir = document.querySelectorAll(".btn-concluir"); //Seleciona todos os botões de excluir
botoesConcluir.forEach(function(botao){
    adicionarEventoConcluir(botao); //Adiciona o evento de concluir para cada botão
});

