import {authUrl} from "./authUrl";

export function authDeleteSession() {
    return fetch(`${authUrl}/DeleteSession`)
}