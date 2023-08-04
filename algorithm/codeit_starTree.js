/*
실습 설명
주어진 높이(height)에 맞게 *로 삼각형을 그리는 함수 printTriangle()을 완성해 봅시다.

실습 결과
높이: 1
*
높이: 3
*
**
***
높이: 5
*
**
***
****
*****
*/

function printTriangle(height){
    let star = '';
    for(i = 1; i <= height; i++){
        star += '*';
        console.log(star);
    }  
}


console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);