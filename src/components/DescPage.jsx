import React from "react";
import { Col } from "react-bootstrap";

const DescPage = ({ title, desc }) => {
	return (
		<Col className="text-center">
			<div className="box--one">
				<h2>{title}</h2>
				<p className="mt-3">{desc}</p>
			</div>
		</Col>
	);
};

export default DescPage;
