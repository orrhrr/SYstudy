/*
실습 설명
정수 n의 약수는 n을 어떤 수로 나누었을 때 나누어떨어지게 하는 정수를 의미합니다. 만약 정수 i가 정수 n의 약수라면, n을 i로 나누었을 때 나머지가 0이 됩니다.

while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력하는 프로그램을 작성해 보세요.

자동 채점 과제입니다. 띄어쓰기와 오탈자에 유의해 주세요.
실습 결과
1
2
3
4
5
6
9
10
12
15
18
20
30
36
45
60
90
180
180의 약수는 총 18개입니다.
*/

const n = 180;

let i = 0;
while(i <= n)