function descontar(){
    var produto = window.prompt("Qual produto que você quer comprar? ")
    var precoAntigo = parseFloat(window.prompt("Qual o valor original deste produto? "))
    var desconto = precoAntigo * 0.1
    var precoNovo = precoAntigo - desconto
    var msg = document.getElementById("texto")

    msg.innerHTML = "<h1>Calculando o desconto de 10% para " + produto + "</h1>"+"O preço original era de R$ " + precoAntigo + "<br> Você acaba de ganhar R$" + desconto.toFixed(2) + " de desconto (-10%).<br>No fim você vai pagar R$" + precoNovo.toFixed(2) + " no produto " + produto 

}