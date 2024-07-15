import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [clientID, setClientID] = useState('');
	useEffect(() => {
		axios
			.get('http://localhost:3000/')
			.then((res) => setClientID(res.data.clientID))
			.catch((err) => console.error(err));
	});

	const handleClick = () => {
		axios
			.post(
				`http://www.strava.com/oauth/authorize?client_id=${clientID}&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=read`
			)
			.then((res) => res.json())
			.then((res) => console.log('res', res))
			.catch((err) => console.error(err));
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<button onClick={handleClick}>Go strava!</button>
			</header>
		</div>
	);
}

export default App;
