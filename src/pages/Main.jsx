import React, {useContext} from 'react';
import {Container, Row} from "react-bootstrap";
import MoneyTransferForm from "../components/MoneyTransferForm";
import {UserContext} from "../context/UserContext";

const Main = () => {
    const context = useContext(UserContext)

    return (
        <Container fluid>
            <Row xs="auto" className="justify-content-center">
                <h1>Это сайт для резюме</h1>
            </Row>

            <Row className="mt-3">
                <h3>Здесь вы можете подарить мне деньги</h3>
                <div>
                    А заодно увидеть какой я классный,
                    могу сделать сайт и подключить оплату
                </div>
            </Row>

            <Row className="mt-3">
                <MoneyTransferForm/>
            </Row>

            {!context.isLoggedIn ?
                <Row className="mt-3">
                    <div>
                        Для сохранения истории переводов войдите в аккаунт
                    </div>
                </Row>
                :
                ""
            }
        </Container>
    );
};

export default Main;