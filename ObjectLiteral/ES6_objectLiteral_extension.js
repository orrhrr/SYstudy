// 1. 프로퍼티 축약표현
// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
// 이 때 프로퍼티 키는 변수 이름으로 자동 생성된다.

let x = 1, y = 2;

const obj = {x,y};

console.log(obj); // {x: 1, y: 2}



// 2. 계산된 프로퍼티 이름
// ES6에서는 객체 리터널 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있다.
const prefix = 'prop';
let i = 0;

const obj2 = {
    [`${prefix}-${++i}`]: i, // 대괄호 사용
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
}

console.log(obj2); // {prop-1: 1, prop-2: 2, prop-3: 3}



// 3. 메서드 축약 표현
// ES6 에서는 메서드를 정의할 때 function키워드를 생략한 축약 표현을 사용할 수 있다.
const obj3 = {
    name: 'Lee',
    sayHi() {
        console.log('Hi! ' + this.name);
    }
};

obj3.sayHi(); // Hi! Lee