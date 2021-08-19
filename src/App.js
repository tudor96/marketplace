import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./view/Products";
import Home from "./view/Home";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route path='/products'>
						<Products />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
