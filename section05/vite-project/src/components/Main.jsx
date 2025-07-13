import "../components/Main.css"
// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.
const Main = () => {
  const user = {
    name: "최고은",
    isLogin: true,
  }

  if (user.isLogin) {
    return <div className="logout">로그아웃</div>
  } else {
    return <div>로그인</div>
  }
  //   return (
  //     <main>
  //       <h1>Main</h1>
  //       <h2>{user.isLogin ? <div>로그인</div> : <div>로그아웃</div>}</h2>
  //     </main>
  //   )
}

export default Main
