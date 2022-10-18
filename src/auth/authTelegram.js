import {authUrl} from "./authUrl";

export function authTelegram(user) {
    let params = `auth_date=${user.auth_date}&id=${user.id}&hash=${user.hash}`

    if (user.hasOwnProperty("first_name")) {
        params = params.concat(`&first_name=${user.first_name}`)
    }

    if (user.hasOwnProperty("last_name")) {
        params = params.concat(`&last_name=${user.last_name}`)
    }

    if (user.hasOwnProperty("username")) {
        params = params.concat(`&username=${user.username}`)
    }

    if (user.hasOwnProperty("photo_url")) {
        params = params.concat(`&photo_url=${user.photo_url}`)
    }

    return fetch(`${authUrl}/Telegram?${params}`)
}