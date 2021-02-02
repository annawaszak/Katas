// 19.01.2021 - 6 kyu
// https://www.codewars.com/kata/5226eb40316b56c8d500030f/train/javascript

// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// second version
function pascalsTriangle2(n) {
    if(n === 1) return Array.of(1);
    else if(n === 2) return new Array(1,1,1);
    let tempArr = pascalsTriangle2(n - 1);
    let sumArr =[];
    for(let i=tempArr.length - (n - 1); i<tempArr.length-1; i++) {
    sumArr.push(tempArr[i]+tempArr[i+1]);
    }
    return [...tempArr, 1, ...sumArr, 1];
}

// first version - not passing tests with n > 55 - as rounding the numbers eventually increase one value by 1
function pascalsTriangle1(n) {
    const result = []
  
   function factorial(num) {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else return (num * factorial(num - 1));
  }
  
    for (let row = 0; row < n; row++) {
      for (let col = 0; col <= row; col++) {
        if (col === 0) result.push(1)
        else {
            const val = factorial(row)/(factorial(col)*factorial(row - col))
            result.push(Number(val.toFixed(0)))
        }
      }
    }
    return result
  }
  
  let arr1 = pascalsTriangle2(56);
  let arr2 = pascalsTriangle1(56);
  for(let i=0; i<arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      console.log(i, arr2[i], arr1[i]);
      break
    }
  }