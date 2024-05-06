// 추억 점수

function solution(name, yearning, photo) {
  // name과 yearning을 객체로 만들기
  // photo 배열을 돌면서 name이 있으면 해당 키의 값을 sum변수에 담기
  // photo 2차원 배열의 각 배열들 순회를 마칠때마다 sum값을 answer.push
  var answer = [];
  const obj = {};
  name.forEach((element, i) => {
    obj[name[i]] = yearning[i];
  });
  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (obj[photo[i][j]]) {
        sum += obj[photo[i][j]];
      }
    }
    answer.push(sum);
  }

  return answer;
}

// 다른 사람의 풀이
function solution2(name, yearning, photo) {
  return photo.map((v) =>
    v.reduce((a, c) => (a += yearning[name.indexOf(c)] ?? 0), 0)
  );
}
