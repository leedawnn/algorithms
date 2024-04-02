const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const n = +require('fs').readFileSync(filePath).toString();

function sol(n) {
  if (n > 0) {
    return n * sol(n - 1);
  } else {
    return 1;
  }
}

console.log(sol(n));
