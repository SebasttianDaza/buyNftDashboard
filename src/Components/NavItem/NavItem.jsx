import Nav from "react-bootstrap/Nav";
import {Row, Col} from "react-bootstrap";
import PropTypes from "prop-types";

const NavItem = ({text, icon, ...props}) => {
  return (
    <Nav.Item className="">
      <Row>
        <Col xs={1}>{icon}</Col>
        <Col xs={1}>
          <Nav.Link href="#"> {text} </Nav.Link>
        </Col>
      </Row>
    </Nav.Item>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default NavItem;
