var first = 'Ung-mo';
var last = 'Lee';

// ES5: 문자열 연결
console.log('My name is ' + first + ' ' + last + '.'); // My name us Ung-mo Lee.

/*
    문자열은 문자열 연산자 +를 사용해 연결할 수 있다.
    + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작한다. 그 외의 경우는 덧셈 연산자로 동작한다.
*/

// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); //My name is Ung-mo Lee.
/*
    템플릿 리터럴 내에서는 표현식 삽입(expression interpolation)을 통해 간단히 문자열을 삽입할 수 있다.
*/

console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3
/*
    표현식을 삽입하려면 ${}으로 표현식을 감싼다.
    이때 표현식의 평가 결과가 문자열이 아니더라도 문자열로 타입이 강제로 변환되어 삽입된다.
*/

console.log("1 + 2 = ${1 + 2}"); // 1 + 2 = ${1 + 2}
/*
    표현식 삽입은 반드시 템플릿 리터럴 내에서 사용해야 한다.
    템플릿 리터럴이 아닌 일반 문자열에서의 표현식 삽입은 문자열로 취급된다.
*/