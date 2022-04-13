import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {Search} from "react-bootstrap-icons";

const ComponentForm = ({}) => {
  return (
    <Form className="mt-4 mb-4">
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

export default ComponentForm;
