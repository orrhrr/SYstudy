// 숨어있는 숫자의 덧셈2

/*
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  var answer = 0;
  let string = "";
  for (let i = 0; i < my_string.length; i++) {
    string += isNaN(my_string[i]) ? "s" : my_string[i];
  }

  string = string.split("s");
  for (let i = 0; i < string.length; i++) {
    answer += string[i] * 1;
  }

  return answer;
}

// 다른 사람의 풀이
function solution2(n) {
  let answer = "";
  for (let i = 0; i < n.length; i++) {
    if (Number.isInteger(+n[i])) {
      answer += n[i];
    } else {
      answer += " ";
    }
  }
  return answer.split(" ").reduce((acc, cur) => (acc += +cur), 0);
}
