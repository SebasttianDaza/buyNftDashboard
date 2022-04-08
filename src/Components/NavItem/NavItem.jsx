import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavItem = ({text, icon, ...props}) => {
  return (
    <Nav.Link href="#" className="text-secondary">
      <Nav.Item>
        <Row>
          <Col xs={3}>{icon}</Col>
          <Col>{text}</Col>
        </Row>
      </Nav.Item>
    </Nav.Link>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default NavItem;
