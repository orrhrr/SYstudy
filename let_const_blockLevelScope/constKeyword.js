// const 키워드의 특징

// 1. 선언과 초기화
// const로 선언한 변수는 반드시 선언과 동시에 초기화 해야 한다.
// 그렇지 않으면 문법 에러가 발생한다.

const foo = 1;

const foo2; // SyntaxError: Missing initializer in const declaration

{// let 키워드처럼 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
    console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
    const foo = 1;
    console.log(foo); // 1
}

// let 키워드로 선언한 변수와 마찬가지로 블록레벨 스코프를 가진다.
console.log(foo); // ReferenceError: foo is not defined



// 2. 재할당 금지
const test = 1;
test = 2; // TypeError: Assignment to constant variable.



// 3. 상수
// 상수는 재할당이 금지된 변수를 말한다.
// const로 선언한 변수에 원시 값을 할당한 경우 변수 값을 변경할 수 없다.
// const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.
// 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.
// 상수는 프로그램 전체에서 공통적으로 사용하므로 나중에 변경되면 상수값만 직접 변경하면 되기 때문에 유지보수가 편하다.
// 일반적으로 상수의 이름은 대문자로 선언하며, 여러 단어의 경우 언더스코어(_)로 구분하여 스네이크 케이스로 표현한다.

// 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값이다.
// 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
const TAX_RATE = 0.1;

// 세전 가격
let preTaxPrice = 100;

// 세후 가격
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice); // 110



// 4. const 키워드와 객체
// const 키워드에 *객체*를 할당한 경우 값을 변경할 수 있다.(참조값이기 떄문)
const person = {
    name: 'Lee'
};

// 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
person.name = 'Kim';

console.log(person); // {name: 'Kim'}

// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.


// var 키워드는 사용을 지양한다.
// 변수를 선언 떄는 일단 const 키워드를 사용하자.
// 반드시 재할당이 필요하다면 그때 const 키워드를 let키워드로 변경해도 결코 늦지 않다.