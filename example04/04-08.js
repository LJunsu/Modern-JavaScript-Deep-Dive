console.log(score); // undefined

var score; // ① 변수 선언
score = 80; // ② 값의 할당 

console.log(score); // 80

/*
    ①변수 선언은 런타임 이전에 먼저 실행되고 ② 값의 할당은 런타임에 실행된다.
    따라서 score 변수에 값을 할당하는 시점(②)에는 이미 변수 선언이 완료된 상태이며, undefined로 초기화되어 있다.
    따라서 score 변수에 값을 할당하면 score 변수의 값은 undefined에서 새롭게 할당한 숫자 값 80으로 변경(재할당)된다.
*/