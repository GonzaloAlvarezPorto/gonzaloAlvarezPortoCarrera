import React from 'react'

export const Perfil = () => {
    return (
        <div className="p-1rem d-flex fd-col minW-50vw bdb_1_s_bd-lt fs-11px md-fs-16px">
            <p className="borde3d titulos bgc-section bdrad-2px p-1rem">
                Sobre mí:
            </p>
            <div className='fc-white borde3d bgc-section d-flex fd-col p-1rem g-2rem bdrad-2px'>
                <div className='d-flex fd-col g-0_5rem'>
                    <p className='fc-titulos'>Nombre:</p>
                    <p>Gonzalo Alvarez Porto</p>
                </div>
                <div className='d-flex fd-col g-0_5rem'>
                    <p className='fc-titulos'>Título:</p>
                    <p>Técnico Superior en Desarrollo de Aplicaciones Web</p>
                </div>
                <div className='d-flex fd-col g-0_5rem'>
                    <p className='fc-titulos'>Procedencia:</p>
                    <p>Avellaneda, Buenos Aires, Argentina</p>
                </div>
            </div>
            <div className='fc-white borde3d bgc-section d-flex fd-col p-1rem g-1rem bdrad-2px'>
                <p>
                    Con más de 10 años de experiencia en administración, especialmente en ventas y logística,
                    me especialicé en diseñar soluciones que agilizan y ordenan procesos, facilitando la gestión
                    diaria sin depender de sistemas complejos. Mi enfoque siempre estuvo en hacer más con menos,
                    simplificando y mejorando la eficiencia.
                </p>
                <p>
                    Al mismo tiempo, amplié mi camino profesional hacia el desarrollo web,
                    aprendiendo tecnologías modernas como React, Next.js y Sass, y trabajando con herramientas como
                    Firebase y Google Sheets. Esta combinación me permite crear soluciones digitales prácticas y
                    adaptadas a las necesidades reales de las empresas y emprendedores.
                </p>
                <p>
                    Me apasiona construir herramientas que simplifiquen la gestión,
                    mejoren la comunicación y ayuden a los negocios a crecer de manera ágil y eficiente.
                    Creo que la tecnología debe ser una aliada accesible que potencie el trabajo de las personas,
                    y eso es lo que busco lograr con cada proyecto.
                </p>
            </div>
        </div>
    )
}
