// 삼항 조건 연산자 : 조건식의 평가 결과에 따라 반환할 값을 결정한다. (부수효과 없음)
// 삼항 조건 연산자 표현식은 값으로 평가할 수 있는 표현식인 문이다.

// score의 값이 60 이상이면 'pass'를, 아니면 'fail'을 반환한다.
var result = score >= 60 ? 'pass' : 'fail';


// 만약 조건식이 평가 결과가 불리언 값이 아니면 불리언 값으로 암묵적 타입 변환된다.
var x = 2;

// 2 % 2 는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); //짝수


// 삼항 조건 연산자와 if 문의 차이(표현식)
/*

- 삼항 조건 연산자는 값을 '할당'한다.
- if문은 코드를 분기처리하여 '실행'한다.
- 즉 return 값이 있어야 표현식으로 사용 가능하다. 

*/


// 삼항 조건 연산자는 실제로 간단한 로직에서만 사용되고, 그 외에는 잘 사용하지 않는다. (코드가 복잡한 경우 오히려 가독성을 떨어뜨림)