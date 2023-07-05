// undefined타입의 값은 undefined가 유일하다.

var foo;
console.log(foo); // undefined

/*
- 변수를 참조했을 때 undefined가 반환된다면 참조한 변수가 선언 이후 값이 할당된 적이 없는, 즉 초기화되지 않은 변수라는 것을 간파할 수 있다.
- 개발자가 의도적으로 변수에 undefined값을 할당하는 것은 혼란을 줄 수 있으므로 권장하지 않는다.
*/




// null 타입의 값은 null이 유일하다.
// 변수에 null을 할당하는 것은 변수가 이전에 참조하던 값을 더 이상 참조하지 않겠다는 의미다.

var foo = 'Lee';

// 이전 참조를 제거. foo 변수는 더 이상 'Lee'를 참조하지 않는다.
// 유용해 보이지 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 빨리 소멸시키는 편이 낫다.
foo = null;



// 함수가 유효한 값을 반환할 수 없는 경우 명시적으로 null을 반환하기도 한다. (ex. document.querySelector 메서드)
var element = document.querySelector('.myClass'); //HTML문서에 myClass 클래스를 갖는 요소가 없다면 null을 반환

console.log(element); // null





// 심볼은 ES6에서 추가된 데이터 타입으로, 변경 불가능한 원시 타입의 값이다. (다른값과 중복 불가능한 유일무이한 값)
// 심볼은 Symbol 함수를 호출해 생성하며, 이 값은 외부에 노출되지 않는다.

// 심볼값 생성
var key = Symbol('key');
console.log(typeof key); //symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무한 값인 심볼을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]); // value

