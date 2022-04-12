import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img className='nav-img' src="https://previews.123rf.com/images/juliatim/juliatim1502/juliatim150200046/36400038-donna-sorridente-operatore-di-call-center-con-telefono-tondo-icona-blu.jpg" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto text-center ">
                            <Link to='/home'>NEW ESCORTS</Link>
                            <Link to='/best'>BISEXUAL ESCORTS</Link>
                            <Link to='/toprat'>TOP100 ESCORTS</Link>
                            <Link to='/reviews'>REVIEWS</Link>
                            <Link to='/contact'>CONTACT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;