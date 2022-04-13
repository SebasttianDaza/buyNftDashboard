import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {Search} from "react-bootstrap-icons";
import PropTypes from "prop-types";

const ComponentForm = ({breakpoint}) => {
  return (
    <Form className={breakpoint === false ? "d-none" : "mt-4 mb-4"}>
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-dark text-secondary border-dark">
          <Search size={26} />
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search Keyword here"
          className="bg-dark border-dark"
        />
      </InputGroup>
    </Form>
  );
};

ComponentForm.propTypes = {
  breakpoint: PropTypes.bool,
};

export default ComponentForm;
