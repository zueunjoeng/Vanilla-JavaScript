console.log("한번만 실행되지");

//초기값을 읽고 조건을 읽고 참이라면 실행하고 연산식 실행, 아직도 참이라면 실행하고 연산식 실행
//그러다가 조건이 거직이 되는 순간 for문 종료

for(var i = 0; i < 5; i++ ){
    console.log("나는 다섯번 실행되지");
}

// let count=10;
// count++; // count +=1 : 1을 추가로 넣는다 <-> ++count 
// count++; //다음연산에 1씩 추가증가하겠다. (그래서 여기는 10)
// count; // (그럼 얘는 11)
// ++count;// 얘는 12. ++가 앞에 붙으면 지금의 나에게
//count++ =>12 맞아.
//count +=1 // 얘는 12에 1이 추가된거라 13이지
//지금의 나에게는 상관없고 다음의 나에게 전달하는 => 후치연산

let count =10;
    count +=100;
    count +=1; //111
    ++count; //112
    count++; //112

    console.log(count); //113


