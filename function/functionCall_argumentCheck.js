function add(x, y) {
    return x + y;
}

console.log(add(2));       // NaN
console.log(add('a','b')); // 'ab'


// 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
// 자바스크립트는 동적 언어다. 따라서 *자바스크립트 함수는 매개변수 타입을 사전에 지정할 수 없다.*
// 따라서 자바스크립트는 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.
function add2(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        // 매개변수를 통해 전달된 인수 타입이 부적절한 경우 에러를 발생시킨다.
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y; 
}

console.log(add2(2));        // Uncaught TypeError: 인수는 모두 숫자 값이어야 합니다.
console.log(add2('a', 'b')); // Uncaught TypeError: 인수는 모두 숫자 값이어야 합니다.

// 부적절한 호출을 사전에 방지할 수는 없고 에러는 런타임에 발생하게 된다.
// 따라서 타입스크립트와 같은 정적 타입을 선언할 수 있는 자바스크립트의 상위 확장을 도입해서 컴파일 시점에 부적절한 호출을 방지하는 것도 하나의 방법이다.



// arguments 객체를 통해 인수 개수를 확인할 수 있다.
// 또는 인수가 전달되지 않는 경우 단축 평가를 사용해 매개변수에 기본값을 할당하는 방법도 있다. (ex. a || 0, b || 0 등)
// 보통은 ES6에서 도입된 매개변수 기본값을 사용한다.
function add3(a = 0, b = 0, c = 0){
    return a + b + c;
}

console.log(add3(1, 2, 3)); // 6
console.log(add3(1, 2)); // 3
console.log(add3(1)); // 1
console.log(add3()); // 0

