let fs = require('fs');
let input = Number(fs.readFileSync('./input.txt').toString());

let arr = [];

if (input !== 0) {
	for (let i = input; i > 0; i--) {
		arr.push(i);
	}

	let answer = arr.reduce((acc, cur) => acc * cur);
	console.log(answer);
} else {
	console.log(1);
}
