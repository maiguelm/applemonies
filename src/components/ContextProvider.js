import { createContext, useState, useContext, useEffect } from "react"
export const contexto = createContext()
const { Provider } = contexto



export const useCarrito = () => {
    return useContext(contexto)
}


const ContextProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [menu, setMenu] = useState(false)


    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
    }

    const borrarItem = (id) => {

    }

    const agregarProducto = (producto, cantidad) => {

        if (isInCart.inCart) {
            setCantidadTotal(cantidadTotal+cantidad)
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.price * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    
    }

    const isInCart = (id) => {
        return { inCart: false, item: {}, index: 0 }
    }


    const valorDelContexto = {
        productos: carrito,
        cantidad: total,//precio
        cantidadTotal : cantidadTotal,//cant de productos
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        menu: [menu, setMenu]
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default ContextProvider