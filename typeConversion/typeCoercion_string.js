//문자 타입으로 암묵적 변환
// 자바스크립트 엔진은 개발자의 의도와는 상관없이 코드의 문맥을 고려해 암묵적으로 타입을 강제 변환 할 떄가 있다.

// 피연산자가 모두 문자열 타입이어야 하는 문맥
'10' + 2 // '102'

// 피연산자가 모두 숫자 타입이어야 하는 문맥
5 * '10' // 50

// 피연산자 또는 표현식이 불리언 타입이어야 하는 문맥
!0 // true
if (1) {} // 1을 true로 변환하여 조건식 평가




// 문자열 타입으로 변환
1 + '2' // '12' (+ 연산자가 문자열 연결 연산자로 동작함)
`1 + 1 = ${1 + 1}` // '1 + 1 = 2' (템플릿 리터럴을 사용하면 표현식의 평가결과를 문자열 타입으로 변환한다.)

// 숫자타입
0 + '' // '0'
-0 + '' // '0'
1 + '' // '1'
-1 + '' // '-1'
NaN + '' // 'NaN'
Infinity + '' // 'Infinity'
-Infinity + '' // '-Infinity'

// 불리언타입
true + '' // 'true'
false + '' // 'false'

// null 타입
null + '' // 'null'

// undefined 타입
undefined + '' // 'undefined'

// 심벌 타입
(Symbol()) + '' // TypeError: Cannot convert a Symbol value to a string

// 객체타입
({}) + '' // '[object Object]'
Math + '' // '[object Math]'
[] + '' // ''
[10, 20] + '' // '10, 20'
(function(){}) + '' // 'function(){}'
Array + '' // 'function Array() {[native code]}'





// 문자열 타입으로 명시적 변환

// 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
// 숫자 -> 문자열
String(1); // "1"
String(NaN); // "NaN"
String(Infinity); // "Infinity"
// 불리언 -> 문자열
String(true); // "true"
String(false); //"false"


// 2. object.prototype.toString 메서드를 사용하는 방법
// 숫자 -> 문자열
(1).toString(); // "1"
(NaN).toString(); // "NaN"
(Infinity).toString(); // "Infinity"
// 불리언 -> 문자열
(true).toString(); // "true"
(false).toString(); // "false"


// 3. 문자열 연결 연산자를 이용하는 방법
// 숫자 -> 문자열
1 + '';  // "1"
NaN + ''; // "NaN"
Infinity + ''; // "Infinity"
// 불리언 -> 문자열
true + ''; // "true"
false + ''; // "false"
