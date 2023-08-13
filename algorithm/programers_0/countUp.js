/*
카운트 업
문제 설명
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ start ≤ end ≤ 50
입출력 예
start	end	result
3	10	[3, 4, 5, 6, 7, 8, 9, 10]
*/

function solution(start, end) {
    var answer = [];
    
    for(let i = 0; i <= end-start; i++) {
        answer[i] = start + i
    }
    return answer;
}

// push 메소드 사용

function solution(start, end) {
    var answer = [];

    for(let i = start; i<=end ; i++){
        answer.push(i);
    }

    return answer;
}