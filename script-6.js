document.addEventListener('DOMContentLoaded', function () {
    var valordolar = parseFloat(window.prompt("Antes de mais nada, qual a cotação do dolár atualmente? "))

    document.addEventListener('click', function conversao() {
        var real = parseFloat(window.prompt("Quantos R$ na carteira você tem? "))
        var dolar = real / valordolar

        alert("Você tem " + dolar.toFixed(2) + " em dólar na sua carteira")
    })

})