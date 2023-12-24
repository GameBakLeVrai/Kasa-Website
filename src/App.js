import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from "react-router-dom";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Logement from "./pages/Logement";

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route index element={<Home />} />

				<Route path="/logement" element={<Navigate replace to="/" />} />
				<Route exact path="/logement/:id" element={<Logement />} />

				<Route exact path="/notfound" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
				{/*<Route path="*" element={<Navigate replace to="/notfound" />} />*/}
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;