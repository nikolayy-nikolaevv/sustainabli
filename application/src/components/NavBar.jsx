import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';


export default function NavBar() {
    window.addEventListener("scroll",function(event){
        const batteryLevel = document.getElementById('batteryLevel');
        const scrollPos = window.scrollY;
        const batteryProgress = 10 + scrollPos / 100;
        batteryLevel.style.width = batteryProgress + "%";
        const colorStart = "rgb(" + (237 - batteryProgress * 1.5) + ","+(118 + batteryProgress * 0.4)+",80)";
        const colorEnd = "rgb(" + (242 - batteryProgress * 1.5) + ","+(179 + batteryProgress * 0.4)+",74)";
        batteryLevel.style.backgroundImage = "linear-gradient(to right, " + colorStart + ", " + colorEnd + ")";

    });
    return (
            <Navbar className="NavBar" fixed="top">
                <Navbar.Brand href="/" className="NavBarLogo">
                    <img
                        src={Logo}
                        className="NavBarLogoPic d-inline-block align-top"
                        alt="Li Logo"
                    />
                </Navbar.Brand>
                <Nav className="NavBarLink">
                    <Nav.Link className="NavBarLinkText" href="#lithium-superhero">Lithium - a Superhero</Nav.Link>
                    <Nav.Link className="NavBarLinkText" href="#dark-side-lithium">The Dark Side of Lithium</Nav.Link>
                    <Nav.Link className="NavBarLinkText" href="#what-you-can-do">What You Can Do</Nav.Link>
                    <Nav.Link className="NavBarLinkText" href="#participate">Participate</Nav.Link>
                </Nav>
                <div className="batteryContainer">

                    <div className="batteryOuter">
                        <div id="batteryLevel"></div>
                    </div>
                    <div className="batteryBump"></div>
                </div>

            </Navbar>

    );
}

