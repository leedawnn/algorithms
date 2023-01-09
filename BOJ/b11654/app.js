let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  console.log(input.charCodeAt(0));
}

solution(input);
