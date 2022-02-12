function getNumb(){
    const getNumb = Number(prompt("Ваше число ?"));
    return getNumb;
}
function getDegree(){
    const getDegree = Number(prompt("Ваше ваша степень ?"));
    return getDegree;
}
const numb = getNumb();
const degree = getDegree();
const sum = numb ** degree;
alert (sum);