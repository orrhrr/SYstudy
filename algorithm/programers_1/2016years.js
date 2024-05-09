// 2016년
/*문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
*/

function solution(a, b) {
  var answer = "";
  // 1월 1일은 금요일부터 시작
  let week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  // 1월부터 12월까지 총 일수
  let day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 1월 1일부터 a월b일까지의 더한 일수를 담을 변수 sum
  let sum = 0;

  // a-1 : a-1월 만큼 총 일수를 더하고
  for (let i = 0; i < a - 1; i++) {
    sum += day[i];
  }
  // 그다음에 b일수를 더함.
  // -1을 하는 이유: '1일'이 금요일이지만 인덱스는 0부터 시작
  sum += b - 1;
  answer = week[sum % 7];

  return answer;
}

// 다른 사람의 코드
function getDayName(a, b) {
  var arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  // Date를 쓰다니..칙쇼
  var date = new Date(`2016-${a}-${b}`);
  var day = date.getDay();
  return arr[day];
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5, 24));
