import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback";
import ButtonBackground from "../Buttons/buttonBackground";

const ComponentCardBackground = (props) => {
  const {
    imageBackground,
    classGeneral,
    contentBtn,
    title,
    classTitle,
    classBtn,
    sizeBtn,
    styleDefault,
  } = props;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card className={classGeneral} style={styleDefault}>
          <Card.Img src={imageBackground} loading="lazy" alt="Card Image" style={styleDefault} />
          <Card.ImgOverlay>
            <Card.Title className={classTitle}>{title}</Card.Title>
            <ButtonBackground Content={contentBtn} size={sizeBtn} classGeneral={classBtn} />
          </Card.ImgOverlay>
        </Card>
      </ErrorBoundary>
    </>
  );
};

ComponentCardBackground.propTypes = {
  imageBackground: PropTypes.string,
  classGeneral: PropTypes.string,
  contentBtn: PropTypes.string,
  title: PropTypes.string,
  classTitle: PropTypes.string,
  classBtn: PropTypes.string,
  sizeBtn: PropTypes.string,
  styleDefault: PropTypes.object,
};

export default ComponentCardBackground;
