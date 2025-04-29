var template = `Template literal`;
console.log(template); // Template literal

/*
    ES6부터 템플릿 리터럴(template literal)이라고 하는 새로운 문자열 표기법이 도입되었다.
    템플릿 리터럴은 멀티라인 문자열(multi-line string), 표현식 삽입(expression interpolation), 태그드 템플릿(tagged template) 등 문자열 처리 기능을 제공한다.
    템플릿 리터럴은 런타임에 일반 문자열로 변환되어 처리된다.
*/

// 일반 문자열 내에서는 줄바꿈(개행)이 허용되지 않는다.
var str = 'Hello
world.'; 
// SyntaxError: Invalid or unexpected token