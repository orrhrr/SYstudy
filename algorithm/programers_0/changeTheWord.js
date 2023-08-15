/*
특정한 문자를 대문자로 바꾸기
문제 설명
영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	alp	result
"programmers"	"p"	"Programmers"
"lowercase"	"x"	"lowercase"
*/


function solution(my_string, alp) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
            
        if(my_string[i] === alp){
            answer += my_string[i].toUpperCase();
        } else {
            answer += my_string[i];
        }
        
}
    return answer;
}

solution("programmers", "p");


// replaceAll 메소드 사용
// replaceAll() 메서드는 pattern의 모든 일치 항목이 replacement로 대체된 새 문자열을 반환
// 사용예 : "aabbcc".replaceAll("b", "."); --->> 'aa..cc' // b문자열이 .문자열로 변환된 값을 반환

const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())