import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo1 from '../../../assets/logo1.ico'
import { AuthContext } from '../../../Contex/AuthProvider/AuthProvider';
// import { FaChalkboardTeache } from "react-icons/fa";


const Header = () => {
    const { providerLogin } = useContext(AuthContext);
    const { user, logOut} = useContext(AuthContext)
  

    const handleLogOut= () =>{
        logOut()
        .then(()=>{} )
        .catch(e => console.error(e))
    }

    const displayUserName= ()=>{
        console.log("hellow");
    }
 
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <img src={logo1} alt="" width="60" height="60" />
                    <Navbar.Brand href="#home">  ITskills4all</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link style={{textDecoration:'none'}} to='/home'>Home</Link></Nav.Link>

                            <Nav.Link ><Link style={{textDecoration:'none'}}to='/courses-container'>Courses</Link></Nav.Link>

                            <Nav.Link ><Link style={{textDecoration:'none'}} to='/blog'>Blog</Link></Nav.Link>

                            <Nav.Link ><Link style={{textDecoration:'none'}} to='/faq'>FAQ</Link></Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}

                        </Nav>
                        <Nav>
                            <Nav.Link ></Nav.Link>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                           <span>{user?.displayName}</span>
                                           <button onClick={handleLogOut}>Logout</button>
                                        </>
                                        
                                        : <div>
                                            <Nav.Link ><Link to='/login'>Login</Link></Nav.Link>
                                           
                                        </div>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                { user?.photoURL?
                                    <Image  
                                        style={{ height: '30px' }} roundedCircle
                                        src={user.photoURL}>
                                            
                                    </Image>
                                    :<Image 
                                    style={{ height: '30px' }} roundedCircle
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZ5GsZzyJ6Jjqi3aqJl_s4uCu1bW_Cf6nfi7TudP0gFjIEOy3XroUucaADK7Ctljx2uQ&usqp=CAU'>
                                        
                                </Image>
                                }

                                
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </div>

    );
};

export default Header;