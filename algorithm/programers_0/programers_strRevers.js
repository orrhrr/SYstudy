/* 
문자열 뒤집기
문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_string의 길이 ≤ 1,000
입출력 예
my_string	return
"jaron"	"noraj"
"bread"	"daerb"
*/

function solution(my_string) {
    var answer = '';
    
    for(i = 0; i < my_string.length; i++) {
        answer += my_string[my_string.length - i -1]
        console.log(answer);
    }
    return answer;
}

// 스프레드 문법

function solution(my_string) {
    var answer = [...my_string].reverse().join(""); 
    // 스프레드 문법(...)을 사용하면 배열 요소, 객체, 문자열을 하나씩 쪼개서 리턴해줌
    // [...my_string 문법 사용하면 answer = ['문','자','가','쪼','개','짐']의 형식으로 저장
    // reverse() 메소드는 배열 내 값을 역순으로 재배열시킴.
    // join 메소드에 ""값을 주면 하나의 문자열로 만들어줌.
    /*
     join 예시

    const arr = ['바람', '비', '물'];

    console.log(arr.join());
    // 바람,비,물

    console.log(arr.join(''));
    // 바람비물

    console.log(arr.join('-'));
    // 바람-비-물
    */

    return answer;
}