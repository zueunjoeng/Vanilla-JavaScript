let dayoutput = "";
for(let joonm = 0; joonm < 4; joonm++){
    
    for(let dayname =1; dayname <8; dayname++){
        dayoutput +=`${dayname}\t`;
    }

    dayoutput += "\n"; 
}
console.log(dayoutput)
//예시로 주 요일이 있다. 다음주가 되려면 월~일까지 모든 요일이 끝나야하는 것처럼.
//forfor문도  for안에 for이 끝나야 하나의 패턴이 끝나는 것이다.