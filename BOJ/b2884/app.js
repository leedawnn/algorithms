let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let H = Number(input[0].split(" ")[0]);
let M = Number(input[0].split(" ")[1]);

if (M > 45) {
  console.log(H, M - 45);
} else if (M < 45 && H === 0) {
  console.log(H + 23, M + 15);
} else if (M < 45) {
  console.log(H - 1, M + 15);
} else if (M === 45) {
  console.log(H, M - 45);
}
