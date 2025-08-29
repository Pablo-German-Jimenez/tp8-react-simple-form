import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { useForm } from "react-hook-form";

function SimpleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const afterValidated = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <Form className="d-grid gap-3" controlid="formUser" onSubmit={handleSubmit(afterValidated)}>
      <Form.Group >
        <Form.Control type="text" placeholder="Enter your CREW BROO" {...register('crew', {required:'Crew es un dato obligatorio',maxLength:{ value:5 , message : 'Crew'}})}/>
         <div className="d-flex justify-content-center mt-1"><Badge bg="danger" text="dark"></Badge></div>
      </Form.Group>
      
      <Form.Group  >
        <Form.Control type="name" placeholder="Enter your name" {...register('name',{required:true})}/>
      </Form.Group>
      <div className="d-flex justify-content-center mt-1"><Badge bg="secondary" text="danger">{errors.name && <span>Your name is required</span>}</Badge></div>
      <Form.Group/>

      <Form.Group >
      <Form.Control type="lastName" placeholder="Enter your lastname" {...register('lastName',{required:true})} />
        <div className="d-flex justify-content-center"><Badge bg="danger" text="dark">{errors.lastName && <span>This field is required</span>}</Badge></div>
      </Form.Group>

      <Form.Group>
        <Form.Control type="dni" placeholder="Enter your D.N.I" {...register('dni',{required:true})}/>
        <div className="d-flex justify-content-center mt-1"><Badge bg="danger" text="dark">{errors.dni && <span>Your d.n.i is required broo</span>}</Badge></div>
      </Form.Group>
      
      <Form.Group >
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
