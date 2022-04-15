//Components React Boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, {useState, useEffect} from "react";

//Components
import Navegation from "./Pages/Nav/nav";
import ComponentForm from "./Components/Form/form";
import ComponentProfile from "./Components/Profile/profile";
import Header from "./Pages/Header/Header";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [breakpoint, setBreakpoint] = useState(false);

  //Show content about breakpoint
  const indenrifyMatchMedia = () => {
    let _breakpoint = window.matchMedia("(min-width: 992px)");

    const checkElement = (e) => {
      if (e.matches === true) {
        setIsActive(true);
        setBreakpoint(false);
      } else {
        setIsActive(false);
        setBreakpoint(true);
      }
    };

    _breakpoint.addListener(checkElement);
    checkElement(_breakpoint);
  };

  useEffect(() => {
    indenrifyMatchMedia();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Navegation breakpoint={breakpoint} />
          {/* If it's to more 992px show another components, bit if not also */}
          <Col className="bg-body col-sm-6">
            {/* If it's to more 992px show, but if not show */}
            <ComponentForm breakpoint={isActive} />
            <Header />
          </Col>
          <Col className="col-sm-3">
            {/* If it's to more 992px show, but if not show */}
            <ComponentProfile breakpoint={isActive} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
