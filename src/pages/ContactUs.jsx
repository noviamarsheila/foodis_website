import React from "react";
import HeadlinePage from "../components/HeadlinePage";
import { Col, Container, Row } from "react-bootstrap";
import { iconcontact } from "../data/data";

const ContactUs = () => {
	return (
		<>
			<HeadlinePage title="Contact Us" />
			<Container className="contact">
				<Row className="mb-5 mt-5 d-flex justify-content-center align-items-center">
					<Col md={6}>
						{iconcontact.map((icon, i) => (
							<a href={icon.text} key={i} className="d-flex text-decoration-none">
								<img src={icon.img} alt="" width={20} height={20} className="me-2" />
								<p className="text-black">{icon.text}</p>
							</a>
						))}
					</Col>
					<Col md={6}>
						<form action="" className="form-input">
							<input type="text" placeholder="Name" />
							<br />
							<input type="email" name="" id="" placeholder="Email Address" />
							<br />
							<textarea name="" id="" cols="50" rows="1" placeholder="Message"></textarea>
							<br />
							<button className="btn btn-success btn-send mx-auto mt-1">Send</button>
						</form>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default ContactUs;
