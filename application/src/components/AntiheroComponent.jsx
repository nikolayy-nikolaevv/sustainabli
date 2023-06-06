import TextBox from "./TextBox";
import TextImage from "./TextImage";


export default function SuperheroComponent() {
	return (
		<>
			<TextBox primaryColor="#2E2B42" secondaryColor="#F96738" titleColor="#F2B34A" title="The Dark Side of Lithium" contentColor="#FFFFFF"
				boxType="LeftBox" />
			<TextImage boxType="LeftBox" />
		</>
	);

}