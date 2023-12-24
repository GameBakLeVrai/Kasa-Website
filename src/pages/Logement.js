import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Caroussel from '../components/Caroussel';
import Logements from "../components/utils/logements.json";

const Logement = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		if(!data) {
			Logements.forEach((d) => {
				if(d.id === id) setData(d);
			});

			console.log(data);
		}
	});

	if(!data) return <div>Loading ...</div>;

	return (
		<div className="main logement">
			<Caroussel pictures={data.pictures} />
		</div>
	);
};

export default Logement;