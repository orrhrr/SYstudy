/*
문자열 내 p와 y의 개수
문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.
입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false
*/


function solution(s){
    var answer = true;
    s = s.toUpperCase();
    
    let Pcount = 0;
    let Ycount = 0;
        
    for(i = 0; i < s.length; i++) {
        if(s[i] === 'P') Pcount ++;
        if(s[i] === 'Y') Ycount ++;
    }
    console.log(Pcount);
    console.log(Ycount);
    answer = Pcount === Ycount ? true : (Pcount = 0) && (Ycount = 0) ? true : false
    
    return answer;
}

// match 메소드와 /ig 사용 (정규표현식)
function numPY(s){
    return s.match(/p/ig).length == s.match(/y/ig).length // 정규표현식을 사용해 null값일 경우 
  }
  
  // match -? match() 메서드는 문자열이 정규식과 매치되는 부분을 검색합니다. (문법: str.match(regexp);)
  // 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 첫 번째 요소로 포함하는 Array를 반환한 다음 괄호 안에 캡처된 결과가 온다.
  // 일치하는 것이 없으면 null이 반환

  //p와 y가 둘 다 없을 때는 match 함수는 null을 반환합니다. 
  //그래서 null은 length함수를 가지고 있지 않기에, length 함수가 없다는 undefined 에러가 납니다.
  //때문에 변수를 선언하고, 해당 match의 결과가 null일 때는 그 변수에 0을 넣어준 뒤 그 변수를 비교하는 방식으로 해결해야 예외처리를 완벽하게 할 수 있습니다.

  // /ig -> i는 대소문자 구분하지 마라, g는 모든 문자 검색해라 플래그 (정규표현식)
  /*
 정규표현식 형식

/패턴/플래그

- 슬래시(/) "사이"에는 매칭시킬 "패턴"을 써준다.

- 슬래시(/) "다음"에는 옵션을 설정하는 "플래그"를 써준다.

(플래그는 하나만 찾을지, 모두 다 찾을지 등을 설정하는 옵션이라고 보면 됩니다.)
*/
