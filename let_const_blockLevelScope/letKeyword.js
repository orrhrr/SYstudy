// let 키워드의 특징

// 1. 변수 중복 선언 금지
let bar = 123;
// let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
let bar = 456; // SyntaxError: Identifier 'bar' has already been declare



// 2. 블록 레벨 스코프
// 모든 코드 블록(함수, if문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.
let foo = 1; // 전역 변수
{
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
}

console.log(foo); // 1
console.log(bar); // ReferenceError: bar is not defined


// 함수도 코드 블록이므로 스코프를 만든다.
// 이 떄 함수 내의 코드 블록은 함수 레벨 스코프에 중첩된다.
let i = 10;                         ///// 전역 스코프(1)

function foo() {                    ///// 함수 레벨 스코프(2)
    let i = 100;
    for(let i = 1; i < 3; i++) {    ///// 블록 레벨 스코프(3)
        console.log(i); // 1 2
    }                               ///// (3)
    console.log(i); // 100
}                                   ///// (2)
foo();
console.log(i); // 10               ///// (1)



// 3. 변수 호이스팅 
// let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
// let 키워드로 선언한 변수를 변수 선언문 이전에 참조하면 참조에러가 발생
console.log(foo);  // ReferenceError: foo is not defined
let foo;

// let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다.
// var 키워드는 선언 단계와 초기화 단계(undefined)가 동시에 진행.
// 런타임 이전에 선언 단계가 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
// 초기화 단계 실행 전에 변수에 접근하려고 하면 참조 에러가 발생한다.
// 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대(TDZ-Temporal Dead Zone  )라고 부른다.

// 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
// 초기화 이전의 일시적 사각지대에서는 변수를 참조할 수 없다.
console.log(foo); // ReferenceError: foo is not defined

let foo; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(foo); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(foo); // 1


// let 키워드로 선언한 변수도 여전히 호이스팅이 발생한다.
let foo = 1; // 전역 변수
{
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    let foo = 2; // 지역 변수
}
// 만약 호이스팅이 발생하지 않는다면 위 예제는 전역 변수 foo의 값을 출력해야 한다.
// 자바스크립트는 ES6에서 도입된 let, const를 포함한 모든 선언을 호이스팅한다.
// 단, let, const, class를 사용한 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다.



// 4. 전역 객체와 let
// 전역 변수와 전역 함수는 전역 객체 window의 프로퍼티가 된다.
// 전역 객체의 프로퍼티를 참조할 때 window를 생략 할 수 있다.

var x = 1;  // 전역 변수
y = 2;  // 암묵적 전역
function foo() {} // 전역 함수

console.log(window.x); // 1
console.log(x); // 1 

console.log(window.y); // 2
console.log(y); // w

console.log(window.foo); // ƒ foo() {}
console.log(foo); // ƒ foo() {}

// let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아니다.
let x = 1;

// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아니다.
console.log(window.x); // undefined
console.log(x); // 1