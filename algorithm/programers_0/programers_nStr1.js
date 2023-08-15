// 문자열 뒤의 n글자

function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++) {
        if(i >= my_string.length - n ){
            answer += my_string[i];
        }
      //  자른문자열 길이 = 총문자길이 - n
      // answer.length = my_string.length-n;
        
    }

    return answer;
}

console.log(solution('jqjkd',2));
