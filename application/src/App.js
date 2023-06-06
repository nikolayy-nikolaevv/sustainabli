import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingComponent from './components/LandingComponent';
import SecondComponent from './components/SecondComponent';
import NavBar from './components/NavBar';
// import QuizSlider from "./components/QuizSlider";
import TextBox from './components/TextBox';
import Battery from './components/Battery';

function App() {
	return (
		<>
			<NavBar />
			<LandingComponent />
			<SecondComponent />
			{/* <QuizSlider /> */}
			<TextBox primaryColor="#F2B34A" secondaryColor="#6153BE" titleColor="#1E1E1E" title="Lithium - a Superhero" contentColor="#1E1E1E"
				boxType="RightBox" />
			<TextBox primaryColor="#2E2B42" secondaryColor="#F96738" titleColor="#F2B34A" title="The Dark Side of Lithium" contentColor="#FFFFFF"
				boxType="LeftBox" />
			<Battery />
		</>
	);
}


export default App;
