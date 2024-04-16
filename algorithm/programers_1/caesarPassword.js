function solution(s, n) {
  var answer = "";
  const limit = 26;

  const A_arr = Array.from({ length: limit }, (v, i) =>
    String.fromCharCode(i + 65)
  );

  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    } else {
      index = A_arr.indexOf(s[i].toUpperCase());
      let nextIndex;
      if (index + n >= limit) {
        nextIndex = index + n - limit;
      } else {
        nextIndex = index + n;
      }
      if (s[i] === s[i].toUpperCase()) {
        answer += A_arr[nextIndex];
      } else {
        answer += A_arr[nextIndex].toLowerCase();
      }
    }
  }

  return answer;
}

// 다른사람의 풀이
function solution2(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    if (text == " ") {
      answer += " ";
      continue;
    }
    var textArr = upper.includes(text) ? upper : lower;
    var index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}
