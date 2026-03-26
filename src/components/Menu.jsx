import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const Menu = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => setIsVisible(prev => !prev);
    const handleClose = () => setIsVisible(false);

    return (
        <>
            <button className='bgc-black borde3d fc-white h-40px z-idx-1000 w-65px bdrad-2px as-center txt-shadow md-d-none' onClick={handleToggle}>
                {isVisible ? 'GAME OVER' : 'PRESS START'}
            </button>

            <div className={`menu ${isVisible ? 'visible' : ''} md-visible`}>
                <>
                    {/* Overlay */}
                    {isVisible && <div className="overlay md-d-none" onClick={handleClose}></div>}

                    {/* Menu */}
                    <div className="menu visible">
                        <ul className='ls-none mr-1rem d-flex fd-col md-fd-row jc-around md-m-0'>
                            <li className='h-50px d-flex ai-center bgc-section borde3d bdrad-2px w-100'><a className='p-1rem fc-white td-none ta-center w-100' href="#perfil">PERFIL</a></li>
                            <li className='h-50px d-flex ai-center bgc-section borde3d bdrad-2px w-100'><a className='p-1rem fc-white td-none ta-center w-100' href="#educacion">EDUCACIÓN</a></li>
                            <li className='h-50px d-flex ai-center bgc-section borde3d bdrad-2px w-100'><a className='p-1rem fc-white td-none ta-center w-100' href="#servicios">SERVICIOS</a></li>
                            <li className='h-50px d-flex ai-center bgc-section borde3d bdrad-2px w-100'><a className='p-1rem fc-white td-none ta-center w-100' href="#proyectos">PROYECTOS</a></li>
                        </ul>
                    </div>
                </>
            </div>
        </>
    );
};