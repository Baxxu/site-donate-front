import React, {useContext, useEffect, useRef} from 'react';
import {authTelegram} from "../auth/authTelegram";
import {UserContext} from "../context/UserContext";
import {Login} from "../context/Login";

const TelegramAuthJs = () => {
    const ref = useRef(null)

    const context = useContext(UserContext)

    function onTelegramAuth(user) {
        authTelegram(user)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.ok === true) {
                    Login(context)
                }
            })

    }

    window.onTelegramAuth = (user) => onTelegramAuth(user);

    useEffect(() => {
        if (ref.current === null) return

        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?19"
        script.setAttribute("data-telegram-login", "testest_ru_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-userpic", "false")
        script.setAttribute("data-onauth", "window.onTelegramAuth(user)")
        script.async = true

        ref.current.appendChild(script)
    }, [ref])

    return (
        <div ref={ref} className="d-flex justify-content-center"/>
    );
};

export default TelegramAuthJs;