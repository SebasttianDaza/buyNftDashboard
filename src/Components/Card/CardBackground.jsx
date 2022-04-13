import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

import ButtonBackground from "../Buttons/buttonBackground";

const ComponentCardBackground = (props) => {
  const {imageBackground, classGeneral, contentBtn, title, classTitle} = props;
  return (
    <Card className={classGeneral}>
      <Card.Img src={imageBackground} alt="Card Image" />
      <Card.ImgOverlay className="">
        <Card.Title className={classTitle}>{title}</Card.Title>
        <ButtonBackground Content={contentBtn} />
      </Card.ImgOverlay>
    </Card>
  );
};

ComponentCardBackground.propTypes = {
  imageBackground: PropTypes.string,
  classGeneral: PropTypes.string,
  contentBtn: PropTypes.string,
  title: PropTypes.string,
  classTitle: PropTypes.string,
};

export default ComponentCardBackground;
