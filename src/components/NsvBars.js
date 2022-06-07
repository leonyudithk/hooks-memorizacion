import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NsvBars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#link"><Link to="/">React.Memo</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/useMemo">UseMemo</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/useCallback">UseCallback</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/padre">Ejerc Independi </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NsvBars;