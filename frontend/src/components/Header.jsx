import React from 'react'

import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap' 

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Alphashop.</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{marginLeft: 'auto'}}>
                        <LinkContainer to="cart">
                            <Nav.Link><i class='fas fa-shopping-cart'></i> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link><i class='fas fa-user'></i> Sign in</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
