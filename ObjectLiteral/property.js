// 객체는 프로퍼티의 집합이며 프로퍼티는 키와 값으로 구성된다.

let person = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name: 'Lee', // 프로퍼티를 나열할 떄는 쉼표로 구분한다.
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age: 20
};

// 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열 또는 심벌 값을 사용할 수 있다.
// 프로퍼티 값은 자바스크립에서 사용할 수 있는 모든 값을 사용할 수 있다.


// 프로퍼티 키는 따옴표를 생략할 수 있지만, 식별자 네이밍 규칙을 따르지 않는 이름은 반드시 따옴표를 붙여야 한다. (가급적 식별자 네이밍을 따를 것)
let person2 = {
    firstName: 'seung-yeon', // 식별자 네이밍을 준수하는 프로퍼티 키
    'last-name': 'Lee' // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키 (따옴표가 없으면자바스크립트는 -를 연산자가 있는 표현식으로 해석한다.)
}



// 문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 대괄호[] 사용.
let obj = {};
let key = 'hello'

// ES5: 프로퍼티 키 동적생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// vat obj = {[key]: 'world'}

console.log(obj); // {hello: 'world'}



// 프로퍼티 키에 문자열이나 심벌 값 외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이된다.
let foo = {
    0: 1,
    1: 2,
    2: 3
};

console.log(foo); // {0: 1, 1: 2, 2: 3}



// 이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어쓴다. (에러발생 안함!!)
let  foo2 = {
    name: 'Lee',
    name: 'Kim'
};

console.log(foo2) // {name: 'Kim'}



// 프로퍼티 접근
// 1. 마침표 표기법 : 객체료 평가되는 표현식 다음에 마침표를 사용하여 접근한다.
// 2. 대괄호 표기법 : 객체로 평가되는 표현식 다음에 대괄호 내부에 프로퍼티 키를 지정한다. (프로퍼티키가 식별자 네이밍을 준수하지 않은 경우 사용)
let person3 = {
    name: 'Lee'
}; 

console.log(person3.name);// 마침표 표기법
console.log(person3['name']) // 대괄호 표기법 (반드시 따옴표로 감싼 문자열이여야 한다. - 따옴표가 없으면 프로퍼티키를 식별자로 해석하기 떄문)



// 존재하지 않는 프로퍼티 접근
let person4 = {
    name: 'Lee'
};

console.log(person4.age); // undefined (참조에러 발생하지 않고 undefined 반환)

// 프로퍼티의 키값이 숫자로 이루어진 문자열일 경우 참조 시 따옴표를 생략할 수 있다.
let test = {
    1: 10
};

test[1]; // 10
test['1'] // 10



// 프로퍼티 값 갱신 : 이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.
let person5 = {
    name: 'Lee'
};

// person5 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person5.name = 'Kim';

console.log(person5);  // {name: 'Kim'}



// 프로퍼티의 생성과 삭제
// 프로퍼티 동적 생성 : 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.
let person6 = {
    name: 'Lee'
};

// person6 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person6 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person6.age = 20;

console.log(person6); // {name: 'Lee', age: 20}


// 프로퍼티 삭제 : delete 연산자는 객체의 프로퍼티를 삭제한다.
delete person6.age; // person6 객체의 age 프로퍼티 삭제
delete person6.address; // person6 객체에 address 프로퍼티는 존재하지 않으므로 delete연산자로 삭제할 수 없다. 이때 에러가 발생하지 않는다.

console.log(person6); // {name: 'Lee'}


