/*
실습 설명
학생들에게 최종 성적을 알려 주는 '학점 계산기'를 만들려고 합니다.

이 수업에는 50점 만점의 중간고사와 50점 만점의 기말고사가 있는데요. 두 시험의 점수를 합해서 최종 성적을 내는 방식입니다. 규칙은 다음과 같습니다.

A: 90점 이상
B: 80점 이상 90점 미만
C: 70점 이상 80점 미만
D: 60점 이상 70점 미만
F: 60점 미만
print_grade() 함수는 파라미터로 중간고사 점수 midterm_score와 기말고사 점수 final_score를 받아서 최종 성적을 출력합니다.

실습 결과
B
F
D
A

*/


function gradeCalculator(midterm_score, final_score) {
    let totalScore = midterm_score + final_score;
    if(totalScore >= 90){
        console.log('A');
    } else if (totalScore >= 80) {
        console.log('B');
    } else if (totalScore >= 70) {
        console.log('C');
    } else if (totalScore >= 60) {
        console.log('D');
    } else {
        console.log('F');
        }
    }


gradeCalculator(40, 45)
gradeCalculator(20, 35)
gradeCalculator(30, 32)
gradeCalculator(50, 45)