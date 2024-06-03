const yo = ["월", "화", "수", "목", "금", "토", "일"];

let count = ""; //초기값은 비워둔다.

for(var i =1; i<5; i++){

    count +=`${i}주\n`;


    for(j in yo){
        count += `${yo[j]}`
    };
    
    count +=`${i}마침\n`
}

console.log(count);

const day = ["one", "two", "three", "four", "five"];

let ch ="";

for(var c=1; c<5; c++){
    ch +=`${c}달\n`

    for(k in day){
        ch += `${day[k]}일\n`
    };

    ch +=`${c}마침`
}

console.log(ch);