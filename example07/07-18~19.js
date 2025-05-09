-0 === +0; // true
Object.is(-0, +0); // false

NaN === NaN; // false
Object.is(NaN, NaN); // true

/*
    Object.is 메소드
        ES6에서 도입된 Object.is 메소드는 예측 가능한 정확한 비교 결과를 반환한다.
        그 외에는 일치 비교 연산자(===)와 동일하게 동작한다.
*/

// 부동등 비교
5 != 8; // true
5 != 5; // false
5 != '5'; // false

// 불일치 비교
5 !== 8; // true
5 !== 5; // false
5 !== '5'; // true

/*
    부동등 비교 연산자(!=)와 불일치 비교 연산자(!==)는 각각 동등 비교(==) 연산자와 일치 비교(===) 연산자의 반대 개념이다.
*/