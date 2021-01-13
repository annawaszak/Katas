// 09.01.2021 - 6 kyu
// https://www.codewars.com/kata/513e08acc600c94f01000001

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    while (n > 9) {
      let sum = n.toString().split('').reduce((acc, val) => acc + Number(val), 0)
      n = sum
    }
    return n
  }