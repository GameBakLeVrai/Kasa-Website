import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../images/logo.svg";

const Navbar = () => {
	return (
		<div>
			<img src={Logo} alt="Logo" />

			<div>
				<Link to="/">Accueil</Link>
				<Link to="/">A Propos</Link>
			</div>
		</div>
	);
};

export default Navbar;