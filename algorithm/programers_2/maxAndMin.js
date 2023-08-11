/*
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

제한 조건
s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
입출력 예
s	return
"1 2 3 4"	"1 4"
"-1 -2 -3 -4"	"-4 -1"
"-1 -1"	"-1 -1"
*/

function solution(s) {
    var answer = '';
    s = s.split(' '); // 문자열 공백을 제거하여 배열로 만듦
    s = s.sort((a,b) => a - b); // 배열을 오름차순으로 정렬
    
    answer += s[0] // 최소값을 첫 answer문자열에 넣고 
    answer += " " + s[s.length - 1]; // 그다음엔 공백을 포함한 최대값을 answer문자열에 넣기
    
    return answer;
}


// Math.min,max를 활용하여 축약하기 

function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}
