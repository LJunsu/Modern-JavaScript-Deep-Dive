console.log(score); // undefined

score = 80;
var score;

console.log(score); // 80

/*
    호이스팅을 고려해서 동작 순서
    var score = undefined;
    console.log(score); // undefined
    score = 80;
    console.log(score); // 80

    04-08.js처럼 변수에 값을 할당할 때는 이전 값 undefined가 저장되어 있던 메모리 공간을 지우고 그 메모리 공간에 할당 값 80을 새롭게 저장하는 것이 아니라.
    새로운 메모리 공간을 확보하고 그곳에 할당 값 80을 저장한다는 점을 기억하자.
*/