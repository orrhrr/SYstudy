// 함수 참조
console.dir(add); // ƒ add(x, y) (함수선언문을 통해 암묵적으로 생성된 식별자는 함수 객체로 초기화됨)
console.dir(sub); // undefined (var 키워드로 선언된 변수는 undefined로 초기화됨)

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
    return x + y; 
}

// 함수 표현식
let sub = function(x, y) {
    return x - y;
}

// 함수 선언문으로 정의한 함수는 함수 선언문 이전에 호출할 수 있다.
// 그러나 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출할 수 없다.
// 이는 함수 선언문으로 정의한 함수와 함수 표현식으로 정의한 함수의 *생성 시점*이 다르기 떄문이다.




// 함수 선언문: 런타임 이전에 함수 객체 먼저 생성 (암묵적으로 함수 이름과 동일한 이름의 식별자를 생성하고 함수 객체 할당)
// 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 *함수 호이스팅* 이라고 한다.

// 함수 표현식: 런타임에 평가되므로 함수 표현식의 함수 리터럴도 할당문이 실행되는 시점에 평가되어 함수 객체가 된다.
// 따라서 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라 변수 호이스팅이 발생한다.
// 함수 표현식으로 정의한 함수는 반드시 함수 표현식 이후에 참조 또는 호출해야 한다.
// 함수 호이스팅은 함수를 호출하기 전에 함수를 선언해야 한다는 당연한 규칙을 무시하므로 *함수 표현식을 사용할 것을 권장*한다.

