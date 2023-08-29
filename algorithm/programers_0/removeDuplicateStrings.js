/*
중복된 문자 제거
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string ≤ 110
my_string은 대문자, 소문자, 공백으로 구성되어 있습니다.
대문자와 소문자를 구분합니다.
공백(" ")도 하나의 문자로 구분합니다.
중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
입출력 예
my_string	result
"people"	"peol"
"We are the world"	"We arthwold"
*/


function solution(my_string) {
    return my_string.split('').filter((el,i,arr) => arr.indexOf(el) === i).join('');
    
}


// Set 클래스 사용
function solution(my_string) {
    return [...new Set(my_string)].join('');

    // new 생성자 함수로 Set클래스를 만듦
    // 세트(Set)는 자바스크립트에서 고유한 값들의 집합을 다루는 자료구조
    // Set는 순서가 없다. (인덱스 존재하지 않음)
    // 중복 데이터를 허용하지 않는다.
    // Set에 대한 설명 링크 : https://www.daleseo.com/js-set/
}