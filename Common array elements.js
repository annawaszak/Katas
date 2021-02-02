// 02.01.2021 - 6 kyu

// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// first version
function common(a,b,c){
    a.map(num => {
      if (b.includes(num) && c.includes(num)) {
        a.filter(num => num)
        b.splice(b.indexOf(num), 1)
        c.splice(c.indexOf(num), 1)
      }
    })
    return a.reduce((sum, num) => sum += num, 0) || 0
  }