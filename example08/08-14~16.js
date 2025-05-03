var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while(count < 3) {
    console.log(count); // 0 1 2
    count++;
}

/*
    while 문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료한다.
    만약 조건식의 평가 결과가 불리언 값이 아니면 불리언 값으로 강제 변환하여 논리적 참, 거짓을 구별한다.
*/

// 무한 루프
while(true) {}

/*
    무한 루프에서 탈출하기 위해서는 코드 블록 내에 if 문으로 탈출 조건을 만들고 break 문으로 코드 블록을 탈출한다.
*/

var count = 0;

// 무한 루프
while (true) {
    console.log(count);
    count++;

    // count가 3이면 코드 블록을 탈출한다.
    if(count === 3) break;
} // 0 1 2

/*
    무한 루프에서 탈출하기 위해서는 코드 블록 내에 if 문으로 탈출 조건을 만들고 break 문으로 코드 블록을 탈출한다.
*/