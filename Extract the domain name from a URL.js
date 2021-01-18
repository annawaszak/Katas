// 07.01.2021 - 5kyu
// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
    return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.')[0]
  }
  