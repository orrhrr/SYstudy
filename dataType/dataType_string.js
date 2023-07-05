// 문자

var string;
string = '문자열'; //작은따옴표
string = "문자열"; //큰따옴표
string = `문자열`; //백틱(``)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표로 감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

//따옴표나 백틱으로 감싸지 않은 hello를 식별자로 인식한다.
var string2 = hello; //ReferenceError: hello is not defined 

// 자바스크립트의 문자열은 원시 타입이며, 변경 불가능한 값이다.
// 이것은 문자열이 생성되면 그 문자열을 변경할 수 없다는 것을 의미한다.






// 템플릿 리터럴(편리한 문자열 처리 기능. 일반적으로 백틱(``)을 사용해 표현한다.)

//자주쓰는 이스케이프 시퀀스 (백슬래시로 시작한다.)
var template = '<ul>\n\t<li><a href = "#">Home</a></li>\n</ul>'; // (\n): 줄바꿈 (\t): 수평

console.log(template);  
/*
<ul>
    <li><a href = "#">Home</a></li>
</ul>
*/


//백틱을 사용하면 이스케이프 시퀀스를 사용하지 않고도 줄바꿈, 공백 등이 그대로 적용된다. (백틱 짱!)
var template2 = 
`<ul>
    <li><a href = "#">Home</a></li>
</ul>`;

console.log(template2); 
/*
<ul>
    <li><a href = "#">Home</a></li>
</ul>
*/



//백틱을 사용하면 표현식 삽입을 통해 간단히 문자열을 삽입할 수 있다. ( ${} 사용)
var first = 'seung-yeon';
var last = 'Lee';

console.log(`my name is ${first} ${last}.`) // my name is seung-yeon Lee
console.log('1 + 2 = ${1 + 2}'); // 1 + 2 = ${1 + 2} - 표현식 삽입은 반드시 템플릿 리터럴에서 사용해야 한다.
