// null 병합 연산자(??) : 좌항의 피연산자가 null 또는 undefined인 경우 우항의 피연산자를 반환하고 그렇지 않으면 좌항의 피연산자를 반환한다.
// 변수 기본값을 설정할 때 유용하다.
let foo = null ?? 'default string'
console.log(foo); // "default string"

// 좌항의 피연산자가 Falsy로 평가되는 값이라도 null 또는 undefined가 아니면 좌항의 피연산자를 그대로 반환한다.
let foo2 = '' ?? 'default string';
console.log(foo2); // ""