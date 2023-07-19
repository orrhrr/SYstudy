// 객체(참조)타입 값의 특성

// 1. 변경가능한 값
// 객체를 할당한 변수가 기억하는 메모리 공간에 접근하면 참조값(생선된 객체가 저장된 메모리 공간의 주소 그 자체)에 접근할 수 있다.

// 할당이 이뤄지는 시점에 객체 리터럴이 해석되고, 그 결과 객체가 생성된다.
let person = {
    name: 'Lee'
};

// person 변수에 저장되어 있는 참조 값을 통해 실제 객체에 접근한다.
console.log(person); // {name: "lee"}



// 객체를 할당한 변수는 재할당 없이 객체를 직접 변경(프로퍼티 추가, 프로퍼티 값 갱신, 프로퍼티 삭제 등)할 수 있다.
// 프로퍼티 값 갱신
person.name = 'kim';

// 프로퍼티 동적 생성
person.address = 'seoul';

console.log(person); // {name: 'kim', address: 'seoul'}

// 객체는 변경가능 한 값이므로 메모리에 저장된 객체를 직접 수정할 수 있다.
// 이 때 객체를 할당한 변수에 재할당을 하지 않았으므로 객체를 할당한 변수의 참조 값은 변경되지 않는다.



// 얕은 복사와 깊은 복사

// 객체를 프로퍼티 값으로 갖는 객체의 경우 
const o = {x: {y: 1} };

//얕은 복사 :한 단계 까지만 복사
const c1 = {...o}; 
console.log( c1 === o ); // false
console.log(c1.x === o.x); // true

// 깊은 복사 : 객체에 중첩되어 있는 객체까지 모두 복사
// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');

const c2 = _.cloneDeep(o);
console.log(c2 === o); // false
console.log(c2.x === o.x); // false

// 얕은 복사와 깊은 복사로 생성된 객체는 원본과 다른 객체다. (원본과 복사본은 참조값이 다른 별개의 객체)
// 얕은 복사는 객체에 중첩되어 있는 객체의 경우 참조 값을 복사
// 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사해서 원시 값처럼 완전한 복사본을 만듦


// 원시값을 할당한 변수를 다른 변수에 할당하는 것을 깊은 복사, 객체를 할당한 변수를 다른 변수에 할당하는 것을 얕은 복사라고 부르는 경우도 있다.
const v = 1;

// 깊은 복사라고 부르기도 한다.
const copy1 = v;
console.log(copy1 === v); // true

const g = {x : 1};

// 얕은 복사라도 부르기도 한다.
const copy2 = g;
console.log(copy2 === g); // true




