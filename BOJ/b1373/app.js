const x = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

// TODO : 복습!
function sol(x) {
  let oct = '';

  while (x.length >= 3) {
    oct = parseInt(x.slice(x.length - 3), 2).toString() + oct;
    x = x.slice(0, x.length - 3);
  }

  console.log((x ? parseInt(x, 2).toString() : '') + oct);
}

sol(x);
