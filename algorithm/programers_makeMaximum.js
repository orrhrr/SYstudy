/*
최댓값 만들기 (1)
문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ numbers의 원소 ≤ 10,000
2 ≤ numbers의 길이 ≤ 100
입출력 예
numbers	result
[1, 2, 3, 4, 5]	20
[0, 31, 24, 10, 1, 9]	744
*/

function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b) => a - b);
   answer= (numbers[numbers.length -1]) * (numbers[numbers.length -2]);
    return answer;
}

// 바로 리턴하기 (내림차순)

function solution(numbers) {
    numbers.sort((a,b)=>b-a); // sort 메소드로 내림차순 변경. 
    // 현재 numbers 배열은 내림차순으로 정렬되어 있다. 
    // sort는 원본 배열을 수정하여 리턴한다. 
    return numbers[0]*numbers[1]; // 원본 배열 내 0인덱스는 가장 큰숫자, 1인덱스는 그 다음으로 큰 숫자이다.
}