import NavBar from "./NavBar";
import profile from '../assets/svg/profile.svg'
import ButtomPrimary from "./ui/ButtomPrimary";

type HeaderProps = {
  sectionRef: React.MutableRefObject<null>,
  onMenuSelect: (name: string) => void,
  activeMenu: string
}

export default function Header({sectionRef, onMenuSelect, activeMenu}: HeaderProps) {

  const downloadFileCV = () => {
    const link = document.createElement('a');
    link.href = 'doc/documento de prueba.pdf'; // URL del archivo
    link.download = 'cv-kevin-blas.pdf'; // Nombre del archivo descargado
    link.click();  // Simula el clic en el enlace
  };

  return (
    <div ref={sectionRef} className="min-h-screen relative z-50">
        {/* Navegación */}
        <NavBar onMenuSelect={onMenuSelect} activeMenu={activeMenu} />

        {/* banner */}
        <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
            <img className="m-auto" src={profile} alt="profile kevin" />
            <h1 className="mt-4 mb-1 text-2xl text-primary">KEVIN BLAS</h1>
            <p className="text-secondary text-[15px] mb-[11px]">Hola, Soy FrontEnd Developer</p>
            <ButtomPrimary funcClick={downloadFileCV}>
                Descargar cv
            </ButtomPrimary>
        </div>

    </div>
  )
}
