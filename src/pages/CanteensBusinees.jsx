import React from "react";
import HeadlinePage from "../components/HeadlinePage";
import { Container, Row } from "react-bootstrap";
import DescPage from "../components/DescPage";
import CardSubPage from "../components/CardSubPage";

const CanteensBusinees = () => {
	return (
		<>
			<HeadlinePage title="Organization and Local Goverments" />
			<Container className="organization">
				<Row className="d-flex justify-content-center align-items-center mt-5">
					<DescPage
						title="From Vision to Palate - Your Culinary Success Partner"
						desc="Step into a realm where culinary visions come to life and palates are enchanted. Our food consulting team is your dedicated partner in translating your culinary dreams into reality. With a meticulous blend of art and science, we offer personalized guidance, precise execution, and unwavering support."
					/>
				</Row>
				<Row className="d-flex justify-content-center align-items-center">
					<CardSubPage />
				</Row>
			</Container>
		</>
	);
};

export default CanteensBusinees;
