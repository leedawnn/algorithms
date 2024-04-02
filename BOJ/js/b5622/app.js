const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const str = input[0].split('');

function solution(str) {
  let answer = 0;
  const obj = {
    2: ['A', 'B', 'C'],
    3: ['D', 'E', 'F'],
    4: ['G', 'H', 'I'],
    5: ['J', 'K', 'L'],
    6: ['M', 'N', 'O'],
    7: ['P', 'Q', 'R', 'S'],
    8: ['T', 'U', 'V'],
    9: ['W', 'X', 'Y', 'Z'],
  };

  str.forEach((el) => {
    if (Object.keys(obj).find((key) => obj[key].includes(el)) !== -1) {
      let s = Number(Object.keys(obj).find((key) => obj[key].includes(el)));
      answer += ++s;
    }
  });

  console.log(answer);
}

solution(str);
