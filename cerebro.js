const campo= document.getElementById("campo")
const lista= document.getElementById("lista")
const adicionar= document.getElementById("adicionar")


let tarefas=[];

function mostrarTarefas(){
    
    lista.innerHTML=""; //limpa lista na tela

      tarefas.forEach(function (tarefa){

        const li=document.createElement("li")

        li.textContent=tarefa
        lista.appendChild(li);

      });
}
adicionar.addEventListener("click",function(){

   let texto=campo.value;
   tarefas.push(texto);
   campo.value=""
   mostrarTarefas();
    
});