// 문자열 내 마음대로 정렬하기
/*
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/
function solution(strings, n) {
  var answer = [];

  answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    } else if (a[n] > b[n]) {
      return 1;
    } else {
      return -1;
    }
  });
  return answer;
}

// 다른 사람의 풀이

function solution2(strings, n) {
  //내부 인덱스를 가지고 비교하는데, 내부 character 가 같으면 전체 string 을 비교하고 내부 character 가 다르면 내부 character 을 비교한다.
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

function solution3(strings, n) {
  var answer = [];
  for (var i = 0; i < strings.length; i++) {
    var chu = strings[i][n];
    strings[i] = chu + strings[i];
  }
  strings.sort();
  for (var j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    answer.push(strings[j]);
  }

  return answer;
}
