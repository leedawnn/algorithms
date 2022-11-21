function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let bonus = Math.floor(n / a) * b;
    answer += bonus;
    n = bonus + (n % a);
  }
  return answer;
}
