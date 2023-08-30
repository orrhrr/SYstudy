/*
2차원으로 만들기
문제 설명
정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

num_list	n	result
[1, 2, 3, 4, 5, 6, 7, 8]	2	[[1, 2], [3, 4], [5, 6], [7, 8]]
*/

function solution(num_list, n) {
    const answer = [];
    
    for(let i = 0; i < num_list.length / n; i++) { // 원본 배열에서 n만큼 나눈만큼 반복
        answer.push(num_list.slice(i * n, i * n + n))
        // slice메서드는 잘라낸 새 배열을 반환(얕은 복사)
        // i * n부터 i * n + n(나온 수에서 -1한만큼의 인덱스 까지)

    }
    
    return answer;
}

// 생성자함수 (Array()는 new를 붙이거나 붙이지 않고 호출할 수 있습니다. 둘 다 새 Array 인스턴스를 생성합니다.)
function solution(num_list, n) {
    return Array(num_list.length / n).fill([]).map(() => num_list.splice(0, n))
    // 원본배열 길이 / n만큼의 길이를 가진 새 배열 생성
    // 빈배열로 채우기
    // map 메서드를 통해 원본배열에서 0부터 n (-1)까지 인덱스의 값을 잘라낸 뒤, 새 배열 요소값으로 리턴
    // splice 메서드를 사용했기 때문에 값을 잘라낼 때마다 그 결과가 원본에 반영됨
    // 따라서 0부터 인덱스를 시작해야 원본 배열의 값을 순서대로 넣을 수 있음
}