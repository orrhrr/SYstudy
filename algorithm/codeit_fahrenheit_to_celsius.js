/*
실습 설명
화씨 온도(°F)를 섭씨 온도(°C)로 바꾸어주는 프로그램을 만들려고 합니다.

섭씨와 화씨의 관계식은 다음과 같습니다:
섭씨온도 = (화씨온도 - 32) * 5 / 9
 

화씨 온도를 섭씨 온도로 변환해 주는 함수 fahrenheit_to_celsius를 써 보세요. 이 함수를 파라미터로 화씨 온도 fahrenheit를 받고, 변환된 섭씨 온도를 리턴합니다.

실습 결과
화씨 온도 리스트: [40, 15, 32, 64, -4, 11]
섭씨 온도 리스트: [4.4, -9.4, 0.0, 17.8, -20.0, -11.7]
*/

let temperatureList = [40, 15, 32, 64, -4, 11]
let newArr = [];
function fahrenheitToCelsius(fahrenheit) {
    for(i = 0; i < temperatureList.length; i++){
        newArr.push(Math.floor((fahrenheit[i] - 32) * 5 / 9));
    }
}

console.log(`화씨 온도 리스트: [${temperatureList}]`);
fahrenheitToCelsius(temperatureList);
console.log(`섭씨 온도 리스트: [${newArr}]`);