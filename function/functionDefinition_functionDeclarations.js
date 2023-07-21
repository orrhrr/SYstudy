// 함수 선언문
function add(x, y) {
return x + y;
}

// 함수 참조
// console.dir은 console.log와 달리 함수 객체의 프로퍼티 까지 출력한다.
// 단, Node.js 환경에서는 console.log와 같은 결과가 출력된다.
console.dir(add); //  ƒ add(x, y)

// 함수 호출
console.log(add(2, 5)); // 7 



// 함수 선언문은 함수 리터럴과 형태가 동일하다.
// 단, 함수 리터럴은 함수 이름을 생략할 수 있으나, 함수 선언문은 함수 이름을 생략할 수 없다.
function (x, y) {
    return x + y;
}
// SyntaxError: Function statements require a function name



// 함수 선언문은 표현식이 아닌 문이다. (값으로 평가될 수 없음. 가공기계를 만들어 놓기만 한 것과 같음)
function add(x, y) {
    return x + y;
} 
// 개발자도구로 함수 선언문을 실행하면 완료값 undefined가 출력된다.
// 만약 함수 선언문이 표현식이라면 undefined 대신 표현식이 평가되어 생성된 함수가 출력되어야 한다.


// 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
// 함수 선언문에서는 함수 이름을 생략할 수 없다.
function foo() {console.log('foo');}
foo(); // foo (자바스크립트 엔진이 암묵적으로 foo라는 식별자를 생성함)

// 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴표현식으로 해석된다.
// 함수 리터럴에서는 함수 이름을 생략할 수 있다.
(function bar() {console.log('bar');}); // 그룹 연산자 내에서는 함수리터럴 표현식으로 해석된다.
bar();  // ReferenceError: bar is not defined

// 걍 기명함수는 함수 선언문에 사용, 함수 표현식에선 사용하지 말도록 하자....어휴;



// 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출한다.
var add/*식별자*/ = function add/*함수이름*/ (x, y) {
    return x + y;
};
console.log(add/*식별자*/(2, 5)); // 7