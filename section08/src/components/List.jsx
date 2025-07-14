import { useState, useEffect } from "react"
import "./List.css"
import TodoItem from "./TodoItem"
const List = ({ todos, onUpdate, onDelete }) => {
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

  return (
    <div className="List">
      <h3>Todo List😊</h3>
      <input
        placeholder="검색어를 입력하세요."
        value={keyword}
        onChange={onChangeSearch}
      />
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
