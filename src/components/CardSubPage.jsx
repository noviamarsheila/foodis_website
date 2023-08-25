import React from "react";
import { iconsubpage } from "../data/data";
import { Col } from "react-bootstrap";

const CardSubPage = () => {
	return (
		<>
			{iconsubpage.map((icon, i) => (
				<Col md={4} key={i} className="card-subpage mb-5 d-flex justify-content-center align-items-center">
					<div className="card">
						<img src={icon.img} alt="iconsub" width={80} className="mx-auto" />
						<p style={{ color: "white" }}>{icon.title}</p>
					</div>
				</Col>
			))}
		</>
	);
};

export default CardSubPage;
