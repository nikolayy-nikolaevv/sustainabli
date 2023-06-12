export default function Bubble({icon, content}) {
  return(
    <>
      <div className = "Bubble">
        <img src = {icon}></img>
        {content}
      </div>
    </>
  )

}