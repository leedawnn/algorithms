let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let countGroupWord = 0;

for (let i = 1; i <= input[0]; i++) {
  const el = input[i].split('');
  let temp = '';
  let stack = [];
  let isGroupWord = true;

  for (let j = 0; j < el.length; j++) {
    temp = el[j];
    if (stack.indexOf(temp) === -1) {
      stack.push(temp);
    } else {
      if (stack.indexOf(temp) !== stack.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);
