import { redirectLogin } from './authGuard.js'
import { getProductById } from './services/productsService.js'

redirectLogin()

const params = new URLSearchParams(location.search)
const id = params.get('id')

const detail = document.getElementById('detail')

const setText = (elementId, text) => {
    document.getElementById(elementId).textContent = text
}

const showState = (title, message) => {
    detail.className = 'state state--error'
    detail.innerHTML = '<h2>' + title + '</h2><p>' + message + '</p>'
}

const render = async () => {
    try {
        const product = await getProductById(id)

        if (!product) {
            showState('Producto no encontrado', 'Revisa el enlace e intenta nuevamente.')
            return
        }

        const img = document.getElementById('productImage')
        img.src = '../' + product.image
        img.alt = product.name

        setText('category', product.category)
        setText('productName', product.name)
        setText('description', product.description)
        setText('presentation', product.presentation)
        setText('origin', product.origin)
        setText('stock', product.stock + ' ' + product.unit)
        setText('price', '$' + product.price.toFixed(2))
        setText('unit', 'USD / ' + product.unit)

        document.title = product.name + ' — Agricola Don Ricardo'
    } catch (error) {
        showState('Error al cargar', error.message)
    }
}

render()
