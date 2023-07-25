// 객체 타입의 인수는 참조 값이 복사되어 매개변수에 전달되기 떄문에 함수 몸체에서 참조 값을 통해 객체를 변경할 경우 원본이 훼손된다.
//즉 함수 외부에서 함수 내부로 전달한 참조 값에 의해 원본 객체가 변경되는 부수효과가 발생한다.


// 매개변수 primitive는 원시 값을 전달 받고, 매개변수 obj는 객체를 전달받는다.
function chageVal (primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
}

// 외부 상태
let num = 100;
let person = {name: 'Lee'};

console.log(num) // 100
console.log(person); // {name: 'Lee'}

// 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
chageVal(num, person);

// 원시 값은 원본이 훼손되지 않는다.
console.log(num); // 100

// 갹체는 원본이 훼손된다.
console.log(person); //{name: 'kim'}