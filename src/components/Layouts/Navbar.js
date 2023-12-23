import { Link, useLocation  } from "react-router-dom";
import { Logo } from "../../images";

const Navbar = () => {
	const { pathname } = useLocation();

	const getActive = (path) => (pathname === `/${path}`) ? "active" : "";

	return (
		<nav>
			<Link to="/">
				<Logo />
			</Link>

			<div>
				<Link to="/" className={getActive("")}>Accueil</Link>
				<Link to="/a-propos" className={getActive("a-propos")}>A Propos</Link>
			</div>
		</nav>
	);
};

export default Navbar;