const header = {

    m1: {
        text:["펫시터가 와요", "훈련사", "플레이스", "사회공헌", "커뮤니티", "펫트너"],
        href: "./petopia.html"
    },
    
    sm: [ 
        //0
        {
            text:["방문 돌봄","집중 호스피스", "펫 플래닛","웨딩케어","안심 픽업&드랍"],
            href: "./petopia/petsitter.html"
        },

        //1
        {
            text:["훈련사 소개","훈련사에게 물어봐"],
            href: "./petopia/petcaring.html"
        },

        //2
        {
            text:["입점 문의","매장 찾기"],
            href: "./petopia/petplace.html"
        },
        
        //3
        {
            text:["지식 나눔", "심리 상담"],
            href: "./petopia/petsocial.html"
        },
        
        //4
        {
            text:["실시간 후기","구독 서비스"],
            href: "./petopia/petservice.html"
        },
        
        //5
        {
            text:["펫시터 지원","훈련사 지원","산책 케어 지원"],
            href: "./petopia/petcare.html"
        }]   
}

//대메뉴
console.log(`<a href="${header.m1.href}">${header.m1.text[3]}</a>`) //여기서 text뒤 []에 오는 숫자가 소메뉴에 sm[]안에 들어갈 숫자다.

//소메뉴
console.log(`<a href="${header.sm[3].href}">${header.sm[3].text[0]}</a>`)
console.log(`<a href="${header.sm[3].href}">${header.sm[3].text[1]}</a>`)