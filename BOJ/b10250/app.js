const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .slice(1);

function solution(input) {
  const arr = input.map((el) => el.trim().split(' ').map(Number));

  arr.forEach((el) => {
    let h = el[0];
    let w = el[1];
    let n = el[2];

    let hotel = [];

    for (let j = 1; j < w + 1; j++) {
      for (let i = 1; i < h + 1; i++) {
        let ww = String(j).padStart(2, '0');
        hotel.push(`${i}${ww}`);
      }
    }

    console.log(hotel[n - 1]);
  });
}
solution(input);
