import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ButtonBackground = ({Content, classGeneral, size}) => {
  return (
    <Button variant="primary" size={size} className={classGeneral}>
      {Content}
    </Button>
  );
};

ButtonBackground.propTypes = {
  Content: PropTypes.string,
  classGeneral: PropTypes.string,
  size: PropTypes.string,
};

export default ButtonBackground;
