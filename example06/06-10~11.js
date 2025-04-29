var template1 = '<ul>\n\t<li><a href="#">Hoom</a></li>\n</ul>';
console.log(template1);
/*
<ul>
        <li><a href="#">Hoom</a></li>
</ul>
*/

/*
    일반 문자열 내에서 줄바꿈 등의 공백(white space)을 표현하려면 백슬래시(\)로 처리하는 이스케이프 시퀀스(excape sequence)를 사용해야 한다.
    \0 - Null
    \b - 백스페이스
    \f - 폼 피드(Form Feed): 프린터로 출력할 경우 다음 페이지의 시작 지점으로 이동
    \n - 개행: 다음 행으로 이동
    \r - 개행: 커서를 처음으로 이동
    \t - 탭(수평)
    \v - 탭(수직)
    \uXXXX - 유니코드, 예로 '\u0041'은 'A', '\uD55C'는 '한'
    \' - 작은따옴표
    \" - 큰따옴표
    \\ - 백슬래시
*/

// 일반 문자열과 달리 템플릿 리터럴 내에서는 이스케이프 시퀀스를 사용하지 않고도 줄바꿈이 허용되며, 모든 공백도 그대도 적용된다.
var template2 = `<ul>
    <li><a href="#">Home</a></li>
</ul>`;
console.log(template2);
/*
<ul>
    <li><a href="#">Home</a></li>
</ul>
*/