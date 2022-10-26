import React, {useEffect, useMemo, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import NavBar from "./components/NavBar";
import {Container, Row} from "react-bootstrap";
import Links from "./components/Links";
import {UserContext} from "./context/UserContext";
import './App.scss'
import {CheckUserInLocalStorage} from "./context/CheckUserInLocalStorage";
import SvidetelLeft from "./img/свидетель left.png";
import SvidetelRight from "./img/свидетель right.png";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const context = useMemo(() => ({isLoggedIn, setIsLoggedIn}), [isLoggedIn]);

    useEffect(() => {
        CheckUserInLocalStorage(context)
    })

    const location = useLocation()

    return (
        <UserContext.Provider value={context}>
            <Container>
                <Row className="mt-3 mb-3">
                    <NavBar/>
                </Row>
                <Row className="mt-3 mb-3">
                    <Outlet/>
                </Row>
                <Row className="mt-5 mb-5">
                    <Links/>
                </Row>

                <Row className="mt-3 mb-3">
                    {location.pathname === '/' ?
                        <img src={SvidetelLeft} alt="Свидетель left"/>
                        :
                        <img src={SvidetelRight} alt="Свидетель right"/>
                    }
                </Row>
            </Container>
        </UserContext.Provider>
    );
}

export default App;
