function clicar() {
    var nome
    var altura = document.querySelector(".altura").value;
    var peso = document.querySelector(".peso").value;
    var imc = peso / (altura * altura);
    document.querySelector(".imc").innerHTML = imc

    if (imc < 18.5) {
        document.write(nome + "Você está abaixo do peso")
    } else if (imc > 18.5 && imc < 25) {
        document.write(nome + "Você está no peso ideal")
    } else if (imc > 25 && imc < 30) {
        document.write(nome + "Você está acima do peso")
    } else if (imc > 30) {
        document.write(nome + "Você está com obesidade morbida");
    }
}
