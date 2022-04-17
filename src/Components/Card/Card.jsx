import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback";

const ComponentCard = ({title, text, image, imageSecond}) => {
  //const {title, text} = content;
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Card>
        <Card.Image variant="top" src={image} />
        <Card.Body>
          <Row>
            <Col>
              <Card.Title>{title}</Card.Title>
              <Row>
                <Col>
                  <Image src={imageSecond} fluid />
                </Col>
                <Col>
                  <Card.Text>{text}</Card.Text>
                </Col>
              </Row>
            </Col>
            <Col />
          </Row>
        </Card.Body>
      </Card>
    </ErrorBoundary>
  );
};

ComponentCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imageSecond: PropTypes.string,
};

export default ComponentCard;
