/*
실습 설명
리스트 함수를 활용하여 아래의 지시 사항을 따르세요.

numbers라는 빈 리스트를 만들고 리스트를 출력한다.
append를 이용해서 numbers에 1, 7, 3, 6, 5, 2, 13, 14를 순서대로 추가한다. 그 후 리스트를 출력한다.
numbers 리스트의 원소들 중 홀수는 모두 제거한다. 그 후 다시 리스트를 출력한다.
numbers 리스트의 인덱스 0 자리에 20이라는 수를 삽입한 후 출력한다.
numbers 리스트를 정렬한 후 출력한다.
실습 결과
[]
[1, 7, 3, 6, 5, 2, 13, 14]
[6, 2, 14]
[20, 6, 2, 14]
[2, 6, 14, 20]

*/

let number = [];

console.log(number);


number.push(1,7,3,6,5,2,13,14);

console.log(number);


for(let i = 0; i < number.length; i++) {
    if(number[i] % 2 !== 0) {
        number.splice(i,1);
        i--;
    }
}

console.log(number);


number.unshift(20);

console.log(number);


number.sort(function(a, b){
    if (a > b) return 1; // 첫번째 인자가 두번째 인자보다 크면 1리턴 (앞순서)
    if (a < b) return -1; // 첫번째 인자가 두번째 인자보다 작으면 -1 리턴 (뒷순서)
    return 0;
});

console.log(number);