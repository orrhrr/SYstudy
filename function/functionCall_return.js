// return: 실행결과를 함수 외부로 반환하는 키워드
function multiply(x, y){
    return x * y; //반환문
}

//함수 호출은 반환값으로 평가된다.
let result = multiply(3, 5);
console.log(result); // 15



// 반환문의 2가지 역할

// 1. 함수의 실행을 중단하고 함수의 몸체를 빠져나간다. 
function multiply2(x, y) {
    return x * y; 
}

//2. 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다.
function foo() {
    return; //return 키워드 뒤에 표현식을 명시적으로 지정하지 않으면 undefined를 반환.
}

console.log(foo()); //undefined


// 반환문은 생략할 수 있다.
// 이 때 함수는 함수 몸체의 마지막 문까지 실행한 후 암묵적으로 undefined를 반환환다.
function foo2() {
    // 반환문을 생략하면 암묵적으로 undefined가 반환된다.
}

console.log(foo2()); //undefined


// 반환문은 함수 몸체 내부에서만 사용할 수 있다. 
<!DOCTYPE html>
<html>
    <body>
        <script>
             {/* 전역에서 반환문을 사용하면 문법에러가 발생한다. */}
            return; {/*SyntaxError: Illegal return statement*/}
        </script>
    </body>
</html>
// Node.js 환경에서는 파일의 가장 바깥 영역에 반환문을 사용해도 에러가 발생하지 않는다.