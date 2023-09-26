import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const CustomNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar bg="light mb-5 " expand="lg">
      <Container>
        <Link to="/" className="ubuntu my-3 fs-3 fw-bolder navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <MdOutlineClose className='menu_close' />
          ) : (
            <GiHamburgerMenu className='menu_open' />
          )}
        </button>

        <Navbar.Collapse
          id="navbarNav"
          className={`justify-content-end fs-5 fw-bold ${menuOpen ? 'show' : ''}` }
        >
          <Nav>
            <Nav.Item>
              <NavLink to="/" className="nav-link" activeClassName="active">
                Characters
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/episodes" className="nav-link" activeClassName="active">
                Episodes
              </NavLink>
            </Nav.Item>

            <Nav.Item>
              <NavLink to="/location" className="nav-link" activeClassName="active">
                Location
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
