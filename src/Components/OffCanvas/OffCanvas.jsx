import Offcanvas from "react-bootstrap/Offcanvas";
import PropTypes from "prop-types";
import {ErrorBoundary} from "react-error-boundary";

import Buttoncard from "../Buttons/buttonCard";
import ErrorFallback from "../../Errors/ErrorFallback";
import useLocalState from "../../Hooks/handleStateBasic";

const OffCanvas = ({}) => {
  const [show, setShow] = useLocalState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Buttoncard content="Follow" classGeneral="btn rounded" size="md" variant="primary" />

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header>
            <Offcanvas.Title>Header</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>Header</Offcanvas.Body>
        </Offcanvas>
      </ErrorBoundary>
    </>
  );
};
