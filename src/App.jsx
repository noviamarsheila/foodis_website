import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigasi from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Organization from "./pages/OrganizationLocalGov";
import Canteens from "./pages/CanteensBusinees";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

function App() {
	return (
		<div>
			<Navigasi />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/service" element={<Services />} />
					<Route path="/about" element={<AboutUs />} />
					<Route path="/organization" element={<Organization />} />
					<Route path="/canteens" element={<Canteens />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
