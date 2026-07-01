const TOKEN_KEY = 'adr_token'

const inPages = location.pathname.includes('/pages/')
const loginPath = inPages ? './login.html' : './pages/login.html'
const catalogPath = inPages ? '../index.html' : './index.html'

export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token)

export const redirectLogin = () => {
    if (!getToken()) {
        location.href = loginPath
    }
}

export const redirectCatalog = () => {
    if (getToken()) {
        location.href = catalogPath
    }
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
    location.href = loginPath
}
