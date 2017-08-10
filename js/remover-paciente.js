var tabela = document.querySelector("table");

tabela.addEventListener("dblclik", function(event)){
    
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    
    paiDoAlvo.remove();

    //ou event.target.parentNode.remove();
}