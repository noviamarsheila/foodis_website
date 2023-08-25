import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import imgleaf from "../assets/img-leaf.png";

const HeadlineHomePage = () => {
	return (
		<div className="head-homepage">
			<Container>
				<Row>
					<Col className="main-homepage d-flex justify-content-center align-items-center">
						<div>
							<div className="position-relative">
								<img src={imgleaf} alt="Leaf Icon" className="position-absolute icon-leaf" />
								<h2 className="text-center">Delicious Solutions through Expert Food Consulting</h2>
							</div>
							<p>We encapsulates the essence of our culinary approach. We are dedicated to creating mouthwatering resolutions by harnessing the power of our seasoned culinary consultants. </p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HeadlineHomePage;
