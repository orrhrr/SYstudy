/*
문자열 정수의 합
문제 설명
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
3 ≤ num_str ≤ 100
입출력 예
num_str	result
"123456789"	45
"1000000"	1
*/

function solution(num_str) {
    var answer = 0;
    let numArr = num_str.split('');
    
    for(let i = 0 ; i < num_str.length; i++) {
        numArr[i] = Number(num_str[i]);
    }
    answer = +(numArr.reduce((acc,cur) => acc + cur))
    return answer;
}


// 스프레드 문법과 축약식 사용
function solution(num_str) {
    return [...num_str].reduce((a, c) => a + +c, 0)
}