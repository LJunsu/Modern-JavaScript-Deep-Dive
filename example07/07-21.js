var x = 2;

// 2 % 2는 0이고 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수

/*
    조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값

    삼항 조건 연산자는 첫 번째 피연산자가 true로 평가되면 두 번째 피연산자를 반환하고, 첫 번째 피연산자가 false로 평가되면 세 번째 피연산자를 반환한다.

    물음표(?) 앞의 첫 번째 피연산자는 조건식, 즉 불리언 타입의 값으로 평가될 표현식이다.
    만약 조건식의 평가가 불리언 값이 아니면 불리언 값으로 암묵적 타입 변환된다.
*/