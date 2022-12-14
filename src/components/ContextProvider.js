import { createContext, useState, useEffect } from "react"
export const contexto = createContext()
const { Provider } = contexto


const ContextProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [menu, setMenu] = useState(false)


    useEffect(() => {
        const storageCarrito = JSON.parse(localStorage.getItem("carrito"))
        const storageCantidad = JSON.parse(localStorage.getItem("cantidad"))
        const storagePrecio = JSON.parse(localStorage.getItem("precioFinal"))
        if (storageCarrito) {
            setCarrito(storageCarrito)
            setCantidadTotal(storageCantidad)
            setTotal(storagePrecio)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
        localStorage.setItem("cantidad", JSON.stringify(cantidadTotal))
        localStorage.setItem("precioFinal", JSON.stringify(total))
    }, [carrito])


    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }

    const borrarProducto = id => {
        carrito.forEach((producto, index) => {
            if (producto.id === id) {
                producto.cantidad = 1;
                carrito.splice(index, 1)
            }
        })
        setCarrito([...carrito])
        setCantidadTotal(carrito.length)
    }

    const agregarProducto = (producto, cantidad) => {
        const existe = carrito.find((productoCarrito) => productoCarrito.id === producto.id);
        if (existe) {
            setCarrito(carrito.map((productoCarrito) => {
                if (productoCarrito.id === producto.id) {
                    return { ...existe, cantidad: existe.cantidad + cantidad }
                } else return productoCarrito
            }))

            let suma = cantidad + cantidadTotal
            setCantidadTotal(suma)
            setTotal(total + producto.precio * cantidad)
        } else {
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.precio * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    }

    const removerProducto = id => {
        carrito.forEach(producto => {
          if (producto.id === id) {
            producto.cantidad === 1 ? producto.cantidad = 1 : producto.cantidad -= 1;
            calculoPrecio(producto, producto.cantidad)
            setCantidadTotal(cantidadTotal - 1)
          }
          setCarrito([...carrito])
        })
      }

    const  agregaProdUnidad = id => {   
        carrito.forEach(producto => {
        if (producto.id === id) {
          producto.cantidad += 1;
          calculoPrecio(producto, producto.cantidad)
          setCantidadTotal(cantidadTotal + 1)
        }
        setCarrito([...carrito])
  
      })
    }


    const calculoPrecio = () => {
        const precioFinal = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
        setTotal(precioFinal)
    }


    const valorDelContexto = {
        productos: carrito,
        total: total,
        menu: [menu, setMenu],
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarProducto: borrarProducto,
        calculoPrecio: calculoPrecio,
        removerProducto: removerProducto,
        agregaProdUnidad: agregaProdUnidad
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default ContextProvider