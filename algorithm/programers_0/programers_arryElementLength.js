
/*
배열 원소의 길이
문제 설명
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ strlist 원소의 길이 ≤ 100
strlist는 알파벳 소문자, 대문자, 특수문자로 구성되어 있습니다.
입출력 예
strlist	result
["We", "are", "the", "world!"]	[2, 3, 3, 6]
["I", "Love", "Programmers."]	[1, 4, 12]
*/ 

function solution(strlist) {
    var answer = [];
    for(let i = 0; i < strlist.length; i++) {
        answer[i] = strlist[i].length;
    }
    return answer;
}


// map 메소드 활용하기

function solution(strlist) { // strlist의 요소에 접근하여 각 요소의 길이를 값으로 갖는 새로운 배열 리턴
    return strlist.map((el) => el.length)
}