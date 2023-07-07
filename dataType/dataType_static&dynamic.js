// 정적타입언어: 변수를 선언할 때 변수에 할당할 수 있는 데이터 타입을 사전에 선언해야 한다. (ex.C, C++, 자바, 코틀린, 러스트 등)
// 동적타입언어: 변수 선언이 아닌 할당에 의해 타입이 결정되며, 재할당에 의해 변수의 타입은 언제든 동적으로 변할 수 있다.(ex. 자바스크립트, 파이썬, 루비 등)
// 자바스크립트의 변수는 타입을 갖는 것이 아니라 변수의 값이 타입을 갖는다.

//typeof 연산자로 변수를 연산하면 변수에 할당되 데이터 타입을 반환한다.
var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'hello';
console.log(typeof foo); // sting

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); 
console.log(typeof foo); //symbol

foo = {};
console.log(typeof foo); //object

foo = [];
console.log(typeof foo); //object

foo = function() {};
console.log(typeof foo); //function





// 동적 타입의 언어는 유연성은 높지만 신뢰성은 떨어지기 떄문에 변수를 사용할 때 아래와 같은 주의 사항이 있다.
/*
- 변수는 꼭 필요한 경우에 한해 제한적으로 사용한다.
- 변수의 유효범위(스코프)는 최대한 좁게 만들어 변수의 부작용을 억제해야 한다.
- 전역 변수는 최대한 사용하지 않도록 한다.
- 변수보다는 상수를 사용해 값의 변경을 억제한다.
- 변수의 이름 (모든 식별자 포함)은 변수의 목적이나 의미를 파악할 수 있도록 네이밍한다.
*/

// 가독성이 좋은 코드가 좋은 코드다. (컴퓨터가 이해하는 코드는 바보도 쓸 수 있지만 훌륭한 프로그래머는 사람이 이해할 수 있는 코드를 쓴다.)
