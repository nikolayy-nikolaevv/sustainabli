import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent';
import SecondComponent from './components/SecondComponent.jsx';
import SuperheroComponent from './components/SuperheroComponent';
import AntiheroComponent from './components/AntiheroComponent';
import NavBar from './components/NavBar';
// import QuizSlider from "./components/QuizSlider";
import TextBox from './components/TextBox';
import Battery from './components/Battery';
import TextImage from './components/TextImage';

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			<SecondComponent />
			{/* <QuizSlider /> */}
			<SuperheroComponent />
			<AntiheroComponent />
			<Battery />
		</>
	);
}


export default App;
