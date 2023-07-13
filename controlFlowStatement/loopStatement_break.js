// break문 : 레이블 문, 반복문 또는 switch문의 코드 블록을 탈출한다.
// break문은 반복문을 더 이상 진행하지 않아도 될 때 불필요한 코드 수행을 회피할 수 있다.
// break문을 통해 코드 블록을 탈출하면 그 이후 코드는 실행되지 않는다.
// 레이블문(/반복문/switch문의 코드 블록외에 break문을 사용하면 SyntaxError(문법 에러)가 발생한다.
if (true) {
    break; //Uncaught SyntaxError : Illegal break statement
}

// 레이블 문은 프로그램의 실행 순서를 제어하는데 사용한다. (식별자가 붙은 문)
// switch문의 case문과 default문도 레이블 문이다.
// 레이블 문을 탈출하려면 break문에 레이블 식별자를 지정한다.
// 레이블 문은 중첩된 for문 외부로 탈출할 떄 유용하지만 그 밖의 경우에는 권장하지 않는다. (가독성이 떨어지고 프로그램의 흐름이 복잡해짐)
foo: { //foo라는 식별자가 붙은 레이블 블록문
console.log(1); //
break foo; //foo 레이블에서 탈출한다.
console.log(2); // 실행되지 않음
}

console.log('Done!') // 1 Done!



// 중첩된 for문의 내부 for문에서 break를 실행하면 내부 for문을 탈출하여 외부 for문으로 진입한다.
// 이때 내부 for문이 아닌 외부 for문을 탈출하려면 레이블 문을 사용한다.
outer: for (let i = 0; i < 3; i++) { // outer 라는 식별자가 붙은 레이블 for문
    for(let j = 0; j < 3; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
    if(i + j === 3) break outer;
    console.log(`inner[${i}.${j}]`)
    }
}

console.log('Done!'); // inner[0.0] inner[0.1] inner[0.2] inner[1.0] inner[1.1] Done!



// 문자열에서 특정 문자의 인덱스(위치)를 검색하기
let string = 'Hello World';
let search = 'l';
let index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for(let i = 0; i < string.length; i++) { // length 속성은 숫자 키가 있는 배열에 대해 (last_key + 1)을 반환한다.
    // 문자열의 개별 문자가 'l'이면
    if (string[i] === search) {
        index = i;
        break; // 반복문을 탈출한다.
    } 
}

console.log(index); // 2


// String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); // 2 (string에 search라는 문자를 가진 인덱스를 뽑아서 console.log해줘)

