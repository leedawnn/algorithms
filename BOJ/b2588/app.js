let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

/*
472
385
---- 
2360
3776
1416
---
181720
*/

let a = input[0].split(" ");
let b = input[1].split(" ");

b_1 = Number(input[1][2]);
b_10 = Number(input[1][1]);
b_100 = Number(input[1][0]);

console.log(a * b_1);
console.log(a * b_10);
console.log(a * b_100);
console.log(a * b);
