let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

data = input[0].split(" ");
let a = Number(data[0]);
let b = Number(data[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else {
  console.log("==");
}
