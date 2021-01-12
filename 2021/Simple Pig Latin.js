// 11.01.2021 - 5kyu
// https://www.codewars.com/kata/520b9d2ad5c005041100000f

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    return str.split(' ').map(word => {
      if (word !== '!' && word !== '?') return word.slice(1) + word[0] + 'ay'
      else return word
    }).join(' ')
  }