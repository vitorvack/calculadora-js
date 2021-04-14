var resultado = document.getElementById('resultado');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');

function somar() {
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var soma = n1 + n2

    resultado.innerHTML = `A soma entre os valores ${n1} e ${n2} é <strong> ${soma} </strong>`
}
function subtrair() {
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var subtração = n1 - n2

    resultado.innerHTML = `A subtração entre os valores ${n1} e ${n2} é igual a <strong>${subtração}</strong`            
}
function multiplicar() {                        
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var multiplicacao = n1 * n2

    resultado.innerHTML = `A multiplicação entre os valores ${n1} e ${n2} é igual a <strong>${multiplicacao}</strong`
}
function dividir() {
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var divisao = n1 / n2

    resultado.innerHTML = `A divisão entre os valores ${n1} e ${n2} é igual a <strong>${divisao}</strong`   
}
function restoDivisao() {            
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var divisao = n1 % n2

    resultado.innerHTML = `O resto entre os valores ${n1} e ${n2} é igual a <strong>${divisao}</strong`     
}