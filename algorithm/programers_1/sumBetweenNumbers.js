/*
두 정수 사이의 합
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

제한 조건
a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
a와 b의 대소관계는 정해져있지 않습니다.
입출력 예
a	b	return
3	5	12
3	3	3
5	3	12
*/


function solution(a, b) {
    let answer = 0;
    if(a <= b) {
        for(let i = a; i <= b; i++) {
            answer += i;
        } 
        } else if(a > b) {
            for(let j = b; j <= a; j++) {
                answer += j;
            }
    
        }
    return answer;
}


// 파라미터 재설정, Math.mim & Math.max 메서드 사용
function adder(a, b, s = 0){ // 리턴할 값 s를 기본값 0인 파라미터로 지정해둠
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
    // Math.min(a,b) -> 파라미터로 넘겨진 a,b중 0 이상의 가장 작은 수를 리턴
    // Math.max(a,b) -> 파라미터로 넘겨진 a,b중 0 이상의 가장 작은 큰 수를 리턴
    // Math.min, max 메소드는 배열에 사용할 수 없다. 따라서 배열에 있는 수에 적용하려면
    //[...arr]  처럼 스프레드 문법을 사용해야한다.
    return s;
  }

