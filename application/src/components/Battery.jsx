import { useRive, useStateMachineInput } from "rive-react";
import Bubble from "./Bubble";
import { useState } from "react";
import thermometer from "../assets/images/Thermometer.svg";
import bandAid from "../assets/images/Band_aid.svg";
import lightning from "../assets/images/Lightning.svg";
import sunGlasses from "../assets/images/Sun_glasses.svg";
import oldBattery from "../assets/images/Old_battery.svg";

export default function Battery() {
	const text1 = '<span>Can you help your battery recover? Try lowering <span style="color: red; scale: 1.1;"> the temperature!</span></span>'
	const text2 = '<span>Well done! Extreme temperatures can damage the battery and shorten its lifespan. Now, get rid of <span style="color: red; scale: 1.1;"> the band-aid.</span></span>'
	const text3 = '<span>Good job! Shocks and impacts can damage your battery, so don\'t drop it! Poor little guy looks tired. Time for an <span style="color: red; scale: 1.1;">energy boost!</span></span>';
	const text4 = '<span>Ahh, much better! Keep the battery between 20% and 80% and avoid fully discharging or charging it. If possible, use original chargers. Now, let\'s <span style="color: red; scale: 1.1;">relax a little.</span></span>';
	const text5 = '<span>Nice! Want your battery to stay relaxed? Use power-saving modes to reduce energy consumption. But no matter what you do, at some point your battery <span style="color: red; scale: 1.1;">needs to retire...</span></span>';
	const text6 = 'Fantastic! Old batteries like to retire to electronics retailers or to official collection points so that precious metals can be recycled. Now you know how to treat your battery right. Well done!';

	const texts = [text1, text2, text3, text4, text5, text6];
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
		<div id="what-you-can-do">
			<div className="AnimationContainer">
				<p className="ChartTitle">What You Can Do</p>
				<div className="BatteryAnimation Anchor">
					<RiveComponent style={{ height: "50vw" }} />
					<div className="TextBubble" dangerouslySetInnerHTML={{ __html: text }}>
					</div>
					<Bubble bubbleId="1" icon={thermometer} bubbleCounter={counter} onClickInput={onClickInput}
						setCounter={setCounter} setText={setText} counter={counter} texts={texts} color="#2E2B42"
						size="15vw" top="30%" left="20%" />
					<Bubble bubbleId="2" icon={bandAid} bubbleCounter={counter} onClickInput={onClickInput}
						setCounter={setCounter} setText={setText} counter={counter} texts={texts} color="#2E2B42"
						size="20vh" top="60%" left="10%" />
					<Bubble bubbleId="3" icon={lightning} bubbleCounter={counter} onClickInput={onClickInput}
						setCounter={setCounter} setText={setText} counter={counter} texts={texts} color="#2E2B42"
						size="15vh" top="20%" left="90%" />
					<Bubble bubbleId="4" icon={sunGlasses} bubbleCounter={counter} onClickInput={onClickInput}
						setCounter={setCounter} setText={setText} counter={counter} texts={texts} color="#2E2B42"
						size="15vh" top="80%" left="80%" />
					<Bubble bubbleId="5" icon={oldBattery} bubbleCounter={counter} onClickInput={onClickInput}
						setCounter={setCounter} setText={setText} counter={counter} texts={texts} color="#2E2B42"
						size="18vh" top="10%" left="10%" />
				</div>
			</div>
		</div>
	);
}