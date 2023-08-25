import React from "react";
import { Col } from "react-bootstrap";

const CardAbout = ({ img, name, desc, email }) => {
	return (
		<Col md={6} className="card-about d-flex justify-content-center align-items-center">
			<div className="card">
				<img src={img} alt="img-profile" width={250} />
				<h4 className="mt-3">{name}</h4>
				<p>{desc}</p>
				<a style={{ color: "black" }} href="#a">
					{email}
				</a>
			</div>
		</Col>
	);
};

export default CardAbout;
