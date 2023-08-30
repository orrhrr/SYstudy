/*
k의 개수
문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ i < j ≤ 100,000
0 ≤ k ≤ 9
입출력 예
i	j	k	result
1	13	1	6
10	50	5	5
3	10	2	0
*/

function solution(i, j, k) {
    var answer = 0;
    let arr = [];
    for(let start = i ; i <= j; i++ ){
        arr.push(i);
    }

    arr = arr.map((el) => String(el)).join("").split('').filter((el) => el.includes(k+''));
  
    answer = arr.length

    
    return answer;
}

// 다른풀이. split(k)로 한번에 문자열 자를 수 있음!
function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split(k).length-1;
    // j-i+1 길이만큼의 배열을 생성하고 i값으로 채운다.
    // i값부터 인덱스를 더해서 문자열로 만듦(인덱스는 0부터 1씩 증가)
    // split(k)로 k를 기준으로 문자열을 잘라낸 배열리턴(잘려나간 하나의 요소가 생길때마다 k가 있던 것으로 생각할 수 있음)
    // 해당배열의 요소 개수는 항상 k이 개수보다 1이 많아지므로 배열길이에서 -1
}