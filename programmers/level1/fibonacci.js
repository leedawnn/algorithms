function solution(n) {
	const arr = Array(n + 1).fill(0);
	arr[0] = 0;
	arr[1] = 1;

	for (let i = 2; i < arr.length; i++) {
		arr[i] = ((arr[i - 1] % 1234567) + (arr[i - 2] % 1234567)) % 1234567;
	}

	return arr[n];
}

// 처음엔 정확성에서 실패... => 정수의 범위 고려하기!
// 이걸 검증해주는 메서드가 있음(isSafeInteger)

/*
const a = 2 ** 53 - 1;

Number.isSafeInteger(a); // true: 정해진 범위 안
Number.isSafeInteger(a + 1); // flase: 정해진 범위 밖

 n번째 피보나치 수라고 구한 숫자가, 이미 int의 범위를 넘긴 상태라 엉망진창이 된 상태일 것이고, 이것을 1234567로 나눈다고 한들 정확한 값을 구하는 것은 불가능했기 때문이다.

 자료형의 크기에 제한이 있는 언어를 쓸 경우 (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용해서 매번 계산 결과에 1234567으로 나눈 나머지를 대신 넣는 것으로 int 범위 내에 항상 값이 존재함을 보장할 수 있다.
 
 (123 + 123) % 2 === ((123 % 2) + (123 % 2)) % 2;
*/

// 다른 풀이
function solution(n) {
	let prev = 0;
	let next = 1;
	let sum = 1;

	const answer = [];

	for (let i = 2; i <= n; i++) {
		sum = (prev + next) % 1234567;
		prev = next;
		next = sum;
		answer.push(sum);
	}
	return answer[n - 2];
}

// 또 다른 풀이
function solution(n) {
	let prev = 0;
	let next = 1;
	let sum = 1;

	const answer = new Array(n - 1).fill(1).reduce(acc => {
		sum = (acc + prev) % 1234567;
		prev = acc;
		return sum;
	}, sum);

	return answer;
}

solution(3);
