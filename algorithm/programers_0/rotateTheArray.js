/*배열 회전시키기
문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ numbers의 길이 ≤ 20
direction은 "left" 와 "right" 둘 중 하나입니다.
입출력 예
numbers	direction	result
[1, 2, 3]	"right"	[3, 1, 2]
[4, 455, 6, 4, -1, 45, 6]	"left"	[455, 6, 4, -1, 45, 6, 4]
*/
function solution(numbers, direction) {
    var answer = numbers.slice(0);
    if(direction === 'right') {
        answer.unshift(numbers[numbers.length -1]);
        answer.pop();
    } else {
        answer.shift();
        answer.push(numbers[0])
    }
    return answer;
}


// unshift,pop,push,shift 한번에 사용하기
function solution(numbers, direction) {
    var answer = [];

    if ("right" == direction) {
        numbers.unshift(numbers.pop());
    } else {
        numbers.push(numbers.shift());
    }

    answer = numbers;

    return answer;
}