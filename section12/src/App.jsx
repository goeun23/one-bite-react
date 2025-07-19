import { Routes, Route, Link, useNavigate } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import New from "./pages/New"
import Diary from "./pages/Diary"
import Notfound from "./pages/Notfound"
import Button from "./components/Button"
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"}></Button>}
        rightChild={<Button text={"RIGHT"}></Button>}
      />
      <Button text={123}></Button>
      <Button text={123} type={"POSITIVE"}></Button>
      <Button text={123} type={"NEGATIVE"}></Button>
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
