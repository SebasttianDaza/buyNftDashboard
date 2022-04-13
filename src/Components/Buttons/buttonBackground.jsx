import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const ButtonBackground = ({Content}) => {
  return (
    <Button variant="primary" size="size">
      {Content}
    </Button>
  );
};

ButtonBackground.propTypes = {
  Content: PropTypes.string,
};

export default ButtonBackground;
