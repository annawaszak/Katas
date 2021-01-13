// 13.01.2021 - 5 kyu
// https://www.codewars.com/kata/513e08acc600c94f01000001


// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.


function rgb(r, g, b){
    const round = (val) => {
      if (val < 0) return val = 0
      else if (val > 255) return val = 255
      else return val
    };
    const hex = (val) => val.toString(16).toUpperCase();
    const pad = (val) => (val < 10 || val.length === 1) ? '0'+ val : val;
    return pad(hex(round(r))) + pad(hex(round(g))) + pad(hex(round(b)))
  }