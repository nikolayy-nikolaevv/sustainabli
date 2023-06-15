import LandingHeader from "./LandingHeader";
import AtomTop from "../assets/images/atom_top.png";
import AtomMiddle from "../assets/images/atom_middle.png";
import AtomBottom from "../assets/images/atom_bottom.png";

export default function LandingComponent({ incrementLogo, decrementLogo, logo }) {
	return (
		<>
			<div id="landing" className="LandingComponent Anchor">
				<div className="AtomTop AtomSpinner">
					<img src={AtomTop} className="AtomImage" alt="Spinning Atom" />
				</div>
				<div className="AtomMiddle AtomSpinner">
					<img src={AtomMiddle} className="AtomImage" alt="Spinning Atom" />
				</div>
				<div className="AtomBottom AtomSpinner">
					<img src={AtomBottom} className="AtomImage" alt="Spinning Atom" />
				</div>
				<LandingHeader incrementLogo={incrementLogo} logo={logo} decrementLogo={decrementLogo} />
			</div>

		</>
	);
}