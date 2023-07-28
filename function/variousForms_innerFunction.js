// 중첩 함수: 함수 내부에 정의된 함수
// 중첩 함수는 외부 함수 내부에서만 호출할 수 있다.
// 일반적으로 중첩함수는 자신을 포함하는 외부 함수를 돕는 헬퍼(helper) 함수의 역할을 한다.
// 중첩함수는 고정되어 있어서 교체하기 곤란하다. (직접 내부코드를 수정해야한다.)
// 중첩함수는 스코프와 클로저에 깊은 관련이 있다.
function outer() {
    let x = 1;

    // 중첩 함수
    function inner() {
        let y = 2;
        // 외부 함수의 변수를 참조할 수 있다.
        console.log(x + y); // 3
    }
    inner();
}

outer();


// ES6부터는 if문이나 for문 등의 코드 블록 내에서도 함수를 정의할 수 있다.
// 단 호이스팅으로 인해 혼란이 발생할 수 있으므로, if문이나 for문 등의 코드 블록에서 함수 선언문을 통해 함수를 정의하는 것은 바람직하지 않다.