/*
마지막 두 원소
문제 설명
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ num_list의 길이 ≤ 10
1 ≤ num_list의 원소 ≤ 9
입출력 예
num_list	result
[2, 1, 6]	[2, 1, 6, 5]
[5, 2, 1, 7, 5]	[5, 2, 1, 7, 5, 10]
*/

function solution(num_list) {
    
    if(num_list[num_list.length -1] > num_list[num_list.length- 2]){
        num_list.push(num_list[num_list.length -1] - num_list[num_list.length- 2])
    } else {
        num_list.push(num_list[num_list.length -1] * 2)
    }
return num_list;
}

// 스프레드 배열과 reverse 메서드 사용
// 배열 꺼꾸로 하고 구조분해할당후 0번1번째 크기비교후 배열풀어서 조건 추가
function solution(num_list) {
    const [a, b] = [...num_list].reverse(); // 새 배열에 num_list를 뒤집은 배열을 할당 (마지막과 마지막 직전 값)
    return [...num_list, a > b ? (a-b):a*2]; //num_list 요소들과 a,b를 비교하여 조건에 맞는 식에 맞는 값을 새 배열에 추가하여 반환
}


// num_list.length를 변수에 할당하여 가독성을 높임
function solution(num_list) {
    numlen = num_list.length;
    if(num_list[numlen-2] < num_list[numlen-1]) 
        num_list.push(num_list[numlen-1] - num_list[numlen-2])
    else num_list.push(num_list[numlen-1]*2)
    return num_list;
}
