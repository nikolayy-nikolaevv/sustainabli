export default function TextBox({ primaryColor, title, content, direction}) {
  
  return (
    <div className="TextBox" style={{ backgroundColor: `${primaryColor}`}}>
      <div className="InfoTitle">{title}</div>
      <div className="InfoText">{content}</div>
    </div>
  )
}