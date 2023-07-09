// 논리 연산자 : 우항 좌항의 피연산자 (부정 논리 연산자의 경우 우항 피연산자)를 논리 연산한다.

// 논리 합(||) 연산자 : OR
true || true; // true
true || false; //true
false || true; // true
false || false; // false


// 논리 곱(&&) 연산자 : AND
true && true; // true
true && false; // false
false && true; // false
false && false; // false


// 논리 부정(!) 연산자 : NOT (피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환)
!true; // false
!false; // true
!0; // true
!'hello!' // false




// 드 모르간의 법칙 : 논리 연산자를 활용하여 복잡한 표현식을 가독성 좋은 표현식으로 변환시킬 수 있다.
!(x || y) === (!x && !y);
!(x && y) === (!x || !y);