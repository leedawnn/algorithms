const input = +require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function sol(input) {
  let dot = 2;
  for (let i = 0; i < input; i++) {
    dot += Math.pow(2, i);
  }

  console.log(Math.pow(dot, 2));
}

sol(input);
