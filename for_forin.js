const yo = ["월", "화", "수", "목", "금", "토", "일"];

let count = ""; //초기값은 비워둔다.

for(var i =1; i<5; i++){

    count +=`${i}주\n`;


    for(j in yo){
        count += `${yo[j]}`
    };
    
    count +=`${i}마침\n`
}

console.log(count)

