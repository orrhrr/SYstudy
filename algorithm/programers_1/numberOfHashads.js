/*
하샤드 수
문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건
x는 1 이상, 10000 이하인 정수입니다.
입출력 예
x	return
10	true
12	true
11	false
13	false
*/


function solution(x) {
    let answer = 0;
       let sum = 0;
       x = String(x);
       for(let i = 0; i < x.length ; i++) {
           
           sum += Number(x[i]);
           console.log(x);
           
          answer = x % sum === 0 ? true : false
       }
       return answer;
   
   }



// 속도 우선 (형변환 없이 처리)
function solution(x) {
    let num = x;
    let sum = 0;
    do {
        sum += x%10; // x의 각 자릿수를 더한 것을 sum 변수에 누적합산
        x = Math.floor(x/10); // x를 한자리 감소시키고 소숫점 없애기
    } while (x>0); //x가 한자리 수가 될때까지 반복

    return !(num%sum); // x를 sum으로 나눈 나머지가 있으면(0이상) False, 나머지가 없으면(0) True 반환 
}