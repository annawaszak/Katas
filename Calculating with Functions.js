// 17.01.2021 - 5 kyu
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/solutions/javascript

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:

// improved version
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus(n)      { return function (a) { return Math.floor(a + n) } }
function minus(n)     { return function (a) { return Math.floor(a - n) } }
function times(n)     { return function (a) { return Math.floor(a * n) } }
function dividedBy(n) { return function (a) { return Math.floor(a / n) } }

// first version
function zero(x) {
    if (!x) return 0;
    else {
      const equasion = 0 + x;
      return Math.floor(eval(equasion));
    }
  }
  function one(x) {
    if (!x) return 1;
    else {
      const equasion = 1 + x;
      return Math.floor(eval(equasion));
    }
  }
  function two(x) {
    if (!x) return 2;
    else {
      const equasion = 2 + x;
      return Math.floor(eval(equasion));
    }
  }
  function three(x) {
    if (!x) return 3;
    else {
      const equasion = 3 + x;
      return Math.floor(eval(equasion));
    }
  }
  function four(x) {
    if (!x) return 4;
    else {
      const equasion = 4 + x;
      return Math.floor(eval(equasion));
    }
  }
  function five(x) {
    if (!x) return 5;
    else {
      const equasion = 5 + x;
      return Math.floor(eval(equasion));
    }
  }
  function six(x) {
    if (!x) return 6;
    else {
      const equasion = 6 + x;
      return Math.floor(eval(equasion));
    }
  }
  function seven(x) {
    if (!x) return 7;
    else {
      const equasion = 7 + x;
      return Math.floor(eval(equasion));
    }
  }
  function eight(x) {
    if (!x) return 8;
    else {
      const equasion = 8 + x;
      return Math.floor(eval(equasion));
    }
  }
  function nine(x) {
    if (!x) return 9;
    else {
      const equasion = 9 + x;
      return Math.floor(eval(equasion));
    }
  }
  
  function plus(num) {
    return `+${num}`;
  }
  function minus(num) {
    return `-${num}`;
  }
  function times(num) {
    return `*${num}`;
  }
  function dividedBy(num) {
    return `/${num}`;
  }
  
  console.log(six(minus(two())));