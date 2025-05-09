// 변수를 선언한 이후, 아직 값을 할당하지 않았기 때문에 자바스크립트 엔진에 의해 undefined로 암묵적으로 할당되어 초기화된다.
// undefined는 자바스크립트에서 제공하는 원시 타입의 값이다.
var score; 

/*
    var 키워드를 사용한 변수 선언은 선언 단계와 초기화 단계가 동시에 진행된다.
    만약 초기화 단계를 거치지 않으면 확보된 메모리 공간에 이전에 다른 애플리케이션이 사용했던 값이 남아있을 수 있다.
    따라서 메모리 공간을 확보한 다음, 값을 할당하지 않은 상태에서 곧바로 변수 값을 참조하면 쓰레기 값이 나올 수 있는데, 
    자바스크립트의 var 키워드는 암묵적으로 초기화를 수행하므로 이러한 위험으로부터 안전하다.
*/