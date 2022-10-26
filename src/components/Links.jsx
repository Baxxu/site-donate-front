import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Links = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <a className="custom-link p-2" target="_blank" rel="noopener noreferrer"
                       href="mailto:baxxulol@gmail.com">
                        baxxulol@gmail.com
                    </a>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <a className="custom-link p-2" target="_blank" rel="noopener noreferrer"
                       href="https://github.com/Baxxu">
                        GitHub
                    </a>
                </Col>

                <Col>
                    <a className="custom-link p-2" target="_blank" rel="noopener noreferrer"
                       href="https://github.com/Baxxu/site-donate-front">
                        Front
                    </a>
                </Col>

                <Col>
                    <a className="custom-link p-2" target="_blank" rel="noopener noreferrer"
                       href="https://github.com/Baxxu/site-donate-back">
                        Back
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Links;