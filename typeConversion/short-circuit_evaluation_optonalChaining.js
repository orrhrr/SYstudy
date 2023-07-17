// 옵셔널 체이닝 연산자(?.) : 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고, 그렇지 않으면 우항의 프로퍼티 참조를 이어간다. 

let elem = null;

// elem이 Falsy한 값이면 elem으로 평가되고, Truthy한 값이면 elem.value로 평가된다.
let value = elem && elem.value;
console.log(elem); // null


// 논리곱 연산자(&&)는 좌항 피연산자가 ''일 경우 객체로 평가되어 참조하지 못하는 경우도 있다.
// 그러나 옵셔널 체이닝 연산자(?.)는 좌항이 Falsy값이라도 null 또는 undefined만 아니면 우항의 프로퍼티 참조를 이어간다.

// && 연산자로 문자길이 참조
let str = '';
let length = str && str.length;

console.log(length); // 빈문자열 출력. 참조하지 못한다.
// ?. 연산자로 문자 길이 참조
let str2 = '';
let length2 = str2.length;

console.log(length2); // 0 