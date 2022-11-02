import React from "react";
import Item from "./Item";

function ItemDetail({ ...item }) {
    return (
        <>
            <div className='details__main__container'>
                               <div className='details__side__container'>
                    <div className='details__text__container'>
                        <h2 className='details__title'>{item.nombre}</h2>
                        <p className='details__description'>{item.descripcion}</p>
                    </div>
                    <div className='details__price__container'>
                        <span className='details__price'>${item.precio}</span>
                    </div>
                    <div className="details__btn__container">
                    <button className='details__btn'>COMPRAR</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ItemDetail