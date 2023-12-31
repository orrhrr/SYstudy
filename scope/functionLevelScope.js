// 블록 레벨 스코프: 모든 코드 블록(if, for, while,try/catch 등)이 만들어낸 지역 스코프
// 함수 레벨 스코프: 함수 몸체만을 지역 스코프로 인정하는 것(var 키워드로 선언된 변수)

var x = 1;
if(true) {
    // var키워드로 선ㄴ언된 변수는 함수의 코드 블록(함수 몸체)만을 지역 스코프로 인정한다.
    // 함수 밖에서 var키워드로 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역변수다.
    // 따라서 x는 전역 변수다. 이미 선언된 전역 변수 x가 있으므로 x변수는 중복 선언된다.
    // 이는 의도치 않게 변수 값이 변경되는 부작용을 발생시킨다.
    var x = 10;
}

console.log(x); // 10



var i = 10;

// for문에서 선언한 i는 전역 변수다. 이미 선언된 전역 변수 i가 있으므로 중복 선언된다.
for(var i = 0; i < 5; i++){
    console.log(i); // 0 1 2 3 4 
}

// 의도치 않게 변수의 값이 변경되었다.
console.log(i); // 5


// var 키워드는 변수명이 중복될 경우 기존의 값을 재할당 해버리는 의도치 않은 일이 일어날 수 있다.
// 걍 쓰지말자.....