const campo= document.getElementById("campo")
const lista= document.getElementById("lista")
const adicionar= document.getElementById("adicionar")


let tarefas=[];
function mostrarTarefas(){
    lista.innerHTML=""; //limpa lista na tela

    tarefas.forEach(function (tarefa){

      const adicionarlista=document.createElement("lista")

      adicionarlista="";
      lista.appendChild(adicionarlista);

    });
}