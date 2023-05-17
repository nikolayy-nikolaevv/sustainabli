import Logo from '../assets/images/logo.png';

export default function LandingHeader() {
    return (
        <div className="LandingHeader">
            <div className="LandingHeaderTitle">
                <div className="LandingHeaderTitleText" itemProp='InnerShadowText'>Sustainab</div>
                <div className="LandingHeaderLogo">
                    <img className="LandingHeaderLogoPic" src={Logo} />
                </div>
            </div>
            <div className="LandingHeaderSubTitle">
                <div className="LandingHeaderSubTitleText">Lithium can be pretty sus, learn more!</div>
            </div>
        </div>
    );
}
