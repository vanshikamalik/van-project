import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { LinkContainer } from 'react-router-bootstrap'

export default function NavbarLayout() {
    return (<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to='/Home'>
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to='About'>
                    <Nav.Link>About Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='Contact'>
                    <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/Users'>
                    <Nav.Link >Users</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>)
}


