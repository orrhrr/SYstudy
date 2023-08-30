/*
진료 순서 정하기
문제 설명
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
중복된 원소는 없습니다.
1 ≤ emergency의 길이 ≤ 10
1 ≤ emergency의 원소 ≤ 100
입출력 예
emergency	result
[3, 76, 24]	[3, 1, 2]
[1, 2, 3, 4, 5, 6, 7]	[7, 6, 5, 4, 3, 2, 1]
[30, 10, 23, 6, 100]	
*/

function solution(emergency) {
    let sorted = emergency.slice().sort((a,b)=>b-a);
    // 본배열을 얕은복사하여 내림차순으로 정렬 
    return emergency.map(v=>sorted.indexOf(v)+1);
    // 본배열을 순회하면서 복사한 배열과 같은 값을 가진 인덱스를 뽑아 +1 해준다.(인덱스는 0부터 시작이니깐)
}

// 다른풀이
function solution(emergency) {
    let sort = [...emergency].sort((a, b) => b - a); // slice대신 스프레드문법 사용
    return emergency.map(k => {
        const queue = sort.findIndex(v => v === k);

        return queue + 1
    });
}