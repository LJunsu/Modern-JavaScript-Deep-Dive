switch(표현식) {
    case 표현식1:
        switch문의 표현식과 표현식1이 일치하면 실행될 문;
        break;
    case 표현식2:
        switch문의 표현식과 표현식2이 일치하면 실행될 문;
        break;
    default:
        switch문의 표현식과 일치하는 case문이 없을 때 실행될 문;
}

/*
    switch 문은 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮긴다.
    case 문은 상황(case)을 의미하는 표현식을 지정하고 콜론으로 마친다.
    switch 문의 표현식과 일치하는 case 문이 없다면 실행 순서는 default 문으로 이동한다.
    default 문은 선택 사항으로, 사용할 수도 있고 사용하지 않을 수도 있다.

    if...else 문의 조건식은 불리언 값으로 평가되어야 하지만 switch 문의 표현식은 불리언 값보다는 문자열이나 숫자 값인 경우가 많다.
    if...else 문은 논리적 참, 거짓으로 실행할 코듣 블록을 결정하고, 
    switch 문은 논리적 참, 거짓보다는 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용한다.
*/

// 월을 영어로 변환한다. (11 -> 'November')
var month = 11;
var monthName;

switch(month) {
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = 'June';
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = 'October';
    case 11: monthName = 'November';
    case 12: monthName = 'December';
    default: monthName = 'Invalid month';
}

console.log(monthName); // Invalid month

/*
    'November'가 출력되지 않고 'Invalid month'가 출력된다.
    이는 switch 문의 표현식의 평가 결과와 일치하는 case 문으로 실행 흐름이 이동하여 문을 실행한 것은 맞지만
    문을 실행한 후 switch 문을 탈출하지 않고 switch 문이 끝날 때 까지 이후의 모든 case 문과 defauult 문을 실행했기 때문이다.
    이를 폴스루(fall through)라고 한다.
*/