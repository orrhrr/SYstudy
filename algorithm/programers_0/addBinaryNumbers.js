/*

이진수 더하기
문제 설명
이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
return 값은 이진수를 의미하는 문자열입니다.
1 ≤ bin1, bin2의 길이 ≤ 10
bin1과 bin2는 0과 1로만 이루어져 있습니다.
bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.
입출력 예
bin1	bin2	result
"10"	"11"	"101"
"1001"	"1111"	"11000"


*/
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

    // bin1, bin2를 각각 10진수로 변환하여 더한뒤, toString메서드로 2진수로 다시 변환

// parseInt()
// 1.정수를 반환 ← 주로 사용하던 기능
// 2.문자열을 파싱 하여 특정 진수의 정수를 반환 (= 특정 진수를 10진수로)
// const str = "10";
// console.log(parseInt(str)); //10 (str을 정수로)
// console.log(parseInt(str, 2)); //2 (2진수인 str을 10진수로)

// toString()
// 1. 문자열을 반환 ← 주로 사용하던 기능
// 2. 숫자의 경우 선택적으로 기수(2~36)를 매개변수로 취하며, 이를 통해 10진수를 특정 진수로 변환한 값 반환
// const num = 10;
// console.log(num.toString()); //"10" (num을 문자열로)
// console.log(num.toString(2)); //"1010" (num을 2진수로)

}