import { useState, useRef, useContext } from "react"
import "./Editor.css"
import { TodoDispatchContext } from "../App"
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext)
  const [content, setContent] = useState("")
  const inputRef = useRef()

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit(content)
    }
  }

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus()
      return
    }
    onCreate(content)
    setContent("")
  }

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="할 일을 입력하세요."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  )
}

export default Editor
