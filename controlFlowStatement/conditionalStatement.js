// 조건문 : 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정한다.
// 조건식은 불리언 값으로 평가될 수 있는 표현식이다. (만약 불리언값이 아닐 경우 불리언값으로 강제 변환되어 실행할 코드 블록을 결정)
// 조건문 우선순위를 정할 떄도 사용한다. (특정 조건식을 만족하는 코드 블록을 먼저 실행해라.)


// if ...else 문 : 조건식이 평가 결과가 true일 경우 if문이 코드 블록이 실행되고 false일 경우 else 문의 코드 블록이 실행된다.
if (조건식) {
    //조건식이 참이면 이 코드 블록이 실행된다.
} else {
    //조건식이 거짓이면 이 코드 블록이 실행된다.
}


// 조건식을 추가하고 싶을 때는 else if문을 사용한다.
if (조건식1) {
    // 조건식 1이 참이면 이 코드 블록이 실행된다.
} else if (조건식2) {
    // 조건식 2가 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}



var num = 2;
var kind;

// if문
if(num > 0) {
    kind = '양수' // 음수를 구별할 수 없다.
}
console.log(kind) // 양수

// if...else문
if(num > 0){
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind);  // 음수

// if...else if 문
if(num > 0) {
    kind = '양수';
} else if (num < 0){
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind)  // 양수




// 만약 코드 블록 내 블록문이 하나 뿐이라면 중괄호를 생략할 수 있다. (회사 내규 방침에 따라 다르게 표기함)
var num2 = 2;
var kind2;

if (num2 > 0)     kind = '양수';
else if(num2 < 0) kind = '음수';
else              kind = '영';

console.log(kind);  // 양수



// x가 짝수이면 result 변수에 문자열 '짝수'할당, 홀수이면 문자열 '홀수' 할당
var x = 2;
var result;

if (x % 2) { // 2 % 2는 0이다. 이 때 0은 false로 암묵적 강제 변환된다.
    result = '홀수';
} else {
    result = '짝수';
}

console.log(result); //짝수


// 위 코드를 삼항 조건 연산자로 바꿔쓰기
var x = 2;

// 0은 false로 취급된다.
var result = x % 2 ? '홀수' : '짝수';
console.log(result); // 짝수


// 경우의 수가 세 가지라면 아래와 같이 바꿔 쓸 수 있다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';

console.log(kind);  // 양수


