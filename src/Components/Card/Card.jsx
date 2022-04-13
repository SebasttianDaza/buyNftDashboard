import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const ComponentCard = ({content, image, imageSecond}) => {
  return (
    <Card>
      <Card.Image variant="top" src={image} />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{content.title}</Card.Title>
            <Row>
              <Col>
                <Image src={imageSecond} fluid />
              </Col>
              <Col>
                <Card.Text>{content.text}</Card.Text>
              </Col>
            </Row>
          </Col>
          <Col />
        </Row>
      </Card.Body>
    </Card>
  );
};

ComponentCard.propTypes = {
  content: PropTypes.object,
  image: PropTypes.string,
  imageSecond: PropTypes.string,
};

export default ComponentCard;
