import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Navegation from "./Pages/Nav/nav";
import ComponentForm from "./Components/Form/form";
import ComponentProfile from "./Components/Profile/profile";
//Impor image

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Navegation />
          <Col className="bg-body" xs={6}>
            <ComponentForm />
          </Col>
          <Col className="col-md-auto">
            <ComponentProfile />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
