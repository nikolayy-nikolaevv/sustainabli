import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';

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
            </Navbar>
    );
}