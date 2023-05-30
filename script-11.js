function compra() {
    let produto = window.prompt("Qual o produto você quer comprar?")
    let preco = parseFloat(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let pagar = parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${produto}`))
    let troco = pagar - preco

    window.alert(`Você comprou ${produto} que custou R$ ${preco.toFixed(2)}\nDeu R$ ${pagar.toFixed(2)} em dinheiro e vai receber R$ ${troco.toFixed(2)} de troco\nVolte Sempre!`)
}