import { Link } from "react-router-dom";
import { Logo } from "../../images";

const Navbar = () => {
	return (
		<nav>
			<Link to="/">
				<Logo />
			</Link>

			<div>
				<Link to="/">Accueil</Link>
				<Link to="/a-propos">A Propos</Link>
			</div>
		</nav>
	);
};

export default Navbar;