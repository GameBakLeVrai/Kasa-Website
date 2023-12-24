import Banner from "../components/Banner";
import Card from "../components/Card";

import HomeBG from "../images/home_bg.jpg";
import Data from "../components/utils/logements.json";

const Home = () => {
	return (
		<div className="main">
			<Banner image={HomeBG} filter={true} text={"Chez vous, partout et ailleurs"} />

			<div className="card">
				{Data.map((d) => <Card key={d.id} data={d} />)}
			</div>
		</div>
	)
};

export default Home;