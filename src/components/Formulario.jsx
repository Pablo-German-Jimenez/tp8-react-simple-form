import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SimpleForm() {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Crew</Form.Label>
        <Form.Control type="name" placeholder="Enter your CREW BROO" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastname" />
      <Form.Label>Lastname</Form.Label>
      <Form.Control type="lastname" placeholder="Enter your lastname" />
      <Form.Group className="mb-3" controlId="formBasicLastname" />
      <Form.Label>D.N.I</Form.Label>
      <Form.Control type="dni" placeholder="Enter you D.N.I" />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default SimpleForm;
