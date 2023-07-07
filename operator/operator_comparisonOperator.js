// 비교연산자는 좌항과 우항의 피연산자를 비교한다음 그 결과값을 불리언 값으로 반환한다. (제어문에서 주로 사용)



// 동등비교 연산자 : 좌항 우항의 피연산자가 값이 같은 경우에 true를 반환한다. (==, !=)
5 == 5; //true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == '5'; //true


// 동등비교. 결과를 예측하기 어렵다. (안티패턴)
'0' == '' // false (1 == 0)
0 == '';  //true (0 == 0)
0 == '0'; //true (0 == 0)
false == 'false' ; //false
false == '0'; // true
false == null; //false
false == undefined; //false


// 일치비교 : 좌항 우항의 피연산자가 타입도 같고 값도 같은 경우에 한해 true를 반환한다. (===, !==)
5 === 5; // true
5 === '5' // false

// NaN는 자신과 일치하지 않는 유일한 값이다.
NaN === NaN; // false
 
// Number.isNaN 함수는 지정한 값이 NaN인지 확인하고 그 결과를 불리언 값으로 반환한다.
Number.isNaN(NaN); //true
Number.isNaN(10); //false
Number.isNaN(1 + undefined); //true

// 양의 0과 음의 0의 비교. 모두 true
0 === -0; // true
0 == -0; // true



//Object.is 메서드 : 예측 가능한 정확한 비교 결과를 반환한다. 그 외에는 일치비교 연산자(===)와 동일하게 작동.
-0 === +0;  //true
Object.is(-0, +0)  //false

NaN === NaN; //false
Object.is(NaN,NaN); // true



// 부동등 비교 
5 != 8 // true
5 != 5 // false
5 != '5' //false

// 불일치 비교
5 !== 8; // true
5 !== 5 // false
5 !== '5' //true




// 대소 관계 비교 연산자: 피연산자의 크기를 비교하여 불리언 값을 변환한다(> , <, >=, <=)

// 대소관계비교
5 > 0; //true
5 > 5; //false
5 >= 5; //true
5 <= 5; //true



