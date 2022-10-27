import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState();
    const {createUser} = useContext(AuthContext);
    const handleSubmit = event=>{
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL,email,password);

        createUser(email, password) 
        .then(result =>{
            const user =  result.user;
            console.log(user);
        })
        .catch(error => {
            setError(error.message);
            
        })
    }

 
    return (
        <div className=' w-50 mx-lg-auto'>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
                
                        <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <br />
            <p><Link to='/login'>already have an account</Link></p>
            
        </div>
    );
};

export default Register;