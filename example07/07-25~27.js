// 논리합(||) 연산자
true || true; // true
true || false; // true
false || true; // true
false || false; // false

// 논리곱(&&) 연산자
true && true; // true
true && false; // false
false && true; // false
false && false; // false

// 논리 부정(!) 연산자
!true; // false
!false; // true

/*
    논리 연산자     의미            부수 효과
    ||             논리합(OR)       X
    &&             논리곱(AND)      X
    !              부정(NOT)        X
*/

// 암묵적 타입 변환
!0; // true
!'Hello'; // false

/*
    논리 부정 연산자는 불리언 값을 반환한다.
    단, 피연산자가 반드시 불리언 값일 필요는 없다.
    만약 피연산자가 불리언 값이 아니면 불리언 타입으로 암묵적 타입 변환된다.
*/

// 단축 평가

// ||는 좌측이 truthy면 좌측 값을 반환, falsy면 우측 값을 반환
'' || 'Dog'; // 'Dog'
'Cat' || 'Dog'; // 'Cat'

// &&는 좌측이 truthy면 우측 값을 반환, falsy면 null을 반환
null && 'Dog'; // 'null'
'Cat' && 'Dog'; // 'Dog'

/*
    논리합(||) 또는 논리곱(&&) 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
    논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
*/