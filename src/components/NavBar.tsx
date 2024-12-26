import gitHub from '../assets/svg/mark-github.svg'
import linkedin from '../assets/svg/Social Icons - linkedind.svg'
import google from '../assets/svg/Social Icons - google.svg'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

export default function NavBar({onMenuSelect, activeMenu} : {onMenuSelect: (name: string) => void, activeMenu: string}) {

    const [openNav, setOpenNav] = useState(false)

    return (
        <nav className={`lg:px-20 max-lg:px-4 py-5 grid grid-cols-[1fr_auto] lg:grid-cols-3 border-b border-sombra text-primary fixed top-0 w-full bg-white z-50`}>

            <h1 className="text-xl lg:text-[28px] bg-white">KVN DEV</h1>

            <ul className={`flex flex-col lg:flex-row justify-center gap-5 text-sm items-center absolute lg:relative bg-white w-full max-lg:border-b max-lg:border-sombra max-lg:py-3 max-lg:-z-10
                ${openNav ? 'max-lg:top-[100%] max-lg:opacity-100 max-lg:transition-all' : 'max-lg:top-[-320px] max-lg:opacity-0 max-lg:transition-all' }
            `}>
                <li className={`hover:text-primary-active ${activeMenu === 'inicio' ? 'text-primary-active' : 'text-primary'} transition-all max-lg:py-2 cursor-pointer`} onClick={() => onMenuSelect('inicio')}>Inicio</li>
                <li className={`hover:text-primary-active ${activeMenu === 'sobreMi' ? 'text-primary-active' : 'text-primary'} transition-all max-lg:py-2 cursor-pointer`} onClick={() => onMenuSelect('sobreMi')}>Sobre Mi</li>
                <li className={`hover:text-primary-active ${activeMenu === 'proyectos' ? 'text-primary-active' : 'text-primary'} transition-all max-lg:py-2 cursor-pointer`} onClick={() => onMenuSelect('proyectos')}>Proyectos</li>
                <li className={`hover:text-primary-active ${activeMenu === 'contacto' ? 'text-primary-active' : 'text-primary'} transition-all max-lg:py-2 cursor-pointer`} onClick={() => onMenuSelect('contacto')}>Contacto</li>
            </ul>
            
            <ul className="hidden lg:flex justify-end gap-5 items-center">
                <li><a href="https://github.com/kevin2001-se" target='_blank'><img className='w-[20px]' src={gitHub} alt="Mi GitHub" /></a></li>
                <li><a href="https://www.linkedin.com/in/kevin-sebastian-2001/" target='_blank'><img className='w-[20px]' src={linkedin} alt="Mi Linkedin" /></a></li>
                <li><a href="mailto:cblash14@gmail.com" target='_blank'><img className='w-[20px]' src={google} alt="Mi gmail" /></a></li>
            </ul>

            <div className='lg:hidden'>
                <FaBars className='cursor-pointer text-2xl' onClick={() => setOpenNav(!openNav)} />
            </div>
        </nav>
    )
}
