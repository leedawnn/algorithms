let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = Number(fs.readFileSync('./input.txt').toString());

let arr = [0, 1];

for (let i = 0; i < input; i++) {
  let temp1 = arr[i];
  let temp2 = arr[i + 1];

  arr.push(temp1 + temp2);
}

console.log(arr[input]);
