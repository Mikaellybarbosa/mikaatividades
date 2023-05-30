function aumento() {
    var nome = window.prompt("Qual é o nome do funcionário?");
    var salario = parseFloat(window.prompt(`Qual é o salário de ${nome}? `));
    var aumento = parseFloat(window.prompt("Qual é a porcentagem de aumento salarial?"));

    var aumentoValor = salario * (aumento / 100);
    var salarioNovo = salario + aumentoValor;
    var aumentoMensal = aumentoValor + salario;

    var texto = "<br><strong>" + nome + " recebeu um aumento salarial!!</strong><br>O atual salário era R$ " +
        salario.toFixed(2) + ".<br>Com um aumento de " + aumento.toFixed(2) + "%, o salário vai aumentar R$" +
        aumentoMensal.toFixed(2) + " no próximo mês. <br>E a partir daí, " + nome + " vai passar a ganhar R$" +
        salarioNovo.toFixed(2) + ".";

    var mensagem = document.getElementById("texto")

    mensagem.innerHTML = texto

}