import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function DNSNavbar() {
  return (
    <Navbar color="success" light>
      <NavbarBrand href="/" className="mr-auto">
        <span className="text-white">DNS Service</span>
      </NavbarBrand>
    </Navbar>
  );
}

export default DNSNavbar;
