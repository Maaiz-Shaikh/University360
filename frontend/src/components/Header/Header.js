import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { Form, FormControl, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';

function Header({ setSearch }) {

    const history = useHistory();
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        history.push("/");
    };

    return (
        <Navbar bg="primary" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand><Link to="/">Newsify</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className='m-auto'>
                        <Form>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                                aria-label="Search"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Form>
                    </Nav>

                    <Nav className="me-auto">
                        <Nav.Link id="RouterNavLink"><Link to="/mynotes">MyNotes</Link></Nav.Link>
                        {/* <Nav.Link href="#link">Ravi Patel</Nav.Link> */}
                        <NavDropdown title="Chintan Bhatt" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                onClick={logoutHandler}
                            // () => {
                            //     localStorage.removeItem("userInfo");
                            //     history.push("/");
                            // }
                            >
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
