import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Cafe from './screens/Cafe';
import Social_Engineering from './screens/Social_Engineering';
import DDOS from './screens/DDOS';
import Hospital from './screens/Hospital';
import Tape_Backups from './screens/Tape_Backups';
import Car from './screens/Car';
import Prison from './screens/Prison';
import References from './screens/References';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/home" element={<Home/>}/>
				<Route path="/cafe" element={<Cafe/>}/>
				<Route path="/social_engineering" element={<Social_Engineering/>}/>
				<Route path="/ddos" element={<DDOS/>}/>
				<Route path="/hospital" element={<Hospital/>}/>
				<Route path="/tape_backups" element={<Tape_Backups/>}/>
				<Route path="/car" element={<Car/>}/>
				<Route path="/prison" element={<Prison/>}/>
				<Route path="/references" element={<References/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
