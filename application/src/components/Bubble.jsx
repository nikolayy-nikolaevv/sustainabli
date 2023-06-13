export default function Bubble({bubbleId, icon, bubbleCounter, onClickInput, setText, setCounter, counter, texts,
  color, size, top, left}) {
    const myId = "Bubble" + {bubbleCounter};
  return(
    <>
      {bubbleId === bubbleCounter ? (
        <div className = "Bubble" id = {myId} style = {{pointerEvents: 'auto', backgroundColor: `${color}`, height: `${size}`, 
          width: `${size}`, top: `${top}`, left: `${left}`}} 
          onClick={() => {onClickInput.fire();
            setCounter(counter + 1);
            setText(texts[counter]);
            document.getElementById(myId).style.visibility = "hidden"}}>
          <img alt="" src = {icon} style = {{height: `${size}`}}></img>
        </div>
        ) : (
        <div className = "Bubble" style = {{pointerEvents: 'none', backgroundColor: `${color}`, height: `${size}`, 
        width: `${size}`, top: `${top}`, left: `${left}`}}>
          <img alt="" src = {icon} style = {{height: `${size}`}}></img>
        </div>
        )
      }
    </> 
  )
}