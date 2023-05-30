function mudar() {
    let precoAntigo = parseFloat(window.prompt("Qual era o preço anterior do produto?"))
    let precoAtual = parseFloat(window.prompt("Qual é o preço atual do produto?"))
    let mensagem = window.document.getElementById("texto")

    mensagem.innerHTML = "<br><h1> Analisando os valores informados.</h1>"
    mensagem.innerHTML += `<br> O produto custava R$ ${precoAntigo} e agora custa R$ ${precoAtual}.<br>`

    if (precoAntigo < precoAtual) {
        mensagem.innerHTML += "<br> Hoje o produto está mais caro."
        let alterarPreco = precoAtual - precoAntigo
        mensagem.innerHTML += `<br> O preço subiu R$ ${alterarPreco} em relação ao preço anterior<br>`
        let porcentagem = (alterarPreco / precoAntigo) * 100
        mensagem.innerHTML += `<br> Uma variação de ${porcentagem.toFixed(2)}% para cima<br>`
    }
    else if (precoAtual < precoAntigo) {
        mensagem.innerHTML += "<br> Hoje o produto está mais barato."
        let alterarPreco = precoAntigo - precoAtual
        mensagem.innerHTML += `<br> O preço caiu R$ ${alterarPreco} em relação ao preço anterior.<br>`
        let porcentagem = (alterarPreco / precoAntigo) * 100
        mensagem.innerHTML += `<br> Uma variação de ${porcentagem.toFixed(2)}% para baixo.<br>`
    }
    else if (precoAntigo == precoAtual) {
        mensagem.innerHTML += "<br> Não houve alteração de preço.<br>"
    }
    else {
        mensagem.innerHTML = "<h2>Valor inválido tente novamente<h2>"
    }
}