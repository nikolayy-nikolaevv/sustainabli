import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent';
import SecondComponent from './components/SecondComponent';
import NavBar from './components/NavBar';
// import QuizSlider from "./components/QuizSlider";

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			<SecondComponent />
			{/* <QuizSlider /> */}
		</>
	);
}


export default App;
