import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Form, FormControl, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand><Link to="/">Note Zipper</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className='m-auto'>
                        <Form>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>

                    <Nav className="me-auto">
                        <Nav.Link id="RouterNavLink"><Link to="/mynotes">MyNotes</Link></Nav.Link>
                        {/* <Nav.Link href="#link">Ravi Patel</Nav.Link> */}
                        <NavDropdown title="Ravi Patel" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">
                                Logout
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
