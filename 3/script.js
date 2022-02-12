

function AgeFun(){
    alert("Приветствую пользователь")
    const AgeFun = Number(prompt("Введите ваш возраст"));
    return AgeFun;

}
function NameFun(){
    const NameFun = prompt("Введите ваше имя");
    return NameFun;
}
const Age = AgeFun();
const Name = NameFun();

function greetings1(){
    alert ("Приветствую"+" "+Name);
}
function greetings2(){
    alert ("Приветствую"+" "+Name+" ' "+(Age)+" '");
}


if (Age > 30){
    greetings1();
}
else {
    greetings2();    
}
