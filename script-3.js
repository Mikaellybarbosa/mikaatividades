function numeros() {
    var numero = Number(window.prompt("Digite um número aleátorio: "))
    var antes = numero - 1
    var depois = numero + 1
    var mensagem = `Antes de ${numero}, temos o número ${antes}.\nDepois de ${numero}, temos o número ${depois}.`
    window.alert(mensagem)
}