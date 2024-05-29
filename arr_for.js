console.log("한번만 실행되지");

//초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식 실행, 아직도 참이라면 실행하고 연산식 실행
//그러다가 조건이 거직이 되는 순간 for문 종료

for(var i = 0; i < 5; i++ ){
    console.log("나는 다섯번 실행되지");
}

//문자 연산식
let mystudy ="리액트";
    mystudy ="리액트" + "뷰"; // mystudy +="뷰"

    console.log(mystudy);

let startjs =10;
    startjs +=10; //20
    startjs +="원"; // 원이 붙으면 문자연산이 된다.(한번이라도 글자가 붙으면 그 뒤로는 문자연산)
    startjs +=100; // -> 20원100
    startjs +=100; // ->20원100100

    console.log(startjs);