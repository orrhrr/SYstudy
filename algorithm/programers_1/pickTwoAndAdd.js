// 두 개 뽑아서 더하기
/*
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
*/
function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) continue;
      // 두번째 for 문에서 let j = i + 1로 하면
      //  if(i === j ) continue; 부분을 삭제할 수 있다.
      // 첫번쨰 for문(i)에서 짝지어진 숫자와는 또 다시 짝 짓지 않아도 되기 때문
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(answer)];
  answer = answer.sort((a, b) => a - b);
  return answer;
}

// 다른 사람의 풀이
function solution(numbers) {
  var answer = [];
  //들어온 배열의 요소를 확인한다.
  //배열의 두개 요소를 뽑아 덧셈한 모든 경우의 수를 구한다.
  //중복된 값은 제거한다.
  //배열값을 리턴한다.
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
