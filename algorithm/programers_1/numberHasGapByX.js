/*
x만큼 간격이 있는 n개의 숫자
문제 설명
함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

제한 조건
x는 -10000000 이상, 10000000 이하인 정수입니다.
n은 1000 이하인 자연수입니다.
입출력 예
x	n	answer
2	5	[2,4,6,8,10]
4	3	[4,8,12]
-4	2	[-4, -8]
*/


function solution(x, n) {
    var answer = [];
    
    for(let i = 0; i < n ; i++) {
        answer[i] = x * (i + 1);
    }
    return answer;
}



// push 메소드 사용
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}


// fill, map 메소드 사용
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)

    // Array(n) -> n개 만큼의 요소 개수를 가진 배열 만들기
    // fill(x) -> x로 채울건데 (x,n이 각각 2,4라면 [2,2,2,2]라는 배열이 만들어짐)
    // map((v, i) => (i + 1) * v) -> 위 배열의 현재값을 v라고 할거고, 배열의 인덱스를 하나씩 돌아가면서 (인덱스+1) * 현재값을 한 값으로 채울거야
}

