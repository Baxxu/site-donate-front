import {authUrl} from "./authUrl";

export function authDeleteAllSessions() {
    return fetch(`${authUrl}/DeleteAllSessions`)
}