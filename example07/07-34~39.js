2 ** 2; // 4
2 ** 2.5; // 5.65685424949238
2 ** 0; // 1
2 ** -2; // 0.25

/*
    좌항의 피연산자를 밑(base)으로, 우항의 피연산자를 지수(exponent)로 거듭 제곱하여 숫자 값을 반환한다.
*/

// 지수 연산자가 도입되기 전에는 Math.pow 메소드를 사용했다.
Math.pow(2, 2); // 4
Math.pow(2, 2.5); // 5.65685424949238
Math.pow(2, 0); // 1
Math.pow(2, -2); // 0.25

-5 ** 2;
// SyntaxError: Unary operator used immediately before exponentiation expression.
// Parenthesis must be used to disambiguate operator precedence

// 음수를 거듭제곱의 밑으로 사용해 계산하려면 다음과 같이 괄호로 묶어야 한다.
(-5) ** 2; // 25

// 지수 연산자는 다른 산술 연산자와 마찬가지로 할당 연산자와 함께 사용할 수 있다.
var num = 5;
num **= 2; // 25

// 지수 연산자는 이항 연산자 중에서 우선순위가 가장 높다
2 * 5 ** 2; // 50