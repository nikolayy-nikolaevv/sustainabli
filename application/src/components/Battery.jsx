import { useRive, useStateMachineInput } from "rive-react";
import Bubble from "./Bubble";

export default function Battery() {
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

  const text = 'Can you help your battery recover? Try lowering the temperature!'

  return (
    <div className="BatteryAnimation Anchor">
      <RiveComponent style={{ height: "500px" }} />
      <div className = "TextBubble">
        <p>{text}</p>
        <button onClick={() => onClickInput.fire()}>Change Animation</button>
      </div>
      <Bubble content = "lol"></Bubble>
    </div>
  );
}