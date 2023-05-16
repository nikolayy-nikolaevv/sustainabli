import LandingHeader from "./LandingHeader";
import AtomTop from "../assets/images/atom_top.png";
import AtomMiddle from "../assets/images/atom_middle.png";
import AtomBottom from "../assets/images/atom_bottom.png";

export default function SecondComponent() {
    return (
        <div className="SecondComponent">
            <div className="AtomTop AtomSpinner">
                <img src={AtomTop} />
            </div>
            <div className="AtomMiddle AtomSpinner">
                <img src={AtomMiddle} />
            </div>
            <div className="AtomBottom AtomSpinner">
                <img src={AtomBottom} />
            </div>
            <LandingHeader />
        </div>
    );
}