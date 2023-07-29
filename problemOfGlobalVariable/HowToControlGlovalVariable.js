// 전역 변수의 사용을 억제하는 방법

// 1. 즉시 실행 함수
// 함수 정의와 동시에 호출되는 즉시 실행 함수(IIFE)는 단 한번만 호출된다.
// 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.

(function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
}());

console.log(foo); //  ReferenceError: foo is not defined



// 2. 네임스페이스 객체
// 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변ㅅ우처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법이다.

var MYAPP = {}; // 전역 네임스페이스 객체
MYAPP.name = "Lee";

console.log(MYAPP.name); // Lee

// 네임스페이스 객체에 또 다른 네임스페이스 객체를 추가해서 네임스페이스를 계층적으로 구성할 수도 있다.
var MYAPP = {};
MYAPP.person = {
    name: 'Lee',
    address: 'Seoul'
};

console.log(MYAPP.person.name); // Lee
// 네임스페이스를 분리해서 식별자 충돌을 방지하는 효과는 있으나 네임스페이스 객체 자체가 전역 변수에 할당되므로 그다지 유용해보이지 않는다.



// 3. 모듈 패턴
// 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
// 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다.
// 모듈 패턴의 특징은 전역 변수의 억제는 물론 캡슐화 까지 구현할 수 있다는 것이다.
// 캡슐화: 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것.
// 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보 은닉이라 한다.

var Counter = (function () {
    // private 변수 (외부노출 X)
    var num = 0; // num 변수는 함수 종료와 동시에 소멸한다.

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다. (외부노출 O)
    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

// private 변수는 외부로 노출되지 않는다.
console.log(Counter.num); // undefined

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// 위 예제의 즉시 실행 함수는 객체를 반환한다.
// 이 객체에는 외부에 노출하고 싶은 변수나 함수를 담아 반환한다. (퍼플릭 멤버)
// 외부로 노출하고 싶지 않은 변수나 함수느 반환하는 객체에 추가하지 않으면 외부에서 접근할 수 없다.(프라이빗 멤버)



// 4. ES6모듈
// ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다.
// ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
// 따라서 모듈 내에서 var 키워드로 선언한 변수는 더 이상 전역 변수가 아니며 window 객체의 프로퍼티도 아니다.
// script 태그에 type = "module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다.
// 모듈 확장자는 mjs를 권장한다.

<scrip type="module" scr="lub.mjs"></scrip>
<scrip type="module" scr="app.mjs"></scrip>


// 그러나 IE를 포함한 구형 브라우저에서는 동작하지 않으며, 트랜스파일링이나 번들링이 필요하다.
// 따라서 아직까지는 Webpack 등의 모듈 번들러를 사용하는 것이 일반적이다.
