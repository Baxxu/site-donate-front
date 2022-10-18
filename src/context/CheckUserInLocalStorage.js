export function CheckUserInLocalStorage(context) {
    if (window.localStorage.getItem("IsLoggedIn") === "true") {
        context.setIsLoggedIn(true)
    } else {
        context.setIsLoggedIn(false)
    }
}