// 매개변수(parameter): 함수를 정의할 떄 선언하며 함수 몸체 내부에서 변수와 동일하게 취급된다.
// 즉, 함수가 호출되면 암묵적으로 매개변수가 생성되고 일반 변수처럼 undefined로 초기화된 이후 인수가 할당된다.
// 매개변수는 함수 몸체 내에서만 참조할 수 있고 함수 몸체 외부에서는 참조 할 수 없다.(매개변수의 스코프는 함수 내부이다.)

// 인수(argument): 함수호출시 힘수 내부의 매개변수로 전달하는 값이다. 
// 인수는 값으로 평가된ㄴ 표현식이어야 한다.
// 개수와 타입에 제한이 없다.

function add(x, y) {
    console.log(x, y); // 2 ,5
    return x + y;
}

add(2 ,5);

// add함수의 매개변수 x, y는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); //  ReferenceError: x is not defined



// 함수는 개변수의 개수와 인수의 개수가 일치하는지 체크하지 않는다.
// 즉, 함수호출 시 매개변수와 인수의 개수가 일치하지 않아도 에러는 발생하지 않는다.
// 인수가 부족해서 인수가 할당되지 않은 매개변수의 값은 undefined이다.


function add2(x, y){
    return x + y;
}

console.log(add2(3)); // NaN (2 + undefined로 연산됨)


// 매개변수가 인수보다 더 많은 경우 초과된 인수는 무시된다.
function add3 (x, y) {
    return x + y;
}

console.log(add3(2, 5, 10)); // 7


// 초과된 인수는 그냥 버려지는 것이 아니며, 모든 인수는 암묵적으로 arguments 객체의 프로퍼티로 보관된다.
// arguments 객체는 함수를 정의할 때 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하게 사용된다.
function add4(x, y) {
    console.log(arguments);
    // Arguments(3) [2, 5, 10, callee: ƒ, Symbol(Symbol.iterator): ƒ]
    return x + y;
}

add4(2, 5, 10);


