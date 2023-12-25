import { useState } from "react";

import { Arrow } from "../images";

const Dropdown = ({ title, content }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className={`dropdown ${(isOpen) ? "active" : ""}`}>
			<div onClick={() => (isOpen) ? setOpen(false) : setOpen(true)} className="dropdown__text">
				<p>{title}</p>
				<Arrow classOptions={(isOpen) ? "active" : ""} />
			</div>

			{(isOpen) && (
				<div className="dropdown__content">
					<p>{(Array.isArray(content) ? content.join(", ") : content)}</p>
				</div>
			)}
		</div>
	);
};

export default Dropdown;