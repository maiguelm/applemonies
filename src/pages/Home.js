import React from "react"
import { Link } from "react-router-dom"
import Wallpaper from "../img/wallpaper.jpg"



const Home = () => {

    return (
            <div className="home">
                <h1>LEMONIES</h1>
                <img src={Wallpaper} alt="fotografía de facturas" />
                <p>Somos un grupo de emprendedores dedicados a la pastelería. Realizamos nuestro trabajo con placer y dedicacion, y utilizando productos de primera calidad dando como resultado productos excelentes, que gustan a todo aquél que prueba! Haga click <Link to="./productos">aqui</Link> para ver el catálogo</p>
            </div>
    )
}

export default Home