import React from "react";

import Logo from "../../../images/logo.svg";

const Footer = () => {
	return (
		<div className="footer">
			<img src={Logo} alt="logo" />
			<p>© 2020 Kasa. All rights reserved</p>
		</div>
	);
};

export default Footer;