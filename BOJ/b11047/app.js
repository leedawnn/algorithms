let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);

let [one, ...coins] = input;
coins = coins.map(Number);

let count = 0;

for (let i = n - 1; i > -1; i--) {
  if (k - coins[i] >= 0) {
    while (k > 0) {
      k -= coins[i];
      if (k < 0) {
        k += coins[i];
        break;
      }

      count++;
    }
  }
}

console.log(count);
