// 재귀함수 : 자기자신을 호출(재귀호출)하는 함수 (스택/후입선출을 사용하는 함수)
// 사용시 스택 오버플로를 방지하기 위해 탈출조건이 필요하다.
// 재귀함수는 반복처리를 위해 사용한다.
// 대부분의 재귀함수는 for문이나 while문으로 구현 가능하다.
// 재귀 함수는 컴퓨터적 사고가 필요하며 알고리즘에 많이 사용된다.

function countdown(n){
    if(n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀호출
}

countdown(10); // 10 9 8 7 6 5 4 3 2 1 0
// 반복문 없이도 반복작업 구현 가능! 짜란



// 팩토리얼(계승) 구현 : 팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
// n! = 1 * 2 * ... * (n - 1) * n
function factorial(n){
    // 탈출조건
    if (n <= 1) return 1;
    // 재귀호출
    return n * factorial(n - 1);
}

console.log(factorial(0)); // 0! = 1
console.log(factorial(1)); // 1! = 1
console.log(factorial(2)); // 2! = 2 * 1 = 2
console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

// 함수이름 factorial은 함수 내부에서 유효하므로, 함수 내부에서 이를 사용해 자기 자신을 호출할 수 있다.
// 함수 표현식에서는 함수를 가키는 식별자로도 재귀호출 할 수 있다.
// 단 함수 외부에서 함수를 호출할 때는 반드시 식별자를 사용해서 호출해야 한다.
let factorial = function foo(n){
    //탈출조건 
    if (n <= 1) return 1;
    // 함수를 가리키는 식별자로 자기 자신 재귀 호출
    return n * factorial (n - 1);

    // 함수이름으로 자기 자신을 재귀 호출 할 수도 있다.
    // console.log(factorial === foo) // true
    // return n * foo(n -1);
};

console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120


// for문으로 구현
function factorialFor(n) {

    let result = 1;

    for(let i = n; i >= 1; i--){
        result *= i; //result = result * i
    } 

    return result;
}
console.log(factorialFor(5));

// while문으로 구현
function factorialWhile(n) {
    let result = 1;
    let i = n;
    while(i >= 1) {
        result = result * i;
        i--;
    } 
    return result;
}
console.log(factorialWhile(5));


// 반복문을 재귀함수로

function factorial2(n) {
    if(n <= 1) return 1;
    return n * factorial2(n - 1);
}

console.log(factorial2(5));