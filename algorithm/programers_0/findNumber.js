/*
숫자 찾기
문제 설명
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

제한사항
0 < num < 1,000,000
0 ≤ k < 10
num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.
입출력 예
num	k	result
29183	1	3
232443	4	4
123456	7	-1
*/

function solution(num, k) {
    return [...String(num)].indexOf(String(k)) !== -1
         ? [...String(num)].indexOf(String(k)) +1
     : -1
 
 }


 // 다른풀이
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
    // 정수 num을 문자열 배열로 만든 뒤
    // map 메서드로 k가 포함된 인덱스가 있으면 해당 인덱스에 +1한 값을, 없으면 -1을 리턴
}