import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../MrRobot/my-react-app/src/screens/Home';
// import ResponsiveAppBar from './components/navbar';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
