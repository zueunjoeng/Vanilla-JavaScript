const gnb ={
    classname:["gnb_p", "gnb_a"],
    gnb_a: {
        href:"gnb.html",
        text: "네비"
    }

   
}

console.log(`<p class='${gnb.classname[0]}'><a href='${gnb.gnb_a.href}' class=${gnb.classname[1]}>${gnb.gnb_a.text}</a></p>`);

// 출력시 <p class='gnb_p'><a href='gnb.html' class='gnb_a'>네비</a></p>