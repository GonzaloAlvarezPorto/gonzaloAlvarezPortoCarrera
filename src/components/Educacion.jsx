import React, { useContext, useState } from 'react';
import educacion from '../data/educacion.json';
import { CartContext } from '../context/CartContext';

export const Educacion = () => {
    const formacion = educacion.formacion || [];
    const herramientas = educacion.herramientasDeMicrosoftOffice || [];
    const idiomas = educacion.idiomas || [];

    // Estado para almacenar el curso seleccionado
    const [cursoSeleccionado, setCursoSeleccionado] = useState(null);

    const formacionOrdenada = formacion.sort((a, b) => {
        const fechaA = a.periodo.includes('Presente') ? new Date() : new Date(a.periodo.split('-')[1]);
        const fechaB = b.periodo.includes('Presente') ? new Date() : new Date(b.periodo.split('-')[1]);
        return fechaB - fechaA;
    });

    // Función para manejar la selección de curso
    const handleCursoClick = (curso) => {
        // Si se hace clic en el mismo curso, se deselecciona
        setCursoSeleccionado(curso === cursoSeleccionado ? null : curso);
    };

    const { mensaje, onMouseEnter, onMouseEnterCoderHouse, onMouseEnPagina } = useContext(CartContext);

    return (
        <>
            <div className="p-1rem d-flex fd-col minW-50vw bdb_1_s_bd-lt fs-11px md-fs-16px g-0_5rem">
                <div className='bgc-section' onMouseEnter={onMouseEnterCoderHouse} onMouseLeave={onMouseEnPagina}>
                    <p className='borde3d titulos bdrad-2px p-1rem'>
                        Formación Académica:
                    </p>
                    <div className='bgc-section bdrad-2px'>
                        {formacionOrdenada.length > 0 ? (
                            formacionOrdenada.map((item, index) => (
                                <div key={index} className="borde3d p-1rem d-flex fd-col fc-white g-2rem">
                                    <div className='d-flex fd-col g-1rem'>
                                        <div className='d-flex fd-row jc-between ai-center'>
                                            <p>{item.institucion}</p>
                                            <img className='w-25px' src={item.logo} alt={`${item.institucion} logo`} />
                                        </div>
                                        <p>{item.tipo}</p>
                                    </div>
                                    <div className='d-flex fd-row jc-between ai-center'>
                                        <div className='d-flex fd-row g-0_5rem ai-center'>
                                            <p>{item.ubicacion}</p>
                                            <img className='w-25px' src={item.bandera} alt={`${item.ubicacion} bandera`} />
                                        </div>
                                        <p>{item.periodo}</p>
                                    </div>
                                    <div className='d-flex fd-col g-1rem'>
                                        <div className=''>
                                            {Array.isArray(item.temas) ? (
                                                <div className=''>
                                                    <ul className='ls-none'>
                                                        {item.temas.map((tema, idx) => (
                                                            <li className='' key={idx}>
                                                                ➖ {tema}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className='d-flex fd-col ai-center g-1rem'>
                                                    <div className='d-flex fd-col ai-center w-100 md-fd-row'>
                                                        {Object.keys(item.temas).map((curso, idx) => (
                                                            <button
                                                                className={`fs-11px md-fs-16px w-100 h-60px bgc-main borde3d md-w-25 fc-white ${cursoSeleccionado === curso ? 'active' : ''}`}
                                                                key={idx}
                                                                onClick={() => handleCursoClick(curso)}
                                                                onMouseEnter={() => onMouseEnter(`Desplegar ${curso}`)}
                                                                onMouseLeave={onMouseEnterCoderHouse}
                                                            >
                                                                {curso}
                                                            </button>
                                                        ))}
                                                    </div>
                                                    <div className={`${cursoSeleccionado ? 'visible' : 'none'}`}>
                                                        {cursoSeleccionado ? (
                                                            Object.entries(item.temas).map(([curso, temas], idx) => (
                                                                curso === cursoSeleccionado && (
                                                                    <div className='d-flex fd-row fw-wr jc-center' key={idx}>
                                                                        <ul className='d-flex fd-row fw-wr ai-center jc-center g-1rem'>
                                                                            {temas.map((tema, temaIdx) => (
                                                                                <li className='d-flex fd-row g-0_5rem ai-center ls-none' key={temaIdx}>
                                                                                    <img className='h-25px' src={tema.imagen} alt={tema.nombre} />
                                                                                    {tema.nombre}
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )
                                                            ))
                                                        ) : (
                                                            <p className='d-none'>Elige una de las opciones</p>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No hay datos disponibles.</p>
                        )}
                    </div>
                </div>
                <div className="bgc-section d-flex fd-col">
                    <p className='fc-titulos titulos p-1rem borde3d'>
                        Habilidades:
                    </p>
                    <div className='borde3d p-1rem fc-white d-flex fd-col ai-center g-1rem'>
                        {herramientas.map((herramienta, index) => (
                            <div className='d-flex fd-col ai-center g-1rem' key={index}>
                                {herramienta.habilidades.map((habilidad, idx) => (
                                    <div key={idx} className="d-flex fd-col md-fd-row ai-center g-1rem">
                                        <p>{habilidad.nombre}</p>
                                        <img className='w-50px' src={habilidad.logo} alt={habilidad.nombre} />
                                        <p className='ta-center'>{habilidad.descripcion}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bgc-section d-flex fd-col">
                    <p className='fc-titulos titulos p-1rem borde3d'>
                        Idiomas:
                    </p>
                    <div className='d-flex fd-col g-1rem'>
                        {idiomas.map((idioma, index) => (
                            <div className='d-flex fd-col g-1rem' key={index}>
                                {idiomas.map((idioma, idx) => (
                                    <div key={idx} className="d-flex fd-col md-fd-row g-1rem md-jc-between p-1rem borde3d fc-white ai-center">
                                        <p>{idioma.idioma}</p>
                                        <div className='d-flex fd-col md-fd-row g-0_5rem md-g-1rem ai-center'>
                                            <p>Nivel Conversacional: </p>
                                            <div className='d-flex w-100px h-20px bd_2_s_shadow bgc-main'>
                                                <div className='w-80 h-100 bgc-titulos'></div>
                                            </div>
                                            <p>{idioma.nivelOral}</p>
                                        </div>
                                        <div className='d-flex fd-col md-fd-row g-0_5rem md-g-1rem ai-center'>
                                            <p>Nivel Escrito:</p>
                                            <div className='d-flex w-100px h-20px bd_2_s_shadow bgc-main'>
                                                <div className='w-80 h-100 bgc-titulos'></div>
                                            </div>
                                            <p>{idioma.nivelEscrito}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
};

export default Educacion;
