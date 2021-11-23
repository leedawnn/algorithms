let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

i = Number(input[0]);

// 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F
if (i >= 90 && i < 101) {
  console.log("A");
} else if (i >= 80 && i < 90) {
  console.log("B");
} else if (i >= 70 && i < 80) {
  console.log("C");
} else if (i >= 60 && i < 70) {
  console.log("D");
} else {
  console.log("F");
}
