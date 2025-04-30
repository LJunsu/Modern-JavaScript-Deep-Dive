var x;

x = 10;
console.log(x); // 10

x += 5; // x = x + 5;
console.log(x); // 15

x -= 5; // x = x - 5;
console.log(x); // 10

x *= 5; // x = x * 5;
console.log(x); // 50

x /= 5; // x = x / 5;
console.log(x); // 10

x %= 5; // x = x % 5;
console.log(x); // 0

var str = 'My name is ';

// 문자열 연결 연산자
str += 'Lee'; // str = str + 'Lee';
console.log(str); // 'My name is Lee'

/*
    할당 연산자     예          동일 표현       부수 효과
    =              x = 5       x = 5           O
    +=             x += 5      x = x + 5       O
    -=             x -= 5      x = x - 5       O
    *=             x += 5      x = x * 5       O
    /=             x /= 5      x = x / 5       O
    %=             x %= 5      x = x % 5       O
*/