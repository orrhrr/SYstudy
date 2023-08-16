/*
뒤에서 5등 위로
문제 설명
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
6 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 100
입출력 예
num_list	result
[12, 4, 15, 46, 38, 1, 14, 56, 32, 10]	[15, 32, 38, 46, 56]
*/

function solution(num_list) {
    var answer = [];
    num_list = num_list.sort((a,b) => a - b);
    for(let i = 5; i < num_list.length; i++) {
        answer.push(num_list[i]);
    }
    console.log(answer)
    return answer;
}


// slice 함수 사용
function solution(num_list) {
    var answer = [];
    return answer = num_list.sort((a, b) => {return a - b;}).slice(5);
}