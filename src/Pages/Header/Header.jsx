import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ComponentCard from "../../Components/Card/Card";
import imageCard from "../../../public/image/imageCard.svg";
import ComponentCardBackground from "../../Components/Card/CardBackground";
import imageBackground from "../../../public/image/imageBackground.svg";

const Header = () => {
  const content = [
    {
      title: "Wrost Artwork",
      text: "Tom Jones",
    },
  ];

  return (
    <Container>
      <ComponentCardBackground
        classGeneral="bg-body text-white border-0"
        classTitle="text-sm-start fs-2"
        imageBackground={imageBackground}
        contentBtn="Start here"
        title="Create your own NFT"
      />
      <Row>
        <Col />
        <Col />
      </Row>
    </Container>
  );
};

export default Header;
