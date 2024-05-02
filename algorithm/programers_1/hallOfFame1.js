// 명예의전당(1)
/*
"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다. 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다. k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.

이 프로그램에서는 매일 "명예의 전당"의 최하위 점수를 발표합니다. 예를 들어, k = 3이고, 7일 동안 진행된 가수의 점수가 [10, 100, 20, 150, 1, 100, 200]이라면, 명예의 전당에서 발표된 점수는 아래의 그림과 같이 [10, 10, 10, 20, 20, 100, 100]입니다.
*/

function solution(k, score) {
  var answer = [];
  let kArray = [];
  // kArray의 길이를 넘어서면
  // kArray의 값중 가장 작은 점수와 현재 score 값을 비교
  // kArray의 값중 가장 작은 점수보다 score값이 크면 score값으로 대체
  // kArray에 score를 저장한 뒤 내림차순으로 정렬
  // 내림차순으로 정렬된 kArray의 마지막값을 answer.push

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      kArray.push(score[i]);
    } else {
      if (score[i] >= kArray[kArray.length - 1]) {
        kArray.pop();
        kArray.push(score[i]);
      }
    }
    kArray = kArray.sort((a, b) => {
      if (a > b) return -1;
      if (a === b) return 0;
      if (a < b) return 1;
    });

    answer.push(kArray[kArray.length - 1]);
  }
  return answer;
}

// 다른 사람의 풀이
function solution2(k, score) {
  const stack = [];
  return score.reduce((a, c) => {
    if (stack.length < k) {
      stack.push(c);
      stack.sort((a, b) => a - b);
    } else {
      stack.push(c);
      stack.sort((a, b) => a - b);
      stack.shift();
    }
    a.push(stack[0]);
    return a;
  }, []);
}
