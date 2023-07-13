// continue문 : 반복문의 코드 블록 실행을 현 시점에서 중단하고 반복문의 증감식으로 실행흐름을 이동시킨다.(break문처럼 반복문을 탈출하지않음)


// 문자열에서 특정 문자의 개수 세기
let string = 'Hello World';
let search = 'l';
let count = 0;

// 문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(i = 0; i < string.length; i++) {
    // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if (string[i] !== search) continue;
    count++; // continue문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

//String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regexp = new RegExp(search, 'g'); //RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용한다.
console.log(string.match(regexp).length); // 3

// 위 예제의 for문은 다음 코드와 동일하게 작동한다.
for(let i = 0; i < string.length; i++) {
    // 'l'이면 count를 증가시킨다.
    if(string[i] === search) count++;

}

// if문 내에서 실행해야 할 코드가 길다면 continue문을 사용하는 편이 가독성이 좋다.
// continue문을 사용하지 않으면 if문 내에 코드를 작성해야한다.
for (let i = 0; i < string.length; i++){
    // 'l'이면 count를 증가시킨다.
    if(string[i] === search) {
        count++;
        // code
        // code
        // code
    }
}

// continue문을 사용하면 if문 밖에 코드를 작성할 수 있다.
for (let i = 0; i < string.length; i++) {
    // 'l'이면 count를 증가시킨다.
    if(string[i] !== search) continue;

    count++;
    // code
    // code
    // code
}