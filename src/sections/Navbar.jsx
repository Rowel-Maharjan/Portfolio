import React, { useState } from 'react'
import { navLinks } from '../config'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    const NavItems = () => {
        return (
            <ul className='nav-ul'>
                {navLinks.map((link) => (
                    <a onClick={() => setIsOpen(false)} key={link.id} href={link.href} className='nav-li_a'>
                        <li className='nav-li'>{link.name}</li>
                    </a>
                ))}
            </ul>
        )
    }

    return (
        <>
            <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 text-white'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex justify-between items-center py-5 mx-auto c-space'>
                        <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors duration-500 flex '>
                            <img className='w-8 h-8 mr-2' src={"assets/logo.png"} alt="Logo Not found" />
                            Rowel

                        </a>
                        <button onClick={toggleMenu} className='sm:hidden flex' aria-label='Toggle menu'>
                            <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="Toggle" className='w-6 h-6' />
                        </button>
                        <nav className='sm:flex hidden'>
                            <NavItems />
                        </nav>

                    </div>
                </div>
                <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <nav className='p-5'>
                        <NavItems />
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar
