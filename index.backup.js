import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



/* CONTEXT
const [producto, setProducto] = useState([])
const [carrito, setCarrito] = useState(["prod1", "prod2"])
const [total, setTotal] = useState(0)
const [unidad, setUnidad] = useState(0)
const [menu, setMenu] = useState(false)



const vaciarCarrito = () => {
  setCarrito([])
  setTotal(0)
}

const agregarAlCarrito = (producto, cantidad) => {
  
}

useEffect(() =>{
  localStorage.setItem("carrito",JSON.stringify(carrito))
},[carrito])

useEffect (() =>{
  const storageCarrito = JSON.parse(localStorage.getItem("carrito"))
  if(storageCarrito){
    setCarrito(storageCarrito)
  }
}, [])


const contextValue = {
  producto: [producto, setProducto],
  total: total,
  unidad: unidad,
  menu: [menu, setMenu],
  carrito: [carrito, setCarrito], 
  setCarrito: setCarrito,
  setTotal: setTotal,
  setUnidad: setUnidad,
  agregarAlCarrito: agregarAlCarrito,
  vaciarCarrito: vaciarCarrito
}

*/