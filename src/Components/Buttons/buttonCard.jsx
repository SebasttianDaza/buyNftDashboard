import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const Buttoncard = ({content, classGeneral, size, variant, icon}) => {
  return (
    <Button variant={variant} size={size} className={classGeneral}>
      {icon !== undefined ? icon : null}
      {content}
    </Button>
  );
};

Buttoncard.propTypes = {
  content: PropTypes.string.isRequired,
  classGeneral: PropTypes.string,
  size: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default Buttoncard;
