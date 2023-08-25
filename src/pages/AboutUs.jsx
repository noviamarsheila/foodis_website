import React from "react";
import HeadlinePage from "../components/HeadlinePage";
import { Col, Container, Row } from "react-bootstrap";
import imgprofile1 from "../assets/img-aboutpage/img-profile1.png";
import imgprofile2 from "../assets/img-aboutpage/img-profile2.png";
import imgabout from "../assets/img-aboutpage/img-about.png";
import CardAbout from "../components/CardAbout";
import ExploreMore from "../components/ExploreMore";

const AboutUs = () => {
	return (
		<div>
			<HeadlinePage title="About Us" />
			<Container>
				<p className="text-center mt-5">
					We are more than just consultants – we are culinary enthusiasts driven by a relentless passion for all things food. With years of experience and a profound understanding of the gastronomic world, we have embarked on a mission to
					guide and elevate your culinary ventures to new heights.{" "}
				</p>
				<Row className="mt-5">
					<CardAbout img={imgprofile1} name="Novia Marsheila" desc="CEO & Senior Consultant" email="sheila@food.co" />
					<CardAbout img={imgprofile2} name="Louisyana" desc="Partner & Senior Consultant" email="louisy@food.co" />
				</Row>
				<Row className="d-flex justify-content-center align-items-center mb-5 third-content">
					<Col md={6}>
						<img src={imgabout} alt="img about" width={300} />
					</Col>
					<Col md={6} className="right-about">
						<h3>Unveiling the Essence of Food Consulting</h3>
						<p>
							Embark on a delectable journey into the world of culinary excellence with our comprehensive food consulting services. At the heart of our expertise lies a profound understanding of flavors, ingredients, and the intricate dance
							of gastronomy.{" "}
						</p>
					</Col>
				</Row>
			</Container>
			<ExploreMore />
		</div>
	);
};

export default AboutUs;
