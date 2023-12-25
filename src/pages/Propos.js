import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";

import AboutBG from "../images/about_bg.jpg";

const Propos = () => {
	const textSample = "Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles";

	return (
		<div className="main propos">
			<Banner image={AboutBG} filter={true} text={""} />

			<div className="propos__dropdown">
				<Dropdown title={"Fiabilité"} content={textSample} />
				<Dropdown title={"Respect"} content={textSample} />
				<Dropdown title={"Service"} content={textSample} />
				<Dropdown title={"Sécurité"} content={textSample} />
			</div>
		</div>
	);
};

export default Propos;