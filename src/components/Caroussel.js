import { useState } from "react";
import { Arrow } from "../images";

const Caroussel = ({ pictures }) => {
	const [index, setIndex] = useState(0);

	const nextImage = () => setIndex((prev) => (prev + 1) % pictures.length);
	const prevImage = () => setIndex((prev) => (prev - 1 + pictures.length) % pictures.length);

	return (
		<div className="caroussel">
			<img src={pictures[index % pictures.length]} alt="Caroussel Background" />

			<div className="caroussel__infos">
				<Arrow click={prevImage} />
				<Arrow click={nextImage} />

				<p>{index+1}/{pictures.length}</p>
			</div>
		</div>
	);
};

export default Caroussel;