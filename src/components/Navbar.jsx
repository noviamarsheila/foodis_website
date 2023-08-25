import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navmenu } from "../data/data";
import Logo from "../assets/logo.png";

function Navigasi() {
	return (
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img src={Logo} alt="logo" width={100} className="mb-3" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto ">
						{navmenu.map((menu, i) => (
							<Nav.Link href={menu.path} key={i}>
								{menu.title}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigasi;
