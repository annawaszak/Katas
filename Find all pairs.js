// 03.02.2021 - 7kyu

// You are given array of integers, your task will be to count all pairs in that array and return their count.

// first solution - with students
function duplicates(array){
  const counter = {}
  for (let i = 0; i < array.length; i++) {
    if (counter[array[i]]) counter[array[i]] += 1
    else counter[array[i]] = 1
  }
  let pairCounter = 0
  for (let value of Object.values(counter)) {
    pairCounter += Math.floor(value / 2)
  }
  return pairCounter
}

//improved solution
const duplicates = array => {
    let numberOf = array.reduce((acc,num) => (acc[num] = (acc[num] ||0) + 1, acc), {});
    return Object.values(numberOf).reduce((acc,num) => acc + Math.floor(num / 2), 0);
  };