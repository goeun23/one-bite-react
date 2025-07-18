import { Routes, Route, Link, useNavigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Notfound from "./pages/Notfound"
function App() {
  const navigation = useNavigate()
  const onClickButton = () => {
    navigation("/new")
  }
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>

      <a href="/new">new</a>
      <a href="/">home</a>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
