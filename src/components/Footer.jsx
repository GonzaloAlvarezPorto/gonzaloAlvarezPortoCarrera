import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import data from '../data/redes.json'

export const Footer = () => {

    const { onMouseEnter, onMouseLeave, onMouseEnFooter, onMouseEnPagina } = useContext(CartContext);

    const redes = data;

    return (
        <footer>
                <div className="d-flex jc-center p-0_5rem bgc-footer ai-center" onMouseEnter={onMouseEnFooter} onMouseLeave={onMouseEnPagina}>
                    <div className="d-flex fd-row g-0_5rem">
                        {redes.length > 0 ? (
                            redes.map((red, index) => (
                                <a key={index} className="d-flex fd-row ai-center jc-center h-100" href={red.enlaceRed} target="_blank" title={red.nombreRed}>
                                    <img className={`w-40px ${red.nombreRed.toLocaleLowerCase()}`} onMouseEnter={() => onMouseEnter('Hablar con Gonzalo por ' + red.nombreRed)} onMouseLeave={onMouseEnFooter} src={red.imagenRed} alt={red.nombreRed} title={red.nombreRed} />
                                </a>
                            ))) : (
                            <p>No tengo redes</p>
                            )}
                    </div>
                </div>
                <p className="bgc-black fc-derechos ta-center p-0_5rem">
                    Copyright © 2024. Todos los derechos reservados
                </p>
        </footer>
    )
}
