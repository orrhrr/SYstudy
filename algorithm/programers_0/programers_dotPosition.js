/*

점의 위치 구하기
문제 설명
사분면은 한 평면을 x축과 y축을 기준으로 나눈 네 부분입니다. 사분면은 아래와 같이 1부터 4까지 번호를매깁니다.

x 좌표와 y 좌표가 모두 양수이면 제1사분면에 속합니다.
x 좌표가 음수, y 좌표가 양수이면 제2사분면에 속합니다.
x 좌표와 y 좌표가 모두 음수이면 제3사분면에 속합니다.
x 좌표가 양수, y 좌표가 음수이면 제4사분면에 속합니다.
x 좌표 (x, y)를 차례대로 담은 정수 배열 dot이 매개변수로 주어집니다. 좌표 dot이 사분면 중 어디에 속하는지 1, 2, 3, 4 중 하나를 return 하도록 solution 함수를 완성해주세요.

*/



function solution(dot) {
    
    if (dot[0] >= 0 && dot[1] >= 0) return 1;
    if (dot[0] < 0 && dot[1] >= 0) return 2;
    if (dot[0] < 0 && dot[1] < 0) return 3;
    return 4;
    
}


// 구조분해

function solution(dot) {
    const [num,num2] = dot; // 파라미터로 받은 인수를 분해함
    const check = num * num2 > 0; // x,y 값을 곱했을 때 0보다 큰지로 양수/음수 판단
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2); 
    // x가 양수일 때 x,y 곱한 값이 0보다 크면 -> check = true 이므로 1 리턴
    // x가 양수일 때 x,y 곱한 값이 0보다 작으면 -> check = false 이므로 4 리턴
    // x가 음수일 때 x,y 곱한 값이 0보다 크면 -> check = true 이므로 3 리턴
    // x가 음수일 때 x,y 곱한 값이 0보다 작으면 -> check = false 이므로 2 리턴

}