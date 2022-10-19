import React, {useEffect, useMemo, useState} from "react";
import {Outlet} from "react-router-dom";
import NavBar from "./components/NavBar";
import {Container, Row} from "react-bootstrap";
import Links from "./components/Links";
import {UserContext} from "./context/UserContext";
import './App.scss'
import {CheckUserInLocalStorage} from "./context/CheckUserInLocalStorage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const context = useMemo(() => ({isLoggedIn, setIsLoggedIn}), [isLoggedIn]);

    useEffect(() => {
        CheckUserInLocalStorage(context)
    })

    return (
        <UserContext.Provider value={context}>
            <Container>
                <Row className="mt-3 mb-3">
                    <NavBar/>
                </Row>
                <Row className="mt-3 mb-5">
                    <Outlet/>
                </Row>
                <Row className="mt-3 mb-3">
                    <Links/>
                </Row>
            </Container>
        </UserContext.Provider>
    );
}

export default App;
