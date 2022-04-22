const countTrue = (arr) => {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      counter++;
    }
  }
  
  console.log(counter);
};

countTrue([true, false, false, true, false, true, false, false, true,]); 
countTrue([true, false, false, true, false]); 
countTrue([false, false, false, false]); 
countTrue([]); 