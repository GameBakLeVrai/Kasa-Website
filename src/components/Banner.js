const Banner = ({ image, filter, text }) => {
	return (
		<div className="banner">
			<img style={{opacity: (filter) ? "0.7" : ""}} src={image} alt="Home Background" />
			
			{(text) && (
				<div className="banner__text-container">
					<h1>{text}</h1>
				</div>
			)}
		</div>
	);
};

export default Banner;