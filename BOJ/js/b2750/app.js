const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

function sol(input) {
  const answer = input.sort((a, b) => a - b);
  console.log(answer.join('\n'));
}

sol(input);
