const n = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(n) {
  const k = 2;
  const i = Math.floor(n / 6);

  console.log(k + 6 * (i - 1));
  console.log(6 * i + (k + 6 * (i - 1)) - 1);

  if (k + 6 * (i - 1) <= n && 6 * i + (k + 6 * (i - 1)) - 1 >= n) {
    console.log(i);

    console.log(i + 1);
  } else if (n < 8) {
    console.log(2);
  } else {
    console.log(1);
  }
}

solution(n);
