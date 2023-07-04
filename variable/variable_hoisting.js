console.log(score); //undifined

score = 80; // 값의 할당
var score; // 변수 선언

console.log(score); // 80;

/* 

- 변수 선언은 소스코드가 한줄씩 실행되는 시점(런타임)이 아니라 그 이전에 먼저 실행된다.
- 4번 줄에서 var score; 를 통해 변수를 선언했기 때문에 이는 가장 먼서 실행된다.
- 값의 할당은 런타임에 실행되므로, 변수 선언 이후에 실행된다.
- 따라서 1번 줄 console.log(score) 실행 시 이미 변수 선언과 메모리 초기화가 완료되어 undefined가 출력된다.
- 3번 줄에서 score 변수에 80이란 값을 재할당한다. (이때 메모리 주소는 기존 undefined값의 주소와 다른 새로운 주소가된다.)
- 6번 줄 console.log(score)에서는 재할당 된 값 80을 출력한다.

*/
