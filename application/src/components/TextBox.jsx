// boxType must be 'RightBox' or 'LeftBox'
export default function TextBox({ primaryColor, secondaryColor, titleColor, title, contentColor, content, boxType}) {
  let BoxType = boxType;
  return (
    <div className={BoxType} style={{ backgroundColor: `${primaryColor}`}}>
      <div className = "Ornament1" style={{ backgroundColor: `${secondaryColor}`}}></div>
      <div className = "Ornament2" style={{ backgroundColor: `${secondaryColor}`}}></div>
      <div className="TextContainer">
        <div className="InfoTitle" style={{ color: `${titleColor}`}}>{title}</div>
        <div className="InfoText" style={{ color: `${contentColor}`}}>{content}</div>
      </div>
      <div className = "Ornament3" style={{ backgroundColor: `${secondaryColor}`}}></div>
    </div>
  )
}