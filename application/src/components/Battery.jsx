import { useRive, useStateMachineInput } from "rive-react";
import Bubble from "./Bubble";
import { useState } from "react";

export default function Battery() {
  const texts = ['Can you help your battery recover? Try lowering the temperature!', 'Tip 1', 'Tip 2', 'Tip 3', 'Tip 4', 
                'Tip 5', 'Great Job'];
  const [counter, setCounter] = useState(1);
  const [text, setText] = useState(texts[0])

  const STATE_MACHINE = "State Machine";
  const INPUT_NAME = "Switch";

  const { rive, RiveComponent } = useRive({
    src: "battery.riv",
    stateMachines: STATE_MACHINE,
    autoplay: true
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE,
    INPUT_NAME
  );

  return (
    <div className="BatteryAnimation Anchor">
      <RiveComponent style={{ height: "50vw" }} />
      <div className = "TextBubble" 
        onClick={() => {
          setCounter(counter + 1);
          setText(texts[counter])}}>
        <p>{text}</p>
      </div>
      <Bubble bubbleId = "1" bubbleCounter = {counter} content = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} />  
      <Bubble bubbleId = "2" bubbleCounter = {counter} content = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} />  
      <Bubble bubbleId = "3" bubbleCounter = {counter} content = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} />  
      <Bubble bubbleId = "4" bubbleCounter = {counter} content = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} />  
      <Bubble bubbleId = "5" bubbleCounter = {counter} content = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} />  
    </div>
  );
}