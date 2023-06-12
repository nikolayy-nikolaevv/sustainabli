export default function LandingHeader({incrementLogo, decrementLogo, logo}) {
    return (
        <div className="LandingHeader">
            <div className="LandingHeaderTitle">
                <div className="LandingHeaderTitleText" itemProp='InnerShadowText'>Sustainab</div>
                <div className="LandingHeaderLogo" onClick={incrementLogo} onContextMenu={decrementLogo}>
                    <img className="LandingHeaderLogoPic" src={logo} alt="Periodic Table Li Logo"/>
                </div>
            </div>
            <div className="LandingHeaderSubTitle">
                <div className="LandingHeaderSubTitleText">Lithium can be pretty sus, learn more!</div>
            </div>
        </div>
    );
}