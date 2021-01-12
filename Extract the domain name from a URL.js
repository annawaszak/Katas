// 07.01.2021 - 5kyu
// https://www.codewars.com/kata/514a024011ea4fb54200004b

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
  }
  