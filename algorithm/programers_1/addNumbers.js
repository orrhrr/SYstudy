// 없는 숫자 더하기
/* 
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  let answer = 0;
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let sameArr = list.map((item) => numbers.find((number) => number === item));
  sameArr.forEach((number, index) => {
    if (number === undefined) answer += index;
  });

  return answer;
}

function solution2(numbers) {
  let answer = 0;
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let sortedNumbers = numbers.sort((a, b) => a - b);
  let startIndex = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i] === sortedNumbers[startIndex]) {
      startIndex = startIndex + 1;
    } else {
      answer += list[i];
    }
  }
  return answer;
}

// 다른 사람 풀이

function solution3(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
