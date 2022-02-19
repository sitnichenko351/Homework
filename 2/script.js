const start = Number(prompt("Начало:  "))
const end = Number(prompt("Конец:  "))

function getPrimes(start, end) {
    nextPrime: for (let i = start >= 2 ? start : 2; i <= end; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }
        alert(i);
    }
}
console.log(getPrimes(start, end));