
/*
n개 간격의 원소들
문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
5 ≤ num_list의 길이 ≤ 20
1 ≤ num_list의 원소 ≤ 9
1 ≤ n ≤ 4
*/

function solution(num_list, n) {
    var answer = [];
    
    for(let i = 0; i < num_list.length; i += n){
        answer.push(num_list[i]);
        
    }
    
    return answer;
}

// filter 메소드 사용
// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
//  arr.filter(callback(element[, index[, array]])[, thisArg])

// 1. num_list의 인덱스를 n으로 나누었을 때 나머지가 0인 인덱스의 값만 추출 (n의 배수인 인덱스 값 추출)
// 부정연산자를 사용하여 숫자값을 Truthy, Falsy 값으로 변환한 뒤 Falsy 값만을 추출
// 언더바로 표시한 인자는 사용하지 않는 변수라는 의미를 표현
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n));


// 2. num_list의 인덱스를 n으로 나누었을 때 나머지가 0인 인덱스의 값만 추출 (n의 배수인 인덱스 값 추출)
const solution = (arr, d) => arr.filter((_, idx) => idx % d === 0)