import "./App.css"
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import { useState, useRef, useReducer, createContext, useMemo } from "react"

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

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state]
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
      )
    // 강사님이 짠 코드(state.data 형식을 모두 다 맞추지는 않아도 된다.)
    // state.map((item)=> item.id === action.targetId ? {...item, isDone : !item.isDone} : todo)
    case "DELETE":
      return state.filter((todo) => todo.id !== action.data)
  }
}

export const TodoStateContext = createContext()
export const TodoDispatchContext = createContext()

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData)
  let newIdRef = useRef(mockData.length)

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: newIdRef.current++,
        date: new Date().getTime(),
        content: content,
        isDone: false,
      },
    })
  }

  const onUpdate = (id) => {
    dispatch({
      type: "UPDATE",
      data: id,
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: id,
    })
  }

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    }
  }, [])

  return (
    <div className="App">
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Header />
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
