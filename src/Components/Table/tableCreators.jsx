import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

import Buttoncard from "../Buttons/buttonCard";

const TableCreators = ({breakpoint, classGeneral}) => {
  return (
    <Container fluid className={classGeneral}>
      <Table striped hover className={!breakpoint ? "d-none" : ""}>
        <thead>
          <tr className="text-white text-uppercase">
            <th>top creators</th>
            <th>See all</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-white">
            <td>
              <Row>
                <Col xs={4}>
                  <Image
                    src="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Polygon%201.svg?alt=media&token=7f1184e3-069b-4f01-b151-82bd26464c3e"
                    fluid
                  />
                </Col>
                <Col className="text-secondary">Sebastian</Col>
              </Row>
            </td>
            <td>
              <Buttoncard content="Follow" classGeneral="btn rounded" size="md" variant="primary" />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

TableCreators.propTypes = {
  breakpoint: PropTypes.bool.isRequired,
  classGeneral: PropTypes.string.isRequired,
};

export default TableCreators;
