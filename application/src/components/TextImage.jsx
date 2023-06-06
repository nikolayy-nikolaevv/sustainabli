import SuperheroImage from "../assets/images/Superhero_Battery.svg"
import AntiheroImage from "../assets/images/Antihero_Battery.svg"

export default function TextImage({ boxType }) {
	return (
		<div className={boxType === "RightBox" ? "RightTextImageContainer" : "LeftTextImageContainer"}>
			<img src={boxType === "RightBox" ? SuperheroImage : AntiheroImage} alt="Battery" className="TextBoxImage" />
		</div>
	);
}