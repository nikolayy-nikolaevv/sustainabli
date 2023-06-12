import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent';
import SecondComponent from './components/SecondComponent.jsx';
import SuperheroComponent from './components/SuperheroComponent';
import AntiheroComponent from './components/AntiheroComponent';
import NavBar from './components/NavBar';
import LithiumUsageComponent from './components/LithiumUsageComponent';
// import QuizSlider from "./components/QuizSlider";
import Battery from './components/Battery';

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			<SecondComponent />
			{/* <QuizSlider /> */}
			<SuperheroComponent />
			<LithiumUsageComponent />
			<AntiheroComponent />
			<Battery />
		</>
	);
}

export default App;
