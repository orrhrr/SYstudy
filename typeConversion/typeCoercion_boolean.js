// 불리언 타입으로 암묵적 변환
// if문이나 for문 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 타입으로 암묵적 타입 변환한다.
// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy(참으로 평가되는 값) 또는 Falsy(거짓으로 평가되는 값)으로 구분한다.

if ('') console.log('1'); // '' -> falsy
if (true) console.log('2'); // true -> true
if (0) console.log('3');  // 0 -> falsy
if ('str') console.log('4'); // 'str' -> truthy
if (null) console.log('5'); // null -> falsy

// 2 4 만 출력됨. 


// Falsy값 (false로 평가되는 값)
/*

- false
- undefined
- null
- 0, -0 
- NaN
- ''(빈문자열)

** Falsy값 외의 모든 값은 true로 평가되는 Truthy값이다.
*/


// Truthy / Falsy 값을 판별하여 true / false를 반환하는 함수 예제.
// 파라미터가 Falsy 값이면 true, Truthy 값이면 false를 반환
function isFalsy(v) {
    return !v;
}
// 파라미터가 Truthy값이면 true, Falsy 값이면 false를 반환
function isTruthy(v){
    return !!v;
}

// 모두 true를 반환한다.
isFalsy(false);
isFalsy(undefined);
isFalsy(null);
isFalsy(0);
isFalsy(NaN);
isFalsy('');

// 모두 true를 반환한다.
isTruthy(true);
isTruthy('0'); // 빈문자열이 아닌 문자열은 truthy 값이다.
isTruthy({});
isTruthy([]);





// 불리언 타입으로 명시적 변환

// 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자열 -> 불리언
Boolean('x'); // true
Boolean(''); // false
Boolean('false'); // true
// 숫자 -> 불리언
Boolean(0); // false
Boolean(1); // true
Boolean(NaN); // false
Boolean(Infinity); // true
// null타입 -> 불리언
Boolean(null); //false
// undefined타입 -> 불리언
Boolean(undefined); // false
// 객체 -> 불리언
Boolean({}); // true
Boolean([]); // true


// 2. ! 부정 논리 연산자를 두번 사용하는 방법
// 문자열 -> 불리언
!!'x'; // true
!!''; // false
!!'false' // true
// 숫자 -> 불리언
!!0; // false
!!1; // true
!!NaN // false
!!Infinity // true
// null타입 -> 불리언
!!null // false
// undefined타입 -> 불리언
!!undefined // false
!!{}; // true
!![]; // true



