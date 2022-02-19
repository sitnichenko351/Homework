function getSalariesSum(salaries) {
    let result = 0;
    for (let name in salaries) {
        result += Number(salaries[name]) * 100;
    }
    return result / 100;
}
const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};

const res = getSalariesSum(salaries);


alert (res);