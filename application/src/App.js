import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent';
import SecondComponent from './components/SecondComponent';
import NavBar from './components/NavBar';
// import QuizSlider from "./components/QuizSlider";
import TextBox from './components/TextBox';

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			<SecondComponent />
			{/* <QuizSlider /> */}
			<TextBox primaryColor = '#F2B34A' title = "Sample" content = "Lorem ipsum"/>
		</>
	);
}


export default App;
