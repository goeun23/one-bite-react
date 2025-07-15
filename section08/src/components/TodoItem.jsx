import "./TodoItem.css"
import { memo } from "react"
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeToggle = (e) => {
    onUpdate(id)
  }
  const onDeleteTodo = () => {
    onDelete(id)
  }
  return (
    <>
      <div className="TodoItem">
        <input onChange={onChangeToggle} type="checkbox" checked={isDone} />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onDeleteTodo}>삭제</button>
      </div>
    </>
  )
}

export default memo(TodoItem)
