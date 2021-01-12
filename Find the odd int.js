// 10.01.2021 - 6kyu
// https://www.codewars.com/kata/54da5a58ea159efa38000836

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// improved version
function findOdd(A) {
    return A.reduce((a, v) => a ^ v)
  }

// first version
function findOdd(A) {
    const record = {}
  
    A.forEach(num => {
      if (!record[num.toString()]) {
        record[num] = 1
      }
      else {
        record[num] += 1
      }
    })
  
    let odd;
    Object.keys(record).filter(num => {
      if (record[Number(num)] % 2 !== 0) {
        return odd = Number(num)
      }
    })
    return odd
  }