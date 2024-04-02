const input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
input.shift();
let answer = '';

function isPalindrome(s, l, r) {
  const length = Math.floor(s.length / 2);
  if (l >= length) {
    return (answer += '1' + ' ' + r + '\n');
  } else {
    if (s[l] === s[s.length - l - 1]) isPalindrome(s, l + 1, r + 1);
    else return (answer += '0' + ' ' + r + '\n');
  }
}

input.forEach((el) => isPalindrome(el, 0, 1));

console.log(answer);
