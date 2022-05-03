import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="home">

                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="Home#seller">Best Seller</Nav.Link>
                            <Nav.Link href="Home#offer">Seller Offer</Nav.Link>
                            <Nav.Link href="Home#contact">Contact Us</Nav.Link>

                        </Nav>
                        <Nav>

                            <Nav.Link eventKey={2} as={Link} to="/About">
                                About
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="/myInventore">
                                My Inventory
                            </Nav.Link>
                            <Nav.Link eventKey={2} as={Link} to="Login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    );
};

export default Header;