import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import CurrencyBitcoin from "react-bootstrap-icons/dist/icons/currency-bitcoin";

import ComponentCard from "../../Components/Card/Card";
import ComponentCardBackground from "../../Components/Card/CardBackground";
import Buttoncard from "../../Components/Buttons/buttonCard";
import CardBalance from "../../Components/Card/CardBalance";
import OffCanvasComponent from "../../Components/OffCanvas/OffCanvas";
import TableCreators from "../../Components/Table/tableCreators";
import imageBackground from "../../../public/assets/image/imageBackgrouund-min.svg";

const Header = ({breakpoint, dataTable}) => {
  const content = [
    [
      {
        titleString: "Wrost Artwork",
        textString: "Tom Jones",
        imageProfile: "../../../public/assets/image/imageCardProfile-min.svg",
        imageBackground: "../../../public/assets/image/imageCard2-min.svg",
      },
      {
        titleString: "Wrost Artwork",
        textString: "Sebastian",
        imageProfile: "../../../public/assets/image/imageCardProfile-min.svg",
        imageBackground: "../../../public/assets/image/imageCard2-min.svg",
      },
    ],
    [
      {
        titleString: "Mual Artwork",
        textString: "Mufasa",
        imageProfile: "../../../public/assets/image/imageCardProfile-min.svg",
        imageBackground: "../../../public/assets/image/imageCard2-min.svg",
      },
    ],
  ];

  const [rightContent, leftContent] = content;

  return (
    <Container className={breakpoint ? "mt-3" : ""}>
      <ComponentCardBackground
        classGeneral="bg-body text-white border-0"
        classTitle={breakpoint ? "text-sm-start fs-5" : "text-sm-start fs-2 col-4"}
        classBtn="btn-info rounded-pill"
        sizeBtn={breakpoint ? "sm" : "lg"}
        imageBackground={imageBackground}
        contentBtn="Start here"
        title="Create your own NFT"
        styleDefault={{minHeight: "20vh"}}
      />
      <OffCanvasComponent
        breakpoint={breakpoint}
        content={
          <TableCreators
            breakpoint={breakpoint}
            classComponent={[
              "bg-dark border border-dark rounded-3",
              "text-white text-uppercase",
              "text-white",
            ]}
            contentText={["top creators", "See all"]}
            data={dataTable}
          />
        }
        contentBtn={["Show Content", "md", "primary", "my-4 mx-auto"]}
        contentCanvas={["bg-body text-white", "More content"]}
      />
      <CardBalance
        breakpoint={breakpoint}
        styleDefault={{minHeight: "28vh"}}
        classGeneral="bg-primary bg-gradient text-white text-center"
        icon={<CurrencyBitcoin size={26} />}
        inter={["mt-5 mb-5", "bg-white"]}
        values={["Wallet Balance", "67.245"]}
      />
      <h3 className="text-white mt-3 mb-2 fs-2">Trending NFT</h3>
      <Row>
        <Col md="6">
          {rightContent.map((item, index) => {
            return (
              <ComponentCard
                key={index}
                classGeneral="bg-body text-white border-0 mt-2 mb-3 rounded"
                classBody="bg-dark rounded-3"
                titleString={item.titleString}
                textString={item.textString}
                imageProfile={item.imageProfile}
                imageBackground={item.imageBackground}
                buttonCard={
                  <Buttoncard
                    content="View"
                    classGeneral="btn-info rounded-pill"
                    size="md"
                    variant="info"
                    icon={<CurrencyBitcoin size={24} />}
                  />
                }
              />
            );
          })}
        </Col>
        <Col md="6">
          {leftContent.map((item, index) => {
            return (
              <ComponentCard
                key={index}
                classGeneral="bg-body text-white border-0 mt-2 mb-3 rounded"
                classBody="bg-dark rounded-3"
                titleString={item.titleString}
                textString={item.textString}
                imageProfile={item.imageProfile}
                imageBackground={item.imageBackground}
                buttonCard={
                  <Buttoncard
                    content="View"
                    classGeneral="btn-info rounded-pill"
                    size="md"
                    variant="info"
                    icon={<CurrencyBitcoin size={24} />}
                  />
                }
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = {
  breakpoint: PropTypes.bool.isRequired,
  dataTable: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
