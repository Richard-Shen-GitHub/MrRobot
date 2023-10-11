import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Analysis from './screens/Analysis';
import AboutUs from './screens/AboutUs';
import Notes from './screens/Notes';
// import ResponsiveAppBar from './components/navbar';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/analysis" element={<Analysis/>}/>
				<Route path="/about us" element={<AboutUs/>}/>
				<Route path="/notes" element={<Notes/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
