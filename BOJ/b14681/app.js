// 이 문제는 fs 모듈을 사용하면 런타임 에러가 뜨기 때문에, readline을 사용했음

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
  // 풀이
  const x = Number(input[0]);
  const y = Number(input[1]);

  if (Math.abs(x) === x && Math.abs(y) === y) {
    console.log(1);
  } else if (Math.abs(x) === -x && Math.abs(y) === y) {
    console.log(2);
  } else if (Math.abs(x) === -x && Math.abs(y) === -y) {
    console.log(3);
  } else if (Math.abs(x) === x && Math.abs(y) === -y) {
    console.log(4);
  }
});
