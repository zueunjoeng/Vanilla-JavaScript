const header = {

    m1: {
        text:["펫시터가 와요", "훈련사", "플레이스", "사회공헌", "커뮤니티", "펫트너"],
        href: "./petopia.html"
    },
    
    sm1: {
            text:["방문 돌봄","집중 호스피스", "펫 플래닛","웨딩케어","안심 픽업&드랍"],
            href: "./petopia/petsitter.html"
        },


    sm2: {
        text:["훈련사 소개","훈련사에게 물어봐"],
        href: "./petopia/petcaring.html"
    },

    sm3:{
        text:["입점 문의","매장 찾기"],
        href: "./petopia/petplace.html"
    },

    sm4:{
        text:["지식 나눔", "심리 상담"],
        href: "./petopia/petsocial.html"
    },

    sm5:{
        text:["실시간 후기","구독 서비스"],
        href: "./petopia/petservice.html"
    },

    sm6:{
        text:["펫시터 지원","훈련사 지원","산책 케어 지원"],
        href: "./petopia/petcare.html"
    }     
}

//대메뉴
console.log(`<a href="${header.m1.href}">${header.m1.text[0]}</a>`)

//소메뉴
console.log(`<a href="${header.sm1.href}">${header.sm1.text[2]}</a>`)
console.log(`<a href="${header.sm1.href}">${header.sm1.text[3]}</a>`)