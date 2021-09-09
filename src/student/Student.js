import React, { useState } from 'react';
import Profile from './profile';
import addProfile from './addProfile'
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
  DropdownItem,

} from 'reactstrap';



const Student = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
      <Navbar color="primary" light expand="md">
        <NavbarBrand href="">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/profile">My Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/addProfile" component={addProfile}>Add Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/vacancies">Vacancies</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
   
        </div>
    );
}
export default Student