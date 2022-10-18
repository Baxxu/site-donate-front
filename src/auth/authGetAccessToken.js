import {authUrl} from "./authUrl";

export function authGetAccessToken() {
    return fetch(`${authUrl}/GetAccessToken`)
}