function findExcess(integers) {
    let evenArr = [];
    let oddArr = [];
    
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            evenArr.push(integers[i]);
        } else {
            oddArr.push(integers[i]);
        }
    }
    if (evenArr.length > oddArr.length) {
        console.log(oddArr[0]);
    } else {
        console.log(evenArr[0]);
    }
}

findExcess([0, 1, 2]); 
findExcess([1, 2, 3]); 
findExcess([2, 6, 8, 10, 3]); 
findExcess([0, 0, 3, 0, 0]); 
findExcess([1, 1, 0, 1, 1]); 