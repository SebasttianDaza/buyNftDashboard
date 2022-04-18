import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback";

const ComponentCard = (props) => {
  const {
    titleString,
    textString,
    imageProfile,
    imageBackground,
    classGeneral,
    classBody,
    buttonCard,
  } = props;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card className={classGeneral}>
          <Card.Img variant="top" src={imageBackground} />
          <Card.Body className={classBody}>
            <Row>
              <Card.Title>{titleString}</Card.Title>
              <Col>
                <Row>
                  <Col>
                    <Image src={imageProfile} fluid />
                  </Col>
                  <Col>
                    <Card.Text>{textString}</Card.Text>
                  </Col>
                </Row>
              </Col>
              <Col>{buttonCard}</Col>
            </Row>
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

ComponentCard.propTypes = {
  titleString: PropTypes.string.isRequired,
  textString: PropTypes.string.isRequired,
  imageProfile: PropTypes.string.isRequired,
  imageBackground: PropTypes.string.isRequired,
  classGeneral: PropTypes.string,
  classBody: PropTypes.string,
  buttonCard: PropTypes.element.isRequired,
};

export default ComponentCard;
