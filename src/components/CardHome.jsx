import React from "react";
import { Col } from "react-bootstrap";

const CardHome = ({ title, img, loc }) => {
	return (
		<Col>
			<img src={img} alt="" />
			<h3>{title}</h3>
			<a href={loc}>
				<button className="btn btn-success">Read More</button>
			</a>
		</Col>
	);
};

export default CardHome;
