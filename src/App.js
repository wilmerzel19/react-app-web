import React from "react";
import { useState } from "react";
import {
  MdReorder, MdAccountCircle, MdArrowBack,
  MdHome,
  MdQueueMusic,
  MdLocationOn,
  MdOutlineInsertEmoticon,
  MdHelp,
} from "react-icons/md";

function App() {
  const [mostrar, setMostrar] = useState(0);



  return (
    <>
      <header>
        <header className="flex items-center justify-between text-center bg-cyan-800 text-white p-4 border-b-4 border-red-500 shadow-2xl shadow-cyan-500">
          <span 
                    onClick={() => setMostrar(1)}

          className=" rounded text-white p-4 shadow-yellow-500" ><MdReorder size={'30'} /></span>
          

          <div>
            <h1 className="text-center text-2xl">Sistema de Ventas</h1>
            <p>Respuestos de veh&iacute;culos y motocicletas</p>
          </div>
          <span><MdAccountCircle size={'40'} /></span>


          <div
            onClick={() => setMostrar(0)}
            className={`${mostrar ? 'fixed' : 'hidden'
              } inset-0 z-20 bg-gray-500 bg-opacity-50 backdrop-blur-sm transition-all duration-500 ease-in-out`}></div>

          <aside
            className={`h-screen w-11/12 lg:w-3/12 p-4 fixed
        top-0 left-0 bottom-0 bg-white
        shadow-lg shadow-gray-500 text-red-500 z-50 transition duration-500 ease-in-out
        ${mostrar ? 'translate-x-0' : '-translate-x-full'}`}>
            <h2 className="flex items-center justify-between text-2xl font-bold">
              <span>
                <MdArrowBack
                  size={40}
                  onClick={() => setMostrar(0)}
                  className="hover:cursor-pointer hover:text-cyan-400 active:text-yellow-400"
                />
              </span>
              <span>Men&uacute;</span>
            </h2>
            <ul id="menu">
              <li>
                <a href="#">
                  <span className="icono">
                    <MdHome size={36} />
                  </span>
                  <span className="texto">Inicio</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icono">
                    <MdQueueMusic size={36} />
                  </span>
                  <span className="texto">Eventos</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icono">
                    <MdLocationOn size={36} />
                  </span>
                  <span className="texto">Sedes</span>
                </a>
              </li>
              <li>
                <a href="#">
                
                  <span className="icono">
                    <MdOutlineInsertEmoticon size={36} />
                  </span>
                  <span className="texto">Promociones</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icono">
                    <MdHelp size={36} />
                  </span>
                  <span className="texto">Ayuda</span>
                </a>
              </li>
            </ul>
          </aside>

        </header>


      </header>
      <main>
        <section>


        </section>

      </main>

      <footer className="fixed bottom-0 left-0 right-0">
        <p className="text-center text-white bg-cyan-800 p-4">Todos los derechos reservados &copy;2023 </p>


      </footer>




    </>

  );

}

export default App;