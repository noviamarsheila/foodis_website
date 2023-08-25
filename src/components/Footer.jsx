import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";

const Footer = () => {
	return (
		<div className="footer">
			<Container>
				<Row className="d-flex justify-content-center align-items-center">
					<Col md={4}>
						<img src={logo} alt="logo" width={90} className="mb-4" />
						<p>CV: 12345678</p>
						<p>Reg: 2023</p>
						<p>No account: 12345</p>
					</Col>
					<Col md={4} className="mt-3">
						<h5>Company</h5>
						<a href="#a">
							<p>+62 123 456 789 10</p>
						</a>
						<a href="#a">
							<p>nvvamrsl@food.co</p>
						</a>
						<a href="#a">
							<p>Jendral sudirman 10 Indonesia</p>
						</a>
					</Col>
					<Col md={4} className="mt-3">
						<h5>Social Media</h5>
						<a href="#a">
							<p>instagram</p>
						</a>
						<a href="#a">
							<p>tiktok</p>
						</a>
						<a href="#a">
							<p>twitter</p>
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
