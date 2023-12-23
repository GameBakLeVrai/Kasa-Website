import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/utils/Layouts/Navbar";
import Footer from "./components/utils/Layouts/Footer";

function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Home />} />

				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;