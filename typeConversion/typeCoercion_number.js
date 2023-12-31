// 숫자 타입으로 암묵적 변환
// 산술 연산자의 역할은 숫자 값을 만드는 것이므로 산술 연산자의 모든 피연산자는 코드 문맥 상 모두 숫자 타입이어야 한다.
// 피연산자를 숫자 타입으로 변환할 수 없는 경우는 산술 연산을 수행할 수 없으므로 표현식 평가 결과가 NaN이 된다.

1 - '1' // 0
1 * '10' // 10
1 / 'one' // NaN


// 비교 연산자 역할은 불리언 값을 만드는 것이므로 비교 연산자의 모든 피연산자는 코드 문맥상 모두 숫자 타입이어야 한다.

'1' > 0 // true


// +단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 암묵적 타입 변환을 수행한다.
// 문자열 타입
+'' // 0
+'0' // 0
+'1' // 1
+'string' // NaN

// 불리언 타입
+true // 1
+false // 0

// null 타입
+null // 0

// undefined 타입
+undefined // NaN

// 심벌타입
+Symbol() // TypeError: Cannot convert a Symbol value to a number

// 객체타입
+{} // NaN
+[] // 0
+[10, 20] // NaN
+(function(){}) // NaN
// 빈문자열(''), 빈배열([]), null, false는 0으로 true는 1로 변환된다. 
// 객체,빈 배열이 아닌 배열, undefined는 변환되지 않아 NaN이 된다는 것에 주의하자!!!





// 숫자 타입으로 명시적 변환

// 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
// 문자 -> 숫자
Number('0'); // 0
Number('-1'); // -1
Number('10.53'); // 10.53
// 불리언 -> 숫자
Number(true); // 1
Number(false); // 0


// 2. paseInt, parseFloat 함수를 사용하는 방법 (문자열만 변환 가능)
// 문자 -> 숫자
parseInt('0'); // 0
parseInt('-1'); // -1
parseInt('10.53'); //10.53


// 3. +단항 산술 연산자를 이용하는 방법
// 문자 -> 숫자
+'0'; // 0
+'-1'; // -1
+'10.53'; // 10.53
// 불리언 -> 숫자
+true // 1
+false // 0


// 4. * 산술 연산자를 이용하는 방법
// 문자 -> 숫자
'0' * 1; // 0
'-1' * 1; // -1
'10.53' * 1; // 10.53
// 불리언 -> 숫자
true * 1; // 1
false * 1; // 0