import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { Menu } from './Menu'

export const Header = () => {

    const { mensaje, onMouseEnter, onMouseEnterEncabezado, onMouseEnPagina } = useContext(CartContext)

    return (
        <header>
            <div className="d-flex fd-row ai-center jc-between px-1rem w-100 h-60px" onMouseEnter={onMouseEnterEncabezado} onMouseLeave={onMouseEnPagina}>
                <div className='d-flex g-1rem fd-row ai-start'>
                    <a className='d-flex' href="#main">
                        <img className='h-50px bd_1_s_white as-center' src='/media/img/minimalista.png' onMouseEnter={() => onMouseEnter('Mover a inicio')}
                            onMouseLeave={onMouseEnterEncabezado} />
                    </a>
                    <div className='fc-white as-center w-150px md-w-100 fs-11px'>
                        {mensaje}
                    </div>
                </div>
                <Menu />
            </div>
        </header>
    )
}
