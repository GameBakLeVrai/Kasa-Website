import { Link } from "react-router-dom";
import { Logo } from "../../images";

const Footer = () => {
	return (
		<footer>
			<Link to="/">
				<Logo />
			</Link>
			
			<p>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;