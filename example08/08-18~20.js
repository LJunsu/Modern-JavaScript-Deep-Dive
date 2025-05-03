if(true) {
    break; // Uncaught SyntaxError:Illegal break statement
}

/*
    레이블 문, 반복문, switch 문의 코드 블록 외 break 문을 사용하면 SyntaxError(문법 에러)가 발생한다.
*/

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

/*
    레이블 문은 프로그램의 실행 순서를 제어하는 데 사용한다.
    switch 문의 cse 문과 default 문도 레이블 문이다.
*/

// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done');

/*
    레이블 문을 탈출하려면 break 문에 레이블 식별자를 지정한다.
*/