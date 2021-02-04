// 04.02.2021 - 7kyu - with students

// Now your task is to solve the following problem: given a year number, find the minimum year number which is strictly larger than the given one and has only distinct digits.

function distinctDigitYear(year) {
    year++
    while ( new Set(year.toString()).size < 4 ) {
      year++
    }
    return year
  }
  
  distinctDigitYear(1987)