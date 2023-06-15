export default function Bubble({ bubbleId, icon, bubbleCounter, onClickInput, setText, setCounter, counter, texts,
	color, size, top, left }) {
	const myId = "Bubble" + { bubbleCounter };
	return (
		<>
			{Number(bubbleId) === Number(bubbleCounter) ? (
				<div className="Bubble BubbleActive" id={myId} style={{
					pointerEvents: 'auto', backgroundColor: `${color}`, height: `${size}`,
					width: `${size}`, top: `${top}`, left: `${left}`
				}}
					onClick={() => {
						onClickInput.fire();
						setText(texts[counter]);
						setCounter(counter + 1);
						setTimeout(() => onClickInput.fire(), 1500);
						document.getElementById(myId).style.visibility = "hidden"
					}}>
					<img alt="" src={icon} style={{ height: `${size}` }}></img>
				</div>
			) : (
				<div className="Bubble" style={{
					pointerEvents: 'none', backgroundColor: `${color}`, height: `${size}`,
					width: `${size}`, top: `${top}`, left: `${left}`
				}}>
					<img alt="" src={icon} style={{ height: `${size}` }}></img>
				</div>
			)
			}
		</>
	)
}