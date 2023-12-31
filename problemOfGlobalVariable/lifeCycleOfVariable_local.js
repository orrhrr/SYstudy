// 지역 변수의 생명 주기

// 변수는 선언에 의해 생성되고 할당을 통해 값을 가지며 언제가 소멸한다.(생명 주기)
// 변수에 생명 주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 영원히 메모리 공간을 점유하게 된다.
// 변수는 자신이 선언된 위치에서 생성되고 소멸한다.
// 하지만 함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.



function foo() {
    var x = 'local'; // 지역변수 x는 foo 함수가 호출되기 전까지는 생성되지 않는다.
    console.log(x); // local
    return x;
}

foo();
console.log(x); // ReferenceError: x is not defined

/* 

- 함수 선언문 foo는 런타임 이전에 자바스크립트 엔진에 의해 먼저 실행된다. (변수 선언문은 위치와 관계없이 가장 먼저 실행됨)
- foo 함수를 호출하면
- x변수가 선언되고 undefined로 초기화 된다.
- x변수에 'local'이 할당된다.
- 반환문이 실행되고 함수가 종료되면 x 변수도 소멸되어 생명주기가 종료된다.
- 지역 변수 x는 foo 함수가 호출되어 실행되는 동안에만 유효하다.
- 즉, 지역변수의 생명주기는 함수의 생명주기와 일치한다.
- 지역 변수가 함수보다 오래 생존하는 경우도 존재하긴 한다.

*/



// 변수의 생명주기는 메모리 공간이 확보된 시점부터 메모리 공간이 해제되어 가용 메모리 풀에 반환되는 시점까지다.
// 메모리에 올라가 있어야 '살아있는 것', '물리적인 실체가 있는 것'이 된다.
// HDD,SDD: 냉장고  CPU: 요리사  메모리: 도마 위  와 같다.
// 전역변수는 안쓰는 재료를 도마위에 계속 올려두는 것과 같다. (비효율적)
// 스코프도 마찬가지로 누군가 스코프를 참조하고 있으면 스코프느 소멸하지 않고 생존하게 된다.

var x = 'global';

function foo() {
    console.log(x); // (1)  //undefined 
    var x = 'local';
}

foo(); 
console.log(x); // global // foo 함수를 실행한것과 별개로 전역 변수 x를 참조하여 출력한다.

/*

- foo 함수 내부에서 선언된 지역 변수 x는 (1)의 시점에 이미 선언되었고 undefined로 초기화 되어 있다.
- 따라서 전역 변수 x를 참조하는 것이 아니라 지역변수 x를 팜조해 값을 출력한다.
- 즉 지역 변수는 함수 전체에서 유효하다.
- 단, 변수 할당문이 실행되기 전까지는 undefined값을 갖는다.

*/


// 호이스팅은 스코프를 단위로 동작한다.
// 즉 호이스팅은 변수 선언이 스코프의 선두로 끌어올려진 것처럼 동작하는 자바스크립트 고유의 특징이다.
