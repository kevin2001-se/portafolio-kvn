// import ButtomPrimary from "./ui/ButtomPrimary";

export default function Proyectos({sectionRef}: {sectionRef: React.MutableRefObject<null>}) {
  return (
    <div ref={sectionRef} className="md:px-4 z-30 lg:px-20 py-16">
      <h1 className="text-center text-[40px] text-primary mb-4">PROYECTOS PERSONALES</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 cursor-pointer mx-4">
        
        <a href="https://676cdb32c6eae62e1fec7240--rococo-sunburst-838710.netlify.app/" target="_blank" className={`block shadow-lg h-80 lg:h-72 xl:h-80 rounded-lg overflow-hidden group bg-[url('/img/proyecto-todo.png')] bg-cover bg-center`}>
          <div className="bg-[#176b87de] w-full h-full p-4 pt-10 relative hidden group-hover:block">
            <h1 className="text-white text-lg">TO DO List</h1>
            <p className="text-white text-[12px]">Aplicación básica para la gestión de tareas que permite a los usuarios registrar, visualizar, editar y eliminar tareas de manera sencilla.</p>
            <span className="bg-white text-alternative p-1 text-xs absolute top-0 left-0">
              React
            </span>
          </div>
        </a>
        
        <a href="https://quiet-tarsier-b5d1d7.netlify.app/" target="_blank" className={`block shadow-lg h-80 lg:h-72 xl:h-80 rounded-lg overflow-hidden group bg-[url('/img/proyecto-peliculas.png')] bg-cover bg-center`}>

          <div className="bg-[#176b87de] w-full h-full p-4 pt-10 relative hidden group-hover:block">
            <h1 className="text-white text-lg">Buscador de Peliculas</h1>
            <p className="text-white text-[12px]">Aplicación para buscar películas utilizando la API de The Movie Database (TMDB), con acceso a información detallada como sinopsis, puntuaciones y más.</p>
            <span className="bg-white text-alternative p-1 text-xs absolute top-0 left-0">
              React + Context + Axios
            </span>
          </div>
        </a>
      </div>
      {/* <div className="mt-8 flex justify-center">
        <ButtomPrimary>
          Ver más
        </ButtomPrimary>
      </div> */}
    </div>
  )
}
