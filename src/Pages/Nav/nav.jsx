import {Navbar, Nav} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./nav.css";
import StarFill from "react-bootstrap-icons/dist/icons/star-fill";
import Shop from "react-bootstrap-icons/dist/icons/shop";
import BarChartLineFill from "react-bootstrap-icons/dist/icons/bar-chart-line-fill";
import HeartFill from "react-bootstrap-icons/dist/icons/heart-fill";
import FolderFill from "react-bootstrap-icons/dist/icons/folder-fill";
import CloudDownloadFill from "react-bootstrap-icons/dist/icons/cloud-download-fill";
import ClockHistory from "react-bootstrap-icons/dist/icons/clock-history";
import Gear from "react-bootstrap-icons/dist/icons/gear";
import PropTypes from "prop-types";

import NavItem from "../../Components/NavItem/NavItem";
import ComponentForm from "../../Components/Form/form";
import ComponentProfile from "../../Components/Profile/profile";

const Navegation = ({breakpoint, image}) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={
          breakpoint ? "bg-dark" : "bg-dark sidebar col-md-3 flex-column border-end border-light"
        }
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Navbar.Brand className="mt-4 mb-4 brand-media text-left">
          <h1 className="text-primary text-left text-uppercase">BuyNft</h1>
        </Navbar.Brand>
        <Container fluid className="bg-dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-primary border-0" />
          {/* if it's to more 992px show different */}
          <ComponentProfile breakpoint={breakpoint} showChild={breakpoint} image={image} />
          <Navbar.Collapse id="navbarToggleExternalContent">
            <Nav className="me-auto flex-column">
              {/* If it's to more 992px not show here */}
              <ComponentForm breakpoint={breakpoint} />
              <NavItem text="Dashboard" classPrimary="text-primary" icon={<StarFill size={26} />} />
              <NavItem classPrimary="text-secondary" text="Market" icon={<Shop size={26} />} />
              <NavItem
                classPrimary="text-secondary"
                text="Active Bid"
                icon={<BarChartLineFill size={26} />}
              />
              <NavItem
                classPrimary="text-secondary"
                text="Favorites"
                icon={<HeartFill size={26} />}
              />
              <hr
                width="100%"
                className="bg-secondary border-3 border-top border-white mt-5 mb-4"
              />
              <Navbar.Brand>
                <p className="text-primary text-uppercase">my profile</p>
              </Navbar.Brand>
              <NavItem
                classPrimary="text-secondary"
                text="My Portfolio"
                icon={<FolderFill size={26} />}
              />
              <NavItem
                classPrimary="text-secondary"
                text="Saved"
                icon={<CloudDownloadFill size={26} />}
              />
              <NavItem
                classPrimary="text-secondary"
                text="History"
                icon={<ClockHistory size={26} />}
              />
              <NavItem classPrimary="text-secondary" text="Settings" icon={<Gear size={26} />} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

Navegation.propTypes = {
  breakpoint: PropTypes.bool,
  image: PropTypes.string,
};

export default Navegation;
