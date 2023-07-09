// typeof 연산자 : 피연산자의 데이터 타입을 문자열로 반환한다.

typeof '' // string
typeof 1 // number
typeof NaN // number
typeof true // boolean
typeof undefined // undefined
typeof Symbol() // symbol
typeof null // ** object (값이 null 타입인지 확인할때는 typeof 연산자 대신 ===를 사용하자)

    var foo = null;
    
    typeof foo === null;  // false
    foo === null; //true

typeof [] // object
typeof {} // object
typeof new Date() // object
typeof /test/gi  //object
typeof function() {} // function


// 선언하지 않은 식벽자를 typeof 연사자로 연산하면 참조오류가 발생하지 않고 undefined를 반환한다.
typeof undeclared; // undefined

