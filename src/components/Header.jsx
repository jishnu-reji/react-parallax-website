import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div className='nava'>
      <div className='container nnv'>
          <Navbar expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#" className="bb text-white"><i className="fa-brands fa-fort-awesome text-white me-2"></i>ROYAL PALACE</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="bb1 text-white" href="#action1">Home</Nav.Link>
              <Nav.Link className="bb1 text-white" href="#action1">Suits</Nav.Link>
              <Nav.Link className="bb1 text-white" href="#action1">Accomodations</Nav.Link>
              <Nav.Link className="bb1 text-white" href="#action1">Offers</Nav.Link>
              <Nav.Link className="bb1 text-white" href="#action1">About Us</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </div>
  )
}

export default Header