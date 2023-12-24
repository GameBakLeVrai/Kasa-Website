import Banner from "../components/Banner";
import HomeBG from "../images/home_bg.jpg";

const Home = () => {
	return (
		<div className="main">
			<Banner image={HomeBG} filter={true} text={"Chez vous, partout et ailleurs"} />
		</div>
	)
};

export default Home;