// 렉시컬 스코프: 정적 스코프라고도 하며, 함수를 *어디에서 정의했는지*에 따라 상위 스코프를 결정한다.
// 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않는다.
// 즉 함수의 상위 스코프는 언제나 *자신이 정의된 스코프*다.
// 함수 정의가 실행되어 생성된 *함수 객체*는 이렇게 결정된 *상위 스코프를 기억*한다. (호출 시마다 참조하기 위해)

// 비교: 동적 스코프의 경우 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.

var x = 1;

function foo() {
    var x = 10;
    bar();
}

function bar() {
    console.log(x);
}

foo(); // 1 (bar 함수가 호출되면 호출된 곳이 어디인지 관계없이 언제나 자신이 기억하고 있는 스코프를 상위 스코프로 사용한다.)
bar(); // 1

