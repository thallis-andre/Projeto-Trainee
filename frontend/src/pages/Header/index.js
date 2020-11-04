import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import jwt_decode from "jwt-decode";

import './styles.css';

import pokeball from '../../assets/pokeball.png';
import defaultUser from '../../assets/default-user-image.png';
import { useUser } from '../../context/user';


function Header() {

  const { user, setUser } = useUser()



  function handleLogout() {
    localStorage.removeItem('token');
  }



  return (
    <>
      <Navbar className="header">

        <Navbar.Brand>
          <img alt="" src={pokeball} width="35" height="35" className="d-inline-block align-top" /> Poke Trainee
          </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link to="/home">Home</Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <img alt="" src={user.image ? user.image : defaultUser} width="25" height="25" className="d-inline-block align-top img-user" />
          <NavDropdown className="dropdown-img">
            <NavDropdown.Item>
              <Link to="/" onClick={() => handleLogout()}>Sair</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Navbar.Text>
            Logado com:
            <Link to="/profile"><a>{user.name}</a></Link>
          </Navbar.Text>
        </Navbar.Collapse>

      </Navbar>
    </>
  );
}

export default Header;
//trem tá cabuloso