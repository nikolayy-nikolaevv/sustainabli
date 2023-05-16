import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';
import Battery from '../assets/images/ScrollBattery.svg';
import {NavbarBrand} from "react-bootstrap";



export default function NavBar() {
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
window.addEventListener("scroll",function(event){
    var scroll = this.scrollY;
    const BL = document.getElementById('batteryLevel');
    if(scroll > 700){
        BL.style.backgroundImage = 'linear-gradient(to right, #D1F24B, #96FB47)';
        BL.style.width = "3vw";
    }
    if(scroll<700){
        BL.style.backgroundImage = 'linear-gradient(to right, #ED7650, #F2B34A)';
        BL.style.width = "2vw";

    }
});
