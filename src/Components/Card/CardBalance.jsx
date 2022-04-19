import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from "../../Errors/ErrorFallback";

const CardBalance = ({values, icon, breakpoint, styleDefault, classGeneral, inter}) => {
  const [first, second] = inter;
  const [title, value] = values;
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Card className={!breakpoint ? "d-none" : classGeneral} style={styleDefault}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <div className={first}>
              <hr className={second} size="5" />
            </div>
            <Card.Text>
              {icon}
              {value}
            </Card.Text>
          </Card.Body>
        </Card>
      </ErrorBoundary>
    </>
  );
};

CardBalance.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  icon: PropTypes.element,
  breakpoint: PropTypes.bool,
  styleDefault: PropTypes.object.isRequired,
  classGeneral: PropTypes.string,
  inter: PropTypes.arrayOf(PropTypes.string),
};

export default CardBalance;
