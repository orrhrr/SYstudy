// 행렬의 덧셈
/*
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
*/

function solution(arr1, arr2) {
  var answer = Array(arr1.length);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = Array();
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

// 다른 사람의 풀이

function solution2(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
