import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
	const navigate = useNavigate();
	const { id, title, cover } = data;

	return (
		<div onClick={() => navigate(`/logement/${id}`)} className="card__container">
			<img src={cover} alt={`${title} Background`} />

			<div className="card__text-container">
				<p>{title}</p>
			</div>
		</div>
	);
};

export default Card;