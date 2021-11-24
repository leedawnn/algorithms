// 입력 받기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
// 문제 풀이 
let n = Number(input[0])

for (i = 1; i < n+1; i++) {
  let a = Number(input[i].split(' ')[0])
  let b = Number(input[i].split(' ')[1])

  console.log(a + b)

});
