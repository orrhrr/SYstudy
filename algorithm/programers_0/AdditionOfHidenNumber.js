
/*
숨어있는 숫자의 덧셈 (1)
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
입출력 예
my_string	result
"aAb1B2cC34oOp"	10
"1a2b3c4d123"	16
*/

function solution(my_string) {
    let arr =  my_string.split('').map((el) => Number(el));
    let number = arr.filter((el) => el);
    
    return number.reduce((acc,cur) => acc + cur)

}


// 문자열을 펼침 + reduce 메서드와 삼항연산자로 조건연산도 한번에 
function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}