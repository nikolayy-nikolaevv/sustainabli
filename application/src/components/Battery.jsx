import { useRive, useStateMachineInput } from "rive-react";

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

  return (
      <div className="BatteryAnimation">
        <RiveComponent style={{ height: "500px" }} />
        <button onClick={() => onClickInput.fire()}>Change Animation</button>
      </div>
  );
}