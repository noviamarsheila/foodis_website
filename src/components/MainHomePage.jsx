import React from "react";
import { Container, Row } from "react-bootstrap";
import img1 from "../assets/img-homepage/img-1.png";
import img2 from "../assets/img-homepage/img-2.png";
import CardHome from "./CardHome";
import DescPage from "./DescPage";

const MainHomePage = () => {
	return (
		<div className="second-homepage" id="service">
			<Container>
				<Row>
					<DescPage
						title="Nourishing Culinary Expertise"
						desc="Nourishing Culinary Expertise forms the core of our culinary philosophy, signifying our unwavering dedication to not only creating delectable dishes but also to nurturing the well-being of our patrons. Our team of seasoned
                    chefs and culinary professionals brings a wealth of knowledge to the table, combining innovative techniques with a deep understanding of nutrition. We believe in the power of food not just to delight the senses, but also to
                    nourish the body and soul."
					/>
				</Row>
				<Row className="card-home">
					<CardHome title="Organizations and Local Governments" img={img1} loc="/organization" />
					<CardHome title="Canteens and Our Businesses" img={img2} loc="/canteens" />
				</Row>
			</Container>
		</div>
	);
};

export default MainHomePage;
