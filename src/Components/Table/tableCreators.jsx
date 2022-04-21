import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

import Buttoncard from "../Buttons/buttonCard";

const TableCreators = ({breakpoint, classComponent, contentText, data}) => {
  const [classGeneral, classThead, classTbody] = classComponent;
  const [titleString, SubtitlString] = contentText;
  return (
    <Container fluid className={classGeneral}>
      <Table striped hover className={!breakpoint ? "d-none" : ""}>
        <thead className={classThead}>
          <tr>
            <th>{titleString}</th>
            <th>{SubtitlString}</th>
          </tr>
        </thead>
        <tbody className={classTbody}>
          {data.map((item, index) => {
            return (
              <NewElementTable
                key={index}
                image={item.image}
                name={item.name}
                contentBtn={["Follow", "btn rounded", "md", "primary"]}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

TableCreators.propTypes = {
  breakpoint: PropTypes.bool.isRequired,
  classComponent: PropTypes.arrayOf(PropTypes.string),
  contentText: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
};

const NewElementTable = ({image, name, contentBtn}) => {
  const [content, classBtn, size, variant] = contentBtn;
  return (
    <>
      <tr>
        <td>
          <Row>
            <Col xs={4}>
              <Image src={image} fluid />
            </Col>
            <Col className="text-secondary">{name}</Col>
          </Row>
        </td>
        <td>
          <Buttoncard content={content} classGeneral={classBtn} size={size} variant={variant} />
        </td>
      </tr>
    </>
  );
};

NewElementTable.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  contentBtn: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TableCreators;
