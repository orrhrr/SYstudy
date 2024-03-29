// 제일 작은 수 제거하기

/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
*/

function solution(arr) {
  let copyArr = arr.slice(0);
  const minValue = Math.min(...copyArr);
  const minIndex = copyArr.indexOf(minValue);
  copyArr.splice(minIndex, 1);
  if (copyArr.length === 0) copyArr.push(-1);

  return copyArr;
}

// Math.min 함수를 for문으로 변환하면?
let minValue = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (minValue > arr[i]) minValue = arr[i];
}

// 다른 사람의 풀이
function solution2(arr) {
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((i) => i !== min) : [-1];
}
