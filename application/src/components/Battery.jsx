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
    <div className = "AnimationContainer">
    <div className="BatteryAnimation Anchor">
      <RiveComponent style={{ height: "50vw" }} />
      <div className = "TextBubble" 
        onClick={() => {
          setCounter(counter + 1);
          setText(texts[counter])}}>
        <p>{text}</p>
      </div>
      <Bubble bubbleId = "1" bubbleCounter = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} color = "#F2B34A"
        size = "15vw" top = "30%" left = "20%" />  
      <Bubble bubbleId = "2" bubbleCounter = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} color = "#F2B34A"
        size = "20vh" top = "60%" left = "10%" />  
      <Bubble bubbleId = "3" bubbleCounter = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} color = "#F2B34A"
        size = "15vh" top = "20%" left = "90%" />  
      <Bubble bubbleId = "4" bubbleCounter = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} color = "#F2B34A"
        size = "15vh" top = "80%" left = "80%" />  
      <Bubble bubbleId = "5" bubbleCounter = {counter} onClickInput = {onClickInput} 
        setCounter = {setCounter} setText = {setText} counter = {counter} texts = {texts} color = "#F2B34A"
        size = "10vh" top = "10vh" left = "10vh" />  
    </div>
    </div>
  );
}