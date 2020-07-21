var nome = prompt("Digite seu nome");
var altura = prompt("Digite sua altura");
var peso = prompt("Digite seu peso");
imc = peso / (altura * altura);

if (imc < 18.5) {
    document.write(nome + "Você está abaixo do peso")
} else if (imc > 18.5 && imc < 25) {
    document.write(nome + "Você está no peso ideal")
} else if (imc > 25 && imc < 30) {
    document.write(nome + "Você está acima do peso")
} else if (imc > 30) {
    document.write(nome + "Você está com obesidade morbida");
}
