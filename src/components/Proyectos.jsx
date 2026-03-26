import React, { useContext, useState } from 'react';
import data from '../data/proyectos.json';
import { CartContext } from '../context/CartContext';

export const Proyectos = () => {
  const proyectos = data;

  const { onMouseEnPagina, onMouseEnter, abrirProyecto } = useContext(CartContext);

  // Estado para manejar el índice del proyecto visible actual
  const [indiceActivo, setIndiceActivo] = useState(0);

  // Funciones para manejar la navegación de la galería
  const siguienteProyecto = () => {
    setIndiceActivo((prevIndice) => (prevIndice + 1) % proyectos.length);
  };

  const anteriorProyecto = () => {
    setIndiceActivo((prevIndice) => (prevIndice - 1 + proyectos.length) % proyectos.length);
  };

  return (
    <div className='p-1rem'>
      <div className="d-flex fd-row fs-11px md-fs-16px bgc-section ai-center g-1rem" onMouseEnter={abrirProyecto} onMouseLeave={onMouseEnPagina}>
        {proyectos.length > 0 ? (
          <div className="d-flex w-100 fd-col ai-center">
            <div className="fc-white ta-center borde3d p-1rem w-100">
              {proyectos[indiceActivo].tipoDeProyecto}
            </div>
            <div className="fs-italic borde3d p-1rem fc-derechos w-100 ta-center">
              {proyectos[indiceActivo].descripcionProyecto}
            </div>
            <div className="d-flex fd-row w-100 borde3d p-1rem">
              <div className="d-flex w-100 fd-row ai-center jc-center g-2rem">
                <button className='d-flex ai-center h-50px w-50px bgc-main borde3d' onMouseEnter={() => onMouseEnter('Anterior')} onMouseLeave={abrirProyecto} onClick={anteriorProyecto}>
                  <img className='w-100 p-0_5rem' src='./media/img/flechaIzquierda.png' />
                </button>
                <a
                  className="w-40px"
                  href={proyectos[indiceActivo].URLProyecto}
                  target="_blank"
                  title={proyectos[indiceActivo].nombreProyecto}
                  onMouseEnter={() => onMouseEnter(`Abrir ${proyectos[indiceActivo].nombreProyecto}`)}
                  onMouseLeave={abrirProyecto}
                >

                  <img
                    className="w-40px"
                    src={proyectos[indiceActivo].logoProyecto}
                    alt={proyectos[indiceActivo].nombreProyecto}
                  />
                </a>
                <button className='d-flex ai-center h-50px w-50px bgc-main borde3d' onMouseEnter={() => onMouseEnter('Siguiente')} onMouseLeave={abrirProyecto} onClick={siguienteProyecto}>
                  <img className='w-100 p-0_5rem' src='./media/img/flechaDerecha.png' />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Sin proyectos que mostrar</p>
        )}

      </div>
    </div>
  );
};
