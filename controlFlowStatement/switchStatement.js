// switch문 : 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case문으로 실행 흐름을 옮긴다.
// switch문의 표현식과 일치하는 case문이 없다면 실행순서는 default 문으로 이동한다. (선택사항)

switch (표현식) {
    case 표현식1:
        switch 문의 표현식과 표현식1이 일치하면 실행될 문;
        break;
    case 표현식2:
        switch 문의 표현식과 표현식2가 일치하면 실행될 문;
        break;
    default:
        switch 문의 표현식과 일치하는 case문이 없을 때 실행된 문;
}

// switch문의 표현식은 불리언 값보다 문자열이나 숫자값인 경우가 많다. 
// if문 : 논리적 참, 거짓으로 실행할 코드 블록 결정  / switch문 : 논리적 참, 거짓 보다는 다양한 상황(case)에 따라 실행할 코드 블록 결정


//월을 영어로 변환하기
var month = 11;
var monthName;

switch(month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default:  monthName = 'Invalid month';
}
console.log(monthName);  // Invalid month

// November가 아닌 Invalid month가 출력된 이유는 case11을 실행한 후 switch문을 탈출하지 않고 끝날 때까지 모든 case와 default문을 실행했기 때문.
// (monthName의 값: undefined -> November -> December -> Invalid month 순으로 재할당됨)
// break문은 코드 블록에서 탈출하는 역할을 한다.


// 올바른 switch문 
var month = 11;
var monthName;

switch (month) {
    case 1: monthName = 'January';
    break;
    case 2: monthName = 'February';
    break;
    case 3: monthName = 'March';
    break;
    case 4: monthName = 'April';
    break;
    case 5: monthName = 'May';
    break;
    case 6: monthName = 'June';
    break;
    case 7: monthName = 'July';
    break;
    case 8: monthName = 'August';
    break;
    case 9: monthName = 'September';
    break;
    case 10: monthName = 'October';
    break;
    case 11: monthName = 'November';
    break;
    case 12: monthName = 'December';
    break;
    default:  monthName = 'Invalid month';  //default 문은 switch 문의 맨 마지막에 위치하므로 break문을 생략한다.
 
    console.log(monthName);  //November
}

// break문을 생략한 폴스루가 유용한 경우도 있다.
// 윤년인지 판별해서 2월의 일수를 계산하는 예제

var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3 : case 5: case 7 : case 8 : case 10 : case 12 :
        days = 31;
        break;
    case 4 : case 6 : case 9 : case 11:
        days = 30;
    case 2:
        // 운년 계산 알고리즘
        // 1. 연도가 4로 나누어 떨어지는 해 (2000, 2004, 2008...)는 윤년이다.
        // 2. 연도가 4로 나누어떨어지더라도 연도가 100으로 나누어 떨어지는 해 (2000, 2100, 2200...)는 평년이다.
        // 3. 연도가 400으로 나누어 떨어지는 해 (2000, 2400, 2800..)는 운년이다.
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default: 
    console.log('Invalid month');
}

console.log(days); // 29

