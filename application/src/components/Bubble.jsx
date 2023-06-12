export default function Bubble({bubbleId, icon, content, bubbleCounter, animationTrigger, onClickInput}) {
  return(
    <>
      {bubbleId == bubbleCounter ? (
        <div className = "Bubble" style = {{pointerEvents: 'auto'}} onClick={() => onClickInput.fire()}>
          <img src = {icon}></img>
          {content}
        </div>
        ) : (
        <div className = "Bubble" style = {{pointerEvents: 'none'}}>
          <img src = {icon}></img>
          {content}
        </div>
        )
      }
    </> 
  )
}