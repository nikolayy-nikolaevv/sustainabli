import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent'
import NavBar from './components/NavBar';
import QuizSlide from "./components/QuizSlide";

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			<QuizSlide />
		</>
	);
}


export default App;
