import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

const Header = (state) => (
    <Navbar collapseOnSelect fluid>
        <Navbar.Header>
            <Navbar.Brand>
                <span>TG2VK</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href='/' onClick={() => state.changeView('/')}>Home</NavItem>
                <NavItem eventKey={2} href='/settings' onClick={() => state.changeView('/settings')}>Settings</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={3} href='/revoke-token' onClick={ () => state.changeView('/revoke-token')}>Revoke Token</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header
