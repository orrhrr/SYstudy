// 블록문 : 0개 이상이 문을 중괄호로 묶은 것 (코드 블록, 블록 등으로 불림)

// 자바스크립트는 블록문을 하나의 실행단위로 취급한다.
// 블록문은 일반적으로 제어문이나 함수를 정의할 때 사용된다.
// 블록문은 언제나 문의 종료를 의미하는 자체 종결성을 갖기 떄문에 블록문 끝에는 세미콜론(;)을 붙이지 않는다.


// 블록문
{
    var foo = 10;
}

// 제어문
var x = 1;
if(x < 10) {
    x++;
}

// 함수 선언문
function sum(a, b) {
    return a + b;
}




let num1 = 1;
let num2 = 2;
const str1 = 'hello';
const str2 = 'bye';
const arr1 = ['~~', '!!']

function func1() {
  let num3 = 3
  return num1 + num2 + num3
}

function func2() {
  const funcStr = str1 + str2
  for(let i = 0; i < 4; ++i) {
    funcStr = arr[i]
  }
}