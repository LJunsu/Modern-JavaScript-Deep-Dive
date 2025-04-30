// 문자열 연결 연산자
'1' + 2; // '12'
1 + '2'; // '12

// 산술 연산자
1 + 2; // 3

// true는 1로 타입 변환된다.
1 + true; // 2

// false는 0으로 타입 변환된다.
1 + false; // 1

// null은 0으로 타입 변환된다.
1 + null; // 1

// undefined는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

/*
    개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환된다.
    이를 암묵적 타입 변환(implicit coercion) 또는 타입 강제 변환(type coercion)이라고 한다.
*/