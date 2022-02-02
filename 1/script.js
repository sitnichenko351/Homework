alert("Сравнение чисел")
const number1 = Number(prompt("ваше первое число?"));
const number2 = Number(prompt("ваше второе число?"));
if (number1 === number2) {
    alert(number1 + " равно " + number2)
}else if (number1 > number2) {
    alert(number1 + " больше " + number2)
}else if (number1 < number2) {
    alert(number1 + " меньше " + number2)
}