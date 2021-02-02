// 02.02.2021 - 7 kyu (with bootcamp students)

// Return an output string that translates an input string s/$s by replacing each character in s/$s with a number representing the number of times that character occurs in s/$s and separating each number with the character(s) sep/$sep.

// first version
function freqSeq(str, sep) {
    return str.split('').map(letter => letter.replace(letter, str.split(letter).length-1)).join(sep)
 }

 //simpler version
 function freqSeq(str, sep) {
    const newStr = [];
    for (let letter of str) {
      newStr.push(str.split(letter).length-1)
    }
    return newStr.join(sep)
  }