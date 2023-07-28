// 전역 : 코드의 가장 바깥 영역. 전역 스코프를 만듦
// 전역변수는 어디서든지 참조할 수 있다.

// 지역 : 함수 몸체 내부. 지역 스코프를 만듦.
// 지역변수는 자신의 지역 스코프와 하위 지역 스코프에서 유효하다.

let x = "global x"; ///// 전역스코프
let y = "global y";

function outer () {
    let z = "outer's local z"; ///// 지역스코프 2

let x = "global x"; ////// 지역 스코프 1
    console.log(x); // global x
    console.log(y); // global y
    console.log(z); // outer's local z   ///// 지역스코프 1

    function inner() {
        let x = "inner's local x";

        console.log(x); // inner's local x
        console.log(y); // global y
        console.log(z); // outer's local z
    }

    inner(); ///// 지역스코프 2
}

outer();

console.log(x); // global x
console.log(z); // ReferenceError: z is not defined  ///// 전역스코프