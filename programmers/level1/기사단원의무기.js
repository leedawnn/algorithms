// 시간 초과,,
const getDivisors = (num) => {
  // 약수 구할 때 1부터 끝까지 다 돌아서 시간초과 뜨는듯,,
  let index = 1;
  let count = 0;

  while (index <= num) {
    if (num % index === 0) {
      count += 1;
    }
    index += 1;
  }
  return count;
};

function solution(num, limit, power) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(getDivisors(i));
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      arr[i] = power;
    }
  }

  const answer = arr.reduce((cur, acc) => cur + acc);
  return answer;
}

// 정답
const getDivisors = (num) => {
  const divisor = [];

  // 처음부터 다 돌지 않고 절반만 구한 뒤 + 1
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      divisor.push(i);
    }
  }
  return divisor.length + 1;
};

function solution(num, limit, power) {
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(getDivisors(i));
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      arr[i] = power;
    }
  }

  const answer = arr.reduce((cur, acc) => cur + acc);
  return answer;
}
