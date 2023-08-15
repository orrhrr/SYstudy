/*
rny_string
문제 설명
'm'과 "rn"이 모양이 비슷하게 생긴 점을 활용해 문자열에 장난을 하려고 합니다. 문자열 rny_string이 주어질 때, rny_string의 모든 'm'을 "rn"으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ rny_string의 길이 ≤ 100
rny_string은 영소문자로만 이루어져 있습니다.
입출력 예
rny_string	result
"masterpiece"	"rnasterpiece"
"programmers"	"prograrnrners"
"jerry"	"jerry"
*/


function solution(rny_string) {
    let arr = rny_string.split("");
    
    for(let i = 0; i < rny_string.length; i++) {
        if(rny_string[i] === 'm') {
            arr.splice(i,1,'rn');
        }
       
    }
    return  arr.join("");
}


// m 을 rn으로 바꾼 뒤 다른 글자를 하나씩 붙이기
function solution(rny_string) {
    let arr = rny_string.split("");
    let str = "";
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === "m"){
            str += "rn";
        }else{
            str += arr[i];
        }   
    }
    return str;
}