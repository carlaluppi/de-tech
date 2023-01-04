import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

import '../Form/Form.scss';

function Formu() {

  return (
    <div className='container-form'>
      <h1 className='text-main'> Welcome, we are your reliable technical team.</h1>
    <Form className='form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" /> 
      </Form.Group>
      <div className='button-container'>
      <Link to="/profile"> <Button className='button' variant="primary" type="submit">
        Log In
      </Button> </Link>
      </div>
    </Form>
    </div>
  );
}

export default Formu;


