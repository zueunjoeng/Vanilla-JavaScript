let _month=[2, 3, 7]
// 주의, 숫자는 ''을 붙이지 않는다!!!
let _study=['피그마','뷰','리액트']  // 순서대로 0, 1, 2..
let _name=['홍길동', '나훈아', '조명섭']

const myword0=`저는 ${_month[0]}개월간 ${_study[0]} 공부를 한 ${_name[0]}입니다.`; // ->리액트가 나간다.
const myword1=`저는 ${_month[1]}개월간 ${_study[1]} 공부를 한 ${_name[1]}입니다.`;
const myword2=`저는 ${_month[2]}개월간 ${_study[2]} 공부를 한 ${_name[2]}입니다.`;
console.log(myword0, myword1, myword2 );
