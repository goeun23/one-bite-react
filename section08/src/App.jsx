import "./App.css"
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import { useState, useRef } from "react"

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "react 학습하기",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData)
  let newIdRef = useRef(mockData.length)

  const onCreate = (content) => {
    const newTodos = {
      id: newIdRef.current++,
      date: new Date().getTime(),
      content: content,
      isDone: false,
    }

    setTodos([newTodos, ...todos])
  }

  const onUpdate = (id) => {
    // 내가 짠 것
    // todos state 중에 targetId와 일치하는 id를 갖는 todo item의 isDone을 toggle
    // todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.isDone = todo.isDone === true ? false : true
    //   }
    // })
    // setTodos[{ ...todos }]

    // 강사님이 짠 것
    // setTodos(
    //   todos.map((todo) => {
    //     if (todo.id === id) {
    //       return {
    //         ...todo,
    //         isDone: !todo.isDone,
    //       }
    //     } else {
    //       return todo
    //     }
    //   })
    // )

    // 간결하게 하면 wwwwwwwwwwwwow
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const onDelete = (id) => {
    // todo.findIndex = todos.find(todo.id === id)
    // const removed = todos.splice()

    // filter 아닌 줄 알았는데 filter 였누..
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
