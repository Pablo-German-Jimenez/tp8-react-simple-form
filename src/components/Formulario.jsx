import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";

function SimpleForm() {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control type="name" placeholder="Enter your CREW BROO" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label></Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname" />
      <Form.Label></Form.Label>
      <Form.Control type="lastname" placeholder="Enter your lastname" />
      <Form.Group className="mb-3" controlId="formBasicLastname" />
      <Form.Label></Form.Label>
      <Form.Control type="dni" placeholder="Enter you D.N.I" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Badge bg="warning" text="dark">
          We'll never share your email amd D.N.I with anyone else.
        </Badge>
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SimpleForm;
