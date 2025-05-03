// 월을 영어로 변환한다. (11 -> 'November')
var month = 11;
var monthName;

switch(month) {
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'February';
        break;
    case 3: monthName = 'March';
        break;
    case 4: monthName = 'April';
        break;
    case 5: monthName = 'May';
        break;
    case 6: monthName = 'June';
        break;
    case 7: monthName = 'July';
        break;
    case 8: monthName = 'August';
        break;
    case 9: monthName = 'September';
        break;
    case 10: monthName = 'October';
        break;
    case 11: monthName = 'November';
        break;
    case 12: monthName = 'December';
        break;
    default: monthName = 'Invalid month';
}

console.log(monthName); // November

/*
    폴스루가 발생하는 이유는 case 문에 해당하는 문의 마짖막에 break 문을 사용하지 않았기 때문이다.
    break 키워드로 구성된 break 문은 코드 블록에서 탈출하는 역할을 한다.
    break 문이 없다면 case 문의 표현식과 일치하지 않더라도 실행 흐름이 다음 case 문으로 연이어 이동한다.

    default 문에는 break 문을 생략하는 것이 일반적이다.
*/