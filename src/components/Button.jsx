import '../css/Button.css'

export const Button = ({ text, onClick, type }) => {
  return (
    <button onClick={onClick} type={type} className="btn">
      {text}
    </button>
  )
}