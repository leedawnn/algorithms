let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

i = Number(input[0]);

if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
  console.log(1);
} else {
  console.log(0);
}
