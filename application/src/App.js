import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent';
import SecondComponent from './components/SecondComponent.jsx';
import SuperheroComponent from './components/SuperheroComponent';
import AntiheroComponent from './components/AntiheroComponent';
import NavBar from './components/NavBar';
import LithiumUsageComponent from './components/LithiumUsageComponent';
import QuizSlider from "./components/QuizSlider";
import Battery from './components/Battery';
import { useState } from 'react';
import Logo from './assets/images/logo.svg';
import Logo_Blue from './assets/images/logo_blue.svg';
import Logo_Green from './assets/images/logo_green.svg';
import Logo_Lila from './assets/images/logo_lila.svg';
import Logo_Magenta from './assets/images/logo_magenta.svg';
import Logo_Red from './assets/images/logo_red.svg';
import Logo_Rosa from './assets/images/logo_rosa.svg';
import Logo_Turquoise from './assets/images/logo_turquoise.svg';
import Logo_Yellow from './assets/images/logo_yellow.svg';

const images = [Logo, Logo_Blue, Logo_Green, Logo_Lila, Logo_Magenta, Logo_Red, Logo_Rosa, Logo_Turquoise, Logo_Yellow];

function App() {
	const [currentLogo, setCurrentLogo] = useState(0);
	const incrementLogo = () => {
		if (currentLogo < images.length - 1)
			setCurrentLogo(currentLogo + 1);
		else setCurrentLogo(0);
	}
	const decrementLogo = (e) => {
		e.preventDefault();
		if (currentLogo > 0)
			setCurrentLogo(currentLogo - 1);
		else setCurrentLogo(images.length - 1);
	}

	return (
		<>
			<NavBar logo={images[currentLogo]} />
			<LandingComponent logo={images[currentLogo]} incrementLogo={incrementLogo} decrementLogo={decrementLogo} />
			<SecondComponent />
			<SuperheroComponent />
			<LithiumUsageComponent />
			<AntiheroComponent />
			<Battery />
			<QuizSlider />
		</>
	);
}

export default App;
