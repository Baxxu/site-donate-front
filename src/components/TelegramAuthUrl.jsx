import React, {useEffect, useRef} from 'react';
//old
const TelegramAuthUrl = () => {
    const ref = useRef(null)

    useEffect(() => {
        if (ref.current === null) return

        const script = document.createElement("script")
        script.src = "https://telegram.org/js/telegram-widget.js?19"
        script.setAttribute("data-telegram-login", "testest_ru_bot")
        script.setAttribute("data-size", "large")
        script.setAttribute("data-userpic", "false")
        script.setAttribute("data-auth-url", "https://api.testest.ru/TelegramAuth")
        script.async = true

        ref.current.appendChild(script)
    }, [ref])

    return (
        <div ref={ref}/>
    );
};

export default TelegramAuthUrl;