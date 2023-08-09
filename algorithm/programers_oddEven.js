/*
짝수 홀수 개수
문제 설명
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

제한사항
1 ≤ num_list의 길이 ≤ 100
0 ≤ num_list의 원소 ≤ 1,000
입출력 예
num_list	result
[1, 2, 3, 4, 5]	[2, 3]
[1, 3, 5, 7]	[0, 4]
*/



function solution(num_list) {
    var answer = [];
    let count1 = 0;
    let count2 = 0;
     
    for(i = 0; i < num_list.length; i++) {
    
        
        if(num_list[i] % 2 === 0) {
            count1++;
        } else {
            count2++;
        }
    }
        answer[0] = count1;
        answer[1] = count2;
        
    return answer;
}



// 인덱스를 나머지 연산자로 구하기

function solution(num_list) {
    var answer = [0,0]; // 배열 길이와 값을 미리 지정.

    for(let a of num_list){
        answer[a%2] += 1; 
        // 반환할 배열의 인덱스 = 주어진 배열의 요소를 2로 나눈 나머지로 짝수(0번인덱스), 홀수(1번인덱스)로 구함.
        // 각 인덱스에 1씩 더해 카운트하기
    }

    return answer;
}

