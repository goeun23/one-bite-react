import { useState } from "react"
// 커스텀 훅
const useInput = () => {
  const [input, setInput] = useState("")
  const onChangeInput = (e) => {
    setInput(e.target.value)
  }
  return [input, onChangeInput]
}

export default useInput
