
function getSum(){
    const number1 = Number(prompt("ваше первое число?"));
    const number2 = Number(prompt("ваше второе число?"));
    let sum = number1 + number2;
    alert(sum)
    return sum;

}
const functNumb1 = getSum();
const functNumb2 = getSum();
alert (functNumb1)
alert (functNumb2)