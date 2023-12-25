import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Star } from '../images';

import Caroussel from '../components/Caroussel';
import Logements from "../components/utils/logements.json";
import Dropdown from '../components/Dropdown';

const Logement = () => {
	const { id } = useParams();
	const [data, setData] = useState(null);

	useEffect(() => {
		if(!data) {
			Logements.forEach((d) => {
				if(d.id === id) setData(d);
			});
		}
	});

	if(!data) return <div>Loading ...</div>;

	return (
		<div className="main logement">
			<Caroussel pictures={data.pictures} />

			<div className="logement__container">
				<div className="logement__container--text">
					<div>
						<h1>{data.title}</h1>
						<p>{data.location}</p>
					</div>

					<div className="logement__container--tags">
						{data.tags.map((t) => <p key={t}>{t}</p>)}
					</div>
				</div>
				
				<div className="logement__container--infos">
					<div className="logement__container--infos__host">
						<p>{data.host.name}</p>
						<img src={data.host.picture} alt="Host" />
					</div>

					<div className="logement__container--infos__stars">
						{[...Array(5).keys()].map((k) => (k+1 < parseInt(data.rating)) ? <Star key={`star${k}`} active={true} /> : <Star key={`star${k}`} active={false} />)}
					</div>
				</div>
			</div>

			<div className="logement__dropdown">
				<Dropdown title={"Description"} content={data.description} />
				<Dropdown title={"Équipements"} content={data.equipments} />
			</div>
		</div>
	);
};

export default Logement;