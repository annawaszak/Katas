// 18.01.2021 - 6 kyu
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// first version
function longestConsec(strarr, k) {
    let longest = '';
    if (k <= 0) return '';
    for (let i = 0; i < strarr.length-(k-1); i++){
      const consec = strarr.slice(i,i+k).join('');
      if (consec.length > longest.length) longest = consec;
    }
    return longest
}