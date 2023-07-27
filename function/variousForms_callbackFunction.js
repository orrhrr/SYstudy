// 콜백 함수 : 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
// 고차 함수 : 매개 변수를 통해 콜백 함수를 전달받은 함수
// 고차 함수는 콜백함수를 자신의 일부분으로 합성한다.
// 함수의 공통 로직은 미리 정의해두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달한다.


// 외부에서 전달받은 f를 n만큼 반복 호출한다.
function repeat(n ,f){ // 고차함수
    for(i = 0; i < n; i++){
        f(i); // i를 전달하면서 f를 호출
    }
}

let logAll = function(i) { // 콜백함수
    console.log(i);
};

// 반복 호출할 함수를 인수로 전달한다.
repeat(5, logAll); // 0 1 2 3 4

let logOdds = function(i) {
    // logOdds 함수는 단 한번만 생성된다. 
    // 콜백 함수가 자주 사용되는 함수라면 표현식으로 정의해두는 것이 편하다.
    if (i % 2) console.log(i);
}

// 반복 호출할 함수를 인수로 전달한다.
// 고차 함수에 함수 참조를 전달한다.
repeat(5 ,logOdds); // 1 3



// 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
// 콜백 함수는 고차 함수에 의해 호출되며, 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.
// 따라서 고차 함수에 콜백 함수를 전달할 때 호출하지 않고 함수 자체를 전달해야한다.

// 익명 함수 리터럴을 콜백 함수로 고차 함수에 전달한다.
// 익명 함수 리터럴은 repeat 함수를 호출할 때마다 평가되어 함수 객체를 생성한다.
// 콜백 함수를 익명 함수 리터럴로 정의하면 곧바로 고차 함수에 전달되면서 고차 함수가 호출될 떄마다 콜백 함수가 생성된다.
repeat(5,function(i){
    if (i % 2) console.log(i);
}); // 1 3



// 콜백 함수는 비동기처리에도 자주 활용된다.(순서대로 해야하는 작업에 활용)

// ex.1) 이벤트처리
//myButton 버튼을 클릭하면 콜백함수를 실행한다.
document.getElementById('myButton').addEventListener('click',function(){
    console.log('button clicked!');
});

// 콜백함수를 사용한 비동기 처리
setTimeout(function(){
    console.log('1초 경과');
}, 1000);

// ex.2) 배열 고차 함수
// 콜백 함수를 사용하는 고차함수 map 
// map: callbackFunction을 실행한 결과를 가지고 새로운 배열로 반환
let res = [1,2,3].map((item) => item * 2)

console.log(res); // [2, 4, 6]

// 콜백 함수를 사용하는 고차함수 filter
// filter: 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
res = [1 ,2, 3].filter((item) => item % 2)

console.log(res); // [1, 3]

// 콜백 함수를 사용하는 고차함수 reduce 
// reduce: 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환
res = [1, 2, 3].reduce((acc,cur) => acc + cur)

console.log(res);// 6
