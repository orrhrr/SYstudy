/*
한 번만 등장한 문자
문제 설명
문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

제한사항
0 < s의 길이 < 1,000
s는 소문자로만 이루어져 있습니다.
입출력 예
s	result
"abcabcadc"	"d"
"abdc"	"abcd"
"hello"	"eho"
*/


function solution(s) {
    let ans = [];
    
    let sArr = s.split("");
    
    sArr.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){ 
            // indexOf item과 lastIndexOf item이 같으면
            // 해당 배열에서 item은 한번밖에 없음.
            // lastIndexOf의 값도 indexOf처럼 순서대로 체크한 값임
            ans.push(item); // 해당 값을 새 배열에 담아서
        }
    })
    
    return ans.sort().join(""); //문자열로 변환하여 반환
}


