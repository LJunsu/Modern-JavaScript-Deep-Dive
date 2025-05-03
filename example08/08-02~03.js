if(조건식) {
    // 조ㄱ건식이 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식이 거짓이면 이 코드 블록이 실행된닫.
}

if(조건식1) {
    // 조건식1이 참이면 이 코드 블록이 실행된다.
} else if(조건식2) {
    // 조건식2가 참이면 이 코드 블록이 실행된다.
} else {
    // 조건식1과 조건식2가 모두 거짓이면 이 코드 블록이 실행된다.
}

/*
    if...else 문은 주어진 조건식(불리언 값으로 평가될 수 있는 표현식)의 평가 결과, 즉 논리적 참 또는 거짓에 따라 실행할 코드 블록을 결정한다.
    if 문의 조건식은 불리언 값으로 평가되어야 한다.
    조건식이 불리언 값이 아닌 값으로 평가되면 자바스크립트 엔진에 의해 암묵적으로 불리언 값으로 강제 변환되어 실행할 코드 블록을 결정한다.
*/

var num = 2;
var kind;

// if 문
if(num > 0) {
    kind = '양수'; // 음수를 구별할 수 없다.
}
console.log(kind); // 양수

// if...else 문
if(num > 0) {
    kind = '양수';
} else {
    kind = '음수'; // 0은 음수가 아니다.
}
console.log(kind); // 양수

// if...else if 문
if(num > 0) {
    kind = '양수';
} else if(num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind); // 양수

/* 
    else if 문과 else 문은 옵션으로, 사용할 수도 있고 사용하지 않을 수도 있다.
*/

var num = 2;
var kind;

if(num > 0) kind = '양수';
else if(num < 0) kind = '음수';
else kind = '영';

console.log(kind); // 양수