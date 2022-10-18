import React, {useContext} from 'react';
import {apiUrl} from "../api/apiUrl";
import {Button, Container, Row} from "react-bootstrap";
import {authGetAccessToken} from "../auth/authGetAccessToken";
import {UserContext} from "../context/UserContext";
import {Logout} from "../context/Logout";

const Test = () => {
    const context = useContext(UserContext)

    return (
        <Container fluid>
            <Row xs="auto" className="justify-content-center">
                Откройте консоль F12
            </Row>

            <Row xs="auto" className="justify-content-center mt-3">
                <Button
                    onClick={() => {
                        fetch(`${apiUrl}/Test`)
                            .then((resp) => resp.json())
                            .then((data) => {
                                console.log("api/Test")
                                console.log(data)

                                if (!data.ok) {
                                    authGetAccessToken()
                                        .then((resp) => resp.json())
                                        .then((data) => {
                                            console.log("auth/GetAccessToken")
                                            console.log(data)

                                            if (!data.ok) {
                                                Logout(context)
                                            }
                                        })
                                }
                            })
                    }}
                >
                    Call apiTest
                </Button>
            </Row>
        </Container>
    );
};

export default Test;