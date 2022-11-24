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
	const [count, setCount] = useState(1);


    useEffect (() =>{
        const storageCarrito = JSON.parse(localStorage.getItem("carrito"))
        const storageCantidad = JSON.parse(localStorage.getItem("cantidad"))
        const storagePrecio = JSON.parse(localStorage.getItem("precioFinal"))
        if(storageCarrito){
          setCarrito(storageCarrito)
          setCantidadTotal(storageCantidad)
          setTotal(storagePrecio)
        }
      }, [])

    useEffect(() =>{
        localStorage.setItem("carrito",JSON.stringify(carrito))
        localStorage.setItem("cantidad", JSON.stringify(cantidadTotal))
        localStorage.setItem("precioFinal", JSON.stringify(total))
      },[carrito])
      

    const vaciarCarrito = () => {
        setCarrito([])
        setTotal(0)
        setCantidadTotal(0)
    }

    const borrarProducto = id =>{
		carrito.forEach((producto, index)=>{
				if(producto.id === id){
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
            console.log(suma)
        } else {
            console.log("producto nuevo en el carrito!")
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
            setTotal(total + producto.precio * cantidad)
            setCantidadTotal(cantidadTotal + cantidad)
        }
    }
  

    const calculoPrecio = () =>{
       const precioFinal = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)
        setTotal(precioFinal)
    }
    

    const valorDelContexto = {
        productos: [carrito, setCarrito],
        total: [total, setTotal],
        cantidadTotal :[cantidadTotal, setCantidadTotal] ,
        vaciarCarrito: vaciarCarrito,
        agregarProducto: agregarProducto,
        borrarProducto: borrarProducto,
        menu: [menu, setMenu],
        calculoPrecio: calculoPrecio,
        count: [count, setCount]
     }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default ContextProvider