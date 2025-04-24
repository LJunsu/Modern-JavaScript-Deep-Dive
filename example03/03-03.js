const arr = [1, 2, 3];

arr.forEach(alert);

/*
    ReferenceError: alert is not defined 에러 발생
    브라우저에 알림창을 띄우는 alert 함수는 브라우저에서만 동작하는 클라이언트 사이트 Web API다.
    alert 함수는 브라우저 환경에서만 유효하고, Node.js 환경에서는 사용할 수 없다.
*/