/*
삼각형의 완성조건 (1)
문제 설명
선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
삼각형의 세 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return하도록 solution 함수를 완성해주세요.

제한사항
sides의 원소는 자연수입니다.
sides의 길이는 3입니다.
1 ≤ sides의 원소 ≤ 1,000
입출력 예
sides	result
[1, 2, 3]	2
[3, 6, 2]	2
[199, 72, 222]	1
*/

function solution(sides) {
    var answer = 0;
   let maxNumIndex = sides.indexOf(Math.max(...sides));
    for(let i = 0; i < sides.length;i++) {
    if(maxNumIndex === 0) {
       answer = sides[1] + sides[2] > sides[0] ? 1 : 2
    }
    if(maxNumIndex === 1) {
       answer = sides[0] + sides[2] > sides[1] ? 1 : 2
    }
    if(maxNumIndex === 2) {
       answer = sides[0] + sides[1] > sides[2] ? 1 : 2
    }
    }
    return answer;
}


// sort 메소드 사용

function solution(sides) {
    sides = sides.sort((a,b) => a-b)  // 배열을 오름차순으로 정렬하면 가장 큰 수가 마지막 인덱스 값이 됨
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
