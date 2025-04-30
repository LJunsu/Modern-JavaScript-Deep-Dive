// 동등 비교
5 == 5; // true

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == '5'; // true

/*
    비교 연산자     의미            사례            설명                        부수 효과
    ==             동등 비교        x == y         x와 y의 값이 같음            X
    ===            일치 비교        x === y        x와 y의 값과 타입이 같음     X
    !=             부동등 비교      x != y         x와 y의 값이 다름            X
    !==            불일치 비교      x !== y        x와 y의 값과 타입이 다름     X
*/

// 동등 비교. 결과를 예측하기 어렵다.
'0' == ''; // false
0 == ''; // true
0 == '0'; // true
false == 'false'; // false
false == '0'; // true
false == null; // false
false == undefined; // false