import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./view/Products";
import Home from "./view/Home";
import Navigation from "./components/Navigation/Navigation";

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route path='/products'>
						<Products />
					</Route>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='*'>Pagina inexistenta</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
