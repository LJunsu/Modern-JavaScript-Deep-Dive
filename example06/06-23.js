var foo;
console.log(typeof foo); // undefined

foo = 3;
console.log(typeof foo); // number

foo = 'Hello';
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

foo = null;
console.log(typeof foo); // object

foo = Symbol(); // 심벌
console.log(typeof foo); // symbol

foo = {}; // 객체
console.log(typeof foo); // object

foo = []; // 배열
console.log(typeof foo); // object

foo = function() {}; // 함수
console.log(typeof foo); // function

/*
    typeof 연산자로 변수를 연산하면 변수의 데이터 타입을 반환한다.
    정확히 변수의 데이터 타입을 반환하는 것이 아니라 변수에 할당된 값의 데이터 타입을 반환한 것이다.

    자바스크립트의 변수에는 어떤 데이터 타입의 값이라도 자유롭게 할당할 수 있으므로 정적 타입 언어에서 말하는 데이터 타입과 개념이 다르다.
    정적 타입 언어는 변수 선언 시점에 변수의 타입이 결정되고 변수의 타입 을 변경할 수 없다.
    자바스크립트에서는 값을 할당하는 시점에 변수의 타입이 동적으로 결정되고 변수의 타입을 언제든 자유롭게 변경할 수 있다.

    즉, 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입 추론(type inference))된다.
    그리고 재할당에 의해 변수의 타입은 언제든 동적으로 변할 수 있다.
    이러한 특징을 동적 타이핑(dynamic typing)이라 하며, 자바스크립트의 정적 타입 언어와 구별하기 위해 동적 타입(dynamic/weak type) 언어라 한다.
*/