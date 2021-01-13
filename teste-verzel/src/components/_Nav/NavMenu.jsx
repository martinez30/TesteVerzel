import React, { useEffect } from 'react';
import { Container, Navbar, NavbarBrand} from 'reactstrap';
import { Link , useHistory } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import './NavMenu.css';

import {logout, getUserName, isLogged} from '../.././auth/auth.guard'

function NavMenu(props) {

  const history = new useHistory();

  function loggout(){
    logout();
    history.push('/login'); 
  }

  useEffect(() => {
    isLogged();
  }, [isLogged()])
  
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/" ><h2>Teste Verzel</h2></NavbarBrand>
            {
            isLogged() ? (
              <Navbar>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {getUserName()}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={loggout}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
              </Navbar>
                ) 
              : null
            }
          </Container>
        </Navbar>
      </header>
    )
}

export default NavMenu