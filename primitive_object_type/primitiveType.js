// 원시타입 값의 특성

// 1. 변경 불가능한 값(읽기 전용 값)
// 데이터의 신뢰성을 보장한다.
// 변수와 구분해서 생각해야 한다. 

// const 키워드를 사용해 선언한 변수는 재할당이 금지된다. 상수는 재할당이 금지된 변수일 뿐이다.
const o = {};

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)는 변경할 수 없다.
// 하지만 const 키워드를 통해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1;
console.log(o); // {a: 1}

// 원시값이 재할당 되는 메커니즘
let score = 80;
score = 90;
/*

- score변수가 undefined값이 저장된 메모리 공간을 참조한다. (초기 완료값)
- 80값이 저장되어 있는 메모리 공간을 확보한다.
- score 변수가 이 메모리 공간을 참조한다.
- 90이 재할당되면서 90을 저장하는 메모리 공간이 확보된다.
- 변수 score가 90을 저장한 메모리 공간을 참조한다.

** 해당 메모리에 저장되어 있던 기존 값을 변경하는게 아니라 새로운 메모리 공간을 확보한다.
** 확보한 새로운 메모리 공간에 새로운 원시 값을 저장한다.
** 변수는 새롭게 재할당한 원시 값을 가리킨다. (변수가 참조하던 메모리 공간의 주소가 바뀐다.)

** 불변성을 갖는 원시 값을 할당한 변수는 재할당 외에 변수 값을 변경할 수 있는 방법이 없다.
** 만약 원시값인 변수 값을 변경할 수 있다면 값의 상태 변경을 추적하기 어렵게 만들 수 있다. (데이터의 신뢰성 하락)

*/



// 2. 문자열과 불변성
// 원시 값이 문자열은 몇개로 이루어졌느냐에 따라 필요한 메모리 공간의 크기가 결정된다.

// 문자열은 0개 이상의 문자로 이뤄진 집합이다.
// 아래 두 변수에 할당된 각각의 문자열은 서로 다른 메모리 크기를 필요로 한다.
let str1 = ''; // 0개의 문자로 이뤄진 빈문자열
let str2 = 'hello' // 5개의 문자로 이뤄진 문자열


// 자바스크립트는 개발자의 편의를 위해 원시 타입인 문자열 타입을 제공하며, 문자열이 생성된 이후에는 변경할 수 없다.
let string = 'hello';
string = 'world';

/*

- string변수가 undefined값이 저장된 메모리 공간을 참조한다. (초기 완료값)
- 'hello' 값이 저장되어 있는 메모리 공간을 확보한다.
- string 변수가 이 메모리 공간을 참조한다.
- 'world'가 재할당되면서 'world'을 저장하는 메모리 공간이 확보된다.
- 변수 string가 'world'을 저장한 메모리 공간을 참조한다.

*/



// 문자열은 유사 배열 객체(인덱스로 프로퍼티 값 접근가능, length 프로퍼티를 가짐.)이고, for문으로 순회할 수도 있다.
let str3 = 'string';

console.log(str3[0]); // s

// 원시 값인 문자열이 객체처럼 동작한다.
console.log(str3.length); // 6
console.log(str3.toUpperCase()); //STRING (toUpperCase는 문자열은 대문자로 바꿔주는 메서드)

str3[0] = 'S'; // 이미 생성된 문자열의 일부를 변경해도
console.log(str3); // string     // 반영되지 않고 최초 할당한 문자열로 출력된다. (원시값)

// 문자열을 변경하고 싶으면 재할당을 통해 가능하다.
str3 = 'string3';
console.log(str3); // string3 



// 3. 값에 의한 전달
// 변수에 원시 값을 갖는 변수를 할당하면 할당받는 변수에는 할당되는 변수의 원시값이 복사되어 전달된다. (값에 의한 전달)
let score2 = 80;

// copy 변수에는 score 변수의 값 80이 *복사*되어 할당된다.
let copy = score2;

console.log(score2, copy); // 80 80
console.log(score2 === copy); // true
// score2와 copy 변수는 숫자값 80을 갖는다는 점에서 동일하다.
// 그러나 score2 변수와 copy 변수의 값 80은 *다른 메모리 공간에 저장된 별개의 값*이다.

// number 변수의 값 변경
let number = 80;

let copyNumber = number; // copyNumber 변수에는 number 변수의 값 80이 복사되어 할당된다.

console.log(number, copyNumber); // 80 80
console.log(number === copyNumber) // true

// number 변수와 copyNumber 변수의 값은 다른 메모리 공간에 저장된 *별개의 값*이다.
// 따라서 number 변수의 값을 변경해도 copyNumber 변수의 값에는 어떠한 영향도 주지 않는다.
number = 100;

console.log(number,copyNumber); // 100 80
console.log(number === copyNumber); // false