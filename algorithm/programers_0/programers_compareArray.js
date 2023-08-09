
/*
배열 비교하기
문제 설명
이 문제에서 두 정수 배열의 대소관계를 다음과 같이 정의합니다.

두 배열의 길이가 다르다면, 배열의 길이가 긴 쪽이 더 큽니다.
배열의 길이가 같다면 각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
두 정수 배열 arr1과 arr2가 주어질 때, 위에서 정의한 배열의 대소관계에 대하여 arr2가 크다면 -1, arr1이 크다면 1, 두 배열이 같다면 0을 return 하는 solution 함수를 작성해 주세요.
*/


function solution(arr1, arr2) {

   if(arr1.length > arr2.length) return 1;
    if(arr1.length < arr2.length) return -1;
    
        let arr1sum = 0;
        let arr2sum = 0;
                
    if(arr1.length === arr2.length) {
        
        for(let i = 0; i < arr1.length; i++) {
            arr1sum += arr1[i]
        }
        
        for(let i = 0; i < arr2.length; i++) {
            arr2sum += arr2[i]
           
        } 
        
        if(arr1sum > arr2sum) return 1;
        if(arr1sum < arr2sum) return -1;
        return 0;
    
    }  
    return ;
}



// 다른 답안

function solution(arr1, arr2) {
    var answer = 0;
    if(arr1.length !== arr2.length){ // 두 배열의 길이가 같지 않을 경우
        answer = arr1.length > arr2.length ? 1 : -1; 
    }else { // 두 배열의 길이가 같을 경우
        answer = arr1.reduce((a,b)=>a+b) > arr2.reduce((a,b)=>a+b) ? 1 : arr1.reduce((a,b)=>a+b) == arr2.reduce((a,b)=>a+b) ? 0 : -1;  // 이중 삼항조건연산자와 reduce 메서드 사용
        // arr1 요소들의 합이 arr2 요소들의 합보다 크면 1 반환
        // 아니면 arr1 요소들의 합이 arr2 요소들의 합을 다시 구하고 서로 같으면 0, 아니면 -1 반환
    }
    return answer;
}

