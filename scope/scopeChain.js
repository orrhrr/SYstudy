// 스코프 체인: 스코프를가 계층적으로 연결된 것(스코프를 검색하는 방향)
// 스코프는 함수의 중첩에 의해 계층적구조를 갖는다.
// 변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는 코드의 스코프에서 시작하여 *상위 스코프 방향*으로 이동하며 선언된 변수를 검색한다.

// 스코프 체인은 물리적인 실체로 존재하며, 렉시컬 환경을 실제로 생성한다.
// 렉시컬 환경: 코드가 어디에서 실행되며 주변에 어떤 코드가 있는가?

// 상위 스코프에서 효한 변수는 하위 스코프에서 자유롭게 참조할 수 있지만 하위 스코프에서 유효한 변수를 상위 스코프에서 참조할 수 없다. (검색 방향에 의해)
// 상속과 비슷한 개념이다.


// 전역함수
function foo () {
    console.log('global function foo');
}

function bar() {
    function foo() { // 중첩 함수
        console.log('local function foo');
    }
    foo(); // local function foo
}

bar(); 