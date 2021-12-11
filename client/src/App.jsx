import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import {_App} from './stl-cmp'

function App() {
	return (
		<_App>
			<Navbar />
			<div className="container">
				<Outlet/>
			</div>
		</_App>
	);
}

export default App;
