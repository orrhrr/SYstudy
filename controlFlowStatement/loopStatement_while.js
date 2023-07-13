// while문 (for 문은 반복 횟수가 명확할 때, while문은 반복 횟수가 불명확할 때 주로 사용)
// 만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환해 참/거짓을 구별한다.
let count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
    console.log(count); // 0 1 2
    count++;
}

// 조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
// 무한루프를 탈출하기 위해서는 코드 블록 내 if문으로 탈출 조건을 만들고 break문으로 코드 블록을 탈출한다.
let count2 = 0;

//무한루프
while(true) {
    console.log(count2);
    count2++;
    // count가 3이면 블록을 탈출한다.
    if(count2 === 3) break;
 // 0 1 2
}

