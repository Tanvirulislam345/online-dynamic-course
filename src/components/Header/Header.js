import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid className="container">
                    <Navbar.Brand as={Link} to={"/home"} className="link"><h2>Dynamic Course</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll >

                            <Nav.Link as={Link} to={"/home"} className="link"><p>Home</p></Nav.Link>
                            <Nav.Link as={Link} to={"/allCourse"} className="link"><p>courses</p></Nav.Link>
                            <Nav.Link as={Link} to={"/service"} className="link"><p>Service</p></Nav.Link>
                            <Nav.Link as={Link} to={"/contact"} className="link"><p>Contact</p></Nav.Link>
                            <Nav.Link as={Link} to={"/signUp"} className="link"><p>sign up</p></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;