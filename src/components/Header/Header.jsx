import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

const Header = () => (
    <Navbar collapseOnSelect fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <span>TG2VK</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href='/'>Home</NavItem>
                <NavItem eventKey={2} href='/settings'>Settings</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={3} href='/revoke-token'>Revoke Token</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
