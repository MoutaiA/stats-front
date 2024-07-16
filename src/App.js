import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [clientID, setClientID] = useState('');
	useEffect(() => {
		axios
			.get('http://localhost:3000/api/client-id')
			.then((res) => setClientID(res.data.clientID))
			.catch((err) => console.error(err));
	});

	const handleClick = () => {
		const redirectUri = encodeURIComponent('http://localhost:3000/exchange_token');
		const stravaAuthUrl = `https://www.strava.com/oauth/authorize?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=code&scope=read,activity:write`;
		window.location.href = stravaAuthUrl;
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
