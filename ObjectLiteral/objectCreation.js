// 자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어(C++, Java등)와는 달리 다양한 객체 생성 방법을 지원한다.
/*

- 객체 리터럴 (실무에서 가장 많이 쓰이고, 가장 간단함)
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스(ES6)

*/


// 객체 리터럴에 의한 객체 생성 : 중괄호{} 내에 0개 이상의 프로퍼티를 정의한다.
// 변수에 할당되는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성한다.
// 객체리터럴의 중괄호{}는 코드 블록을 의미하지 않는다.(객체 리터럴의 닫는 중괄호 뒤에는 세미콜론을 붙인다.)
let person = {
    name: "Lee",
    sayHello : function() {
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); // object
console.log(person); // {name: 'Lee', sayHello: ƒ}

// 만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성된다.
let empty = {}; // 빈 객체
console.log(typeof empty);  // object
