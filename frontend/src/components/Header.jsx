import React from 'react'

import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Alphashop.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/cart"><i class='fas fa-shopping-cart'></i> Cart</Nav.Link>
                        <Nav.Link href="/login"><i class='fas fa-user'></i> Sign in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
