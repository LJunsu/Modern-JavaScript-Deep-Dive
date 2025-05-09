10 + 20

/*
    자바스크립트 엔진이 코드를 계산하려면 먼저 10, 20, + 라는 리터럴(ilteral)과 연산자(operator)의 의미를 알고 있어야 하고,
    10 + 20 이라는 식(표현식 expression)의 의미도 해석(파싱 parsing) 할 수 있어야 한다.
    + 연산을 수행하기 위해 먼저 연산자의 좌변과 우변의 숫자 값, 즉 피연산자(operand)를 기억한다.

    컴퓨터는 CPU를 사용해 연산하고, 메모리를 사용해 데이터를 기억한다.
    메모리(memory)는 데이터를 저장할 수 있는 메모리 셀(memory cell)의 집합체
    메모리 셀 하나의 크기는 1바이트(8비트)이며, 컴퓨터는 메모리 셀의 크기, 즉 1바이트 단위로 데이터를 저장(write)하거나 읽어(read) 들인다.

    각 셀은 고유의 메모리 주소(memory address)를 가지며, 이 주소는 메모리 공간의 위치를 나타내고 0부터 메모리의 크기만큼 정수로 표현된다.
    컴퓨터는 모든 데이터를 2진수로 처리하기 때문에 데이터의 종류와 상관없이 2진수로 저장된다.

    연산의 결과는 메모리에 저장되었지만, 연산을 통해 만들어낸 숫자 값 30을 재사용할 수 없다.
    결과를 재사용하고 싶다면 메모리 주소를 통해 연산 결과 30이 저장된 메모리 공간에 직접 접근하는 것 외에 방법이 없다.
    하지만 메모리 주소를 통해 직접 접근하는 것은 오류의 가능성이 높은 위험한 방법이기 때문에 자바스크립트는 개발자의 직접적인 메모리 제어를 허용하지 않는다.

    그래서 변수(variable)는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 이해 붙인 이름이다.
    변수는 프로그래밍 언어에서 값을 저장하고 참조하는 메커니즘으로, 값의 위치를 가리키는 상징적인 이름이다.
*/