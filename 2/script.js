alert("калькулятор")
let number1 = Number(prompt("ваше первое число?"));
let number2 = Number(prompt("ваше второе число?"));
alert("выбырите действие которые вам нужно")
let action = Number(prompt("добавление 1, вычитание 2, диление 3, умножение 4"));

switch (action) {
    case 1:
        let sum1 = (number1 + number2);
        alert("результат: " + sum1);
        break;
    case 2:
        let sum2 = (number1 - number2);
        alert("результат: " + sum2);
        break;
    case 3:
        let sum3 = (number1 / number2);
        alert("результат: " + sum3);
        break;
    case 4:
        let sum4 = (number1 * number2);
        alert("результат: " + sum4);
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



