import React from 'react';
import {Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

const NavBar = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Link className="custom-nav-link p-2" to="/">Home</Link>
                </Col>

                <Col>
                    <Link className="custom-nav-link p-2 justify-content-end" to="account">Account</Link>
                </Col>
            </Row>
        </Container>
    );
};

export default NavBar;