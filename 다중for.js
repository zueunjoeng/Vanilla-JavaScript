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

nav_data[0]["gnb_li_a"]

let mygnb="";
for(let liea =0; liea < nav_data.length; liea++){
    mygnb += nav_data[liea].gnb_li_href;
}
console.log(mygnb);


let mygnb2=""; 
for(let v in nav_data[0]){ //array속 [0]의 href 랑 a 둘다 나온다.
    //console.log("forin문처리 : ",v);
    mygnb2 += nav_data[0][v];
}
console.log(mygnb2);