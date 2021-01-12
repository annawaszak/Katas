//  12.01.2021 - 5 kyu
// https://www.codewars.com/kata/52597aa56021e91c93000cb0

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// improved version
var moveZeros = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
  }

// first version 
var moveZeros = function (arr) {
    const sorted = arr.filter(el => el !== 0)
    const zeros = arr.filter(el => el === 0)
    return sorted.concat(zeros)
  }