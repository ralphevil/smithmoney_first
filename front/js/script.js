
/* thatiany */


function adicionarSubcategoriaEditavel(evento) {
    var subcategoriaEditavel = document.createElement("INPUT");
    subcategoriaEditavel.classList.add("subcategoria-editavel");
    subcategoriaEditavel.placeholder = "adicione aqui sua subcategoria";
    
    var botaoSalvar = document.createElement("input");
    botaoSalvar.classList.add("botao-temporario");
    botaoSalvar.classList.add("botao-salvar");
    botaoSalvar.type = "button";
    botaoSalvar.value = "Salvar"; // Really? You want the default value to be the type string?
    botaoSalvar.name = "salvar"; // And the name too?
    botaoSalvar.style.float = "right";
    botaoSalvar.style.width = "80px";

    var botaoRemover = document.createElement("input");
    botaoRemover.classList.add("botao-temporario");
    botaoRemover.classList.add("botao-remover");
    botaoRemover.type = "button";
    botaoRemover.value = "Remover"; // Really? You want the default value to be the type string?
    botaoRemover.name = "remover"; // And the name too?
    botaoRemover.style.float = "right";
    botaoRemover.style.width = "80px";

    botaoSalvar.onclick = function (evento) { // Note this is a function
        adicionarSubcategoria(evento, subcategoriaEditavel, botaoSalvar, botaoRemover);
    };

    botaoRemover.onclick = function (evento) { // Note this is a function
        subcategoriaEditavel.remove();
        botaoSalvar.remove();
        botaoRemover.remove(); 
    };



    // subcategoriaEditavel.setAttribute("type","text");





    var listaTemporaria = document.createElement('li');

    listaTemporaria.appendChild(subcategoriaEditavel);
    listaTemporaria.appendChild(botaoRemover);
    listaTemporaria.appendChild(botaoSalvar);
    

    insertAfter(evento.currentTarget, listaTemporaria);

    // insertAfter(evento.currentTarget, subcategoriaEditavel);
    // insertAfter(subcategoriaEditavel, botaoSalvar);
    // insertAfter(botaoSalvar, botaoRemover);

}



function adicionarSubcategoria(evento, subcategoriaEditavel, botaoSalvar, botaoRemover) {

    // pega os elementos com a classe em questão
    // var container = evento.currentTarget;
    // var elements = container.getElementsByClassName("botao-temporario");
    
    // while (elements[0]) {
    //     elements[0].parentNode.removeChild(elements[0]);
    // }

    var modelElement = evento.currentTarget.parentElement.previousElementSibling;
    // var subcategoriaDeViagens = modelElement.cloneNode(true);
    var subcategoriaDeViagens = document.createElement("li");

    subcategoriaDeViagens.innerHTML = '<li class="list-group-item subcategoria-lista-dinamica"><span></span></li>';
    

    subcategoriaDeViagens.querySelector("span").innerHTML = subcategoriaEditavel.value;

    subcategoriaEditavel.remove();
    botaoSalvar.remove();
    botaoRemover.remove(); 

    var subcategoriaDeViagensBotaoRemover = document.createElement("input");
    subcategoriaDeViagensBotaoRemover.type = "button";
    subcategoriaDeViagensBotaoRemover.value = "Excluir";
    subcategoriaDeViagensBotaoRemover.style.float = "right";

    subcategoriaDeViagensBotaoRemover.style.display = "none";

    subcategoriaDeViagensBotaoRemover.onclick = function (evento) { // Note this is a function
        evento.currentTarget.parentElement.remove();
    };

    subcategoriaDeViagens.onmouseover = function (evento) { // Note this is a function
        evento.currentTarget.querySelector("input").style.display = "inline-table";
    };

    insertAfter(subcategoriaDeViagens.querySelector("span"), subcategoriaDeViagensBotaoRemover);
    insertAfter(modelElement, subcategoriaDeViagens);




 



}



/* funções */

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
   /* ******* */

/* ******** */