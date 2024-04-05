// TODO: 복습!
/*

1. 외래키가 있는 두 테이블을 조회할 때 JOIN을 사용하여 연결시켜야함.
2. ON절은 JOIN을 할 때 두 테이블이 어떤 컬럼을 기준으로 결합될 것인지 명시
3. DATEDIFF 함수는 두 날짜 사이의 차이를 day 단위로 계산한다. 
4. LIMIT 절은 조회 결과의 수를 제한하는 데 사용된다.  

*/

-- 코드를 입력하세요
SELECT a.animal_id, a.name
FROM animal_ins a
JOIN animal_outs b ON a.animal_id = b.animal_id
ORDER BY DATEDIFF(b.datetime, a.datetime) desc limit 2;
