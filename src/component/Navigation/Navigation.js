import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <Navbar color="light" light expand="md">
        <div className="container-fluid">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink to='/' exact className="nav-link" >ControlForm</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/uncontolform' exact className="nav-link" >UncontrolForm</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/muiform' exact className="nav-link" >MUI Form</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/about' exact className="nav-link" >About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default Navigation;
