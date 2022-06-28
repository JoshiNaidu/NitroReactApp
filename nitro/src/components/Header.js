import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/Header.css'

function Header() {
    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
    }
    useEffect(() => {
      changeBackground()
      window.addEventListener("scroll", changeBackground)
    });

    const handle = ()=>{
      console.log("head")
      var x = document.getElementById("about-section");
    x.scrollIntoView();
    }
    const handle1 = ()=>{
      console.log("head")
      var x = document.getElementById("team-section");
    x.scrollIntoView();
    }
    const handle2 = ()=>{
      console.log("head")
      var x = document.getElementById("pricing-section");
    x.scrollIntoView();
    }
    const handle3 = ()=>{
      console.log("head")
      var x = document.getElementById("faq-section");
    x.scrollIntoView();
    }
    const handle4 = ()=>{
      console.log("head")
      var x = document.getElementById("portfolio-section");
    x.scrollIntoView();
    }
    const handle5 = ()=>{
      console.log("head")
      var x = document.getElementById("services-section");
    x.scrollIntoView();
    }
    const handle7 = ()=>{
      console.log("head")
      var x = document.getElementById("blog-section");
    x.scrollIntoView();
    }
    const handle8 = ()=>{
      console.log("head")
      var x = document.getElementById("contact-section");
    x.scrollIntoView();
    }
    const handle6 = ()=>{
      console.log("head")
      var x = document.getElementById("testimonials-section");
    x.scrollIntoView();
    }
  
  return (
    <div className='head'>

    <Navbar class='x' bg={navbar ? "light" : "none"} scrolling dark expand="lg" fixed='top' shadow-5-strong>
      <Container>
        <Navbar.Brand className=' mainhead' href="#home" style={{fontSize:'2rem'}}>Nitro.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown" onClick={handle}>
              <NavDropdown.Item href="#action/3.1" onClick={handle1}>Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={handle2}>
                Pricing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={handle3}>FAQs</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More Links
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" onClick={handle4}>Portfolio</Nav.Link>
            <Nav.Link href="#link" onClick={handle5}>Services</Nav.Link>
            <Nav.Link href="#link" onClick={handle6}>Testimonials</Nav.Link>
            <Nav.Link href="#link"onClick={handle7}>Blog</Nav.Link>
            <Nav.Link href="#link"onClick={handle8}>Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
</div>


  );
}

export default Header;