import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import '../../Styles/NavBar.css';

export const NavBar: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>('home');
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value: string) => {
        setActiveLink(value);
    };

    return (
        <Router>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} style={{width:'100px'}} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                            <Nav.Link href="#categories" className={activeLink === 'categories' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('categories')}>Categorias</Nav.Link>
                            <Nav.Link href="#news" className={activeLink === 'news' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('news')}>Novedades</Nav.Link>
                            <Nav.Link href="#populars" className={activeLink === 'populars' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('populars')}>Populares</Nav.Link>
                            <Nav.Link href="#offerts" className={activeLink === 'offerts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('offerts')}>Ofertas</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <HashLink to='#connect'>
                                <Button className="BtnLogin" sx={{ fontFamily: 'Centra', textTransform: 'none' }} variant="outlined" endIcon={<LoginIcon />}><span>Login</span></Button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
