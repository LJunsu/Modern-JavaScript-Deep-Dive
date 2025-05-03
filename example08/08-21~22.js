// outer라는 식별자가 붙은 레이블 for 문
outer: for(var i = 0; i < 3; i++) {

    for(var j = 0; j < 3; j++) {

        // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
        if(i + j === 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done');

/*
    중첩된 for 문의 내부 for 문에서 break 문을 실행하면 내부 for 문을 탈출하여 외부 for 문으로 진입한다.
    이때 내부 for 문이 아닌 외부 for 문을 탈출하려면 레이블 문을 사용한다.
*/

var string = 'Hello World.';
var search = 'l';
var index;

// 문자열은 유사 배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {

    // 문자열의 개별 문자가 'l'이면
    if(string[i] === search) {

        index = i;
        break; // 반복문을 탈출한다.
    }
}

console.log(index); // 2

// 참고로 String.prototype.indexOf 메소드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search)); // 2

/*
    레이블 문은 중첩된 for 문 외부로 탈출할 때 유용하지만 그 밖의 경우에는 일반적으로 권장하지 않는다.

    break 문은 레이블 문뿐만 아니라 반복문, switch 문에서도 사용할 수 있다.
    이 경우에는 break 문에 레이블 식별자를 지정하지 않는다.
*/