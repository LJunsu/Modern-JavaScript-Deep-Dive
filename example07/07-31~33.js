typeof ''; // "string"
typeof 1; // "number"
typeof NaN; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof Symbol(); // "symbol"
typeof null; // "object"
typeof []; // "object"
typeof {}; // "object"
typeof new Date(); // "object"
typeof /test/gi; // "object"
typeof function() {}; // "function"

var foo = null;
typeof foo === null; // false
foo === null; // true

// undeclared 식별자를 선언한 적이 엾다.
typeof undeclared; // undefined

/*
    typeof 연산자로 null 값을 연산해 보면 "null"이 아닌 "object"를 반환한다.
    이것은 자바스크립트의 첫 번째 버전의 버그다.
    하지만 기존 코드에 영향을 줄 수 있기 때문에 아직까지 수정되지 못하고 있다.
    따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고  일치 연산자(===)를 사용해야 한다.

    선언하지 않은 식별자 typeof 연산자로 연산하면 ReferenceError가 발생하지 않고 undefined를 반환한다.
*/