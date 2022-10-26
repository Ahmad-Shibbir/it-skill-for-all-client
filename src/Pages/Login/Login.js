import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider/AuthProvider';
// import './Login.css'

const Login = () => {
 
    const {signIn, providerLogin} = useContext(AuthContext);
    const navigate = useNavigate()
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

   const handleSignin = event=>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log( email,password);

        signIn (email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(e => console.error(e))
   }

   const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.log(e))
    }
   const handleGithubSignIn = () => {
    providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.log(e))
    }

    return (
        <div className=' w-50 mx-lg-auto'>
            <Form onSubmit={handleSignin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <button onClick={handleGoogleSignIn}>Google</button>
            <button onClick={handleGithubSignIn}>Github</button>
            <br />
            <p><Link to='/register'>don't have any account?</Link></p>
        </div>
    );
};

export default Login;