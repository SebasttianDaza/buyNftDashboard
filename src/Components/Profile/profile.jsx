import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {Bell} from "react-bootstrap-icons";

import profile from "../../../public/image/profile.svg";

const ComponentProfile = ({}) => {
  return (
    <Row className="mt-3 mb-3 d-flex align-items-center">
      <Col className="col-md-auto text-secondary">
        <div className="rounded-circle border border-secondary p-2 pe-auto">
          <Bell size={26} />
        </div>
      </Col>
      <Col className="col-md-auto">
        <Image src={profile} fluid />
      </Col>
      <Col>
        <h5 className="text-center text-secondary">Sebastian Daza</h5>
      </Col>
    </Row>
  );
};

export default ComponentProfile;
