import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route path="*" element={<NotFound />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;