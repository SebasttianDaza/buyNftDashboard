import Nav from "react-bootstrap/Nav";
import "./nav.css";
import {StarFill} from "react-bootstrap-icons";

import NavItem from "../../Components/NavItem/NavItem";

const Navbar = () => {
  return (
    <>
      <Nav
        defaultActiveKey="/home"
        className=" bg-dark col-md-3 d-none d-md-block sidebar flex-column"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky">
          <h1 className="text-light text-center text-uppercase">BuyNft</h1>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
