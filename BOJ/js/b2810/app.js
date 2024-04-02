const [n, seat] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(n, seat) {
  const cupHolder = seat.split(/S|LL/g).length;

  console.log(Math.min(n, cupHolder));
}
solution(n, seat);
