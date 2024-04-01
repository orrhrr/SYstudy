function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    count % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}

// 다른 사람의 풀이
function solution2(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    // i의 제곱근이 정수이면 약수의 개수가 홀수이다.
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
