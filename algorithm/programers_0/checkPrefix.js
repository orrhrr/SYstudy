/*

접두사인지 확인하기
문제 설명
어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 예를 들어, "banana"의 모든 접두사는 "b", "ba", "ban", "bana", "banan", "banana"입니다.
문자열 my_string과 is_prefix가 주어질 때, is_prefix가 my_string의 접두사라면 1을, 아니면 0을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
1 ≤ is_prefix의 길이 ≤ 100
my_string과 is_prefix는 영소문자로만 이루어져 있습니다.
입출력 예
my_string	is_prefix	result
"banana"	"ban"	1
"banana"	"nan"	0
"banana"	"abcd"	0
"banana"	"bananan"	0

*/

function solution(my_string, is_prefix) {
    let arr = [];
    
    for(let i = 0; i < my_string.length; i++) {
        arr.push(my_string.substring(0, 1 + i))
    } 
    
  return arr.includes(is_prefix) ? 1 : 0;

}

// is_prefix 문자열의 길이를 비교하기1
function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
    // 접두사는 항상 0번 인덱스부터 시작
    // 0번 인덱스부터 is_prefix 문자열 만큼 잘라내어, 그 단어가 is_prefix인지 체크
}

// is_prefix 문자열의 길이를 비교하기1 (startsWith 메소드 사용)
// startsWith() 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 true 혹은 false로 반환
//startsWith(searchString, position)  position은 탐색할 인덱스위치, 기본값은 0
function solution(my_string, is_prefix) {
    return +my_string.startsWith(is_prefix); // true, false 값을 +연산자로 숫자형으로 변경후 리턴
  }