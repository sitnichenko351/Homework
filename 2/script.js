alert("калькулятор")
let number1 = Number(prompt("ваше первое число?"));
let number2 = Number(prompt("ваше второе число?"));
alert("выбырите действие которые вам нужно")
let action = Number(prompt("добавление 1, вычитание 2, диление 3, умножение 4"));
let result;

switch (action) {
    case 1:
        result = (number1 + number2);
        alert("результат: " + result);
        break;
    case 2:
        result = (number1 - number2);
        alert("результат: " + result);
        break;
    case 3:
        result = (number1 / number2);
        alert("результат: " + result);
        break;
    case 4:
        result = (number1 * number2);
        alert("результат: " + result);
        break;
    default:
        alert("некоректные значения");
}       















// if (action = 1){
// let sum = (number1 + number2)
// alert("результат: " + sum)
// }else if(action = 2){
//     let sum = (number1 - number2)
//     alert("результат: " + sum)
// }else if(action = 3){
//     let sum = (number1 / number2)
//     alert("результат: " + sum)
// }else if(action = 4){
//     let sum = (number1 * number2)
//     alert("результат: " + sum)
// }



