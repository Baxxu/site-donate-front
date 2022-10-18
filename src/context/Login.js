export const Login = (context) => {
    context.setIsLoggedIn(true)
    window.localStorage.setItem("IsLoggedIn", "true")
}