let meg="";

for(let i = 0; i < 10; i++){ //i++과 같은 표현 i +=1 , i +=2는 5번밖에 안나옴. 2씩 5번나오면 10번금방이다.
    meg +="나 \"열번\"나오게 해줘 \n"; 
    // \n 을 붙여야 떨어지면서 한 줄씩 나온다.
    // \"글자\" 하면 출력 시 ""가 붙어서 나온다. \"안녕\" -> "안녕"
}
// console.log(meg)

const nav_data=[
    {
        gnb_li_a: "회사소개",
        gnb_li_href:"./company.html"
    },

    {
        gnb_li_a: "제품소개",
        gnb_li_href:"./product.html"
    },

    {
        gnb_li_a: "커뮤니티",
        gnb_li_href:"./board.html"
    },

    {
        gnb_li_a: "인트로넷",
        gnb_li_href:"./intro.html"
    }
]

//object 접근법
    //console.log(nav_data[1].gnb_li_href);
    //console.log(nav_data[1]["gnb_li_href"]); //object를 array처럼 표현하는 방법 ->키를 상수로 인식시킨다. /리액트에서 사용하는 방법.
    
    let mygnb=""; //null를 넣던, 빈칸을 넣던 똑같다.
    for(let liea =0; liea < 4; liea++){ // liea < 4 가 아니라 nav_data.length;로 하면 오류없이 출력됨
        mygnb += nav_data[liea].gnb_li_href;
    }
    //console.log(mygnb);

    let mygnb2=""; 
    for(let v in nav_data){ 
        //console.log("forin문처리 : ",v);
        mygnb2 += `${nav_data[v].gnb_li_href}\n`;
    }
    console.log(mygnb2);


    // document.getElementsByClassName("gnb").length -> gnb의 갯수만큼~
    // document.querySelectorAll("gnb").length;