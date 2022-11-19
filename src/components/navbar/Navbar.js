import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../about/About'
import Contact from '../contact/Contact'
import Me from '../me/Me'
import Projects from '../projects/Projects'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink to="/" activestyle>
                    <Me />
                </NavLink>
                <Bars />
                <NavLink to="/about">
                    <About />
                </NavLink>
                <NavLink to="/projects">
                    <Projects />
                </NavLink>
                <NavLink to="/contact">
                    <Contact />
                </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;
