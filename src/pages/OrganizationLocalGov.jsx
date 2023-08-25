import React from "react";
import HeadlinePage from "../components/HeadlinePage";
import DescPage from "../components/DescPage";
import { Container, Row } from "react-bootstrap";
import CardSubPage from "../components/CardSubPage";

const OrganizationLocalGov = () => {
	return (
		<>
			<HeadlinePage title="Organization and Local Goverments" />
			<Container className="organization">
				<Row className="d-flex justify-content-center align-items-center mt-5">
					<DescPage
						title="Enhancing Community Well-Being Through Local Government and Food Consultant Synergy"
						desc="In the realm of local government, a novel synergy emerges as the principles of organization 
                    intersect with the culinary finesse of a food consultant. This fusion holds the potential to revolutionize 
                    community well-being and elevate the gastronomic landscape. Food consultants, armed with their culinary mastery, 
                    collaborate with local authorities to envision innovative strategies that nourish not only appetites but also the vitality of the community."
					/>
				</Row>
				<Row className="d-flex justify-content-center align-items-center">
					<CardSubPage />
				</Row>
			</Container>
		</>
	);
};

export default OrganizationLocalGov;
