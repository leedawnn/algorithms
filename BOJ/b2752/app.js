let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');

let res = input.map((el) => el.trim());
let answer = res.sort((a, b) => a - b).join(' ');
console.log(answer);
