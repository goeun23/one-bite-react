import { useState, useRef } from "react"

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    date: "",
    country: "",
    bio: "",
    gender: "",
  })

  const countRef = useRef(0)
  const inputRef = useRef()

  const onChange = (e) => {
    countRef.current++
    console.log(countRef)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    if (input.name === "") {
      // ref는 current가 붙는 이유가 뭐지
      inputRef.current.focus()
    }
  }

  return (
    <>
      <div>
        <label>
          <input value="male" onChange={onChange} type="radio" name="gender" />
          남성
        </label>
        <label>
          <input
            value="female"
            onChange={onChange}
            type="radio"
            name="gender"
          />
          여성
        </label>
        {input.gender}
      </div>
      <div>
        <input
          ref={inputRef}
          placeholder="이름"
          name="name"
          value={input.name}
          onChange={onChange}
        />
        {input.name}
      </div>
      <div>
        <input type="date" name="date" value={input.date} onChange={onChange} />
        {input.date}
      </div>
      <div>
        <select name="country" onChange={onChange} value={input.country}>
          <option></option>
          <option value="kr">한국</option>
          <option value="uk">영국</option>
          <option value="jp">일본</option>
        </select>
        {input.country}
      </div>
      <div>
        <textarea name="bio" onChange={onChange} value={input.bio} />
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </>
  )
}

export default Register
