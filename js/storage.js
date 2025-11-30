const KEY = "carrito"

export const guardarCarrito = () => {
    localStorage.setItem(KEY, JSON.stringify(carrito))
}   

export const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem(KEY)) || []
}

export const vaciarCarritoStorage = () => {
    localStorage.removeItem(KEY)
}