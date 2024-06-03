const header = {
//한 ul, li를 표시 => '훈련사'->훈련사소개, 훈련사에게 물어봐 >같이 array에 있어야한다.
    m1: {
        text:["펫시터가 와요"],
        href: "./petopia.html",
        sm1:[
            {
                text:["방문 돌봄"],
                href: "/petopia/petsitter.html"
            },
            {
                text:["집중 호스피스"],
                href: "/petopia/pethos.html"
            },
            {
                text:["펫 플래닛"],
                href: "/petopia/petplan.html"
            },
            {
                text:["웨딩케어"],
                href: "/petopia/petwedding.html"
            },
            {
                text:["안심 픽업&드랍"],
                href: "/petopia/petpick.html"
            }]
    },
    m2: {
        text:["훈련사"],
        href: "/petopia.html",
        sm2:[
            {
                text:["훈련사 소개"],
                href: "/petopia/petrain.html"},
            {
                text:["훈련사에게 물어봐"],
                href: "/petopia/petask.html"}]
    },
    m3: {
        text:["플레이스"],
        href: "./petopia.html",
        sm3:[
            {
                text:["입점 문의"],
                href: "/petopia/petshop.html"},
            {
                text:["매장 찾기"],
                href:"/petopia/petplace.html"}]
    },
    m4: {
        text:["사회공헌"],
        href: "./petopia.html",
        sm4:[
            {
                text:["봉사활동"],
                href: "/petopia/petvolunt.html"},
            {
                text:["지식 나눔"],
                href:"/petopia/petknowl.html"},
                {
                    text:["심리 상담"],
                    href:"/petopia/petsocial.html"}]
    },
    m5: {
        text:["커뮤니티"],
        href: "./petopia.html",
        sm5:[
            {
                text:["실시간 후기"],
                href: "/petopia/petreview.html"},
            {
                text:["구독 서비스"],
                href:"/petopia/petservice.html"}]
    },
    m6: {
        text:["펫트너"],
        href: "./petopia.html",
        sm6:[
            {
                text:["펫시터 지원"],
                href: "/petopia/petcare.html"},
            {
                text:["훈련사 지원"],
                href: "/petopia/pettraincare.html"},
            {
                text:["산책 케어 지원"],
                href: "/petopia/petwalkcare.html"}]
    }
}

//대메뉴
console.log(`<a href="${header.m1.href}">${header.m1.text[3]}</a>`) //여기서 text뒤 []에 오는 숫자가 소메뉴에 sm[]안에 들어갈 숫자다.

//소메뉴
console.log(`<a href="${header.sm[3].href}">${header.sm[3].text[0]}</a>`)
console.log(`<a href="${header.sm[3].href}">${header.sm[3].text[1]}</a>`)