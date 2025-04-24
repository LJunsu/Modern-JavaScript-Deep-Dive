console.log(score); // undefined

var score = 80;

console.log(score); // 80

/*
    변수의 선언과 값의 할당을 하나의 문장으로 표현해도 자바스크립트 엔진은 변수의 선언과 값의 할당을 2개의 문으로 나누어 실행한다.
    따라서 변수에 undefined가 할당되어 초기화되는 것은 변함이 없다.

    04-08.js와 04-09.js는 동일하게 동작하고, 결과를 출력한다.
*/