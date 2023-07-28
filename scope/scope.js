// 스코프는 식별자가 유효한 범위를 말한다.
// 모든 식별자(변수 이름, 함수 이름, 클래스 이름 등)는 *자신이 선언된 위치*에 의해 자신을 참조할 수 있는 유효 범위가 결정된다.

// 함수의 매개변수의 스코프
function add(x ,y){
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프는 함수 몸체 내부이다.
    console.log(x, y); // 2, 5
    return x + y;
}

add(2, 5);

// 매개변수를 함수 몸체 외부에서 참조하려 하면 참조 오류가 발생한다.
console.log(x, y) // ReferenceError: x is not defined


// 변수는 코드 블록이나 함수 몸체 내에서도 선언할 수 있다. 
// 이 때 코드 블록이나 함수는 중첩될 수 있다.
var var1 = 1; // 코드 가장 바깥 영역에서 선언한 변수 (전역변수)

if (true) {
    var2 = 2; // 코드 블록 내에서 선언한 변수 
    if(true) {
        var3 = 3 // 중첩된 코드 블록 내에서 선언한 변수
    }
}

function foo() {
    var var4 = 4; // 함수 내에서 선언한 변수

    function bar(){
        var var5 = 5; // 중첩된 함수 내에서 선언한 변수
    }
}

console.log(var1); // 1
console.log(var2); // 2
console.log(var3); // 3
console.log(var4); // ReferenceError: var4 is not defined
console.log(var5); // ReferenceError: var5 is not defined



// 식별자 결정: 자바스크립트가 이름이 같은 두 변수 중 어떤 것을 참조해야 할지 결정하는것
// 스코프란 자바스크립트 엔진이 식별자를 검색할 때 사용하는 규칙이다.
// 자바스크립트는 코드를 실행할 떄 코드의 문맥을 고려한다.
let x = 'global';

function foo() {
    let x = 'local';
    console.log(x); // local
}

foo();

console.log(x); // global

// global이 할당된 변수 x는 어디서든 참조할 수 있다.
// 하지만 foo 함수 내부에서 선언된 x 변수는 함수 내부에서만 참조할 수 있다.
// 두개의 x변수는 식별자 이름이 동일하지만 스코프가 다른 별개의 변수이다.

// 프로그래밍 언어에서는 스코프를 통해 식별자인 변수 이름의 충돌을 방지하여 같은 이름의 변수를 사용할 수 있게한다.
// 같은 스코프 내에서 식별자는 유일해야 하지만 다른 스코프에는 같은 이름을 사용할 수 있다.(ex. 폴더명 - 파일명은 같아도 됨)



// var, let, const 키워드로 선언한 변수의 중복선언
function foo(){
    var x = 1;
    // var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
    // 아래 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
    var x = 2;
    console.log(x); // 2
}
foo();

function bar() {
    let x = 1;
    // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
    let x = 2; // SyntaxError: Identifier 'x' has already been declared
}
bar();