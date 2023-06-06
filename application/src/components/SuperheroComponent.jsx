import TextBox from "./TextBox";
import TextImage from "./TextImage";


export default function SuperheroComponent() {
	return (
		<>
			<TextBox primaryColor="#F2B34A" secondaryColor="#6153BE" titleColor="#1E1E1E" title="Lithium - a Superhero" contentColor="#1E1E1E"
				boxType="RightBox" />
			<TextImage boxType="RightBox" />
		</>
	);

}