/*
문자열 정렬하기 (1)
문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

제한사항
1 ≤ my_string의 길이 ≤ 100
my_string에는 숫자가 한 개 이상 포함되어 있습니다.
my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -
입출력 예
my_string	result
"hi12392"	[1, 2, 2, 3, 9]
"p2o4i8gj2"	[2, 2, 4, 8]
"abcde0"	[0]
*/

function solution(my_string) {
    var answer = [];
    my_string = my_string.split('');
    for(let i = 0; i < my_string.length; i++){
        my_string = my_string.sort((a,b) => a -b)
       my_string[i] = my_string[i] * 1; // 숫자로 변환
        my_string[i] = my_string[i] + ''; // 다시 문자로 변환 -> 숫자로 변환할 수 없었던 요소들은 "NaN"으로 바뀜
    }
    
    
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] !== "NaN") answer.push(Number(my_string[i]))
    }
    
    return answer.sort((a,b) => a - b);
}


// filter와 map 메서드 사용
function solution(my_string) {
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}