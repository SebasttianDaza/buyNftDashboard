import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback";
import ButtonBackground from "../Buttons/buttonBackground";

const ComponentCardBackground = (props) => {
  const {imageBackground, classGeneral, contentBtn, title, classTitle, classBtn, sizeBtn} = props;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card className={classGeneral} style={{minHeight: "18vh"}}>
          <Card.Img
            src={imageBackground}
            loading="lazy"
            alt="Card Image"
            style={{minHeight: "15vh"}}
          />
          <Card.ImgOverlay className="" style={{minHeight: "13vh"}}>
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
};

export default ComponentCardBackground;
