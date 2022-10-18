import React from 'react';
import {Container, Row} from "react-bootstrap";

const TransactionHistory = () => {
    return (
        <Container fluid>
            <Row xs="auto" className="d-flex justify-content-center">
                <h3>
                    История транзакций
                </h3>
            </Row>

            <Row>
                <div>
                    Переводы в процессе подключения
                </div>
            </Row>
        </Container>
    );
};

export default TransactionHistory;