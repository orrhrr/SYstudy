// 단축 평가: 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것


// 1. 논리 연산자를 사용한 단축평가
// 논리합(||) 연산자
'cat' || 'dog' // "cat"
false || 'dog' // "dog"
'cat' || false // "cat"

// 논리곱(&&) 연산자
'cat' && 'dog' // "dog"
false && 'dog' // false
'cat' && false // false



// 논리곱(&&) 연산자 표현식으로 if문을 대체
let done = true;
let message = '';

// 주어진 조건이 Truthy일 때 (if문)
if (done) message = '완료';

// 주어진 조건이 Truthy일 떄 (논리곱 연산자)
// done이 true라면 message에 '완료'를 할당
message = done && '완료'; // '완료'는 항상 Truthy한 값이다.
console.log(message); // 완료



// 논리합(||) 연산자 표현식으로 if문을 대체
let done2 = false;
let message2 = '';

// 주어진 조건이 Falsy일 떄 (if문)
if (!done2) message2 = '미완료'; // 조건식은 true가 되어야 코드를 실행한다.

// 주어진 조건이 Falsy일 때 (논리합 연산자)
// done2가 false라면 message2에 '미완료'를 할당
message2 = done2 || '미완료'
console.log(message); // 미완료



// 삼항 조건 연산자로 if ...else문을 대체
let done3 = true;
let message3 = '';

// 주어진 조건이 Truthy일 떄 (if문)
if (done3) message3 = '완료';
else       message3 = '미완료';
console.log(message3); // 완료

// 주어진 조건이 Truthy일 떄 (삼항 조건 연산자)
message3 =  done3 ? '완료' : '미완료';
console.log(message3); // 완료



// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 떄

// 객체 값이 null 또는 undefined인 경우 객체의 프로퍼티를 참조하면 타입에러가 발생하고 프로그램이 강제종료 된다.
let elem = null;
let value = elem.value; //Uncaught TypeError: Cannot read properties of null (reading 'value')
// 이 때 단축 평가를 사용하면 에러를 발생시키지 않는다.
let elem2 = null;
// elem2가 Falsy값이면 elem으로 평가되고, Truthy값이면 elem2.value로 평가된다.
let value2 = elem2 && elem2.value; // null; (조건을 추가함으로써 에러 발생 방지)



// 함수 매개변수에 기본 값을 설정할 때

// 함수 호출 시 인수를 전달하지 않으면 매개변수에는 undefined가 할당되어 에러가 발생할 수 있다.
// 이 때 단축 평가를 사용하면 에러를 방지할 수 있다.

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

getStringLength(); // 0; (''빈문자열의 length를 출력)
getStringLength('hi'); // 2

// ES6의 매개변수의 기본값 설정 (더 많이 사용되는 방식)
function getStringLength2(str = '') { // 만약 전달받은 값이 없으면 str의 기본값을 빈문자열로 설정한다.
    return str.length;
}

getStringLength2(); // 0
getStringLength2('hi'); // 2