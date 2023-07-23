let add = new('x', 'y', 'return x + y');
console.log(add(2, 5));  // 7

// function 생성자 함수로 함수를 생성할 수 있지만 일반적이지 않으며 바람직하지도 않다.
// function 생성자 함수로 생성한 함수는 closure를 생성하지 않는 등 함수 선언문이나 함수 표현식으로 생성한 함수와 다르게 동작한다.

