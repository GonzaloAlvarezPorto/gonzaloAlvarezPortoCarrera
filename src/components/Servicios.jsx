import React, { useContext, useState } from 'react';
import data from '../data/servicios.json';
import { CartContext } from '../context/CartContext';

export const Servicios = () => {
  const { empujarBloque, onMouseEnPagina, onMouseEnter } = useContext(CartContext);

  const servicios = data;

  // Crear un estado para almacenar la visibilidad de cada párrafo y su min-height
  const [estilos, setEstilos] = useState(servicios.map(() => ({ display: 'none', minHeight: '0px' })));

  // Función para cambiar el display y min-height
  const cambiarEstilo = (index) => {
    setEstilos((prevEstilos) => {
      const newEstilos = [...prevEstilos];
      newEstilos[index] = {
        display: newEstilos[index].display === 'none' ? 'flex' : 'none',
        minHeight: newEstilos[index].minHeight === '0px' ? '100px' : '0px'
      };
      return newEstilos;
    });
  }

  // Función para determinar el mensaje de onMouseEnter
  const handleMouseEnter = (index, titulo) => {
    const display = estilos[index].display;
    const mensaje = display === 'none' ? `Empujar ${titulo}` : `Tirar ${titulo}`;
    onMouseEnter(mensaje);
  }

  return (
    <>
      <div className="p-1rem bdb_1_s_bd-lt">
        <div className="bgc-section" >
          <p className="borde3d titulos p-1rem ">Servicios</p>
          <div className='d-flex fd-col borde3d p-1rem fc-white fs-11px md-fs-16px g-1rem'>
            <p className="">
              Al dedicarme a la creación y desarrollo de sitios web para individuos,
              negocios u organizaciones, el objetivo principal es ofrecer diseños web que sean
              visualmente atractivos, funcionales y alineados con las necesidades y objetivos del cliente.
              Aquí hay algunas de las principales actividades:
            </p>
            <ul className="ls-none d-flex fd-col g-0_5rem w-100">
              {servicios.length > 0 ? (
                servicios.map((servicio, index) => (
                  <li key={index} className="d-flex fd-col ai-center g-0_5rem w-100" onMouseEnter={empujarBloque} onMouseLeave={onMouseEnPagina} style={{ minHeight: estilos[index].minHeight }}>
                    <button
                      className="w-100 md-w-50 borde3d h-50px fc-white fs-11px md-fs-16px bgc-main"
                      onMouseLeave={empujarBloque}
                      onMouseEnter={() => handleMouseEnter(index, servicio.titulo)}
                      onClick={() => cambiarEstilo(index)}
                    >
                      {servicio.titulo}
                    </button>
                    <div className="md-w-50 ta-center" onMouseEnter={() => onMouseEnter(`Tirar`)}
                      style={{ display: estilos[index].display }}>
                      {servicio.parrafo}
                    </div>
                  </li>
                ))
              ) : (
                <p>Sin servicios que ofrecer</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
