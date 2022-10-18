export function Logout(context) {
    context.setIsLoggedIn(false)
    window.localStorage.setItem("IsLoggedIn", "false")
}