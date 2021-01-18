// 16.01.2021 - 5 kyu
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered

// version 6 (previous 5 passed but timed out)
function scramble(str1, str2) {
    const count = (str) => {
      const dict = {};
      for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        dict[ch] = (dict[ch] || 0) + 1
      }
      return dict;
    }
    const d1 = count(str1);
    const d2 = count(str2);
    return Object.entries(d2).every(([ch, count]) => {
      return (d1[ch] || 0) >= count;
    });
  }