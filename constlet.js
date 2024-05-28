//다중 array

const myarr=[
    ["네이버", "http://www.naver.com"],
    ["다음", "http://www.daum.net"],
    ["구글", "http://www.google.com"]
]

console.log("첫번째 배열", myarr[0], typeof myarr[0], "첫번째배열의 첫번째 값", myarr[0][0], typeof myarr[0][0])
//원래는 typeof myarr[0]가 본 언어이다. ()붙이면 에러날 수도 있음.
//console.groupCollapsed("첫번째 배열", myarr[0], typeof(myarr[0]), "첫번째배열의 첫번째 값", myarr[0][0], typeof(myarr[0][0]))


console.log(`<a href='${myarr[0][1]}'>${myarr[0][0]}</>`)
// console.log("<a href='http://www.naver.com'>네이버</>") 
// ${myarr[0][1]}는 [0]는 myarr의 3개중 0번째이고 그 다음으로 오는 [1]는 ["네이버", "http://www.naver.com"],에서 1번째 순서인 링크가 오는 것이다.

console.log(`<a href='${myarr[1][1]}'>${myarr[1][0]}</>`)
console.log(`<a href='${myarr[2][1]}'>${myarr[2][0]}</>`)


