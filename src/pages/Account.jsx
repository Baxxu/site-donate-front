import React, {useContext} from 'react';
import TelegramAuthJs from "../components/TelegramAuthJs";
import {Button, Col, Container, Row} from "react-bootstrap";
import {UserContext} from "../context/UserContext";
import {Logout} from "../context/Logout";
import {authDeleteSession} from "../auth/authDeleteSession";
import TransactionHistory from "../components/TransactionHistory";
import {authDeleteAllSessions} from "../auth/authDeleteAllSessions";

const Account = () => {
    const context = useContext(UserContext)

    if (context.isLoggedIn) {
        return (
            <Container fluid>
                <Row className="d-flex justify-content-end">
                    <Col xs="auto">
                        <Button onClick={() => {
                            authDeleteAllSessions()
                            Logout(context)
                        }}>
                            Выйти из всех сессий
                        </Button>
                    </Col>

                    <Col xs="auto">
                        <Button onClick={() => {
                            authDeleteSession()
                            Logout(context)
                        }}>
                            Выйти
                        </Button>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <TransactionHistory/>
                </Row>
            </Container>
        );
    } else {
        return (
            <Container fluid>
                <Row xs="auto" className="d-flex justify-content-center">
                    <TelegramAuthJs/>
                </Row>
            </Container>
        )
    }
};

export default Account;