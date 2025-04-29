// 숫자 타입의 세 가지 특별한 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN

/*
    숫자 타입은 추가적으로 세 가지 특별한 값도 표현할 수 있다.
    Infinity - 양의 무한대
    -Infinity - 음의 무한대
    NaN - 산술 연산 불가(not-a-number)
*/

// 자바스크립트는 대소문자를 구별한다.
var x = nan; // ReferenceError: nan is not defined
// 자바스크립트는 대소문자를 구별(case-sensitive)하므로 NaN, Nan, nan과 같이 표현하면 에러가 발생한다.
// 자바스크립트 엔진은 NAN, Nan, nan을 값이 아닌 식별자로 해석한다.