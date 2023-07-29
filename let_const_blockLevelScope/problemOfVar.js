// var 키워드로 선언한 변수의 문제점

// 1. 변수 중복 선언 허용
var x = 1;
var y = 1;

// var 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용한다.
// 초기화문이 있는 변수선언문은 자바스크립트 엔진에 의해 var 키워드가 없는 것처럼 동작한다.
var x = 100;
// 초기화문이 없는 변수 선언문은 무된다.
var y;
console.log(x); // 100
console.log(y); // 1

// 이처럼 var키워드로 선언한 변수를 중복 선언하면 초기화문 유무에 따라 다르게 동작한다.
// 초기화문이 있는 변수 선언문은 자바스크립트 엔진에 의해 var키워드가 없는 것처럼 동작한다.
// 초기화문이 없는 변수 선언문은 무시된다.
// 이때 에러는 발생하지 않는다.

// 동일한 이름의 변수가 이미 선언되어 있는 것을 모르고 변수를 중복 선언하면서 값까지 할당했다면 의도치 않게 먼저 선언된 변수 값이 변경되는 부작용이 발생한다.



// 2. 함수 레벨 스코프
// var 키워드로 선언한 변수는 오로지 함수이 코드 블록만을 지역 스코프로 인정한다.
// 따라서 함수 외부에서 var키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가 된다.
// 함수 레벨 스코프는 전역 변수를 남발할 가능성을 높인다.

var x = 1;
if (true) {
    // x는 전역변다. 이미 선언된 전역 변수 x가 있음로 x 변수는 중복선언된다.
    // 이는 의도치 않게 변수값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}
console.log(x); // 10


// for문의 변수 선언문에서 var키워드로 선언한 변수도 전역 변수가 된다.
var i = 10;

for(var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// 의도치 않게 i 변수의 값이 변경되었다.
console.log(i); // 5



// 3. 변수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.
// 변수 호이스팅에 의해 var키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다.
// 단, 할당문 이전에 변수를 참조하면 언제나 undefined를 반환한다.

// 이 시점에는 이미 변수 호이스팅에 의해 이미 foo변수가 선언되었다.(1.선언단계)
// 변수 foo는 undefined로 초기화된다.(2.초기화단계)
console.log(foo); // undefined

// 변수에 값을 할당 (3.할당단계)
foo = 123;

console.log(foo); // 123

// 변수 선언은 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 실행된다.
var foo;
