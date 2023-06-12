export default function Bubble({bubbleId, icon, content, bubbleCounter, onClickInput, setText, setCounter, counter, texts}) {
  return(
    <>
      {bubbleId == bubbleCounter ? (
        <div className = "Bubble" style = {{pointerEvents: 'auto'}} 
          onClick={() => {onClickInput.fire();
            setCounter(counter + 1);
            setText(texts[counter])}}>
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