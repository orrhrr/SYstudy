// 할당 연산자는 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에 할당한다.
// 변수 값이 변하는 부수효과가 있다.

var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = 'My name is';

//문자열 연결 연산자

str += 'Lee' // str = str + 'Lee';
console.log(str); // 'My name is Lee'




// 할당문은 표현식인 문이다 (값으로 평가되는 표현식인 문으로서 할당된 값으로 평가된다.)
// 따라서 할당문을 다른 변수에 할당할 수도 있다.
var x;

console.log(x = 10); // 10

var a, b, c;

// 연쇄할당. 오른쪽에서 왼쪽으로 진행.
// 1. c = 0 : 0으로 평가된다.
// 2. b = 0 : 0으로 평가된다.
// 3. a = 0 : 0으로 평가된다.
a = b = c = 0;

console.log(a, b, c);  // 0 0 0