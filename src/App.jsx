//Components React Boostrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CurrencyBitcoin from "react-bootstrap-icons/dist/icons/currency-bitcoin";

//Components
import useMatchMedia from "./Hooks/handleMatchMedia";
import Navegation from "./Pages/Nav/nav";
import ComponentForm from "./Components/Form/form";
import ComponentProfile from "./Components/Profile/profile";
import Header from "./Pages/Header/Header";
import CardBalance from "./Components/Card/CardBalance";
import TableCreators from "./Components/Table/tableCreators";

const App = () => {
  const [isActive, breakpoint] = useMatchMedia();

  const dataTable = [
    {
      name: "Tom",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Polygon%201.svg?alt=media&token=7f1184e3-069b-4f01-b151-82bd26464c3e",
    },
    {
      name: "Sebatian",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Polygon%201.svg?alt=media&token=7f1184e3-069b-4f01-b151-82bd26464c3e",
    },
    {
      name: "Tom Jones",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Polygon%201.svg?alt=media&token=7f1184e3-069b-4f01-b151-82bd26464c3e",
    },
    {
      name: "Tom",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Polygon%201.svg?alt=media&token=7f1184e3-069b-4f01-b151-82bd26464c3e",
    },
    {
      name: "Sebas",
      image:
        "https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Polygon%201.svg?alt=media&token=7f1184e3-069b-4f01-b151-82bd26464c3e",
    },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Navegation breakpoint={breakpoint} />
          {/* If it's to more 992px show another components, bit if not also */}
          <Col className="bg-body" lg="6">
            {/* If it's to more 992px show, but if not show */}
            <ComponentForm breakpoint={isActive} />
            <Header breakpoint={breakpoint} dataTable={dataTable} />
          </Col>
          <Col lg="3">
            {/* If it's to more 992px show, but if not show */}
            <ComponentProfile breakpoint={isActive} />
            <CardBalance
              breakpoint={isActive}
              styleDefault={{minHeight: "28vh"}}
              classGeneral="bg-primary bg-gradient text-white text-center"
              icon={<CurrencyBitcoin size={26} />}
              inter={["mt-5 mb-5", "bg-white"]}
              values={["Wallet Balance", "67.245"]}
            />
            <TableCreators
              breakpoint={isActive}
              classComponent={[
                "bg-dark mt-5 border border-dark rounded-3",
                "text-white text-uppercase",
                "text-white",
              ]}
              contentText={["top creators", "See all"]}
              data={dataTable}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
