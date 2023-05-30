function bhaskara() {
    var a = window.prompt("Digite o valor de a: ")
    var b = window.prompt("Digite o valor de b: ")
    var c = window.prompt("Digite o valor de c: ")
    var calculo = document.getElementById("calculo")
    var delta = Math.pow(b, 2) - 4 * a * c;

    calculo.innerHTML = "A equação atual é: <strong> " + a + "x² + " + b + "x + " + c + " = 0 </strong><br> O calculo realizado será: <strong>Δ = "+ b +"² - 4 . " + a + " . " + c + "</strong><br>O valor do calculo foi: Δ =" + delta
}