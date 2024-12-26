import { useRef, useState } from "react"
import Contactame from "./components/Contactame"
import Header from "./components/Header"
import Proyectos from "./components/Proyectos"
import SobreMi from "./components/SobreMi"
import { ParticlesBG } from "./components/ui/ParticlesBG"
import { Toaster } from "react-hot-toast"

function App() {

  const [activeMenu, setActiveMenu] = useState('inicio')

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const onMenuSelect = (name: string) => {
    setActiveMenu(name);
    switch (name) {
      case 'inicio':
        scrollToSection(section1Ref)
        break;
      case 'sobreMi':
        scrollToSection(section2Ref)
        break;
      case 'proyectos':
        scrollToSection(section3Ref)
        break;
      case 'contacto':
        scrollToSection(section4Ref)
        break;
    
      default:
        scrollToSection(section1Ref)
        break;
    }
  }

  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_auto_auto_auto_auto] m-auto font-Kdam relative">
      <Header sectionRef={section1Ref} 
        onMenuSelect={onMenuSelect}
        activeMenu={activeMenu}
      />
      <SobreMi sectionRef={section2Ref} />
      <Proyectos sectionRef={section3Ref} />
      <Contactame sectionRef={section4Ref} />
      {/* Footer */}
      <div className="w-full border-t border-[#7b828c60] z-30 p-4 text-center">
        <span className="text-secondary">Por Kevin Blas - 2025</span>
      </div>
        
      <ParticlesBG />
      <Toaster />
    </div>
  )
}

export default App
