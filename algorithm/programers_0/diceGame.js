/*
주사위 게임 1
문제 설명
1부터 6까지 숫자가 적힌 주사위가 두 개 있습니다. 두 주사위를 굴렸을 때 나온 숫자를 각각 a, b라고 했을 때 얻는 점수는 다음과 같습니다.

a와 b가 모두 홀수라면 a2 + b2 점을 얻습니다.
a와 b 중 하나만 홀수라면 2 × (a + b) 점을 얻습니다.
a와 b 모두 홀수가 아니라면 |a - b| 점을 얻습니다.
두 정수 a와 b가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

제한사항
a와 b는 1 이상 6 이하의 정수입니다.
입출력 예
a	b	result
3	5	34
6	1	14
2	4	2
*/

function solution(a, b) {
    var answer = 0;
    
    if (a % 2 === 1 && b % 2 === 1) {
        answer = (a * a) + (b * b);
    } else if (a % 2 === 1 || b % 2 === 1) {
        answer = 2 * (a + b);
    } else if (a % 2 === 0 && a % 2 === 0) {
        answer = Math.abs(a - b);
    }
    return answer;
}

// 삼항연산자 사용
function solution(a, b) {
    const isOdd = (num) => num % 2 === 1; // 홀수인지 판별하는 식을 함수로 선언
  
    return isOdd(a) && isOdd(b) // 함수 파라미터로 a,b를 넣어서 연산
      ? a ** 2 + b ** 2
      : isOdd(a) || isOdd(b)
      ? 2 * (a + b)
      : Math.abs(a - b);
  }