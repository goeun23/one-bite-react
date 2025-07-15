import { useState, useEffect, useMemo, useContext } from "react"
import "./List.css"
import TodoItem from "./TodoItem"
import { TodoDispatchContext, TodoStateContext } from "../App"
const List = () => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext)
  const todos = useContext(TodoStateContext)
  const [keyword, setKeyword] = useState("")

  const onChangeSearch = (e) => {
    setKeyword(e.target.value)
  }

  const getFilteredData = () => {
    if (keyword == "") {
      return todos
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(keyword.toLowerCase())
    )
  }

  const fileteredTodos = getFilteredData()

  const { todoCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalizedData 호출!")
    const todoCount = todos.length
    const doneCount = todos.filter((x) => x.isDone).length
    const notDoneCount = todoCount - doneCount
    return {
      todoCount,
      doneCount,
      notDoneCount,
    }
  }, [todos])

  return (
    <div className="List">
      <h3>Todo List😊</h3>
      <input
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={onChangeSearch}
      />
      <div>todoCount : {todoCount}</div>
      <div>doneCount : {doneCount}</div>
      <div>notDoneCount : {notDoneCount}</div>
      <div className="todo-wrapper">
        {fileteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          )
        })}
      </div>
    </div>
  )
}

export default List
