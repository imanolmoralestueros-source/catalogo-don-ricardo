export const createCard = (product) => {

    const { id, name, category, price, unit, presentation, image } = product

    const card = document.createElement('article')
    card.classList.add('productCard')

    const img = document.createElement('img')
    img.src = image
    img.alt = name
    img.loading = 'lazy'
    img.classList.add('productImage')

    const body = document.createElement('div')
    body.classList.add('productBody')

    const categoryEl = document.createElement('p')
    categoryEl.textContent = category
    categoryEl.classList.add('productCategory')

    const title = document.createElement('a')
    title.textContent = name
    title.href = './pages/producto.html?id=' + id
    title.classList.add('productTitle')

    const meta = document.createElement('p')
    meta.textContent = presentation
    meta.classList.add('productMeta')

    const priceEl = document.createElement('p')
    priceEl.classList.add('productPrice')
    priceEl.textContent = '$' + price.toFixed(2) + ' '

    const unitSpan = document.createElement('span')
    unitSpan.textContent = 'USD / ' + unit
    priceEl.appendChild(unitSpan)

    const button = document.createElement('button')
    button.textContent = 'Solicitar cotización'
    button.classList.add('productButton')
    button.addEventListener('click', () => {
        alert('Cotización solicitada para: ' + name)
    })

    body.append(categoryEl, title, meta, priceEl, button)
    card.append(img, body)

    return card
}
