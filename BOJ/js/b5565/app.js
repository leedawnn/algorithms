let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = 0;
let sum = Number(input.splice(0, 1));
let arr = input.map(Number);

for (let i = 0; i < arr.length; i++) {
	result = arr.reduce((acc, cur) => acc + cur);
}

console.log(sum - result);
