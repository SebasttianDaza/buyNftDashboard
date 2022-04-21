import Offcanvas from "react-bootstrap/Offcanvas";
import PropTypes from "prop-types";
import {ErrorBoundary} from "react-error-boundary";

import Buttoncard from "../Buttons/buttonCard";
import ErrorFallback from "../../Errors/ErrorFallback";
import useLocalState from "../../Hooks/handleStateBasic";

const OffCanvasComponent = ({breakpoint, content, contentBtn, contentCanvas}) => {
  const [show, setShow] = useLocalState(false);

  //Props destructuring
  const [contentText, size, variant, classBtn] = contentBtn;
  const [classGeneral, textHeader] = contentCanvas;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Buttoncard
          content={contentText}
          classGeneral={`btn rounded ${!breakpoint ? "d-none" : classBtn}`}
          size={size}
          variant={variant}
          event={handleShow}
        />

        <Offcanvas
          show={show}
          onHide={handleClose}
          className={!breakpoint ? "d-none" : classGeneral}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{textHeader}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{content}</Offcanvas.Body>
        </Offcanvas>
      </ErrorBoundary>
    </>
  );
};

OffCanvasComponent.propTypes = {
  breakpoint: PropTypes.bool.isRequired,
  content: PropTypes.element.isRequired,
  contentBtn: PropTypes.arrayOf(PropTypes.string),
  contentCanvas: PropTypes.arrayOf(PropTypes.string),
};

export default OffCanvasComponent;
