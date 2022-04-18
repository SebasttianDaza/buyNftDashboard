import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import {CurrencyBitcoin} from "react-bootstrap-icons";

import imageCard from "/image/imageCard.svg";
import profileNtf from "/image/profileNtf.svg";
import imageBackground from "/image/imageBackground.svg";

import ComponentCard from "../../Components/Card/Card";
import ComponentCardBackground from "../../Components/Card/CardBackground";
import Buttoncard from "../../Components/Buttons/buttonCard";

const Header = ({breakpoint}) => {
  const content = {
    title: "Wrost Artwork",
    text: "Tom Jones",
  };

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
      />
      <h3 className="text-white mt-3 mb-2 fs-2">Trending NFT</h3>
      <Row>
        <Col md="6">
          <ComponentCard
            classGeneral="bg-body text-white border-0 mt-2 mb-3 rounded"
            classBody="bg-dark rounded-3"
            titleString="Wrost Artwork"
            textString="Tom Jones"
            imageProfile={profileNtf}
            imageBackground={imageCard}
            buttonCard={
              <Buttoncard
                content="View"
                classGeneral="btn-info rounded-pill"
                size="md"
                variant="info"
                icon={<CurrencyBitcoin />}
              />
            }
          />
        </Col>
        <Col md="6">
          <ComponentCard
            classGeneral="bg-body text-white border-0 mt-2 mb-3 rounded"
            classBody="bg-dark rounded-3"
            titleString="Mual Artwork"
            textString="Mufasa"
            imageProfile={profileNtf}
            imageBackground="https://firebasestorage.googleapis.com/v0/b/react-portfolio-863d8.appspot.com/o/Rectangle%206.svg?alt=media&token=01dcea91-10d4-4cb9-aab6-39bd298e2745"
            buttonCard={
              <Buttoncard
                content="View"
                classGeneral="btn-info rounded-pill"
                size="md"
                variant="info"
                icon={<CurrencyBitcoin />}
              />
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

Header.propTypes = {
  breakpoint: PropTypes.bool.isRequired,
};

export default Header;
