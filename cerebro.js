const campo= document.getElementById("campo")
const lista= document.getElementById("lista")
const adicionar= document.getElementById("adicionar")


let tarefas= JSON.parse(localStorage.getItem("tarefas")) || [];

function mostrarTarefas(){
    
    lista.innerHTML=""; //limpa lista na tela

      tarefas.forEach(function (tarefa,indice){

        const li=document.createElement("li")

        li.textContent=tarefa
        lista.appendChild(li);
        
        const botao=document.createElement("button");
        botao.textContent="remover"

        botao.addEventListener("click",function(){
          tarefas.splice(indice,1);
          mostrarTarefas();
          salvartTarefas();
        });
        li.appendChild(botao);
        lista.appendChild(li);
       
        salvartTarefas();
      });
}
function adicionarTarefa() {
    let texto = campo.value.trim();

    if (texto === "") {
        return;
    }

    tarefas.push(texto);
    campo.value = "";
    mostrarTarefas();
}

adicionar.addEventListener("click", adicionarTarefa);

campo.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});
function salvartTarefas(){
  localStorage.setItem("tarefas",JSON.stringify(tarefas));
}

mostrarTarefas();