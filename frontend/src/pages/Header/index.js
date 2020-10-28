import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

import './styles.css';

import pokeball from '../../assets/pokeball.png';

function Header() {
  return (
    <>
      <Navbar className="header">

        <Navbar.Brand>
          <img alt="" src={pokeball} width="35" height="35" className="d-inline-block align-top" /> Poke Trainee
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link to="/">Home</Link> 
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <img alt="" src={pokeball} width="25" height="25" className="d-inline-block align-top" />
          <NavDropdown className="dropdown-img">
            <NavDropdown.Item>
              <Link to="/profile">Meu perfil</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text>
            Logado com: 
            <Link to="/profile"><a>Thallis André</a></Link>
          </Navbar.Text>
        </Navbar.Collapse>

      </Navbar>
    </>
  );
}

export default Header;
//trem tá cabuloso