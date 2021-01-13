//  13.01.2021 - 5 kyu
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// first version
function humanReadable(time) {
    let hr = Math.floor(time / 3600)
    let min = Math.floor(time / 60 % 60)
    let sec = time % 60
    const pad = (val) =>  val.length === 1 ? '0'+ val : val

    return pad(hr) + ':' + pad(min) + ':' + pad(sec)
  }