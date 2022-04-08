import {Navbar, Nav} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./nav.css";
import {StarFill, Shop, BarChartLineFill, HeartFill} from "react-bootstrap-icons";

import NavItem from "../../Components/NavItem/NavItem";

const Navegation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-dark sidebar col-md-3 flex-column"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Navbar.Brand fluid className="mt-4 mb-4 brand-media text-left">
          <h1 className="text-light text-left text-uppercase">BuyNft</h1>
        </Navbar.Brand>
        <Container fluid className="bg-dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto flex-column">
              <NavItem text="Dashboard" icon={<StarFill size={26} />} />
              <NavItem text="Market" icon={<Shop size={26} />} />
              <NavItem text="Active Bid" icon={<BarChartLineFill size={26} />} />
              <NavItem text="Favorites" icon={<HeartFill size={26} />} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegation;
