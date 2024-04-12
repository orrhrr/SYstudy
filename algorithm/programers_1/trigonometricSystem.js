// 3진법 뒤집기
/*
 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
 */

function solution(n) {
  var answer = 0;
  const three = n.toString(3);
  let reverse = three.split("");
  reverse = reverse.reverse();
  reverse = reverse.join("");
  answer = parseInt(reverse, 3);

  return answer;
}

// 다른 사람의 풀이

// 한줄로
const solution2 = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
// 내장함수 사용안하고 풀기
function solution3(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}
