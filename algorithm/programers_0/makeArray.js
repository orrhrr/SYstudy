/*
배열 만들기 1
문제 설명
정수 n과 k가 주어졌을 때, 1 이상 n이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ n ≤ 1,000,000
1 ≤ k ≤ min(1,000, n)
입출력 예
n	k	result
10	3	[3, 6, 9]
15	5	[5, 10, 15]
*/

function solution(n, k) {
    var answer = [];
    for(let i = n; i >= k; i --) {
        if (i % k === 0) answer.push(i);
    }
    return answer.sort((a,b) => a - b);
}


// for문 증감식으로 배수 구하기
function solution(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}