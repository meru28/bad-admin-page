import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/" style={{ color: "white" }}>
            {this.props.navBrand}
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.props.children}
              <NavItem>
                <Link to="/managecategory" style={{ color: "white" }}>
                  Manage Category
                </Link>{" "}
              </NavItem>
              <NavItem>
                {"__"}
                <Link to="/manageobat" style={{ color: "white" }}>
                  Manage Obat
                </Link>{" "}
              </NavItem>
              <NavItem>
                {"__"}
                <Link to="/manageuser" style={{ color: "white" }}>
                  Manage User
                </Link>{" "}
              </NavItem>
              <NavItem>
                {"__"}
                <Link to="/managetransaction" style={{ color: "white" }}>
                  Manage Transaksi
                </Link>{" "}
              </NavItem>
              {"__"}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: "white" }}>
                  Hello, {this.props.username}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem divider />
                  <DropdownItem onClick={this.onLogOutSelect}>
                    <Link to="/">Logout</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
