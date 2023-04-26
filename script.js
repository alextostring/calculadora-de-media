function exibirResultado() {
    var name = document.getElementById("name").value;

    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var notaFinal =
    (nota1 + nota2 + nota3 + nota4) / 4;

    var notaFixada = notaFinal.toFixed(1);
    var resultado;

    if (notaFixada >=6){
        resultado = "Nota final: " + notaFixada + "<br>" + name + " FOI APROVADOOO!";
    } else {
        resultado = "Nota final: " + notaFixada + "<br>" + name + " rodou de ano..."
    }

    var exibirResulado = document.getElementById("resultado");
    exibirResulado.innerHTML = resultado;
}
