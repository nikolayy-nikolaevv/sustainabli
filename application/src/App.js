import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent'
import NavBar from './components/NavBar';
// import QuizSlider from "./components/QuizSlider";

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			{/* <QuizSlider /> */}
		</>
	);
}


export default App;
