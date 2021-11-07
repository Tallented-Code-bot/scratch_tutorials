import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Tutorial from './Tutorial';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	const title="Welcome";
	const likes=50;
	return (
		<Router>
			<div className="App">
				<Navbar />	
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/about">
							<About/>
						</Route>
						<Route path="/tutorials/:id">
							<Tutorial/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
