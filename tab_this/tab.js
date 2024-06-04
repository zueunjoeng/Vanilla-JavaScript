window.onload = function(){
    const tabbtn = document.querySelectorAll("#tab li");
    tabbtn.forEach(function(ele, idx){
            ele.addEventListener('click', function(){
                // this.classList = 'on';
                //this.classList +=' on'; ->스피드가 빠름. 사칙연산이라
                
                const siblings = this.parentElement.children;
                //나의 부모의 자식들을 siblings로 저장하겠다.(html object)
                for(let sibling of siblings){
                    sibling.classList.remove('on');
                }

                this.classList.add('on'); //띄어쓰기 할필요없음. 알아서 클래스 삽입임으로. 함수
            }) //일반화하다.
    })
}