import Logo from '../assets/images/logo.svg';

export default function LandingHeader() {
    return (
        <div className="LandingHeader">
            <div className="LandingHeaderTitle">
                <div className="LandingHeaderTitleText" itemProp='InnerShadowText'>Sustainab</div>
                <div className="LandingHeaderLogo">
                    <img className="LandingHeaderLogoPic" src={Logo} alt="Periodic Table Li Logo"/>
                </div>
            </div>
            <div className="LandingHeaderSubTitle">
                <div className="LandingHeaderSubTitleText">Lithium can be pretty sus, learn more!</div>
            </div>
        </div>
    );
}
