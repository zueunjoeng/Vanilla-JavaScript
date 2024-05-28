let _month=['2', '3', '7']
let _study=['피그마','뷰','리액트']
let _name=['홍길동', '나훈아', '조명섭']

const myarrobj = {
    _month: [2,3,7],
    _study: ['피그마','뷰','리액트'],
    _name: ['홍길동', '나훈아', '조명섭']
}
//myarrobj라는 집합체 안에 _month,_study,_name라는 변수집합을 넣은 것
//const 000 = {}는 오브젝트, const 000=[]는 array
console.log(myarrobj._study[0])

const gnb ={
    d1:{
        text:"회사소개",
        href:"./company.html"
    },
    d2: [
        {
            text:"ceo인사말",
            href:"./ceo.html" 
        },
        {
            text:"조직도",
            href:"./organ.html" 
        },
    ]

}
console.log(`<a href="${gnb.d1.href}">${gnb.d1.text}</a>`)
console.log(`<a href="${gnb.d2[0].href}">${gnb.d2[0].text}</a>`)
console.log(`<a href="${gnb.d2[1].href}">${gnb.d2[1].text}</a>`)

//객체의 키 = d1, d2, text, href와 같은 거야 
//array는 값만 있어도 돼. {}는 키와 값이 있어야해. 

//(ex)) const 펫 ={이름(키) : "겨울이(값)", 종 : "고양이", 나이: 8, 무늬: "턱시도"} -> 이름~무늬까지 펫에 들어가는 거야.
//{}오브젝트에서는 키가 있기때문에 순서 바뀌어도 됌.
//[]array이는 행과 열로 표현 / 순서 바뀌면 안됌 -> 전달력이 떨어짐

const pet ={
	name: "겨울이",
	species : "고양이",
	age: 8,
	tile: "턱시도",
	charm: function(){
		return "고개를 옆으로 돌리고 야옹한다.";
	}
    //return을 넣어야 {}안 글자가 출력된다.
}
console.log(`나의${pet.name}는${pet.species}`)
console.log(`나의${pet.species}는${pet.tile}`)
console.log(`나의${pet.name}는 ${pet.charm()}`)