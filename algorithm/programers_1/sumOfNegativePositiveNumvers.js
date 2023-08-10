/*
음양 더하기
문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
입출력 예
absolutes	signs	result
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0
*/

function solution(absolutes, signs) {
    var answer = 0;
    for(i = 0; i < absolutes.length;i++){
        
        if(signs[i] === false) absolutes[i] = absolutes[i] * -1;
        
        answer += absolutes[i];
    }   
    return answer;
}


// reduce사용
function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

/* reduce 사용법
const numbers = [1, 2, 3, 4];

numbers.reduce((누산값, 현재요소값, 현재요소의index, 현재배열) => {
  return 다음누산값;
}, 초기누산값);

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, el, i) => {
  console.log(`${i}번째 콜백함수`) // 0, 1, 2, 3
  console.log(`acc: ${acc}`); // 0 , 1, 3, 6
  console.log(`el: ${el}`); // 1, 2, 3, 4

  return el + acc;
}, 0);


console.log(`sum: ${sum}`); // 10
*/


// 부호값(sings)를 조건 자체로 이용
function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
        // signs가 true면 answer에 바로 정수 값을 더하기
        // signs가 false면 answer값에서 정수 값을 빼기
    }
    return answer;
}