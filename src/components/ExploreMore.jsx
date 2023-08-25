import React from "react";
import { Col, Row } from "react-bootstrap";
import { iconexplore } from "../data/data";

const ExploreMore = () => {
	return (
		<div className="explore-more text-center">
			<Row>
				<Col className="explore-one">
					<h3>Explore more about Food Consultants</h3>
					<p>Dive into a gallery of campaigns that inspire, engage, and drive results.</p>
				</Col>
			</Row>
			<Row style={{ marginTop: "3rem" }} className="d-flex justify-content-center">
				{iconexplore.map((icon, i) => (
					<img src={icon.img} alt="" key={i} className="img-explore" />
				))}
			</Row>
		</div>
	);
};

export default ExploreMore;
