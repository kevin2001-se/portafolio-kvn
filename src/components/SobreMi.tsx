import { BiBriefcase } from "react-icons/bi";
import { experiencia, habilidades } from "../assets/data";
import { HiAcademicCap } from "react-icons/hi";

export default function SobreMi({sectionRef}: {sectionRef: React.MutableRefObject<null>}) {
  return (
    <div ref={sectionRef} className="md:px-4 z-30 lg:px-20 py-10">
      {/* Sobre mi */}
      <div className="w-full bg-light p-5 py-10 md:p-14 lg:p-20 md:rounded-xl grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        <div>
          <div className="w-full h-[433px] bg-secondary">

          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="uppercase text-primary text-2xl md:text-[36px] mb-[15px]">Sobre Mi</h1>
          <p className="text-primary text-justify text-sm">Soy Kevin Blas, desarrollador FrontEnd con más de 3 años de experiencia. Actualmente, me desempeño como Analista de Sistemas, donde aplico mis conocimientos en Angular, .NET y SQL Server para crear soluciones efectivas y optimizar procesos.</p>
        </div>
      </div>
      {/* Experiencia */}
      <div className="w-full mt-20">
        <h1 className="text-center text-[40px] text-primary mb-4">MI EXPERIENCIA</h1>

        <p className="text-[15px] text-secondary mx-4 md:mx-14 text-justify">A lo largo de mi carrera como desarrollador web, he enfrentado diversos desafíos, comenzando con mis estudios, donde adquirí los conocimientos fundamentales (aunque actualmente continúo mi formación en la universidad con el objetivo de titularme como ingeniero). A lo largo de mi camino, también he invertido en varios cursos relacionados con el desarrollo web, y he evolucionado desde mis prácticas profesionales hasta llegar a mi empleo actual.</p>

        <div className="relative border-l-2 border-blue-500 mx-4 mt-5 md:mx-14">
      
          {
            experiencia.map(exp => (
              <div className="mb-10 ml-6" key={exp.title}>
                <div className="absolute w-10 h-10 bg-white -left-5 flex items-center justify-center">
                  <div className="h-8 w-8 bg-alternative rounded-full flex justify-center items-center">
                    {
                      exp.tipo === 'educacion' ? (<HiAcademicCap className="text-white text-2xl" />) : (<BiBriefcase className="text-white text-2xl" />)
                    }
                  </div>
                </div>
                <p className="text-sm text-gray-600 text-alternative">{exp.fecha}</p>
                <h3 className="text-lg font-semibold text-primary-active mb-1">{exp.title}</h3>
                <p className="text-xs text-secondary">
                    {exp.text}
                </p>
              </div>
            ))
          }
        </div>
      </div>
      {/* Habilidades */}
      <div className="w-full mt-20">

        <h1 className="text-center text-[40px] text-primary mb-4">MIS HABILIDADES</h1>

        <p className="text-[15px] text-secondary mx-4 md:mx-14 text-center">En esta sección, mostraré todas las habilidades que he adquirido en el desarrollo de software a lo largo de mi carrera</p>

        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-center mx-4 mt-5">
          {
            habilidades.map(skill => (
              <div className="w-full p-3 flex justify-center items-center" key={skill.name}>
                <img src={`svg/skills/${skill.name}.svg`} alt={skill.name} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
