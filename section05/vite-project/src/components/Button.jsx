const Button = ({ text, color = "blue", children = <span>no child</span> }) => {
  const onClickButton = (e) => {
    console.log(e)
  }
  return (
    <button onClick={onClickButton}>
      {text} - color : {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button
