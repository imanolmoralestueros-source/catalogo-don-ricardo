import { redirectLogin, logout } from './authGuard.js'
import { getProducts } from './services/productsService.js'
import { createCard } from './createCard.js'

redirectLogin()

const grid = document.getElementById('productGrid')
const stateBox = document.getElementById('state')
const searchInput = document.getElementById('search')
const categorySelect = document.getElementById('category')
const countEl = document.getElementById('count')
const logoutBtn = document.getElementById('logout')

logoutBtn.addEventListener('click', logout)

let allProducts = []

const showLoading = () => {
    grid.innerHTML = ''
    stateBox.className = 'state'
    stateBox.innerHTML = '<div class="spinner"></div><p>Cargando catálogo...</p>'
    stateBox.hidden = false
}

const showError = (message) => {
    grid.innerHTML = ''
    stateBox.className = 'state state--error'
    stateBox.innerHTML = '<h2>No se pudo cargar el catálogo</h2><p>' + message + '</p>'
    stateBox.hidden = false
}

const showEmpty = () => {
    stateBox.className = 'state'
    stateBox.innerHTML = '<h2>Sin resultados</h2><p>Prueba con otra búsqueda o categoría.</p>'
    stateBox.hidden = false
}

const hideState = () => {
    stateBox.hidden = true
}

const fillCategories = (products) => {

    const categories = [...new Set(products.map((p) => p.category))].sort()

    categories.forEach((category) => {
        const option = document.createElement('option')
        option.value = category
        option.textContent = category
        categorySelect.appendChild(option)
    })
}

const renderProducts = (products) => {
    grid.innerHTML = ''

    if (products.length === 0) {
        showEmpty()
        countEl.textContent = ''
        return
    }

    hideState()
    products.forEach((product) => {
        grid.appendChild(createCard(product))
    })
    countEl.textContent = products.length + ' producto(s)'
}

const applyFilters = () => {
    const term = searchInput.value.trim().toLowerCase()
    const category = categorySelect.value

    const filtered = allProducts
        .filter((p) => category === '' || p.category === category)
        .filter((p) => p.name.toLowerCase().includes(term))

    renderProducts(filtered)
}

searchInput.addEventListener('input', applyFilters)
categorySelect.addEventListener('change', applyFilters)

const init = async () => {
    showLoading()
    try {
        allProducts = await getProducts()
        fillCategories(allProducts)
        renderProducts(allProducts)
    } catch (error) {
        showError(error.message)
    }
}

init()
