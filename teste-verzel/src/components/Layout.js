import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './_Nav/NavMenu.jsx';

function Layout(props){

    return (
      <div>
        <NavMenu/>
        <Container>
          {props.children}
        </Container>
      </div>
    );
}

export default Layout