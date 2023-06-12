export default function Bubble({bubbleId, icon, bubbleCounter, onClickInput, setText, setCounter, counter, texts,
  color, size, top, left}) {
  return(
    <>
      {bubbleId == bubbleCounter ? (
        <div className = "Bubble" style = {{pointerEvents: 'auto', backgroundColor: `${color}`, height: `${size}`, 
          width: `${size}`, top: `${top}`, left: `${left}`}} 
          onClick={() => {onClickInput.fire();
            setCounter(counter + 1);
            setText(texts[counter])}}>
          <img src = {icon}></img>
        </div>
        ) : (
        <div className = "Bubble" style = {{pointerEvents: 'none', backgroundColor: `${color}`, height: `${size}`, 
        width: `${size}`, top: `${top}`, left: `${left}`}}>
          <img src = {icon}></img>
          {content}
        </div>
        )
      }
    </> 
  )
}