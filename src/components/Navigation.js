import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand className="m-auto" display="flex">
        Generate your CV
      </Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
