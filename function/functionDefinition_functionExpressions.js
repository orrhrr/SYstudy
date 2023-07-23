// 함수 표현식
let add = function (x, y) { // 함수 표현식의 함수리터럴은 함수이름을 생략하는 것이 일반적이다.
    return x + y;
}

console.log(add(2, 5));  // 7


// 자바스크립트의 함수는 일급 객체다. (함수를 값처럼 유롭게 사용할 수 있다.)
// 따라서 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.



// 기명 함수 표현식
let add2 = function foo (x, y) {
    return x + y;
};

// 함수 객체를 가리키는 식별자로 호출
console.log(add(2, 5)); // 7

// 함수 이름으로 호출하면 참조 오류가 발생한다.
// 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
console.log(foo(2, 5)); // ReferenceError: add is not defined

