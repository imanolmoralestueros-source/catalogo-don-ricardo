import { redirectCatalog, saveToken } from './authGuard.js'

redirectCatalog()

const USERS = [
    {
        username: 'ImanolM',
        password: 'imanol2003',
        name: 'Usuario Demo',
        role: 'visitante'
    },
    {
        username: 'SoyGuardian',
        password: 'iocarry',
        name: 'Profesor',
        role: 'revisor'
    },
    {
        username: 'imanol',
        password: 'catalogo2026',
        name: 'Imanol',
        role: 'admin'
    }
]

const userInput = document.getElementById('user')
const passwordInput = document.getElementById('password')
const loginBtn = document.getElementById('login')
const wrongMessage = document.getElementById('wrongMessage')

const handleLogin = () => {
    const username = userInput.value.trim()
    const password = passwordInput.value

    const foundUser = USERS.find((user) => {
        return user.username === username && user.password === password
    })

    if (foundUser) {

        saveToken('demo-session-' + Date.now())

        localStorage.setItem('adr_user', JSON.stringify({
            username: foundUser.username,
            name: foundUser.name,
            role: foundUser.role
        }))

        redirectCatalog()
    } else {
        wrongMessage.textContent = 'Usuario o contraseña incorrectos.'
    }
}

loginBtn.addEventListener('click', handleLogin)

passwordInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleLogin()
    }
})
