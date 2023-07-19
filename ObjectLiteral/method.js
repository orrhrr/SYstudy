// 메서드: 객체에 묶여있는 함수

let circle = {
    radius: 5, // 프로퍼티

    //원의 지름 구하기 메서드
    getDiameter: function() {
        return 2 * this.radius //this는 circle을 가리킨다.
    } 
}

console.log(circle.getDiameter()); // 10


