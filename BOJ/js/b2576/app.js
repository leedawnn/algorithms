let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let odd = input.filter(el => el % 2 !== 0).map(Number);

if (odd.length === 0) {
	console.log(-1);
} else {
	let sum = odd.reduce((acc, cur) => acc + cur);
	console.log(sum);
	console.log(Math.min(...odd));
}
