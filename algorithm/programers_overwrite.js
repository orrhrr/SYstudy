// 문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.


// for문
function solution(my_string, overwrite_string, s) {
    let answer = '';
    for(let i = 0 ; i < my_string.length; i++){
        if(i !== s){
            answer += my_string[i];
        } else if (i === s) {
            for(j = 0; j < overwrite_string.length; j++){
            answer += overwrite_string[j]; 
            i++; // overwrite_string 인덱스 만큼 my_string 인덱스를 옮겨놓기
            } 
            i -= 1 ;  // for문 증감식을 통해 i++이 진행되므로 그 전에 i값을 1 줄여준다.
        } 
          
    } return answer;
}

solution("He11oWor1d", "lloWorl", 2);



// while문
function solution(my_string, overwrite_string, s) {
    let i = 0;
    let answer = "";
    while (i < my_string.length) { 
        if(i !== s) {
            answer += my_string[i];
        } else if(i === s) {
            answer += overwrite_string;
            i += overwrite_string.length - 1; // overwrite_string 인덱스 만큼 my_string 인덱스를 옮겨놓기
        } 
        i++; 
    } return answer;
} 

solution("He11oWor1d", "lloWorl", 2);
