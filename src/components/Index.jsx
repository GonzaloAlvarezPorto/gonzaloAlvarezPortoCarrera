import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Main } from './Main';
import { Header } from './Header';
import { Perfil } from './Perfil';
import { Educacion } from './Educacion';
import { Servicios } from './Servicios';
import { Proyectos } from './Proyectos';

export const Index = () => {

    const { onMouseEnPagina } = useContext(CartContext);

    return (
        <main onMouseEnter={onMouseEnPagina}>
                <div className='bgc-main d-flex fd-col'>
                    <section id="main">
                        <Main />
                    </section>
                    <Header />
                    <section id="perfil">
                        <Perfil />
                    </section>
                    <section id='educacion'>
                        <Educacion />
                    </section>
                    <section id='servicios'>
                        <Servicios />
                    </section>
                    <section id='proyectos'>
                        <Proyectos />
                    </section>
                </div>
        </main>
    )
}

export default Index;