/*
순서 바꾸기
문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠 n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 9
1 ≤ n ≤ num_list의 길이
입출력 예
num_list	n	result
[2, 1, 6]	1	[1, 6, 2]
[5, 2, 1, 7, 5]	3	[7, 5, 5, 2, 1]
*/

function solution(num_list, n) {
    var answer = num_list.splice(n)
    for(let i = 0; i < n; i++) {
        answer.push(num_list[i])       
    }
    return answer;
}

// unshift 메서드 사용
function solution(num_list, n) {
    num_list.unshift(...num_list.splice(n)); //num_list의 맨앞에 n부터 자른 배열을 삽입
    return num_list;
  }