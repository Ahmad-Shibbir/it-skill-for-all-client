import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/logo.ico'
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';

 
const Header = () => {
    const {providerLogin} = useContext(AuthContext);
    const {user} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn =() =>{
        providerLogin(googleProvider)
        .then(result=> {
            const user = result.user;
            console.log(user);
        })
        .catch(e=> console.log(e))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    {/* <img src={logo} alt="" width="60" height="60" /> */}
                    <Navbar.Brand href="#home">  ITskills4all</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
                            <Nav.Link ><Link to='/courses-container'>Courses</Link></Nav.Link>
                            <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
                            <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav>
                        <Nav.Link ><Link onClick={handleGoogleSignIn} to='/blog'>Google login</Link></Nav.Link>
                            <Nav.Link href="#deets">{user.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <img src={user.photoURL} alt="" />
                                email
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            

            
        </div>

    );
};

export default Header;