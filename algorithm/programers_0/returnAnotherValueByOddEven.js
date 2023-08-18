/*
홀짝에 따라 다른 값 반환하기
문제 설명
양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ n ≤ 100
입출력 예
n	result
7	16
10	220
*/

function solution(n) {
    var answer = 0;
 
    if(n % 2 !== 0) {
        for(let i = 1; i <= n; i++) {
         if(i % 2 !== 0) answer += i;
        }
    } else {
        for(let i = 1; i <= n; i++) {
            if(i % 2 === 0) answer += i*i
        }
    }    
     return answer;
    }
   