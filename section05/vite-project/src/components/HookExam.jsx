import { useState } from "react"

import useInput from "../hooks/useInput"

const HookExam = () => {
  const [input, onChange] = useInput()
  const [input2, onChange2] = useInput()
  return (
    <>
      <input value={input} onChange={onChange} />
      {input}
      <input value={input2} onChange={onChange2} />
      {input2}
    </>
  )
}

export default HookExam
