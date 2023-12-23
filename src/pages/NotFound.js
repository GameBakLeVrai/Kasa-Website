import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="main notfound">
			<h1>404</h1>
			<h3>Oups! La page que vous demandez n'existe pas.</h3>

			<Link to="/">Retourner sur la page d'accueil</Link>
		</div>
	);
};

export default NotFound;