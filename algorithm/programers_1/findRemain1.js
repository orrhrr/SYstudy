/*
나머지가 1이 되는 수 찾기
문제 설명
자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

제한사항
3 ≤ n ≤ 1,000,000
입출력 예
n	result
10	3
12	11
*/

function solution(n) {
    var answer = 0;
    
    for(let i = n; i >= 0; i--) {
        if(n % i === 1) answer = i;
    }
    return answer;
}

// return문 위치 변경, 증감식을 +로

const solution = function(n) {
    for (let i=0; i<n; i++){
        if (n%i == 1){
            return i
        }
    }
}

// 파라미터 재설정, 기본값 설정, while문 사용
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}