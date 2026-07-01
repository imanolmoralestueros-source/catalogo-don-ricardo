const inPages = location.pathname.includes('/pages/')
const DATA_URL = inPages ? '../data/products.json' : './data/products.json'

export const getProducts = async () => {
    const response = await fetch(DATA_URL)

    if (!response.ok) {
        throw new Error('No se pudo cargar el catálogo (HTTP ' + response.status + ').')
    }

    const data = await response.json()
    return data.products
}

export const getProductById = async (id) => {
    const products = await getProducts()

    return products.find((product) => product.id === Number(id))
}
