import React from 'react'
import { string, func, shape, arrayOf, any } from 'prop-types'
import { Nav, Navbar, NavItem } from 'react-bootstrap'



export const Header = props => {
    const getNavItems = (links) => (
        links.map((link, index) => (
            <NavItem key={index} eventKey={link.eventKey} href={link.href} onClick={() => props.changeView(link.href)}>{link.title}</NavItem>
        ))
    )
    return (
        <Navbar collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <span>{props.title}</span>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>{getNavItems(props.links.left)}</Nav>
                <Nav pullRight>{getNavItems(props.links.right)}</Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

Header.propTypes = {
    title: string,
    changeView: func.isRequired,
    links: shape({
        left: arrayOf(shape({
            eventKey: any,
            href: string.isRequired,
            title: string.isRequired
        })),
        right: arrayOf(shape({
            eventKey: any,
            href: string.isRequired,
            title: string.isRequired
        }))
    })
}

Header.defaultProps = {
    links: {
        left: [],
        right: []
    }
}

export default Header
