const arr = [1, 2, 3, -3, -2, 5, 6, -6];

// 버블 정렬 이용
function solution1(arr) {
  let answer = arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(answer);
}

solution1(arr);

// filter 이용
function solution2(arr) {
  const minus = arr.filter((el) => el < 0);
  const plus = arr.filter((el) => el > 0);

  const answer = minus.concat(...plus);
  console.log(answer);
}

solution2(arr);
