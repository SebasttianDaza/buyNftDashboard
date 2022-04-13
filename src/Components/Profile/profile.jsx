import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Bell} from "react-bootstrap-icons";
import PropTypes from "prop-types";

import profile from "../../../public/image/profile.svg";

const ComponentProfile = ({breakpoint, showChild}) => {
  return (
    <Row
      className={
        breakpoint === false
          ? "d-none"
          : showChild
          ? "mt-0 mb-0 d-flex align-items-center"
          : "mt-3 mb-3 d-flex align-items-center"
      }
    >
      <Col className="col-md-auto text-secondary">
        <div className={showChild ? "" : "rounded-circle border border-secondary p-2 pe-auto"}>
          <Bell size={showChild ? 20 : 26} />
        </div>
      </Col>
      <Col className="col-md-auto">
        <Image src={profile} fluid />
      </Col>
      <Col className={showChild === true ? "d-none" : "d-block"}>
        <h5 className="text-center text-secondary">Sebastian Daza</h5>
      </Col>
    </Row>
  );
};

ComponentProfile.propTypes = {
  breakpoint: PropTypes.bool.isRequired,
  showChild: PropTypes.bool,
};

export default ComponentProfile;
